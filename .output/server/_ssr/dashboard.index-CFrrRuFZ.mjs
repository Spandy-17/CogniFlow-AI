import { a as __toESM } from "../_runtime.mjs";
import { i as fetchAllDocuments } from "./document-service-drZtwzY8.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as displayName, o as useAuth } from "./router-CK1nnWZE.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as LoaderCircle, B as FileXCorner, L as FolderTree, Q as Clock, U as FileCheckCorner, V as FileUp, Y as Cpu, Z as CloudUpload, gt as ArrowUpRight, u as Sparkles } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B6vwdakD.mjs";
import { c as Cell, l as ResponsiveContainer, s as Pie, t as PieChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.index-CFrrRuFZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pieColors = [
	"oklch(0.55 0.22 275)",
	"oklch(0.58 0.24 300)",
	"oklch(0.7 0.16 250)",
	"oklch(0.7 0.17 155)",
	"oklch(0.78 0.16 75)"
];
function derivedStats(docs) {
	const total = docs.length;
	const processed = docs.filter((d) => d.status === "routed" || d.status === "review" || d.status === "rejected").length;
	const pending = docs.filter((d) => d.status === "processing" || d.status === "uploaded").length;
	const routed = docs.filter((d) => d.status === "routed").length;
	const rejected = docs.filter((d) => d.status === "rejected").length;
	const review = docs.filter((d) => d.status === "review").length;
	const avgConf = total > 0 ? (docs.reduce((s, d) => s + (d.conf || 0), 0) / total).toFixed(1) : "—";
	return [
		{
			label: "Documents Uploaded",
			value: String(total),
			icon: FileUp,
			tone: "primary"
		},
		{
			label: "Processed",
			value: String(processed),
			icon: FileCheckCorner,
			tone: "success"
		},
		{
			label: "Pending / Review",
			value: String(pending + review),
			icon: Clock,
			tone: "warning"
		},
		{
			label: "Successfully Routed",
			value: String(routed),
			icon: FolderTree,
			tone: "primary"
		},
		{
			label: "Rejected",
			value: String(rejected),
			icon: FileXCorner,
			tone: "danger"
		},
		{
			label: "Avg Confidence",
			value: total > 0 ? `${avgConf}%` : "—",
			icon: Cpu,
			tone: "primary"
		}
	];
}
var toneClasses = {
	primary: "bg-primary/10 text-primary",
	success: "bg-success/15 text-success",
	warning: "bg-warning/15 text-warning",
	danger: "bg-destructive/10 text-destructive",
	muted: "bg-muted text-muted-foreground"
};
function Overview() {
	const { user } = useAuth();
	const [docs, setDocs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		fetchAllDocuments().then(setDocs).catch(() => setDocs([])).finally(() => setLoading(false));
	}, []);
	const stats = derivedStats(docs);
	const catCounts = {};
	for (const d of docs) catCounts[d.cat] = (catCounts[d.cat] || 0) + 1;
	const pieData = Object.entries(catCounts).map(([name, value]) => ({
		name,
		value
	}));
	const recentDocs = [...docs].slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: `Good ${(/* @__PURE__ */ new Date()).getHours() < 12 ? "morning" : (/* @__PURE__ */ new Date()).getHours() < 18 ? "afternoon" : "evening"}, ${displayName(user).split(" ")[0]} 👋`,
		subtitle: "Here's your document intelligence dashboard.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/dashboard/upload",
			className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2 text-sm font-semibold text-white shadow-glow",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), " Upload Documents"]
		})
	}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-center py-20 text-muted-foreground gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			children: "Loading your documents…"
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid size-9 place-items-center rounded-xl ${toneClasses[s.tone]}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4.5" })
						})
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
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Category distribution"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "From your uploaded documents"
				})] })
			}),
			pieData.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-64",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: pieData,
					dataKey: "value",
					innerRadius: 60,
					outerRadius: 90,
					paddingAngle: 4,
					stroke: "none",
					children: pieData.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: pieColors[i % pieColors.length] }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
					background: "white",
					border: "1px solid oklch(0.92 0.01 260)",
					borderRadius: 12,
					fontSize: 12
				} })] }) })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-64 flex flex-col items-center justify-center text-muted-foreground gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-8 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs",
					children: "No documents yet. Upload files to see category distribution."
				})]
			}),
			pieData.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-1.5 text-xs mt-3",
				children: pieData.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2.5 rounded-sm",
							style: { background: pieColors[i % pieColors.length] }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground truncate",
							children: d.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto font-medium tabular-nums",
							children: d.value
						})
					]
				}, d.name))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold",
				children: "Recent documents"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/dashboard/documents",
				className: "text-xs font-medium text-primary hover:underline",
				children: "View all"
			})]
		}), recentDocs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center py-12 gap-2 text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-8 opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-center",
					children: "No documents uploaded yet."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dashboard/upload",
					className: "text-xs font-semibold text-primary hover:underline mt-1",
					children: "Upload your first document →"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2.5",
			children: recentDocs.map((doc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mt-1 size-2 shrink-0 rounded-full ${doc.status === "routed" ? "bg-success" : doc.status === "rejected" ? "bg-destructive" : doc.status === "review" ? "bg-warning" : "bg-primary"}` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm truncate font-medium",
							children: doc.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-muted-foreground",
							children: [
								doc.cat,
								" · ",
								doc.folder,
								" · ",
								doc.date
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted-foreground/60 shrink-0" })
				]
			}, doc.id))
		})] })]
	})] })] });
}
//#endregion
export { Overview as component };
