import { a as __toESM } from "../_runtime.mjs";
import { i as fetchAllDocuments } from "./document-service-drZtwzY8.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as LoaderCircle, H as FileText, Z as CloudUpload, a as TriangleAlert, ht as Bell, rt as CircleCheck } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B6vwdakD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.notifications-BB9dqdPG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NotificationsPage() {
	const [docs, setDocs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		fetchAllDocuments().then(setDocs).catch(() => setDocs([])).finally(() => setLoading(false));
	}, []);
	const notifications = docs.slice(0, 20).map((doc) => {
		if (doc.status === "routed") return {
			Icon: CircleCheck,
			cls: "text-success bg-success/15",
			title: `${doc.name} routed`,
			body: `Routing Agent placed this ${doc.cat} into ${doc.folder}.`,
			t: doc.date
		};
		else if (doc.status === "review") return {
			Icon: TriangleAlert,
			cls: "text-warning bg-warning/15",
			title: `${doc.name} needs review`,
			body: `Confidence: ${doc.conf}%. Manual review required before routing.`,
			t: doc.date
		};
		else if (doc.status === "rejected") return {
			Icon: TriangleAlert,
			cls: "text-destructive bg-destructive/10",
			title: `${doc.name} rejected`,
			body: `Validation failed. Re-upload or re-process this document.`,
			t: doc.date
		};
		else if (doc.status === "error") return {
			Icon: TriangleAlert,
			cls: "text-destructive bg-destructive/10",
			title: `${doc.name} processing failed`,
			body: "The uploaded file is saved. Retry processing after checking the backend service.",
			t: doc.date
		};
		else return {
			Icon: FileText,
			cls: "text-primary bg-primary/10",
			title: `${doc.name} uploaded`,
			body: `${doc.cat} · ${doc.size} · Queued for agent processing.`,
			t: doc.date
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Notifications",
		subtitle: "Agent events from your uploaded documents.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "text-sm font-medium text-primary hover:underline",
			children: "Mark all read"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "!p-0 overflow-hidden",
		children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-center py-16 gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm",
				children: "Loading events…"
			})]
		}) : notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-10 opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-foreground",
					children: "No notifications yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-center max-w-sm",
					children: "Notifications will appear here as your agents process uploaded documents."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard/upload",
					className: "mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-3.5" }), " Upload Documents"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-border/50",
			children: notifications.map((n, i) => {
				const Icon = n.Icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 p-4 hover:bg-secondary/40 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid size-10 shrink-0 place-items-center rounded-xl ${n.cls}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold truncate",
								children: n.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground shrink-0",
								children: n.t
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-0.5",
							children: n.body
						})]
					})]
				}, i);
			})
		})
	})] });
}
//#endregion
export { NotificationsPage as component };
