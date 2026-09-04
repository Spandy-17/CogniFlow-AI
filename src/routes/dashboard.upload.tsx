import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, PageHeader } from "@/components/DashboardShell";
import { UploadCloud, FileText, X, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/dashboard/upload")({
  component: UploadPage,
});

type Item = { id: string; name: string; size: string; progress: number; status: "uploading" | "processing" | "done" };

function UploadPage() {
  const [items, setItems] = useState<Item[]>([
    { id: "1", name: "Certificate_Ada.pdf", size: "2.4 MB", progress: 100, status: "done" },
    { id: "2", name: "Report_Q3.docx", size: "1.1 MB", progress: 62, status: "processing" },
  ]);
  const [drag, setDrag] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach((f) => {
      const id = crypto.randomUUID();
      setItems((prev) => [...prev, { id, name: f.name, size: `${(f.size/1024/1024).toFixed(1)} MB`, progress: 0, status: "uploading" }]);
      let p = 0;
      const iv = setInterval(() => {
        p += 8 + Math.random() * 12;
        if (p >= 100) {
          clearInterval(iv);
          setItems((prev) => prev.map((it) => it.id === id ? { ...it, progress: 100, status: "processing" } : it));
          setTimeout(() => {
            setItems((prev) => prev.map((it) => it.id === id ? { ...it, status: "done" } : it));
          }, 1600);
        } else {
          setItems((prev) => prev.map((it) => it.id === id ? { ...it, progress: Math.min(99, p) } : it));
        }
      }, 250);
    });
  };

  return (
    <>
      <PageHeader
        title="Upload documents"
        subtitle="Drop files here — AI agents start processing automatically."
      />

      <Card className="!p-0 overflow-hidden">
        <div
          onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => { e.preventDefault(); setDrag(false); addFiles(e.dataTransfer.files); }}
          onClick={() => ref.current?.click()}
          className={`relative m-4 grid cursor-pointer place-items-center rounded-2xl border-2 border-dashed py-16 text-center transition-all ${
            drag ? "border-primary bg-primary/5" : "border-border bg-background/40 hover:bg-secondary/50"
          }`}
        >
          <input ref={ref} type="file" multiple accept=".pdf,.docx,.png,.jpg,.jpeg" hidden onChange={(e) => addFiles(e.target.files)} />
          <motion.div
            animate={{ y: drag ? -4 : 0 }}
            className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-glow"
          >
            <UploadCloud className="size-7" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">Drop files or click to browse</p>
          <p className="mt-1 text-sm text-muted-foreground">PDF · DOCX · PNG · JPG · up to 25 MB each</p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" /> AI processing starts automatically
          </div>
        </div>
      </Card>

      <div className="mt-4 space-y-2">
        <AnimatePresence>
          {items.map((it) => (
            <motion.div
              key={it.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-3 rounded-2xl glass-strong p-3"
            >
              <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <FileText className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-semibold">{it.name}</p>
                  <span className="text-xs text-muted-foreground shrink-0">{it.size}</span>
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2"
                      animate={{ width: `${it.progress}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-muted-foreground w-24 text-right">
                    {it.status === "uploading" && `Uploading ${Math.round(it.progress)}%`}
                    {it.status === "processing" && "AI processing…"}
                    {it.status === "done" && "Routed ✓"}
                  </span>
                </div>
              </div>
              {it.status === "done" ? (
                <CheckCircle2 className="size-5 text-success" />
              ) : (
                <button onClick={() => setItems((p) => p.filter((x) => x.id !== it.id))} className="text-muted-foreground hover:text-destructive">
                  <X className="size-4" />
                </button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}