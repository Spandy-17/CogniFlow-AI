export type DocStatus = "routed" | "review" | "processing" | "rejected";

export type DemoDoc = {
    id: string;
    name: string;
    cat: string;
    conf: number;
    status: DocStatus;
    folder: string;
    date: string;
    size: string;
    pages: number;
    uploadedBy: string;
    extracted: string;
    validation: { rule: string; passed: boolean }[];
    timeline: { agent: string; detail: string; at: string; state: "done" | "active" | "failed" }[];
};

export const demoDocs: DemoDoc[] = [
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
        extracted:
            "CERTIFICATE OF COMPLETION\n\nThis certifies that Ada Lovelace has successfully completed the Advanced Machine Systems programme with distinction on 12 August 2025.\n\nIssued by: Analytical Engine Institute\nCertificate ID: AEI-2025-00412",
        validation: [
            { rule: "Required field: recipient name", passed: true },
            { rule: "Required field: issue date", passed: true },
            { rule: "Signature block detected", passed: true },
            { rule: "Template match ≥ 90%", passed: true },
        ],
        timeline: [
            { agent: "Upload", detail: "File received · 412 KB", at: "12:04:01", state: "done" },
            { agent: "OCR Agent", detail: "Extracted 1 page · 148 tokens", at: "12:04:04", state: "done" },
            { agent: "Classification Agent", detail: "Certificate · 98.4% confidence", at: "12:04:06", state: "done" },
            { agent: "Validation Agent", detail: "Template passed · 4/4 rules", at: "12:04:08", state: "done" },
            { agent: "Routing Agent", detail: "Moved to /Certificates/2025", at: "12:04:09", state: "done" },
        ],
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
        extracted:
            "QUARTERLY REPORT — Q3 2025\n\nSummary: processing throughput increased 24% quarter over quarter with an average routing latency of 28 seconds.\n\nSections: Overview, Throughput, Accuracy, Storage, Roadmap.",
        validation: [
            { rule: "Cover page present", passed: true },
            { rule: "Section headings detected", passed: true },
            { rule: "Fiscal period parsed", passed: true },
        ],
        timeline: [
            { agent: "Upload", detail: "File received · 1.8 MB", at: "11:42:10", state: "done" },
            { agent: "OCR Agent", detail: "Extracted 14 pages", at: "11:42:22", state: "done" },
            { agent: "Classification Agent", detail: "Report · 96.1% confidence", at: "11:42:25", state: "done" },
            { agent: "Validation Agent", detail: "Template passed · 3/3 rules", at: "11:42:27", state: "done" },
            { agent: "Routing Agent", detail: "Moved to /Reports", at: "11:42:28", state: "done" },
        ],
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
        extracted:
            "INVOICE #1204\nAcme Industrial Supply\nDate: 2025-08-29\nSubtotal: 4,820.00\nTax: —\nTotal: 4,820.00\n\nNote: tax line could not be read with confidence.",
        validation: [
            { rule: "Invoice number present", passed: true },
            { rule: "Tax field readable", passed: false },
            { rule: "Totals reconcile", passed: false },
        ],
        timeline: [
            { agent: "Upload", detail: "File received · 228 KB", at: "10:58:03", state: "done" },
            { agent: "OCR Agent", detail: "Extracted 2 pages · low contrast", at: "10:58:07", state: "done" },
            { agent: "Classification Agent", detail: "Invoice · 74.2% confidence", at: "10:58:09", state: "done" },
            { agent: "Validation Agent", detail: "2 rules failed · queued for review", at: "10:58:11", state: "failed" },
            { agent: "Routing Agent", detail: "Waiting on human review", at: "—", state: "active" },
        ],
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
        extracted:
            "MUTUAL NON-DISCLOSURE AGREEMENT\n\nEffective date: 1 September 2025. Term: 24 months. Governing law: Delaware.\n\nParties: CogniFlow Inc. and Northwind Traders.",
        validation: [
            { rule: "Effective date present", passed: true },
            { rule: "Both parties named", passed: true },
            { rule: "Governing law clause", passed: true },
        ],
        timeline: [
            { agent: "Upload", detail: "File received · 96 KB", at: "09:11:44", state: "done" },
            { agent: "OCR Agent", detail: "Native text layer used", at: "09:11:45", state: "done" },
            { agent: "Classification Agent", detail: "Contract · 99.1% confidence", at: "09:11:47", state: "done" },
            { agent: "Validation Agent", detail: "Template passed · 3/3 rules", at: "09:11:49", state: "done" },
            { agent: "Routing Agent", detail: "Moved to /Contracts", at: "09:11:50", state: "done" },
        ],
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
        validation: [{ rule: "Awaiting validation", passed: false }],
        timeline: [
            { agent: "Upload", detail: "File received · 3.1 MB", at: "now", state: "done" },
            { agent: "OCR Agent", detail: "Reading image · 62%", at: "now", state: "active" },
            { agent: "Classification Agent", detail: "Queued", at: "—", state: "active" },
            { agent: "Validation Agent", detail: "Queued", at: "—", state: "active" },
            { agent: "Routing Agent", detail: "Queued", at: "—", state: "active" },
        ],
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
        validation: [
            { rule: "Minimum OCR confidence", passed: false },
            { rule: "Template match ≥ 90%", passed: false },
        ],
        timeline: [
            { agent: "Upload", detail: "File received · 740 KB", at: "07:20:12", state: "done" },
            { agent: "OCR Agent", detail: "Low confidence extraction", at: "07:20:19", state: "failed" },
            { agent: "Classification Agent", detail: "Unknown · 41.2% confidence", at: "07:20:21", state: "failed" },
            { agent: "Validation Agent", detail: "Rejected · rescan required", at: "07:20:22", state: "failed" },
            { agent: "Routing Agent", detail: "Not routed", at: "—", state: "failed" },
        ],
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
        validation: [
            { rule: "Required field: recipient name", passed: true },
            { rule: "Template match ≥ 90%", passed: true },
        ],
        timeline: [
            { agent: "Upload", detail: "File received · 388 KB", at: "yesterday", state: "done" },
            { agent: "OCR Agent", detail: "Extracted 1 page", at: "yesterday", state: "done" },
            { agent: "Classification Agent", detail: "Certificate · 99.3%", at: "yesterday", state: "done" },
            { agent: "Validation Agent", detail: "Template passed", at: "yesterday", state: "done" },
            { agent: "Routing Agent", detail: "Moved to /Certificates/2025", at: "yesterday", state: "done" },
        ],
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
        validation: [
            { rule: "Fiscal period parsed", passed: true },
            { rule: "Totals reconcile", passed: true },
        ],
        timeline: [
            { agent: "Upload", detail: "File received · 212 KB", at: "yesterday", state: "done" },
            { agent: "OCR Agent", detail: "Sheet text parsed", at: "yesterday", state: "done" },
            { agent: "Classification Agent", detail: "Report · 92.8%", at: "yesterday", state: "done" },
            { agent: "Validation Agent", detail: "Template passed", at: "yesterday", state: "done" },
            { agent: "Routing Agent", detail: "Moved to /Reports", at: "yesterday", state: "done" },
        ],
    },
];

