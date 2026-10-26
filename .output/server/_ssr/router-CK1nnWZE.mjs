import { a as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as supabase } from "./client-qPf06kmW.mjs";
import { a as fetchDocumentById } from "./document-service-drZtwzY8.mjs";
import { i as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { B as notFound, _ as createFileRoute, d as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CK1nnWZE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AuthContext = (0, import_react.createContext)({
	session: null,
	user: null,
	loading: true,
	signOut: async () => {}
});
function AuthProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const hasOAuthParams = typeof window !== "undefined" && !window.location.search.includes("error=") && !window.location.hash.includes("error=") && (window.location.search.includes("code=") || window.location.hash.includes("access_token="));
		const { data: sub } = supabase.auth.onAuthStateChange((event, next) => {
			setSession(next);
			if (event === "INITIAL_SESSION" && !next && hasOAuthParams) return;
			setLoading(false);
		});
		supabase.auth.getSession().then(({ data }) => {
			if (data?.session) {
				setSession(data.session);
				setLoading(false);
			} else if (!hasOAuthParams) setLoading(false);
		}).catch(() => {
			setLoading(false);
		});
		let timer;
		if (hasOAuthParams) timer = setTimeout(() => {
			setLoading(false);
		}, 4e3);
		return () => {
			sub.subscription.unsubscribe();
			if (timer) clearTimeout(timer);
		};
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		session,
		user: session?.user ?? null,
		loading,
		signOut: async () => {
			await supabase.auth.signOut();
			setSession(null);
		}
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
var styles_default = "/assets/styles-BVdwHESc.css";
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
var $$splitComponentImporter$17 = () => import("./routes-AiVmuTIk.mjs");
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
var $$splitComponentImporter$16 = () => import("./dashboard-Cbid2vjO.mjs");
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
var $$splitComponentImporter$15 = () => import("./forgot-password-De-Qu0nM.mjs");
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
var $$splitComponentImporter$14 = () => import("./login-CrH3dZHG.mjs");
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
var $$splitComponentImporter$13 = () => import("./reset-password-Dr0jcp7y.mjs");
var Route$13 = createFileRoute("/reset-password")({
	ssr: false,
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
var $$splitComponentImporter$12 = () => import("./signup-CwoXGz5N.mjs");
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
var $$splitComponentImporter$10 = () => import("./dashboard.index-CFrrRuFZ.mjs");
var Route$10 = createFileRoute("/dashboard/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./dashboard.ai-processing-CeVh5KZe.mjs");
var Route$9 = createFileRoute("/dashboard/ai-processing")({
	head: () => ({ meta: [{ title: "AI Processing Center · CogniFlow" }, {
		name: "description",
		content: "Choose saved uploads and explicitly run them through backend AI agents."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./dashboard.documents-C8Vx1tVX.mjs");
var Route$8 = createFileRoute("/dashboard/documents")({
	head: () => ({ meta: [{ title: "My Documents · CogniFlow" }, {
		name: "description",
		content: "All documents processed and organized into PostgreSQL database folders."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./dashboard.folders-Du6FQrn6.mjs");
var Route$7 = createFileRoute("/dashboard/folders")({
	head: () => ({ meta: [{ title: "Folders · CogniFlow" }, {
		name: "description",
		content: "Folders grouped from your saved documents."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./dashboard.notifications-BB9dqdPG.mjs");
var Route$6 = createFileRoute("/dashboard/notifications")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./dashboard.profile-CluF5BPq.mjs");
var Route$5 = createFileRoute("/dashboard/profile")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./dashboard.reports-Bo7Y4j4G.mjs");
var Route$4 = createFileRoute("/dashboard/reports")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./dashboard.settings-LKoalZ54.mjs");
var Route$3 = createFileRoute("/dashboard/settings")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./dashboard.upload-BTub73ZD.mjs");
var Route$2 = createFileRoute("/dashboard/upload")({
	head: () => ({ meta: [{ title: "Upload Documents · CogniFlow" }, {
		name: "description",
		content: "Save uploaded documents to the shared database before choosing to process them."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./dashboard.validation-nZyyuw-t.mjs");
var Route$1 = createFileRoute("/dashboard/validation")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./dashboard.document._docId-COEUmh-R.mjs");
var $$splitNotFoundComponentImporter = () => import("./dashboard.document._docId-C4NSQwWH.mjs");
var Route = createFileRoute("/dashboard/document/$docId")({
	loader: async ({ params }) => {
		const doc = await fetchDocumentById(params.docId);
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
export { initials as a, displayName as i, Route as n, useAuth as o, useTheme as r, router_exports as t };
