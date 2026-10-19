import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as displayName, o as useAuth } from "./router-XVNWBbpq.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { G as FileXCorner, H as FolderTree, K as FileUp, Y as FileCheckCorner, it as Clock, p as Sparkles, s as TrendingUp, tt as Cpu, xt as ArrowUpRight, z as HardDrive } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B1_2tSzr.mjs";
import { a as YAxis, d as Pie, f as Cell, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.index-BpJL_iE5.js
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
			}),
			"data-tsd-source": "/src/routes/dashboard.index.tsx:66:7"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 grid-cols-2 lg:grid-cols-4",
			"data-tsd-source": "/src/routes/dashboard.index.tsx:76:7",
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
					"data-tsd-source": "/src/routes/dashboard.index.tsx:80:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							"data-tsd-source": "/src/routes/dashboard.index.tsx:88:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid size-9 place-items-center rounded-xl ${toneClasses[s.tone]}`,
								"data-tsd-source": "/src/routes/dashboard.index.tsx:89:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4.5",
									"data-tsd-source": "/src/routes/dashboard.index.tsx:90:19"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-semibold text-muted-foreground",
								"data-tsd-source": "/src/routes/dashboard.index.tsx:92:17",
								children: s.delta
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-2xl font-bold tracking-tight tabular-nums",
							"data-tsd-source": "/src/routes/dashboard.index.tsx:94:15",
							children: s.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							"data-tsd-source": "/src/routes/dashboard.index.tsx:95:15",
							children: s.label
						})
					]
				}, s.label);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]",
			"data-tsd-source": "/src/routes/dashboard.index.tsx:101:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-tsd-source": "/src/routes/dashboard.index.tsx:102:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					"data-tsd-source": "/src/routes/dashboard.index.tsx:103:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-tsd-source": "/src/routes/dashboard.index.tsx:104:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							"data-tsd-source": "/src/routes/dashboard.index.tsx:105:15",
							children: "Documents processed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							"data-tsd-source": "/src/routes/dashboard.index.tsx:106:15",
							children: "Last 14 days"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 text-xs",
						"data-tsd-source": "/src/routes/dashboard.index.tsx:108:13",
						children: [
							"14D",
							"30D",
							"90D"
						].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `rounded-lg px-2 py-1 ${i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`,
							"data-tsd-source": "/src/routes/dashboard.index.tsx:110:17",
							children: t
						}, t))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
					"data-tsd-source": "/src/routes/dashboard.index.tsx:114:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						"data-tsd-source": "/src/routes/dashboard.index.tsx:115:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: areaData,
							"data-tsd-source": "/src/routes/dashboard.index.tsx:116:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", {
									"data-tsd-source": "/src/routes/dashboard.index.tsx:117:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "g1",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										"data-tsd-source": "/src/routes/dashboard.index.tsx:118:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "oklch(0.55 0.22 275)",
											stopOpacity: .5,
											"data-tsd-source": "/src/routes/dashboard.index.tsx:119:21"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "oklch(0.55 0.22 275)",
											stopOpacity: 0,
											"data-tsd-source": "/src/routes/dashboard.index.tsx:120:21"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "g2",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										"data-tsd-source": "/src/routes/dashboard.index.tsx:122:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "oklch(0.58 0.24 300)",
											stopOpacity: .4,
											"data-tsd-source": "/src/routes/dashboard.index.tsx:123:21"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "oklch(0.58 0.24 300)",
											stopOpacity: 0,
											"data-tsd-source": "/src/routes/dashboard.index.tsx:124:21"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "oklch(0.9 0.01 260)",
									vertical: false,
									"data-tsd-source": "/src/routes/dashboard.index.tsx:127:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "day",
									tick: {
										fill: "oklch(0.5 0.03 260)",
										fontSize: 11
									},
									axisLine: false,
									tickLine: false,
									"data-tsd-source": "/src/routes/dashboard.index.tsx:128:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tick: {
										fill: "oklch(0.5 0.03 260)",
										fontSize: 11
									},
									axisLine: false,
									tickLine: false,
									"data-tsd-source": "/src/routes/dashboard.index.tsx:129:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									contentStyle: {
										background: "white",
										border: "1px solid oklch(0.92 0.01 260)",
										borderRadius: 12,
										fontSize: 12
									},
									"data-tsd-source": "/src/routes/dashboard.index.tsx:130:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "processed",
									stroke: "oklch(0.55 0.22 275)",
									strokeWidth: 2.5,
									fill: "url(#g1)",
									"data-tsd-source": "/src/routes/dashboard.index.tsx:131:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "uploaded",
									stroke: "oklch(0.58 0.24 300)",
									strokeWidth: 2.5,
									fill: "url(#g2)",
									"data-tsd-source": "/src/routes/dashboard.index.tsx:132:17"
								})
							]
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-tsd-source": "/src/routes/dashboard.index.tsx:138:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						"data-tsd-source": "/src/routes/dashboard.index.tsx:139:11",
						children: "Categories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						"data-tsd-source": "/src/routes/dashboard.index.tsx:140:11",
						children: "Classification distribution"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-56",
						"data-tsd-source": "/src/routes/dashboard.index.tsx:141:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							"data-tsd-source": "/src/routes/dashboard.index.tsx:142:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, {
								"data-tsd-source": "/src/routes/dashboard.index.tsx:143:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: pieData,
									dataKey: "value",
									innerRadius: 50,
									outerRadius: 80,
									paddingAngle: 4,
									stroke: "none",
									"data-tsd-source": "/src/routes/dashboard.index.tsx:144:17",
									children: pieData.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
										fill: pieColors[i],
										"data-tsd-source": "/src/routes/dashboard.index.tsx:145:42"
									}, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									contentStyle: {
										background: "white",
										border: "1px solid oklch(0.92 0.01 260)",
										borderRadius: 12,
										fontSize: 12
									},
									"data-tsd-source": "/src/routes/dashboard.index.tsx:147:17"
								})]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-1.5 text-xs",
						"data-tsd-source": "/src/routes/dashboard.index.tsx:151:11",
						children: pieData.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							"data-tsd-source": "/src/routes/dashboard.index.tsx:153:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-2.5 rounded-sm",
									style: { background: pieColors[i] },
									"data-tsd-source": "/src/routes/dashboard.index.tsx:154:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.index.tsx:155:17",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-auto font-medium tabular-nums",
									"data-tsd-source": "/src/routes/dashboard.index.tsx:156:17",
									children: [d.value, "%"]
								})
							]
						}, d.name))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]",
			"data-tsd-source": "/src/routes/dashboard.index.tsx:163:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-tsd-source": "/src/routes/dashboard.index.tsx:164:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					"data-tsd-source": "/src/routes/dashboard.index.tsx:165:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-tsd-source": "/src/routes/dashboard.index.tsx:166:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							"data-tsd-source": "/src/routes/dashboard.index.tsx:167:15",
							children: "Classification accuracy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							"data-tsd-source": "/src/routes/dashboard.index.tsx:168:15",
							children: "Weekly rolling average"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success",
						"data-tsd-source": "/src/routes/dashboard.index.tsx:170:13",
						children: "↑ 1.2%"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-52",
					"data-tsd-source": "/src/routes/dashboard.index.tsx:172:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						"data-tsd-source": "/src/routes/dashboard.index.tsx:173:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: barData,
							"data-tsd-source": "/src/routes/dashboard.index.tsx:174:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "oklch(0.9 0.01 260)",
									vertical: false,
									"data-tsd-source": "/src/routes/dashboard.index.tsx:175:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "day",
									tick: {
										fill: "oklch(0.5 0.03 260)",
										fontSize: 11
									},
									axisLine: false,
									tickLine: false,
									"data-tsd-source": "/src/routes/dashboard.index.tsx:176:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									domain: [85, 100],
									tick: {
										fill: "oklch(0.5 0.03 260)",
										fontSize: 11
									},
									axisLine: false,
									tickLine: false,
									"data-tsd-source": "/src/routes/dashboard.index.tsx:177:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									contentStyle: {
										background: "white",
										border: "1px solid oklch(0.92 0.01 260)",
										borderRadius: 12,
										fontSize: 12
									},
									"data-tsd-source": "/src/routes/dashboard.index.tsx:178:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "accuracy",
									fill: "oklch(0.55 0.22 275)",
									radius: [
										8,
										8,
										0,
										0
									],
									"data-tsd-source": "/src/routes/dashboard.index.tsx:179:17"
								})
							]
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-tsd-source": "/src/routes/dashboard.index.tsx:185:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					"data-tsd-source": "/src/routes/dashboard.index.tsx:186:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						"data-tsd-source": "/src/routes/dashboard.index.tsx:187:13",
						children: "Recent activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs font-medium text-primary hover:underline",
						"data-tsd-source": "/src/routes/dashboard.index.tsx:188:13",
						children: "View all"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2.5",
					"data-tsd-source": "/src/routes/dashboard.index.tsx:190:11",
					children: activity.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3",
						"data-tsd-source": "/src/routes/dashboard.index.tsx:192:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `mt-1 size-2 shrink-0 rounded-full ${a.tone === "success" ? "bg-success" : a.tone === "danger" ? "bg-destructive" : "bg-primary"}`,
								"data-tsd-source": "/src/routes/dashboard.index.tsx:193:17"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								"data-tsd-source": "/src/routes/dashboard.index.tsx:195:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									"data-tsd-source": "/src/routes/dashboard.index.tsx:196:19",
									children: a.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.index.tsx:197:19",
									children: a.ago
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4 text-muted-foreground/60",
								"data-tsd-source": "/src/routes/dashboard.index.tsx:199:17"
							})
						]
					}, i))
				})]
			})]
		})
	] });
}
//#endregion
export { Overview as component };
