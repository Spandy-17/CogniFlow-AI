import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/DashboardShell";
import { Mail, MapPin, Calendar, FileText, CheckCircle2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/dashboard/profile")({ component: ProfilePage });

const stats = [
  { label: "Documents uploaded", value: "1,284" },
  { label: "Approved", value: "1,196" },
  { label: "Avg. confidence", value: "97.4%" },
  { label: "Automation saved", value: "312h" },
];

const activity = [
  { Icon: CheckCircle2, cls: "text-success bg-success/15", t: "Approved 24 documents", when: "2h ago" },
  { Icon: FileText, cls: "text-primary bg-primary/10", t: "Uploaded Certificate_Ada.pdf", when: "yesterday" },
  { Icon: Sparkles, cls: "text-brand-2 bg-brand-2/10", t: "Enabled auto-routing", when: "2d ago" },
];

function ProfilePage() {
  return (
    <>
      <PageHeader title="Profile" subtitle="Your identity and recent activity across CogniFlow." />
      <div className="grid gap-4 lg:grid-cols-[1fr_1.6fr]">
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="grid size-24 place-items-center rounded-3xl bg-gradient-to-br from-brand-1 to-brand-2 text-white text-3xl font-bold shadow-glow">A</div>
            <p className="mt-4 text-xl font-bold">Ada Lovelace</p>
            <p className="text-sm text-muted-foreground">Workspace Admin</p>
            <div className="mt-4 grid w-full grid-cols-1 gap-2 text-left text-sm">
              <Row Icon={Mail} v="ada@cogniflow.ai" />
              <Row Icon={MapPin} v="London, UK" />
              <Row Icon={Calendar} v="Joined Jan 2026" />
            </div>
            <button className="mt-5 w-full rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2 text-sm font-semibold text-white shadow-glow">Edit profile</button>
          </div>
        </Card>
        <div className="space-y-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s) => (
              <Card key={s.label}>
                <p className="text-2xl font-bold tabular-nums">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </Card>
            ))}
          </div>
          <Card className="!p-0 overflow-hidden">
            <div className="border-b border-border/60 px-4 py-3"><p className="text-sm font-semibold">Recent activity</p></div>
            <ul className="divide-y divide-border/50">
              {activity.map((a, i) => {
                const Icon = a.Icon;
                return (
                  <li key={i} className="flex items-center gap-3 px-4 py-3">
                    <div className={`grid size-9 place-items-center rounded-xl ${a.cls}`}><Icon className="size-4.5" /></div>
                    <p className="flex-1 text-sm font-medium">{a.t}</p>
                    <span className="text-xs text-muted-foreground">{a.when}</span>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}

function Row({ Icon, v }: { Icon: typeof Mail; v: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-secondary/60 px-3 py-2">
      <Icon className="size-4 text-muted-foreground" />
      <span className="text-sm">{v}</span>
    </div>
  );
}