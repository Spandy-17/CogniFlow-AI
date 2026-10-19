import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { ct as CircleCheck, o as TriangleAlert, p as Sparkles, q as FileText, r as Users } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B1_2tSzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.notifications-D6RXd4Gg.js
var import_jsx_runtime = require_jsx_runtime();
var notes = [
	{
		t: "2m ago",
		Icon: CircleCheck,
		cls: "text-success bg-success/15",
		title: "482 documents routed",
		body: "Routing agent completed Certificates batch #2025-08."
	},
	{
		t: "1h ago",
		Icon: TriangleAlert,
		cls: "text-warning bg-warning/15",
		title: "12 items need review",
		body: "Confidence below threshold in Invoice batch."
	},
	{
		t: "3h ago",
		Icon: Sparkles,
		cls: "text-primary bg-primary/10",
		title: "CogniAI upgraded",
		body: "Classification accuracy improved to 99.2%."
	},
	{
		t: "yesterday",
		Icon: FileText,
		cls: "text-brand-2/90 bg-brand-2/10",
		title: "Monthly report ready",
		body: "October 2026 analytics available for export."
	},
	{
		t: "2d ago",
		Icon: Users,
		cls: "text-sky-500 bg-sky-500/10",
		title: "3 new team members",
		body: "Grace, Alan, and Ada joined the workspace."
	}
];
function NotificationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Notifications",
		subtitle: "Everything that happened across your agents.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "text-sm font-medium text-primary hover:underline",
			children: "Mark all read"
		}),
		"data-tsd-source": "/src/routes/dashboard.notifications.tsx:18:7"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "!p-0 overflow-hidden",
		"data-tsd-source": "/src/routes/dashboard.notifications.tsx:20:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-border/50",
			"data-tsd-source": "/src/routes/dashboard.notifications.tsx:21:9",
			children: notes.map((n, i) => {
				const Icon = n.Icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 p-4 hover:bg-secondary/40 transition-colors",
					"data-tsd-source": "/src/routes/dashboard.notifications.tsx:25:15",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid size-10 shrink-0 place-items-center rounded-xl ${n.cls}`,
						"data-tsd-source": "/src/routes/dashboard.notifications.tsx:26:17",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							"data-tsd-source": "/src/routes/dashboard.notifications.tsx:26:97"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						"data-tsd-source": "/src/routes/dashboard.notifications.tsx:27:17",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							"data-tsd-source": "/src/routes/dashboard.notifications.tsx:28:19",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold truncate",
								"data-tsd-source": "/src/routes/dashboard.notifications.tsx:29:21",
								children: n.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground shrink-0",
								"data-tsd-source": "/src/routes/dashboard.notifications.tsx:30:21",
								children: n.t
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-0.5",
							"data-tsd-source": "/src/routes/dashboard.notifications.tsx:32:19",
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
