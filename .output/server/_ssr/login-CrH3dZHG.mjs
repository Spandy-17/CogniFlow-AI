import { a as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-qPf06kmW.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useAuth } from "./router-CK1nnWZE.mjs";
import { _t as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as PrimaryButton, i as GoogleButton, n as Field, r as FormMessage, t as AuthShell } from "./AuthShell-CtB9XJup.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CrH3dZHG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const navigate = useNavigate();
	const { session } = useAuth();
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
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			const hash = window.location.hash.startsWith("#") ? window.location.hash.substring(1) : "";
			const hashParams = new URLSearchParams(hash);
			const searchParams = new URLSearchParams(window.location.search);
			const err = hashParams.get("error_description") || searchParams.get("error_description");
			if (err) setError(decodeURIComponent(err.replace(/\+/g, " ")));
		}
	}, []);
	const onSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setLoading(true);
		const { error: supError } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (supError) {
			if (supError.message.includes("Email not confirmed")) setError("Please verify your email before signing in. Check your inbox for a confirmation link.");
			else if (supError.message.includes("Invalid login credentials")) setError("Incorrect email or password. Please try again.");
			else setError(supError.message);
			setLoading(false);
			return;
		}
		setLoading(false);
		navigate({
			to: "/dashboard",
			replace: true
		});
	};
	const onGoogle = async () => {
		setError(null);
		setGoogleLoading(true);
		try {
			const { error: supError } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: { redirectTo: `${window.location.origin}/dashboard` }
			});
			if (supError) {
				setError(supError.message || "Google sign-in failed. Please try again.");
				setGoogleLoading(false);
			}
		} catch (err) {
			setError(err instanceof Error ? err.message : "Google sign-in failed. Please try again.");
			setGoogleLoading(false);
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
