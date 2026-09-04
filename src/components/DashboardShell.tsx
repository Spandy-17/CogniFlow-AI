import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard, Upload, Files, Cpu, FolderTree, ShieldCheck,
  BarChart3, Bell, Settings, UserCircle, LogOut, Search, ChevronsLeft,
  ChevronsRight, Sparkles, Moon, Sun, MessageCircle,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { displayName, initials, useAuth } from "@/hooks/useAuth";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/dashboard/upload", label: "Upload", icon: Upload },
  { to: "/dashboard/documents", label: "My Documents", icon: Files },
  { to: "/dashboard/ai-processing", label: "AI Processing", icon: Cpu, badge: "Live" },
  { to: "/dashboard/folders", label: "Folders", icon: FolderTree },
  { to: "/dashboard/validation", label: "Validation", icon: ShieldCheck },
  { to: "/dashboard/reports", label: "Reports", icon: BarChart3 },
  { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
] as const;

const bottomNav = [
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
  { to: "/dashboard/profile", label: "Profile", icon: UserCircle },
] as const;

import { ThemeToggle } from "./ThemeToggle";
import { AiAssistant } from "./AiAssistant";
import { RoleSwitcher, roleRoutes, useRole } from "./RoleSwitcher";

export function DashboardShell() {
  const [collapsed, setCollapsed] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const name = displayName(user);

  const handleSignOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await signOut();
    navigate({ to: "/login", replace: true });
  };

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const role = useRole();
  const visibleNav = nav.filter((n) => roleRoutes[role].includes(n.to));

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 mesh-bg opacity-70" />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <motion.aside
          animate={{ width: collapsed ? 76 : 260 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="sticky top-0 h-screen shrink-0 overflow-hidden"
        >
          <div className="m-3 h-[calc(100vh-1.5rem)] glass-strong rounded-3xl flex flex-col p-3">
            <Link to="/" className="flex items-center gap-2.5 px-2 py-2">
              <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-glow">
                <Cpu className="size-5" />
              </div>
              <AnimatePresence>
                {!collapsed && (
                  <motion.div
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    className="min-w-0"
                  >
                    <p className="text-sm font-bold leading-tight">CogniFlow</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{role}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>

            <nav className="mt-4 flex-1 space-y-1">
              {visibleNav.map((n) => {
                const Icon = n.icon;
                const active = pathname === n.to || (n.to !== "/dashboard" && pathname.startsWith(n.to));
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`group relative flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm transition ${active
                        ? "bg-gradient-to-r from-brand-1/15 to-brand-2/10 text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-gradient-to-b from-brand-1 to-brand-2"
                      />
                    )}
                    <Icon className={`size-4.5 shrink-0 ${active ? "text-primary" : ""}`} />
                    <AnimatePresence>
                      {!collapsed && (
                        <motion.span
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -6 }}
                          className="flex-1 truncate font-medium"
                        >
                          {n.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {"badge" in n && !collapsed && (
                      <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                        {n.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="space-y-1">
              {bottomNav.map((n) => {
                const Icon = n.icon;
                const active = pathname.startsWith(n.to);
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm transition ${active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                  >
                    <Icon className="size-4.5 shrink-0" />
                    {!collapsed && <span className="truncate font-medium">{n.label}</span>}
                  </Link>
                );
              })}
              <button
                onClick={handleSignOut}
                className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition"
              >
                <LogOut className="size-4.5 shrink-0" />
                {!collapsed && <span className="font-medium">Logout</span>}
              </button>
            </div>

            <button
              onClick={() => setCollapsed((c) => !c)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-border bg-background/60 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-secondary"
            >
              {collapsed ? <ChevronsRight className="size-4" /> : <><ChevronsLeft className="size-4" /> Collapse</>}
            </button>
          </div>
        </motion.aside>

        {/* Main */}
        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 mx-3 mt-3 flex items-center gap-3 rounded-2xl glass-strong px-4 py-2.5">
            <div className="relative flex-1 max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search documents, folders, agents…"
                className="w-full rounded-xl border border-border bg-background/60 py-2 pl-9 pr-16 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
              />
              <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">⌘K</kbd>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <RoleSwitcher />
              <ThemeToggle />
              <button className="relative grid size-9 place-items-center rounded-xl border border-border bg-background/60 text-muted-foreground transition hover:text-foreground">
                <Bell className="size-4" />
                <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-primary" />
              </button>
              <div className="mx-1 h-6 w-px bg-border" />
              <div className="flex items-center gap-2 rounded-xl border border-border bg-background/60 py-1 pl-1 pr-3">
                <div className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-brand-1 to-brand-2 text-xs font-bold text-white">
                  {initials(name) || "CF"}
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-semibold leading-tight">{name}</p>
                  <p className="max-w-[160px] truncate text-[10px] text-muted-foreground">{user?.email}</p>
                </div>
              </div>
            </div>
          </header>

          <main className="p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>

      <AiAssistant />
    </div>
  );
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl glass-strong p-5 ${className}`}>{children}</div>;
}