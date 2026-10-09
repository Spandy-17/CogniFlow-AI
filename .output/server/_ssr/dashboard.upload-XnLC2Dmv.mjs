import { a as __toESM } from "../_runtime.mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { it as CloudUpload, lt as CircleCheck, n as X, p as Sparkles, q as FileText } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-CnF1AuAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.upload-XnLC2Dmv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function UploadPage() {
	const [items, setItems] = (0, import_react.useState)([{
		id: "1",
		name: "Certificate_Ada.pdf",
		size: "2.4 MB",
		progress: 100,
		status: "done"
	}, {
		id: "2",
		name: "Report_Q3.docx",
		size: "1.1 MB",
		progress: 62,
		status: "processing"
	}]);
	const [drag, setDrag] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const addFiles = (files) => {
		if (!files) return;
		Array.from(files).forEach((f) => {
			const id = crypto.randomUUID();
			setItems((prev) => [...prev, {
				id,
				name: f.name,
				size: `${(f.size / 1024 / 1024).toFixed(1)} MB`,
				progress: 0,
				status: "uploading"
			}]);
			let p = 0;
			const iv = setInterval(() => {
				p += 8 + Math.random() * 12;
				if (p >= 100) {
					clearInterval(iv);
					setItems((prev) => prev.map((it) => it.id === id ? {
						...it,
						progress: 100,
						status: "processing"
					} : it));
					setTimeout(() => {
						setItems((prev) => prev.map((it) => it.id === id ? {
							...it,
							status: "done"
						} : it));
					}, 1600);
				} else setItems((prev) => prev.map((it) => it.id === id ? {
					...it,
					progress: Math.min(99, p)
				} : it));
			}, 250);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Upload documents",
			subtitle: "Drop files here — AI agents start processing automatically."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "!p-0 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onDragOver: (e) => {
					e.preventDefault();
					setDrag(true);
				},
				onDragLeave: () => setDrag(false),
				onDrop: (e) => {
					e.preventDefault();
					setDrag(false);
					addFiles(e.dataTransfer.files);
				},
				onClick: () => ref.current?.click(),
				className: `relative m-4 grid cursor-pointer place-items-center rounded-2xl border-2 border-dashed py-16 text-center transition-all ${drag ? "border-primary bg-primary/5" : "border-border bg-background/40 hover:bg-secondary/50"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref,
						type: "file",
						multiple: true,
						accept: ".pdf,.docx,.png,.jpg,.jpeg",
						hidden: true,
						onChange: (e) => addFiles(e.target.files)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: { y: drag ? -4 : 0 },
						className: "grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg font-semibold",
						children: "Drop files or click to browse"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "PDF · DOCX · PNG · JPG · up to 25 MB each"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), " AI processing starts automatically"]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				layout: true,
				initial: {
					opacity: 0,
					y: 8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					x: 20
				},
				className: "flex items-center gap-3 rounded-2xl glass-strong p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: it.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground shrink-0",
								children: it.size
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1.5 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 flex-1 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2",
									animate: { width: `${it.progress}%` },
									transition: { duration: .4 }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-semibold text-muted-foreground w-24 text-right",
								children: [
									it.status === "uploading" && `Uploading ${Math.round(it.progress)}%`,
									it.status === "processing" && "AI processing…",
									it.status === "done" && "Routed ✓"
								]
							})]
						})]
					}),
					it.status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setItems((p) => p.filter((x) => x.id !== it.id)),
						className: "text-muted-foreground hover:text-destructive",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})
				]
			}, it.id)) })
		})
	] });
}
//#endregion
export { UploadPage as component };
