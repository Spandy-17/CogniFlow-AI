import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Cpu, Sparkles, ScanText, ShieldCheck, FolderTree, Database, Loader2 } from "lucide-react";
import type { ReactNode } from "react";

export function AuthShell({
  title, subtitle, children, footer,
}: { title: string; subtitle: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden lg:flex flex-col justify-between p-10 overflow-hidden bg-gradient-to-br from-navy to-[oklch(0.28_0.08_275)] text-white">
          <div className="absolute inset-0 mesh-bg opacity-40" />
          <Link to="/" className="relative flex items-center gap-2 z-10">
            <div className="grid size-9 place-items-center rounded-xl bg-white/10 backdrop-blur border border-white/20">
              <Cpu className="size-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">CogniFlow</span>
          </Link>
          <div className="relative z-10 max-w-md">
            <h2 className="text-3xl font-bold tracking-tight leading-tight">
              A swarm of AI agents,<br />working for you.
            </h2>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              CogniFlow's autonomous agents extract, classify, validate and route your documents —
              so your team can focus on the work that actually matters.
            </p>
            <div className="mt-8 space-y-3">
              {[
                { i: ScanText, t: "OCR Agent", s: "Extracting text from PDFs & scans" },
                { i: Sparkles, t: "Classification Agent", s: "Confidence 98.4%" },
                { i: ShieldCheck, t: "Validation Agent", s: "Template match: PASS" },
                { i: FolderTree, t: "Routing Agent", s: "→ /Certificates/2025" },
                { i: Database, t: "Central Database", s: "Indexed & searchable" },
              ].map((r, i) => {
                const Icon = r.i;
                return (
                  <motion.div
                    key={r.t}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-3 py-2.5"
                  >
                    <div className="grid size-8 place-items-center rounded-lg bg-white/10">
                      <Icon className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{r.t}</p>
                      <p className="text-xs text-white/60 truncate">{r.s}</p>
                    </div>
                    <div className="ml-auto size-2 rounded-full bg-emerald-400 animate-pulse" />
                  </motion.div>
                );
              })}
            </div>
          </div>
          <p className="relative z-10 text-xs text-white/50">
            © 2026 CogniFlow · Enterprise-grade document intelligence
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md rounded-3xl glass-strong p-8 shadow-elevated"
          >
            <Link to="/" className="lg:hidden mb-6 flex items-center gap-2">
              <div className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white">
                <Cpu className="size-4" />
              </div>
              <span className="font-bold">CogniFlow</span>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>
            <div className="mt-6">{children}</div>
            {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Field({
  label, type = "text", placeholder, id, value, onChange, required, autoComplete,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  id: string;
  value?: string;
  onChange?: (v: string) => void;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-foreground/80">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-xl border border-border bg-background/70 px-3.5 py-2.5 text-sm shadow-soft outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}

export function PrimaryButton({
  children, type = "button", onClick, loading, disabled,
}: {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? <Loader2 className="size-4 animate-spin" /> : children}
    </button>
  );
}

export function GoogleButton({ onClick, loading }: { onClick?: () => void; loading?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/70 px-4 py-2.5 text-sm font-semibold transition hover:bg-secondary disabled:opacity-60"
    >
      {loading ? <Loader2 className="size-4 animate-spin" /> : (
        <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
          <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.9 1.5l2.6-2.5C16.9 3.7 14.7 2.7 12 2.7 6.9 2.7 2.8 6.8 2.8 12S6.9 21.3 12 21.3c6.9 0 9.4-4.8 9.4-8.6 0-.6-.1-1-.1-1.5H12z"/>
        </svg>
      )}
      Continue with Google
    </button>
  );
}

export function FormMessage({ error, success }: { error?: string | null; success?: string | null }) {
  if (!error && !success) return null;
  return (
    <div
      className={`rounded-xl border px-3.5 py-2.5 text-xs font-medium ${
        error
          ? "border-destructive/30 bg-destructive/10 text-destructive"
          : "border-success/30 bg-success/10 text-success"
      }`}
    >
      {error || success}
    </div>
  );
}
