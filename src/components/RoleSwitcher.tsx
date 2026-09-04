import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown, ShieldCheck } from "lucide-react";

export const ROLES = ["Student", "Faculty", "Coordinator", "Admin"] as const;
export type Role = (typeof ROLES)[number];

const KEY = "cogniflow.role";
const EVT = "cogniflow-role-change";

export function getRole(): Role {
    if (typeof window === "undefined") return "Faculty";
    const v = window.localStorage.getItem(KEY) as Role | null;
    return v && ROLES.includes(v) ? v : "Faculty";
}

export function setRole(role: Role) {
    window.localStorage.setItem(KEY, role);
    window.dispatchEvent(new CustomEvent(EVT));
}

export function useRole(): Role {
    const [role, set] = useState<Role>("Faculty");
    useEffect(() => {
        set(getRole());
        const on = () => set(getRole());
        window.addEventListener(EVT, on);
        return () => window.removeEventListener(EVT, on);
    }, []);
    return role;
}

/** Which sidebar routes each role can reach. */
export const roleRoutes: Record<Role, string[]> = {
    Student: ["/dashboard", "/dashboard/upload", "/dashboard/documents", "/dashboard/notifications"],
    Faculty: [
        "/dashboard", "/dashboard/upload", "/dashboard/documents", "/dashboard/ai-processing",
        "/dashboard/folders", "/dashboard/notifications",
    ],
    Coordinator: [
        "/dashboard", "/dashboard/upload", "/dashboard/documents", "/dashboard/ai-processing",
        "/dashboard/folders", "/dashboard/validation", "/dashboard/reports", "/dashboard/notifications",
    ],
    Admin: [
        "/dashboard", "/dashboard/upload", "/dashboard/documents", "/dashboard/ai-processing",
        "/dashboard/folders", "/dashboard/validation", "/dashboard/reports", "/dashboard/notifications",
    ],
};

export function RoleSwitcher() {
    const role = useRole();
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="flex items-center gap-1.5 rounded-xl border border-border bg-background/60 px-2.5 py-2 text-xs font-semibold text-muted-foreground transition hover:text-foreground"
            >
                <ShieldCheck className="size-3.5 text-primary" />
                <span className="hidden sm:inline">{role}</span>
                <ChevronDown className="size-3" />
            </button>
            <AnimatePresence>
                {open && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                        <motion.ul
                            initial={{ opacity: 0, y: -6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            role="listbox"
                            className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl glass-strong p-1.5 shadow-xl"
                        >
                            <li className="px-2 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">View as role</li>
                            {ROLES.map((r) => (
                                <li key={r}>
                                    <button
                                        role="option"
                                        aria-selected={r === role}
                                        onClick={() => {
                                            setRole(r);
                                            setOpen(false);
                                        }}
                                        className={`flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-sm transition ${r === role ? "bg-primary/10 font-semibold text-primary" : "hover:bg-secondary"
                                            }`}
                                    >
                                        {r}
                                        {r === role && <Check className="ml-auto size-3.5" />}
                                    </button>
                                </li>
                            ))}
                        </motion.ul>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
