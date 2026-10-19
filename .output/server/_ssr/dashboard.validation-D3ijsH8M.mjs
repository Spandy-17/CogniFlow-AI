import { a as __toESM } from "../_runtime.mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { b as RotateCcw, ct as CircleCheck, it as Clock, l as ThumbsUp, n as X, o as TriangleAlert, ot as CircleX, q as FileText, u as ThumbsDown } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B1_2tSzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.validation-D3ijsH8M.js
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
			subtitle: "Human-in-the-loop for edge cases the agents flagged.",
			"data-tsd-source": "/src/routes/dashboard.validation.tsx:27:7"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 grid-cols-2 lg:grid-cols-4 mb-4",
			"data-tsd-source": "/src/routes/dashboard.validation.tsx:28:7",
			children: queues.map((q) => {
				const Icon = q.Icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					"data-tsd-source": "/src/routes/dashboard.validation.tsx:32:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid size-9 place-items-center rounded-xl ${q.cls}`,
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:33:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4.5",
								"data-tsd-source": "/src/routes/dashboard.validation.tsx:33:85"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-2xl font-bold tabular-nums",
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:34:15",
							children: q.count
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:35:15",
							children: q.label
						})
					]
				}, q.key);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "!p-0 overflow-hidden",
			"data-tsd-source": "/src/routes/dashboard.validation.tsx:40:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border/60 px-4 py-3 flex items-center justify-between",
				"data-tsd-source": "/src/routes/dashboard.validation.tsx:41:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					"data-tsd-source": "/src/routes/dashboard.validation.tsx:42:11",
					children: "Needs your attention"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted-foreground",
					"data-tsd-source": "/src/routes/dashboard.validation.tsx:43:11",
					children: [items.length, " items"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border/50",
				"data-tsd-source": "/src/routes/dashboard.validation.tsx:45:9",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 cursor-pointer",
					onClick: () => setOpen(it),
					"data-tsd-source": "/src/routes/dashboard.validation.tsx:47:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-9 place-items-center rounded-xl bg-warning/15 text-warning",
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:48:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
								className: "size-4.5",
								"data-tsd-source": "/src/routes/dashboard.validation.tsx:48:101"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:49:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold truncate",
								"data-tsd-source": "/src/routes/dashboard.validation.tsx:50:17",
								children: it.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground truncate",
								"data-tsd-source": "/src/routes/dashboard.validation.tsx:51:17",
								children: it.reason
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-medium text-muted-foreground tabular-nums",
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:53:15",
							children: [it.conf, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium",
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:54:15",
							children: it.cat
						})
					]
				}, it.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			"data-tsd-source": "/src/routes/dashboard.validation.tsx:60:7",
			children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm",
				onClick: () => setOpen(null),
				"data-tsd-source": "/src/routes/dashboard.validation.tsx:63:13"
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
				"data-tsd-source": "/src/routes/dashboard.validation.tsx:64:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur px-5 py-4",
					"data-tsd-source": "/src/routes/dashboard.validation.tsx:69:15",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						"data-tsd-source": "/src/routes/dashboard.validation.tsx:70:17",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:71:19",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "size-5",
								"data-tsd-source": "/src/routes/dashboard.validation.tsx:71:106"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:72:19",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-sm",
								"data-tsd-source": "/src/routes/dashboard.validation.tsx:73:21",
								children: open.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								"data-tsd-source": "/src/routes/dashboard.validation.tsx:74:21",
								children: [
									open.cat,
									" · ",
									open.conf,
									"% confidence"
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(null),
						className: "text-muted-foreground hover:text-foreground",
						"data-tsd-source": "/src/routes/dashboard.validation.tsx:77:17",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:77:111"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 space-y-4",
					"data-tsd-source": "/src/routes/dashboard.validation.tsx:79:15",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/5] rounded-2xl bg-secondary grid place-items-center text-muted-foreground text-xs",
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:80:17",
							children: "Document preview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:83:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
								"data-tsd-source": "/src/routes/dashboard.validation.tsx:84:19",
								children: "Extracted text"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl border border-border bg-background p-3 text-xs text-muted-foreground leading-relaxed max-h-32 overflow-auto",
								"data-tsd-source": "/src/routes/dashboard.validation.tsx:85:19",
								children: "This certifies that Ada Lovelace has successfully completed the Advanced Machine Learning program with distinction on the 24th day of August, 2025…"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:89:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
								"data-tsd-source": "/src/routes/dashboard.validation.tsx:90:19",
								children: "Validation report"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-warning/30 bg-warning/5 p-3 text-xs",
								"data-tsd-source": "/src/routes/dashboard.validation.tsx:91:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold text-warning",
									"data-tsd-source": "/src/routes/dashboard.validation.tsx:92:21",
									children: ["⚠ ", open.reason]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.validation.tsx:93:21",
									children: "Confidence below threshold (95%). Manual review recommended."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							"data-tsd-source": "/src/routes/dashboard.validation.tsx:96:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-success text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110",
									"data-tsd-source": "/src/routes/dashboard.validation.tsx:97:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, {
										className: "size-4",
										"data-tsd-source": "/src/routes/dashboard.validation.tsx:97:180"
									}), " Approve"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-destructive text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110",
									"data-tsd-source": "/src/routes/dashboard.validation.tsx:98:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsDown, {
										className: "size-4",
										"data-tsd-source": "/src/routes/dashboard.validation.tsx:98:184"
									}), " Reject"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium hover:bg-secondary",
									"data-tsd-source": "/src/routes/dashboard.validation.tsx:99:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
										className: "size-4",
										"data-tsd-source": "/src/routes/dashboard.validation.tsx:99:182"
									}), " Send back"]
								})
							]
						})
					]
				})]
			})] })
		})
	] });
}
//#endregion
export { ValidationPage as component };
