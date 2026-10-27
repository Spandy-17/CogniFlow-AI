import os
import json
import re
from datetime import datetime
from pathlib import Path
from typing import Dict, Any, List, Optional
from backend.config import STORAGE_DIR

RULES_FILE = STORAGE_DIR / "routing_rules.json"

DEFAULT_RULES = [
    {
        "id": "rule_security_threat",
        "name": "Security Threat Quarantine",
        "description": "Immediately quarantine documents flagged with malware, macros, or scripts",
        "priority": 1,
        "enabled": True,
        "condition": {
            "field": "security.threat_detected",
            "operator": "equals",
            "value": True
        },
        "target_category": "Review",
        "target_subfolder": "Quarantine",
        "target_folder": "/Needs_Review/Quarantine"
    },
    {
        "id": "rule_duplicate_quarantine",
        "name": "Duplicate Document Isolation",
        "description": "Route duplicate documents (identical SHA-256 or text match) to duplicates folder",
        "priority": 1,
        "enabled": True,
        "condition": {
            "field": "security.is_duplicate",
            "operator": "equals",
            "value": True
        },
        "target_category": "Review",
        "target_subfolder": "Duplicates",
        "target_folder": "/Needs_Review/Duplicates"
    },
    {
        "id": "rule_expired_quarantine",
        "name": "Expired Document Review",
        "description": "Route expired certificates, contracts, and invoices to dedicated audit review",
        "priority": 1,
        "enabled": True,
        "condition": {
            "field": "security.is_expired",
            "operator": "equals",
            "value": True
        },
        "target_category": "Review",
        "target_subfolder": "Expired",
        "target_folder": "/Needs_Review/Expired"
    },
    {
        "id": "rule_quarantine_fail",
        "name": "Validation Failure Quarantine",
        "description": "Route documents failing critical compliance checks to quarantine",
        "priority": 2,
        "enabled": True,
        "condition": {
            "field": "validation_status",
            "operator": "equals",
            "value": "FAIL"
        },
        "target_category": "Review",
        "target_subfolder": "Quarantine",
        "target_folder": "/Needs_Review/Quarantine"
    },
    {
        "id": "rule_low_confidence",
        "name": "Low Confidence Review",
        "description": "Flag documents with classification confidence under 75% for manual review",
        "priority": 3,
        "enabled": True,
        "condition": {
            "field": "confidence",
            "operator": "less_than",
            "value": 75.0
        },
        "target_category": "Review",
        "target_subfolder": "Low_Confidence",
        "target_folder": "/Needs_Review/Low_Confidence"
    },
    {
        "id": "rule_high_value_invoice",
        "name": "High Value Invoices",
        "description": "Direct invoices totaling $5,000 or greater into dedicated High-Value audit archive",
        "priority": 5,
        "enabled": True,
        "condition": {
            "field": "entities.total_amount",
            "operator": "numeric_greater_than",
            "value": 5000.0
        },
        "target_category": "Invoice",
        "target_subfolder": "High_Value",
        "target_folder": "/Invoices/High_Value"
    },
    {
        "id": "rule_invoice_standard",
        "name": "Standard Invoice Year Routing",
        "description": "Organize verified commercial invoices by current calendar year",
        "priority": 10,
        "enabled": True,
        "condition": {
            "field": "category",
            "operator": "equals",
            "value": "Invoice"
        },
        "target_category": "Invoice",
        "target_subfolder": "{year}",
        "target_folder": "/Invoices/{year}"
    },
    {
        "id": "rule_certificate_standard",
        "name": "Certificate & Accreditation Routing",
        "description": "File certified academic and professional credentials by year",
        "priority": 10,
        "enabled": True,
        "condition": {
            "field": "category",
            "operator": "equals",
            "value": "Certificate"
        },
        "target_category": "Certificate",
        "target_subfolder": "{year}",
        "target_folder": "/Certificates/{year}"
    },
    {
        "id": "rule_contract_standard",
        "name": "Legal Agreement & NDA Routing",
        "description": "Archive mutual NDAs, master service agreements, and corporate contracts",
        "priority": 10,
        "enabled": True,
        "condition": {
            "field": "category",
            "operator": "equals",
            "value": "Contract"
        },
        "target_category": "Contract",
        "target_subfolder": None,
        "target_folder": "/Contracts"
    },
    {
        "id": "rule_transcript_standard",
        "name": "Official Academic Transcript Routing",
        "description": "Index student transcripts, GPA scorecards, and university registrar files",
        "priority": 10,
        "enabled": True,
        "condition": {
            "field": "category",
            "operator": "equals",
            "value": "Transcript"
        },
        "target_category": "Transcript",
        "target_subfolder": None,
        "target_folder": "/Transcripts"
    },
    {
        "id": "rule_report_standard",
        "name": "Executive & Operational Reports",
        "description": "Sort analytical summaries, Q1/Q4 reports, and audit documents by year",
        "priority": 10,
        "enabled": True,
        "condition": {
            "field": "category",
            "operator": "equals",
            "value": "Report"
        },
        "target_category": "Report",
        "target_subfolder": "{year}",
        "target_folder": "/Reports/{year}"
    },
    {
        "id": "rule_data_standard",
        "name": "Dataset & Spreadsheet Routing",
        "description": "Organize verified datasets, spreadsheets, rosters, and data tables by year",
        "priority": 10,
        "enabled": True,
        "condition": {
            "field": "category",
            "operator": "equals",
            "value": "Data"
        },
        "target_category": "Data",
        "target_subfolder": "{year}",
        "target_folder": "/Data/{year}"
    },
    {
        "id": "rule_spreadsheet_format",
        "name": "Spreadsheet Format Routing",
        "description": "Direct Excel (.xlsx, .xls) and CSV datasets into Data archive",
        "priority": 12,
        "enabled": True,
        "condition": {
            "field": "file_name",
            "operator": "regex",
            "value": r"\.(xlsx|xls|csv|tsv)$"
        },
        "target_category": "Data",
        "target_subfolder": "{year}",
        "target_folder": "/Data/{year}"
    },
    {
        "id": "rule_default_fallback",
        "name": "Default Archive Fallback",
        "description": "Catch-all routing for uncategorized or miscellaneous documents",
        "priority": 99,
        "enabled": True,
        "condition": {
            "field": "always",
            "operator": "true",
            "value": True
        },
        "target_category": "Other",
        "target_subfolder": "{year}",
        "target_folder": "/Archive/{year}"
    }
]

