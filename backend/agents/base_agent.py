import time
from abc import ABC, abstractmethod
from typing import Dict, Any, List

class BaseAgent(ABC):
    """
    Abstract Base Class for CogniFlow Autonomous Agents.
    Every agent maintains its own execution logs, elapsed stopwatch, and task logic.
    """
    def __init__(self, key: str, name: str, role: str):
        self.key = key
        self.name = name
        self.role = role
        self.logs: List[Dict[str, str]] = []
        self._start_time: float = 0.0

    def start_timer(self, pipeline_start_time: float):
        self._start_time = pipeline_start_time
        self.logs = []

    def format_elapsed(self) -> str:
        """Format elapsed time as mm:ss.ms (e.g. 00:01.42)."""
        elapsed = time.time() - self._start_time
        minutes = int(elapsed // 60)
        seconds = elapsed % 60
        return f"{minutes:02d}:{seconds:05.2f}"

    def log(self, text: str, tone: str = "info"):
        """Add a timestamped log entry: tone can be 'info', 'ok', or 'warn'."""
        entry = {
            "time": self.format_elapsed(),
            "text": text,
            "tone": tone,
        }
        self.logs.append(entry)
        try:
            print(f"[{self.name}] {entry['time']} - {text}")
        except UnicodeEncodeError:
            safe_text = text.encode("ascii", errors="replace").decode("ascii")
            print(f"[{self.name}] {entry['time']} - {safe_text}")

    @abstractmethod
    def execute(self, state: Dict[str, Any]) -> Dict[str, Any]:
        """
        Execute the agent's task.
        Must receive and return the pipeline state dictionary.
        """
        pass
