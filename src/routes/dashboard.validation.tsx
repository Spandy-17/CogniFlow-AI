import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, PageHeader } from "@/components/DashboardShell";
import {
  CheckCircle2, XCircle, Clock, AlertTriangle, FileText, X,
  ThumbsUp, ThumbsDown, RotateCcw, Loader2, UploadCloud,
} from "lucide-react";
import { fetchAllDocuments, type DocumentRecord } from "@/lib/document-service";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/validation")({ component: ValidationPage });

function ValidationPage() {
  const [docs, setDocs] = useState<DocumentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<DocumentRecord | null>(null);

  useEffect(() => {
    fetchAllDocuments()
      .then(setDocs)
      .catch(() => setDocs([]))
      .finally(() => setLoading(false));
  }, []);

  const reviewDocs = docs.filter((d) => d.status === "review");
  const approvedDocs = docs.filter((d) => d.status === "routed");
  const rejectedDocs = docs.filter((d) => d.status === "rejected");
  const processingDocs = docs.filter((d) => d.status === "processing");

  const queues = [
    { key: "approved", label: "Routed / Approved", count: approvedDocs.length, Icon: CheckCircle2, cls: "text-success bg-success/15" },
    { key: "rejected", label: "Rejected", count: rejectedDocs.length, Icon: XCircle, cls: "text-destructive bg-destructive/10" },
    { key: "review", label: "Needs Review", count: reviewDocs.length, Icon: AlertTriangle, cls: "text-warning bg-warning/15" },
    { key: "processing", label: "Processing", count: processingDocs.length, Icon: Clock, cls: "text-primary bg-primary/10" },
  ];

  return (
    <>
      <PageHeader title="Validation Center" subtitle="Human-in-the-loop review for documents flagged by agents." />

      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4 mb-4">
        {queues.map((q) => {
          const Icon = q.Icon;
          return (
            <Card key={q.key}>
              <div className={`grid size-9 place-items-center rounded-xl ${q.cls}`}><Icon className="size-4.5" /></div>
              <p className="mt-3 text-2xl font-bold tabular-nums">{q.count}</p>
              <p className="text-xs text-muted-foreground">{q.label}</p>
            </Card>
          );
        })}
      </div>

      <Card className="!p-0 overflow-hidden">
        <div className="border-b border-border/60 px-4 py-3 flex items-center justify-between">
          <p className="text-sm font-semibold">Needs your attention</p>
          <span className="text-xs text-muted-foreground">{reviewDocs.length} item{reviewDocs.length !== 1 ? "s" : ""}</span>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12 gap-2 text-muted-foreground">
            <Loader2 className="size-5 animate-spin" />
            <span className="text-sm">Loading documents…</span>
          </div>
        ) : reviewDocs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground">
            <CheckCircle2 className="size-10 opacity-30 text-success" />
            <p className="text-sm font-medium text-foreground">No documents need review</p>
            <p className="text-xs text-center max-w-sm">
              All uploaded documents have been processed successfully. Documents flagged by the validation agents will appear here.
            </p>
            <Link
              to="/dashboard/upload"
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <UploadCloud className="size-3.5" /> Upload Documents
            </Link>
          </div>
        ) : (
          <ul className="divide-y divide-border/50">
            {reviewDocs.map((doc) => (
              <li
                key={doc.id}
                className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 cursor-pointer"
                onClick={() => setOpen(doc)}
              >
                <div className="grid size-9 place-items-center rounded-xl bg-warning/15 text-warning">
                  <AlertTriangle className="size-4.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold truncate">{doc.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {doc.validation?.find((v) => !v.passed)?.rule || "Low confidence or validation failure"}
                  </p>
                </div>
                <span className="text-xs font-medium text-muted-foreground tabular-nums">{doc.conf}%</span>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium">{doc.cat}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm"
              onClick={() => setOpen(null)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 240 }}
              className="fixed right-0 top-0 z-50 h-screen w-full max-w-xl bg-background shadow-elevated border-l border-border overflow-y-auto"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{open.name}</p>
                    <p className="text-xs text-muted-foreground">{open.cat} · {open.conf}% confidence</p>
                  </div>
                </div>
                <button onClick={() => setOpen(null)} className="text-muted-foreground hover:text-foreground">
                  <X className="size-5" />
                </button>
              </div>

              <div className="p-5 space-y-4">
                {open.extracted && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Extracted text</p>
                    <div className="rounded-xl border border-border bg-background p-3 text-xs text-muted-foreground leading-relaxed max-h-40 overflow-auto font-mono whitespace-pre-wrap">
                      {open.extracted}
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Validation report</p>
                  <div className="rounded-xl border border-warning/30 bg-warning/5 p-3 text-xs space-y-1">
                    {open.validation && open.validation.length > 0 ? (
                      open.validation.map((v, i) => (
                        <div key={i} className="flex items-center gap-2">
                          {v.passed
                            ? <CheckCircle2 className="size-3.5 text-success shrink-0" />
                            : <XCircle className="size-3.5 text-destructive shrink-0" />}
                          <span className={v.passed ? "text-muted-foreground" : "text-destructive font-semibold"}>
                            {v.rule}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-warning font-semibold">⚠ Document confidence below threshold. Manual review recommended.</p>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => { toast.success(`${open.name} approved`); setOpen(null); }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-success text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110"
                  >
                    <ThumbsUp className="size-4" /> Approve
                  </button>
                  <button
                    onClick={() => { toast.error(`${open.name} rejected`); setOpen(null); }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-destructive text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110"
                  >
                    <ThumbsDown className="size-4" /> Reject
                  </button>
                  <button
                    onClick={() => { toast.info("Sent back for re-processing"); setOpen(null); }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium hover:bg-secondary"
                  >
                    <RotateCcw className="size-4" /> Send back
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}