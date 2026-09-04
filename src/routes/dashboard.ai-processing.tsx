import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Card, PageHeader } from "@/components/DashboardShell";
import {
  FileText, ScanText, Sparkles, ShieldCheck, FolderTree, Database,
  Play, Pause, RotateCcw, CheckCircle2, Loader2, Terminal,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/ai-processing")({
  component: ProcessingCenter,
});

const stages = [
  { key: "upload",   label: "Upload",             icon: FileText,     color: "from-slate-500 to-slate-700" },
  { key: "ocr",      label: "OCR Agent",          icon: ScanText,     color: "from-brand-1 to-brand-2" },
  { key: "classify", label: "Classification",     icon: Sparkles,     color: "from-brand-1 to-brand-2" },
  { key: "validate", label: "Validation",         icon: ShieldCheck,  color: "from-brand-1 to-brand-2" },
  { key: "route",    label: "Routing Agent",      icon: FolderTree,   color: "from-brand-1 to-brand-2" },
  { key: "db",       label: "Database",           icon: Database,     color: "from-emerald-500 to-teal-600" },
];

const agentLogs: Record<string, { time: string; text: string; tone?: "ok" | "info" | "warn" }[]> = {
  ocr: [
    { time: "00:00.12", text: "Loading PDF (2.4 MB)…", tone: "info" },
    { time: "00:00.48", text: "Rendered 6 pages at 300dpi", tone: "info" },
    { time: "00:01.92", text: "Extracted 4,281 tokens", tone: "info" },
    { time: "00:02.30", text: "OCR confidence: 99.2%", tone: "ok" },
    { time: "00:02.35", text: "Handoff → Classification Agent", tone: "ok" },
  ],
  classify: [
    { time: "00:02.41", text: "Embedding document…", tone: "info" },
    { time: "00:02.98", text: "Top prediction: Certificate (0.984)", tone: "info" },
    { time: "00:03.02", text: "Alternate: Transcript (0.011)", tone: "info" },
    { time: "00:03.10", text: "Confidence exceeds threshold ✓", tone: "ok" },
  ],
  validate: [
    { time: "00:03.22", text: "Fetching template: cert_v3.schema", tone: "info" },
    { time: "00:03.40", text: "12/12 required fields matched", tone: "ok" },
    { time: "00:03.46", text: "Signature block detected", tone: "ok" },
    { time: "00:03.51", text: "Validation: PASS", tone: "ok" },
  ],
  route: [
    { time: "00:03.60", text: "Resolving destination…", tone: "info" },
    { time: "00:03.65", text: "Target: /Certificates/2025/Q3", tone: "info" },
    { time: "00:03.71", text: "Moved · Indexed · Notified reviewer", tone: "ok" },
  ],
};

function ProcessingCenter() {
  const [active, setActive] = useState(1);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setActive((a) => (a >= stages.length - 1 ? 1 : a + 1)), 1800);
    return () => clearInterval(id);
  }, [running]);

  return (
    <>
      <PageHeader
        title="AI Processing Center"
        subtitle="Live view of your document intelligence pipeline."
        actions={
          <div className="flex gap-2">
            <button
              onClick={() => setRunning((r) => !r)}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary"
            >
              {running ? <><Pause className="size-4" /> Pause</> : <><Play className="size-4" /> Resume</>}
            </button>
            <button
              onClick={() => setActive(1)}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary"
            >
              <RotateCcw className="size-4" /> Restart
            </button>
          </div>
        }
      />

      <Card className="!p-6 mb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm font-semibold">Certificate_Ada.pdf</p>
            <p className="text-xs text-muted-foreground">Started 3s ago · ETA {(stages.length - active - 1) * 1.8}s</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" /> Processing
          </span>
        </div>

        {/* Horizontal pipeline */}
        <div className="relative overflow-x-auto">
          <div className="min-w-[720px] relative flex items-start justify-between gap-2 pt-2 pb-1">
            {/* connector line */}
            <div className="absolute left-8 right-8 top-9 h-0.5 rounded-full bg-border" />
            <motion.div
              className="absolute left-8 top-9 h-0.5 rounded-full bg-gradient-to-r from-brand-1 to-brand-2"
              animate={{ width: `calc(${(active / (stages.length - 1)) * 100}% - ${(active / (stages.length - 1)) * 64}px)` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            {stages.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              const isDone = i < active;
              return (
                <div key={s.key} className="relative z-10 flex w-24 flex-col items-center text-center">
                  <motion.div
                    animate={isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    className={`grid size-16 place-items-center rounded-2xl border shadow-soft transition-all ${
                      isActive
                        ? `bg-gradient-to-br ${s.color} text-white border-transparent animate-pulse-ring`
                        : isDone
                          ? "bg-success/15 text-success border-success/20"
                          : "bg-background text-muted-foreground border-border"
                    }`}
                  >
                    {isActive
                      ? <Loader2 className="size-6 animate-spin" />
                      : isDone
                        ? <CheckCircle2 className="size-6" />
                        : <Icon className="size-6" />}
                  </motion.div>
                  <p className={`mt-2 text-xs font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    {isActive ? "Working" : isDone ? "Done" : "Queued"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        {(["ocr", "classify", "validate", "route"] as const).map((key) => {
          const s = stages.find((x) => x.key === key)!;
          const Icon = s.icon;
          const status = active >= stages.findIndex((x) => x.key === key) ? "done" : "queued";
          const isCurrent = stages[active]?.key === key;
          return (
            <Card key={key} className={isCurrent ? "!border-primary/40 !bg-primary/5" : ""}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`grid size-9 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white`}>
                    <Icon className="size-4.5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{s.label}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      {isCurrent ? "Live" : status === "done" ? "Complete" : "Queued"}
                    </p>
                  </div>
                </div>
                {isCurrent && <Loader2 className="size-4 text-primary animate-spin" />}
                {status === "done" && !isCurrent && <CheckCircle2 className="size-4 text-success" />}
              </div>
              <div className="mt-4 rounded-xl border border-border/60 bg-navy/[0.03] p-3 font-mono text-[11px] text-foreground/80">
                <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <Terminal className="size-3" /> agent.log
                </div>
                <ul className="space-y-1">
                  {(agentLogs[key] ?? []).map((l, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-2"
                    >
                      <span className="text-muted-foreground">{l.time}</span>
                      <span className={l.tone === "ok" ? "text-success" : "text-foreground/80"}>
                        {l.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}