import { a as __toESM } from "../_runtime.mjs";
import { i as fetchAllDocuments, o as processSavedDocument, t as checkBackendHealth } from "./document-service-drZtwzY8.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { $ as Clock3, A as LoaderCircle, H as FileText, L as FolderTree, U as FileCheckCorner, Y as Cpu, f as ShieldCheck, g as ScanText, it as CircleAlert, lt as Check, rt as CircleCheck, t as Zap, u as Sparkles, v as RefreshCw } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B6vwdakD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.ai-processing-CeVh5KZe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var agentStages = [
	{
		key: "ocr",
		name: "OCR & Ingestion",
		icon: ScanText
	},
	{
		key: "classify",
		name: "Classification",
		icon: Sparkles
	},
	{
		key: "extract",
		name: "Entity Extraction",
		icon: Cpu
	},
	{
		key: "validate",
		name: "Validation",
		icon: ShieldCheck
	},
	{
		key: "route",
		name: "Routing",
		icon: FolderTree
	}
];
function ProcessingCenter() {
	const [backendHealth, setBackendHealth] = (0, import_react.useState)(null);
	const [checking, setChecking] = (0, import_react.useState)(true);
	const [loadingDocuments, setLoadingDocuments] = (0, import_react.useState)(true);
	const [documents, setDocuments] = (0, import_react.useState)([]);
	const [selectedIds, setSelectedIds] = (0, import_react.useState)([]);
	const [processingId, setProcessingId] = (0, import_react.useState)(null);
	const [activeDocument, setActiveDocument] = (0, import_react.useState)(null);
	const pendingDocuments = (0, import_react.useMemo)(() => documents.filter((doc) => doc.status !== "processing"), [documents]);
	const refreshDocuments = (0, import_react.useCallback)(async () => {
		setLoadingDocuments(true);
		try {
			const latest = await fetchAllDocuments();
			setDocuments(latest);
			setSelectedIds((current) => current.filter((id) => latest.some((doc) => doc.id === id && doc.status !== "processing")));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Could not load saved documents.");
		} finally {
			setLoadingDocuments(false);
		}
	}, []);
	const refreshBackend = (0, import_react.useCallback)(async () => {
		setChecking(true);
		const result = await checkBackendHealth();
		setBackendHealth(result.ok ? result.data || null : null);
		setChecking(false);
	}, []);
	(0, import_react.useEffect)(() => {
		refreshBackend();
		refreshDocuments();
	}, [refreshBackend, refreshDocuments]);
	const toggleSelected = (id) => {
		setSelectedIds((current) => current.includes(id) ? current.filter((value) => value !== id) : [...current, id]);
	};
	const processSelected = async () => {
		if (!backendHealth || processingId || selectedIds.length === 0) return;
		const queue = pendingDocuments.filter((doc) => selectedIds.includes(doc.id));
		for (const doc of queue) {
			setProcessingId(doc.id);
			setActiveDocument(null);
			setDocuments((current) => current.map((item) => item.id === doc.id ? {
				...item,
				status: "processing"
			} : item));
			try {
				const completed = await processSavedDocument(doc);
				setActiveDocument(completed);
				setDocuments((current) => current.map((item) => item.id === completed.id ? completed : item));
				setSelectedIds((current) => current.filter((id) => id !== completed.id));
				toast.success(`${completed.name} processed and routed to ${completed.folder}.`);
			} catch (error) {
				const message = error instanceof Error ? error.message : "Document processing failed.";
				setDocuments((current) => current.map((item) => item.id === doc.id ? {
					...item,
					status: "error"
				} : item));
				toast.error(`${doc.name}: ${message}`);
			} finally {
				setProcessingId(null);
			}
		}
		await refreshDocuments();
	};
	const logs = activeDocument?.logs || {};
	const completedStages = new Set(activeDocument?.timeline.map((entry) => {
		const label = entry.agent.toLowerCase();
		if (label.includes("ocr")) return "ocr";
		if (label.includes("classification")) return "classify";
		if (label.includes("extraction")) return "extract";
		if (label.includes("validation")) return "validate";
		if (label.includes("routing")) return "route";
		return "";
	}) || []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "AI Processing Center",
			subtitle: "Uploads stay in My Documents until you select them and start the backend agent pipeline.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold ${backendHealth ? "border-success/30 bg-success/10 text-success" : "border-warning/30 bg-warning/10 text-warning"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full ${backendHealth ? "bg-success" : "bg-warning"}` }), checking ? "Checking backend…" : backendHealth ? `Backend online · v${backendHealth.version}` : "Backend offline"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						refreshBackend();
						refreshDocuments();
					},
					className: "rounded-xl border border-border bg-background/60 p-2 hover:bg-secondary",
					title: "Refresh backend and uploads",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `size-4 ${checking || loadingDocuments ? "animate-spin" : ""}` })
				})]
			})
		}),
		!backendHealth && !checking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center gap-3 rounded-2xl border border-warning/30 bg-warning/10 p-4 text-sm text-warning",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-5 shrink-0" }), " Start the Python backend to process selected uploads. Uploads already saved in My Documents will remain there."]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-4 xl:grid-cols-[0.95fr_1.4fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "!p-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/60 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-bold",
						children: "Saved uploads"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Select saved files to process or reprocess. Nothing routes before you start."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => void refreshDocuments(),
						className: "rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground",
						"aria-label": "Refresh saved uploads",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `size-4 ${loadingDocuments ? "animate-spin" : ""}` })
					})]
				}), loadingDocuments ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-2 py-12 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Loading saved files…"]
				}) : pendingDocuments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "mx-auto size-9 text-muted-foreground/50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold",
							children: "No uploads waiting for processing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Upload a file first. It will appear here without being processed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard/upload",
							className: "mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5" }), " Go to Upload"]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[460px] divide-y divide-border/50 overflow-y-auto",
					children: pendingDocuments.map((doc) => {
						const selected = selectedIds.includes(doc.id);
						const busy = processingId === doc.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: `flex cursor-pointer items-start gap-3 px-5 py-4 transition ${selected ? "bg-primary/[0.06]" : "hover:bg-secondary/30"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: selected,
									disabled: Boolean(processingId),
									onChange: () => toggleSelected(doc.id),
									className: "mt-1 size-4 accent-primary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-semibold",
											children: doc.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: [
												doc.size,
												" · ",
												doc.date
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground",
											children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : doc.status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3 text-destructive" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-3" }), busy ? "Running backend agents…" : doc.status === "error" ? "Previous run failed · retry available" : doc.status === "uploaded" ? "Saved · waiting for you to start" : `Status: ${doc.status} · select to reprocess`]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/dashboard/document/$docId",
									params: { docId: doc.id },
									onClick: (event) => event.stopPropagation(),
									className: "text-[11px] font-semibold text-primary hover:underline",
									children: "Details"
								})
							]
						}, doc.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-t border-border/60 bg-secondary/20 px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedIds(selectedIds.length === pendingDocuments.length ? [] : pendingDocuments.map((doc) => doc.id)),
							disabled: Boolean(processingId),
							className: "text-xs font-semibold text-primary hover:underline disabled:opacity-50",
							children: selectedIds.length === pendingDocuments.length ? "Clear selection" : "Select all"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [selectedIds.length, " selected"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => void processSelected(),
							disabled: !backendHealth || processingId !== null || selectedIds.length === 0,
							className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50",
							children: processingId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Processing…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4" }), " Process selected"] })
						})
					]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-bold",
						children: "Five-agent pipeline"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Runs only after you select files and press Process selected."
					})] }), processingId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }),
							" Processing ",
							documents.find((doc) => doc.id === processingId)?.name || "file"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-5",
					children: agentStages.map((agent, index) => {
						const Icon = agent.icon;
						const done = completedStages.has(agent.key);
						const busy = Boolean(processingId) && !completedStages.has(agent.key);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative rounded-xl border p-3 text-center ${done ? "border-success/30 bg-success/5" : busy ? "border-primary/30 bg-primary/5" : "border-border bg-background/50"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `mx-auto grid size-9 place-items-center rounded-xl ${done ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"}`,
									children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : busy && index === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[11px] font-semibold",
									children: agent.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[10px] text-muted-foreground",
									children: done ? "Complete" : busy ? "Backend running" : "Waiting"
								})
							]
						}, agent.key);
					})
				})] }), activeDocument ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3 border-b border-border/60 pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-10 place-items-center rounded-xl bg-success/10 text-success",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: activeDocument.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [
										activeDocument.cat,
										" · ",
										activeDocument.conf,
										"% confidence · ",
										activeDocument.status
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: ["Routed to ", activeDocument.folder]
								})
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard/document/$docId",
							params: { docId: activeDocument.id },
							className: "text-xs font-semibold text-primary hover:underline",
							children: "View document"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 pt-4 lg:grid-cols-2",
						children: agentStages.map((agent) => {
							const agentLogs = logs[agent.key] || [];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/70 bg-background/50 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold",
										children: agent.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] text-muted-foreground",
										children: [agentLogs.length, " backend log(s)"]
									})]
								}), agentLogs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-1.5",
									children: agentLogs.map((log, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2 text-[11px] leading-relaxed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-muted-foreground",
											children: log.time
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: log.tone === "ok" ? "text-success" : log.tone === "warn" ? "text-warning" : "text-foreground/80",
											children: log.text
										})]
									}, `${agent.key}-${index}`))
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "No logs returned by this agent."
								})]
							}, agent.key);
						})
					}),
					activeDocument.timeline.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 border-t border-border/60 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-xs font-bold",
							children: "Processing timeline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: activeDocument.timeline.map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-3.5 shrink-0 text-success" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium",
										children: [event.agent, ":"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: event.detail
									})
								]
							}, `${event.agent}-${index}`))
						})]
					}),
					activeDocument.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 rounded-xl bg-secondary/40 p-3 text-xs text-muted-foreground",
						children: activeDocument.summary
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "grid min-h-64 place-items-center text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderTree, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold",
							children: "Choose a saved upload to begin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-sm text-xs text-muted-foreground",
							children: "Files are stored in the database first. Agent processing and folder routing happen only when you start the selected files above."
						})
					] })
				})]
			})]
		})
	] });
}
//#endregion
export { ProcessingCenter as component };
