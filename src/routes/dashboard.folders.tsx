import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Card, PageHeader } from "@/components/DashboardShell";
import { Folder, FolderOpen, Search, FileText, Download, HardDrive, ArrowRight, RefreshCw } from "lucide-react";
import { fetchAllDocuments, type DocumentRecord } from "@/lib/document-service";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/folders")({
  head: () => ({
    meta: [
      { title: "Folders · CogniFlow" },
      { name: "description", content: "Folders grouped from your saved documents." },
    ],
  }),
  component: FoldersPage,
});

type FolderEntry = { name: string; files: DocumentRecord[]; size: string };

function FoldersPage() {
  const [docs, setDocs] = useState<DocumentRecord[]>([]);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const loadFolders = async () => {
    setLoading(true);
    try {
      setDocs(await fetchAllDocuments());
    } catch (error) {
      setDocs([]);
      toast.error(error instanceof Error ? error.message : "Could not load your documents.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void loadFolders(); }, []);

  const folders = useMemo<FolderEntry[]>(() => {
    const grouped = new Map<string, DocumentRecord[]>();
    for (const doc of docs) {
      const folder = doc.folder?.trim();
      if (!folder || folder === "Unassigned" || folder === "—") continue;
      grouped.set(folder, [...(grouped.get(folder) || []), doc]);
    }
    return [...grouped.entries()].map(([name, files]) => ({
      name,
      files,
      size: files.reduce((total, file) => {
        const numericSize = Number.parseFloat(file.size);
        const multiplier = file.size.includes("GB") ? 1024 ** 3 : file.size.includes("MB") ? 1024 ** 2 : file.size.includes("KB") ? 1024 : 1;
        return total + (Number.isFinite(numericSize) ? numericSize * multiplier : 0);
      }, 0).toLocaleString(undefined, { maximumFractionDigits: 0 }) + " bytes",
    }));
  }, [docs]);

  const filteredFolders = folders.filter((folder) => folder.name.toLowerCase().includes(search.toLowerCase()));
  const activeFolder = folders.find((folder) => folder.name === selectedFolder) || filteredFolders[0];

  return (
    <>
      <PageHeader
        title="Folders"
        subtitle="Only folders containing your saved documents are shown."
        actions={
          <button onClick={() => void loadFolders()} className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background/60 px-3 py-2 text-xs font-medium hover:bg-secondary transition">
            <RefreshCw className={`size-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh
          </button>
        }
      />
      <div className="mb-4 relative max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search your folders…" className="w-full rounded-xl border border-border bg-background/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15" />
      </div>

      {!loading && folders.length === 0 ? (
        <Card className="py-16 text-center">
          <HardDrive className="mx-auto size-10 opacity-30 mb-3" />
          <p className="font-semibold text-foreground">No document folders yet</p>
          <p className="text-xs text-muted-foreground mt-1">Folders appear here after your uploaded documents are processed and saved.</p>
          <Link to="/dashboard/upload" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">Upload a document <ArrowRight className="size-3" /></Link>
        </Card>
      ) : (
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid content-start gap-3 sm:grid-cols-2">
            {filteredFolders.map((folder, index) => {
              const selected = activeFolder?.name === folder.name;
              return (
                <motion.button key={folder.name} onClick={() => setSelectedFolder(folder.name)} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }} className={`rounded-2xl border p-5 text-left transition ${selected ? "border-primary/50 bg-primary/5 ring-2 ring-primary/20" : "border-border bg-card hover:bg-secondary/40"}`}>
                  <div className="mb-4 grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">{selected ? <FolderOpen className="size-5" /> : <Folder className="size-5" />}</div>
                  <p className="text-sm font-semibold break-all">{folder.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{folder.files.length} document{folder.files.length === 1 ? "" : "s"}</p>
                </motion.button>
              );
            })}
          </div>
          <Card className="!p-5">
            {activeFolder ? (
              <>
                <div className="mb-3 flex items-center gap-2 border-b border-border/60 pb-3">
                  <FolderOpen className="size-5 text-primary" />
                  <div><p className="text-sm font-bold">{activeFolder.name}</p><p className="text-xs text-muted-foreground">{activeFolder.files.length} saved document(s)</p></div>
                </div>
                <div className="max-h-96 space-y-2 overflow-y-auto">
                  {activeFolder.files.map((file) => (
                    <div key={file.id} className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-secondary/40 p-3">
                      <Link to="/dashboard/document/$docId" params={{ docId: file.id }} className="flex min-w-0 items-center gap-2.5 hover:text-primary">
                        <FileText className="size-4 shrink-0" /><span className="truncate text-xs font-semibold">{file.name}</span>
                      </Link>
                      {file.fileUrl && <a href={file.fileUrl} target="_blank" rel="noreferrer" aria-label={`Download ${file.name}`} className="shrink-0 rounded-lg border border-border bg-background p-2 hover:text-primary"><Download className="size-3.5" /></a>}
                    </div>
                  ))}
                </div>
              </>
            ) : <div className="py-8 text-center text-sm text-muted-foreground">No saved documents in this folder.</div>}
          </Card>
        </div>
      )}
    </>
  );
}
