import { a as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-qPf06kmW.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useAuth } from "./router-CK1nnWZE.mjs";
import { O as MailCheck, _t as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as PrimaryButton, i as GoogleButton, n as Field, r as FormMessage, t as AuthShell } from "./AuthShell-CtB9XJup.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-CwoXGz5N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignupPage() {
	const navigate = useNavigate();
	const { session } = useAuth();
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [lastName, setLastName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [agreed, setAgreed] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [googleLoading, setGoogleLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [emailSent, setEmailSent] = (0, import_react.useState)(false);
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
		const { data, error: supError } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${window.location.origin}/dashboard`,
				data: {
					first_name: firstName,
					last_name: lastName,
					full_name: fullName
				}
			}
		});
		setLoading(false);
		if (supError) {
			if (supError.message.includes("already registered") || supError.message.includes("already exists")) setError("An account with this email already exists. Try signing in instead.");
			else setError(supError.message);
			return;
		}
		if (data.session) {
			navigate({
				to: "/dashboard",
				replace: true
			});
			return;
		}
		setEmailSent(true);
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
	if (emailSent) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Check your inbox",
		subtitle: `We sent a confirmation link to ${email}. Click it to activate your account.`,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Wrong email? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setEmailSent(false),
			className: "font-semibold text-primary hover:underline",
			children: "Go back"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-16 place-items-center rounded-2xl bg-primary/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailCheck, { className: "size-8 text-primary" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-muted-foreground",
					children: "After confirming your email, you'll be redirected to your dashboard automatically."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "text-sm font-semibold text-primary hover:underline",
					children: "Already confirmed? Sign in →"
				})
			]
		})
	});
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
