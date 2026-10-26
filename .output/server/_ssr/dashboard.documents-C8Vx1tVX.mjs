import { a as __toESM } from "../_runtime.mjs";
import { i as fetchAllDocuments, n as deleteDocument } from "./document-service-drZtwzY8.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { o as useAuth } from "./router-CK1nnWZE.mjs";
import { H as FileText, Q as Clock, Z as CloudUpload, h as Search, o as Trash2, rt as CircleCheck, tt as CircleX, v as RefreshCw } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B6vwdakD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.documents-C8Vx1tVX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statusStyles = {
	uploaded: {
		label: "Uploaded",
		cls: "bg-secondary text-muted-foreground",
		Icon: Clock
	},
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
	},
	error: {
		label: "Processing failed",
		cls: "bg-destructive/10 text-destructive",
		Icon: CircleX
	}
};
function DocumentsPage() {
	const { user } = useAuth();
	const [docs, setDocs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [loadError, setLoadError] = (0, import_react.useState)(null);
	const [query, setQuery] = (0, import_react.useState)("");
	const [selectedCat, setSelectedCat] = (0, import_react.useState)("All");
	const loadDocs = async () => {
		setLoading(true);
		setLoadError(null);
		try {
			const data = await fetchAllDocuments();
			setDocs(data);
		} catch (error) {
			const message = error instanceof Error ? error.message : "Could not load documents.";
			setLoadError(message);
			toast.error(message);
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
	const categories = ["All", ...new Set(docs.map((doc) => doc.cat).filter(Boolean))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "My Documents",
			subtitle: "Shared library of files uploaded to the database by signed-in workspace members.",
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
			})
		}),
		loadError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-4 border-destructive/40 bg-destructive/5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-destructive",
					children: "Could not connect to your documents table"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 break-words text-xs text-muted-foreground",
					children: loadError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: "Confirm the Supabase project configuration and shared authenticated-read policy."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "!p-0 overflow-hidden border border-border/70",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 border-b border-border/60 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-64",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search documents by name, category, folder…",
						className: "w-full rounded-xl border border-border bg-background/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1 text-xs",
					children: categories.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSelectedCat(t),
						className: `rounded-lg px-2.5 py-1.5 transition ${selectedCat === t ? "bg-primary/15 text-primary font-semibold" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
						children: t
					}, t))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-[11px] uppercase tracking-wider text-muted-foreground bg-secondary/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "[&>th]:px-4 [&>th]:py-3 [&>th]:text-left [&>th]:font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Document" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Category" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "AI Confidence" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Destination Folder" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Uploaded" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "w-10" })
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filteredDocs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						colSpan: 7,
						className: "px-4 py-12 text-center text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mx-auto size-8 opacity-40 mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-foreground",
								children: "No documents found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs mt-1",
								children: query || selectedCat !== "All" ? "Adjust your search filter." : "No uploaded documents are currently saved in the shared database."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/dashboard/upload",
								className: "mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-3.5" }), " Upload file"]
							})
						]
					}) }) : filteredDocs.map((d) => {
						const s = statusStyles[d.status] || statusStyles.routed;
						const Icon = s.Icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border/50 hover:bg-secondary/40 [&>td]:px-4 [&>td]:py-3 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/dashboard/document/$docId",
									params: { docId: d.id },
									className: "flex items-center gap-3 hover:text-primary group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium truncate block max-w-xs",
											children: d.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground",
											children: d.size
										})]
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium",
									children: d.cat
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "tabular-nums",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-1.5 w-16 overflow-hidden rounded-full bg-muted",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2",
												style: { width: `${Math.min(100, d.conf)}%` }
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-medium",
											children: [d.conf, "%"]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${s.cls}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3" }),
										" ",
										s.label
									]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-muted-foreground text-xs font-mono",
									children: d.folder
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-muted-foreground text-xs",
									children: d.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: d.userId === user?.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: (e) => handleDelete(e, d.id, d.filePath),
									title: "Delete document",
									className: "text-muted-foreground hover:text-destructive p-1 rounded-md hover:bg-destructive/10 transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
								}) })
							]
						}, d.id);
					}) })]
				})
			})]
		})
	] });
}
//#endregion
export { DocumentsPage as component };
