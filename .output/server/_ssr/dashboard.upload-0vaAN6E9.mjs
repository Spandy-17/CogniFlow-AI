import { a as __toESM } from "../_runtime.mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as supabase } from "./client-DfGWe7VR.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { l as uploadAndProcessDocument, o as useAuth } from "./router-XVNWBbpq.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { St as ArrowRight, ct as CircleCheck, et as Database, h as ShieldCheck, lt as CircleAlert, mt as Check, n as X, nt as Copy, q as FileText, rt as CloudUpload, tt as Cpu, x as RefreshCw } from "../_libs/lucide-react.mjs";
import { r as PageHeader, t as Card } from "./DashboardShell-B1_2tSzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.upload-0vaAN6E9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SQL_MIGRATION = `-- CogniFlow-AI Database Schema
-- Execute this in DBeaver 26.3 SQL Editor to create table & storage

CREATE TABLE IF NOT EXISTS public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  file_path TEXT,
  file_url TEXT,
  file_size BIGINT,
  file_size_formatted TEXT,
  file_type TEXT,
  category TEXT DEFAULT 'Unclassified',
  confidence NUMERIC DEFAULT 0,
  status TEXT DEFAULT 'uploaded',
  folder TEXT DEFAULT 'Unassigned',
  extracted_text TEXT,
  validation_results JSONB DEFAULT '[]'::jsonb,
  timeline JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow select for all" ON public.documents FOR SELECT USING (true);
CREATE POLICY "Allow insert for all" ON public.documents FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update for all" ON public.documents FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Allow delete for all" ON public.documents FOR DELETE USING (true);

GRANT ALL ON TABLE public.documents TO anon, authenticated, service_role;

INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', true)
ON CONFLICT (id) DO UPDATE SET public = true;

CREATE POLICY "Allow public uploads to documents bucket" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'documents');
CREATE POLICY "Allow public read from documents bucket" ON storage.objects FOR SELECT USING (bucket_id = 'documents');

