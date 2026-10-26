import { r as __exportAll } from "../_runtime.mjs";
import { t as __exportAll$1 } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as supabase } from "./client-qPf06kmW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/document-service-drZtwzY8.js
var document_service_drZtwzY8_exports = /* @__PURE__ */ __exportAll({
	a: () => processSavedDocument,
	i: () => fetchDocumentById,
	n: () => document_service_exports,
	o: () => saveUploadedDocument,
	r: () => fetchAllDocuments,
	s: () => checkBackendHealth,
	t: () => deleteDocument
});
var PYTHON_BACKEND_URL = typeof window !== "undefined" ? window.__COGNIFLOW_BACKEND_URL__ || "http://127.0.0.1:5000" : "http://127.0.0.1:5000";
async function checkBackendHealth() {
	try {
		const response = await fetch(`${PYTHON_BACKEND_URL}/api/health`, {
			method: "GET",
			signal: AbortSignal.timeout(3e3)
		});
		if (!response.ok) throw new Error(`HTTP ${response.status}`);
		return {
			ok: true,
			data: await response.json()
		};
	} catch (error) {
		return {
			ok: false,
			error: error instanceof Error ? error.message : "Failed to reach the Python backend."
		};
	}
}
var document_service_exports = /* @__PURE__ */ __exportAll$1({
	deleteDocument: () => deleteDocument,
	fetchAllDocuments: () => fetchAllDocuments,
	fetchDocumentById: () => fetchDocumentById,
	processSavedDocument: () => processSavedDocument,
	saveUploadedDocument: () => saveUploadedDocument
});
function formatBytes(bytes, decimals = 1) {
	if (!bytes) return "0 B";
	const k = 1024;
	const sizes = [
		"B",
		"KB",
		"MB",
		"GB",
		"TB"
	];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}
