import { a as __toESM } from "../_runtime.mjs";
import { i as fetchAllDocuments } from "./document-service-drZtwzY8.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { H as FileText, I as Folder, P as HardDrive, R as FolderOpen, _t as ArrowRight, h as Search, q as Download, v as RefreshCw } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B6vwdakD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.folders-Du6FQrn6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FoldersPage() {
	const [docs, setDocs] = (0, import_react.useState)([]);
	const [selectedFolder, setSelectedFolder] = (0, import_react.useState)("");
	const [search, setSearch] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(true);
	const loadFolders = async () => {
		setLoading(true);
		try {
			setDocs(await fetchAllDocuments());
		} catch (error) {
			setDocs([]);
			toast.error(error instanceof Error ? error.message : "Could not load your documents.");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadFolders();
	}, []);
	const folders = (0, import_react.useMemo)(() => {
		const grouped = /* @__PURE__ */ new Map();
		for (const doc of docs) {
			const folder = doc.folder?.trim();
			if (!folder || folder === "Unassigned" || folder === "—") continue;
			grouped.set(folder, [...grouped.get(folder) || [], doc]);
		}
		return [...grouped.entries()].map(([name, files]) => ({
			name,
			files,
			size: files.reduce((total, file) => {
				const numericSize = Number.parseFloat(file.size);
				const multiplier = file.size.includes("GB") ? 1024 ** 3 : file.size.includes("MB") ? 1024 ** 2 : file.size.includes("KB") ? 1024 : 1;
				return total + (Number.isFinite(numericSize) ? numericSize * multiplier : 0);
			}, 0).toLocaleString(void 0, { maximumFractionDigits: 0 }) + " bytes"
		}));
	}, [docs]);
	const filteredFolders = folders.filter((folder) => folder.name.toLowerCase().includes(search.toLowerCase()));
	const activeFolder = folders.find((folder) => folder.name === selectedFolder) || filteredFolders[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Folders",
			subtitle: "Only folders containing your saved documents are shown.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => void loadFolders(),
				className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background/60 px-3 py-2 text-xs font-medium hover:bg-secondary transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `size-3.5 ${loading ? "animate-spin" : ""}` }), " Refresh"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 relative max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: search,
				onChange: (event) => setSearch(event.target.value),
				placeholder: "Search your folders…",
				className: "w-full rounded-xl border border-border bg-background/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
			})]
		}),
		!loading && folders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "py-16 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardDrive, { className: "mx-auto size-10 opacity-30 mb-3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-foreground",
					children: "No document folders yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Folders appear here after your uploaded documents are processed and saved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard/upload",
					className: "mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline",
					children: ["Upload a document ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid content-start gap-3 sm:grid-cols-2",
				children: filteredFolders.map((folder, index) => {
					const selected = activeFolder?.name === folder.name;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						onClick: () => setSelectedFolder(folder.name),
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: index * .03 },
						className: `rounded-2xl border p-5 text-left transition ${selected ? "border-primary/50 bg-primary/5 ring-2 ring-primary/20" : "border-border bg-card hover:bg-secondary/40"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 grid size-11 place-items-center rounded-xl bg-primary/10 text-primary",
								children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold break-all",
								children: folder.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [
									folder.files.length,
									" document",
									folder.files.length === 1 ? "" : "s"
								]
							})
						]
					}, folder.name);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "!p-5",
				children: activeFolder ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center gap-2 border-b border-border/60 pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold",
						children: activeFolder.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [activeFolder.files.length, " saved document(s)"]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-96 space-y-2 overflow-y-auto",
					children: activeFolder.files.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-secondary/40 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard/document/$docId",
							params: { docId: file.id },
							className: "flex min-w-0 items-center gap-2.5 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-xs font-semibold",
								children: file.name
							})]
						}), file.fileUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: file.fileUrl,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": `Download ${file.name}`,
							className: "shrink-0 rounded-lg border border-border bg-background p-2 hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" })
						})]
					}, file.id))
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-8 text-center text-sm text-muted-foreground",
					children: "No saved documents in this folder."
				})
			})]
		})
	] });
}
//#endregion
export { FoldersPage as component };
