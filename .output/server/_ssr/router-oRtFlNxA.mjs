import { a as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as supabase } from "./client-D5Sc9xg5.mjs";
import { i as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { B as notFound, _ as createFileRoute, d as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo-data-DPRIGKyg.js
var demoDocs = [
	{
		id: "certificate-ada",
		name: "Certificate_Ada.pdf",
		cat: "Certificate",
		conf: 98.4,
		status: "routed",
		folder: "/Certificates/2025",
		date: "2m ago",
		size: "412 KB",
		pages: 1,
		uploadedBy: "Ada Lovelace",
		extracted: "CERTIFICATE OF COMPLETION\n\nThis certifies that Ada Lovelace has successfully completed the Advanced Machine Systems programme with distinction on 12 August 2025.\n\nIssued by: Analytical Engine Institute\nCertificate ID: AEI-2025-00412",
		validation: [
			{
				rule: "Required field: recipient name",
				passed: true
			},
			{
				rule: "Required field: issue date",
				passed: true
			},
			{
				rule: "Signature block detected",
				passed: true
			},
			{
				rule: "Template match ≥ 90%",
				passed: true
			}
		],
		timeline: [
			{
				agent: "Upload",
				detail: "File received · 412 KB",
				at: "12:04:01",
				state: "done"
			},
			{
				agent: "OCR Agent",
				detail: "Extracted 1 page · 148 tokens",
				at: "12:04:04",
				state: "done"
			},
			{
				agent: "Classification Agent",
				detail: "Certificate · 98.4% confidence",
				at: "12:04:06",
				state: "done"
			},
			{
				agent: "Validation Agent",
				detail: "Template passed · 4/4 rules",
				at: "12:04:08",
				state: "done"
			},
			{
				agent: "Routing Agent",
				detail: "Moved to /Certificates/2025",
				at: "12:04:09",
				state: "done"
			}
		]
	},
	{
		id: "report-q3-2025",
		name: "Report_Q3_2025.pdf",
		cat: "Report",
		conf: 96.1,
		status: "routed",
		folder: "/Reports",
		date: "24m ago",
		size: "1.8 MB",
		pages: 14,
		uploadedBy: "Grace Hopper",
		extracted: "QUARTERLY REPORT — Q3 2025\n\nSummary: processing throughput increased 24% quarter over quarter with an average routing latency of 28 seconds.\n\nSections: Overview, Throughput, Accuracy, Storage, Roadmap.",
		validation: [
			{
				rule: "Cover page present",
				passed: true
			},
			{
				rule: "Section headings detected",
				passed: true
			},
			{
				rule: "Fiscal period parsed",
				passed: true
			}
		],
		timeline: [
			{
				agent: "Upload",
				detail: "File received · 1.8 MB",
				at: "11:42:10",
				state: "done"
			},
			{
				agent: "OCR Agent",
				detail: "Extracted 14 pages",
				at: "11:42:22",
				state: "done"
			},
			{
				agent: "Classification Agent",
				detail: "Report · 96.1% confidence",
				at: "11:42:25",
				state: "done"
			},
			{
				agent: "Validation Agent",
				detail: "Template passed · 3/3 rules",
				at: "11:42:27",
				state: "done"
			},
			{
				agent: "Routing Agent",
				detail: "Moved to /Reports",
				at: "11:42:28",
				state: "done"
			}
		]
	},
	{
		id: "invoice-acme-1204",
		name: "Invoice_Acme_1204.pdf",
		cat: "Invoice",
		conf: 74.2,
		status: "review",
		folder: "—",
		date: "1h ago",
		size: "228 KB",
		pages: 2,
		uploadedBy: "Alan Turing",
		extracted: "INVOICE #1204\nAcme Industrial Supply\nDate: 2025-08-29\nSubtotal: 4,820.00\nTax: —\nTotal: 4,820.00\n\nNote: tax line could not be read with confidence.",
		validation: [
			{
				rule: "Invoice number present",
				passed: true
			},
			{
				rule: "Tax field readable",
				passed: false
			},
			{
				rule: "Totals reconcile",
				passed: false
			}
		],
		timeline: [
			{
				agent: "Upload",
				detail: "File received · 228 KB",
				at: "10:58:03",
				state: "done"
			},
			{
				agent: "OCR Agent",
				detail: "Extracted 2 pages · low contrast",
				at: "10:58:07",
				state: "done"
			},
			{
				agent: "Classification Agent",
				detail: "Invoice · 74.2% confidence",
				at: "10:58:09",
				state: "done"
			},
			{
				agent: "Validation Agent",
				detail: "2 rules failed · queued for review",
				at: "10:58:11",
				state: "failed"
			},
			{
				agent: "Routing Agent",
				detail: "Waiting on human review",
				at: "—",
				state: "active"
			}
		]
	},
	{
		id: "contract-nda-v3",
		name: "Contract_NDA_v3.docx",
		cat: "Contract",
		conf: 99.1,
		status: "routed",
		folder: "/Contracts",
		date: "3h ago",
		size: "96 KB",
		pages: 6,
		uploadedBy: "Ada Lovelace",
		extracted: "MUTUAL NON-DISCLOSURE AGREEMENT\n\nEffective date: 1 September 2025. Term: 24 months. Governing law: Delaware.\n\nParties: CogniFlow Inc. and Northwind Traders.",
		validation: [
			{
				rule: "Effective date present",
				passed: true
			},
			{
				rule: "Both parties named",
				passed: true
			},
			{
				rule: "Governing law clause",
				passed: true
			}
		],
		timeline: [
			{
				agent: "Upload",
				detail: "File received · 96 KB",
				at: "09:11:44",
				state: "done"
			},
			{
				agent: "OCR Agent",
				detail: "Native text layer used",
				at: "09:11:45",
				state: "done"
			},
			{
				agent: "Classification Agent",
				detail: "Contract · 99.1% confidence",
				at: "09:11:47",
				state: "done"
			},
			{
				agent: "Validation Agent",
				detail: "Template passed · 3/3 rules",
				at: "09:11:49",
				state: "done"
			},
			{
				agent: "Routing Agent",
				detail: "Moved to /Contracts",
				at: "09:11:50",
				state: "done"
			}
		]
	},
	{
		id: "transcript-s24",
		name: "Transcript_S24.jpg",
		cat: "Transcript",
		conf: 88.7,
		status: "processing",
		folder: "—",
		date: "just now",
		size: "3.1 MB",
		pages: 1,
		uploadedBy: "Grace Hopper",
		extracted: "ACADEMIC TRANSCRIPT — Semester 24\nExtraction in progress…",
		validation: [{
			rule: "Awaiting validation",
			passed: false
		}],
		timeline: [
			{
				agent: "Upload",
				detail: "File received · 3.1 MB",
				at: "now",
				state: "done"
			},
			{
				agent: "OCR Agent",
				detail: "Reading image · 62%",
				at: "now",
				state: "active"
			},
			{
				agent: "Classification Agent",
				detail: "Queued",
				at: "—",
				state: "active"
			},
			{
				agent: "Validation Agent",
				detail: "Queued",
				at: "—",
				state: "active"
			},
			{
				agent: "Routing Agent",
				detail: "Queued",
				at: "—",
				state: "active"
			}
		]
	},
	{
		id: "malformed-scan",
		name: "Malformed_Scan.pdf",
		cat: "Unknown",
		conf: 41.2,
		status: "rejected",
		folder: "—",
		date: "5h ago",
		size: "740 KB",
		pages: 3,
		uploadedBy: "Alan Turing",
		extracted: "…illegible scan — only 12% of characters recovered above threshold.",
		validation: [{
			rule: "Minimum OCR confidence",
			passed: false
		}, {
			rule: "Template match ≥ 90%",
			passed: false
		}],
		timeline: [
			{
				agent: "Upload",
				detail: "File received · 740 KB",
				at: "07:20:12",
				state: "done"
			},
			{
				agent: "OCR Agent",
				detail: "Low confidence extraction",
				at: "07:20:19",
				state: "failed"
			},
			{
				agent: "Classification Agent",
				detail: "Unknown · 41.2% confidence",
				at: "07:20:21",
				state: "failed"
			},
			{
				agent: "Validation Agent",
				detail: "Rejected · rescan required",
				at: "07:20:22",
				state: "failed"
			},
			{
				agent: "Routing Agent",
				detail: "Not routed",
				at: "—",
				state: "failed"
			}
		]
	},
	{
		id: "certificate-grace",
		name: "Certificate_Grace.pdf",
		cat: "Certificate",
		conf: 99.3,
		status: "routed",
		folder: "/Certificates/2025",
		date: "yesterday",
		size: "388 KB",
		pages: 1,
		uploadedBy: "Grace Hopper",
		extracted: "CERTIFICATE OF COMPLETION\n\nGrace Hopper — Compiler Systems, 2025.",
		validation: [{
			rule: "Required field: recipient name",
			passed: true
		}, {
			rule: "Template match ≥ 90%",
			passed: true
		}],
		timeline: [
			{
				agent: "Upload",
				detail: "File received · 388 KB",
				at: "yesterday",
				state: "done"
			},
			{
				agent: "OCR Agent",
				detail: "Extracted 1 page",
				at: "yesterday",
				state: "done"
			},
			{
				agent: "Classification Agent",
				detail: "Certificate · 99.3%",
				at: "yesterday",
				state: "done"
			},
			{
				agent: "Validation Agent",
				detail: "Template passed",
				at: "yesterday",
				state: "done"
			},
			{
				agent: "Routing Agent",
				detail: "Moved to /Certificates/2025",
				at: "yesterday",
				state: "done"
			}
		]
	},
	{
		id: "budget-2026",
		name: "Budget_2026.xlsx",
		cat: "Report",
		conf: 92.8,
		status: "routed",
		folder: "/Reports",
		date: "yesterday",
		size: "212 KB",
		pages: 8,
		uploadedBy: "Ada Lovelace",
		extracted: "BUDGET PLAN 2026\nTotal allocation: 2,480,000. Departments: 9.",
		validation: [{
			rule: "Fiscal period parsed",
			passed: true
		}, {
			rule: "Totals reconcile",
			passed: true
		}],
		timeline: [
			{
				agent: "Upload",
				detail: "File received · 212 KB",
				at: "yesterday",
				state: "done"
			},
			{
				agent: "OCR Agent",
				detail: "Sheet text parsed",
				at: "yesterday",
				state: "done"
			},
			{
				agent: "Classification Agent",
				detail: "Report · 92.8%",
				at: "yesterday",
				state: "done"
			},
			{
				agent: "Validation Agent",
				detail: "Template passed",
				at: "yesterday",
				state: "done"
			},
			{
				agent: "Routing Agent",
				detail: "Moved to /Reports",
				at: "yesterday",
				state: "done"
			}
		]
	}
];
var getDoc = (id) => demoDocs.find((d) => d.id === id);
var statusMeta = {
	routed: {
		label: "Routed",
		cls: "bg-success/15 text-success"
	},
	review: {
		label: "Needs review",
		cls: "bg-warning/15 text-warning"
	},
	processing: {
		label: "Processing",
		cls: "bg-primary/10 text-primary"
	},
	rejected: {
		label: "Rejected",
		cls: "bg-destructive/10 text-destructive"
	}
};
/** Very small rule-based assistant over the demo dataset. */
function assistantReply(question) {
	const q = question.toLowerCase();
	const matched = demoDocs.find((d) => q.includes(d.name.toLowerCase().split(".")[0].toLowerCase()));
	if (q.includes("where") || q.includes("located") || q.includes("routed to")) {
		const d = matched ?? demoDocs[0];
		return d.folder === "—" ? `**${d.name}** hasn't been routed yet — it is currently *${statusMeta[d.status].label.toLowerCase()}*. The Routing Agent will assign a folder once validation passes.` : `**${d.name}** was routed to \`${d.folder}\` by the Routing Agent ${d.date}.`;
	}
	if (q.includes("reject")) {
		const d = demoDocs.find((x) => x.status === "rejected");
		const failed = d.validation.filter((v) => !v.passed).map((v) => v.rule);
		return `**${d.name}** was rejected because the following checks failed:\n\n${failed.map((f) => `- ${f}`).join("\n")}\n\nRescanning at 300 DPI usually fixes this.`;
	}
	if (q.includes("confidence") || q.includes("accuracy")) {
		const d = matched ?? demoDocs[0];
		return `The Classification Agent scored **${d.name}** at **${d.conf}%** confidence for category *${d.cat}*. Anything under 80% is sent to the Validation Center for human review.`;
	}
	if (q.includes("folder")) return `Current routing map:\n\n${demoDocs.filter((d) => d.folder !== "—").map((d) => `- ${d.name} → \`${d.folder}\``).join("\n")}`;
	if (q.includes("history") || q.includes("timeline") || q.includes("log")) {
		const d = matched ?? demoDocs[0];
		return `Processing history for **${d.name}**:\n\n${d.timeline.map((t) => `- ${t.at} · ${t.agent} — ${t.detail}`).join("\n")}`;
	}
	if (q.includes("pending") || q.includes("review")) {
		const list = demoDocs.filter((d) => d.status === "review" || d.status === "processing");
		return `${list.length} documents need attention right now:\n\n${list.map((d) => `- ${d.name} (${statusMeta[d.status].label})`).join("\n")}`;
	}
	return "I can help with document locations, folder assignments, confidence scores, rejection reasons and processing history. Try asking *\"Where is Certificate_Ada.pdf?\"* or *\"Why was this rejected?\"*";
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-oRtFlNxA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEMO_SESSION_KEY = "cogniflow_demo_session";
var createDemoSession = (email = "demo@cogniflow.ai", name = "Demo User") => {
	const parts = name.trim().split(" ");
	return {
		access_token: "demo-access-token",
		token_type: "bearer",
		expires_in: 3600,
		refresh_token: "demo-refresh-token",
		user: {
			id: "demo-user-id",
			app_metadata: { provider: "email" },
			user_metadata: {
				full_name: name,
				first_name: parts[0] || "Demo",
				last_name: parts.slice(1).join(" ") || ""
			},
			aud: "authenticated",
			created_at: (/* @__PURE__ */ new Date()).toISOString(),
			email,
			role: "authenticated",
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}
	};
};
var AuthContext = (0, import_react.createContext)({
	session: null,
	user: null,
	loading: true,
	signOut: async () => {},
	signInAsDemo: () => {}
});
function AuthProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const savedDemo = localStorage.getItem(DEMO_SESSION_KEY);
		if (savedDemo) try {
			setSession(JSON.parse(savedDemo));
			setLoading(false);
			return;
		} catch (e) {
			localStorage.removeItem(DEMO_SESSION_KEY);
		}
		const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
			if (!localStorage.getItem(DEMO_SESSION_KEY)) {
				setSession(next);
				setLoading(false);
			}
		});
		supabase.auth.getSession().then(({ data }) => {
			if (!localStorage.getItem(DEMO_SESSION_KEY)) {
				setSession(data.session);
				setLoading(false);
			}
		}).catch(() => {
			setLoading(false);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	const signInAsDemo = (email = "demo@cogniflow.ai", name = "Demo User") => {
		const demo = createDemoSession(email, name);
		localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(demo));
		setSession(demo);
	};
	const value = (0, import_react.useMemo)(() => ({
		session,
		user: session?.user ?? null,
		loading,
		signOut: async () => {
			localStorage.removeItem(DEMO_SESSION_KEY);
			setSession(null);
			try {
				await supabase.auth.signOut();
			} catch (e) {}
		},
		signInAsDemo
	}), [session, loading]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value,
		children
	});
}
var useAuth = () => (0, import_react.useContext)(AuthContext);
function displayName(user) {
	if (!user) return "Guest";
	const meta = user.user_metadata;
	return meta?.full_name || [meta?.first_name, meta?.last_name].filter(Boolean).join(" ") || user.email?.split("@")[0] || "Member";
}
function initials(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
}
var styles_default = "/assets/styles-BpbzNnpf.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var ThemeProviderContext = (0, import_react.createContext)({
	theme: "system",
	resolvedTheme: "light",
	setTheme: () => null,
	toggleTheme: () => null
});
function ThemeProvider({ children, defaultTheme = "system", storageKey = "cogniflow-theme" }) {
	const [theme, setThemeState] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem(storageKey);
			if (stored && [
				"dark",
				"light",
				"system"
			].includes(stored)) return stored;
		}
		return defaultTheme;
	});
	const [resolvedTheme, setResolvedTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		const applyTheme = () => {
			let activeTheme = "light";
			if (theme === "system") activeTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
			else activeTheme = theme;
			setResolvedTheme(activeTheme);
			if (activeTheme === "dark") root.classList.add("dark");
			else root.classList.remove("dark");
		};
		applyTheme();
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleSystemChange = () => {
			if (theme === "system") applyTheme();
		};
		mediaQuery.addEventListener("change", handleSystemChange);
		return () => mediaQuery.removeEventListener("change", handleSystemChange);
	}, [theme]);
	const setTheme = (newTheme) => {
		localStorage.setItem(storageKey, newTheme);
		setThemeState(newTheme);
	};
	const toggleTheme = () => {
		if (resolvedTheme === "dark") setTheme("light");
		else setTheme("dark");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProviderContext.Provider, {
		value: {
			theme,
			resolvedTheme,
			setTheme,
			toggleTheme
		},
		children
	});
}
var useTheme = () => {
	const context = (0, import_react.useContext)(ThemeProviderContext);
	if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$18 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CogniFlow — AI Multi-Agent Document Intelligence" },
			{
				name: "description",
				content: "CogniFlow is an AI-powered multi-agent platform that extracts, classifies, validates, and routes documents automatically — with enterprise-grade accuracy."
			},
			{
				name: "author",
				content: "CogniFlow"
			},
			{
				property: "og:title",
				content: "CogniFlow — AI Multi-Agent Document Intelligence"
			},
			{
				property: "og:description",
				content: "Automate document intelligence with a swarm of AI agents."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('cogniflow-theme');
                  var isDark = stored === 'dark' || ((!stored || stored === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            ` } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] }) })
	});
}
var $$splitComponentImporter$17 = () => import("./routes-B_tvhmC2.mjs");
var Route$17 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "CogniFlow — Automate Document Intelligence with AI" },
		{
			name: "description",
			content: "Multi-agent AI that extracts, classifies, validates and routes documents automatically."
		},
		{
			property: "og:title",
			content: "CogniFlow — Automate Document Intelligence with AI"
		},
		{
			property: "og:description",
			content: "Multi-agent AI that extracts, classifies, validates and routes documents automatically."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./dashboard-Ce7WoAOB.mjs");
var Route$16 = createFileRoute("/dashboard")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Dashboard · CogniFlow" },
		{
			name: "description",
			content: "Your AI document intelligence workspace."
		},
		{
			property: "og:title",
			content: "Dashboard · CogniFlow"
		},
		{
			property: "og:description",
			content: "Your AI document intelligence workspace."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./forgot-password-LNtrMLlF.mjs");
var Route$15 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [
		{ title: "Reset password · CogniFlow" },
		{
			name: "description",
			content: "Send a recovery link to your inbox."
		},
		{
			property: "og:title",
			content: "Reset password · CogniFlow"
		},
		{
			property: "og:description",
			content: "Send a recovery link to your inbox."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./login-BPrc6VE1.mjs");
var Route$14 = createFileRoute("/login")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Sign in · CogniFlow" },
		{
			name: "description",
			content: "Sign in to your CogniFlow workspace."
		},
		{
			property: "og:title",
			content: "Sign in · CogniFlow"
		},
		{
			property: "og:description",
			content: "Sign in to your CogniFlow workspace."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./reset-password-C2GXr_TO.mjs");
var Route$13 = createFileRoute("/reset-password")({
	head: () => ({ meta: [
		{ title: "Set new password · CogniFlow" },
		{
			name: "description",
			content: "Choose a new password for your workspace."
		},
		{
			property: "og:title",
			content: "Set new password · CogniFlow"
		},
		{
			property: "og:description",
			content: "Choose a new password for your workspace."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./signup-Dd1FofGK.mjs");
var Route$12 = createFileRoute("/signup")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Create account · CogniFlow" },
		{
			name: "description",
			content: "Start your CogniFlow workspace in seconds."
		},
		{
			property: "og:title",
			content: "Create account · CogniFlow"
		},
		{
			property: "og:description",
			content: "Start your CogniFlow workspace in seconds."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./verify-otp-DjDIUKAC.mjs");
var Route$11 = createFileRoute("/verify-otp")({
	head: () => ({ meta: [
		{ title: "Verify code · CogniFlow" },
		{
			name: "description",
			content: "Enter your 6-digit verification code."
		},
		{
			property: "og:title",
			content: "Verify code · CogniFlow"
		},
		{
			property: "og:description",
			content: "Enter your 6-digit verification code."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./dashboard.index-CYqwQ1Nr.mjs");
var Route$10 = createFileRoute("/dashboard/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./dashboard.ai-processing-B31YMi0_.mjs");
var Route$9 = createFileRoute("/dashboard/ai-processing")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./dashboard.documents-DgPhma6i.mjs");
var Route$8 = createFileRoute("/dashboard/documents")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./dashboard.folders-D4Y1YUAg.mjs");
var Route$7 = createFileRoute("/dashboard/folders")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./dashboard.notifications-DGCCaYU-.mjs");
var Route$6 = createFileRoute("/dashboard/notifications")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./dashboard.profile-BDsY8b6F.mjs");
var Route$5 = createFileRoute("/dashboard/profile")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./dashboard.reports-B_V1NLZ_.mjs");
var Route$4 = createFileRoute("/dashboard/reports")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./dashboard.settings-BuiC2KjI.mjs");
var Route$3 = createFileRoute("/dashboard/settings")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./dashboard.upload-XnLC2Dmv.mjs");
var Route$2 = createFileRoute("/dashboard/upload")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./dashboard.validation-DXdlS_OJ.mjs");
var Route$1 = createFileRoute("/dashboard/validation")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./dashboard.document._docId-BoUQax81.mjs");
var $$splitNotFoundComponentImporter = () => import("./dashboard.document._docId-DNPHSjf0.mjs");
var Route = createFileRoute("/dashboard/document/$docId")({
	loader: ({ params }) => {
		const doc = getDoc(params.docId);
		if (!doc) throw notFound();
		return { doc };
	},
	head: ({ loaderData }) => {
		const title = loaderData ? `${loaderData.doc.name} · CogniFlow` : "Document unavailable · CogniFlow";
		const description = "Extracted text, classification confidence, validation report and agent timeline.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			...loaderData ? [] : [{
				name: "robots",
				content: "noindex"
			}]
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var DashboardRoute = Route$16.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$18
});
var ForgotPasswordRoute = Route$15.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$18
});
var LoginRoute = Route$14.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$18
});
var ResetPasswordRoute = Route$13.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$18
});
var SignupRoute = Route$12.update({
	id: "/signup",
	path: "/signup",
	getParentRoute: () => Route$18
});
var VerifyOtpRoute = Route$11.update({
	id: "/verify-otp",
	path: "/verify-otp",
	getParentRoute: () => Route$18
});
var DashboardIndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => DashboardRoute
});
var DashboardRouteChildren = {
	DashboardAiProcessingRoute: Route$9.update({
		id: "/ai-processing",
		path: "/ai-processing",
		getParentRoute: () => DashboardRoute
	}),
	DashboardDocumentsRoute: Route$8.update({
		id: "/documents",
		path: "/documents",
		getParentRoute: () => DashboardRoute
	}),
	DashboardFoldersRoute: Route$7.update({
		id: "/folders",
		path: "/folders",
		getParentRoute: () => DashboardRoute
	}),
	DashboardNotificationsRoute: Route$6.update({
		id: "/notifications",
		path: "/notifications",
		getParentRoute: () => DashboardRoute
	}),
	DashboardProfileRoute: Route$5.update({
		id: "/profile",
		path: "/profile",
		getParentRoute: () => DashboardRoute
	}),
	DashboardReportsRoute: Route$4.update({
		id: "/reports",
		path: "/reports",
		getParentRoute: () => DashboardRoute
	}),
	DashboardSettingsRoute: Route$3.update({
		id: "/settings",
		path: "/settings",
		getParentRoute: () => DashboardRoute
	}),
	DashboardUploadRoute: Route$2.update({
		id: "/upload",
		path: "/upload",
		getParentRoute: () => DashboardRoute
	}),
	DashboardValidationRoute: Route$1.update({
		id: "/validation",
		path: "/validation",
		getParentRoute: () => DashboardRoute
	}),
	DashboardIndexRoute,
	DashboardDocumentDocIdRoute: Route.update({
		id: "/document/$docId",
		path: "/document/$docId",
		getParentRoute: () => DashboardRoute
	})
};
var rootRouteChildren = {
	IndexRoute,
	DashboardRoute: DashboardRoute._addFileChildren(DashboardRouteChildren),
	ForgotPasswordRoute,
	LoginRoute,
	ResetPasswordRoute,
	SignupRoute,
	VerifyOtpRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { initials as a, demoDocs as c, displayName as i, statusMeta as l, Route as n, useAuth as o, useTheme as r, assistantReply as s, router_exports as t };
