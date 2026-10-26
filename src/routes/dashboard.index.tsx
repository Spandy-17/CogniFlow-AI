import { createFileRoute, Link } from "@tanstack/react-router";
import { displayName, useAuth } from "@/hooks/useAuth";
import { motion } from "motion/react";
import { Card, PageHeader } from "@/components/DashboardShell";
import {
  FileUp, FileCheck2, Clock, FolderTree, FileX2, Cpu,
  ArrowUpRight, Sparkles, UploadCloud, Loader2,
} from "lucide-react";
import {
  Cell,
  Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import { fetchAllDocuments, type DocumentRecord } from "@/lib/document-service";

export const Route = createFileRoute("/dashboard/")({
  component: Overview,
});

const pieColors = ["oklch(0.55 0.22 275)", "oklch(0.58 0.24 300)", "oklch(0.7 0.16 250)", "oklch(0.7 0.17 155)", "oklch(0.78 0.16 75)"];

function derivedStats(docs: DocumentRecord[]) {
  const total = docs.length;
  const processed = docs.filter((d) => d.status === "routed" || d.status === "review" || d.status === "rejected").length;
  const pending = docs.filter((d) => d.status === "processing" || d.status === "uploaded" as any).length;
  const routed = docs.filter((d) => d.status === "routed").length;
  const rejected = docs.filter((d) => d.status === "rejected").length;
  const review = docs.filter((d) => d.status === "review").length;
  const avgConf = total > 0 ? (docs.reduce((s, d) => s + (d.conf || 0), 0) / total).toFixed(1) : "—";

  return [
    { label: "Documents Uploaded", value: String(total), icon: FileUp, tone: "primary" },
    { label: "Processed", value: String(processed), icon: FileCheck2, tone: "success" },
    { label: "Pending / Review", value: String(pending + review), icon: Clock, tone: "warning" },
    { label: "Successfully Routed", value: String(routed), icon: FolderTree, tone: "primary" },
    { label: "Rejected", value: String(rejected), icon: FileX2, tone: "danger" },
    { label: "Avg Confidence", value: total > 0 ? `${avgConf}%` : "—", icon: Cpu, tone: "primary" },
  ];
}

const toneClasses: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  success: "bg-success/15 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-destructive/10 text-destructive",
  muted: "bg-muted text-muted-foreground",
};

function Overview() {
  const { user } = useAuth();
  const [docs, setDocs] = useState<DocumentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllDocuments()
      .then(setDocs)
      .catch(() => setDocs([]))
      .finally(() => setLoading(false));
  }, []);

  const stats = derivedStats(docs);

  // Category distribution pie
  const catCounts: Record<string, number> = {};
  for (const d of docs) {
    catCounts[d.cat] = (catCounts[d.cat] || 0) + 1;
  }
  const pieData = Object.entries(catCounts).map(([name, value]) => ({ name, value }));

  // Recent activity from documents
  const recentDocs = [...docs].slice(0, 5);

  return (
    <>
      <PageHeader
        title={`Good ${new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening"}, ${displayName(user).split(" ")[0]} 👋`}
        subtitle="Here's your document intelligence dashboard."
        actions={
          <Link
            to="/dashboard/upload"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2 text-sm font-semibold text-white shadow-glow"
          >
            <Sparkles className="size-4" /> Upload Documents
          </Link>
        }
      />

      {loading ? (
        <div className="flex items-center justify-center py-20 text-muted-foreground gap-2">
          <Loader2 className="size-5 animate-spin" />
          <span className="text-sm">Loading your documents…</span>
        </div>
      ) : (
        <>
          <div className="grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl glass-strong p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className={`grid size-9 place-items-center rounded-xl ${toneClasses[s.tone]}`}>
                      <Icon className="size-4.5" />
                    </div>
                  </div>
                  <p className="mt-3 text-2xl font-bold tracking-tight tabular-nums">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <Card>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Category distribution</p>
                  <p className="text-xs text-muted-foreground">From your uploaded documents</p>
                </div>
              </div>
              {pieData.length > 0 ? (
                <div className="h-64">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={pieData} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={4} stroke="none">
                        {pieData.map((_, i) => <Cell key={i} fill={pieColors[i % pieColors.length]} />)}
                      </Pie>
                      <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-muted-foreground gap-2">
                  <UploadCloud className="size-8 opacity-30" />
                  <p className="text-xs">No documents yet. Upload files to see category distribution.</p>
                </div>
              )}
              {pieData.length > 0 && (
                <div className="grid grid-cols-2 gap-1.5 text-xs mt-3">
                  {pieData.map((d, i) => (
                    <div key={d.name} className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-sm" style={{ background: pieColors[i % pieColors.length] }} />
                      <span className="text-muted-foreground truncate">{d.name}</span>
                      <span className="ml-auto font-medium tabular-nums">{d.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            <Card>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold">Recent documents</p>
                <Link to="/dashboard/documents" className="text-xs font-medium text-primary hover:underline">View all</Link>
              </div>
              {recentDocs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 gap-2 text-muted-foreground">
                  <UploadCloud className="size-8 opacity-30" />
                  <p className="text-xs text-center">No documents uploaded yet.</p>
                  <Link
                    to="/dashboard/upload"
                    className="text-xs font-semibold text-primary hover:underline mt-1"
                  >
                    Upload your first document →
                  </Link>
                </div>
              ) : (
                <ul className="space-y-2.5">
                  {recentDocs.map((doc, i) => (
                    <li key={doc.id} className="flex items-start gap-3">
                      <div className={`mt-1 size-2 shrink-0 rounded-full ${
                        doc.status === "routed" ? "bg-success" :
                        doc.status === "rejected" ? "bg-destructive" :
                        doc.status === "review" ? "bg-warning" :
                        "bg-primary"
                      }`} />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm truncate font-medium">{doc.name}</p>
                        <p className="text-[11px] text-muted-foreground">
                          {doc.cat} · {doc.folder} · {doc.date}
                        </p>
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground/60 shrink-0" />
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </div>
        </>
      )}
    </>
  );
}