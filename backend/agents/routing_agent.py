import os
from pathlib import Path
from datetime import datetime
from typing import Dict, Any
from backend.agents.base_agent import BaseAgent
from backend.services.storage_service import storage_service

from backend.services.rules_service import rules_service

class RoutingAgent(BaseAgent):
    """
    Agent 5: Folder Routing & Organization Agent
    Accesses the uploaded file in staging, determines target directory via dynamic rules,
    physically moves and organizes the file into the specific folder,
    creates directory tree, writes folder manifest, and indexes in database.
    """
    def __init__(self):
        super().__init__(
            key="route",
            name="Routing Agent",
            role="Directory Resolution, File Dispatching & Database Indexing"
        )

    def execute(self, state: Dict[str, Any]) -> Dict[str, Any]:
        source_path = Path(state["file_path"])
        category = state.get("category", "Report")
        validation_status = state.get("validation_status", "PASS")

        self.log(f"Evaluating routing rules engine for {category}…", "info")

        # Evaluate rules engine
        routing_eval = rules_service.evaluate_routing(state)
        rule_name = routing_eval["matched_rule_name"]
        route_category = routing_eval["category"]
        subfolder = routing_eval["subfolder"]
        target_display = routing_eval["folder"]

        self.log(f"Matched Rule: '{rule_name}'", "info")
        self.log(f"Target directory resolved: {target_display}", "info")

        # Physically move and route the file into the designated folder
        route_result = storage_service.route_file(
            source_path=source_path,
            category=route_category,
            subfolder=subfolder if subfolder else None,
        )

        dest_path = route_result["destination_path"]
        routed_folder = route_result["folder"]

        self.log(f"Copied file: {source_path.name} -> {routed_folder}", "ok")
        self.log("Routing complete ✓", "ok")

        state["folder"] = routed_folder
        state["destination_path"] = dest_path
        state["routed_filename"] = route_result["filename"]
        state["physical_path"] = dest_path
        state["matched_rule"] = {
            "id": routing_eval["matched_rule_id"],
            "name": rule_name,
        }
        state["status"] = "review" if validation_status != "PASS" else "routed"
        state["routed_at"] = datetime.now().isoformat()
        state["routing_logs"] = self.logs
        return state
