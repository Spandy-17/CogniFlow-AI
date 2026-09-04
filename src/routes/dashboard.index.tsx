import { createFileRoute } from "@tanstack/react-router";
import { displayName, useAuth } from "@/hooks/useAuth";
import { motion } from "motion/react";
import { Card, PageHeader } from "@/components/DashboardShell";
import {
  FileUp, FileCheck2, Clock, FolderTree, FileX2, Cpu, HardDrive, TrendingUp,
  ArrowUpRight, Sparkles,
} from "lucide-react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend,
  Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";

export const Route = createFileRoute("/dashboard/")({
  component: Overview,
});

const areaData = Array.from({ length: 14 }, (_, i) => ({
  day: `D${i + 1}`,
  processed: 120 + Math.round(Math.sin(i / 2) * 40 + i * 8 + Math.random() * 30),
  uploaded: 90 + Math.round(Math.cos(i / 2) * 30 + i * 6 + Math.random() * 20),
}));
const pieData = [
  { name: "Certificates", value: 38 },
  { name: "Reports", value: 24 },
  { name: "Invoices", value: 18 },
  { name: "Contracts", value: 12 },
  { name: "Other", value: 8 },
];
const pieColors = ["oklch(0.55 0.22 275)", "oklch(0.58 0.24 300)", "oklch(0.7 0.16 250)", "oklch(0.7 0.17 155)", "oklch(0.78 0.16 75)"];
const barData = Array.from({ length: 7 }, (_, i) => ({
  day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
  accuracy: 92 + Math.round(Math.random() * 7),
}));

const stats = [
  { label: "Documents Uploaded", value: "12,483", delta: "+8.4%", icon: FileUp, tone: "primary" },
  { label: "Processed", value: "12,204", delta: "+7.9%", icon: FileCheck2, tone: "success" },
  { label: "Pending Validation", value: "184", delta: "-12%", icon: Clock, tone: "warning" },
  { label: "Successfully Routed", value: "11,942", delta: "+9.1%", icon: FolderTree, tone: "primary" },
  { label: "Rejected", value: "62", delta: "-4.2%", icon: FileX2, tone: "danger" },
  { label: "AI Accuracy", value: "99.1%", delta: "+0.3%", icon: Cpu, tone: "primary" },
  { label: "Storage Used", value: "48.2 GB", delta: "of 200 GB", icon: HardDrive, tone: "muted" },
  { label: "Avg Confidence", value: "97.8%", delta: "+1.1%", icon: TrendingUp, tone: "success" },
];

const toneClasses: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  success: "bg-success/15 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-destructive/10 text-destructive",
  muted: "bg-muted text-muted-foreground",
};

const activity = [
  { t: "Certificate_Ada.pdf routed → /Certificates/2025", ago: "2m ago", tone: "success" },
  { t: "Invoice_Q3.pdf failed template validation", ago: "6m ago", tone: "danger" },
  { t: "Contract_Acme.docx classification: 98.4%", ago: "12m ago", tone: "primary" },
  { t: "Report_2025_Aug.pdf indexed in database", ago: "24m ago", tone: "success" },
  { t: "12 new documents queued for OCR", ago: "1h ago", tone: "primary" },
];

function Overview() {
  return (
    <>
      <PageHeader
        title={`Good morning, ${displayName(useAuth().user).split(" ")[0]} 👋`}
        subtitle="Here's what your agents processed while you were away."
        actions={
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2 text-sm font-semibold text-white shadow-glow">
            <Sparkles className="size-4" /> New pipeline
          </button>
        }
      />

      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
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
                <span className="text-[10px] font-semibold text-muted-foreground">{s.delta}</span>
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
              <p className="text-sm font-semibold">Documents processed</p>
              <p className="text-xs text-muted-foreground">Last 14 days</p>
            </div>
            <div className="flex gap-1 text-xs">
              {["14D", "30D", "90D"].map((t, i) => (
                <button key={t} className={`rounded-lg px-2 py-1 ${i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.55 0.22 275)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.55 0.22 275)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.58 0.24 300)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="oklch(0.58 0.24 300)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.01 260)" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
                <Area type="monotone" dataKey="processed" stroke="oklch(0.55 0.22 275)" strokeWidth={2.5} fill="url(#g1)" />
                <Area type="monotone" dataKey="uploaded" stroke="oklch(0.58 0.24 300)" strokeWidth={2.5} fill="url(#g2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <p className="text-sm font-semibold">Categories</p>
          <p className="text-xs text-muted-foreground">Classification distribution</p>
          <div className="h-56">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={pieData} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={4} stroke="none">
                  {pieData.map((_, i) => <Cell key={i} fill={pieColors[i]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-xs">
            {pieData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-sm" style={{ background: pieColors[i] }} />
                <span className="text-muted-foreground">{d.name}</span>
                <span className="ml-auto font-medium tabular-nums">{d.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Classification accuracy</p>
              <p className="text-xs text-muted-foreground">Weekly rolling average</p>
            </div>
            <span className="rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success">↑ 1.2%</span>
          </div>
          <div className="h-52">
            <ResponsiveContainer>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.01 260)" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis domain={[85, 100]} tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
                <Bar dataKey="accuracy" fill="oklch(0.55 0.22 275)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold">Recent activity</p>
            <button className="text-xs font-medium text-primary hover:underline">View all</button>
          </div>
          <ul className="space-y-2.5">
            {activity.map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className={`mt-1 size-2 shrink-0 rounded-full ${a.tone === "success" ? "bg-success" : a.tone === "danger" ? "bg-destructive" : "bg-primary"
                  }`} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm">{a.t}</p>
                  <p className="text-[11px] text-muted-foreground">{a.ago}</p>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground/60" />
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}