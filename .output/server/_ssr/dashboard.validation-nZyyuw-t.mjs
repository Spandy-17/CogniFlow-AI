import { a as __toESM } from "../_runtime.mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { i as fetchAllDocuments } from "./document-service-drZtwzY8.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as LoaderCircle, H as FileText, Q as Clock, Z as CloudUpload, _ as RotateCcw, a as TriangleAlert, c as ThumbsDown, n as X, rt as CircleCheck, s as ThumbsUp, tt as CircleX } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B6vwdakD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.validation-nZyyuw-t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ValidationPage() {
	const [docs, setDocs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [open, setOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		fetchAllDocuments().then(setDocs).catch(() => setDocs([])).finally(() => setLoading(false));
	}, []);
	const reviewDocs = docs.filter((d) => d.status === "review");
	const approvedDocs = docs.filter((d) => d.status === "routed");
	const rejectedDocs = docs.filter((d) => d.status === "rejected");
	const processingDocs = docs.filter((d) => d.status === "processing");
	const queues = [
		{
			key: "approved",
			label: "Routed / Approved",
			count: approvedDocs.length,
			Icon: CircleCheck,
			cls: "text-success bg-success/15"
		},
		{
			key: "rejected",
			label: "Rejected",
			count: rejectedDocs.length,
			Icon: CircleX,
			cls: "text-destructive bg-destructive/10"
		},
		{
			key: "review",
			label: "Needs Review",
			count: reviewDocs.length,
			Icon: TriangleAlert,
			cls: "text-warning bg-warning/15"
		},
		{
			key: "processing",
			label: "Processing",
			count: processingDocs.length,
			Icon: Clock,
			cls: "text-primary bg-primary/10"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Validation Center",
			subtitle: "Human-in-the-loop review for documents flagged by agents."
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
					children: [
						reviewDocs.length,
						" item",
						reviewDocs.length !== 1 ? "s" : ""
					]
				})]
			}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center py-12 gap-2 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm",
					children: "Loading documents…"
				})]
			}) : reviewDocs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-10 opacity-30 text-success" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-foreground",
						children: "No documents need review"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-center max-w-sm",
						children: "All uploaded documents have been processed successfully. Documents flagged by the validation agents will appear here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard/upload",
						className: "mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-3.5" }), " Upload Documents"]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border/50",
				children: reviewDocs.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 cursor-pointer",
					onClick: () => setOpen(doc),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-9 place-items-center rounded-xl bg-warning/15 text-warning",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold truncate",
								children: doc.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground truncate",
								children: doc.validation?.find((v) => !v.passed)?.rule || "Low confidence or validation failure"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-medium text-muted-foreground tabular-nums",
							children: [doc.conf, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium",
							children: doc.cat
						})
					]
				}, doc.id))
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
					open.extracted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
						children: "Extracted text"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border bg-background p-3 text-xs text-muted-foreground leading-relaxed max-h-40 overflow-auto font-mono whitespace-pre-wrap",
						children: open.extracted
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
						children: "Validation report"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-warning/30 bg-warning/5 p-3 text-xs space-y-1",
						children: open.validation && open.validation.length > 0 ? open.validation.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [v.passed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-success shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-3.5 text-destructive shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: v.passed ? "text-muted-foreground" : "text-destructive font-semibold",
								children: v.rule
							})]
						}, i)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-warning font-semibold",
							children: "⚠ Document confidence below threshold. Manual review recommended."
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									toast.success(`${open.name} approved`);
									setOpen(null);
								},
								className: "inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-success text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "size-4" }), " Approve"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									toast.error(`${open.name} rejected`);
									setOpen(null);
								},
								className: "inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-destructive text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsDown, { className: "size-4" }), " Reject"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									toast.info("Sent back for re-processing");
									setOpen(null);
								},
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
