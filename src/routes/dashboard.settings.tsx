import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Card, PageHeader } from "@/components/DashboardShell";
import {
  Shield,
  Bell,
  Sparkles,
  KeyRound,
  Palette,
  Sun,
  Moon,
  Monitor,
  Check,
  Eye,
  EyeOff,
  Copy,
  Trash2,
  ExternalLink,
  Clipboard,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { useTheme, type Theme } from "@/components/theme-provider";
import {
  AI_PROVIDERS,
  type AiProviderId,
  type StoredApiKey,
  getStoredApiKeys,
  saveApiKey,
  deleteApiKey,
  maskApiKey,
} from "@/lib/api-keys";

export const Route = createFileRoute("/dashboard/settings")({ component: SettingsPage });

const tabs = [
  { id: "appearance", label: "Appearance", Icon: Palette },
  { id: "security", label: "Security", Icon: Shield },
  { id: "notifs", label: "Notifications", Icon: Bell },
  { id: "ai", label: "AI agents", Icon: Sparkles },
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
  const [tab, setTab] = useState("appearance");
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
          {tab === "api" && <ApiKeysTab />}
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

function OpenAiLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1638a.0804.0804 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6609v.0033zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.145-2.1288l2.548-1.4704 2.548 1.4704v2.9409l-2.548 1.4704-2.548-1.4704z" />
    </svg>
  );
}

function GeminiLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  );
}

function AnthropicLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.2 3.2a.8.8 0 0 0-1.4 0L6.4 17.6a.8.8 0 0 0 .7 1.2h3.2l1.6-4.5h4.2l1.6 4.5h3.2a.8.8 0 0 0 .7-1.2L14.2 3.2zm-1.3 7.8 1.3-3.7 1.3 3.7h-2.6z" />
    </svg>
  );
}

function ProviderIcon({ provider, className = "size-5" }: { provider: AiProviderId; className?: string }) {
  if (provider === "openai") return <OpenAiLogo className={className} />;
  if (provider === "gemini") return <GeminiLogo className={className} />;
  return <AnthropicLogo className={className} />;
}

