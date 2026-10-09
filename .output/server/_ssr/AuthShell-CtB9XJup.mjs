import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { H as FolderTree, P as LoaderCircle, h as ShieldCheck, nt as Cpu, p as Sparkles, tt as Database, y as ScanText } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AuthShell-CtB9XJup.js
var import_jsx_runtime = require_jsx_runtime();
function AuthShell({ title, subtitle, children, footer }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none fixed inset-0 -z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 mesh-bg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-60" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-screen lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative hidden lg:flex flex-col justify-between p-10 overflow-hidden bg-gradient-to-br from-navy to-[oklch(0.28_0.08_275)] text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 mesh-bg opacity-40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "relative flex items-center gap-2 z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-9 place-items-center rounded-xl bg-white/10 backdrop-blur border border-white/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-bold tracking-tight",
							children: "CogniFlow"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-3xl font-bold tracking-tight leading-tight",
								children: [
									"A swarm of AI agents,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"working for you."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-white/70 text-sm leading-relaxed",
								children: "CogniFlow's autonomous agents extract, classify, validate and route your documents — so your team can focus on the work that actually matters."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 space-y-3",
								children: [
									{
										i: ScanText,
										t: "OCR Agent",
										s: "Extracting text from PDFs & scans"
									},
									{
										i: Sparkles,
										t: "Classification Agent",
										s: "Confidence 98.4%"
									},
									{
										i: ShieldCheck,
										t: "Validation Agent",
										s: "Template match: PASS"
									},
									{
										i: FolderTree,
										t: "Routing Agent",
										s: "→ /Certificates/2025"
									},
									{
										i: Database,
										t: "Central Database",
										s: "Indexed & searchable"
									}
								].map((r, i) => {
									const Icon = r.i;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											x: -12
										},
										animate: {
											opacity: 1,
											x: 0
										},
										transition: { delay: .15 + i * .08 },
										className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-3 py-2.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid size-8 place-items-center rounded-lg bg-white/10",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold",
													children: r.t
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-white/60 truncate",
													children: r.s
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ml-auto size-2 rounded-full bg-emerald-400 animate-pulse" })
										]
									}, r.t);
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative z-10 text-xs text-white/50",
						children: "© 2026 CogniFlow · Enterprise-grade document intelligence"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center p-6 md:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "w-full max-w-md rounded-3xl glass-strong p-8 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "lg:hidden mb-6 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-8 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "CogniFlow"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-tight",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children
						}),
						footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 text-center text-sm text-muted-foreground",
							children: footer
						})
					]
				})
			})]
		})]
	});
}
function Field({ label, type = "text", placeholder, id, value, onChange, required, autoComplete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "text-xs font-semibold text-foreground/80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			name: id,
			type,
			placeholder,
			value,
			required,
			autoComplete,
			onChange: (e) => onChange?.(e.target.value),
			className: "w-full rounded-xl border border-border bg-background/70 px-3.5 py-2.5 text-sm shadow-soft outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
		})]
	});
}
function PrimaryButton({ children, type = "button", onClick, loading, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		onClick,
		disabled: loading || disabled,
		className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60",
		children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : children
	});
}
function GoogleButton({ onClick, loading }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		disabled: loading,
		className: "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/70 px-4 py-2.5 text-sm font-semibold transition hover:bg-secondary disabled:opacity-60",
		children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.9 1.5l2.6-2.5C16.9 3.7 14.7 2.7 12 2.7 6.9 2.7 2.8 6.8 2.8 12S6.9 21.3 12 21.3c6.9 0 9.4-4.8 9.4-8.6 0-.6-.1-1-.1-1.5H12z"
			})
		}), "Continue with Google"]
	});
}
function FormMessage({ error, success }) {
	if (!error && !success) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-xl border px-3.5 py-2.5 text-xs font-medium ${error ? "border-destructive/30 bg-destructive/10 text-destructive" : "border-success/30 bg-success/10 text-success"}`,
		children: error || success
	});
}
//#endregion
export { PrimaryButton as a, GoogleButton as i, Field as n, FormMessage as r, AuthShell as t };
