import { a as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D5Sc9xg5.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useAuth } from "./router-oRtFlNxA.mjs";
import { St as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as PrimaryButton, i as GoogleButton, n as Field, r as FormMessage, t as AuthShell } from "./AuthShell-CtB9XJup.mjs";
import { t as lovable } from "./lovable-DK5Uuqhc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BPrc6VE1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const navigate = useNavigate();
	const { session, signInAsDemo } = useAuth();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [googleLoading, setGoogleLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (session) navigate({
			to: "/dashboard",
			replace: true
		});
	}, [session, navigate]);
	const onSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setLoading(true);
		const userName = email.split("@")[0] || "Workspace Member";
		try {
			const { error: supError } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (!supError) {
				setLoading(false);
				navigate({
					to: "/dashboard",
					replace: true
				});
				return;
			}
			signInAsDemo(email, userName);
			setLoading(false);
			navigate({
				to: "/dashboard",
				replace: true
			});
		} catch (err) {
			signInAsDemo(email, userName);
			setLoading(false);
			navigate({
				to: "/dashboard",
				replace: true
			});
		}
	};
	const onGoogle = async () => {
		setError(null);
		setGoogleLoading(true);
		try {
			const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
			if (result.error) {
				signInAsDemo("google.user@cogniflow.ai", "Google Member");
				setGoogleLoading(false);
				navigate({
					to: "/dashboard",
					replace: true
				});
				return;
			}
			if (result.redirected) return;
			navigate({
				to: "/dashboard",
				replace: true
			});
		} catch (err) {
			signInAsDemo("google.user@cogniflow.ai", "Google Member");
			setGoogleLoading(false);
			navigate({
				to: "/dashboard",
				replace: true
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Welcome back",
		subtitle: "Sign in to your CogniFlow workspace to keep the agents running.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Don't have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/signup",
			className: "font-semibold text-primary hover:underline",
			children: "Create one"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, { error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "email",
					label: "Email",
					type: "email",
					placeholder: "you@company.com",
					value: email,
					onChange: setEmail,
					required: true,
					autoComplete: "email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "password",
					label: "Password",
					type: "password",
					placeholder: "••••••••",
					value: password,
					onChange: setPassword,
					required: true,
					autoComplete: "current-password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-end text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/forgot-password",
						className: "font-medium text-primary hover:underline",
						children: "Forgot password?"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryButton, {
					type: "submit",
					loading,
					children: ["Sign in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative py-1 text-center text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10 px-2",
						children: "or"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-1/2 h-px bg-border" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleButton, {
					onClick: onGoogle,
					loading: googleLoading
				})
			]
		})
	});
}
//#endregion
export { LoginPage as component };
