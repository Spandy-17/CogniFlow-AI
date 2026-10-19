import { a as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PrimaryButton, t as AuthShell } from "./AuthShell-DEgF2e1W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify-otp-B6xHfE2A.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OtpPage() {
	const [otp, setOtp] = (0, import_react.useState)([
		"",
		"",
		"",
		"",
		"",
		""
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Verify your email",
		subtitle: "We sent a 6-digit code to your inbox. It expires in 10 minutes.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/login",
			className: "font-semibold text-primary hover:underline",
			children: "Back to sign in"
		}) }),
		"data-tsd-source": "/src/routes/verify-otp.tsx:18:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-5",
			"data-tsd-source": "/src/routes/verify-otp.tsx:23:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-between gap-2",
					"data-tsd-source": "/src/routes/verify-otp.tsx:24:9",
					children: otp.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: v,
						onChange: (e) => {
							const c = e.target.value.slice(-1);
							const next = [...otp];
							next[i] = c;
							setOtp(next);
							if (c && i < 5) document.getElementById(`otp-${i + 1}`)?.focus();
						},
						id: `otp-${i}`,
						maxLength: 1,
						inputMode: "numeric",
						className: "size-12 rounded-xl border border-border bg-background/70 text-center text-lg font-bold shadow-soft outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
						"data-tsd-source": "/src/routes/verify-otp.tsx:26:13"
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					"data-tsd-source": "/src/routes/verify-otp.tsx:41:9",
					children: "Verify"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-xs text-muted-foreground",
					"data-tsd-source": "/src/routes/verify-otp.tsx:42:9",
					children: ["Didn't receive it? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "font-semibold text-primary hover:underline",
						"data-tsd-source": "/src/routes/verify-otp.tsx:43:30",
						children: "Resend code"
					})]
				})
			]
		})
	});
}
//#endregion
export { OtpPage as component };
