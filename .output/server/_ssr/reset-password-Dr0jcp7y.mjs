import { a as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-qPf06kmW.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as KeyRound } from "../_libs/lucide-react.mjs";
import { a as PrimaryButton, n as Field, r as FormMessage, t as AuthShell } from "./AuthShell-CtB9XJup.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-Dr0jcp7y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResetPage() {
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const onSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		if (password.length < 8) {
			setError("Password must be at least 8 characters.");
			return;
		}
		if (password !== confirm) {
			setError("Passwords do not match.");
			return;
		}
		setLoading(true);
		const { error: supError } = await supabase.auth.updateUser({ password });
		setLoading(false);
		if (supError) {
			if (supError.message.includes("expired") || supError.message.includes("invalid")) setError("Your reset link has expired or is invalid. Please request a new one.");
			else setError(supError.message);
			return;
		}
		navigate({
			to: "/dashboard",
			replace: true
		});
	};
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
			onSubmit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, { error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "pw",
					label: "New password",
					type: "password",
					placeholder: "••••••••",
					value: password,
					onChange: setPassword,
					required: true,
					autoComplete: "new-password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "pw2",
					label: "Confirm password",
					type: "password",
					placeholder: "••••••••",
					value: confirm,
					onChange: setConfirm,
					required: true,
					autoComplete: "new-password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryButton, {
					type: "submit",
					loading,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4" }), " Update password"]
				})
			]
		})
	});
}
//#endregion
export { ResetPage as component };
