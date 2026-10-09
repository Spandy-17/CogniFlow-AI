import { a as __toESM } from "../_runtime.mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { at as Clock, b as RotateCcw, l as ThumbsUp, lt as CircleCheck, n as X, o as TriangleAlert, q as FileText, st as CircleX, u as ThumbsDown } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-CnF1AuAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.validation-DXdlS_OJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var queues = [
	{
		key: "approved",
		label: "Approved",
		count: 218,
		Icon: CircleCheck,
		cls: "text-success bg-success/15"
	},
	{
		key: "rejected",
		label: "Rejected",
		count: 34,
		Icon: CircleX,
		cls: "text-destructive bg-destructive/10"
	},
	{
		key: "review",
		label: "Needs review",
		count: 12,
		Icon: TriangleAlert,
		cls: "text-warning bg-warning/15"
	},
	{
		key: "pending",
		label: "Pending",
		count: 47,
		Icon: Clock,
		cls: "text-primary bg-primary/10"
	}
];
var items = [
	{
		name: "Invoice_Acme_1204.pdf",
		cat: "Invoice",
		conf: 74.2,
		reason: "Missing tax ID field"
	},
	{
		name: "Transcript_S24.jpg",
		cat: "Transcript",
		conf: 88.7,
		reason: "Low OCR confidence in row 3"
	},
	{
		name: "Contract_MSA_v2.docx",
		cat: "Contract",
		conf: 91.3,
		reason: "Signature block ambiguous"
	},
	{
		name: "Certificate_Alan.pdf",
		cat: "Certificate",
		conf: 82.1,
		reason: "Template version mismatch"
	}
];
function ValidationPage() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Validation Center",
			subtitle: "Human-in-the-loop for edge cases the agents flagged."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 grid-cols-2 lg:grid-cols-4 mb-4",
			children: queues.map((q) => {
				const Icon = q.Icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid size-9 place-items-center rounded-xl ${q.cls}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-2xl font-bold tabular-nums",
						children: q.count
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: q.label
					})
				] }, q.key);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "!p-0 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border/60 px-4 py-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Needs your attention"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted-foreground",
					children: [items.length, " items"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border/50",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 cursor-pointer",
					onClick: () => setOpen(it),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-9 place-items-center rounded-xl bg-warning/15 text-warning",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold truncate",
								children: it.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground truncate",
								children: it.reason
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-medium text-muted-foreground tabular-nums",
							children: [it.conf, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium",
							children: it.cat
						})
					]
				}, it.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm",
			onClick: () => setOpen(null)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
			initial: { x: "100%" },
			animate: { x: 0 },
			exit: { x: "100%" },
			transition: {
				type: "spring",
				damping: 30,
				stiffness: 240
			},
			className: "fixed right-0 top-0 z-50 h-screen w-full max-w-xl bg-background shadow-elevated border-l border-border overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-sm",
						children: open.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							open.cat,
							" · ",
							open.conf,
							"% confidence"
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(null),
					className: "text-muted-foreground hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] rounded-2xl bg-secondary grid place-items-center text-muted-foreground text-xs",
						children: "Document preview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
						children: "Extracted text"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border bg-background p-3 text-xs text-muted-foreground leading-relaxed max-h-32 overflow-auto",
						children: "This certifies that Ada Lovelace has successfully completed the Advanced Machine Learning program with distinction on the 24th day of August, 2025…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
						children: "Validation report"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-warning/30 bg-warning/5 p-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold text-warning",
							children: ["⚠ ", open.reason]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground",
							children: "Confidence below threshold (95%). Manual review recommended."
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-success text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "size-4" }), " Approve"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-destructive text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsDown, { className: "size-4" }), " Reject"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium hover:bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), " Send back"]
							})
						]
					})
				]
			})]
		})] }) })
	] });
}
//#endregion
export { ValidationPage as component };