function formatDateAgo(value) {
	const date = new Date(value);
	const seconds = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1e3));
	if (seconds < 60) return "just now";
	if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
	if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
	return `${Math.floor(seconds / 86400)}d ago`;
}
function mapDatabaseDocument(row) {
	return {
		id: row.id,
		userId: row.user_id,
		name: row.name,
		cat: row.category || "Unclassified",
		conf: Number(row.confidence) || 0,
		status: row.status || "uploaded",
		folder: row.folder || "Unassigned",
		date: formatDateAgo(row.created_at),
		size: row.file_size_formatted || (row.file_size ? formatBytes(row.file_size) : "—"),
		pages: 1,
		uploadedBy: "Member",
		extracted: row.extracted_text || "",
		filePath: row.file_path,
		fileUrl: row.file_url,
		validation: Array.isArray(row.validation_results) ? row.validation_results : [],
		timeline: Array.isArray(row.timeline) ? row.timeline : []
	};
}
async function getCurrentUser() {
	const { data, error } = await supabase.auth.getUser();
	if (error) throw new Error(`Could not verify your Supabase session: ${error.message}`);
	if (!data.user) throw new Error("Sign in to view the shared document library.");
	return data.user;
}
function databaseError(action, error) {
	const details = [
		error.message,
		error.code ? `(${error.code})` : "",
		error.hint || ""
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ new Error(`Could not ${action} from Supabase: ${details}`);
}
function sanitizePostgresText(value) {
	let output = "";
	for (let index = 0; index < value.length; index += 1) {
		const code = value.charCodeAt(index);
		if (code === 0 || code < 32 && code !== 9 && code !== 10 && code !== 13) continue;
		if (code >= 55296 && code <= 56319) {
			const next = value.charCodeAt(index + 1);
			if (next >= 56320 && next <= 57343) {
				output += value[index] + value[index + 1];
				index += 1;
			}
			continue;
		}
		if (code >= 56320 && code <= 57343) continue;
		if (code === 65534 || code === 65535) continue;
		output += value[index];
	}
	return output;
}
function sanitizeJsonValue(value) {
	if (typeof value === "string") return sanitizePostgresText(value);
	if (Array.isArray(value)) return value.map(sanitizeJsonValue);
	if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [sanitizePostgresText(key), sanitizeJsonValue(item)]));
	return value;
}
async function addSignedFileUrl(doc, persistForUserId) {
	if (!doc.filePath) return doc;
	const { data } = await supabase.storage.from("documents").createSignedUrl(doc.filePath, 3600);
	const fileUrl = data?.signedUrl || doc.fileUrl;
	if (data?.signedUrl && doc.fileUrl !== data.signedUrl && persistForUserId && doc.userId === persistForUserId) {
		const { error } = await supabase.from("documents").update({ file_url: data.signedUrl }).eq("id", doc.id).eq("user_id", persistForUserId);
		if (error) console.warn("[DocumentService] Could not backfill file_url:", error.message);
	}
	return {
		...doc,
		fileUrl
	};
}
async function updateProcessingFields(userId, fields) {
	const safeFields = {
		...fields,
		category: sanitizePostgresText(fields.category),
		status: sanitizePostgresText(fields.status),
		folder: sanitizePostgresText(fields.folder),
		extracted_text: sanitizePostgresText(fields.extracted_text),
		validation_results: sanitizeJsonValue(fields.validation_results),
		timeline: sanitizeJsonValue(fields.timeline)
	};
	const rpcResult = await supabase.rpc("complete_document_processing", {
		p_document_id: safeFields.id,
		p_category: safeFields.category,
		p_confidence: safeFields.confidence,
		p_status: safeFields.status,
		p_folder: safeFields.folder,
		p_extracted_text: safeFields.extracted_text,
		p_file_url: safeFields.file_url || null,
		p_validation_results: safeFields.validation_results,
		p_timeline: safeFields.timeline
	});
	if (!rpcResult.error && rpcResult.data) return rpcResult.data;
	const rpcError = rpcResult.error;
	if (!(rpcError?.code === "PGRST202" || rpcError?.message?.includes("complete_document_processing"))) {
		const urlOnlyRecord = await supabase.from("documents").select("id, file_path, file_url").eq("id", safeFields.id).maybeSingle();
		if (!urlOnlyRecord.data?.file_path && urlOnlyRecord.data?.file_url) {} else throw databaseError("save agent processing status", rpcError);
	}
	const { data, error } = await supabase.from("documents").update({
		category: safeFields.category,
		confidence: safeFields.confidence,
		status: safeFields.status,
		folder: safeFields.folder,
		extracted_text: safeFields.extracted_text,
		...safeFields.file_url ? { file_url: safeFields.file_url } : {},
		validation_results: safeFields.validation_results,
		timeline: safeFields.timeline
	}).eq("id", safeFields.id).eq("user_id", userId).select("*").maybeSingle();
	if (error) throw new Error(`Could not save processing results: ${error.message}`);
	if (!data) throw new Error("This saved file belongs to another account. Apply supabase/migrations/20261029_document_processing_rpc.sql in Supabase so authenticated workspace members can save AI processing results.");
	return data;
}
/** Save a user upload and its metadata. AI processing is started separately. */
async function saveUploadedDocument(file, user, onProgress) {
	const currentUser = user || await getCurrentUser();
	const storagePath = `${currentUser.id}/${crypto.randomUUID()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
	onProgress?.("Uploading original file…", 10);
	const { data: stored, error: storageError } = await supabase.storage.from("documents").upload(storagePath, file, {
		cacheControl: "3600",
		upsert: false
	});
	if (storageError || !stored) throw new Error(storageError?.message || "The file could not be saved to storage.");
	const { data: signedUrlData, error: signedUrlError } = await supabase.storage.from("documents").createSignedUrl(storagePath, 604800);
	if (signedUrlError) {
		await supabase.storage.from("documents").remove([storagePath]);
		throw new Error(`File uploaded, but its database URL could not be generated: ${signedUrlError.message}`);
	}
	const id = crypto.randomUUID();
	const { data: initialRow, error: initialDbError } = await supabase.from("documents").insert({
		id,
		user_id: currentUser.id,
		name: file.name,
		file_path: storagePath,
		file_url: signedUrlData.signedUrl,
		file_size: file.size,
		file_size_formatted: formatBytes(file.size),
		file_type: file.type || "application/octet-stream",
		category: "Unclassified",
		confidence: 0,
		status: "uploaded",
		folder: "Unassigned",
		extracted_text: "",
		validation_results: [],
		timeline: []
	}).select("*").single();
	if (initialDbError || !initialRow) {
		await supabase.storage.from("documents").remove([storagePath]);
		throw databaseError("save uploaded document", initialDbError || { message: "No document row was returned." });
	}
	onProgress?.("Saved to My Documents · awaiting AI processing", 100);
	return addSignedFileUrl(mapDatabaseDocument(initialRow), currentUser.id);
}
/** Explicitly run one saved upload through the Python agents and persist results. */
async function processSavedDocument(doc) {
	const currentUser = await getCurrentUser();
	let fileBlob = null;
	let storageMessage = "No file path was stored.";
	if (doc.filePath) {
		const download = await supabase.storage.from("documents").download(doc.filePath);
		fileBlob = download.data;
		storageMessage = download.error?.message || storageMessage;
	}
	if (!fileBlob && doc.fileUrl) try {
		const response = await fetch(doc.fileUrl);
		if (response.ok) fileBlob = await response.blob();
		else storageMessage = `File URL returned HTTP ${response.status}.`;
	} catch (error) {
		storageMessage = error instanceof Error ? error.message : storageMessage;
	}
	if (!fileBlob) throw new Error(`Could not read the stored original file: ${storageMessage}`);
	const userName = currentUser.user_metadata?.full_name || currentUser.email?.split("@")[0] || "Member";
	const upload = new File([fileBlob], doc.name, { type: fileBlob.type || "application/octet-stream" });
	const formData = new FormData();
	formData.append("file", upload);
	formData.append("user_name", userName);
	formData.append("user_id", currentUser.id);
	await updateProcessingFields(currentUser.id, {
		id: doc.id,
		category: doc.cat,
		confidence: doc.conf,
		status: "processing",
		folder: doc.folder,
		extracted_text: doc.extracted,
		file_url: doc.fileUrl,
		validation_results: doc.validation,
		timeline: doc.timeline
	});
	try {
		const response = await fetch(`${PYTHON_BACKEND_URL}/api/process`, {
			method: "POST",
			body: formData,
			signal: AbortSignal.timeout(12e4)
		});
		const payload = await response.json().catch(() => ({}));
		if (!response.ok || !payload.document) {
			const stage = payload.stage ? `${payload.stage}: ` : "";
			throw new Error(`${stage}${payload.error || `AI backend failed (${response.status}).`}`);
		}
		const agentDoc = payload.document;
		return {
			...mapDatabaseDocument(await updateProcessingFields(currentUser.id, {
				id: doc.id,
				category: agentDoc.cat || "Unclassified",
				confidence: Number(agentDoc.conf) || 0,
				status: agentDoc.status || "routed",
				folder: agentDoc.folder || "Unassigned",
				extracted_text: agentDoc.extracted || "",
				file_url: doc.fileUrl,
				validation_results: agentDoc.validation || [],
				timeline: agentDoc.timeline || []
			})),
			pages: agentDoc.pages || 1,
			entities: agentDoc.entities || {},
			summary: agentDoc.summary || "",
			metrics: agentDoc.metrics || {},
			logs: agentDoc.logs || {},
			matched_rule: agentDoc.matched_rule || {}
		};
	} catch (error) {
		try {
			await updateProcessingFields(currentUser.id, {
				id: doc.id,
				category: doc.cat,
				confidence: doc.conf,
				status: "error",
				folder: doc.folder,
				extracted_text: doc.extracted,
				file_url: doc.fileUrl,
				validation_results: doc.validation,
				timeline: doc.timeline
			});
		} catch (updateError) {
			console.error("[DocumentService] Could not persist processing failure:", updateError);
		}
		throw error;
	}
}
/** Return all persisted documents visible to authenticated workspace members. */
async function fetchAllDocuments() {
	const user = await getCurrentUser();
	const { data, error } = await supabase.from("documents").select("*").order("created_at", { ascending: false });
	if (error) throw databaseError("load documents", error);
	return Promise.all((data || []).map((row) => addSignedFileUrl(mapDatabaseDocument(row), user.id)));
}
async function fetchDocumentById(docId) {
	const user = await getCurrentUser();
	const { data, error } = await supabase.from("documents").select("*").eq("id", docId).maybeSingle();
	if (error) throw databaseError("load document", error);
	return data ? addSignedFileUrl(mapDatabaseDocument(data), user.id) : void 0;
}
async function deleteDocument(docId, filePath) {
	const user = await getCurrentUser();
	const { error } = await supabase.from("documents").delete().eq("id", docId).eq("user_id", user.id);
	if (error) throw new Error(error.message);
	if (filePath) {
		const { error: storageError } = await supabase.storage.from("documents").remove([filePath]);
		if (storageError) console.warn("[DocumentService] Storage cleanup failed:", storageError.message);
	}
}
//#endregion
export { fetchDocumentById as a, fetchAllDocuments as i, deleteDocument as n, processSavedDocument as o, document_service_drZtwzY8_exports as r, saveUploadedDocument as s, checkBackendHealth as t };
