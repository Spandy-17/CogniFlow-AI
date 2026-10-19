import { a as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as fetchAllDocuments, s as deleteDocument } from "./router-XVNWBbpq.mjs";
import { c as Trash2, ct as CircleCheck, it as Clock, ot as CircleX, q as FileText, rt as CloudUpload, v as Search, x as RefreshCw } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B1_2tSzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.documents-CLD_-KxO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statusStyles = {
	routed: {
		label: "Routed",
		cls: "bg-success/15 text-success",
		Icon: CircleCheck
	},
	review: {
		label: "Needs review",
		cls: "bg-warning/15 text-warning",
		Icon: Clock
	},
	processing: {
		label: "Processing",
		cls: "bg-primary/10 text-primary",
		Icon: Clock
	},
	rejected: {
		label: "Rejected",
		cls: "bg-destructive/10 text-destructive",
		Icon: CircleX
	}
};
function DocumentsPage() {
	const [docs, setDocs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [query, setQuery] = (0, import_react.useState)("");
	const [selectedCat, setSelectedCat] = (0, import_react.useState)("All");
	const loadDocs = async () => {
		setLoading(true);
		try {
			const data = await fetchAllDocuments();
			setDocs(data);
		} catch {
			toast.error("Failed to load documents");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadDocs();
	}, []);
	const handleDelete = async (e, docId, filePath) => {
		e.stopPropagation();
		e.preventDefault();
		if (!confirm("Are you sure you want to delete this document?")) return;
		await deleteDocument(docId, filePath);
		setDocs((prev) => prev.filter((d) => d.id !== docId));
		toast.success("Document removed");
	};
	const filteredDocs = (0, import_react.useMemo)(() => {
		return docs.filter((d) => {
			const matchesQuery = !query || d.name.toLowerCase().includes(query.toLowerCase()) || d.cat.toLowerCase().includes(query.toLowerCase()) || d.folder.toLowerCase().includes(query.toLowerCase());
			const matchesCat = selectedCat === "All" || d.cat.toLowerCase() === selectedCat.toLowerCase();
			return matchesQuery && matchesCat;
		});
	}, [
		docs,
		query,
		selectedCat
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "My Documents",
		subtitle: "Every document processed and saved to your PostgreSQL database.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: loadDocs,
				className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background/60 px-3 py-2 text-xs font-medium hover:bg-secondary transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `size-3.5 ${loading ? "animate-spin" : ""}` }), " Refresh"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard/upload",
				className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-3.5 py-2 text-xs font-semibold text-white shadow-glow hover:opacity-90 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-3.5" }), " Upload New"]
			})]
		}),
		"data-tsd-source": "/src/routes/dashboard.documents.tsx:77:7"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "!p-0 overflow-hidden border border-border/70",
		"data-tsd-source": "/src/routes/dashboard.documents.tsx:98:7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-3 border-b border-border/60 p-4",
			"data-tsd-source": "/src/routes/dashboard.documents.tsx:99:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1 min-w-64",
				"data-tsd-source": "/src/routes/dashboard.documents.tsx:100:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
					"data-tsd-source": "/src/routes/dashboard.documents.tsx:101:13"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search documents by name, category, folder…",
					className: "w-full rounded-xl border border-border bg-background/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
					"data-tsd-source": "/src/routes/dashboard.documents.tsx:102:13"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1 text-xs",
				"data-tsd-source": "/src/routes/dashboard.documents.tsx:110:11",
				children: [
					"All",
					"Certificate",
					"Report",
					"Invoice",
					"Contract",
					"Transcript"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSelectedCat(t),
					className: `rounded-lg px-2.5 py-1.5 transition ${selectedCat === t ? "bg-primary/15 text-primary font-semibold" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
					"data-tsd-source": "/src/routes/dashboard.documents.tsx:112:15",
					children: t
				}, t))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			"data-tsd-source": "/src/routes/dashboard.documents.tsx:127:9",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				"data-tsd-source": "/src/routes/dashboard.documents.tsx:128:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-[11px] uppercase tracking-wider text-muted-foreground bg-secondary/20",
					"data-tsd-source": "/src/routes/dashboard.documents.tsx:129:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "[&>th]:px-4 [&>th]:py-3 [&>th]:text-left [&>th]:font-medium",
						"data-tsd-source": "/src/routes/dashboard.documents.tsx:130:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								"data-tsd-source": "/src/routes/dashboard.documents.tsx:131:17",
								children: "Document"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								"data-tsd-source": "/src/routes/dashboard.documents.tsx:132:17",
								children: "Category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								"data-tsd-source": "/src/routes/dashboard.documents.tsx:133:17",
								children: "AI Confidence"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								"data-tsd-source": "/src/routes/dashboard.documents.tsx:134:17",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								"data-tsd-source": "/src/routes/dashboard.documents.tsx:135:17",
								children: "Destination Folder"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								"data-tsd-source": "/src/routes/dashboard.documents.tsx:136:17",
								children: "Uploaded"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "w-10",
								"data-tsd-source": "/src/routes/dashboard.documents.tsx:137:17"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
					"data-tsd-source": "/src/routes/dashboard.documents.tsx:140:13",
					children: filteredDocs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						"data-tsd-source": "/src/routes/dashboard.documents.tsx:142:17",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							colSpan: 7,
							className: "px-4 py-12 text-center text-muted-foreground",
							"data-tsd-source": "/src/routes/dashboard.documents.tsx:143:19",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
									className: "mx-auto size-8 opacity-40 mb-2",
									"data-tsd-source": "/src/routes/dashboard.documents.tsx:144:21"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-foreground",
									"data-tsd-source": "/src/routes/dashboard.documents.tsx:145:21",
									children: "No documents found"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs mt-1",
									"data-tsd-source": "/src/routes/dashboard.documents.tsx:146:21",
									children: "Upload a document or adjust your search filter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/dashboard/upload",
									className: "mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20 transition",
									"data-tsd-source": "/src/routes/dashboard.documents.tsx:147:21",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, {
										className: "size-3.5",
										"data-tsd-source": "/src/routes/dashboard.documents.tsx:151:23"
									}), " Upload file"]
								})
							]
						})
					}) : filteredDocs.map((d) => {
						const s = statusStyles[d.status] || statusStyles.routed;
						const Icon = s.Icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border/50 hover:bg-secondary/40 [&>td]:px-4 [&>td]:py-3 transition-colors",
							"data-tsd-source": "/src/routes/dashboard.documents.tsx:160:21",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-tsd-source": "/src/routes/dashboard.documents.tsx:164:23",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/dashboard/document/$docId",
										params: { docId: d.id },
										className: "flex items-center gap-3 hover:text-primary group",
										"data-tsd-source": "/src/routes/dashboard.documents.tsx:165:25",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform",
											"data-tsd-source": "/src/routes/dashboard.documents.tsx:170:27",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
												className: "size-4",
												"data-tsd-source": "/src/routes/dashboard.documents.tsx:171:29"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											"data-tsd-source": "/src/routes/dashboard.documents.tsx:173:27",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium truncate block max-w-xs",
												"data-tsd-source": "/src/routes/dashboard.documents.tsx:174:29",
												children: d.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-muted-foreground",
												"data-tsd-source": "/src/routes/dashboard.documents.tsx:175:29",
												children: d.size
											})]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-tsd-source": "/src/routes/dashboard.documents.tsx:179:23",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium",
										"data-tsd-source": "/src/routes/dashboard.documents.tsx:180:25",
										children: d.cat
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "tabular-nums",
									"data-tsd-source": "/src/routes/dashboard.documents.tsx:184:23",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										"data-tsd-source": "/src/routes/dashboard.documents.tsx:185:25",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-1.5 w-16 overflow-hidden rounded-full bg-muted",
											"data-tsd-source": "/src/routes/dashboard.documents.tsx:186:27",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2",
												style: { width: `${Math.min(100, d.conf)}%` },
												"data-tsd-source": "/src/routes/dashboard.documents.tsx:187:29"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-medium",
											"data-tsd-source": "/src/routes/dashboard.documents.tsx:192:27",
											children: [d.conf, "%"]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-tsd-source": "/src/routes/dashboard.documents.tsx:195:23",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${s.cls}`,
										"data-tsd-source": "/src/routes/dashboard.documents.tsx:196:25",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "size-3",
												"data-tsd-source": "/src/routes/dashboard.documents.tsx:199:27"
											}),
											" ",
											s.label
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-muted-foreground text-xs font-mono",
									"data-tsd-source": "/src/routes/dashboard.documents.tsx:202:23",
									children: d.folder
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-muted-foreground text-xs",
									"data-tsd-source": "/src/routes/dashboard.documents.tsx:203:23",
									children: d.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									"data-tsd-source": "/src/routes/dashboard.documents.tsx:204:23",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => handleDelete(e, d.id, d.filePath),
										title: "Delete document",
										className: "text-muted-foreground hover:text-destructive p-1 rounded-md hover:bg-destructive/10 transition",
										"data-tsd-source": "/src/routes/dashboard.documents.tsx:205:25",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
											className: "size-3.5",
											"data-tsd-source": "/src/routes/dashboard.documents.tsx:210:27"
										})
									})
								})
							]
						}, d.id);
					})
				})]
			})
		})]
	})] });
}
//#endregion
export { DocumentsPage as component };
