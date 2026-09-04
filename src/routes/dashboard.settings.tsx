import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, PageHeader } from "@/components/DashboardShell";
import { User, Shield, Bell, Sparkles, CreditCard, KeyRound, Palette, Sun, Moon, Monitor, Check } from "lucide-react";
import { useTheme, type Theme } from "@/components/theme-provider";

export const Route = createFileRoute("/dashboard/settings")({ component: SettingsPage });

const tabs = [
  { id: "profile", label: "Profile", Icon: User },
  { id: "appearance", label: "Appearance", Icon: Palette },
  { id: "security", label: "Security", Icon: Shield },
  { id: "notifs", label: "Notifications", Icon: Bell },
  { id: "ai", label: "AI agents", Icon: Sparkles },
  { id: "billing", label: "Billing", Icon: CreditCard },
  { id: "api", label: "API keys", Icon: KeyRound },
];

function Toggle({ on, onChange, label, hint }: { on: boolean; onChange: (v: boolean) => void; label: string; hint?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="min-w-0"><p className="text-sm font-medium">{label}</p>{hint && <p className="text-xs text-muted-foreground">{hint}</p>}</div>
      <button onClick={() => onChange(!on)} className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${on ? "bg-primary" : "bg-muted"}`}>
        <span className={`absolute top-0.5 size-5 rounded-full bg-white shadow transition-all ${on ? "left-[22px]" : "left-0.5"}`} />
      </button>
    </div>
  );
}

function SettingsPage() {
  const [tab, setTab] = useState("profile");
  const [emailN, setEmailN] = useState(true);
  const [pushN, setPushN] = useState(false);
  const [twoFa, setTwoFa] = useState(true);
  const [autoRoute, setAutoRoute] = useState(true);
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <PageHeader title="Settings" subtitle="Configure your workspace, agents, and account." />
      <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
        <Card className="!p-2 h-fit">
          <nav className="space-y-1">
            {tabs.map((t) => {
              const Icon = t.Icon;
              return (
                <button key={t.id} onClick={() => setTab(t.id)}
                  className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-left transition-colors ${
                    tab === t.id ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}>
                  <Icon className="size-4" /> {t.label}
                </button>
              );
            })}
          </nav>
        </Card>

        <Card>
          {tab === "profile" && (
            <div className="space-y-5">
              <div>
                <p className="text-base font-semibold">Profile</p>
                <p className="text-xs text-muted-foreground">Your public information.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white text-xl font-bold">A</div>
                <button className="rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary">Upload photo</button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" defaultValue="Ada Lovelace" />
                <Field label="Email" defaultValue="ada@cogniflow.ai" />
                <Field label="Role" defaultValue="Admin" />
                <Field label="Timezone" defaultValue="Europe/London" />
              </div>
              <div className="flex justify-end"><button className="rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2 text-sm font-semibold text-white shadow-glow">Save changes</button></div>
            </div>
          )}
          {tab === "appearance" && (
            <div className="space-y-6">
              <div>
                <p className="text-base font-semibold">Appearance & Theme</p>
                <p className="text-xs text-muted-foreground">Customize how CogniFlow looks on your device.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    id: "system" as Theme,
                    title: "System Preference",
                    desc: "Automatically sync with your operating system light/dark mode.",
                    Icon: Monitor,
                  },
                  {
                    id: "light" as Theme,
                    title: "Light Theme",
                    desc: "Bright and vibrant interface with high readability.",
                    Icon: Sun,
                  },
                  {
                    id: "dark" as Theme,
                    title: "Dark Theme",
                    desc: "Sleek dark mode tailored for low light environments.",
                    Icon: Moon,
                  },
                ].map((item) => {
                  const Icon = item.Icon;
                  const isSelected = theme === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setTheme(item.id)}
                      className={`relative flex flex-col justify-between rounded-2xl border p-4 text-left transition-all ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-glow ring-2 ring-primary/20"
                          : "border-border bg-background/50 hover:bg-secondary hover:border-primary/40"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className={`grid size-9 place-items-center rounded-xl ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                            <Icon className="size-4" />
                          </div>
                          {isSelected && (
                            <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                              <Check className="size-3.5" /> Active
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-border bg-secondary/40 p-4 flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Currently active theme</p>
                  <p className="text-xs text-muted-foreground">
                    Active mode: <span className="font-semibold capitalize text-foreground">{resolvedTheme}</span> {theme === "system" && "(via Device Settings)"}
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/20 capitalize">
                  {resolvedTheme} mode
                </div>
              </div>
            </div>
          )}
          {tab === "security" && (
            <div className="space-y-4">
              <div><p className="text-base font-semibold">Security</p><p className="text-xs text-muted-foreground">Keep your account safe.</p></div>
              <div className="divide-y divide-border">
                <Toggle on={twoFa} onChange={setTwoFa} label="Two-factor authentication" hint="Require a 6-digit code on sign in." />
                <Toggle on={false} onChange={()=>{}} label="Sign-in alerts" hint="Email me when a new device signs in." />
              </div>
              <button className="text-sm font-medium text-primary hover:underline">Change password</button>
            </div>
          )}
          {tab === "notifs" && (
            <div className="space-y-4">
              <div><p className="text-base font-semibold">Notifications</p><p className="text-xs text-muted-foreground">Choose what reaches you.</p></div>
              <div className="divide-y divide-border">
                <Toggle on={emailN} onChange={setEmailN} label="Email notifications" hint="Digest of agent activity." />
                <Toggle on={pushN} onChange={setPushN} label="Push notifications" hint="Instant alerts for reviews." />
                <Toggle on={true} onChange={()=>{}} label="Weekly report" hint="Every Monday, 09:00." />
              </div>
            </div>
          )}
          {tab === "ai" && (
            <div className="space-y-4">
              <div><p className="text-base font-semibold">AI agents</p><p className="text-xs text-muted-foreground">Tune your pipeline.</p></div>
              <div className="divide-y divide-border">
                <Toggle on={autoRoute} onChange={setAutoRoute} label="Auto-route documents" hint="Routing agent files without review." />
                <Toggle on={true} onChange={()=>{}} label="Human-in-the-loop" hint="Flag anything below 95% confidence." />
                <Toggle on={false} onChange={()=>{}} label="Beta models" hint="Try new agents before general release." />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Confidence threshold" defaultValue="95%" />
                <Field label="Default routing folder" defaultValue="/Inbox" />
              </div>
            </div>
          )}
          {tab === "billing" && (
            <div className="space-y-4">
              <div><p className="text-base font-semibold">Billing</p><p className="text-xs text-muted-foreground">Pro plan · renews Nov 12, 2026.</p></div>
              <div className="rounded-2xl border border-border p-4 flex items-center justify-between">
                <div><p className="font-semibold">Pro</p><p className="text-xs text-muted-foreground">$49 / mo · 10,000 docs / mo</p></div>
                <button className="rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-3 py-2 text-sm font-semibold text-white shadow-glow">Upgrade</button>
              </div>
            </div>
          )}
          {tab === "api" && (
            <div className="space-y-4">
              <div><p className="text-base font-semibold">API keys</p><p className="text-xs text-muted-foreground">For custom integrations.</p></div>
              <div className="rounded-2xl border border-border font-mono text-xs bg-background p-4 flex items-center justify-between">
                <span>cf_live_····························a12f</span>
                <button className="rounded-lg bg-secondary px-2 py-1 text-[11px] font-semibold">Copy</button>
              </div>
              <button className="rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary">Generate new key</button>
            </div>
          )}
        </Card>
      </div>
    </>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-muted-foreground">{label}</span>
      <input defaultValue={defaultValue} className="w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15" />
    </label>
  );
}