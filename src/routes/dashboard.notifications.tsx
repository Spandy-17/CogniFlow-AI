import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/DashboardShell";
import { Bell, CheckCircle2, AlertTriangle, FileText, Sparkles, Loader2, UploadCloud } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchAllDocuments, type DocumentRecord } from "@/lib/document-service";

export const Route = createFileRoute("/dashboard/notifications")({ component: NotificationsPage });

function NotificationsPage() {
  const [docs, setDocs] = useState<DocumentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllDocuments()
      .then(setDocs)
      .catch(() => setDocs([]))
      .finally(() => setLoading(false));
  }, []);

  // Build notifications from real document events
  const notifications = docs.slice(0, 20).map((doc) => {
    if (doc.status === "routed") {
      return {
        Icon: CheckCircle2,
        cls: "text-success bg-success/15",
        title: `${doc.name} routed`,
        body: `Routing Agent placed this ${doc.cat} into ${doc.folder}.`,
        t: doc.date,
      };
    } else if (doc.status === "review") {
      return {
        Icon: AlertTriangle,
        cls: "text-warning bg-warning/15",
        title: `${doc.name} needs review`,
        body: `Confidence: ${doc.conf}%. Manual review required before routing.`,
        t: doc.date,
      };
    } else if (doc.status === "rejected") {
      return {
        Icon: AlertTriangle,
        cls: "text-destructive bg-destructive/10",
        title: `${doc.name} rejected`,
        body: `Validation failed. Re-upload or re-process this document.`,
        t: doc.date,
      };
    } else if (doc.status === "error") {
      return {
        Icon: AlertTriangle,
        cls: "text-destructive bg-destructive/10",
        title: `${doc.name} processing failed`,
        body: "The uploaded file is saved. Retry processing after checking the backend service.",
        t: doc.date,
      };
    } else {
      return {
        Icon: FileText,
        cls: "text-primary bg-primary/10",
        title: `${doc.name} uploaded`,
        body: `${doc.cat} · ${doc.size} · Queued for agent processing.`,
        t: doc.date,
      };
    }
  });

  return (
    <>
      <PageHeader
        title="Notifications"
        subtitle="Agent events from your uploaded documents."
        actions={<button className="text-sm font-medium text-primary hover:underline">Mark all read</button>}
      />
      <Card className="!p-0 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16 gap-2 text-muted-foreground">
            <Loader2 className="size-5 animate-spin" />
            <span className="text-sm">Loading events…</span>
          </div>
        ) : notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground">
            <Bell className="size-10 opacity-30" />
            <p className="text-sm font-medium text-foreground">No notifications yet</p>
            <p className="text-xs text-center max-w-sm">
              Notifications will appear here as your agents process uploaded documents.
            </p>
            <Link
              to="/dashboard/upload"
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <UploadCloud className="size-3.5" /> Upload Documents
            </Link>
          </div>
        ) : (
          <ul className="divide-y divide-border/50">
            {notifications.map((n, i) => {
              const Icon = n.Icon;
              return (
                <li key={i} className="flex gap-3 p-4 hover:bg-secondary/40 transition-colors">
                  <div className={`grid size-10 shrink-0 place-items-center rounded-xl ${n.cls}`}>
                    <Icon className="size-5" />
                  </div>
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
        )}
      </Card>
    </>
  );
}