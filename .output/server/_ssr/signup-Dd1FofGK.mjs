import { a as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D5Sc9xg5.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useAuth } from "./router-oRtFlNxA.mjs";
import { St as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as PrimaryButton, i as GoogleButton, n as Field, r as FormMessage, t as AuthShell } from "./AuthShell-CtB9XJup.mjs";
import { t as lovable } from "./lovable-DK5Uuqhc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-Dd1FofGK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignupPage() {
	const navigate = useNavigate();
	const { session, signInAsDemo } = useAuth();
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [lastName, setLastName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [agreed, setAgreed] = (0, import_react.useState)(false);
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
		if (!agreed) {
			setError("Please accept the Terms of Service to continue.");
			return;
		}
		if (password.length < 8) {
			setError("Password must be at least 8 characters.");
			return;
		}
		setLoading(true);
		const fullName = `${firstName} ${lastName}`.trim() || "Workspace Admin";
		try {
			const { data, error: supError } = await supabase.auth.signUp({
				email,
				password,
				options: {
					emailRedirectTo: window.location.origin,
					data: {
						first_name: firstName,
						last_name: lastName,
						full_name: fullName
					}
				}
			});
			if (!supError && data.session) {
				setLoading(false);
				navigate({
					to: "/dashboard",
					replace: true
				});
				return;
			}
			signInAsDemo(email, fullName);
			setLoading(false);
			navigate({
				to: "/dashboard",
				replace: true
			});
		} catch (err) {
			signInAsDemo(email, fullName);
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
		title: "Create your account",
		subtitle: "Deploy your first agent pipeline in under 60 seconds.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Already have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/login",
			className: "font-semibold text-primary hover:underline",
			children: "Sign in"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, { error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "first_name",
						label: "First name",
						placeholder: "Ada",
						value: firstName,
						onChange: setFirstName,
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "last_name",
						label: "Last name",
						placeholder: "Lovelace",
						value: lastName,
						onChange: setLastName,
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "email",
					label: "Work email",
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
					placeholder: "At least 8 characters",
					value: password,
					onChange: setPassword,
					required: true,
					autoComplete: "new-password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex gap-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: agreed,
						onChange: (e) => setAgreed(e.target.checked),
						className: "mt-0.5 size-3.5 rounded border-border accent-[oklch(0.55_0.22_275)]"
					}), "I agree to the Terms of Service and Privacy Policy."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryButton, {
					type: "submit",
					loading,
					children: ["Create account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
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
export { SignupPage as component };
