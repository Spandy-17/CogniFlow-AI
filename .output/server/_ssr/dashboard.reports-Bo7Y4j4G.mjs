import { a as __toESM } from "../_runtime.mjs";
import { i as fetchAllDocuments } from "./document-service-drZtwzY8.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as LoaderCircle, Z as CloudUpload } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B6vwdakD.mjs";
import { a as CartesianGrid, c as Cell, i as XAxis, l as ResponsiveContainer, n as BarChart, o as Bar, r as YAxis, s as Pie, t as PieChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.reports-Bo7Y4j4G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var colors = [
	"oklch(0.55 0.22 275)",
	"oklch(0.58 0.24 300)",
	"oklch(0.7 0.16 250)",
	"oklch(0.7 0.17 155)",
	"oklch(0.78 0.16 75)"
];
function ReportsPage() {
	const [docs, setDocs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		fetchAllDocuments().then(setDocs).catch(() => setDocs([])).finally(() => setLoading(false));
	}, []);
	const catCounts = {};
	for (const d of docs) catCounts[d.cat] = (catCounts[d.cat] || 0) + 1;
	const cats = Object.entries(catCounts).map(([name, v]) => ({
		name,
		v
	}));
	const statusCounts = {};
	for (const d of docs) statusCounts[d.status] = (statusCounts[d.status] || 0) + 1;
	const statusBars = Object.entries(statusCounts).map(([name, v]) => ({
		name,
		v
	}));
	const folderCounts = {};
	for (const d of docs) folderCounts[d.folder] = (folderCounts[d.folder] || 0) + 1;
	const folderBars = Object.entries(folderCounts).map(([n, u]) => ({
		n,
		u
	})).sort((a, b) => b.u - a.u).slice(0, 8);
	const confBuckets = [
		{
			range: "0–25%",
			count: 0
		},
		{
			range: "26–50%",
			count: 0
		},
		{
			range: "51–75%",
			count: 0
		},
		{
			range: "76–90%",
			count: 0
		},
		{
			range: "91–100%",
			count: 0
		}
	];
	for (const d of docs) {
		const c = d.conf || 0;
		if (c <= 25) confBuckets[0].count++;
		else if (c <= 50) confBuckets[1].count++;
		else if (c <= 75) confBuckets[2].count++;
		else if (c <= 90) confBuckets[3].count++;
		else confBuckets[4].count++;
	}
	const isEmpty = docs.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Reports & Analytics",
		subtitle: "Data-driven insights generated from your real document uploads."
	}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-center py-20 text-muted-foreground gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			children: "Loading analytics…"
		})]
	}) : isEmpty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "mx-auto size-10 opacity-30 mb-3" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold text-foreground",
				children: "No data yet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-1",
				children: "Upload and process documents to populate analytics charts."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/dashboard/upload",
				className: "mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline",
				children: "Upload Documents →"
			})
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Category distribution"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-3",
					children: "By document count (real data)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
						data: cats,
						dataKey: "v",
						nameKey: "name",
						innerRadius: 50,
						outerRadius: 80,
						paddingAngle: 4,
						stroke: "none",
						children: cats.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: colors[i % colors.length] }, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
						background: "white",
						border: "1px solid oklch(0.92 0.01 260)",
						borderRadius: 12,
						fontSize: 12
					} })] }) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-2 gap-1 text-xs",
					children: cats.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-2.5 rounded-sm",
								style: { background: colors[i % colors.length] }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground truncate",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-auto font-medium",
								children: c.v
							})
						]
					}, c.name))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Processing status breakdown"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-3",
					children: "Across all uploaded documents"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: statusBars,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "oklch(0.9 0.01 260)",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "name",
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "v",
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
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Confidence distribution"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-3",
					children: "Agent classification confidence buckets"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: confBuckets,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "oklch(0.9 0.01 260)",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "range",
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "count",
								fill: "oklch(0.58 0.24 300)",
								radius: [
									8,
									8,
									0,
									0
								]
							})
						]
					}) })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Top routed folders"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-3",
					children: "Documents routed by Agent 5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: folderBars,
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
