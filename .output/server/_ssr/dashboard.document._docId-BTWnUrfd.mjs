import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Card } from "./DashboardShell-B1_2tSzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.document._docId-BTWnUrfd.js
var import_jsx_runtime = require_jsx_runtime();
function DocNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:37:9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:38:13",
				children: "Document not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:39:13",
				children: "It may have been deleted or reprocessed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard/documents",
				className: "mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline",
				"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:40:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "size-4",
					"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:41:17"
				}), " Back to documents"]
			})
		]
	});
}
//#endregion
export { DocNotFound as notFoundComponent };
