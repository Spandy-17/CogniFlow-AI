import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, PageHeader } from "@/components/DashboardShell";
import { CheckCircle2, XCircle, Clock, AlertTriangle, FileText, X, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/dashboard/validation")({ component: ValidationPage });

const queues = [
  { key: "approved", label: "Approved", count: 218, Icon: CheckCircle2, cls: "text-success bg-success/15" },
  { key: "rejected", label: "Rejected", count: 34,  Icon: XCircle,      cls: "text-destructive bg-destructive/10" },
  { key: "review",   label: "Needs review", count: 12, Icon: AlertTriangle, cls: "text-warning bg-warning/15" },
  { key: "pending",  label: "Pending",  count: 47,  Icon: Clock,        cls: "text-primary bg-primary/10" },
];

const items = [
  { name: "Invoice_Acme_1204.pdf", cat: "Invoice", conf: 74.2, reason: "Missing tax ID field" },
  { name: "Transcript_S24.jpg",     cat: "Transcript", conf: 88.7, reason: "Low OCR confidence in row 3" },
  { name: "Contract_MSA_v2.docx",   cat: "Contract", conf: 91.3, reason: "Signature block ambiguous" },
  { name: "Certificate_Alan.pdf",   cat: "Certificate", conf: 82.1, reason: "Template version mismatch" },
];

function ValidationPage() {
  const [open, setOpen] = useState<null | typeof items[number]>(null);
  return (
    <>
      <PageHeader title="Validation Center" subtitle="Human-in-the-loop for edge cases the agents flagged." />
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
          <span className="text-xs text-muted-foreground">{items.length} items</span>
        </div>
        <ul className="divide-y divide-border/50">
          {items.map((it) => (
            <li key={it.name} className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 cursor-pointer" onClick={() => setOpen(it)}>
              <div className="grid size-9 place-items-center rounded-xl bg-warning/15 text-warning"><AlertTriangle className="size-4.5" /></div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold truncate">{it.name}</p>
                <p className="text-xs text-muted-foreground truncate">{it.reason}</p>
              </div>
              <span className="text-xs font-medium text-muted-foreground tabular-nums">{it.conf}%</span>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium">{it.cat}</span>
            </li>
          ))}
        </ul>
      </Card>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm" onClick={() => setOpen(null)} />
            <motion.aside
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 240 }}
              className="fixed right-0 top-0 z-50 h-screen w-full max-w-xl bg-background shadow-elevated border-l border-border overflow-y-auto"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><FileText className="size-5" /></div>
                  <div>
                    <p className="font-semibold text-sm">{open.name}</p>
                    <p className="text-xs text-muted-foreground">{open.cat} · {open.conf}% confidence</p>
                  </div>
                </div>
                <button onClick={() => setOpen(null)} className="text-muted-foreground hover:text-foreground"><X className="size-5" /></button>
              </div>
              <div className="p-5 space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-secondary grid place-items-center text-muted-foreground text-xs">
                  Document preview
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Extracted text</p>
                  <div className="rounded-xl border border-border bg-background p-3 text-xs text-muted-foreground leading-relaxed max-h-32 overflow-auto">
                    This certifies that Ada Lovelace has successfully completed the Advanced Machine Learning program with distinction on the 24th day of August, 2025…
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Validation report</p>
                  <div className="rounded-xl border border-warning/30 bg-warning/5 p-3 text-xs">
                    <p className="font-semibold text-warning">⚠ {open.reason}</p>
                    <p className="mt-1 text-muted-foreground">Confidence below threshold (95%). Manual review recommended.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-success text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110"><ThumbsUp className="size-4" /> Approve</button>
                  <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-destructive text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110"><ThumbsDown className="size-4" /> Reject</button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium hover:bg-secondary"><RotateCcw className="size-4" /> Send back</button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}