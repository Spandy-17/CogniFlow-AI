import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Card, PageHeader } from "@/components/DashboardShell";
import {
  AlertCircle, Check, CheckCircle2, Clock3, Cpu, FileCheck2, FileText,
  FolderTree, Loader2, RefreshCw, ScanText, ShieldCheck, Sparkles, Zap,
} from "lucide-react";
import { checkBackendHealth, type BackendHealth } from "@/lib/python-backend";
import { fetchAllDocuments, processSavedDocument, type DocumentRecord } from "@/lib/document-service";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/ai-processing")({
  head: () => ({
    meta: [
      { title: "AI Processing Center · CogniFlow" },
      { name: "description", content: "Choose saved uploads and explicitly run them through backend AI agents." },
    ],
  }),
  component: ProcessingCenter,
});

const agentStages = [
  { key: "ocr", name: "OCR & Ingestion", icon: ScanText },
  { key: "classify", name: "Classification", icon: Sparkles },
  { key: "extract", name: "Entity Extraction", icon: Cpu },
  { key: "validate", name: "Validation", icon: ShieldCheck },
  { key: "route", name: "Routing", icon: FolderTree },
] as const;

function ProcessingCenter() {
  const [backendHealth, setBackendHealth] = useState<BackendHealth | null>(null);
  const [checking, setChecking] = useState(true);
  const [loadingDocuments, setLoadingDocuments] = useState(true);
  const [documents, setDocuments] = useState<DocumentRecord[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [activeDocument, setActiveDocument] = useState<DocumentRecord | null>(null);

  const pendingDocuments = useMemo(
    () => documents.filter((doc) => doc.status !== "processing"),
    [documents]
  );

  const refreshDocuments = useCallback(async () => {
    setLoadingDocuments(true);
    try {
      const latest = await fetchAllDocuments();
      setDocuments(latest);
      setSelectedIds((current) => {
        const valid = current.filter((id) => latest.some((doc) => doc.id === id && doc.status !== "processing"));
        if (valid.length > 0) return valid;
        // Pre-select documents needing processing by default so button is never locked
        const needsProcess = latest.filter((d) => d.status === "uploaded" || d.status === "error" || d.status === "review");
        if (needsProcess.length > 0) return needsProcess.map((d) => d.id);
        return latest.length > 0 ? [latest[0].id] : [];
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not load saved documents.");
    } finally {
      setLoadingDocuments(false);
    }
  }, []);

  const refreshBackend = useCallback(async () => {
    setChecking(true);
    const result = await checkBackendHealth();
    setBackendHealth(result.ok ? result.data || null : null);
    setChecking(false);
  }, []);

  useEffect(() => {
    void refreshBackend();
    void refreshDocuments();
  }, [refreshBackend, refreshDocuments]);

  const toggleSelected = (id: string) => {
    setSelectedIds((current) => current.includes(id) ? current.filter((value) => value !== id) : [...current, id]);
  };

  const processSelected = async () => {
    if (!backendHealth) {
      toast.error("AI Backend is offline. Please start the backend service first.");
      return;
    }
    if (processingId) return;

    let targetIds = selectedIds;
    if (targetIds.length === 0) {
      if (pendingDocuments.length === 0) {
        toast.info("No documents waiting for processing.");
        return;
      }
      targetIds = pendingDocuments.map((doc) => doc.id);
      setSelectedIds(targetIds);
    }

    const queue = pendingDocuments.filter((doc) => targetIds.includes(doc.id));
    for (const doc of queue) {
      setProcessingId(doc.id);
      setActiveDocument(null);
      setDocuments((current) => current.map((item) => item.id === doc.id ? { ...item, status: "processing" } : item));
      try {
        const completed = await processSavedDocument(doc);
        setActiveDocument(completed);
        setDocuments((current) => current.map((item) => item.id === completed.id ? completed : item));
        setSelectedIds((current) => current.filter((id) => id !== completed.id));
        toast.success(`${completed.name} processed and routed to ${completed.folder}.`);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Document processing failed.";
        setDocuments((current) => current.map((item) => item.id === doc.id ? { ...item, status: "error" } : item));
        toast.error(`${doc.name}: ${message}`);
      } finally {
        setProcessingId(null);
      }
    }
    await refreshDocuments();
  };

  const logs = activeDocument?.logs || {};
  const completedStages = new Set(activeDocument?.timeline.map((entry) => {
    const label = entry.agent.toLowerCase();
    if (label.includes("ocr")) return "ocr";
    if (label.includes("classification")) return "classify";
    if (label.includes("extraction")) return "extract";
    if (label.includes("validation")) return "validate";
    if (label.includes("routing")) return "route";
    return "";
  }) || []);

  return (
    <>
      <PageHeader
        title="AI Processing Center"
        subtitle="Uploads stay in My Documents until you select them and start the backend agent pipeline."
        actions={
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold ${backendHealth ? "border-success/30 bg-success/10 text-success" : "border-warning/30 bg-warning/10 text-warning"}`}>
              <span className={`size-2 rounded-full ${backendHealth ? "bg-success" : "bg-warning"}`} />
              {checking ? "Checking backend…" : backendHealth ? `Backend online · v${backendHealth.version}` : "Backend offline"}
            </span>
            <button onClick={() => { void refreshBackend(); void refreshDocuments(); }} className="rounded-xl border border-border bg-background/60 p-2 hover:bg-secondary" title="Refresh backend and uploads">
              <RefreshCw className={`size-4 ${checking || loadingDocuments ? "animate-spin" : ""}`} />
            </button>
          </div>
        }
      />

      {!backendHealth && !checking && (
        <div className="mb-4 flex items-center gap-3 rounded-2xl border border-warning/30 bg-warning/10 p-4 text-sm text-warning">
          <AlertCircle className="size-5 shrink-0" /> Start the Python backend to process selected uploads. Uploads already saved in My Documents will remain there.
        </div>
      )}

      <div className="grid items-start gap-4 xl:grid-cols-[0.95fr_1.4fr]">
        <Card className="!p-0 overflow-hidden">
          <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
            <div>
              <h2 className="text-sm font-bold">Saved uploads</h2>
              <p className="mt-1 text-xs text-muted-foreground">Select saved files to process or reprocess. Nothing routes before you start.</p>
            </div>
            <button onClick={() => void refreshDocuments()} className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground" aria-label="Refresh saved uploads">
              <RefreshCw className={`size-4 ${loadingDocuments ? "animate-spin" : ""}`} />
            </button>
          </div>

          {loadingDocuments ? (
            <div className="flex items-center justify-center gap-2 py-12 text-sm text-muted-foreground"><Loader2 className="size-4 animate-spin" /> Loading saved files…</div>
          ) : pendingDocuments.length === 0 ? (
            <div className="px-5 py-12 text-center">
              <FileCheck2 className="mx-auto size-9 text-muted-foreground/50" />
              <p className="mt-3 text-sm font-semibold">No uploads waiting for processing</p>
              <p className="mt-1 text-xs text-muted-foreground">Upload a file first. It will appear here without being processed.</p>
              <Link to="/dashboard/upload" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground"><FileText className="size-3.5" /> Go to Upload</Link>
            </div>
          ) : (
            <>
              <div className="max-h-[460px] divide-y divide-border/50 overflow-y-auto">
                {pendingDocuments.map((doc) => {
                  const selected = selectedIds.includes(doc.id);
                  const busy = processingId === doc.id;
                  return (
                    <label key={doc.id} className={`flex cursor-pointer items-start gap-3 px-5 py-4 transition ${selected ? "bg-primary/[0.06]" : "hover:bg-secondary/30"}`}>
                      <input type="checkbox" checked={selected} disabled={Boolean(processingId)} onChange={() => toggleSelected(doc.id)} className="mt-1 size-4 accent-primary" />
                      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><FileText className="size-5" /></div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">{doc.name}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{doc.size} · {doc.date}</p>
                        <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground">{busy ? <Loader2 className="size-3 animate-spin" /> : doc.status === "error" ? <AlertCircle className="size-3 text-destructive" /> : <Clock3 className="size-3" />}{busy ? "Running backend agents…" : doc.status === "error" ? "Previous run failed · retry available" : doc.status === "uploaded" ? "Saved · waiting for you to start" : `Status: ${doc.status} · select to reprocess`}</p>
                      </div>
                      <Link to="/dashboard/document/$docId" params={{ docId: doc.id }} onClick={(event) => event.stopPropagation()} className="text-[11px] font-semibold text-primary hover:underline">Details</Link>
                    </label>
                  );
                })}
              </div>
              <div className="flex items-center justify-between border-t border-border/60 bg-secondary/20 px-5 py-4">
                <button onClick={() => setSelectedIds(selectedIds.length === pendingDocuments.length ? [] : pendingDocuments.map((doc) => doc.id))} disabled={Boolean(processingId)} className="text-xs font-semibold text-primary hover:underline disabled:opacity-50">
                  {selectedIds.length === pendingDocuments.length ? "Clear selection" : "Select all"}
                </button>
                <button
                  onClick={() => void processSelected()}
                  disabled={Boolean(processingId) || !backendHealth}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {processingId ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Processing…
                    </>
                  ) : (
                    <>
                      <Zap className="size-4" />
                      {selectedIds.length > 0 ? `Process selected (${selectedIds.length})` : "Process all documents"}
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </Card>

        <div className="space-y-4">
          <Card>
            <div className="mb-5 flex items-center justify-between gap-3">
              <div><h2 className="text-sm font-bold">Five-agent pipeline</h2><p className="mt-1 text-xs text-muted-foreground">Runs only after you select files and press Process selected.</p></div>
              {processingId && <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"><Loader2 className="size-3.5 animate-spin" /> Processing {documents.find((doc) => doc.id === processingId)?.name || "file"}</span>}
            </div>
            <div className="grid gap-2 sm:grid-cols-5">
              {agentStages.map((agent, index) => {
                const Icon = agent.icon;
                const done = completedStages.has(agent.key);
                const busy = Boolean(processingId) && !completedStages.has(agent.key);
                return (
                  <div key={agent.key} className={`relative rounded-xl border p-3 text-center ${done ? "border-success/30 bg-success/5" : busy ? "border-primary/30 bg-primary/5" : "border-border bg-background/50"}`}>
                    <div className={`mx-auto grid size-9 place-items-center rounded-xl ${done ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"}`}>{done ? <Check className="size-4" /> : busy && index === 0 ? <Loader2 className="size-4 animate-spin text-primary" /> : <Icon className="size-4" />}</div>
                    <p className="mt-2 text-[11px] font-semibold">{agent.name}</p>
                    <p className="mt-1 text-[10px] text-muted-foreground">{done ? "Complete" : busy ? "Backend running" : "Waiting"}</p>
                  </div>
                );
              })}
            </div>
          </Card>

          {activeDocument ? (
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/60 pb-4">
                <div className="flex items-start gap-3"><div className="grid size-10 place-items-center rounded-xl bg-success/10 text-success"><CheckCircle2 className="size-5" /></div><div><p className="font-semibold">{activeDocument.name}</p><p className="mt-1 text-xs text-muted-foreground">{activeDocument.cat} · {activeDocument.conf}% confidence · {activeDocument.status}</p><p className="mt-1 text-xs text-muted-foreground">Routed to {activeDocument.folder}</p></div></div>
                <Link to="/dashboard/document/$docId" params={{ docId: activeDocument.id }} className="text-xs font-semibold text-primary hover:underline">View document</Link>
              </div>
              <div className="grid gap-3 pt-4 lg:grid-cols-2">
                {agentStages.map((agent) => {
                  const agentLogs = logs[agent.key] || [];
                  return <div key={agent.key} className="rounded-xl border border-border/70 bg-background/50 p-3">
                    <div className="mb-2 flex items-center justify-between"><p className="text-xs font-bold">{agent.name}</p><span className="text-[10px] text-muted-foreground">{agentLogs.length} backend log(s)</span></div>
                    {agentLogs.length ? <ul className="space-y-1.5">{agentLogs.map((log, index) => <li key={`${agent.key}-${index}`} className="flex gap-2 text-[11px] leading-relaxed"><span className="shrink-0 text-muted-foreground">{log.time}</span><span className={log.tone === "ok" ? "text-success" : log.tone === "warn" ? "text-warning" : "text-foreground/80"}>{log.text}</span></li>)}</ul> : <p className="text-[11px] text-muted-foreground">No logs returned by this agent.</p>}
                  </div>;
                })}
              </div>
              {activeDocument.timeline.length > 0 && <div className="mt-4 border-t border-border/60 pt-4"><p className="mb-2 text-xs font-bold">Processing timeline</p><ul className="space-y-2">{activeDocument.timeline.map((event, index) => <li key={`${event.agent}-${index}`} className="flex gap-2 text-xs"><CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-success" /><span className="font-medium">{event.agent}:</span><span className="text-muted-foreground">{event.detail}</span></li>)}</ul></div>}
              {activeDocument.summary && <p className="mt-4 rounded-xl bg-secondary/40 p-3 text-xs text-muted-foreground">{activeDocument.summary}</p>}
            </Card>
          ) : (
            <Card className="grid min-h-64 place-items-center text-center">
              <div><div className="mx-auto grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary"><FolderTree className="size-6" /></div><p className="mt-3 text-sm font-semibold">Choose a saved upload to begin</p><p className="mt-1 max-w-sm text-xs text-muted-foreground">Files are stored in the database first. Agent processing and folder routing happen only when you start the selected files above.</p></div>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
