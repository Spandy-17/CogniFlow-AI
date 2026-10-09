import { a as __toESM } from "../_runtime.mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { i as require_react, n as useQueryClient, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, f as useRouterState, h as Outlet, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as initials, i as displayName, o as useAuth, s as assistantReply } from "./router-oRtFlNxA.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as MessageCircle, F as LayoutDashboard, H as FolderTree, N as LogOut, W as Files, _ as Send, a as Upload, bt as Bell, ct as CircleUser, dt as ChevronsLeft, g as Settings, h as ShieldCheck, ht as ChartColumn, i as User, mt as Check, n as X, nt as Cpu, pt as ChevronDown, ut as ChevronsRight, v as Search, yt as Bot } from "../_libs/lucide-react.mjs";
import { t as ThemeToggle } from "./ThemeToggle-CoeXh7sE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DashboardShell-CnF1AuAt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var suggestions = [
	"Where is Certificate_Ada.pdf?",
	"Why was this rejected?",
	"What is the confidence score?",
	"Which folders were assigned?"
];
function Markdownish({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-1 text-sm leading-relaxed",
		children: text.split("\n").map((line, i) => {
			if (!line.trim()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1" }, i);
			const html = line.replace(/^- /, "• ").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code class=\"rounded bg-secondary px-1 py-0.5 text-[11px]\">$1</code>");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { dangerouslySetInnerHTML: { __html: html } }, i);
		})
	});
}
function AiAssistant() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [input, setInput] = (0, import_react.useState)("");
	const [thinking, setThinking] = (0, import_react.useState)(false);
	const [msgs, setMsgs] = (0, import_react.useState)([{
		role: "assistant",
		text: "Hi — I'm CogniAI. Ask me about any document in your workspace: where it was routed, its confidence score, or why validation failed."
	}]);
	const endRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [
		msgs,
		open,
		thinking
	]);
	const send = (text) => {
		const q = text.trim();
		if (!q || thinking) return;
		setMsgs((m) => [...m, {
			role: "user",
			text: q
		}]);
		setInput("");
		setThinking(true);
		setTimeout(() => {
			setMsgs((m) => [...m, {
				role: "assistant",
				text: assistantReply(q)
			}]);
			setThinking(false);
		}, 650);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20,
			scale: .96
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 20,
			scale: .96
		},
		transition: {
			duration: .22,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed bottom-24 right-4 z-50 flex h-[min(560px,72vh)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl glass-strong shadow-xl",
		role: "dialog",
		"aria-label": "CogniAI assistant",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-3 border-b border-border/60 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-4.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold leading-tight",
							children: "CogniAI Assistant"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: "Grounded in your document pipeline"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(false),
						"aria-label": "Close assistant",
						className: "grid size-8 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-4 overflow-y-auto px-4 py-4",
				children: [
					msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 6
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: `flex gap-2.5 ${m.role === "user" ? "justify-end" : ""}`,
						children: [
							m.role === "assistant" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: m.role === "user" ? "max-w-[80%] rounded-2xl bg-primary px-3.5 py-2 text-sm text-primary-foreground" : "max-w-[85%] text-foreground",
								children: m.role === "user" ? m.text : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdownish, { text: m.text })
							}),
							m.role === "user" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-secondary text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5" })
							})
						]
					}, i)),
					thinking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-7 place-items-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "animate-pulse",
							children: "Thinking…"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
				]
			}),
			msgs.length <= 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5 px-4 pb-2",
				children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => send(s),
					className: "rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground transition hover:border-primary/50 hover:text-foreground",
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					send(input);
				},
				className: "flex items-center gap-2 border-t border-border/60 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Ask about a document…",
					"aria-label": "Message CogniAI",
					className: "min-w-0 flex-1 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: !input.trim() || thinking,
					"aria-label": "Send message",
					className: "grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white transition hover:brightness-110 disabled:opacity-50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
				})]
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => setOpen((o) => !o),
		"aria-expanded": open,
		className: "fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110",
		children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), open ? "Close" : "Ask CogniAI"]
	})] });
}
var ROLES = [
	"Student",
	"Faculty",
	"Coordinator",
	"Admin"
];
var KEY = "cogniflow.role";
var EVT = "cogniflow-role-change";
function getRole() {
	if (typeof window === "undefined") return "Faculty";
	const v = window.localStorage.getItem(KEY);
	return v && ROLES.includes(v) ? v : "Faculty";
}
function setRole(role) {
	window.localStorage.setItem(KEY, role);
	window.dispatchEvent(new CustomEvent(EVT));
}
function useRole() {
	const [role, set] = (0, import_react.useState)("Faculty");
	(0, import_react.useEffect)(() => {
		set(getRole());
		const on = () => set(getRole());
		window.addEventListener(EVT, on);
		return () => window.removeEventListener(EVT, on);
	}, []);
	return role;
}
/** Which sidebar routes each role can reach. */
var roleRoutes = {
	Student: [
		"/dashboard",
		"/dashboard/upload",
		"/dashboard/documents",
		"/dashboard/notifications"
	],
	Faculty: [
		"/dashboard",
		"/dashboard/upload",
		"/dashboard/documents",
		"/dashboard/ai-processing",
		"/dashboard/folders",
		"/dashboard/notifications"
	],
	Coordinator: [
		"/dashboard",
		"/dashboard/upload",
		"/dashboard/documents",
		"/dashboard/ai-processing",
		"/dashboard/folders",
		"/dashboard/validation",
		"/dashboard/reports",
		"/dashboard/notifications"
	],
	Admin: [
		"/dashboard",
		"/dashboard/upload",
		"/dashboard/documents",
		"/dashboard/ai-processing",
		"/dashboard/folders",
		"/dashboard/validation",
		"/dashboard/reports",
		"/dashboard/notifications"
	]
};
function RoleSwitcher() {
	const role = useRole();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen((o) => !o),
			"aria-haspopup": "listbox",
			"aria-expanded": open,
			className: "flex items-center gap-1.5 rounded-xl border border-border bg-background/60 px-2.5 py-2 text-xs font-semibold text-muted-foreground transition hover:text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-40",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.ul, {
			initial: {
				opacity: 0,
				y: -6,
				scale: .97
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: -6,
				scale: .97
			},
			role: "listbox",
			className: "absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl glass-strong p-1.5 shadow-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "px-2 py-1 text-[10px] uppercase tracking-widest text-muted-foreground",
				children: "View as role"
			}), ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				role: "option",
				"aria-selected": r === role,
				onClick: () => {
					setRole(r);
					setOpen(false);
				},
				className: `flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-sm transition ${r === role ? "bg-primary/10 font-semibold text-primary" : "hover:bg-secondary"}`,
				children: [r, r === role && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "ml-auto size-3.5" })]
			}) }, r))]
		})] }) })]
	});
}
var nav = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/dashboard/upload",
		label: "Upload",
		icon: Upload
	},
	{
		to: "/dashboard/documents",
		label: "My Documents",
		icon: Files
	},
	{
		to: "/dashboard/ai-processing",
		label: "AI Processing",
		icon: Cpu,
		badge: "Live"
	},
	{
		to: "/dashboard/folders",
		label: "Folders",
		icon: FolderTree
	},
	{
		to: "/dashboard/validation",
		label: "Validation",
		icon: ShieldCheck
	},
	{
		to: "/dashboard/reports",
		label: "Reports",
		icon: ChartColumn
	},
	{
		to: "/dashboard/notifications",
		label: "Notifications",
		icon: Bell
	}
];
var bottomNav = [{
	to: "/dashboard/settings",
	label: "Settings",
	icon: Settings
}, {
	to: "/dashboard/profile",
	label: "Profile",
	icon: CircleUser
}];
function DashboardShell() {
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const { user, signOut } = useAuth();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const name = displayName(user);
	const handleSignOut = async () => {
		await queryClient.cancelQueries();
		queryClient.clear();
		await signOut();
		navigate({
			to: "/login",
			replace: true
		});
	};
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const role = useRole();
	const visibleNav = nav.filter((n) => roleRoutes[role].includes(n.to));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none fixed inset-0 -z-10 mesh-bg opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.aside, {
					animate: { width: collapsed ? 76 : 260 },
					transition: {
						duration: .3,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "sticky top-0 h-screen shrink-0 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "m-3 h-[calc(100vh-1.5rem)] glass-strong rounded-3xl flex flex-col p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex items-center gap-2.5 px-2 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										x: -6
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: -6
									},
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold leading-tight",
										children: "CogniFlow"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] uppercase tracking-widest text-muted-foreground",
										children: role
									})]
								}) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "mt-4 flex-1 space-y-1",
								children: visibleNav.map((n) => {
									const Icon = n.icon;
									const active = pathname === n.to || n.to !== "/dashboard" && pathname.startsWith(n.to);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: n.to,
										className: `group relative flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm transition ${active ? "bg-gradient-to-r from-brand-1/15 to-brand-2/10 text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
										children: [
											active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
												layoutId: "active-nav",
												className: "absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-gradient-to-b from-brand-1 to-brand-2"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `size-4.5 shrink-0 ${active ? "text-primary" : ""}` }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
												initial: {
													opacity: 0,
													x: -6
												},
												animate: {
													opacity: 1,
													x: 0
												},
												exit: {
													opacity: 0,
													x: -6
												},
												className: "flex-1 truncate font-medium",
												children: n.label
											}) }),
											"badge" in n && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary",
												children: n.badge
											})
										]
									}, n.to);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [bottomNav.map((n) => {
									const Icon = n.icon;
									const active = pathname.startsWith(n.to);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: n.to,
										className: `flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm transition ${active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4.5 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate font-medium",
											children: n.label
										})]
									}, n.to);
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: handleSignOut,
									className: "flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4.5 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: "Logout"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setCollapsed((c) => !c),
								className: "mt-3 flex items-center justify-center gap-2 rounded-xl border border-border bg-background/60 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-secondary",
								children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsRight, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsLeft, { className: "size-4" }), " Collapse"] })
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-30 mx-3 mt-3 flex items-center gap-3 rounded-2xl glass-strong px-4 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "Search documents, folders, agents…",
									className: "w-full rounded-xl border border-border bg-background/60 py-2 pl-9 pr-16 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
									className: "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground",
									children: "⌘K"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleSwitcher, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "relative grid size-9 place-items-center rounded-xl border border-border bg-background/60 text-muted-foreground transition hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-1.5 top-1.5 size-1.5 rounded-full bg-primary" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 h-6 w-px bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-xl border border-border bg-background/60 py-1 pl-1 pr-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-7 place-items-center rounded-lg bg-gradient-to-br from-brand-1 to-brand-2 text-xs font-bold text-white",
										children: initials(name) || "CF"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hidden sm:block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold leading-tight",
											children: name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "max-w-[160px] truncate text-[10px] text-muted-foreground",
											children: user?.email
										})]
									})]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "p-4 md:p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiAssistant, {})
		]
	});
}
function PageHeader({ title, subtitle, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex flex-wrap items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold tracking-tight md:text-3xl",
			children: title
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: subtitle
		})] }), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-2",
			children: actions
		})]
	});
}
function Card({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-2xl glass-strong p-5 ${className}`,
		children
	});
}
//#endregion
export { DashboardShell as n, PageHeader as r, Card as t };
