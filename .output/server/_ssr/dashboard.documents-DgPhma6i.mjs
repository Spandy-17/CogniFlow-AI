import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as demoDocs } from "./router-oRtFlNxA.mjs";
import { $ as EllipsisVertical, B as Funnel, at as Clock, et as Download, lt as CircleCheck, q as FileText, st as CircleX, v as Search } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-CnF1AuAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.documents-DgPhma6i.js
var import_jsx_runtime = require_jsx_runtime();
var docs = demoDocs;
var statusStyles = {
	routed: {
		label: "Routed",
		cls: "bg-success/15 text-success",
		Icon: CircleCheck
	},
	review: {
		label: "Needs review",
		cls: "bg-warning/15 text-warning",
		Icon: Clock
	},
	processing: {
		label: "Processing",
		cls: "bg-primary/10 text-primary",
		Icon: Clock
	},
	rejected: {
		label: "Rejected",
		cls: "bg-destructive/10 text-destructive",
		Icon: CircleX
	}
};
function DocumentsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "My Documents",
		subtitle: "Every document processed by your agent pipelines.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Export"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "!p-0 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-3 border-b border-border/60 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-64",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						placeholder: "Search documents…",
						className: "w-full rounded-xl border border-border bg-background/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4" }), " Filters"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1 text-xs",
					children: [
						"All",
						"Certificate",
						"Report",
						"Invoice",
						"Contract"
					].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `rounded-lg px-2.5 py-1.5 ${i === 0 ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:bg-secondary"}`,
						children: t
					}, t))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-[11px] uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "[&>th]:px-4 [&>th]:py-3 [&>th]:text-left [&>th]:font-medium",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Document" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Category" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Confidence" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Folder" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Uploaded" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: docs.map((d) => {
					const s = statusStyles[d.status];
					const Icon = s.Icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border/50 hover:bg-secondary/40 [&>td]:px-4 [&>td]:py-3 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/dashboard/document/$docId",
								params: { docId: d.id },
								className: "flex items-center gap-3 hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-9 place-items-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: d.name
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium",
								children: d.cat
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "tabular-nums",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1.5 w-20 overflow-hidden rounded-full bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2",
											style: { width: `${d.conf}%` }
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-medium",
										children: [d.conf, "%"]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${s.cls}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3" }),
									" ",
									s.label
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-muted-foreground text-xs",
								children: d.folder
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-muted-foreground text-xs",
								children: d.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-muted-foreground hover:text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "size-4" })
							}) })
						]
					}, d.id);
				}) })]
			})
		})]
	})] });
}
//#endregion
export { DocumentsPage as component };
