import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/DashboardShell";
import { FileText, Search, Filter, Download, MoreVertical, CheckCircle2, Clock, XCircle } from "lucide-react";
import { demoDocs } from "@/lib/demo-data";

export const Route = createFileRoute("/dashboard/documents")({
  component: DocumentsPage,
});

const docs = demoDocs;

const statusStyles: Record<string, { label: string; cls: string; Icon: typeof CheckCircle2 }> = {
  routed: { label: "Routed", cls: "bg-success/15 text-success", Icon: CheckCircle2 },
  review: { label: "Needs review", cls: "bg-warning/15 text-warning", Icon: Clock },
  processing: { label: "Processing", cls: "bg-primary/10 text-primary", Icon: Clock },
  rejected: { label: "Rejected", cls: "bg-destructive/10 text-destructive", Icon: XCircle },
};

function DocumentsPage() {
  return (
    <>
      <PageHeader
        title="My Documents"
        subtitle="Every document processed by your agent pipelines."
        actions={
          <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary">
            <Download className="size-4" /> Export
          </button>
        }
      />

      <Card className="!p-0 overflow-hidden">
        <div className="flex flex-wrap items-center gap-3 border-b border-border/60 p-4">
          <div className="relative flex-1 min-w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="Search documents…" className="w-full rounded-xl border border-border bg-background/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15" />
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary">
            <Filter className="size-4" /> Filters
          </button>
          <div className="flex gap-1 text-xs">
            {["All", "Certificate", "Report", "Invoice", "Contract"].map((t, i) => (
              <button key={t} className={`rounded-lg px-2.5 py-1.5 ${i === 0 ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:bg-secondary"}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:text-left [&>th]:font-medium">
                <th>Document</th>
                <th>Category</th>
                <th>Confidence</th>
                <th>Status</th>
                <th>Folder</th>
                <th>Uploaded</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {docs.map((d) => {
                const s = statusStyles[d.status];
                const Icon = s.Icon;
                return (
                  <tr key={d.id} className="border-t border-border/50 hover:bg-secondary/40 [&>td]:px-4 [&>td]:py-3 transition-colors">
                    <td>
                      <Link to="/dashboard/document/$docId" params={{ docId: d.id }} className="flex items-center gap-3 hover:text-primary">
                        <div className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                          <FileText className="size-4" />
                        </div>
                        <span className="font-medium">{d.name}</span>
                      </Link>
                    </td>
                    <td><span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">{d.cat}</span></td>
                    <td className="tabular-nums">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                          <div className="h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2" style={{ width: `${d.conf}%` }} />
                        </div>
                        <span className="text-xs font-medium">{d.conf}%</span>
                      </div>
                    </td>
                    <td>
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${s.cls}`}>
                        <Icon className="size-3" /> {s.label}
                      </span>
                    </td>
                    <td className="text-muted-foreground text-xs">{d.folder}</td>
                    <td className="text-muted-foreground text-xs">{d.date}</td>
                    <td><button className="text-muted-foreground hover:text-foreground"><MoreVertical className="size-4" /></button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}