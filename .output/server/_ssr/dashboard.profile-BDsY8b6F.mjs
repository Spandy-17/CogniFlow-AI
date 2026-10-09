import { a as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-D5Sc9xg5.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as displayName, o as useAuth } from "./router-oRtFlNxA.mjs";
import { M as Mail, _t as Calendar, gt as Camera, i as User, j as MapPin, lt as CircleCheck, mt as Check, n as X, p as Sparkles, q as FileText, vt as Briefcase, w as Pencil } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-CnF1AuAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.profile-BDsY8b6F.js
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
		subtitle: "Your identity and recent activity across CogniFlow."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1.15fr_1.6fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "h-fit",
			children: !isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative group",
						children: [profile.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: profile.avatarUrl,
							alt: profile.fullName,
							className: "size-24 rounded-3xl object-cover border-2 border-primary/20 shadow-glow"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-24 place-items-center rounded-3xl bg-gradient-to-br from-brand-1 to-brand-2 text-white text-3xl font-bold shadow-glow",
							children: displayInitial
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleStartEditing,
							title: "Change avatar",
							className: "absolute -bottom-1 -right-1 grid size-7 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xl font-bold",
						children: profile.fullName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 flex items-center gap-1.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary",
							children: profile.role
						})
					}),
					profile.bio && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground leading-relaxed px-2 text-center max-w-sm",
						children: profile.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid w-full grid-cols-1 gap-2 text-left text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								Icon: Mail,
								label: "Email",
								v: profile.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								Icon: MapPin,
								label: "Location",
								v: profile.location
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								Icon: Calendar,
								label: "Joined",
								v: profile.joined
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleStartEditing,
						className: "mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" }), "Edit profile"]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSave,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border/60 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Edit Profile"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleCancel,
							className: "rounded-lg p-1 text-muted-foreground hover:bg-secondary hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative",
							children: draft.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: draft.avatarUrl,
								alt: "Avatar preview",
								className: "size-16 rounded-2xl object-cover border border-primary/30"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white text-xl font-bold",
								children: (draft.fullName.trim()[0] || "A").toUpperCase()
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileInputRef,
									type: "file",
									accept: "image/*",
									onChange: handleAvatarChange,
									className: "hidden",
									id: "profile-avatar-upload"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => fileInputRef.current?.click(),
										className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-medium hover:bg-secondary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-3.5" }), "Upload photo"]
									}), draft.avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: handleRemoveAvatar,
										className: "rounded-xl border border-border bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground",
										children: "Reset"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "PNG, JPG or WebP up to 2MB"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1 block text-xs font-medium text-muted-foreground",
								children: "Full Name *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									value: draft.fullName,
									onChange: (e) => setDraft((p) => ({
										...p,
										fullName: e.target.value
									})),
									className: "w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
									placeholder: "e.g. Ada Lovelace"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1 block text-xs font-medium text-muted-foreground",
								children: "Role / Title"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "absolute left-3 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: draft.role,
									onChange: (e) => setDraft((p) => ({
										...p,
										role: e.target.value
									})),
									className: "w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
									placeholder: "e.g. Workspace Admin"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1 block text-xs font-medium text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: draft.email,
									onChange: (e) => setDraft((p) => ({
										...p,
										email: e.target.value
									})),
									className: "w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
									placeholder: "e.g. name@cogniflow.ai"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1 block text-xs font-medium text-muted-foreground",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "absolute left-3 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: draft.location,
									onChange: (e) => setDraft((p) => ({
										...p,
										location: e.target.value
									})),
									className: "w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15",
									placeholder: "e.g. London, UK"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1 block text-xs font-medium text-muted-foreground",
								children: "About / Bio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								value: draft.bio,
								onChange: (e) => setDraft((p) => ({
									...p,
									bio: e.target.value
								})),
								className: "w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15 resize-none",
								placeholder: "Brief description about yourself..."
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-end gap-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleCancel,
							className: "rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-secondary transition",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: saving || !draft.fullName.trim(),
							className: "inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 disabled:opacity-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), saving ? "Saving..." : "Save changes"]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xl font-bold tabular-nums",
					children: s.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: s.label
				})] }, s.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "!p-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border/60 px-4 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Recent activity"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border/50",
					children: activity.map((a, i) => {
						const Icon = a.Icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 px-4 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `grid size-9 place-items-center rounded-xl ${a.cls}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "flex-1 text-sm font-medium",
									children: a.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2.5 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium text-foreground truncate",
			children: v
		})]
	});
}
//#endregion
export { ProfilePage as component };
