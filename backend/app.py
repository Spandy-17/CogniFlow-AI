import json
import queue
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from flask import Flask, Response, jsonify, request, stream_with_context
from flask_cors import CORS

from backend.config import SERVER_HOST, SERVER_PORT
from backend.orchestrator.pipeline import pipeline
from backend.services.rules_service import rules_service
from backend.services.storage_service import storage_service

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 50 * 1024 * 1024
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.errorhandler(413)
def file_too_large(_error):
    return jsonify({"error": "File exceeds the 50 MB upload limit."}), 413


@app.route("/api/health", methods=["GET"])
def health_check():
    """Report backend availability and registered processing agents."""
    return jsonify({
        "status": "online",
        "service": "CogniFlow Multi-Agent Intelligence Engine",
        "version": "1.1.0",
        "agents": [
            {"key": "ocr", "name": "OCR Agent", "role": "Ingestion, Layout & Token Extraction"},
            {"key": "classify", "name": "Classification Agent", "role": "Category Prediction & Confidence"},
            {"key": "extract", "name": "Entity Extraction Agent", "role": "Domain Attribute & Metadata Parsing"},
            {"key": "validate", "name": "Validation Agent", "role": "Schema Integrity & Compliance Checks"},
            {"key": "route", "name": "Routing Agent", "role": "Physical Folder Organization & Indexing"},
        ],
    })


@app.route("/api/process", methods=["POST"])
def process_document():
    """Accept an actual user upload and execute it through the backend agents."""
    uploaded_file = request.files.get("file")
    if not uploaded_file or not uploaded_file.filename:
        return jsonify({"error": "Upload a file to process."}), 400
    user_id = request.form.get("user_id")
    if not user_id:
        return jsonify({"error": "An authenticated user ID is required."}), 401

    try:
        saved = storage_service.save_upload(uploaded_file, uploaded_file.filename)
        result_doc = pipeline.run_pipeline(
            Path(saved["path"]),
            user_name=request.form.get("user_name") or "Member",
            original_file_name=saved["original_name"],
        )
        result_doc["user_id"] = user_id
        return jsonify({
            "message": "Document processed by the backend agent pipeline.",
            "document": result_doc,
        })
    except Exception as error:
        app.logger.exception("Document agent processing failed")
        return jsonify({
            "error": str(error) or "Document processing failed.",
            "stage": pipeline.current_stage,
        }), 500


@app.route("/api/process/status/<task_id>", methods=["GET"])
def get_pipeline_status(task_id: str):
    task = pipeline.get_task_status(task_id)
    if not task:
        return jsonify({"error": "Task not found"}), 404
    return jsonify(task)


@app.route("/api/process/stream/<task_id>", methods=["GET"])
def stream_pipeline_status(task_id: str):
    task = pipeline.get_task_status(task_id)
    if not task:
        return jsonify({"error": "Task not found"}), 404

    def generate_events():
        listener = pipeline.subscribe_task(task_id)
        try:
            current = pipeline.get_task_status(task_id)
            if current:
                yield f"data: {json.dumps({'event': 'initial', 'data': current})}\n\n"
                if current.get("status") == "completed":
                    return
            while True:
                try:
                    message = listener.get(timeout=15.0)
                    yield f"data: {json.dumps(message)}\n\n"
                    if message.get("event") == "complete":
                        break
                except queue.Empty:
                    yield ": heartbeat\n\n"
        finally:
            pipeline.unsubscribe_task(task_id, listener)

    return Response(
        stream_with_context(generate_events()),
        mimetype="text/event-stream",
        headers={"Cache-Control": "no-cache", "Connection": "keep-alive", "X-Accel-Buffering": "no"},
    )


@app.route("/api/rules", methods=["GET"])
def get_rules():
    rules = rules_service.load_rules()
    return jsonify({"rules": rules, "total": len(rules)})


@app.route("/api/rules", methods=["POST"])
def upsert_rule():
    data = request.get_json() or {}
    if not data.get("name") or not data.get("target_folder"):
        return jsonify({"error": "Rule requires 'name' and 'target_folder'"}), 400
    return jsonify({"message": "Rule saved successfully", "rule": rules_service.upsert_rule(data)})


@app.route("/api/rules/<rule_id>", methods=["DELETE"])
def delete_rule(rule_id: str):
    if not rules_service.delete_rule(rule_id):
        return jsonify({"error": "Rule not found"}), 404
    return jsonify({"message": "Rule removed successfully"})


if __name__ == "__main__":
    print(f"[*] Starting CogniFlow Multi-Agent Backend on http://{SERVER_HOST}:{SERVER_PORT}")
    app.run(host=SERVER_HOST, port=SERVER_PORT, debug=False)
