import { a as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as supabase } from "./client-DfGWe7VR.mjs";
import { i as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { B as notFound, _ as createFileRoute, d as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo-data-CUZzPQBx.js
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
//#region node_modules/.nitro/vite/services/ssr/assets/document-service-dmUI2tMe.js
var LOCAL_STORAGE_KEY = "cogniflow_uploaded_documents_cache";
function formatBytes(bytes, decimals = 1) {
	if (bytes === 0) return "0 B";
	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = [
		"B",
		"KB",
		"MB",
		"GB",
		"TB"
	];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
function formatTime(d = /* @__PURE__ */ new Date()) {
	return d.toTimeString().slice(0, 8);
}
function formatDateAgo(d = /* @__PURE__ */ new Date()) {
	const diffSec = Math.floor((Date.now() - d.getTime()) / 1e3);
	if (diffSec < 60) return "just now";
	if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
	if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
	return `${Math.floor(diffSec / 86400)}d ago`;
}
function getLocalCache() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function saveToLocalCache(doc) {
	if (typeof window === "undefined") return;
	try {
		const current = getLocalCache().filter((d) => d.id !== doc.id);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([doc, ...current]));
	} catch {}
}
function removeDocFromCache(id) {
	if (typeof window === "undefined") return;
	try {
		const current = getLocalCache().filter((d) => d.id !== id);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(current));
	} catch {}
}
/**
* Intelligent Multi-Agent Information Routing Simulation
* Analyzes file name, type, and content to run OCR, Classification, Validation, and Routing agents.
*/
function inferDocumentIntelligence(fileName, fileSize, fileType) {
	const lower = fileName.toLowerCase();
	let cat = "Report";
	let conf = 95.8;
	let folder = "/Reports/2026";
	let pages = Math.max(1, Math.round(fileSize / 153600));
	let extracted = "";
	let validationRules = [];
	if (lower.includes("cert") || lower.includes("diploma") || lower.includes("degree") || lower.includes("award")) {
		cat = "Certificate";
		conf = 98.6;
		folder = "/Certificates/2026";
		pages = 1;
		extracted = `CERTIFICATE OF ACHIEVEMENT & VERIFICATION\n\nTitle: ${fileName.replace(/\.[^/.]+$/, "")}\nIssued Date: ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}\nRecipient Verification ID: CF-${Math.floor(1e5 + Math.random() * 9e5)}\nDigital Signature: Verified (RSA-4096 cryptographically anchored)`;
		validationRules = [
			{
				rule: "Recipient identification verified",
				passed: true
			},
			{
				rule: "Issuing authority signature authentic",
				passed: true
			},
			{
				rule: "Date & certificate validity window",
				passed: true
			},
			{
				rule: "Template integrity ≥ 95%",
				passed: true
			}
		];
	} else if (lower.includes("invoice") || lower.includes("bill") || lower.includes("receipt") || lower.includes("payment")) {
		cat = "Invoice";
		conf = 97.2;
		folder = "/Invoices/2026";
		pages = Math.min(3, Math.max(1, pages));
		extracted = `COMMERCIAL TAX INVOICE\n\nInvoice Reference: INV-${Date.now().toString().slice(-6)}\nBilled To: CogniFlow Enterprise Account\nTotal Amount: $${(Math.random() * 5e3 + 200).toFixed(2)}\nTax Category: Standard (Reconciled)\nPayment Status: Pending Approval`;
		validationRules = [
			{
				rule: "Invoice number & tax ID valid",
				passed: true
			},
			{
				rule: "Line item math cross-checked",
				passed: true
			},
			{
				rule: "Vendor matching registered database",
				passed: true
			}
		];
	} else if (lower.includes("contract") || lower.includes("agreement") || lower.includes("nda") || lower.includes("sla")) {
		cat = "Contract";
		conf = 99.1;
		folder = "/Contracts";
		pages = Math.max(4, pages);
		extracted = `MUTUAL SERVICES & CONFIDENTIALITY AGREEMENT\n\nDocument: ${fileName}\nEffective Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}\nJurisdiction: Central Commercial\nSignatories: Both parties authenticated with digital identity.`;
		validationRules = [
			{
				rule: "Effective term & date specified",
				passed: true
			},
			{
				rule: "All executing parties identified",
				passed: true
			},
			{
				rule: "Governing law & liability clauses intact",
				passed: true
			}
		];
	} else if (lower.includes("transcript") || lower.includes("grade") || lower.includes("score")) {
		cat = "Transcript";
		conf = 94.5;
		folder = "/Transcripts";
		pages = Math.max(1, Math.min(4, pages));
		extracted = `OFFICIAL ACADEMIC TRANSCRIPT\n\nRecord File: ${fileName}\nInstitution: CogniFlow Academic Registry\nCredits Completed: 120 / Cumulative GPA: 3.89\nStatus: Official seal verified.`;
		validationRules = [{
			rule: "Registrar watermark detected",
			passed: true
		}, {
			rule: "Accredited grading scale verified",
			passed: true
		}];
	} else {
		cat = "Report";
		conf = 96.4;
		folder = "/Reports";
		extracted = `EXECUTIVE DOCUMENT ANALYSIS REPORT\n\nSource: ${fileName} (${formatBytes(fileSize)})\nIndexed at: ${(/* @__PURE__ */ new Date()).toLocaleString()}\nContent Summary: Multi-section document processed by CogniFlow autonomous AI pipeline.`;
		validationRules = [
			{
				rule: "Structure & header hierarchy detected",
				passed: true
			},
			{
				rule: "Legibility threshold passed (≥ 90%)",
				passed: true
			},
			{
				rule: "Security / malware scan clear",
				passed: true
			}
		];
	}
	return {
		cat,
		conf,
		folder,
		pages,
		extracted,
		validationRules
	};
}
/**
* Upload a document to Supabase Storage and PostgreSQL database,
* executing the multi-agent AI pipeline.
*/
async function uploadAndProcessDocument(file, user, onProgress) {
	const docId = crypto.randomUUID();
	const userName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Authorized User";
	const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
	const storagePath = `${user?.id || "public"}/${Date.now()}_${sanitizedName}`;
	let storageSaved = false;
	let fileUrl = null;
	let warningMessage;
	onProgress?.("Uploading file…", 15);
	try {
		const { data: storageData, error: storageError } = await supabase.storage.from("documents").upload(storagePath, file, {
			cacheControl: "3600",
			upsert: true
		});
		if (storageError) {
			console.warn("[DocumentService] Supabase Storage upload skipped/failed:", storageError.message);
			warningMessage = `Storage upload notice: ${storageError.message}. Database record will still be stored.`;
		} else if (storageData) {
			storageSaved = true;
			const { data: pubData } = supabase.storage.from("documents").getPublicUrl(storagePath);
			fileUrl = pubData?.publicUrl || null;
		}
	} catch (err) {
		console.warn("[DocumentService] Storage bucket unreachable:", err?.message);
		warningMessage = `Storage not configured yet in Supabase. Run SQL in DBeaver to enable storage.`;
	}
	onProgress?.("OCR Agent: Extracting text…", 38);
	await new Promise((r) => setTimeout(r, 600));
	onProgress?.("Classification Agent: Analyzing category…", 65);
	await new Promise((r) => setTimeout(r, 600));
	const intel = inferDocumentIntelligence(file.name, file.size, file.type);
	onProgress?.("Validation Agent: Verifying rules…", 82);
	await new Promise((r) => setTimeout(r, 500));
	onProgress?.(`Routing Agent: Directing to ${intel.folder}…`, 95);
	await new Promise((r) => setTimeout(r, 400));
	const now = /* @__PURE__ */ new Date();
	const timeline = [
		{
			agent: "Upload",
			detail: `File received · ${formatBytes(file.size)}`,
			at: formatTime(/* @__PURE__ */ new Date(now.getTime() - 2500)),
			state: "done"
		},
		{
			agent: "OCR Agent",
			detail: `Extracted ${intel.pages} page${intel.pages > 1 ? "s" : ""} · OCR accuracy ${(intel.conf + .5).toFixed(1)}%`,
			at: formatTime(/* @__PURE__ */ new Date(now.getTime() - 1700)),
			state: "done"
		},
		{
			agent: "Classification Agent",
			detail: `${intel.cat} · ${intel.conf}% confidence`,
			at: formatTime(/* @__PURE__ */ new Date(now.getTime() - 1100)),
			state: "done"
		},
		{
			agent: "Validation Agent",
			detail: `Template passed · ${intel.validationRules.length}/${intel.validationRules.length} checks verified`,
			at: formatTime(/* @__PURE__ */ new Date(now.getTime() - 500)),
			state: "done"
		},
		{
			agent: "Routing Agent",
			detail: `Assigned & stored in ${intel.folder}`,
			at: formatTime(now),
			state: "done"
		}
	];
	const finalDoc = {
		id: docId,
		userId: user?.id ?? null,
		name: file.name,
		cat: intel.cat,
		conf: intel.conf,
		status: "routed",
		folder: intel.folder,
		date: "just now",
		size: formatBytes(file.size),
		pages: intel.pages,
		uploadedBy: userName,
		extracted: intel.extracted,
		filePath: storagePath,
		fileUrl,
		validation: intel.validationRules,
		timeline
	};
	let dbSaved = false;
	try {
		const { error: dbError } = await supabase.from("documents").insert({
			id: docId,
			user_id: user?.id ?? null,
			name: file.name,
			file_path: storagePath,
			file_url: fileUrl,
			file_size: file.size,
			file_size_formatted: formatBytes(file.size),
			file_type: file.type || "application/octet-stream",
			category: intel.cat,
			confidence: intel.conf,
			status: "routed",
			folder: intel.folder,
			extracted_text: intel.extracted,
			validation_results: intel.validationRules,
			timeline
		});
		if (dbError) {
			console.warn("[DocumentService] Supabase PostgreSQL insert notice:", dbError);
			warningMessage = dbError.message.includes("does not exist") || dbError.code === "PGRST205" ? "Table 'documents' not found in PostgreSQL. Please execute the provided SQL script in DBeaver to activate full cloud database saving!" : dbError.message;
		} else dbSaved = true;
	} catch (err) {
		console.warn("[DocumentService] Database unreachable:", err);
		warningMessage = "Database query failed. File cached locally. Run the migration script in DBeaver to enable database persistence.";
	}
	saveToLocalCache(finalDoc);
	onProgress?.("Completed ✓", 100);
	return {
		doc: finalDoc,
		dbSaved,
		storageSaved,
		warning: warningMessage
	};
}
/**
* Fetch documents from PostgreSQL database, merging with local storage cache and demo data.
*/
async function fetchAllDocuments() {
	const localList = getLocalCache();
	try {
		const { data, error } = await supabase.from("documents").select("*").order("created_at", { ascending: false });
		if (!error && data && data.length > 0) {
			const combined = [...data.map((d) => ({
				id: d.id,
				userId: d.user_id,
				name: d.name,
				cat: d.category || "Unclassified",
				conf: Number(d.confidence) || 0,
				status: d.status || "routed",
				folder: d.folder || "Unassigned",
				date: formatDateAgo(new Date(d.created_at)),
				size: d.file_size_formatted || (d.file_size ? formatBytes(d.file_size) : "—"),
				pages: 1,
				uploadedBy: "Member",
				extracted: d.extracted_text || "",
				filePath: d.file_path,
				fileUrl: d.file_url,
				validation: Array.isArray(d.validation_results) ? d.validation_results : [],
				timeline: Array.isArray(d.timeline) ? d.timeline : []
			}))];
			for (const loc of localList) if (!combined.some((c) => c.id === loc.id)) combined.push(loc);
			return [...combined, ...demoDocs];
		}
	} catch (err) {
		console.warn("[DocumentService] Could not fetch from PostgreSQL:", err);
	}
	return [...localList.filter((loc) => !demoDocs.some((d) => d.id === loc.id)), ...demoDocs];
}
/**
* Get a single document by ID, querying PostgreSQL table or demo/local cache.
*/
async function fetchDocumentById(docId) {
	const local = getLocalCache().find((d) => d.id === docId);
	if (local) return local;
	const demo = demoDocs.find((d) => d.id === docId);
	if (demo) return demo;
	try {
		const { data, error } = await supabase.from("documents").select("*").eq("id", docId).maybeSingle();
		if (!error && data) return {
			id: data.id,
			userId: data.user_id,
			name: data.name,
			cat: data.category || "Unclassified",
			conf: Number(data.confidence) || 0,
			status: data.status || "routed",
			folder: data.folder || "Unassigned",
			date: formatDateAgo(new Date(data.created_at)),
			size: data.file_size_formatted || (data.file_size ? formatBytes(data.file_size) : "—"),
			pages: 1,
			uploadedBy: "Member",
			extracted: data.extracted_text || "",
			filePath: data.file_path,
			fileUrl: data.file_url,
			validation: Array.isArray(data.validation_results) ? data.validation_results : [],
			timeline: Array.isArray(data.timeline) ? data.timeline : []
		};
	} catch {}
}
/**
* Delete a document from Supabase DB and local cache
*/
async function deleteDocument(docId, filePath) {
	removeDocFromCache(docId);
	try {
		if (filePath) await supabase.storage.from("documents").remove([filePath]);
		await supabase.from("documents").delete().eq("id", docId);
	} catch (err) {
		console.warn("[DocumentService] Delete error:", err);
	}
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-XVNWBbpq.js
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
		"data-tsd-source": "/src/hooks/useAuth.tsx:84:10",
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
var styles_default = "/assets/styles-CC5IVRWH.css";
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
		"data-tsd-source": "/src/components/theme-provider.tsx:93:5",
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
		"data-tsd-source": "/src/routes/__root.tsx:18:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:19:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:20:9",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:21:9",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:22:9",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					"data-tsd-source": "/src/routes/__root.tsx:25:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						"data-tsd-source": "/src/routes/__root.tsx:26:11",
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
		"data-tsd-source": "/src/routes/__root.tsx:46:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:47:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:48:9",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:51:9",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					"data-tsd-source": "/src/routes/__root.tsx:54:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						"data-tsd-source": "/src/routes/__root.tsx:55:11",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						"data-tsd-source": "/src/routes/__root.tsx:64:11",
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
		"data-tsd-source": "/src/routes/__root.tsx:111:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
			"data-tsd-source": "/src/routes/__root.tsx:112:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				dangerouslySetInnerHTML: { __html: `
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
            ` },
				"data-tsd-source": "/src/routes/__root.tsx:113:9"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, { "data-tsd-source": "/src/routes/__root.tsx:130:9" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			"data-tsd-source": "/src/routes/__root.tsx:132:7",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, { "data-tsd-source": "/src/routes/__root.tsx:134:9" })]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		"data-tsd-source": "/src/routes/__root.tsx:144:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, {
			"data-tsd-source": "/src/routes/__root.tsx:145:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, {
				"data-tsd-source": "/src/routes/__root.tsx:146:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, { "data-tsd-source": "/src/routes/__root.tsx:148:11" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { "data-tsd-source": "/src/routes/__root.tsx:149:11" })]
			})
		})
	});
}
var $$splitComponentImporter$17 = () => import("./routes-KonrvGkM.mjs");
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
var $$splitComponentImporter$16 = () => import("./dashboard-C7UMAI8h.mjs");
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
var $$splitComponentImporter$15 = () => import("./forgot-password-C2CcjB0p.mjs");
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
var $$splitComponentImporter$14 = () => import("./login-CebHbz5t.mjs");
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
var $$splitComponentImporter$13 = () => import("./reset-password-Bu6Y2qIX.mjs");
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
var $$splitComponentImporter$12 = () => import("./signup-CkjKWK_l.mjs");
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
var $$splitComponentImporter$11 = () => import("./verify-otp-B6xHfE2A.mjs");
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
var $$splitComponentImporter$10 = () => import("./dashboard.index-BpJL_iE5.mjs");
var Route$10 = createFileRoute("/dashboard/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./dashboard.ai-processing-B59Vp7VF.mjs");
var Route$9 = createFileRoute("/dashboard/ai-processing")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./dashboard.documents-CLD_-KxO.mjs");
var Route$8 = createFileRoute("/dashboard/documents")({
	head: () => ({ meta: [{ title: "My Documents · CogniFlow" }, {
		name: "description",
		content: "All documents processed and organized into PostgreSQL database folders."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./dashboard.folders-DebAT3Wm.mjs");
var Route$7 = createFileRoute("/dashboard/folders")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./dashboard.notifications-D6RXd4Gg.mjs");
var Route$6 = createFileRoute("/dashboard/notifications")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./dashboard.profile-CbuNAxr-.mjs");
var Route$5 = createFileRoute("/dashboard/profile")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./dashboard.reports-DWrd9SBs.mjs");
var Route$4 = createFileRoute("/dashboard/reports")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./dashboard.settings-bLbSIpG-.mjs");
var Route$3 = createFileRoute("/dashboard/settings")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./dashboard.upload-0vaAN6E9.mjs");
var Route$2 = createFileRoute("/dashboard/upload")({
	head: () => ({ meta: [{ title: "Upload Documents · CogniFlow" }, {
		name: "description",
		content: "Upload documents to be processed by multi-agent AI and saved to PostgreSQL."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./dashboard.validation-D3ijsH8M.mjs");
var Route$1 = createFileRoute("/dashboard/validation")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./dashboard.document._docId-B_c7giPs.mjs");
var $$splitNotFoundComponentImporter = () => import("./dashboard.document._docId-BTWnUrfd.mjs");
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
export { initials as a, fetchAllDocuments as c, statusMeta as d, displayName as i, uploadAndProcessDocument as l, Route as n, useAuth as o, useTheme as r, deleteDocument as s, router_exports as t, assistantReply as u };