class RulesService:
    """
    Manages custom and predefined routing rules for Agent 5 (Routing Agent).
    Allows user-configured routing rules, priority sorting, and condition evaluation.
    """
    def __init__(self):
        self._ensure_rules_file()

    def _ensure_rules_file(self):
        if not RULES_FILE.exists():
            STORAGE_DIR.mkdir(parents=True, exist_ok=True)
            with open(RULES_FILE, "w", encoding="utf-8") as f:
                json.dump(DEFAULT_RULES, f, indent=2)

    def load_rules(self) -> List[Dict[str, Any]]:
        self._ensure_rules_file()
        try:
            with open(RULES_FILE, "r", encoding="utf-8") as f:
                rules = json.load(f)
                existing_ids = {r.get("id") for r in rules}
                updated = False
                for d in DEFAULT_RULES:
                    if d["id"] not in existing_ids:
                        rules.append(d)
                        updated = True
                if updated:
                    self.save_rules(rules)
                return sorted(rules, key=lambda r: r.get("priority", 50))
        except Exception as e:
            print(f"[RulesService] Error reading rules file: {e}")
            return DEFAULT_RULES

    def save_rules(self, rules: List[Dict[str, Any]]):
        with open(RULES_FILE, "w", encoding="utf-8") as f:
            json.dump(rules, f, indent=2, ensure_ascii=False)

    def reset_defaults(self) -> List[Dict[str, Any]]:
        self.save_rules(DEFAULT_RULES)
        return DEFAULT_RULES

    def upsert_rule(self, rule_data: Dict[str, Any]) -> Dict[str, Any]:
        rules = self.load_rules()
        rule_id = rule_data.get("id") or f"rule_{int(datetime.now().timestamp())}"
        rule_data["id"] = rule_id
        rule_data.setdefault("enabled", True)
        rule_data.setdefault("priority", 10)

        existing_idx = next((i for i, r in enumerate(rules) if r["id"] == rule_id), None)
        if existing_idx is not None:
            rules[existing_idx] = rule_data
        else:
            rules.append(rule_data)

        self.save_rules(rules)
        return rule_data

    def delete_rule(self, rule_id: str) -> bool:
        rules = self.load_rules()
        filtered = [r for r in rules if r["id"] != rule_id]
        if len(filtered) == len(rules):
            return False
        self.save_rules(filtered)
        return True

    def evaluate_routing(self, state: Dict[str, Any]) -> Dict[str, Any]:
        """
        Evaluates the document state through enabled rules in priority order.
        Returns the winning rule and resolved destination paths.
        """
        rules = self.load_rules()
        current_year = str(datetime.now().year)

        for rule in rules:
            if not rule.get("enabled", True):
                continue

            cond = rule.get("condition", {})
            if self._matches_condition(cond, state):
                # Resolve templates like {year} in subfolder and folder
                target_cat = rule.get("target_category", state.get("category", "Other"))
                target_sub = rule.get("target_subfolder")
                if target_sub:
                    target_sub = target_sub.replace("{year}", current_year)
                
                target_folder = rule.get("target_folder", f"/{target_cat}")
                target_folder = target_folder.replace("{year}", current_year)

                return {
                    "matched_rule_id": rule.get("id"),
                    "matched_rule_name": rule.get("name"),
                    "category": target_cat,
                    "subfolder": target_sub,
                    "folder": target_folder,
                }

        # Fallback if no rule matched
        category = state.get("category", "Report")
        return {
            "matched_rule_id": "fallback",
            "matched_rule_name": "System Default Routing",
            "category": category,
            "subfolder": current_year,
            "folder": f"/{category}/{current_year}",
        }

    def _matches_condition(self, cond: Dict[str, Any], state: Dict[str, Any]) -> bool:
        field = cond.get("field", "")
        op = cond.get("operator", "equals")
        target_val = cond.get("value")

        if field == "always" or op == "true":
            return True

        # Resolve dotted field like "entities.total_amount"
        actual_val = self._resolve_field(field, state)

        if op == "equals":
            return str(actual_val).strip().lower() == str(target_val).strip().lower()
        elif op == "not_equals":
            return str(actual_val).strip().lower() != str(target_val).strip().lower()
        elif op == "contains":
            return str(target_val).strip().lower() in str(actual_val).strip().lower()
        elif op == "less_than":
            try:
                return float(actual_val) < float(target_val)
            except (ValueError, TypeError):
                return False
        elif op == "greater_than":
            try:
                return float(actual_val) > float(target_val)
            except (ValueError, TypeError):
                return False
        elif op == "numeric_greater_than":
            # Strip $, commas, spaces from actual_val
            try:
                clean_num = re.sub(r"[^\d.]", "", str(actual_val))
                return float(clean_num) >= float(target_val)
            except (ValueError, TypeError):
                return False
        elif op == "regex":
            try:
                return bool(re.search(str(target_val), str(actual_val), re.IGNORECASE))
            except Exception:
                return False

        return False

    def _resolve_field(self, field_path: str, data: Dict[str, Any]) -> Any:
        parts = field_path.split(".")
        current = data
        for p in parts:
            if isinstance(current, dict):
                current = current.get(p)
            else:
                return None
        return current

rules_service = RulesService()
