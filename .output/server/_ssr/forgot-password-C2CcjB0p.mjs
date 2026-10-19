import { a as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DfGWe7VR.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as Mail, N as MailCheck } from "../_libs/lucide-react.mjs";
import { a as PrimaryButton, n as Field, r as FormMessage, t as AuthShell } from "./AuthShell-DEgF2e1W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-C2CcjB0p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ForgotPage() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setLoading(true);
		const { error: supError } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
		setLoading(false);
		if (supError) {
			setError(supError.message);
			return;
		}
		setSent(true);
	};
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Reset link sent!",
		subtitle: `Check your inbox at ${email} for a password reset link.`,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/login",
			className: "font-semibold text-primary hover:underline",
			children: "← Back to sign in"
		}) }),
		"data-tsd-source": "/src/routes/forgot-password.tsx:45:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4 py-4",
			"data-tsd-source": "/src/routes/forgot-password.tsx:50:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-16 place-items-center rounded-2xl bg-primary/10",
					"data-tsd-source": "/src/routes/forgot-password.tsx:51:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailCheck, {
						className: "size-8 text-primary",
						"data-tsd-source": "/src/routes/forgot-password.tsx:52:13"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/forgot-password.tsx:54:11",
					children: "The link expires in 1 hour. If you don't see the email, check your spam folder."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSent(false),
					className: "text-sm font-semibold text-primary hover:underline",
					"data-tsd-source": "/src/routes/forgot-password.tsx:57:11",
					children: "Resend link"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Forgot password?",
		subtitle: "Enter your email and we'll send you a secure link to reset it.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/login",
			className: "font-semibold text-primary hover:underline",
			children: "← Back to sign in"
		}) }),
		"data-tsd-source": "/src/routes/forgot-password.tsx:69:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit,
			"data-tsd-source": "/src/routes/forgot-password.tsx:74:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
					error,
					"data-tsd-source": "/src/routes/forgot-password.tsx:75:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "email",
					label: "Email",
					type: "email",
					placeholder: "you@company.com",
					value: email,
					onChange: setEmail,
					required: true,
					autoComplete: "email",
					"data-tsd-source": "/src/routes/forgot-password.tsx:76:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryButton, {
					type: "submit",
					loading,
					"data-tsd-source": "/src/routes/forgot-password.tsx:86:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
						className: "size-4",
						"data-tsd-source": "/src/routes/forgot-password.tsx:87:11"
					}), " Send reset link"]
				})
			]
		})
	});
}
//#endregion
export { ForgotPage as component };
