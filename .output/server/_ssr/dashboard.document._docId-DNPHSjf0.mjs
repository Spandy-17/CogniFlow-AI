import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Card } from "./DashboardShell-CnF1AuAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.document._docId-DNPHSjf0.js
var import_jsx_runtime = require_jsx_runtime();
function DocNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold",
			children: "Document not found"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: "It may have been deleted or reprocessed."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/dashboard/documents",
			className: "mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back to documents"]
		})
	] });
}
//#endregion
export { DocNotFound as notFoundComponent };
