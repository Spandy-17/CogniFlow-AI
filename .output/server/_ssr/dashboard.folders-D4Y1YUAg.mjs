import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { S as Plus, U as FolderOpen, V as Folder, ft as ChevronRight, v as Search } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-CnF1AuAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.folders-D4Y1YUAg.js
var import_jsx_runtime = require_jsx_runtime();
var folders = [
	{
		name: "Certificates",
		count: 482,
		size: "3.1 GB",
		tint: "from-brand-1 to-brand-2"
	},
	{
		name: "Reports",
		count: 236,
		size: "5.4 GB",
		tint: "from-emerald-500 to-teal-500"
	},
	{
		name: "Invoices",
		count: 148,
		size: "1.2 GB",
		tint: "from-amber-500 to-orange-500"
	},
	{
		name: "Contracts",
		count: 89,
		size: "820 MB",
		tint: "from-rose-500 to-pink-500"
	},
	{
		name: "Transcripts",
		count: 312,
		size: "2.7 GB",
		tint: "from-sky-500 to-indigo-500"
	},
	{
		name: "Archive",
		count: 1042,
		size: "18 GB",
		tint: "from-slate-500 to-slate-700"
	}
];
var tree = [
	{
		name: "Certificates",
		children: [
			"2025",
			"2024",
			"2023"
		]
	},
	{
		name: "Reports",
		children: ["Quarterly", "Annual"]
	},
	{
		name: "Invoices",
		children: ["Paid", "Pending"]
	}
];
function FoldersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Folders",
			subtitle: "Auto-organized by the Routing Agent.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-3 py-2 text-sm font-semibold text-white shadow-glow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " New folder"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 relative max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				placeholder: "Search folders…",
				className: "w-full rounded-xl border border-border bg-background/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1.6fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: folders.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: i * .04 },
					whileHover: { y: -3 },
					className: "group relative overflow-hidden rounded-2xl glass-strong p-5 text-left transition-shadow hover:shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `mb-4 grid size-11 place-items-center rounded-xl bg-gradient-to-br ${f.tint} text-white`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-semibold",
							children: f.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-center justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [f.count.toLocaleString(), " files"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: f.size
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" })
					]
				}, f.name))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold mb-2",
				children: "Folder tree"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1 text-sm",
				children: tree.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-secondary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-4 text-primary" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: t.name
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "ml-6 border-l border-border pl-3",
					children: t.children.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2 rounded-lg px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-secondary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" }),
							" ",
							c
						]
					}, c))
				})] }, t.name))
			})] })]
		})
	] });
}
//#endregion
export { FoldersPage as component };
