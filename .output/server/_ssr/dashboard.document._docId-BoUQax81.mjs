import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as statusMeta, n as Route } from "./router-oRtFlNxA.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Ct as ArrowLeft, H as FolderTree, R as HardDrive, at as Clock, c as Trash2, et as Download, i as User, lt as CircleCheck, nt as Cpu, q as FileText, st as CircleX, x as RefreshCw } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-CnF1AuAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.document._docId-BoUQax81.js
var import_jsx_runtime = require_jsx_runtime();
function DocumentDetails() {
	const { doc } = Route.useLoaderData();
	const s = statusMeta[doc.status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/dashboard/documents",
			className: "mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All documents"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: doc.name,
			subtitle: `${doc.cat} · ${doc.pages} page${doc.pages > 1 ? "s" : ""} · uploaded ${doc.date}`,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }), " Reprocess"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-2 rounded-xl border border-destructive/40 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), " Delete"]
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-2 !p-0 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-border/60 px-5 py-3 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4 text-primary" }), " Preview"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid min-h-72 place-items-center bg-gradient-to-br from-secondary/60 to-transparent p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: "w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "whitespace-pre-wrap font-mono text-[11.5px] leading-relaxed text-muted-foreground",
								children: doc.extracted
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Metadata"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 space-y-2.5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: Cpu,
									label: "Detected category",
									value: doc.cat
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: CircleCheck,
									label: "Confidence",
									value: `${doc.conf}%`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: FolderTree,
									label: "Assigned folder",
									value: doc.folder
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: HardDrive,
									label: "File size",
									value: doc.size
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: User,
									label: "Uploaded by",
									value: doc.uploadedBy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: Clock,
									label: "Uploaded",
									value: doc.date
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${s.cls}`,
								children: s.label
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { width: 0 },
									animate: { width: `${doc.conf}%` },
									transition: {
										duration: .8,
										ease: "easeOut"
									},
									className: "h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-[11px] text-muted-foreground",
								children: "Classification confidence"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Validation report"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: doc.validation.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [v.passed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-0.5 size-4 shrink-0 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: v.passed ? "" : "text-muted-foreground",
								children: v.rule
							})]
						}, v.rule))
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Processing timeline & agent logs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-0",
						children: doc.timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								x: -8
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: i * .06 },
							className: "relative flex gap-4 pb-5 last:pb-0",
							children: [
								i < doc.timeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[13px] top-7 h-full w-px bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `relative z-10 mt-1 grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold ${t.state === "done" ? "bg-success/15 text-success" : t.state === "failed" ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary animate-pulse"}`,
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: t.agent
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: t.detail
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto shrink-0 font-mono text-[11px] text-muted-foreground",
									children: t.at
								})
							]
						}, i))
					})]
				})
			]
		})
	] });
}
function Row({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5 shrink-0 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "ml-auto font-medium",
				children: value
			})
		]
	});
}
//#endregion
export { DocumentDetails as component };
