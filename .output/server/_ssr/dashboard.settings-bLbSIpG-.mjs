import { a as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useTheme } from "./router-XVNWBbpq.mjs";
import { E as Palette, O as Moon, Q as ExternalLink, R as KeyRound, X as Eye, Z as EyeOff, at as Clipboard, bt as Bell, c as Trash2, ct as CircleCheck, f as Sun, h as ShieldCheck, k as Monitor, m as Shield, mt as Check, nt as Copy, p as Sparkles } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B1_2tSzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.settings-bLbSIpG-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AI_PROVIDERS = {
	openai: {
		id: "openai",
		name: "OpenAI",
		badge: "GPT-4o & o-Series",
		description: "Reasoning and multi-agent document analysis with GPT-4o and o1.",
		placeholder: "sk-proj-...",
		getKeyUrl: "https://platform.openai.com/api-keys",
		keyPrefixHint: "Starts with 'sk-' or 'sk-proj-'"
	},
	gemini: {
		id: "gemini",
		name: "Google Gemini",
		badge: "Gemini 1.5 & 2.0",
		description: "Multimodal document comprehension and fast token processing.",
		placeholder: "AIzaSy...",
		getKeyUrl: "https://aistudio.google.com/app/apikey",
		keyPrefixHint: "Starts with 'AIzaSy...'"
	},
	anthropic: {
		id: "anthropic",
		name: "Anthropic Claude",
		badge: "Claude 3.5 Sonnet",
		description: "High-accuracy structured extraction and rigorous audit reviews.",
		placeholder: "sk-ant-api03-...",
		getKeyUrl: "https://console.anthropic.com/settings/keys",
		keyPrefixHint: "Starts with 'sk-ant-'"
	}
};
var STORAGE_KEY = "cogniflow_user_api_keys";
function getStoredApiKeys() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		return JSON.parse(raw);
	} catch (err) {
		console.error("Failed to read API keys from localStorage", err);
		return [];
	}
}
function saveApiKey(provider, key, label) {
	const existing = getStoredApiKeys();
	const trimmedKey = key.trim();
	const newEntry = {
		id: `key_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
		provider,
		key: trimmedKey,
		label: label?.trim() || `${AI_PROVIDERS[provider].name} Key`,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		isActive: true
	};
	const updated = [newEntry, ...existing.filter((k) => k.provider !== provider)];
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
	} catch (err) {
		console.error("Failed to save API key to localStorage", err);
	}
	return newEntry;
}
function deleteApiKey(id) {
	const updated = getStoredApiKeys().filter((k) => k.id !== id);
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
	} catch (err) {
		console.error("Failed to delete API key from localStorage", err);
	}
}
function maskApiKey(key) {
	if (!key) return "";
	if (key.length <= 8) return "••••••••";
	return `${key.slice(0, Math.min(7, Math.floor(key.length / 3)))}••••••••••••${key.slice(-4)}`;
}
var tabs = [
	{
		id: "appearance",
		label: "Appearance",
		Icon: Palette
	},
	{
		id: "security",
		label: "Security",
		Icon: Shield
	},
	{
		id: "notifs",
		label: "Notifications",
		Icon: Bell
	},
	{
		id: "ai",
		label: "AI agents",
		Icon: Sparkles
	},
	{
		id: "api",
		label: "API keys",
		Icon: KeyRound
	}
];
function Toggle({ on, onChange, label, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 py-3",
		"data-tsd-source": "/src/routes/dashboard.settings.tsx:47:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/routes/dashboard.settings.tsx:48:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				"data-tsd-source": "/src/routes/dashboard.settings.tsx:48:32",
				children: label
			}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				"data-tsd-source": "/src/routes/dashboard.settings.tsx:48:87",
				children: hint
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onChange(!on),
			className: `relative h-6 w-11 shrink-0 rounded-full transition-colors ${on ? "bg-primary" : "bg-muted"}`,
			"data-tsd-source": "/src/routes/dashboard.settings.tsx:49:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute top-0.5 size-5 rounded-full bg-white shadow transition-all ${on ? "left-[22px]" : "left-0.5"}`,
				"data-tsd-source": "/src/routes/dashboard.settings.tsx:50:9"
			})
		})]
	});
}
function SettingsPage() {
	const [tab, setTab] = (0, import_react.useState)("appearance");
	const [emailN, setEmailN] = (0, import_react.useState)(true);
	const [pushN, setPushN] = (0, import_react.useState)(false);
	const [twoFa, setTwoFa] = (0, import_react.useState)(true);
	const [autoRoute, setAutoRoute] = (0, import_react.useState)(true);
	const { theme, resolvedTheme, setTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Settings",
		subtitle: "Configure your workspace, agents, and account.",
		"data-tsd-source": "/src/routes/dashboard.settings.tsx:66:7"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[220px_1fr]",
		"data-tsd-source": "/src/routes/dashboard.settings.tsx:67:7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "!p-2 h-fit",
			"data-tsd-source": "/src/routes/dashboard.settings.tsx:68:9",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "space-y-1",
				"data-tsd-source": "/src/routes/dashboard.settings.tsx:69:11",
				children: tabs.map((t) => {
					const Icon = t.Icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setTab(t.id),
						className: `flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-left transition-colors ${tab === t.id ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
						"data-tsd-source": "/src/routes/dashboard.settings.tsx:73:17",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:77:19"
							}),
							" ",
							t.label
						]
					}, t.id);
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-tsd-source": "/src/routes/dashboard.settings.tsx:84:9",
			children: [
				tab === "appearance" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:86:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:87:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-semibold",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:88:17",
								children: "Appearance & Theme"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:89:17",
								children: "Customize how CogniFlow looks on your device."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-3",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:92:15",
							children: [
								{
									id: "system",
									title: "System Preference",
									desc: "Automatically sync with your operating system light/dark mode.",
									Icon: Monitor
								},
								{
									id: "light",
									title: "Light Theme",
									desc: "Bright and vibrant interface with high readability.",
									Icon: Sun
								},
								{
									id: "dark",
									title: "Dark Theme",
									desc: "Sleek dark mode tailored for low light environments.",
									Icon: Moon
								}
							].map((item) => {
								const Icon = item.Icon;
								const isSelected = theme === item.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setTheme(item.id),
									className: `relative flex flex-col justify-between rounded-2xl border p-4 text-left transition-all ${isSelected ? "border-primary bg-primary/10 shadow-glow ring-2 ring-primary/20" : "border-border bg-background/50 hover:bg-secondary hover:border-primary/40"}`,
									"data-tsd-source": "/src/routes/dashboard.settings.tsx:116:21",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:125:23",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between mb-2",
												"data-tsd-source": "/src/routes/dashboard.settings.tsx:126:25",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `grid size-9 place-items-center rounded-xl ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
													"data-tsd-source": "/src/routes/dashboard.settings.tsx:127:27",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
														className: "size-4",
														"data-tsd-source": "/src/routes/dashboard.settings.tsx:128:29"
													})
												}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1 text-xs font-semibold text-primary",
													"data-tsd-source": "/src/routes/dashboard.settings.tsx:131:29",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
														className: "size-3.5",
														"data-tsd-source": "/src/routes/dashboard.settings.tsx:132:31"
													}), " Active"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold",
												"data-tsd-source": "/src/routes/dashboard.settings.tsx:136:25",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted-foreground leading-relaxed",
												"data-tsd-source": "/src/routes/dashboard.settings.tsx:137:25",
												children: item.desc
											})
										]
									})
								}, item.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-secondary/40 p-4 flex items-center justify-between",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:144:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-0.5",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:145:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									"data-tsd-source": "/src/routes/dashboard.settings.tsx:146:19",
									children: "Currently active theme"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.settings.tsx:147:19",
									children: [
										"Active mode: ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold capitalize text-foreground",
											"data-tsd-source": "/src/routes/dashboard.settings.tsx:148:34",
											children: resolvedTheme
										}),
										" ",
										theme === "system" && "(via Device Settings)"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/20 capitalize",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:151:17",
								children: [resolvedTheme, " mode"]
							})]
						})
					]
				}),
				tab === "security" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:158:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:159:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-semibold",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:159:20",
								children: "Security"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:159:71",
								children: "Keep your account safe."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "divide-y divide-border",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:160:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								on: twoFa,
								onChange: setTwoFa,
								label: "Two-factor authentication",
								hint: "Require a 6-digit code on sign in.",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:161:17"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								on: false,
								onChange: () => {},
								label: "Sign-in alerts",
								hint: "Email me when a new device signs in.",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:162:17"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-sm font-medium text-primary hover:underline",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:164:15",
							children: "Change password"
						})
					]
				}),
				tab === "notifs" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:168:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-tsd-source": "/src/routes/dashboard.settings.tsx:169:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-semibold",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:169:20",
							children: "Notifications"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:169:76",
							children: "Choose what reaches you."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y divide-border",
						"data-tsd-source": "/src/routes/dashboard.settings.tsx:170:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								on: emailN,
								onChange: setEmailN,
								label: "Email notifications",
								hint: "Digest of agent activity.",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:171:17"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								on: pushN,
								onChange: setPushN,
								label: "Push notifications",
								hint: "Instant alerts for reviews.",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:172:17"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								on: true,
								onChange: () => {},
								label: "Weekly report",
								hint: "Every Monday, 09:00.",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:173:17"
							})
						]
					})]
				}),
				tab === "ai" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:178:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:179:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-semibold",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:179:20",
								children: "AI agents"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:179:72",
								children: "Tune your pipeline."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "divide-y divide-border",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:180:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									on: autoRoute,
									onChange: setAutoRoute,
									label: "Auto-route documents",
									hint: "Routing agent files without review.",
									"data-tsd-source": "/src/routes/dashboard.settings.tsx:181:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									on: true,
									onChange: () => {},
									label: "Human-in-the-loop",
									hint: "Flag anything below 95% confidence.",
									"data-tsd-source": "/src/routes/dashboard.settings.tsx:182:17"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									on: false,
									onChange: () => {},
									label: "Beta models",
									hint: "Try new agents before general release.",
									"data-tsd-source": "/src/routes/dashboard.settings.tsx:183:17"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:185:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Confidence threshold",
								defaultValue: "95%",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:186:17"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Default routing folder",
								defaultValue: "/Inbox",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:187:17"
							})]
						})
					]
				}),
				tab === "api" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApiKeysTab, { "data-tsd-source": "/src/routes/dashboard.settings.tsx:191:29" })
			]
		})]
	})] });
}
function Field({ label, defaultValue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		"data-tsd-source": "/src/routes/dashboard.settings.tsx:200:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block text-xs font-medium text-muted-foreground",
			"data-tsd-source": "/src/routes/dashboard.settings.tsx:201:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			defaultValue,
			className: "w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
			"data-tsd-source": "/src/routes/dashboard.settings.tsx:202:7"
		})]
	});
}
function OpenAiLogo({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"data-tsd-source": "/src/routes/dashboard.settings.tsx:209:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1638a.0804.0804 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6609v.0033zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.145-2.1288l2.548-1.4704 2.548 1.4704v2.9409l-2.548 1.4704-2.548-1.4704z",
			"data-tsd-source": "/src/routes/dashboard.settings.tsx:210:7"
		})
	});
}
function GeminiLogo({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"data-tsd-source": "/src/routes/dashboard.settings.tsx:217:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z",
			"data-tsd-source": "/src/routes/dashboard.settings.tsx:218:7"
		})
	});
}
function AnthropicLogo({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"data-tsd-source": "/src/routes/dashboard.settings.tsx:225:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M14.2 3.2a.8.8 0 0 0-1.4 0L6.4 17.6a.8.8 0 0 0 .7 1.2h3.2l1.6-4.5h4.2l1.6 4.5h3.2a.8.8 0 0 0 .7-1.2L14.2 3.2zm-1.3 7.8 1.3-3.7 1.3 3.7h-2.6z",
			"data-tsd-source": "/src/routes/dashboard.settings.tsx:226:7"
		})
	});
}
function ProviderIcon({ provider, className = "size-5" }) {
	if (provider === "openai") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenAiLogo, {
		className,
		"data-tsd-source": "/src/routes/dashboard.settings.tsx:232:37"
	});
	if (provider === "gemini") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeminiLogo, {
		className,
		"data-tsd-source": "/src/routes/dashboard.settings.tsx:233:37"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnthropicLogo, {
		className,
		"data-tsd-source": "/src/routes/dashboard.settings.tsx:234:10"
	});
}
function ApiKeysTab() {
	const [selectedProvider, setSelectedProvider] = (0, import_react.useState)("openai");
	const [apiKeyInput, setApiKeyInput] = (0, import_react.useState)("");
	const [keyLabelInput, setKeyLabelInput] = (0, import_react.useState)("");
	const [showKeyInput, setShowKeyInput] = (0, import_react.useState)(false);
	const [storedKeys, setStoredKeys] = (0, import_react.useState)([]);
	const [revealedKeyIds, setRevealedKeyIds] = (0, import_react.useState)({});
	const [copiedKeyId, setCopiedKeyId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setStoredKeys(getStoredApiKeys());
	}, []);
	const activeProviderInfo = AI_PROVIDERS[selectedProvider];
	const handleSave = (e) => {
		if (e) e.preventDefault();
		const trimmed = apiKeyInput.trim();
		if (!trimmed) {
			toast.error("Please paste a valid API key.");
			return;
		}
		saveApiKey(selectedProvider, trimmed, keyLabelInput);
		setStoredKeys(getStoredApiKeys());
		setApiKeyInput("");
		setKeyLabelInput("");
		setShowKeyInput(false);
		toast.success(`${activeProviderInfo.name} API key connected successfully!`);
	};
	const handleDelete = (id, name) => {
		deleteApiKey(id);
		setStoredKeys(getStoredApiKeys());
		toast.success(`${name} API key removed.`);
	};
	const handleCopy = async (id, key) => {
		try {
			await navigator.clipboard.writeText(key);
			setCopiedKeyId(id);
			toast.success("API key copied to clipboard!");
			setTimeout(() => setCopiedKeyId(null), 2e3);
		} catch {
			toast.error("Failed to copy to clipboard.");
		}
	};
	const handlePasteClipboard = async () => {
		try {
			const text = await navigator.clipboard.readText();
			if (text) {
				setApiKeyInput(text.trim());
				toast.info("Pasted from clipboard.");
			}
		} catch {
			toast.error("Unable to read clipboard. Please paste manually.");
		}
	};
	const toggleReveal = (id) => {
		setRevealedKeyIds((prev) => ({
			...prev,
			[id]: !prev[id]
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		"data-tsd-source": "/src/routes/dashboard.settings.tsx:304:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-tsd-source": "/src/routes/dashboard.settings.tsx:305:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base font-semibold",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:306:9",
					children: "API Keys & AI Providers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:307:9",
					children: "Paste your own API key for OpenAI, Google Gemini, or Anthropic Claude to power your document intelligence pipeline."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-tsd-source": "/src/routes/dashboard.settings.tsx:313:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:314:9",
					children: "1. Select AI Provider"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:317:9",
					children: [
						"openai",
						"gemini",
						"anthropic"
					].map((pId) => {
						const provider = AI_PROVIDERS[pId];
						const isSelected = selectedProvider === pId;
						const hasExistingKey = storedKeys.some((k) => k.provider === pId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSelectedProvider(pId),
							className: `relative flex flex-col justify-between rounded-2xl border p-4 text-left transition-all ${isSelected ? "border-primary bg-primary/10 shadow-glow ring-2 ring-primary/30" : "border-border bg-background/50 hover:border-primary/40 hover:bg-secondary/60"}`,
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:324:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:334:17",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-3",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:335:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `grid size-10 place-items-center rounded-xl ${pId === "openai" ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : pId === "gemini" ? "bg-blue-500/15 text-blue-600 dark:text-blue-400" : "bg-amber-500/15 text-amber-600 dark:text-amber-400"}`,
											"data-tsd-source": "/src/routes/dashboard.settings.tsx:336:21",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderIcon, {
												provider: pId,
												className: "size-5",
												"data-tsd-source": "/src/routes/dashboard.settings.tsx:345:23"
											})
										}), hasExistingKey && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
											"data-tsd-source": "/src/routes/dashboard.settings.tsx:348:23",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "size-1.5 rounded-full bg-emerald-500 animate-pulse",
												"data-tsd-source": "/src/routes/dashboard.settings.tsx:349:25"
											}), "Connected"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:354:19",
										children: provider.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 inline-block text-[11px] font-medium text-primary",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:355:19",
										children: provider.badge
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:358:19",
										children: provider.description
									})
								]
							})
						}, pId);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-background/50 p-4 sm:p-5 space-y-4",
				"data-tsd-source": "/src/routes/dashboard.settings.tsx:369:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:370:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-tsd-source": "/src/routes/dashboard.settings.tsx:371:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:372:13",
							children: [
								"2. Paste your ",
								activeProviderInfo.name,
								" API Key"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:375:13",
							children: activeProviderInfo.keyPrefixHint
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: activeProviderInfo.getKeyUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline",
						"data-tsd-source": "/src/routes/dashboard.settings.tsx:379:11",
						children: [
							"Get ",
							activeProviderInfo.name,
							" API key ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "size-3",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:385:51"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSave,
					className: "space-y-3",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:389:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center",
						"data-tsd-source": "/src/routes/dashboard.settings.tsx:390:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute left-3 flex items-center text-muted-foreground",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:391:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
									className: "size-4",
									"data-tsd-source": "/src/routes/dashboard.settings.tsx:392:15"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: showKeyInput ? "text" : "password",
								value: apiKeyInput,
								onChange: (e) => setApiKeyInput(e.target.value),
								placeholder: `Paste your key here (e.g. ${activeProviderInfo.placeholder})`,
								className: "w-full rounded-xl border border-border bg-background px-9 py-2.5 font-mono text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:394:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-2 flex items-center gap-1",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:401:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handlePasteClipboard,
									title: "Paste from clipboard",
									className: "rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
									"data-tsd-source": "/src/routes/dashboard.settings.tsx:402:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, {
										className: "size-4",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:408:17"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowKeyInput(!showKeyInput),
									title: showKeyInput ? "Hide key" : "Show key",
									className: "rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
									"data-tsd-source": "/src/routes/dashboard.settings.tsx:410:15",
									children: showKeyInput ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, {
										className: "size-4",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:416:33"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
										className: "size-4",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:416:65"
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-[1fr_auto]",
						"data-tsd-source": "/src/routes/dashboard.settings.tsx:421:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: keyLabelInput,
							onChange: (e) => setKeyLabelInput(e.target.value),
							placeholder: `Key nickname (optional, e.g. Primary ${activeProviderInfo.name} Key)`,
							className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:422:13"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: !apiKeyInput.trim(),
							className: "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-5 py-2 text-sm font-semibold text-white shadow-glow transition-all hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:429:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-4",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:434:15"
							}), "Connect & Save Key"]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				"data-tsd-source": "/src/routes/dashboard.settings.tsx:442:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:443:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold",
						"data-tsd-source": "/src/routes/dashboard.settings.tsx:444:11",
						children: [
							"Connected API Keys (",
							storedKeys.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						"data-tsd-source": "/src/routes/dashboard.settings.tsx:447:11",
						children: "Persisted in local browser storage"
					})]
				}), storedKeys.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-dashed border-border p-8 text-center bg-background/30",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:451:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground mb-2",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:452:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "size-5",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:453:15"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:455:13",
							children: "No custom API keys connected yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1 max-w-sm mx-auto",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:456:13",
							children: "Select OpenAI, Google Gemini, or Anthropic Claude above, paste your API key, and click Connect to use your own keys."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2.5",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:461:11",
					children: storedKeys.map((stored) => {
						const provider = AI_PROVIDERS[stored.provider];
						const isRevealed = revealedKeyIds[stored.id];
						const isCopied = copiedKeyId === stored.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-background p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all hover:border-primary/30",
							"data-tsd-source": "/src/routes/dashboard.settings.tsx:468:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 min-w-0",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:472:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `grid size-9 shrink-0 place-items-center rounded-xl ${stored.provider === "openai" ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : stored.provider === "gemini" ? "bg-blue-500/15 text-blue-600 dark:text-blue-400" : "bg-amber-500/15 text-amber-600 dark:text-amber-400"}`,
									"data-tsd-source": "/src/routes/dashboard.settings.tsx:473:21",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderIcon, {
										provider: stored.provider,
										className: "size-4.5",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:482:23"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									"data-tsd-source": "/src/routes/dashboard.settings.tsx:484:21",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 flex-wrap",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:485:23",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold",
												"data-tsd-source": "/src/routes/dashboard.settings.tsx:486:25",
												children: stored.label || provider.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary",
												"data-tsd-source": "/src/routes/dashboard.settings.tsx:487:25",
												children: provider.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400",
												"data-tsd-source": "/src/routes/dashboard.settings.tsx:490:25",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
													className: "size-3",
													"data-tsd-source": "/src/routes/dashboard.settings.tsx:491:27"
												}), " Active"]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs text-muted-foreground mt-1 break-all",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:494:23",
										children: isRevealed ? stored.key : maskApiKey(stored.key)
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 self-end sm:self-center shrink-0",
								"data-tsd-source": "/src/routes/dashboard.settings.tsx:500:19",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggleReveal(stored.id),
										title: isRevealed ? "Hide key" : "Reveal full key",
										className: "rounded-lg border border-border bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors flex items-center gap-1",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:501:21",
										children: [isRevealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, {
											className: "size-3.5",
											"data-tsd-source": "/src/routes/dashboard.settings.tsx:507:37"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
											className: "size-3.5",
											"data-tsd-source": "/src/routes/dashboard.settings.tsx:507:71"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline",
											"data-tsd-source": "/src/routes/dashboard.settings.tsx:508:23",
											children: isRevealed ? "Hide" : "Reveal"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleCopy(stored.id, stored.key),
										title: "Copy full key",
										className: "rounded-lg border border-border bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors flex items-center gap-1",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:510:21",
										children: [isCopied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "size-3.5 text-emerald-500",
											"data-tsd-source": "/src/routes/dashboard.settings.tsx:516:35"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
											className: "size-3.5",
											"data-tsd-source": "/src/routes/dashboard.settings.tsx:516:85"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-tsd-source": "/src/routes/dashboard.settings.tsx:517:23",
											children: isCopied ? "Copied" : "Copy"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleDelete(stored.id, stored.label || provider.name),
										title: "Remove key",
										className: "rounded-lg border border-red-500/20 bg-red-500/10 px-2.5 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-500/20 transition-colors flex items-center gap-1",
										"data-tsd-source": "/src/routes/dashboard.settings.tsx:519:21",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
											className: "size-3.5",
											"data-tsd-source": "/src/routes/dashboard.settings.tsx:525:23"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline",
											"data-tsd-source": "/src/routes/dashboard.settings.tsx:526:23",
											children: "Delete"
										})]
									})
								]
							})]
						}, stored.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-start gap-3",
				"data-tsd-source": "/src/routes/dashboard.settings.tsx:537:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
					className: "size-5 text-primary shrink-0 mt-0.5",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:538:9"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-0.5",
					"data-tsd-source": "/src/routes/dashboard.settings.tsx:539:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-foreground",
						"data-tsd-source": "/src/routes/dashboard.settings.tsx:540:11",
						children: "Client-Side Security Guarantee"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground leading-relaxed",
						"data-tsd-source": "/src/routes/dashboard.settings.tsx:541:11",
						children: "Your API keys are securely stored in your browser's local storage and used directly for agent reasoning requests. CogniFlow never sends your third-party keys to unauthenticated backend servers."
					})]
				})]
			})
		]
	});
}
//#endregion
export { SettingsPage as component };
