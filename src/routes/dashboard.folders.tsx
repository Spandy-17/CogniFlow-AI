import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Card, PageHeader } from "@/components/DashboardShell";
import { Folder, FolderOpen, Search, Plus, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/dashboard/folders")({ component: FoldersPage });

const folders = [
  { name: "Certificates", count: 482, size: "3.1 GB", tint: "from-brand-1 to-brand-2" },
  { name: "Reports",      count: 236, size: "5.4 GB", tint: "from-emerald-500 to-teal-500" },
  { name: "Invoices",     count: 148, size: "1.2 GB", tint: "from-amber-500 to-orange-500" },
  { name: "Contracts",    count: 89,  size: "820 MB", tint: "from-rose-500 to-pink-500" },
  { name: "Transcripts",  count: 312, size: "2.7 GB", tint: "from-sky-500 to-indigo-500" },
  { name: "Archive",      count: 1042,size: "18 GB",  tint: "from-slate-500 to-slate-700" },
];

const tree = [
  { name: "Certificates", children: ["2025", "2024", "2023"] },
  { name: "Reports", children: ["Quarterly", "Annual"] },
  { name: "Invoices", children: ["Paid", "Pending"] },
];

function FoldersPage() {
  return (
    <>
      <PageHeader
        title="Folders"
        subtitle="Auto-organized by the Routing Agent."
        actions={
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-3 py-2 text-sm font-semibold text-white shadow-glow">
            <Plus className="size-4" /> New folder
          </button>
        }
      />
      <div className="mb-4 relative max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input placeholder="Search folders…" className="w-full rounded-xl border border-border bg-background/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15" />
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {folders.map((f, i) => (
            <motion.button
              key={f.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-5 text-left transition-shadow hover:shadow-elevated"
            >
              <div className={`mb-4 grid size-11 place-items-center rounded-xl bg-gradient-to-br ${f.tint} text-white`}>
                <Folder className="size-5" />
              </div>
              <p className="text-base font-semibold">{f.name}</p>
              <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                <span>{f.count.toLocaleString()} files</span>
                <span className="tabular-nums">{f.size}</span>
              </div>
              <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
        <Card>
          <p className="text-sm font-semibold mb-2">Folder tree</p>
          <ul className="space-y-1 text-sm">
            {tree.map((t) => (
              <li key={t.name}>
                <div className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-secondary">
                  <FolderOpen className="size-4 text-primary" /> <span className="font-medium">{t.name}</span>
                </div>
                <ul className="ml-6 border-l border-border pl-3">
                  {t.children.map((c) => (
                    <li key={c} className="flex items-center gap-2 rounded-lg px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-secondary">
                      <ChevronRight className="size-3" /> {c}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}