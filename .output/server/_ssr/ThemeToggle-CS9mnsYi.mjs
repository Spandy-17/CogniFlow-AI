import { a as __toESM } from "../_runtime.mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useTheme } from "./router-XVNWBbpq.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { O as Moon, f as Sun, k as Monitor, mt as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ThemeToggle-CS9mnsYi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ThemeToggle({ variant = "dropdown", className = "" }) {
	const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
	const [open, setOpen] = (0, import_react.useState)(false);
	const dropdownRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	if (variant === "simple") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggleTheme,
		className: `relative grid size-9 place-items-center rounded-xl border border-border bg-background/60 text-muted-foreground transition hover:text-foreground hover:bg-secondary ${className}`,
		"aria-label": "Toggle theme",
		title: `Current mode: ${theme === "system" ? `System (${resolvedTheme})` : theme}`,
		"data-tsd-source": "/src/components/ThemeToggle.tsx:29:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				scale: .6,
				rotate: -90,
				opacity: 0
			},
			animate: {
				scale: 1,
				rotate: 0,
				opacity: 1
			},
			exit: {
				scale: .6,
				rotate: 90,
				opacity: 0
			},
			transition: { duration: .2 },
			"data-tsd-source": "/src/components/ThemeToggle.tsx:35:9",
			children: resolvedTheme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
				className: "size-4",
				"data-tsd-source": "/src/components/ThemeToggle.tsx:42:39"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
				className: "size-4",
				"data-tsd-source": "/src/components/ThemeToggle.tsx:42:68"
			})
		}, resolvedTheme)
	});
	const options = [
		{
			id: "light",
			label: "Light",
			icon: Sun
		},
		{
			id: "dark",
			label: "Dark",
			icon: Moon
		},
		{
			id: "system",
			label: "System",
			icon: Monitor
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: dropdownRef,
		className: `relative inline-block ${className}`,
		"data-tsd-source": "/src/components/ThemeToggle.tsx:55:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setOpen((o) => !o),
			className: "grid size-9 place-items-center rounded-xl border border-border bg-background/60 text-muted-foreground transition hover:text-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/20",
			"aria-label": "Theme settings",
			title: `Theme: ${theme === "system" ? `System (${resolvedTheme})` : theme}`,
			"data-tsd-source": "/src/components/ThemeToggle.tsx:56:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: .7,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				transition: { duration: .15 },
				"data-tsd-source": "/src/components/ThemeToggle.tsx:62:9",
				children: theme === "system" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, {
					className: "size-4 text-primary",
					"data-tsd-source": "/src/components/ThemeToggle.tsx:69:13"
				}) : resolvedTheme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
					className: "size-4 text-primary",
					"data-tsd-source": "/src/components/ThemeToggle.tsx:71:13"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
					className: "size-4 text-primary",
					"data-tsd-source": "/src/components/ThemeToggle.tsx:73:13"
				})
			}, theme)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			"data-tsd-source": "/src/components/ThemeToggle.tsx:78:7",
			children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 8,
					scale: .95
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				exit: {
					opacity: 0,
					y: 8,
					scale: .95
				},
				transition: {
					duration: .15,
					ease: "easeOut"
				},
				className: "absolute right-0 z-50 mt-2 w-40 rounded-2xl glass-strong border border-border p-1.5 shadow-elevated",
				"data-tsd-source": "/src/components/ThemeToggle.tsx:80:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
					"data-tsd-source": "/src/components/ThemeToggle.tsx:87:13",
					children: "Theme Mode"
				}), options.map((opt) => {
					const Icon = opt.icon;
					const isSelected = theme === opt.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setTheme(opt.id);
							setOpen(false);
						},
						className: `flex w-full items-center justify-between gap-2 rounded-xl px-2.5 py-1.5 text-xs font-medium transition ${isSelected ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
						"data-tsd-source": "/src/components/ThemeToggle.tsx:94:17",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							"data-tsd-source": "/src/components/ThemeToggle.tsx:106:19",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-3.5",
								"data-tsd-source": "/src/components/ThemeToggle.tsx:107:21"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-tsd-source": "/src/components/ThemeToggle.tsx:108:21",
								children: opt.label
							})]
						}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-3.5 text-primary",
							"data-tsd-source": "/src/components/ThemeToggle.tsx:110:34"
						})]
					}, opt.id);
				})]
			})
		})]
	});
}
//#endregion
export { ThemeToggle as t };
