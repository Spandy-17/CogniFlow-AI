import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { Card, PageHeader } from "@/components/DashboardShell";
import {
  FileText, Search, Filter, Download, MoreVertical, CheckCircle2, Clock, XCircle,
  UploadCloud, RefreshCw, Trash2
} from "lucide-react";
import { fetchAllDocuments, deleteDocument, type DocumentRecord } from "@/lib/document-service";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/documents")({
  head: () => ({
    meta: [
      { title: "My Documents · CogniFlow" },
      { name: "description", content: "All documents processed and organized into PostgreSQL database folders." },
    ],
  }),
  component: DocumentsPage,
});

const statusStyles: Record<string, { label: string; cls: string; Icon: typeof CheckCircle2 }> = {
  routed: { label: "Routed", cls: "bg-success/15 text-success", Icon: CheckCircle2 },
  review: { label: "Needs review", cls: "bg-warning/15 text-warning", Icon: Clock },
  processing: { label: "Processing", cls: "bg-primary/10 text-primary", Icon: Clock },
  rejected: { label: "Rejected", cls: "bg-destructive/10 text-destructive", Icon: XCircle },
};

function DocumentsPage() {
  const [docs, setDocs] = useState<DocumentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const loadDocs = async () => {
    setLoading(true);
    try {
      const data = await fetchAllDocuments();
      setDocs(data);
    } catch {
      toast.error("Failed to load documents");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDocs();
  }, []);

  const handleDelete = async (e: React.MouseEvent, docId: string, filePath?: string | null) => {
    e.stopPropagation();
    e.preventDefault();
    if (!confirm("Are you sure you want to delete this document?")) return;
    await deleteDocument(docId, filePath);
    setDocs((prev) => prev.filter((d) => d.id !== docId));
    toast.success("Document removed");
  };

  const filteredDocs = useMemo(() => {
    return docs.filter((d) => {
      const matchesQuery =
        !query ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.cat.toLowerCase().includes(query.toLowerCase()) ||
        d.folder.toLowerCase().includes(query.toLowerCase());

      const matchesCat =
        selectedCat === "All" ||
        d.cat.toLowerCase() === selectedCat.toLowerCase();

      return matchesQuery && matchesCat;
    });
  }, [docs, query, selectedCat]);

  return (
    <>
      <PageHeader
        title="My Documents"
        subtitle="Every document processed and saved to your PostgreSQL database."
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={loadDocs}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background/60 px-3 py-2 text-xs font-medium hover:bg-secondary transition"
            >
              <RefreshCw className={`size-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh
            </button>
            <Link
              to="/dashboard/upload"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-3.5 py-2 text-xs font-semibold text-white shadow-glow hover:opacity-90 transition"
            >
              <UploadCloud className="size-3.5" /> Upload New
            </Link>
          </div>
        }
      />

      <Card className="!p-0 overflow-hidden border border-border/70">
        <div className="flex flex-wrap items-center gap-3 border-b border-border/60 p-4">
          <div className="relative flex-1 min-w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documents by name, category, folder…"
              className="w-full rounded-xl border border-border bg-background/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
            />
          </div>

          <div className="flex flex-wrap gap-1 text-xs">
            {["All", "Certificate", "Report", "Invoice", "Contract", "Transcript"].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedCat(t)}
                className={`rounded-lg px-2.5 py-1.5 transition ${
                  selectedCat === t
                    ? "bg-primary/15 text-primary font-semibold"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-[11px] uppercase tracking-wider text-muted-foreground bg-secondary/20">
              <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:text-left [&>th]:font-medium">
                <th>Document</th>
                <th>Category</th>
                <th>AI Confidence</th>
                <th>Status</th>
                <th>Destination Folder</th>
                <th>Uploaded</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {filteredDocs.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-muted-foreground">
                    <FileText className="mx-auto size-8 opacity-40 mb-2" />
                    <p className="font-medium text-foreground">No documents found</p>
                    <p className="text-xs mt-1">Upload a document or adjust your search filter</p>
                    <Link
                      to="/dashboard/upload"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20 transition"
                    >
                      <UploadCloud className="size-3.5" /> Upload file
                    </Link>
                  </td>
                </tr>
              ) : (
                filteredDocs.map((d) => {
                  const s = statusStyles[d.status] || statusStyles.routed;
                  const Icon = s.Icon;
                  return (
                    <tr
                      key={d.id}
                      className="border-t border-border/50 hover:bg-secondary/40 [&>td]:px-4 [&>td]:py-3 transition-colors"
                    >
                      <td>
                        <Link
                          to="/dashboard/document/$docId"
                          params={{ docId: d.id }}
                          className="flex items-center gap-3 hover:text-primary group"
                        >
                          <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                            <FileText className="size-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="font-medium truncate block max-w-xs">{d.name}</span>
                            <span className="text-[11px] text-muted-foreground">{d.size}</span>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                          {d.cat}
                        </span>
                      </td>
                      <td className="tabular-nums">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2"
                              style={{ width: `${Math.min(100, d.conf)}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium">{d.conf}%</span>
                        </div>
                      </td>
                      <td>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${s.cls}`}
                        >
                          <Icon className="size-3" /> {s.label}
                        </span>
                      </td>
                      <td className="text-muted-foreground text-xs font-mono">{d.folder}</td>
                      <td className="text-muted-foreground text-xs">{d.date}</td>
                      <td>
                        <button
                          onClick={(e) => handleDelete(e, d.id, d.filePath)}
                          title="Delete document"
                          className="text-muted-foreground hover:text-destructive p-1 rounded-md hover:bg-destructive/10 transition"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}