import time
import uuid
import threading
import queue
from pathlib import Path
from datetime import datetime
from typing import Dict, Any, Optional, Callable, List

from backend.agents.ocr_agent import OcrAgent
from backend.agents.classification_agent import ClassificationAgent
from backend.agents.extraction_agent import EntityExtractionAgent
from backend.agents.validation_agent import ValidationAgent
from backend.agents.routing_agent import RoutingAgent
from backend.services.storage_service import format_bytes
from backend.services.compliance_service import compliance_service

class MultiAgentPipeline:
    """
    CogniFlow 5-Agent Autonomous Orchestrator with Reflection & Event Streaming.
    Executes OCR, Classification, Entity Extraction, Validation, and Routing sequentially,
    enables autonomous agent self-reflection on compliance anomalies,
    computes per-agent performance metrics, and supports real-time SSE streaming.
    """
    def __init__(self):
        self.ocr_agent = OcrAgent()
        self.classify_agent = ClassificationAgent()
        self.extract_agent = EntityExtractionAgent()
        self.validate_agent = ValidationAgent()
        self.route_agent = RoutingAgent()

        # In-memory task tracking
        self.tasks: Dict[str, Dict[str, Any]] = {}
        # In-memory batch tracking
        self.batches: Dict[str, Dict[str, Any]] = {}
        # Event queues for SSE clients: task_id -> list of Queue objects
        self.listeners: Dict[str, List[queue.Queue]] = {}
        self._lock = threading.Lock()
        self.current_stage = "idle"

    def _execute_agent(self, agent, state: Dict[str, Any], stage: str) -> Dict[str, Any]:
        self.current_stage = stage
        try:
            return agent.execute(state)
        except Exception as error:
            raise RuntimeError(f"{stage} agent failed ({type(error).__name__}): {error}") from error

    def subscribe_task(self, task_id: str) -> queue.Queue:
        """Register an event queue for real-time SSE updates on a task."""
        q = queue.Queue(maxsize=100)
        with self._lock:
            if task_id not in self.listeners:
                self.listeners[task_id] = []
            self.listeners[task_id].append(q)
        return q

    def unsubscribe_task(self, task_id: str, q: queue.Queue):
        with self._lock:
            if task_id in self.listeners and q in self.listeners[task_id]:
                self.listeners[task_id].remove(q)
                if not self.listeners[task_id]:
                    del self.listeners[task_id]

    def _publish_event(self, task_id: str, event_type: str, data: Dict[str, Any]):
        with self._lock:
            queues = list(self.listeners.get(task_id, []))
        for q in queues:
            try:
                q.put_nowait({"event": event_type, "data": data})
            except queue.Full:
                pass

    def run_pipeline(
        self,
        file_path: Path,
        user_name: str = "Authorized User",
        original_file_name: Optional[str] = None,
        task_id: Optional[str] = None,
        on_progress: Optional[Callable[[Dict[str, Any]], None]] = None,
    ) -> Dict[str, Any]:
        task_id = task_id or str(uuid.uuid4())
        file_name = file_path.name
        file_size = file_path.stat().st_size if file_path.exists() else 0
        pipeline_start = time.time()
        self.current_stage = "OCR"

        initial_state = {
            "task_id": task_id,
            "file_path": str(file_path),
            "file_name": file_name,
            "original_file_name": original_file_name or file_name,
            "file_size": file_size,
            "file_size_formatted": format_bytes(file_size),
            "user_name": user_name,
            "user_id": None,
            "status": "processing",
            "active_stage": "ocr",
            "active_index": 1,
            "progress_pct": 10,
            "logs": {
                "ocr": [],
                "classify": [],
                "extract": [],
                "validate": [],
                "route": [],
            },
            "metrics": {
                "ocr_ms": 0,
                "classify_ms": 0,
                "extract_ms": 0,
                "validate_ms": 0,
                "route_ms": 0,
                "total_ms": 0,
            },
            "timeline": [],
            "created_at": datetime.now().isoformat(),
        }

        self.tasks[task_id] = initial_state
        self._publish_event(task_id, "start", initial_state)
        if on_progress:
            on_progress(initial_state)

        # -------------------------------------------------------------
        # Agent 1: OCR & Ingestion Agent
        # -------------------------------------------------------------
        self.ocr_agent.start_timer(pipeline_start)
        self.tasks[task_id]["active_stage"] = "ocr"
        self.tasks[task_id]["active_index"] = 1
        self.tasks[task_id]["progress_pct"] = 25
        t_ocr0 = time.time()
        state = self._execute_agent(self.ocr_agent, initial_state, "OCR")
        ocr_ms = int((time.time() - t_ocr0) * 1000)
        self.tasks[task_id]["metrics"]["ocr_ms"] = ocr_ms
        self.tasks[task_id]["logs"]["ocr"] = self.ocr_agent.logs
        self._publish_event(task_id, "agent_step", {"stage": "ocr", "ms": ocr_ms, "logs": self.ocr_agent.logs})
        if on_progress:
            on_progress(self.tasks[task_id])

        # -------------------------------------------------------------
        # Agent 2: Classification Agent
        # -------------------------------------------------------------
        self.classify_agent.start_timer(pipeline_start)
        self.tasks[task_id]["active_stage"] = "classify"
        self.tasks[task_id]["active_index"] = 2
        self.tasks[task_id]["progress_pct"] = 45
        t_cls0 = time.time()
        state = self._execute_agent(self.classify_agent, state, "Classification")
        cls_ms = int((time.time() - t_cls0) * 1000)
        self.tasks[task_id]["metrics"]["classify_ms"] = cls_ms
        self.tasks[task_id]["logs"]["classify"] = self.classify_agent.logs
        self._publish_event(task_id, "agent_step", {"stage": "classify", "ms": cls_ms, "logs": self.classify_agent.logs})
        if on_progress:
            on_progress(self.tasks[task_id])

        # -------------------------------------------------------------
        # Agent 3: Entity Extraction Agent
        # -------------------------------------------------------------
        self.extract_agent.start_timer(pipeline_start)
        self.tasks[task_id]["active_stage"] = "extract"
        self.tasks[task_id]["active_index"] = 3
        self.tasks[task_id]["progress_pct"] = 65
        t_ext0 = time.time()
        state = self._execute_agent(self.extract_agent, state, "Extraction")
        ext_ms = int((time.time() - t_ext0) * 1000)
        self.tasks[task_id]["metrics"]["extract_ms"] = ext_ms
        self.tasks[task_id]["logs"]["extract"] = self.extract_agent.logs
        self._publish_event(task_id, "agent_step", {"stage": "extract", "ms": ext_ms, "logs": self.extract_agent.logs})
        if on_progress:
            on_progress(self.tasks[task_id])

        # -------------------------------------------------------------
        # Agent 4: Validation Agent
        # -------------------------------------------------------------
        self.validate_agent.start_timer(pipeline_start)
        self.tasks[task_id]["active_stage"] = "validate"
        self.tasks[task_id]["active_index"] = 4
        self.tasks[task_id]["progress_pct"] = 80
        t_val0 = time.time()
        state = self._execute_agent(self.validate_agent, state, "Validation")
        val_ms = int((time.time() - t_val0) * 1000)

        # -------------------------------------------------------------
        # Autonomous Agent Self-Reflection Loop
        # If any validation rule failed, trigger reflection between Agent 3 & 4
        # -------------------------------------------------------------
        failed_rules = [r for r in state.get("validation_rules", []) if not r.get("passed")]
        if failed_rules:
            self.tasks[task_id]["active_stage"] = "reflection"
            self.tasks[task_id]["progress_pct"] = 85
            state = self.extract_agent.refine_extraction(state, failed_rules)
            if state.get("self_correction_count", 0) > 0:
                # Re-validate with self-corrected entities
                state = self._execute_agent(self.validate_agent, state, "Validation")
                val_ms += int((time.time() - t_val0) * 1000)
                state["self_corrected"] = True

        self.tasks[task_id]["metrics"]["validate_ms"] = val_ms
        self.tasks[task_id]["logs"]["validate"] = self.validate_agent.logs
        self.tasks[task_id]["logs"]["extract"] = self.extract_agent.logs
        self._publish_event(task_id, "agent_step", {"stage": "validate", "ms": val_ms, "logs": self.validate_agent.logs})
        if on_progress:
            on_progress(self.tasks[task_id])

        # -------------------------------------------------------------
        # Agent 5: Routing & File Organization Agent
        # -------------------------------------------------------------
        self.route_agent.start_timer(pipeline_start)
        self.tasks[task_id]["active_stage"] = "route"
        self.tasks[task_id]["active_index"] = 5
        self.tasks[task_id]["progress_pct"] = 95
        t_rt0 = time.time()
        state = self._execute_agent(self.route_agent, state, "Routing")
        rt_ms = int((time.time() - t_rt0) * 1000)
        self.tasks[task_id]["metrics"]["route_ms"] = rt_ms
        self.tasks[task_id]["logs"]["route"] = self.route_agent.logs
        self._publish_event(task_id, "agent_step", {"stage": "route", "ms": rt_ms, "logs": self.route_agent.logs})
        if on_progress:
            on_progress(self.tasks[task_id])

        # Calculate total execution duration
        total_pipeline_ms = int((time.time() - pipeline_start) * 1000)
        self.tasks[task_id]["metrics"]["total_ms"] = total_pipeline_ms

        # Construct complete timeline
        now_str = datetime.now().strftime("%H:%M:%S")
        timeline = [
            {
                "agent": "Upload",
                "detail": f"File received · {format_bytes(file_size)}",
                "at": now_str,
                "state": "done",
            },
            {
                "agent": "OCR Agent",
                "detail": f"Extracted {state.get('pages', 1)} page(s) · {state.get('tokens', 0):,} tokens · {ocr_ms}ms",
                "at": now_str,
                "state": "done",
            },
            {
                "agent": "Classification Agent",
                "detail": f"{state.get('category')} · {state.get('confidence')}% confidence · {cls_ms}ms",
                "at": now_str,
                "state": "done",
            },
            {
                "agent": "Entity Extraction Agent",
                "detail": f"Extracted {state.get('extracted_fields_count', 0)} entities ({state.get('summary')}) · {ext_ms}ms",
                "at": now_str,
                "state": "done",
            },
            {
                "agent": "Validation Agent",
                "detail": f"Verdict: {state.get('validation_status')} · Score: {state.get('validation_score')}%" + (" (Self-Corrected ✓)" if state.get("self_corrected") else ""),
                "at": now_str,
                "state": "done",
            },
            {
                "agent": "Routing Agent",
                "detail": f"Dispatched and stored in {state.get('folder')} · Rule: {state.get('matched_rule', {}).get('name', 'Default')}",
                "at": now_str,
                "state": "done",
            },
        ]

        doc_record = {
            "id": task_id,
            "name": file_name,
            "user_id": initial_state.get("user_id"),
            "cat": state.get("category", "Report"),
            "conf": state.get("confidence", 95.0),
            "status": state.get("status", "routed"),
            "folder": state.get("folder", "/Reports"),
            "date": "just now",
            "size": format_bytes(file_size),
            "pages": state.get("pages", 1),
            "tokens": state.get("tokens", 0),
            "uploadedBy": user_name,
            "extracted": state.get("extracted_text", ""),
            "summary": state.get("summary", ""),
            "entities": state.get("entities", {}),
            "validation": state.get("validation_rules", []),
            "validation_score": state.get("validation_score", 100),
            "validation_status": state.get("validation_status", "PASS"),
            "self_corrected": state.get("self_corrected", False),
            "matched_rule": state.get("matched_rule", {}),
            "metrics": self.tasks[task_id]["metrics"],
            "timeline": timeline,
            "logs": self.tasks[task_id]["logs"],
            "physical_path": state.get("physical_path", ""),
            "security": state.get("security", {}),
            "created_at": datetime.now().isoformat(),
        }

        # Register document in compliance cryptographic registry
        try:
            compliance_service.register_document(doc_record)
        except Exception as e:
            print(f"[Pipeline] Warning: Compliance registration failed: {e}")

        # Update final task status
        self.tasks[task_id].update({
            "status": "completed",
            "active_stage": "done",
            "active_index": 6,
            "progress_pct": 100,
            "doc": doc_record,
        })

        self._publish_event(task_id, "complete", self.tasks[task_id])
        self.current_stage = "idle"

        if on_progress:
            on_progress(self.tasks[task_id])

        return doc_record

    def run_pipeline_async(self, file_path: Path, user_name: str = "Authorized User") -> str:
        """Run the 5-agent pipeline asynchronously in a background thread."""
        task_id = str(uuid.uuid4())
        self.tasks[task_id] = {
            "task_id": task_id,
            "file_name": file_path.name,
            "status": "queued",
            "progress_pct": 0,
            "active_stage": "upload",
            "active_index": 0,
            "logs": {"ocr": [], "classify": [], "extract": [], "validate": [], "route": []},
            "metrics": {},
        }

        thread = threading.Thread(
            target=self.run_pipeline,
            args=(file_path, user_name),
            kwargs={"task_id": task_id},
            daemon=True,
        )
        thread.start()
        return task_id

    def run_batch(
        self,
        file_paths: List[Path],
        user_name: str = "Authorized User",
        batch_id: Optional[str] = None
    ) -> Dict[str, Any]:
        """Process a batch of documents sequentially through the multi-agent pipeline."""
        batch_id = batch_id or f"batch_{str(uuid.uuid4())[:8]}"
        t_batch0 = time.time()

        batch_state = {
            "batch_id": batch_id,
            "status": "processing",
            "total_files": len(file_paths),
            "processed_count": 0,
            "success_count": 0,
            "review_count": 0,
            "total_tokens": 0,
            "results": [],
            "created_at": datetime.now().isoformat(),
        }
        self.batches[batch_id] = batch_state

        for fp in file_paths:
            try:
                res = self.run_pipeline(fp, user_name=user_name)
                batch_state["processed_count"] += 1
                batch_state["results"].append({
                    "id": res["id"],
                    "filename": fp.name,
                    "category": res.get("cat"),
                    "folder": res.get("folder"),
                    "status": res.get("status"),
                    "score": res.get("validation_score"),
                })
                if res.get("status") == "routed":
                    batch_state["success_count"] += 1
                else:
                    batch_state["review_count"] += 1
                batch_state["total_tokens"] += res.get("tokens", 0)
            except Exception as e:
                batch_state["processed_count"] += 1
                batch_state["results"].append({
                    "filename": fp.name,
                    "status": "error",
                    "error": str(e)
                })

        batch_state["status"] = "completed"
        batch_state["duration_ms"] = int((time.time() - t_batch0) * 1000)
        return batch_state

    def run_batch_async(self, file_paths: List[Path], user_name: str = "Authorized User") -> str:
        batch_id = f"batch_{str(uuid.uuid4())[:8]}"
        self.batches[batch_id] = {
            "batch_id": batch_id,
            "status": "queued",
            "total_files": len(file_paths),
            "processed_count": 0,
            "results": [],
        }
        thread = threading.Thread(
            target=self.run_batch,
            args=(file_paths, user_name, batch_id),
            daemon=True,
        )
        thread.start()
        return batch_id

    def get_task_status(self, task_id: str) -> Optional[Dict[str, Any]]:
        return self.tasks.get(task_id)

    def get_batch_status(self, batch_id: str) -> Optional[Dict[str, Any]]:
        return self.batches.get(batch_id)

pipeline = MultiAgentPipeline()
