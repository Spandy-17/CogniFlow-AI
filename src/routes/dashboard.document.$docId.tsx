import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
    ArrowLeft, Download, Trash2, RefreshCw, FileText, CheckCircle2, XCircle,
    Clock, FolderTree, Cpu, HardDrive, User,
} from "lucide-react";
import { Card, PageHeader } from "@/components/DashboardShell";
import { getDoc, statusMeta } from "@/lib/demo-data";

export const Route = createFileRoute("/dashboard/document/$docId")({
    loader: ({ params }) => {
        const doc = getDoc(params.docId);
        if (!doc) throw notFound();
        return { doc };
    },
    head: ({ loaderData }) => {
        const title = loaderData ? `${loaderData.doc.name} · CogniFlow` : "Document unavailable · CogniFlow";
        const description = "Extracted text, classification confidence, validation report and agent timeline.";
        return {
            meta: [
                { title },
                { name: "description", content: description },
                { property: "og:title", content: title },
                { property: "og:description", content: description },
                ...(loaderData ? [] : [{ name: "robots", content: "noindex" }]),
            ],
        };
    },
    notFoundComponent: DocNotFound,
    component: DocumentDetails,
});

function DocNotFound() {
    return (
        <Card>
            <p className="font-semibold">Document not found</p>
            <p className="mt-1 text-sm text-muted-foreground">It may have been deleted or reprocessed.</p>
            <Link to="/dashboard/documents" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                <ArrowLeft className="size-4" /> Back to documents
            </Link>
        </Card>
    );
}

function DocumentDetails() {
    const { doc } = Route.useLoaderData();
    const s = statusMeta[doc.status];

    return (
        <>
            <Link to="/dashboard/documents" className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="size-4" /> All documents
            </Link>

            <PageHeader
                title={doc.name}
                subtitle={`${doc.cat} · ${doc.pages} page${doc.pages > 1 ? "s" : ""} · uploaded ${doc.date}`}
                actions={
                    <>
                        <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary">
                            <Download className="size-4" /> Download
                        </button>
                        <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium hover:bg-secondary">
                            <RefreshCw className="size-4" /> Reprocess
                        </button>
                        <button className="inline-flex items-center gap-2 rounded-xl border border-destructive/40 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10">
                            <Trash2 className="size-4" /> Delete
                        </button>
                    </>
                }
            />

            <div className="grid gap-5 lg:grid-cols-3">
                <Card className="lg:col-span-2 !p-0 overflow-hidden">
                    <div className="flex items-center gap-2 border-b border-border/60 px-5 py-3 text-sm font-semibold">
                        <FileText className="size-4 text-primary" /> Preview
                    </div>
                    <div className="grid min-h-72 place-items-center bg-gradient-to-br from-secondary/60 to-transparent p-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-sm"
                        >
                            <p className="whitespace-pre-wrap font-mono text-[11.5px] leading-relaxed text-muted-foreground">
                                {doc.extracted}
                            </p>
                        </motion.div>
                    </div>
                </Card>

                <div className="space-y-5">
                    <Card>
                        <p className="text-sm font-semibold">Metadata</p>
                        <dl className="mt-3 space-y-2.5 text-sm">
                            <Row icon={Cpu} label="Detected category" value={doc.cat} />
                            <Row icon={CheckCircle2} label="Confidence" value={`${doc.conf}%`} />
                            <Row icon={FolderTree} label="Assigned folder" value={doc.folder} />
                            <Row icon={HardDrive} label="File size" value={doc.size} />
                            <Row icon={User} label="Uploaded by" value={doc.uploadedBy} />
                            <Row icon={Clock} label="Uploaded" value={doc.date} />
                        </dl>
                        <div className="mt-4">
                            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${s.cls}`}>
                                {s.label}
                            </span>
                        </div>
                        <div className="mt-4">
                            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${doc.conf}%` }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2"
                                />
                            </div>
                            <p className="mt-1.5 text-[11px] text-muted-foreground">Classification confidence</p>
                        </div>
                    </Card>

                    <Card>
                        <p className="text-sm font-semibold">Validation report</p>
                        <ul className="mt-3 space-y-2 text-sm">
                            {doc.validation.map((v) => (
                                <li key={v.rule} className="flex items-start gap-2">
                                    {v.passed ? (
                                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                                    ) : (
                                        <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                                    )}
                                    <span className={v.passed ? "" : "text-muted-foreground"}>{v.rule}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>

                <Card className="lg:col-span-3">
                    <p className="text-sm font-semibold">Processing timeline & agent logs</p>
                    <ol className="mt-4 space-y-0">
                        {doc.timeline.map((t, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                                className="relative flex gap-4 pb-5 last:pb-0"
                            >
                                {i < doc.timeline.length - 1 && (
                                    <span className="absolute left-[13px] top-7 h-full w-px bg-border" />
                                )}
                                <span
                                    className={`relative z-10 mt-1 grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold ${t.state === "done"
                                            ? "bg-success/15 text-success"
                                            : t.state === "failed"
                                                ? "bg-destructive/10 text-destructive"
                                                : "bg-primary/10 text-primary animate-pulse"
                                        }`}
                                >
                                    {i + 1}
                                </span>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium">{t.agent}</p>
                                    <p className="text-xs text-muted-foreground">{t.detail}</p>
                                </div>
                                <span className="ml-auto shrink-0 font-mono text-[11px] text-muted-foreground">{t.at}</span>
                            </motion.li>
                        ))}
                    </ol>
                </Card>
            </div>
        </>
    );
}

function Row({ icon: Icon, label, value }: { icon: typeof Cpu; label: string; value: string }) {
    return (
        <div className="flex items-center gap-2">
            <Icon className="size-3.5 shrink-0 text-muted-foreground" />
            <dt className="text-muted-foreground">{label}</dt>
            <dd className="ml-auto font-medium">{value}</dd>
        </div>
    );
}
