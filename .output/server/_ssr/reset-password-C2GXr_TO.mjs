import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PrimaryButton, n as Field, t as AuthShell } from "./AuthShell-CtB9XJup.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-C2GXr_TO.js
var import_jsx_runtime = require_jsx_runtime();
function ResetPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Set a new password",
		subtitle: "Use at least 8 characters — mix letters, numbers and symbols.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/login",
			className: "font-semibold text-primary hover:underline",
			children: "Back to sign in"
		}) }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "pw",
					label: "New password",
					type: "password",
					placeholder: "••••••••"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "pw2",
					label: "Confirm password",
					type: "password",
					placeholder: "••••••••"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					children: "Update password"
				})
			]
		})
	});
}
//#endregion
export { ResetPage as component };
