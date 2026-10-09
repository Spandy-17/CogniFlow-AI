import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { J as FileSpreadsheet, et as Download, q as FileText } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-CnF1AuAt.mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, i as LineChart, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.reports-B_V1NLZ_.js
var import_jsx_runtime = require_jsx_runtime();
var daily = Array.from({ length: 30 }, (_, i) => ({
	day: i + 1,
	uploads: 80 + Math.round(Math.sin(i / 3) * 30 + Math.random() * 40)
}));
var time = Array.from({ length: 12 }, (_, i) => ({
	m: `M${i + 1}`,
	ms: 1800 + Math.round(Math.sin(i / 2) * 400 + Math.random() * 300)
}));
var cats = [
	{
		name: "Certificates",
		v: 38
	},
	{
		name: "Reports",
		v: 24
	},
	{
		name: "Invoices",
		v: 18
	},
	{
		name: "Contracts",
		v: 12
	},
	{
		name: "Other",
		v: 8
	}
];
var colors = [
	"oklch(0.55 0.22 275)",
	"oklch(0.58 0.24 300)",
	"oklch(0.7 0.16 250)",
	"oklch(0.7 0.17 155)",
	"oklch(0.78 0.16 75)"
];
var topUsers = [
	{
		n: "Ada Lovelace",
		u: 482
	},
	{
		n: "Grace Hopper",
		u: 401
	},
	{
		n: "Alan Turing",
		u: 356
	},
	{
		n: "Katherine Johnson",
		u: 288
	},
	{
		n: "Linus Torvalds",
		u: 214
	}
];
function ReportsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Reports & Analytics",
		subtitle: "Everything your team needs to prove the ROI.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "size-4" }), " CSV"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }), " PDF"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-3 py-2 text-sm font-semibold text-white shadow-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download all"]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Daily uploads"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-3",
					children: "Last 30 days"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
						data: daily,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "ru",
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
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "oklch(0.9 0.01 260)",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "day",
								tick: {
									fill: "oklch(0.5 0.03 260)",
									fontSize: 10
								},
								axisLine: false,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tick: {
									fill: "oklch(0.5 0.03 260)",
									fontSize: 10
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
								dataKey: "uploads",
								stroke: "oklch(0.55 0.22 275)",
								strokeWidth: 2.5,
								fill: "url(#ru)"
							})
						]
					}) })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Processing time"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-3",
					children: "Milliseconds · monthly avg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: time,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "oklch(0.9 0.01 260)",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "m",
								tick: {
									fill: "oklch(0.5 0.03 260)",
									fontSize: 10
								},
								axisLine: false,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tick: {
									fill: "oklch(0.5 0.03 260)",
									fontSize: 10
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "ms",
								stroke: "oklch(0.58 0.24 300)",
								strokeWidth: 2.5,
								dot: {
									r: 3,
									fill: "oklch(0.58 0.24 300)"
								}
							})
						]
					}) })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Top categories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-3",
					children: "By document count"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
						data: cats,
						dataKey: "v",
						innerRadius: 50,
						outerRadius: 80,
						paddingAngle: 4,
						stroke: "none",
						children: cats.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: colors[i] }, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
						background: "white",
						border: "1px solid oklch(0.92 0.01 260)",
						borderRadius: 12,
						fontSize: 12
					} })] }) })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Most active users"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-3",
					children: "Uploads · this month"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: topUsers,
						layout: "vertical",
						margin: { left: 20 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "oklch(0.9 0.01 260)",
								horizontal: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								type: "number",
								tick: {
									fill: "oklch(0.5 0.03 260)",
									fontSize: 10
								},
								axisLine: false,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								type: "category",
								dataKey: "n",
								tick: {
									fill: "oklch(0.5 0.03 260)",
									fontSize: 11
								},
								axisLine: false,
								tickLine: false,
								width: 120
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								background: "white",
								border: "1px solid oklch(0.92 0.01 260)",
								borderRadius: 12,
								fontSize: 12
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "u",
								fill: "oklch(0.55 0.22 275)",
								radius: [
									0,
									8,
									8,
									0
								]
							})
						]
					}) })
				})
			] })
		]
	})] });
}
//#endregion
export { ReportsPage as component };
