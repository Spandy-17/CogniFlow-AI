import { a as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useAuth } from "./router-CK1nnWZE.mjs";
import { A as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as DashboardShell } from "./DashboardShell-B6vwdakD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-Cbid2vjO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProtectedDashboard() {
	const { session, loading } = useAuth();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.location.search.includes("error=") || window.location.hash.includes("error=")) {
			const err = window.location.search || window.location.hash;
			window.location.href = `/login${err}`;
			return;
		}
		const hasOAuthParams = window.location.search.includes("code=") || window.location.hash.includes("access_token=");
		if (!loading && !session && !hasOAuthParams) navigate({
			to: "/login",
			replace: true
		});
	}, [
		loading,
		session,
		navigate
	]);
	if (loading || !session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Preparing your workspace…"]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShell, {});
}
//#endregion
export { ProtectedDashboard as component };
