import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/DashboardShell";
import { Bell, CheckCircle2, AlertTriangle, FileText, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/dashboard/notifications")({ component: NotificationsPage });

const notes = [
  { t: "2m ago",  Icon: CheckCircle2, cls: "text-success bg-success/15", title: "482 documents routed",   body: "Routing agent completed Certificates batch #2025-08." },
  { t: "1h ago",  Icon: AlertTriangle, cls: "text-warning bg-warning/15", title: "12 items need review",  body: "Confidence below threshold in Invoice batch." },
  { t: "3h ago",  Icon: Sparkles,     cls: "text-primary bg-primary/10", title: "CogniAI upgraded",       body: "Classification accuracy improved to 99.2%." },
  { t: "yesterday", Icon: FileText,   cls: "text-brand-2/90 bg-brand-2/10", title: "Monthly report ready", body: "October 2026 analytics available for export." },
  { t: "2d ago",  Icon: Users,        cls: "text-sky-500 bg-sky-500/10", title: "3 new team members",    body: "Grace, Alan, and Ada joined the workspace." },
];

function NotificationsPage() {
  return (
    <>
      <PageHeader title="Notifications" subtitle="Everything that happened across your agents."
        actions={<button className="text-sm font-medium text-primary hover:underline">Mark all read</button>} />
      <Card className="!p-0 overflow-hidden">
        <ul className="divide-y divide-border/50">
          {notes.map((n, i) => {
            const Icon = n.Icon;
            return (
              <li key={i} className="flex gap-3 p-4 hover:bg-secondary/40 transition-colors">
                <div className={`grid size-10 shrink-0 place-items-center rounded-xl ${n.cls}`}><Icon className="size-5" /></div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold truncate">{n.title}</p>
                    <span className="text-xs text-muted-foreground shrink-0">{n.t}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{n.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Card>
    </>
  );
}