function ApiKeysTab() {
  const [selectedProvider, setSelectedProvider] = useState<AiProviderId>("openai");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [keyLabelInput, setKeyLabelInput] = useState("");
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [storedKeys, setStoredKeys] = useState<StoredApiKey[]>([]);
  const [revealedKeyIds, setRevealedKeyIds] = useState<Record<string, boolean>>({});
  const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);

  useEffect(() => {
    setStoredKeys(getStoredApiKeys());
  }, []);

  const activeProviderInfo = AI_PROVIDERS[selectedProvider];

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = apiKeyInput.trim();
    if (!trimmed) {
      toast.error("Please paste a valid API key.");
      return;
    }

    saveApiKey(selectedProvider, trimmed, keyLabelInput);
    setStoredKeys(getStoredApiKeys());
    setApiKeyInput("");
    setKeyLabelInput("");
    setShowKeyInput(false);
    toast.success(`${activeProviderInfo.name} API key connected successfully!`);
  };

  const handleDelete = (id: string, name: string) => {
    deleteApiKey(id);
    setStoredKeys(getStoredApiKeys());
    toast.success(`${name} API key removed.`);
  };

  const handleCopy = async (id: string, key: string) => {
    try {
      await navigator.clipboard.writeText(key);
      setCopiedKeyId(id);
      toast.success("API key copied to clipboard!");
      setTimeout(() => setCopiedKeyId(null), 2000);
    } catch {
      toast.error("Failed to copy to clipboard.");
    }
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setApiKeyInput(text.trim());
        toast.info("Pasted from clipboard.");
      }
    } catch {
      toast.error("Unable to read clipboard. Please paste manually.");
    }
  };

  const toggleReveal = (id: string) => {
    setRevealedKeyIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const providerList: AiProviderId[] = ["openai", "gemini", "anthropic"];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-base font-semibold">API Keys & AI Providers</p>
        <p className="text-xs text-muted-foreground">
          Paste your own API key for OpenAI, Google Gemini, or Anthropic Claude to power your document intelligence pipeline.
        </p>
      </div>

      {/* Provider Selector */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          1. Select AI Provider
        </label>
        <div className="grid gap-3 sm:grid-cols-3">
          {providerList.map((pId) => {
            const provider = AI_PROVIDERS[pId];
            const isSelected = selectedProvider === pId;
            const hasExistingKey = storedKeys.some((k) => k.provider === pId);

            return (
              <button
                key={pId}
                type="button"
                onClick={() => setSelectedProvider(pId)}
                className={`relative flex flex-col justify-between rounded-2xl border p-4 text-left transition-all ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-glow ring-2 ring-primary/30"
                    : "border-border bg-background/50 hover:border-primary/40 hover:bg-secondary/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`grid size-10 place-items-center rounded-xl ${
                        pId === "openai"
                          ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                          : pId === "gemini"
                          ? "bg-blue-500/15 text-blue-600 dark:text-blue-400"
                          : "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                      }`}
                    >
                      <ProviderIcon provider={pId} className="size-5" />
                    </div>
                    {hasExistingKey && (
                      <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Connected
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold">{provider.name}</p>
                  <span className="mt-0.5 inline-block text-[11px] font-medium text-primary">
                    {provider.badge}
                  </span>
                  <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {provider.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Paste API Key Input Section */}
      <div className="rounded-2xl border border-border bg-background/50 p-4 sm:p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              2. Paste your {activeProviderInfo.name} API Key
            </label>
            <p className="text-xs text-muted-foreground mt-0.5">
              {activeProviderInfo.keyPrefixHint}
            </p>
          </div>
          <a
            href={activeProviderInfo.getKeyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
          >
            Get {activeProviderInfo.name} API key <ExternalLink className="size-3" />
          </a>
        </div>

        <form onSubmit={handleSave} className="space-y-3">
          <div className="relative flex items-center">
            <div className="pointer-events-none absolute left-3 flex items-center text-muted-foreground">
              <KeyRound className="size-4" />
            </div>
            <input
              type={showKeyInput ? "text" : "password"}
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              placeholder={`Paste your key here (e.g. ${activeProviderInfo.placeholder})`}
              className="w-full rounded-xl border border-border bg-background px-9 py-2.5 font-mono text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
            <div className="absolute right-2 flex items-center gap-1">
              <button
                type="button"
                onClick={handlePasteClipboard}
                title="Paste from clipboard"
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Clipboard className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setShowKeyInput(!showKeyInput)}
                title={showKeyInput ? "Hide key" : "Show key"}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                {showKeyInput ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <input
              type="text"
              value={keyLabelInput}
              onChange={(e) => setKeyLabelInput(e.target.value)}
              placeholder={`Key nickname (optional, e.g. Primary ${activeProviderInfo.name} Key)`}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
            />
            <button
              type="submit"
              disabled={!apiKeyInput.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-5 py-2 text-sm font-semibold text-white shadow-glow transition-all hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Check className="size-4" />
              Connect & Save Key
            </button>
          </div>
        </form>
      </div>

      {/* Connected Keys List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">
            Connected API Keys ({storedKeys.length})
          </p>
          <span className="text-xs text-muted-foreground">Persisted in local browser storage</span>
        </div>

        {storedKeys.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-8 text-center bg-background/30">
            <div className="mx-auto grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground mb-2">
              <Sparkles className="size-5" />
            </div>
            <p className="text-sm font-medium">No custom API keys connected yet</p>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
              Select OpenAI, Google Gemini, or Anthropic Claude above, paste your API key, and click Connect to use your own keys.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {storedKeys.map((stored) => {
              const provider = AI_PROVIDERS[stored.provider];
              const isRevealed = revealedKeyIds[stored.id];
              const isCopied = copiedKeyId === stored.id;

              return (
                <div
                  key={stored.id}
                  className="rounded-2xl border border-border bg-background p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all hover:border-primary/30"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`grid size-9 shrink-0 place-items-center rounded-xl ${
                        stored.provider === "openai"
                          ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                          : stored.provider === "gemini"
                          ? "bg-blue-500/15 text-blue-600 dark:text-blue-400"
                          : "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                      }`}
                    >
                      <ProviderIcon provider={stored.provider} className="size-4.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold">{stored.label || provider.name}</p>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                          {provider.name}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="size-3" /> Active
                        </span>
                      </div>
                      <p className="font-mono text-xs text-muted-foreground mt-1 break-all">
                        {isRevealed ? stored.key : maskApiKey(stored.key)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleReveal(stored.id)}
                      title={isRevealed ? "Hide key" : "Reveal full key"}
                      className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors flex items-center gap-1"
                    >
                      {isRevealed ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                      <span className="hidden sm:inline">{isRevealed ? "Hide" : "Reveal"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopy(stored.id, stored.key)}
                      title="Copy full key"
                      className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors flex items-center gap-1"
                    >
                      {isCopied ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
                      <span>{isCopied ? "Copied" : "Copy"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(stored.id, stored.label || provider.name)}
                      title="Remove key"
                      className="rounded-lg border border-red-500/20 bg-red-500/10 px-2.5 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-500/20 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="size-3.5" />
                      <span className="hidden sm:inline">Delete</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Security Note */}
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-start gap-3">
        <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <p className="text-xs font-semibold text-foreground">Client-Side Security Guarantee</p>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Your API keys are securely stored in your browser&apos;s local storage and used directly for agent reasoning requests. CogniFlow never sends your third-party keys to unauthenticated backend servers.
          </p>
        </div>
      </div>
    </div>
  );
}