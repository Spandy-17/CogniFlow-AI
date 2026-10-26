export const PYTHON_BACKEND_URL =
  typeof window !== "undefined"
    ? (window as Window & { __COGNIFLOW_BACKEND_URL__?: string }).__COGNIFLOW_BACKEND_URL__ || "http://127.0.0.1:5000"
    : "http://127.0.0.1:5000";

export type BackendHealth = {
  status: string;
  service: string;
  version: string;
  agents: { key: string; name: string; role: string }[];
};

export async function checkBackendHealth(): Promise<{ ok: boolean; data?: BackendHealth; error?: string }> {
  try {
    const response = await fetch(`${PYTHON_BACKEND_URL}/api/health`, {
      method: "GET",
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return { ok: true, data: await response.json() };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Failed to reach the Python backend." };
  }
}
