import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as displayName, o as useAuth } from "./router-oRtFlNxA.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { G as FileXCorner, H as FolderTree, K as FileUp, R as HardDrive, Y as FileCheckCorner, at as Clock, nt as Cpu, p as Sparkles, s as TrendingUp, xt as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-CnF1AuAt.mjs";
import { a as YAxis, d as Pie, f as Cell, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.index-CYqwQ1Nr.js
var import_jsx_runtime = require_jsx_runtime();
var areaData = Array.from({ length: 14 }, (_, i) => ({
	day: `D${i + 1}`,
	processed: 120 + Math.round(Math.sin(i / 2) * 40 + i * 8 + Math.random() * 30),
	uploaded: 90 + Math.round(Math.cos(i / 2) * 30 + i * 6 + Math.random() * 20)
}));
var pieData = [
	{
		name: "Certificates",
		value: 38
	},
	{
		name: "Reports",
		value: 24
	},
	{
		name: "Invoices",
		value: 18
	},
	{
		name: "Contracts",
		value: 12
	},
	{
		name: "Other",
		value: 8
	}
];
var pieColors = [
	"oklch(0.55 0.22 275)",
	"oklch(0.58 0.24 300)",
	"oklch(0.7 0.16 250)",
	"oklch(0.7 0.17 155)",
	"oklch(0.78 0.16 75)"
];
var barData = Array.from({ length: 7 }, (_, i) => ({
	day: [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun"
	][i],
	accuracy: 92 + Math.round(Math.random() * 7)
}));
var stats = [
	{
		label: "Documents Uploaded",
		value: "12,483",
		delta: "+8.4%",
		icon: FileUp,
		tone: "primary"
	},
	{
		label: "Processed",
		value: "12,204",
		delta: "+7.9%",
		icon: FileCheckCorner,
		tone: "success"
	},
	{
		label: "Pending Validation",
		value: "184",
		delta: "-12%",
		icon: Clock,
		tone: "warning"
	},
	{
		label: "Successfully Routed",
		value: "11,942",
		delta: "+9.1%",
		icon: FolderTree,
		tone: "primary"
	},
	{
		label: "Rejected",
		value: "62",
		delta: "-4.2%",
		icon: FileXCorner,
		tone: "danger"
	},
	{
		label: "AI Accuracy",
		value: "99.1%",
		delta: "+0.3%",
		icon: Cpu,
		tone: "primary"
	},
	{
		label: "Storage Used",
		value: "48.2 GB",
		delta: "of 200 GB",
		icon: HardDrive,
		tone: "muted"
	},
	{
		label: "Avg Confidence",
		value: "97.8%",
		delta: "+1.1%",
		icon: TrendingUp,
		tone: "success"
	}
];
var toneClasses = {
	primary: "bg-primary/10 text-primary",
	success: "bg-success/15 text-success",
	warning: "bg-warning/15 text-warning",
	danger: "bg-destructive/10 text-destructive",
	muted: "bg-muted text-muted-foreground"
};
var activity = [
	{
		t: "Certificate_Ada.pdf routed → /Certificates/2025",
		ago: "2m ago",
		tone: "success"
	},
	{
		t: "Invoice_Q3.pdf failed template validation",
		ago: "6m ago",
		tone: "danger"
	},
	{
		t: "Contract_Acme.docx classification: 98.4%",
		ago: "12m ago",
		tone: "primary"
	},
	{
		t: "Report_2025_Aug.pdf indexed in database",
		ago: "24m ago",
		tone: "success"
	},
	{
		t: "12 new documents queued for OCR",
		ago: "1h ago",
		tone: "primary"
	}
];
function Overview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: `Good morning, ${displayName(useAuth().user).split(" ")[0]} 👋`,
			subtitle: "Here's what your agents processed while you were away.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2 text-sm font-semibold text-white shadow-glow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), " New pipeline"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 grid-cols-2 lg:grid-cols-4",
			children: stats.map((s, i) => {
				const Icon = s.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: i * .04 },
					whileHover: { y: -3 },
					className: "rounded-2xl glass-strong p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid size-9 place-items-center rounded-xl ${toneClasses[s.tone]}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-semibold text-muted-foreground",
								children: s.delta
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-2xl font-bold tracking-tight tabular-nums",
							children: s.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: s.label
						})
					]
				}, s.label);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Documents processed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Last 14 days"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1 text-xs",
					children: [
						"14D",
						"30D",
						"90D"
					].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `rounded-lg px-2 py-1 ${i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`,
						children: t
					}, t))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-64",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
					data: areaData,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "g1",
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "oklch(0.55 0.22 275)",
								stopOpacity: .5
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "oklch(0.55 0.22 275)",
								stopOpacity: 0
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "g2",
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "oklch(0.58 0.24 300)",
								stopOpacity: .4
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "oklch(0.58 0.24 300)",
								stopOpacity: 0
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							strokeDasharray: "3 3",
							stroke: "oklch(0.9 0.01 260)",
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "day",
							tick: {
								fill: "oklch(0.5 0.03 260)",
								fontSize: 11
							},
							axisLine: false,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick: {
								fill: "oklch(0.5 0.03 260)",
								fontSize: 11
							},
							axisLine: false,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
							background: "white",
							border: "1px solid oklch(0.92 0.01 260)",
							borderRadius: 12,
							fontSize: 12
						} }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							type: "monotone",
							dataKey: "processed",
							stroke: "oklch(0.55 0.22 275)",
							strokeWidth: 2.5,
							fill: "url(#g1)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							type: "monotone",
							dataKey: "uploaded",
							stroke: "oklch(0.58 0.24 300)",
							strokeWidth: 2.5,
							fill: "url(#g2)"
						})
					]
				}) })
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Categories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Classification distribution"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
						data: pieData,
						dataKey: "value",
						innerRadius: 50,
						outerRadius: 80,
						paddingAngle: 4,
						stroke: "none",
						children: pieData.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: pieColors[i] }, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
						background: "white",
						border: "1px solid oklch(0.92 0.01 260)",
						borderRadius: 12,
						fontSize: 12
					} })] }) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-1.5 text-xs",
					children: pieData.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-2.5 rounded-sm",
								style: { background: pieColors[i] }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: d.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-auto font-medium tabular-nums",
								children: [d.value, "%"]
							})
						]
					}, d.name))
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Classification accuracy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Weekly rolling average"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success",
					children: "↑ 1.2%"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-52",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: barData,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							strokeDasharray: "3 3",
							stroke: "oklch(0.9 0.01 260)",
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "day",
							tick: {
								fill: "oklch(0.5 0.03 260)",
								fontSize: 11
							},
							axisLine: false,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							domain: [85, 100],
							tick: {
								fill: "oklch(0.5 0.03 260)",
								fontSize: 11
							},
							axisLine: false,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
							background: "white",
							border: "1px solid oklch(0.92 0.01 260)",
							borderRadius: 12,
							fontSize: 12
						} }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "accuracy",
							fill: "oklch(0.55 0.22 275)",
							radius: [
								8,
								8,
								0,
								0
							]
						})
					]
				}) })
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Recent activity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-xs font-medium text-primary hover:underline",
					children: "View all"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2.5",
				children: activity.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mt-1 size-2 shrink-0 rounded-full ${a.tone === "success" ? "bg-success" : a.tone === "danger" ? "bg-destructive" : "bg-primary"}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: a.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: a.ago
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted-foreground/60" })
					]
				}, i))
			})] })]
		})
	] });
}
//#endregion
export { Overview as component };
