import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme, type Theme } from "./theme-provider";

export function ThemeToggle({
  variant = "dropdown",
  className = "",
}: {
  variant?: "dropdown" | "simple";
  className?: string;
}) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (variant === "simple") {
    return (
      <button
        onClick={toggleTheme}
        className={`relative grid size-9 place-items-center rounded-xl border border-border bg-background/60 text-muted-foreground transition hover:text-foreground hover:bg-secondary ${className}`}
        aria-label="Toggle theme"
        title={`Current mode: ${theme === "system" ? `System (${resolvedTheme})` : theme}`}
      >
        <motion.div
          key={resolvedTheme}
          initial={{ scale: 0.6, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.6, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </motion.div>
      </button>
    );
  }

  const options: { id: Theme; label: string; icon: typeof Sun }[] = [
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
    { id: "system", label: "System", icon: Monitor },
  ];

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="grid size-9 place-items-center rounded-xl border border-border bg-background/60 text-muted-foreground transition hover:text-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/20"
        aria-label="Theme settings"
        title={`Theme: ${theme === "system" ? `System (${resolvedTheme})` : theme}`}
      >
        <motion.div
          key={theme}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          {theme === "system" ? (
            <Monitor className="size-4 text-primary" />
          ) : resolvedTheme === "dark" ? (
            <Moon className="size-4 text-primary" />
          ) : (
            <Sun className="size-4 text-primary" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 z-50 mt-2 w-40 rounded-2xl glass-strong border border-border p-1.5 shadow-elevated"
          >
            <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Theme Mode
            </div>
            {options.map((opt) => {
              const Icon = opt.icon;
              const isSelected = theme === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setTheme(opt.id);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-2 rounded-xl px-2.5 py-1.5 text-xs font-medium transition ${
                    isSelected
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="size-3.5" />
                    <span>{opt.label}</span>
                  </div>
                  {isSelected && <Check className="size-3.5 text-primary" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