export const getDoc = (id: string) => demoDocs.find((d) => d.id === id);

export const statusMeta: Record<DocStatus, { label: string; cls: string }> = {
    routed: { label: "Routed", cls: "bg-success/15 text-success" },
    review: { label: "Needs review", cls: "bg-warning/15 text-warning" },
    processing: { label: "Processing", cls: "bg-primary/10 text-primary" },
    rejected: { label: "Rejected", cls: "bg-destructive/10 text-destructive" },
};

/** Very small rule-based assistant over the demo dataset. */
export function assistantReply(question: string): string {
    const q = question.toLowerCase();
    const matched = demoDocs.find((d) => q.includes(d.name.toLowerCase().split(".")[0]!.toLowerCase()));

    if (q.includes("where") || q.includes("located") || q.includes("routed to")) {
        const d = matched ?? demoDocs[0]!;
        return d.folder === "—"
            ? `**${d.name}** hasn't been routed yet — it is currently *${statusMeta[d.status].label.toLowerCase()}*. The Routing Agent will assign a folder once validation passes.`
            : `**${d.name}** was routed to \`${d.folder}\` by the Routing Agent ${d.date}.`;
    }
    if (q.includes("reject")) {
        const d = demoDocs.find((x) => x.status === "rejected")!;
        const failed = d.validation.filter((v) => !v.passed).map((v) => v.rule);
        return `**${d.name}** was rejected because the following checks failed:\n\n${failed.map((f) => `- ${f}`).join("\n")}\n\nRescanning at 300 DPI usually fixes this.`;
    }
    if (q.includes("confidence") || q.includes("accuracy")) {
        const d = matched ?? demoDocs[0]!;
        return `The Classification Agent scored **${d.name}** at **${d.conf}%** confidence for category *${d.cat}*. Anything under 80% is sent to the Validation Center for human review.`;
    }
    if (q.includes("folder")) {
        return `Current routing map:\n\n${demoDocs
            .filter((d) => d.folder !== "—")
            .map((d) => `- ${d.name} → \`${d.folder}\``)
            .join("\n")}`;
    }
    if (q.includes("history") || q.includes("timeline") || q.includes("log")) {
        const d = matched ?? demoDocs[0]!;
        return `Processing history for **${d.name}**:\n\n${d.timeline.map((t) => `- ${t.at} · ${t.agent} — ${t.detail}`).join("\n")}`;
    }
    if (q.includes("pending") || q.includes("review")) {
        const list = demoDocs.filter((d) => d.status === "review" || d.status === "processing");
        return `${list.length} documents need attention right now:\n\n${list.map((d) => `- ${d.name} (${statusMeta[d.status].label})`).join("\n")}`;
    }
    return "I can help with document locations, folder assignments, confidence scores, rejection reasons and processing history. Try asking *\"Where is Certificate_Ada.pdf?\"* or *\"Why was this rejected?\"*";
}
