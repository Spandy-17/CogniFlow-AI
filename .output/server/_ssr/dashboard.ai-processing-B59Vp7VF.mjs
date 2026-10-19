import { a as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { C as Play, F as LoaderCircle, H as FolderTree, T as Pause, b as RotateCcw, ct as CircleCheck, d as Terminal, et as Database, h as ShieldCheck, p as Sparkles, q as FileText, y as ScanText } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B1_2tSzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.ai-processing-B59Vp7VF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var stages = [
	{
		key: "upload",
		label: "Upload",
		icon: FileText,
		color: "from-slate-500 to-slate-700"
	},
	{
		key: "ocr",
		label: "OCR Agent",
		icon: ScanText,
		color: "from-brand-1 to-brand-2"
	},
	{
		key: "classify",
		label: "Classification",
		icon: Sparkles,
		color: "from-brand-1 to-brand-2"
	},
	{
		key: "validate",
		label: "Validation",
		icon: ShieldCheck,
		color: "from-brand-1 to-brand-2"
	},
	{
		key: "route",
		label: "Routing Agent",
		icon: FolderTree,
		color: "from-brand-1 to-brand-2"
	},
	{
		key: "db",
		label: "Database",
		icon: Database,
		color: "from-emerald-500 to-teal-600"
	}
];
var agentLogs = {
	ocr: [
		{
			time: "00:00.12",
			text: "Loading PDF (2.4 MB)…",
			tone: "info"
		},
		{
			time: "00:00.48",
			text: "Rendered 6 pages at 300dpi",
			tone: "info"
		},
		{
			time: "00:01.92",
			text: "Extracted 4,281 tokens",
			tone: "info"
		},
		{
			time: "00:02.30",
			text: "OCR confidence: 99.2%",
			tone: "ok"
		},
		{
			time: "00:02.35",
			text: "Handoff → Classification Agent",
			tone: "ok"
		}
	],
	classify: [
		{
			time: "00:02.41",
			text: "Embedding document…",
			tone: "info"
		},
		{
			time: "00:02.98",
			text: "Top prediction: Certificate (0.984)",
			tone: "info"
		},
		{
			time: "00:03.02",
			text: "Alternate: Transcript (0.011)",
			tone: "info"
		},
		{
			time: "00:03.10",
			text: "Confidence exceeds threshold ✓",
			tone: "ok"
		}
	],
	validate: [
		{
			time: "00:03.22",
			text: "Fetching template: cert_v3.schema",
			tone: "info"
		},
		{
			time: "00:03.40",
			text: "12/12 required fields matched",
			tone: "ok"
		},
		{
			time: "00:03.46",
			text: "Signature block detected",
			tone: "ok"
		},
		{
			time: "00:03.51",
			text: "Validation: PASS",
			tone: "ok"
		}
	],
	route: [
		{
			time: "00:03.60",
			text: "Resolving destination…",
			tone: "info"
		},
		{
			time: "00:03.65",
			text: "Target: /Certificates/2025/Q3",
			tone: "info"
		},
		{
			time: "00:03.71",
			text: "Moved · Indexed · Notified reviewer",
			tone: "ok"
		}
	]
};
function ProcessingCenter() {
	const [active, setActive] = (0, import_react.useState)(1);
	const [running, setRunning] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (!running) return;
		const id = setInterval(() => setActive((a) => a >= stages.length - 1 ? 1 : a + 1), 1800);
		return () => clearInterval(id);
	}, [running]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "AI Processing Center",
			subtitle: "Live view of your document intelligence pipeline.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setRunning((r) => !r),
					className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary",
					children: running ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }), " Pause"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), " Resume"] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActive(1),
					className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), " Restart"]
				})]
			}),
			"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:61:7"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "!p-6 mb-4",
			"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:82:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-6",
				"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:83:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:84:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:85:13",
						children: "Certificate_Ada.pdf"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:86:13",
						children: [
							"Started 3s ago · ETA ",
							(stages.length - active - 1) * 1.8,
							"s"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary",
					"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:88:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-1.5 rounded-full bg-primary animate-pulse",
						"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:89:13"
					}), " Processing"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-x-auto",
				"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:94:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-[720px] relative flex items-start justify-between gap-2 pt-2 pb-1",
					"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:95:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-8 right-8 top-9 h-0.5 rounded-full bg-border",
							"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:97:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute left-8 top-9 h-0.5 rounded-full bg-gradient-to-r from-brand-1 to-brand-2",
							animate: { width: `calc(${active / (stages.length - 1) * 100}% - ${active / (stages.length - 1) * 64}px)` },
							transition: {
								duration: .8,
								ease: "easeInOut"
							},
							"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:98:13"
						}),
						stages.map((s, i) => {
							const Icon = s.icon;
							const isActive = i === active;
							const isDone = i < active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex w-24 flex-col items-center text-center",
								"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:108:17",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										animate: isActive ? { scale: [
											1,
											1.08,
											1
										] } : { scale: 1 },
										transition: {
											duration: 1.4,
											repeat: Infinity
										},
										className: `grid size-16 place-items-center rounded-2xl border shadow-soft transition-all ${isActive ? `bg-gradient-to-br ${s.color} text-white border-transparent animate-pulse-ring` : isDone ? "bg-success/15 text-success border-success/20" : "bg-background text-muted-foreground border-border"}`,
										"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:109:19",
										children: isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
											className: "size-6 animate-spin",
											"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:121:25"
										}) : isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											className: "size-6",
											"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:123:27"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-6",
											"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:124:27"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-2 text-xs font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`,
										"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:126:19",
										children: s.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground uppercase tracking-wider",
										"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:127:19",
										children: isActive ? "Working" : isDone ? "Done" : "Queued"
									})
								]
							}, s.key);
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:137:7",
			children: [
				"ocr",
				"classify",
				"validate",
				"route"
			].map((key) => {
				const s = stages.find((x) => x.key === key);
				const Icon = s.icon;
				const status = active >= stages.findIndex((x) => x.key === key) ? "done" : "queued";
				const isCurrent = stages[active]?.key === key;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: isCurrent ? "!border-primary/40 !bg-primary/5" : "",
					"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:144:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:145:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:146:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `grid size-9 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white`,
									"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:147:19",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-4.5",
										"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:148:21"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:150:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:151:21",
										children: s.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground uppercase tracking-wider",
										"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:152:21",
										children: isCurrent ? "Live" : status === "done" ? "Complete" : "Queued"
									})]
								})]
							}),
							isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "size-4 text-primary animate-spin",
								"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:157:31"
							}),
							status === "done" && !isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "size-4 text-success",
								"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:158:53"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-xl border border-border/60 bg-navy/[0.03] p-3 font-mono text-[11px] text-foreground/80",
						"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:160:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground",
							"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:161:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
								className: "size-3",
								"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:162:19"
							}), " agent.log"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1",
							"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:164:17",
							children: (agentLogs[key] ?? []).map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								initial: {
									opacity: 0,
									x: -4
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: { delay: i * .08 },
								className: "flex gap-2",
								"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:166:21",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:173:23",
									children: l.time
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: l.tone === "ok" ? "text-success" : "text-foreground/80",
									"data-tsd-source": "/src/routes/dashboard.ai-processing.tsx:174:23",
									children: l.text
								})]
							}, i))
						})]
					})]
				}, key);
			})
		})
	] });
}
//#endregion
export { ProcessingCenter as component };
