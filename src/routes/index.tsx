import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Play, ScanText, Sparkles, ShieldCheck, FolderTree,
  Cpu, Layers, KeyRound, Database, Github, FileText, Zap,
  CheckCircle2, ChevronRight, MoveRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CogniFlow — Automate Document Intelligence with AI" },
      { name: "description", content: "Multi-agent AI that extracts, classifies, validates and routes documents automatically." },
      { property: "og:title", content: "CogniFlow — Automate Document Intelligence with AI" },
      { property: "og:description", content: "Multi-agent AI that extracts, classifies, validates and routes documents automatically." },
    ],
  }),
  component: Landing,
});

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  useEffect(() => {
    if (inView) animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
  }, [inView, to, duration, mv]);
  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const agents = [
  { key: "upload", label: "Upload", icon: FileText, detail: "Ingesting document.pdf" },
  { key: "ocr", label: "OCR Agent", icon: ScanText, detail: "Extracting text · 98%" },
  { key: "classify", label: "Classification", icon: Sparkles, detail: "Category: Certificate" },
  { key: "validate", label: "Validation", icon: ShieldCheck, detail: "Template match: PASS" },
  { key: "route", label: "Routing", icon: FolderTree, detail: "→ /Certificates/2025" },
  { key: "db", label: "Database", icon: Database, detail: "Indexed · Searchable" },
];

