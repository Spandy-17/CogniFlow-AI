import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { d as statusMeta, n as Route, s as deleteDocument } from "./router-XVNWBbpq.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { $ as Download, Ct as ArrowLeft, H as FolderTree, Q as ExternalLink, c as Trash2, ct as CircleCheck, i as User, it as Clock, ot as CircleX, q as FileText, tt as Cpu, x as RefreshCw, z as HardDrive } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B1_2tSzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.document._docId-B_c7giPs.js
var import_jsx_runtime = require_jsx_runtime();
function DocumentDetails() {
	const { doc } = Route.useLoaderData();
	const navigate = useNavigate();
	const s = statusMeta[doc.status] || statusMeta.routed;
	const handleDelete = async () => {
		if (!confirm(`Delete "${doc.name}" from database?`)) return;
		await deleteDocument(doc.id, doc.filePath);
		toast.success("Document deleted");
		navigate({ to: "/dashboard/documents" });
	};
	const handleDownload = () => {
		if (doc.fileUrl) window.open(doc.fileUrl, "_blank");
		else {
			const blob = new Blob([doc.extracted || "CogniFlow Document"], { type: "text/plain" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = doc.name.replace(/\.[^/.]+$/, "") + "_extracted.txt";
			a.click();
			URL.revokeObjectURL(url);
			toast.success("Extracted text downloaded");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/dashboard/documents",
			className: "mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition",
			"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:77:13",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
				className: "size-4",
				"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:78:17"
			}), " All documents"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: doc.name,
			subtitle: `${doc.cat} · ${doc.pages} page${doc.pages > 1 ? "s" : ""} · uploaded ${doc.date}`,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleDownload,
					className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => toast.info("Document queued for agent re-processing"),
					className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }), " Reprocess"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleDelete,
					className: "inline-flex items-center gap-2 rounded-xl border border-destructive/40 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), " Delete"]
				})
			] }),
			"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:81:13"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-3",
			"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:108:13",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-2 !p-0 overflow-hidden",
					"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:109:17",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border/60 px-5 py-3 text-sm font-semibold",
						"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:110:21",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:111:25",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "size-4 text-primary",
								"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:112:29"
							}), " Extracted Text & Content"]
						}), doc.fileUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: doc.fileUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1 text-xs text-primary hover:underline",
							"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:115:29",
							children: ["Original File ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "size-3",
								"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:121:47"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid min-h-72 place-items-center bg-gradient-to-br from-secondary/60 to-transparent p-8",
						"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:125:21",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: "w-full max-w-lg rounded-2xl border border-border bg-background p-6 shadow-sm",
							"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:126:25",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "whitespace-pre-wrap font-mono text-[12px] leading-relaxed text-muted-foreground",
								"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:131:29",
								children: doc.extracted || "No extracted text preview available."
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:138:17",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:139:21",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:140:25",
								children: "Metadata"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 space-y-2.5 text-sm",
								"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:141:25",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										icon: Cpu,
										label: "Detected category",
										value: doc.cat,
										"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:142:29"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										icon: CircleCheck,
										label: "Confidence",
										value: `${doc.conf}%`,
										"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:143:29"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										icon: FolderTree,
										label: "Assigned folder",
										value: doc.folder,
										"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:144:29"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										icon: HardDrive,
										label: "File size",
										value: doc.size,
										"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:145:29"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										icon: User,
										label: "Uploaded by",
										value: doc.uploadedBy,
										"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:146:29"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										icon: Clock,
										label: "Uploaded",
										value: doc.date,
										"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:147:29"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:149:25",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${s.cls}`,
									"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:150:29",
									children: s.label
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:154:25",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 overflow-hidden rounded-full bg-muted",
									"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:155:29",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: { width: 0 },
										animate: { width: `${Math.min(100, doc.conf)}%` },
										transition: {
											duration: .8,
											ease: "easeOut"
										},
										className: "h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2",
										"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:156:33"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 text-[11px] text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:163:29",
									children: [
										"Classification confidence: ",
										doc.conf,
										"%"
									]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:167:21",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:168:25",
							children: "Validation report"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm",
							"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:169:25",
							children: doc.validation && doc.validation.length > 0 ? doc.validation.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:172:37",
								children: [v.passed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "mt-0.5 size-4 shrink-0 text-success",
									"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:174:45"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
									className: "mt-0.5 size-4 shrink-0 text-destructive",
									"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:176:45"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: v.passed ? "" : "text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:178:41",
									children: v.rule
								})]
							}, i)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-xs text-muted-foreground",
								"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:182:33",
								children: "All automatic validation rules passed."
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-3",
					"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:188:17",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:189:21",
						children: "Processing timeline & agent logs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-0",
						"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:190:21",
						children: doc.timeline && doc.timeline.length > 0 ? doc.timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								x: -8
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: i * .06 },
							className: "relative flex gap-4 pb-5 last:pb-0",
							"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:193:33",
							children: [
								i < doc.timeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-[13px] top-7 h-full w-px bg-border",
									"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:201:41"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `relative z-10 mt-1 grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold ${t.state === "done" ? "bg-success/15 text-success" : t.state === "failed" ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary animate-pulse"}`,
									"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:203:37",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:213:37",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:214:41",
										children: t.agent
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:215:41",
										children: t.detail
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto shrink-0 font-mono text-[11px] text-muted-foreground",
									"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:217:37",
									children: t.at
								})
							]
						}, i)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:221:29",
							children: "No agent timeline entries."
						})
					})]
				})
			]
		})
	] });
}
function Row({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:232:9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-3.5 shrink-0 text-muted-foreground",
				"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:233:13"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-muted-foreground",
				"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:234:13",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "ml-auto font-medium",
				"data-tsd-source": "/src/routes/dashboard.document.$docId.tsx:235:13",
				children: value
			})
		]
	});
}
//#endregion
export { DocumentDetails as component };
