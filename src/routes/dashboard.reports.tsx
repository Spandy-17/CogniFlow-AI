import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/DashboardShell";
import { Download, FileSpreadsheet, FileText } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/dashboard/reports")({ component: ReportsPage });

const daily = Array.from({ length: 30 }, (_, i) => ({ day: i + 1, uploads: 80 + Math.round(Math.sin(i/3)*30 + Math.random()*40) }));
const time = Array.from({ length: 12 }, (_, i) => ({ m: `M${i+1}`, ms: 1800 + Math.round(Math.sin(i/2)*400 + Math.random()*300) }));
const cats = [
  { name: "Certificates", v: 38 }, { name: "Reports", v: 24 }, { name: "Invoices", v: 18 },
  { name: "Contracts", v: 12 }, { name: "Other", v: 8 },
];
const colors = ["oklch(0.55 0.22 275)","oklch(0.58 0.24 300)","oklch(0.7 0.16 250)","oklch(0.7 0.17 155)","oklch(0.78 0.16 75)"];
const topUsers = [
  { n: "Ada Lovelace", u: 482 }, { n: "Grace Hopper", u: 401 }, { n: "Alan Turing", u: 356 },
  { n: "Katherine Johnson", u: 288 }, { n: "Linus Torvalds", u: 214 },
];

function ReportsPage() {
  return (
    <>
      <PageHeader title="Reports & Analytics" subtitle="Everything your team needs to prove the ROI."
        actions={<div className="flex gap-2">
          <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary"><FileSpreadsheet className="size-4" /> CSV</button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary"><FileText className="size-4" /> PDF</button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-3 py-2 text-sm font-semibold text-white shadow-glow"><Download className="size-4" /> Download all</button>
        </div>}
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold">Daily uploads</p><p className="text-xs text-muted-foreground mb-3">Last 30 days</p>
          <div className="h-56"><ResponsiveContainer>
            <AreaChart data={daily}>
              <defs><linearGradient id="ru" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="oklch(0.55 0.22 275)" stopOpacity={0.5}/><stop offset="100%" stopColor="oklch(0.55 0.22 275)" stopOpacity={0}/></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.01 260)" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
              <Area type="monotone" dataKey="uploads" stroke="oklch(0.55 0.22 275)" strokeWidth={2.5} fill="url(#ru)" />
            </AreaChart>
          </ResponsiveContainer></div>
        </Card>
        <Card>
          <p className="text-sm font-semibold">Processing time</p><p className="text-xs text-muted-foreground mb-3">Milliseconds · monthly avg</p>
          <div className="h-56"><ResponsiveContainer>
            <LineChart data={time}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.01 260)" vertical={false} />
              <XAxis dataKey="m" tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
              <Line type="monotone" dataKey="ms" stroke="oklch(0.58 0.24 300)" strokeWidth={2.5} dot={{ r: 3, fill: "oklch(0.58 0.24 300)" }} />
            </LineChart>
          </ResponsiveContainer></div>
        </Card>
        <Card>
          <p className="text-sm font-semibold">Top categories</p><p className="text-xs text-muted-foreground mb-3">By document count</p>
          <div className="h-56"><ResponsiveContainer>
            <PieChart>
              <Pie data={cats} dataKey="v" innerRadius={50} outerRadius={80} paddingAngle={4} stroke="none">
                {cats.map((_,i)=><Cell key={i} fill={colors[i]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer></div>
        </Card>
        <Card>
          <p className="text-sm font-semibold">Most active users</p><p className="text-xs text-muted-foreground mb-3">Uploads · this month</p>
          <div className="h-56"><ResponsiveContainer>
            <BarChart data={topUsers} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.01 260)" horizontal={false} />
              <XAxis type="number" tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="n" tick={{ fill: "oklch(0.5 0.03 260)", fontSize: 11 }} axisLine={false} tickLine={false} width={120} />
              <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.01 260)", borderRadius: 12, fontSize: 12 }} />
              <Bar dataKey="u" fill="oklch(0.55 0.22 275)" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer></div>
        </Card>
      </div>
    </>
  );
}