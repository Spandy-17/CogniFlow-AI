import { a as __toESM } from "../_runtime.mjs";
import { i as useMotionValue, n as animate, r as useTransform, t as useInView } from "../_libs/framer-motion.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useAuth } from "./router-XVNWBbpq.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { B as Github, C as Play, D as MoveRight, H as FolderTree, L as Layers, R as KeyRound, St as ArrowRight, ct as CircleCheck, et as Database, ft as ChevronRight, h as ShieldCheck, p as Sparkles, q as FileText, t as Zap, tt as Cpu, y as ScanText } from "../_libs/lucide-react.mjs";
import { t as ThemeToggle } from "./ThemeToggle-CS9mnsYi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-KonrvGkM.js
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
		"data-tsd-source": "/src/routes/index.tsx:31:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			"data-tsd-source": "/src/routes/index.tsx:32:7",
			children: rounded
		}), suffix]
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
		"data-tsd-source": "/src/routes/index.tsx:53:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between text-xs text-muted-foreground mb-4",
			"data-tsd-source": "/src/routes/index.tsx:54:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				"data-tsd-source": "/src/routes/index.tsx:55:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-2 rounded-full bg-success animate-pulse",
					"data-tsd-source": "/src/routes/index.tsx:56:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"data-tsd-source": "/src/routes/index.tsx:57:11",
					children: "Live pipeline · agent swarm"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums",
				"data-tsd-source": "/src/routes/index.tsx:59:9",
				children: "avg 28s"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-2.5",
			"data-tsd-source": "/src/routes/index.tsx:61:7",
			children: agents.map((a, i) => {
				const Icon = a.icon;
				const isActive = i === active;
				const isDone = i < active;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `relative flex items-center gap-3 rounded-2xl border px-3.5 py-3 transition-colors ${isActive ? "border-primary/40 bg-primary/5" : "border-border/60 bg-background/40"}`,
					"data-tsd-source": "/src/routes/index.tsx:67:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid size-9 shrink-0 place-items-center rounded-xl transition-all ${isActive ? "bg-gradient-to-br from-brand-1 to-brand-2 text-white animate-pulse-ring" : isDone ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`,
						"data-tsd-source": "/src/routes/index.tsx:73:15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-4",
							"data-tsd-source": "/src/routes/index.tsx:82:17"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						"data-tsd-source": "/src/routes/index.tsx:84:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								"data-tsd-source": "/src/routes/index.tsx:85:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									"data-tsd-source": "/src/routes/index.tsx:86:19",
									children: a.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[10px] font-medium uppercase tracking-wider ${isActive ? "text-primary" : isDone ? "text-success" : "text-muted-foreground"}`,
									"data-tsd-source": "/src/routes/index.tsx:87:19",
									children: isActive ? "Processing" : isDone ? "Complete" : "Queued"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								"data-tsd-source": "/src/routes/index.tsx:93:17",
								children: a.detail
							}),
							isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 h-1 w-full overflow-hidden rounded-full bg-primary/10",
								"data-tsd-source": "/src/routes/index.tsx:95:19",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "h-full w-1/2 rounded-full bg-gradient-to-r from-brand-1 to-brand-2",
									initial: { x: "-100%" },
									animate: { x: "220%" },
									transition: {
										duration: 1.2,
										ease: "easeInOut"
									},
									"data-tsd-source": "/src/routes/index.tsx:96:21"
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
		"data-tsd-source": "/src/routes/index.tsx:119:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-2",
				"data-tsd-source": "/src/routes/index.tsx:120:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-8 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-glow",
					"data-tsd-source": "/src/routes/index.tsx:121:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
						className: "size-4",
						"data-tsd-source": "/src/routes/index.tsx:122:11"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[15px] font-bold tracking-tight",
					"data-tsd-source": "/src/routes/index.tsx:124:9",
					children: "CogniFlow"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden items-center gap-7 text-sm text-muted-foreground md:flex",
				"data-tsd-source": "/src/routes/index.tsx:126:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#features",
						className: "hover:text-foreground transition",
						"data-tsd-source": "/src/routes/index.tsx:127:9",
						children: "Features"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#workflow",
						className: "hover:text-foreground transition",
						"data-tsd-source": "/src/routes/index.tsx:128:9",
						children: "How it works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#stats",
						className: "hover:text-foreground transition",
						"data-tsd-source": "/src/routes/index.tsx:129:9",
						children: "Metrics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#footer",
						className: "hover:text-foreground transition",
						"data-tsd-source": "/src/routes/index.tsx:130:9",
						children: "Docs"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				"data-tsd-source": "/src/routes/index.tsx:132:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, { "data-tsd-source": "/src/routes/index.tsx:133:9" }), session ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard",
					className: "inline-flex items-center gap-1.5 rounded-xl bg-foreground px-3.5 py-1.5 text-sm font-semibold text-background transition hover:opacity-90",
					"data-tsd-source": "/src/routes/index.tsx:135:11",
					children: ["Open dashboard ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-3.5",
						"data-tsd-source": "/src/routes/index.tsx:139:28"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "hidden sm:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5",
					"data-tsd-source": "/src/routes/index.tsx:143:13",
					children: "Sign in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/signup",
					className: "inline-flex items-center gap-1.5 rounded-xl bg-foreground px-3.5 py-1.5 text-sm font-semibold text-background transition hover:opacity-90",
					"data-tsd-source": "/src/routes/index.tsx:146:13",
					children: ["Get started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-3.5",
						"data-tsd-source": "/src/routes/index.tsx:150:27"
					})]
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
		"data-tsd-source": "/src/routes/index.tsx:190:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-navy/70 backdrop-blur-sm",
			onClick: onClose,
			"data-tsd-source": "/src/routes/index.tsx:191:7"
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
			"data-tsd-source": "/src/routes/index.tsx:192:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					"data-tsd-source": "/src/routes/index.tsx:197:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-tsd-source": "/src/routes/index.tsx:198:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-bold tracking-tight",
							"data-tsd-source": "/src/routes/index.tsx:199:13",
							children: "CogniFlow product demo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							"data-tsd-source": "/src/routes/index.tsx:200:13",
							children: "Watch the agent swarm ingest, extract, classify, validate and route a document — live."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-xl border border-border px-2.5 py-1 text-xs font-semibold text-muted-foreground transition hover:bg-secondary hover:text-foreground",
						"data-tsd-source": "/src/routes/index.tsx:204:11",
						children: "Close"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					"data-tsd-source": "/src/routes/index.tsx:211:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentPipeline, { "data-tsd-source": "/src/routes/index.tsx:212:11" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-3",
					"data-tsd-source": "/src/routes/index.tsx:214:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/signup",
						className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110",
						"data-tsd-source": "/src/routes/index.tsx:215:11",
						children: ["Create your account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"data-tsd-source": "/src/routes/index.tsx:219:33"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition hover:bg-secondary",
						"data-tsd-source": "/src/routes/index.tsx:221:11",
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
		onClose: () => setDemoOpen(false),
		"data-tsd-source": "/src/routes/index.tsx:237:5"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		"data-tsd-source": "/src/routes/index.tsx:238:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none fixed inset-0 -z-10",
				"data-tsd-source": "/src/routes/index.tsx:239:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 mesh-bg",
					"data-tsd-source": "/src/routes/index.tsx:240:9"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid-bg opacity-70",
					"data-tsd-source": "/src/routes/index.tsx:241:9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pt-4",
				"data-tsd-source": "/src/routes/index.tsx:244:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { "data-tsd-source": "/src/routes/index.tsx:245:9" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative mx-auto mt-16 w-[min(1200px,94%)] pb-24",
				"data-tsd-source": "/src/routes/index.tsx:248:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]",
					"data-tsd-source": "/src/routes/index.tsx:249:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-tsd-source": "/src/routes/index.tsx:250:11",
						children: [
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
								"data-tsd-source": "/src/routes/index.tsx:251:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-4 place-items-center rounded-full bg-gradient-to-br from-brand-1 to-brand-2 text-white",
									"data-tsd-source": "/src/routes/index.tsx:257:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
										className: "size-2.5",
										"data-tsd-source": "/src/routes/index.tsx:258:17"
									})
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
								"data-tsd-source": "/src/routes/index.tsx:262:13",
								children: [
									"Automate Document",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { "data-tsd-source": "/src/routes/index.tsx:268:32" }),
									"Intelligence with ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gradient-text animate-gradient",
										"data-tsd-source": "/src/routes/index.tsx:269:33",
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
								"data-tsd-source": "/src/routes/index.tsx:271:13",
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
								"data-tsd-source": "/src/routes/index.tsx:280:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/signup",
									className: "group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110",
									"data-tsd-source": "/src/routes/index.tsx:286:15",
									children: ["Get started free", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4 transition-transform group-hover:translate-x-0.5",
										"data-tsd-source": "/src/routes/index.tsx:291:17"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setDemoOpen(true),
									className: "inline-flex items-center gap-2 rounded-xl glass-strong glass-hover px-5 py-3 text-sm font-semibold text-foreground transition",
									"data-tsd-source": "/src/routes/index.tsx:293:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										className: "size-4 fill-current",
										"data-tsd-source": "/src/routes/index.tsx:297:17"
									}), "Watch demo"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground",
								"data-tsd-source": "/src/routes/index.tsx:301:13",
								children: [
									"SOC2 ready",
									"GDPR compliant",
									"Self-hostable",
									"SSO / SAML"
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									"data-tsd-source": "/src/routes/index.tsx:303:17",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											className: "size-3.5 text-success",
											"data-tsd-source": "/src/routes/index.tsx:304:19"
										}),
										" ",
										x
									]
								}, x))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						"data-tsd-source": "/src/routes/index.tsx:310:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-1/20 via-brand-2/15 to-transparent blur-2xl",
								"data-tsd-source": "/src/routes/index.tsx:316:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentPipeline, { "data-tsd-source": "/src/routes/index.tsx:317:13" }),
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
								"data-tsd-source": "/src/routes/index.tsx:318:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-6 place-items-center rounded-lg bg-success/15 text-success",
									"data-tsd-source": "/src/routes/index.tsx:323:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "size-3.5",
										"data-tsd-source": "/src/routes/index.tsx:324:17"
									})
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
								"data-tsd-source": "/src/routes/index.tsx:328:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-6 place-items-center rounded-lg bg-primary/15 text-primary",
									"data-tsd-source": "/src/routes/index.tsx:333:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderTree, {
										className: "size-3.5",
										"data-tsd-source": "/src/routes/index.tsx:334:17"
									})
								}), "Routed → /Certificates"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "features",
				className: "mx-auto w-[min(1200px,94%)] py-24",
				"data-tsd-source": "/src/routes/index.tsx:342:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-14 text-center",
					"data-tsd-source": "/src/routes/index.tsx:343:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-widest gradient-text",
							"data-tsd-source": "/src/routes/index.tsx:344:11",
							children: "Why CogniFlow?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl font-bold tracking-tight md:text-5xl",
							"data-tsd-source": "/src/routes/index.tsx:345:11",
							children: "Built for teams that ship intelligence."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground max-w-2xl mx-auto",
							"data-tsd-source": "/src/routes/index.tsx:348:11",
							children: "Every capability you need to turn unstructured documents into a searchable, governed knowledge fabric — without stitching seven vendors together."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					"data-tsd-source": "/src/routes/index.tsx:353:9",
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
							"data-tsd-source": "/src/routes/index.tsx:357:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4 grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-1/15 to-brand-2/15 text-primary transition group-hover:from-brand-1 group-hover:to-brand-2 group-hover:text-white",
									"data-tsd-source": "/src/routes/index.tsx:366:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										"data-tsd-source": "/src/routes/index.tsx:367:19"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold",
									"data-tsd-source": "/src/routes/index.tsx:369:17",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground leading-relaxed",
									"data-tsd-source": "/src/routes/index.tsx:370:17",
									children: f.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-gradient-to-br from-brand-1/20 to-brand-2/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100",
									"data-tsd-source": "/src/routes/index.tsx:371:17"
								})
							]
						}, f.title);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "workflow",
				className: "mx-auto w-[min(1200px,94%)] py-24",
				"data-tsd-source": "/src/routes/index.tsx:378:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-14 text-center",
					"data-tsd-source": "/src/routes/index.tsx:379:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest gradient-text",
						"data-tsd-source": "/src/routes/index.tsx:380:11",
						children: "How it works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl font-bold tracking-tight md:text-5xl",
						"data-tsd-source": "/src/routes/index.tsx:381:11",
						children: "A choreographed swarm of AI agents."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl glass-strong p-8 shadow-elevated",
					"data-tsd-source": "/src/routes/index.tsx:385:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2 overflow-x-auto pb-2",
						"data-tsd-source": "/src/routes/index.tsx:386:11",
						children: workflow.map((w, i) => {
							const Icon = w.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 shrink-0",
								"data-tsd-source": "/src/routes/index.tsx:390:17",
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
									"data-tsd-source": "/src/routes/index.tsx:391:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-1/10 to-brand-2/10 border border-primary/20 text-primary",
										"data-tsd-source": "/src/routes/index.tsx:398:21",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-6",
											"data-tsd-source": "/src/routes/index.tsx:399:23"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-muted-foreground",
										"data-tsd-source": "/src/routes/index.tsx:401:21",
										children: w.label
									})]
								}), i < workflow.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, {
									className: "size-4 text-muted-foreground/60 mb-6",
									"data-tsd-source": "/src/routes/index.tsx:404:21"
								})]
							}, w.label);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-3",
						"data-tsd-source": "/src/routes/index.tsx:410:11",
						children: [
							"Documents arrive via drag-drop, API, or email inbox.",
							"Agents extract, classify and validate in seconds.",
							"Routed to the right folder, indexed, and searchable."
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 rounded-xl border border-border/60 bg-background/50 p-3 text-sm text-muted-foreground",
							"data-tsd-source": "/src/routes/index.tsx:416:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "size-4 text-primary shrink-0 mt-0.5",
									"data-tsd-source": "/src/routes/index.tsx:417:17"
								}),
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
				"data-tsd-source": "/src/routes/index.tsx:424:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-gradient-to-br from-navy to-[oklch(0.28_0.08_275)] p-10 md:p-14 text-navy-foreground relative overflow-hidden",
					"data-tsd-source": "/src/routes/index.tsx:425:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-30 mesh-bg",
						"data-tsd-source": "/src/routes/index.tsx:426:11"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid gap-8 md:grid-cols-4",
						"data-tsd-source": "/src/routes/index.tsx:427:11",
						children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/index.tsx:429:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-5xl md:text-6xl font-extrabold tracking-tight gradient-text",
								"data-tsd-source": "/src/routes/index.tsx:430:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: s.value,
									suffix: s.suffix,
									"data-tsd-source": "/src/routes/index.tsx:431:19"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/70",
								"data-tsd-source": "/src/routes/index.tsx:433:17",
								children: s.label
							})]
						}, s.label))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto w-[min(1200px,94%)] py-24",
				"data-tsd-source": "/src/routes/index.tsx:440:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl glass-strong p-10 text-center shadow-elevated",
					"data-tsd-source": "/src/routes/index.tsx:441:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 -z-10 mesh-bg opacity-70",
							"data-tsd-source": "/src/routes/index.tsx:442:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl md:text-5xl font-bold tracking-tight",
							"data-tsd-source": "/src/routes/index.tsx:443:11",
							children: "Ready to let your documents think?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-xl text-muted-foreground",
							"data-tsd-source": "/src/routes/index.tsx:444:11",
							children: "Deploy in minutes. Scale to millions of documents. Pay for what you process."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-center gap-3",
							"data-tsd-source": "/src/routes/index.tsx:447:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/signup",
								className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-glow",
								"data-tsd-source": "/src/routes/index.tsx:448:13",
								children: ["Start free trial ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									"data-tsd-source": "/src/routes/index.tsx:449:32"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold",
								"data-tsd-source": "/src/routes/index.tsx:451:13",
								children: "Sign in"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				id: "footer",
				className: "mx-auto w-[min(1200px,94%)] pb-10",
				"data-tsd-source": "/src/routes/index.tsx:458:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 border-t border-border/60 pt-8 md:flex-row md:items-center md:justify-between",
					"data-tsd-source": "/src/routes/index.tsx:459:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						"data-tsd-source": "/src/routes/index.tsx:460:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-8 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white",
								"data-tsd-source": "/src/routes/index.tsx:461:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
									className: "size-4",
									"data-tsd-source": "/src/routes/index.tsx:462:15"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								"data-tsd-source": "/src/routes/index.tsx:464:13",
								children: "CogniFlow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-3 text-xs text-muted-foreground",
								"data-tsd-source": "/src/routes/index.tsx:465:13",
								children: "© 2026 · All rights reserved"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 text-sm text-muted-foreground",
						"data-tsd-source": "/src/routes/index.tsx:467:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "hover:text-foreground inline-flex items-center gap-1.5",
								"data-tsd-source": "/src/routes/index.tsx:468:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
									className: "size-4",
									"data-tsd-source": "/src/routes/index.tsx:468:92"
								}), " GitHub"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								"data-tsd-source": "/src/routes/index.tsx:469:13",
								children: "Documentation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								"data-tsd-source": "/src/routes/index.tsx:470:13",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								"data-tsd-source": "/src/routes/index.tsx:471:13",
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