function AgentPipeline() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % agents.length), 1400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative rounded-3xl glass-strong p-6 shadow-elevated">
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-success animate-pulse" />
          <span>Live pipeline · agent swarm</span>
        </div>
        <span className="tabular-nums">avg 28s</span>
      </div>
      <ol className="space-y-2.5">
        {agents.map((a, i) => {
          const Icon = a.icon;
          const isActive = i === active;
          const isDone = i < active;
          return (
            <li
              key={a.key}
              className={`relative flex items-center gap-3 rounded-2xl border px-3.5 py-3 transition-colors ${
                isActive ? "border-primary/40 bg-primary/5" : "border-border/60 bg-background/40"
              }`}
            >
              <div
                className={`grid size-9 shrink-0 place-items-center rounded-xl transition-all ${
                  isActive
                    ? "bg-gradient-to-br from-brand-1 to-brand-2 text-white animate-pulse-ring"
                    : isDone
                      ? "bg-success/15 text-success"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold">{a.label}</p>
                  <span className={`text-[10px] font-medium uppercase tracking-wider ${
                    isActive ? "text-primary" : isDone ? "text-success" : "text-muted-foreground"
                  }`}>
                    {isActive ? "Processing" : isDone ? "Complete" : "Queued"}
                  </span>
                </div>
                <p className="truncate text-xs text-muted-foreground">{a.detail}</p>
                {isActive && (
                  <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-primary/10">
                    <motion.div
                      className="h-full w-1/2 rounded-full bg-gradient-to-r from-brand-1 to-brand-2"
                      initial={{ x: "-100%" }}
                      animate={{ x: "220%" }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";

function Navbar() {
  const { session } = useAuth();
  return (
    <header className="sticky top-4 z-40 mx-auto flex w-[min(1200px,94%)] items-center justify-between rounded-2xl glass-strong px-4 py-2.5">
      <Link to="/" className="flex items-center gap-2">
        <div className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-glow">
          <Cpu className="size-4" />
        </div>
        <span className="text-[15px] font-bold tracking-tight">CogniFlow</span>
      </Link>
      <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
        <a href="#features" className="hover:text-foreground transition">Features</a>
        <a href="#workflow" className="hover:text-foreground transition">How it works</a>
        <a href="#stats" className="hover:text-foreground transition">Metrics</a>
        <a href="#footer" className="hover:text-foreground transition">Docs</a>
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        {session ? (
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 rounded-xl bg-foreground px-3.5 py-1.5 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Open dashboard <ArrowRight className="size-3.5" />
          </Link>
        ) : (
          <>
            <Link to="/login" className="hidden sm:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5">
              Sign in
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center gap-1.5 rounded-xl bg-foreground px-3.5 py-1.5 text-sm font-semibold text-background transition hover:opacity-90"
            >
              Get started <ArrowRight className="size-3.5" />
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

const features = [
  { icon: Zap, title: "AI-Powered Automation", desc: "End-to-end pipelines that run themselves — from ingest to routing." },
  { icon: Layers, title: "Multi-Agent Intelligence", desc: "Specialized agents collaborate: OCR, classification, validation, routing." },
  { icon: ScanText, title: "OCR Extraction", desc: "Structured text from PDFs, scans and images with 99% fidelity." },
  { icon: Sparkles, title: "LLM Classification", desc: "Domain-tuned models label documents with confidence scores." },
  { icon: FolderTree, title: "Automatic Routing", desc: "Documents land in the right folder — every time, no human effort." },
  { icon: ShieldCheck, title: "Template Validation", desc: "Enforce schemas, catch anomalies, block malformed uploads." },
  { icon: KeyRound, title: "Role-Based Access", desc: "Student, Faculty, Coordinator and Admin roles out of the box." },
  { icon: Database, title: "Secure Storage", desc: "Encrypted at rest, audited access, immutable event logs." },
];

const stats = [
  { value: 5000, suffix: "+", label: "Documents processed" },
  { value: 99, suffix: "%", label: "Classification accuracy" },
  { value: 85, suffix: "%", label: "Reduced manual effort" },
  { value: 30, suffix: "s", label: "Avg processing time" },
];

const workflow = [
  { icon: FileText, label: "Upload" },
  { icon: ScanText, label: "OCR" },
  { icon: Sparkles, label: "Classify" },
  { icon: ShieldCheck, label: "Validate" },
  { icon: FolderTree, label: "Route" },
  { icon: Database, label: "Store" },
  { icon: Cpu, label: "Analytics" },
];

function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl rounded-3xl glass-strong p-6 shadow-elevated"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold tracking-tight">CogniFlow product demo</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Watch the agent swarm ingest, extract, classify, validate and route a document — live.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border border-border px-2.5 py-1 text-xs font-semibold text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            Close
          </button>
        </div>
        <div className="mt-5">
          <AgentPipeline />
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            Create your account <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition hover:bg-secondary"
          >
            Sign in
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function Landing() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <>
    <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-bg opacity-70" />
      </div>

      <div className="pt-4">
        <Navbar />
      </div>

      <section className="relative mx-auto mt-16 w-[min(1200px,94%)] pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80"
            >
              <span className="grid size-4 place-items-center rounded-full bg-gradient-to-br from-brand-1 to-brand-2 text-white">
                <Sparkles className="size-2.5" />
              </span>
              Introducing multi-agent v2 · now generally available
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              Automate Document<br />
              Intelligence with <span className="gradient-text animate-gradient">AI Agents</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-xl text-lg text-muted-foreground"
            >
              CogniFlow orchestrates a swarm of specialized AI agents that extract, classify,
              validate and route documents — with near-zero human effort and enterprise accuracy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/signup"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                Get started free
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl glass-strong glass-hover px-5 py-3 text-sm font-semibold text-foreground transition"
              >
                <Play className="size-4 fill-current" />
                Watch demo
              </button>
            </motion.div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              {["SOC2 ready", "GDPR compliant", "Self-hostable", "SSO / SAML"].map((x) => (
                <div key={x} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-success" /> {x}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-1/20 via-brand-2/15 to-transparent blur-2xl" />
            <AgentPipeline />
            <motion.div
              className="absolute -left-6 top-8 hidden md:flex items-center gap-2 rounded-2xl glass-strong px-3 py-2 text-xs font-medium shadow-soft"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="grid size-6 place-items-center rounded-lg bg-success/15 text-success">
                <CheckCircle2 className="size-3.5" />
              </div>
              Confidence 98.4%
            </motion.div>
            <motion.div
              className="absolute -right-4 -bottom-4 hidden md:flex items-center gap-2 rounded-2xl glass-strong px-3 py-2 text-xs font-medium shadow-soft"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <div className="grid size-6 place-items-center rounded-lg bg-primary/15 text-primary">
                <FolderTree className="size-3.5" />
              </div>
              Routed → /Certificates
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="mx-auto w-[min(1200px,94%)] py-24">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text">Why CogniFlow?</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Built for teams that ship intelligence.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Every capability you need to turn unstructured documents into a searchable,
            governed knowledge fabric — without stitching seven vendors together.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl glass-strong p-5 transition-shadow hover:shadow-elevated"
              >
                <div className="mb-4 grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-1/15 to-brand-2/15 text-primary transition group-hover:from-brand-1 group-hover:to-brand-2 group-hover:text-white">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-gradient-to-br from-brand-1/20 to-brand-2/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="workflow" className="mx-auto w-[min(1200px,94%)] py-24">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text">How it works</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            A choreographed swarm of AI agents.
          </h2>
        </div>
        <div className="rounded-3xl glass-strong p-8 shadow-elevated">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {workflow.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={w.label} className="flex items-center gap-2 shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-1/10 to-brand-2/10 border border-primary/20 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{w.label}</span>
                  </motion.div>
                  {i < workflow.length - 1 && (
                    <MoveRight className="size-4 text-muted-foreground/60 mb-6" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              "Documents arrive via drag-drop, API, or email inbox.",
              "Agents extract, classify and validate in seconds.",
              "Routed to the right folder, indexed, and searchable.",
            ].map((t) => (
              <div key={t} className="flex gap-2 rounded-xl border border-border/60 bg-background/50 p-3 text-sm text-muted-foreground">
                <ChevronRight className="size-4 text-primary shrink-0 mt-0.5" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="mx-auto w-[min(1200px,94%)] py-24">
        <div className="rounded-3xl bg-gradient-to-br from-navy to-[oklch(0.28_0.08_275)] p-10 md:p-14 text-navy-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 mesh-bg" />
          <div className="relative grid gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-5xl md:text-6xl font-extrabold tracking-tight gradient-text">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1200px,94%)] py-24">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 text-center shadow-elevated">
          <div className="absolute inset-0 -z-10 mesh-bg opacity-70" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to let your documents think?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Deploy in minutes. Scale to millions of documents. Pay for what you process.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/signup" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-glow">
              Start free trial <ArrowRight className="size-4" />
            </Link>
            <Link to="/login" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold">
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <footer id="footer" className="mx-auto w-[min(1200px,94%)] pb-10">
        <div className="flex flex-col gap-6 border-t border-border/60 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white">
              <Cpu className="size-4" />
            </div>
            <span className="text-sm font-semibold">CogniFlow</span>
            <span className="ml-3 text-xs text-muted-foreground">© 2026 · All rights reserved</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground inline-flex items-center gap-1.5"><Github className="size-4" /> GitHub</a>
            <a href="#" className="hover:text-foreground">Documentation</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
