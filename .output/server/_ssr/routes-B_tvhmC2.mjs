import { a as __toESM } from "../_runtime.mjs";
import { i as useMotionValue, n as animate, r as useTransform, t as useInView } from "../_libs/framer-motion.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useAuth } from "./router-oRtFlNxA.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { C as Play, D as MoveRight, H as FolderTree, I as Layers, L as KeyRound, St as ArrowRight, ft as ChevronRight, h as ShieldCheck, lt as CircleCheck, nt as Cpu, p as Sparkles, q as FileText, t as Zap, tt as Database, y as ScanText, z as Github } from "../_libs/lucide-react.mjs";
import { t as ThemeToggle } from "./ThemeToggle-CoeXh7sE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B_tvhmC2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Counter({ to, suffix = "", duration = 2 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const mv = useMotionValue(0);
	const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
	(0, import_react.useEffect)(() => {
		if (inView) animate(mv, to, {
			duration,
			ease: [
				.22,
				1,
				.36,
				1
			]
		});
	}, [
		inView,
		to,
		duration,
		mv
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, { children: rounded }), suffix]
	});
}
var agents = [
	{
		key: "upload",
		label: "Upload",
		icon: FileText,
		detail: "Ingesting document.pdf"
	},
	{
		key: "ocr",
		label: "OCR Agent",
		icon: ScanText,
		detail: "Extracting text · 98%"
	},
	{
		key: "classify",
		label: "Classification",
		icon: Sparkles,
		detail: "Category: Certificate"
	},
	{
		key: "validate",
		label: "Validation",
		icon: ShieldCheck,
		detail: "Template match: PASS"
	},
	{
		key: "route",
		label: "Routing",
		icon: FolderTree,
		detail: "→ /Certificates/2025"
	},
	{
		key: "db",
		label: "Database",
		icon: Database,
		detail: "Indexed · Searchable"
	}
];
function AgentPipeline() {
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setActive((a) => (a + 1) % agents.length), 1400);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative rounded-3xl glass-strong p-6 shadow-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between text-xs text-muted-foreground mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-success animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live pipeline · agent swarm" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums",
				children: "avg 28s"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-2.5",
			children: agents.map((a, i) => {
				const Icon = a.icon;
				const isActive = i === active;
				const isDone = i < active;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `relative flex items-center gap-3 rounded-2xl border px-3.5 py-3 transition-colors ${isActive ? "border-primary/40 bg-primary/5" : "border-border/60 bg-background/40"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid size-9 shrink-0 place-items-center rounded-xl transition-all ${isActive ? "bg-gradient-to-br from-brand-1 to-brand-2 text-white animate-pulse-ring" : isDone ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: a.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[10px] font-medium uppercase tracking-wider ${isActive ? "text-primary" : isDone ? "text-success" : "text-muted-foreground"}`,
									children: isActive ? "Processing" : isDone ? "Complete" : "Queued"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: a.detail
							}),
							isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 h-1 w-full overflow-hidden rounded-full bg-primary/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "h-full w-1/2 rounded-full bg-gradient-to-r from-brand-1 to-brand-2",
									initial: { x: "-100%" },
									animate: { x: "220%" },
									transition: {
										duration: 1.2,
										ease: "easeInOut"
									}
								})
							})
						]
					})]
				}, a.key);
			})
		})]
	});
}
function Navbar() {
	const { session } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-4 z-40 mx-auto flex w-[min(1200px,94%)] items-center justify-between rounded-2xl glass-strong px-4 py-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-8 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[15px] font-bold tracking-tight",
					children: "CogniFlow"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden items-center gap-7 text-sm text-muted-foreground md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#features",
						className: "hover:text-foreground transition",
						children: "Features"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#workflow",
						className: "hover:text-foreground transition",
						children: "How it works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#stats",
						className: "hover:text-foreground transition",
						children: "Metrics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#footer",
						className: "hover:text-foreground transition",
						children: "Docs"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), session ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard",
					className: "inline-flex items-center gap-1.5 rounded-xl bg-foreground px-3.5 py-1.5 text-sm font-semibold text-background transition hover:opacity-90",
					children: ["Open dashboard ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "hidden sm:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5",
					children: "Sign in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/signup",
					className: "inline-flex items-center gap-1.5 rounded-xl bg-foreground px-3.5 py-1.5 text-sm font-semibold text-background transition hover:opacity-90",
					children: ["Get started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				})] })]
			})
		]
	});
}
var features = [
	{
		icon: Zap,
		title: "AI-Powered Automation",
		desc: "End-to-end pipelines that run themselves — from ingest to routing."
	},
	{
		icon: Layers,
		title: "Multi-Agent Intelligence",
		desc: "Specialized agents collaborate: OCR, classification, validation, routing."
	},
	{
		icon: ScanText,
		title: "OCR Extraction",
		desc: "Structured text from PDFs, scans and images with 99% fidelity."
	},
	{
		icon: Sparkles,
		title: "LLM Classification",
		desc: "Domain-tuned models label documents with confidence scores."
	},
	{
		icon: FolderTree,
		title: "Automatic Routing",
		desc: "Documents land in the right folder — every time, no human effort."
	},
	{
		icon: ShieldCheck,
		title: "Template Validation",
		desc: "Enforce schemas, catch anomalies, block malformed uploads."
	},
	{
		icon: KeyRound,
		title: "Role-Based Access",
		desc: "Student, Faculty, Coordinator and Admin roles out of the box."
	},
	{
		icon: Database,
		title: "Secure Storage",
		desc: "Encrypted at rest, audited access, immutable event logs."
	}
];
var stats = [
	{
		value: 5e3,
		suffix: "+",
		label: "Documents processed"
	},
	{
		value: 99,
		suffix: "%",
		label: "Classification accuracy"
	},
	{
		value: 85,
		suffix: "%",
		label: "Reduced manual effort"
	},
	{
		value: 30,
		suffix: "s",
		label: "Avg processing time"
	}
];
var workflow = [
	{
		icon: FileText,
		label: "Upload"
	},
	{
		icon: ScanText,
		label: "OCR"
	},
	{
		icon: Sparkles,
		label: "Classify"
	},
	{
		icon: ShieldCheck,
		label: "Validate"
	},
	{
		icon: FolderTree,
		label: "Route"
	},
	{
		icon: Database,
		label: "Store"
	},
	{
		icon: Cpu,
		label: "Analytics"
	}
];
function DemoModal({ open, onClose }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 grid place-items-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-navy/70 backdrop-blur-sm",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: .96,
				y: 12
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			className: "relative z-10 w-full max-w-2xl rounded-3xl glass-strong p-6 shadow-elevated",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold tracking-tight",
						children: "CogniFlow product demo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Watch the agent swarm ingest, extract, classify, validate and route a document — live."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-xl border border-border px-2.5 py-1 text-xs font-semibold text-muted-foreground transition hover:bg-secondary hover:text-foreground",
						children: "Close"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentPipeline, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/signup",
						className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110",
						children: ["Create your account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition hover:bg-secondary",
						children: "Sign in"
					})]
				})
			]
		})]
	});
}
function Landing() {
	const [demoOpen, setDemoOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoModal, {
		open: demoOpen,
		onClose: () => setDemoOpen(false)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none fixed inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 mesh-bg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-70" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative mx-auto mt-16 w-[min(1200px,94%)] pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 8
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .5 },
							className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-4 place-items-center rounded-full bg-gradient-to-br from-brand-1 to-brand-2 text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-2.5" })
							}), "Introducing multi-agent v2 · now generally available"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .05
							},
							className: "mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl",
							children: [
								"Automate Document",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Intelligence with ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text animate-gradient",
									children: "AI Agents"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .12
							},
							className: "mt-5 max-w-xl text-lg text-muted-foreground",
							children: "CogniFlow orchestrates a swarm of specialized AI agents that extract, classify, validate and route documents — with near-zero human effort and enterprise accuracy."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .2
							},
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/signup",
								className: "group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110",
								children: ["Get started free", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setDemoOpen(true),
								className: "inline-flex items-center gap-2 rounded-xl glass-strong glass-hover px-5 py-3 text-sm font-semibold text-foreground transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 fill-current" }), "Watch demo"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground",
							children: [
								"SOC2 ready",
								"GDPR compliant",
								"Self-hostable",
								"SSO / SAML"
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-success" }),
									" ",
									x
								]
							}, x))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20,
							scale: .97
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						transition: {
							duration: .7,
							delay: .1
						},
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-1/20 via-brand-2/15 to-transparent blur-2xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentPipeline, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "absolute -left-6 top-8 hidden md:flex items-center gap-2 rounded-2xl glass-strong px-3 py-2 text-xs font-medium shadow-soft",
								animate: { y: [
									0,
									-8,
									0
								] },
								transition: {
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-6 place-items-center rounded-lg bg-success/15 text-success",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" })
								}), "Confidence 98.4%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "absolute -right-4 -bottom-4 hidden md:flex items-center gap-2 rounded-2xl glass-strong px-3 py-2 text-xs font-medium shadow-soft",
								animate: { y: [
									0,
									8,
									0
								] },
								transition: {
									duration: 5.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: .3
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-6 place-items-center rounded-lg bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderTree, { className: "size-3.5" })
								}), "Routed → /Certificates"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "features",
				className: "mx-auto w-[min(1200px,94%)] py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-14 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-widest gradient-text",
							children: "Why CogniFlow?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl font-bold tracking-tight md:text-5xl",
							children: "Built for teams that ship intelligence."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground max-w-2xl mx-auto",
							children: "Every capability you need to turn unstructured documents into a searchable, governed knowledge fabric — without stitching seven vendors together."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: features.map((f, i) => {
						const Icon = f.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-60px"
							},
							transition: {
								duration: .5,
								delay: i * .04
							},
							whileHover: { y: -4 },
							className: "group relative overflow-hidden rounded-2xl glass-strong p-5 transition-shadow hover:shadow-elevated",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4 grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-1/15 to-brand-2/15 text-primary transition group-hover:from-brand-1 group-hover:to-brand-2 group-hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground leading-relaxed",
									children: f.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-gradient-to-br from-brand-1/20 to-brand-2/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" })
							]
						}, f.title);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "workflow",
				className: "mx-auto w-[min(1200px,94%)] py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-14 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest gradient-text",
						children: "How it works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl font-bold tracking-tight md:text-5xl",
						children: "A choreographed swarm of AI agents."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl glass-strong p-8 shadow-elevated",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2 overflow-x-auto pb-2",
						children: workflow.map((w, i) => {
							const Icon = w.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: { once: true },
									transition: { delay: i * .08 },
									className: "flex flex-col items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-1/10 to-brand-2/10 border border-primary/20 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-muted-foreground",
										children: w.label
									})]
								}), i < workflow.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { className: "size-4 text-muted-foreground/60 mb-6" })]
							}, w.label);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-3",
						children: [
							"Documents arrive via drag-drop, API, or email inbox.",
							"Agents extract, classify and validate in seconds.",
							"Routed to the right folder, indexed, and searchable."
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 rounded-xl border border-border/60 bg-background/50 p-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-primary shrink-0 mt-0.5" }),
								" ",
								t
							]
						}, t))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "stats",
				className: "mx-auto w-[min(1200px,94%)] py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-gradient-to-br from-navy to-[oklch(0.28_0.08_275)] p-10 md:p-14 text-navy-foreground relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-30 mesh-bg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid gap-8 md:grid-cols-4",
						children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-5xl md:text-6xl font-extrabold tracking-tight gradient-text",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.value,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/70",
							children: s.label
						})] }, s.label))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto w-[min(1200px,94%)] py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl glass-strong p-10 text-center shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 mesh-bg opacity-70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl md:text-5xl font-bold tracking-tight",
							children: "Ready to let your documents think?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-xl text-muted-foreground",
							children: "Deploy in minutes. Scale to millions of documents. Pay for what you process."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/signup",
								className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-glow",
								children: ["Start free trial ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold",
								children: "Sign in"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				id: "footer",
				className: "mx-auto w-[min(1200px,94%)] pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 border-t border-border/60 pt-8 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-8 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: "CogniFlow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-3 text-xs text-muted-foreground",
								children: "© 2026 · All rights reserved"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "hover:text-foreground inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4" }), " GitHub"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								children: "Documentation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								children: "Contact"
							})
						]
					})]
				})
			})
		]
	})] });
}
//#endregion
export { Landing as component };
