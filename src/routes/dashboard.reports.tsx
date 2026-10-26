import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/DashboardShell";
import { UploadCloud, Loader2 } from "lucide-react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell,
  Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import { fetchAllDocuments, type DocumentRecord } from "@/lib/document-service";

export const Route = createFileRoute("/dashboard/reports")({ component: ReportsPage });

const colors = [
  "oklch(0.55 0.22 275)", "oklch(0.58 0.24 300)", "oklch(0.7 0.16 250)",
  "oklch(0.7 0.17 155)", "oklch(0.78 0.16 75)",
];

function ReportsPage() {
  const [docs, setDocs] = useState<DocumentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllDocuments()
      .then(setDocs)
      .catch(() => setDocs([]))
      .finally(() => setLoading(false));
  }, []);

  // Build category distribution from real docs
  const catCounts: Record<string, number> = {};
  for (const d of docs) {
    catCounts[d.cat] = (catCounts[d.cat] || 0) + 1;
  }
  const cats = Object.entries(catCounts).map(([name, v]) => ({ name, v }));

  // Build status distribution
  const statusCounts: Record<string, number> = {};
  for (const d of docs) {
    statusCounts[d.status] = (statusCounts[d.status] || 0) + 1;
  }
  const statusBars = Object.entries(statusCounts).map(([name, v]) => ({ name, v }));

  // Folder distribution
  const folderCounts: Record<string, number> = {};
  for (const d of docs) {
    folderCounts[d.folder] = (folderCounts[d.folder] || 0) + 1;
  }
  const folderBars = Object.entries(folderCounts)
    .map(([n, u]) => ({ n, u }))
    .sort((a, b) => b.u - a.u)
    .slice(0, 8);

  // Confidence distribution buckets
  const confBuckets = [
    { range: "0–25%", count: 0 },
    { range: "26–50%", count: 0 },
    { range: "51–75%", count: 0 },
    { range: "76–90%", count: 0 },
    { range: "91–100%", count: 0 },
  ];
  for (const d of docs) {
    const c = d.conf || 0;
    if (c <= 25) confBuckets[0].count++;
    else if (c <= 50) confBuckets[1].count++;
    else if (c <= 75) confBuckets[2].count++;
    else if (c <= 90) confBuckets[3].count++;
    else confBuckets[4].count++;
  }

  const isEmpty = docs.length === 0;

  return (
    <>
      <PageHeader
        title="Reports & Analytics"
        subtitle="Data-driven insights generated from your real document uploads."
      />

      {loading ? (
        <div className="flex items-center justify-center py-20 text-muted-foreground gap-2">
          <Loader2 className="size-5 animate-spin" />
          <span className="text-sm">Loading analytics…</span>
        </div>
      ) : isEmpty ? (
        <Card className="py-16 text-center">
          <UploadCloud className="mx-auto size-10 opacity-30 mb-3" />
          <p className="font-semibold text-foreground">No data yet</p>
          <p className="text-xs text-muted-foreground mt-1">
            Upload and process documents to populate analytics charts.
          </p>
          <Link
            to="/dashboard/upload"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            Upload Documents →
          </Link>
        </Card>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Category Distribution Pie */}
          <Card>
            <p className="text-sm font-semibold">Category distribution</p>
            <p className="text-xs text-muted-foreground mb-3">By document count (real data)</p>
            <div className="h-56">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={cats} dataKey="v" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={4} stroke="none">
                    {cats.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
              {cats.map((c, i) => (
                <div key={c.name} className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-sm" style={{ background: colors[i % colors.length] }} />
                  <span className="text-muted-foreground truncate">{c.name}</span>
                  <span className="ml-auto font-medium">{c.v}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Status Breakdown */}
          <Card>
            <p className="text-sm font-semibold">Processing status breakdown</p>
            <p className="text-xs text-muted-foreground mb-3">Across all uploaded documents</p>
            <div className="h-56">
              <ResponsiveContainer>
                <BarChart data={statusBars}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.01 260)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
                  <Bar dataKey="v" fill="oklch(0.55 0.22 275)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Confidence Distribution */}
          <Card>
            <p className="text-sm font-semibold">Confidence distribution</p>
            <p className="text-xs text-muted-foreground mb-3">Agent classification confidence buckets</p>
            <div className="h-56">
              <ResponsiveContainer>
                <BarChart data={confBuckets}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.01 260)" vertical={false} />
                  <XAxis dataKey="range" tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
                  <Bar dataKey="count" fill="oklch(0.58 0.24 300)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Folder Distribution */}
          <Card>
            <p className="text-sm font-semibold">Top routed folders</p>
            <p className="text-xs text-muted-foreground mb-3">Documents routed by Agent 5</p>
            <div className="h-56">
              <ResponsiveContainer>
                <BarChart data={folderBars} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.01 260)" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="n" tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 11 }} axisLine={false} tickLine={false} width={120} />
                  <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
                  <Bar dataKey="u" fill="oklch(0.55 0.22 275)" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}