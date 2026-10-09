import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as Mail } from "../_libs/lucide-react.mjs";
import { a as PrimaryButton, n as Field, t as AuthShell } from "./AuthShell-CtB9XJup.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-LNtrMLlF.js
var import_jsx_runtime = require_jsx_runtime();
function ForgotPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Forgot password?",
		subtitle: "Enter your email and we'll send you a secure link to reset it.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/login",
			className: "font-semibold text-primary hover:underline",
			children: "← Back to sign in"
		}) }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "email",
				label: "Email",
				type: "email",
				placeholder: "you@company.com"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryButton, {
				type: "submit",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), " Send reset link"]
			})]
		})
	});
}
//#endregion
export { ForgotPage as component };