NOTIFY pgrst, 'reload schema';`;
function UploadPage() {
	const { user } = useAuth();
	const [items, setItems] = (0, import_react.useState)([]);
	const [drag, setDrag] = (0, import_react.useState)(false);
	const [showDbGuide, setShowDbGuide] = (0, import_react.useState)(false);
	const [copiedSql, setCopiedSql] = (0, import_react.useState)(false);
	const [dbStatus, setDbStatus] = (0, import_react.useState)("checking");
	const ref = (0, import_react.useRef)(null);
	const checkDatabaseConnection = async () => {
		setDbStatus("checking");
		try {
			const { error } = await supabase.from("documents").select("id").limit(1);
			if (error && (error.code === "PGRST205" || error.message.includes("does not exist"))) setDbStatus("needs_migration");
			else setDbStatus("connected");
		} catch {
			setDbStatus("needs_migration");
		}
	};
	(0, import_react.useEffect)(() => {
		checkDatabaseConnection();
	}, []);
	const handleCopySql = async () => {
		try {
			await navigator.clipboard.writeText(SQL_MIGRATION);
			setCopiedSql(true);
			toast.success("SQL copied! Paste and run it in DBeaver 26.3");
			setTimeout(() => setCopiedSql(false), 3e3);
		} catch {
			toast.error("Failed to copy to clipboard");
		}
	};
	const handleFiles = async (files) => {
		if (!files || files.length === 0) return;
		const fileArray = Array.from(files);
		for (const f of fileArray) {
			const tempId = crypto.randomUUID();
			const fileSize = (f.size / 1024 / 1024).toFixed(1) + " MB";
			setItems((prev) => [{
				id: tempId,
				name: f.name,
				size: fileSize,
				progress: 5,
				stage: "Uploading to cloud storage…",
				status: "uploading"
			}, ...prev]);
			try {
				const result = await uploadAndProcessDocument(f, user, (stageName, percent) => {
					setItems((prev) => prev.map((it) => it.id === tempId ? {
						...it,
						progress: percent,
						stage: stageName,
						status: percent >= 100 ? "done" : percent >= 30 ? "processing" : "uploading"
					} : it));
				});
				setItems((prev) => prev.map((it) => it.id === tempId ? {
					...it,
					id: result.doc.id,
					progress: 100,
					stage: `Routed to ${result.doc.folder} ✓`,
					status: "done",
					doc: result.doc,
					dbSaved: result.dbSaved
				} : it));
				if (result.dbSaved) toast.success(`"${f.name}" saved in PostgreSQL & routed to ${result.doc.folder}`);
				else toast.info(`"${f.name}" routed! (Saved locally. Run SQL in DBeaver to enable cloud DB sync)`);
			} catch (err) {
				setItems((prev) => prev.map((it) => it.id === tempId ? {
					...it,
					status: "error",
					error: err?.message || "Upload failed",
					stage: "Failed"
				} : it));
				toast.error(`Upload error: ${err?.message || "Unknown error"}`);
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Upload documents",
			subtitle: "Auto-extract, classify, validate, and store documents into PostgreSQL database.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setShowDbGuide((v) => !v),
					className: `inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition ${dbStatus === "connected" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "border-warning/40 bg-warning/10 text-warning hover:bg-warning/20"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-3.5" }),
						dbStatus === "checking" && "Checking DB…",
						dbStatus === "connected" && "PostgreSQL Connected ✓",
						dbStatus === "needs_migration" && "DBeaver Setup Guide"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard/documents",
					className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-xs font-medium hover:bg-secondary transition",
					children: ["View All Documents ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				})]
			}),
			"data-tsd-source": "/src/routes/dashboard.upload.tsx:196:7"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			"data-tsd-source": "/src/routes/dashboard.upload.tsx:225:7",
			children: showDbGuide && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					height: 0
				},
				animate: {
					opacity: 1,
					height: "auto"
				},
				exit: {
					opacity: 0,
					height: 0
				},
				className: "mb-6 overflow-hidden",
				"data-tsd-source": "/src/routes/dashboard.upload.tsx:227:11",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "border border-border/80 bg-secondary/30 p-5",
					"data-tsd-source": "/src/routes/dashboard.upload.tsx:233:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						"data-tsd-source": "/src/routes/dashboard.upload.tsx:234:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/dashboard.upload.tsx:235:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:236:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
									className: "size-5 text-primary",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:237:21"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-base font-semibold",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:238:21",
									children: "PostgreSQL & DBeaver Database Setup"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:240:19",
								children: [
									"Your cloud PostgreSQL credentials from ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "rounded bg-muted px-1.5 py-0.5 text-xs text-foreground",
										"data-tsd-source": "/src/routes/dashboard.upload.tsx:241:60",
										children: ".env"
									}),
									" are linked. Run this SQL script in DBeaver 26.3 to create the ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "rounded bg-muted px-1.5 py-0.5 text-xs text-foreground",
										"data-tsd-source": "/src/routes/dashboard.upload.tsx:242:71",
										children: "documents"
									}),
									" table and storage bucket."
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							"data-tsd-source": "/src/routes/dashboard.upload.tsx:245:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: checkDatabaseConnection,
								className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:bg-secondary",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:246:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
									className: "size-3",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:250:21"
								}), " Re-check Table"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleCopySql,
								className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm hover:opacity-90",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:252:19",
								children: [copiedSql ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-3.5 text-white",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:256:34"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
									className: "size-3.5 text-white",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:256:78"
								}), copiedSql ? "Copied!" : "Copy SQL for DBeaver"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 relative rounded-xl border border-border bg-background/80 p-3 font-mono text-[11px] text-muted-foreground",
						"data-tsd-source": "/src/routes/dashboard.upload.tsx:262:15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "max-h-40 overflow-y-auto whitespace-pre-wrap",
							"data-tsd-source": "/src/routes/dashboard.upload.tsx:263:17",
							children: SQL_MIGRATION
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "!p-0 overflow-hidden border border-border/70",
			"data-tsd-source": "/src/routes/dashboard.upload.tsx:271:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onDragOver: (e) => {
					e.preventDefault();
					setDrag(true);
				},
				onDragLeave: () => setDrag(false),
				onDrop: (e) => {
					e.preventDefault();
					setDrag(false);
					handleFiles(e.dataTransfer.files);
				},
				onClick: () => ref.current?.click(),
				className: `relative m-4 grid cursor-pointer place-items-center rounded-2xl border-2 border-dashed py-14 text-center transition-all ${drag ? "border-primary bg-primary/10 scale-[0.99]" : "border-border/80 bg-background/50 hover:bg-secondary/40"}`,
				"data-tsd-source": "/src/routes/dashboard.upload.tsx:272:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref,
						type: "file",
						multiple: true,
						accept: ".pdf,.docx,.doc,.png,.jpg,.jpeg,.xlsx,.txt",
						hidden: true,
						onChange: (e) => handleFiles(e.target.files),
						"data-tsd-source": "/src/routes/dashboard.upload.tsx:288:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: { y: drag ? -4 : 0 },
						className: "grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-glow",
						"data-tsd-source": "/src/routes/dashboard.upload.tsx:297:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, {
							className: "size-8",
							"data-tsd-source": "/src/routes/dashboard.upload.tsx:301:13"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg font-semibold text-foreground",
						"data-tsd-source": "/src/routes/dashboard.upload.tsx:304:11",
						children: "Click to upload or drag & drop files here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						"data-tsd-source": "/src/routes/dashboard.upload.tsx:305:11",
						children: "Supports PDF, DOCX, PNG, JPG, JPEG, XLSX up to 50 MB"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-center justify-center gap-2",
						"data-tsd-source": "/src/routes/dashboard.upload.tsx:309:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:310:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
									className: "size-3.5",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:311:15"
								}), " AI Multi-Agent Pipeline"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:313:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
									className: "size-3.5",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:314:15"
								}), " Cloud PostgreSQL Storage"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:316:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "size-3.5",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:317:15"
								}), " Rule Validation"]
							})
						]
					})
				]
			})
		}),
		items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-3",
			"data-tsd-source": "/src/routes/dashboard.upload.tsx:325:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-1",
				"data-tsd-source": "/src/routes/dashboard.upload.tsx:326:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-semibold text-foreground",
					"data-tsd-source": "/src/routes/dashboard.upload.tsx:327:13",
					children: [
						"Uploaded Documents (",
						items.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setItems([]),
					className: "text-xs text-muted-foreground hover:text-destructive transition",
					"data-tsd-source": "/src/routes/dashboard.upload.tsx:328:13",
					children: "Clear list"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				"data-tsd-source": "/src/routes/dashboard.upload.tsx:336:11",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					layout: true,
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .95
					},
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl glass-strong p-4 border border-border/60 transition hover:border-primary/30",
					"data-tsd-source": "/src/routes/dashboard.upload.tsx:338:15",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 min-w-0 flex-1",
						"data-tsd-source": "/src/routes/dashboard.upload.tsx:346:17",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-1/15 to-brand-2/15 text-primary border border-primary/20",
							"data-tsd-source": "/src/routes/dashboard.upload.tsx:347:19",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "size-5",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:348:21"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							"data-tsd-source": "/src/routes/dashboard.upload.tsx:351:19",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:352:21",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-semibold",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:353:23",
									children: it.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground shrink-0",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:354:23",
									children: it.size
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-3",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:357:21",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 flex-1 overflow-hidden rounded-full bg-muted",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:358:23",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2",
										animate: { width: `${it.progress}%` },
										transition: { duration: .3 },
										"data-tsd-source": "/src/routes/dashboard.upload.tsx:359:25"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-muted-foreground w-44 text-right truncate",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:365:23",
									children: it.stage
								})]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 self-end sm:self-center shrink-0",
						"data-tsd-source": "/src/routes/dashboard.upload.tsx:372:17",
						children: [
							it.status === "done" && it.doc && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:374:21",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-success/15 px-2.5 py-1 text-xs font-medium text-success",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:375:23",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											className: "size-3.5",
											"data-tsd-source": "/src/routes/dashboard.upload.tsx:376:25"
										}),
										" ",
										it.doc.cat
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/dashboard/document/$docId",
									params: { docId: it.doc.id },
									className: "inline-flex items-center gap-1 rounded-xl bg-primary/10 hover:bg-primary/20 px-3 py-1 text-xs font-medium text-primary transition",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:378:23",
									children: ["Inspect ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-3",
										"data-tsd-source": "/src/routes/dashboard.upload.tsx:383:33"
									})]
								})]
							}),
							it.status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-xs font-medium text-destructive",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:389:21",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
									className: "size-3.5",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:390:23"
								}), " Failed"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setItems((p) => p.filter((x) => x.id !== it.id)),
								className: "p-1 text-muted-foreground hover:text-destructive rounded-lg hover:bg-secondary transition",
								"data-tsd-source": "/src/routes/dashboard.upload.tsx:394:19",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-4",
									"data-tsd-source": "/src/routes/dashboard.upload.tsx:398:21"
								})
							})
						]
					})]
				}, it.id))
			})]
		})
	] });
}
//#endregion
export { UploadPage as component };
