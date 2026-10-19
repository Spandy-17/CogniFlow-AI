import { a as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DfGWe7VR.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as displayName, o as useAuth } from "./router-XVNWBbpq.mjs";
import { M as Mail, _t as Calendar, ct as CircleCheck, gt as Camera, i as User, j as MapPin, mt as Check, n as X, p as Sparkles, q as FileText, vt as Briefcase, w as Pencil } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B1_2tSzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.profile-CbuNAxr-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PROFILE_STORAGE_KEY = "cogniflow_user_profile";
var DEFAULT_PROFILE = {
	fullName: "Ada Lovelace",
	role: "Workspace Admin",
	email: "ada@cogniflow.ai",
	location: "London, UK",
	joined: "Joined Jan 2026",
	bio: "Lead AI System Architect overseeing multi-agent document intelligence and auto-routing pipelines."
};
var stats = [
	{
		label: "Documents uploaded",
		value: "1,284"
	},
	{
		label: "Approved",
		value: "1,196"
	},
	{
		label: "Avg. confidence",
		value: "97.4%"
	},
	{
		label: "Automation saved",
		value: "312h"
	}
];
var activity = [
	{
		Icon: CircleCheck,
		cls: "text-success bg-success/15",
		t: "Approved 24 documents",
		when: "2h ago"
	},
	{
		Icon: FileText,
		cls: "text-primary bg-primary/10",
		t: "Uploaded Certificate_Ada.pdf",
		when: "yesterday"
	},
	{
		Icon: Sparkles,
		cls: "text-brand-2 bg-brand-2/10",
		t: "Enabled auto-routing",
		when: "2d ago"
	}
];
function ProfilePage() {
	const { user } = useAuth();
	const [profile, setProfile] = (0, import_react.useState)(DEFAULT_PROFILE);
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(DEFAULT_PROFILE);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		try {
			const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
			if (stored) {
				const parsed = JSON.parse(stored);
				setProfile(parsed);
				setDraft(parsed);
			} else if (user) {
				const initialProfile = {
					...DEFAULT_PROFILE,
					fullName: displayName(user) !== "Guest" ? displayName(user) : DEFAULT_PROFILE.fullName,
					email: user.email || DEFAULT_PROFILE.email
				};
				setProfile(initialProfile);
				setDraft(initialProfile);
			}
		} catch {}
	}, [user]);
	const handleStartEditing = () => {
		setDraft({ ...profile });
		setIsEditing(true);
	};
	const handleCancel = () => {
		setDraft({ ...profile });
		setIsEditing(false);
	};
	const handleAvatarChange = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		if (file.size > 2097152) {
			toast.error("Image file size must be less than 2MB.");
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			setDraft((prev) => ({
				...prev,
				avatarUrl: reader.result
			}));
			toast.info("Avatar preview updated. Click 'Save changes' to apply.");
		};
		reader.readAsDataURL(file);
	};
	const handleRemoveAvatar = () => {
		setDraft((prev) => ({
			...prev,
			avatarUrl: void 0
		}));
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	const handleSave = async (e) => {
		e.preventDefault();
		if (!draft.fullName.trim()) {
			toast.error("Please provide a valid full name.");
			return;
		}
		setSaving(true);
		try {
			const updated = {
				...draft,
				fullName: draft.fullName.trim(),
				role: draft.role.trim() || "Team Member",
				email: draft.email.trim() || DEFAULT_PROFILE.email,
				location: draft.location.trim() || "Remote",
				bio: draft.bio.trim()
			};
			localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updated));
			setProfile(updated);
			if (user) await supabase.auth.updateUser({ data: { full_name: updated.fullName } });
			setIsEditing(false);
			toast.success("Profile updated successfully!");
		} catch (err) {
			console.error(err);
			toast.error("Failed to save profile changes.");
		} finally {
			setSaving(false);
		}
	};
	const displayInitial = (profile.fullName.trim()[0] || "A").toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Profile",
		subtitle: "Your identity and recent activity across CogniFlow.",
		"data-tsd-source": "/src/routes/dashboard.profile.tsx:163:7"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1.15fr_1.6fr]",
		"data-tsd-source": "/src/routes/dashboard.profile.tsx:164:7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "h-fit",
			"data-tsd-source": "/src/routes/dashboard.profile.tsx:165:9",
			children: !isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center",
				"data-tsd-source": "/src/routes/dashboard.profile.tsx:168:13",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative group",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:169:15",
						children: [profile.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: profile.avatarUrl,
							alt: profile.fullName,
							className: "size-24 rounded-3xl object-cover border-2 border-primary/20 shadow-glow",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:171:19"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-24 place-items-center rounded-3xl bg-gradient-to-br from-brand-1 to-brand-2 text-white text-3xl font-bold shadow-glow",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:177:19",
							children: displayInitial
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleStartEditing,
							title: "Change avatar",
							className: "absolute -bottom-1 -right-1 grid size-7 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-110",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:181:17",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
								className: "size-3.5",
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:187:19"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xl font-bold",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:191:15",
						children: profile.fullName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 flex items-center gap-1.5",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:192:15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:193:17",
							children: profile.role
						})
					}),
					profile.bio && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground leading-relaxed px-2 text-center max-w-sm",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:199:17",
						children: profile.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid w-full grid-cols-1 gap-2 text-left text-sm",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:204:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								Icon: Mail,
								label: "Email",
								v: profile.email,
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:205:17"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								Icon: MapPin,
								label: "Location",
								v: profile.location,
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:206:17"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								Icon: Calendar,
								label: "Joined",
								v: profile.joined,
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:207:17"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleStartEditing,
						className: "mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:210:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
							className: "size-4",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:215:17"
						}), "Edit profile"]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSave,
				className: "space-y-4",
				"data-tsd-source": "/src/routes/dashboard.profile.tsx:221:13",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border/60 pb-3",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:222:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:223:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
								className: "size-4 text-primary",
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:224:19"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:225:19",
								children: "Edit Profile"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleCancel,
							className: "rounded-lg p-1 text-muted-foreground hover:bg-secondary hover:text-foreground",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:227:17",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "size-4",
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:232:19"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 py-1",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:237:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:238:17",
							children: draft.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: draft.avatarUrl,
								alt: "Avatar preview",
								className: "size-16 rounded-2xl object-cover border border-primary/30",
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:240:21"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white text-xl font-bold",
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:246:21",
								children: (draft.fullName.trim()[0] || "A").toUpperCase()
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:251:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileInputRef,
									type: "file",
									accept: "image/*",
									onChange: handleAvatarChange,
									className: "hidden",
									id: "profile-avatar-upload",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:252:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:260:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => fileInputRef.current?.click(),
										className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-medium hover:bg-secondary",
										"data-tsd-source": "/src/routes/dashboard.profile.tsx:261:21",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
											className: "size-3.5",
											"data-tsd-source": "/src/routes/dashboard.profile.tsx:266:23"
										}), "Upload photo"]
									}), draft.avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: handleRemoveAvatar,
										className: "rounded-xl border border-border bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground",
										"data-tsd-source": "/src/routes/dashboard.profile.tsx:270:23",
										children: "Reset"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:279:19",
									children: "PNG, JPG or WebP up to 2MB"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-left",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:284:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:285:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1 block text-xs font-medium text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:286:19",
									children: "Full Name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:287:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
										className: "absolute left-3 size-4 text-muted-foreground",
										"data-tsd-source": "/src/routes/dashboard.profile.tsx:288:21"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: draft.fullName,
										onChange: (e) => setDraft((p) => ({
											...p,
											fullName: e.target.value
										})),
										className: "w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
										placeholder: "e.g. Ada Lovelace",
										"data-tsd-source": "/src/routes/dashboard.profile.tsx:289:21"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:300:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1 block text-xs font-medium text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:301:19",
									children: "Role / Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:302:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
										className: "absolute left-3 size-4 text-muted-foreground",
										"data-tsd-source": "/src/routes/dashboard.profile.tsx:303:21"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: draft.role,
										onChange: (e) => setDraft((p) => ({
											...p,
											role: e.target.value
										})),
										className: "w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
										placeholder: "e.g. Workspace Admin",
										"data-tsd-source": "/src/routes/dashboard.profile.tsx:304:21"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:314:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1 block text-xs font-medium text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:315:19",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:316:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "absolute left-3 size-4 text-muted-foreground",
										"data-tsd-source": "/src/routes/dashboard.profile.tsx:317:21"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										value: draft.email,
										onChange: (e) => setDraft((p) => ({
											...p,
											email: e.target.value
										})),
										className: "w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
										placeholder: "e.g. name@cogniflow.ai",
										"data-tsd-source": "/src/routes/dashboard.profile.tsx:318:21"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:328:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1 block text-xs font-medium text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:329:19",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:330:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "absolute left-3 size-4 text-muted-foreground",
										"data-tsd-source": "/src/routes/dashboard.profile.tsx:331:21"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: draft.location,
										onChange: (e) => setDraft((p) => ({
											...p,
											location: e.target.value
										})),
										className: "w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
										placeholder: "e.g. London, UK",
										"data-tsd-source": "/src/routes/dashboard.profile.tsx:332:21"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:342:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1 block text-xs font-medium text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:343:19",
									children: "About / Bio"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 3,
									value: draft.bio,
									onChange: (e) => setDraft((p) => ({
										...p,
										bio: e.target.value
									})),
									className: "w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15 resize-none",
									placeholder: "Brief description about yourself...",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:344:19"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-end gap-2 pt-2",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:355:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleCancel,
							className: "rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-secondary transition",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:356:17",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: saving || !draft.fullName.trim(),
							className: "inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 disabled:opacity-50",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:363:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-4",
								"data-tsd-source": "/src/routes/dashboard.profile.tsx:368:19"
							}), saving ? "Saving..." : "Save changes"]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			"data-tsd-source": "/src/routes/dashboard.profile.tsx:377:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
				"data-tsd-source": "/src/routes/dashboard.profile.tsx:378:11",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					"data-tsd-source": "/src/routes/dashboard.profile.tsx:380:15",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-bold tabular-nums",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:381:17",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:382:17",
						children: s.label
					})]
				}, s.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "!p-0 overflow-hidden",
				"data-tsd-source": "/src/routes/dashboard.profile.tsx:386:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border/60 px-4 py-3",
					"data-tsd-source": "/src/routes/dashboard.profile.tsx:387:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						"data-tsd-source": "/src/routes/dashboard.profile.tsx:388:15",
						children: "Recent activity"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border/50",
					"data-tsd-source": "/src/routes/dashboard.profile.tsx:390:13",
					children: activity.map((a, i) => {
						const Icon = a.Icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 px-4 py-3",
							"data-tsd-source": "/src/routes/dashboard.profile.tsx:394:19",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `grid size-9 place-items-center rounded-xl ${a.cls}`,
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:395:21",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-4.5",
										"data-tsd-source": "/src/routes/dashboard.profile.tsx:396:23"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "flex-1 text-sm font-medium",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:398:21",
									children: a.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.profile.tsx:399:21",
									children: a.when
								})
							]
						}, i);
					})
				})]
			})]
		})]
	})] });
}
function Row({ Icon, label, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-2.5 rounded-xl bg-secondary/60 px-3 py-2",
		"data-tsd-source": "/src/routes/dashboard.profile.tsx:413:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2.5 text-muted-foreground",
			"data-tsd-source": "/src/routes/dashboard.profile.tsx:414:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-4",
				"data-tsd-source": "/src/routes/dashboard.profile.tsx:415:9"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs",
				"data-tsd-source": "/src/routes/dashboard.profile.tsx:416:9",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium text-foreground truncate",
			"data-tsd-source": "/src/routes/dashboard.profile.tsx:418:7",
			children: v
		})]
	});
}
//#endregion
export { ProfilePage as component };
