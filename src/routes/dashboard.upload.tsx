import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, PageHeader } from "@/components/DashboardShell";
import {
  UploadCloud, FileText, X, Sparkles, CheckCircle2, Database,
  ArrowRight, Copy, Check, AlertCircle, RefreshCw, Layers, ShieldCheck, Cpu
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { saveUploadedDocument, type DocumentRecord } from "@/lib/document-service";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/upload")({
  head: () => ({
    meta: [
      { title: "Upload Documents · CogniFlow" },
      { name: "description", content: "Save uploaded documents to the shared database before choosing to process them." },
    ],
  }),
  component: UploadPage,
});

type UploadingItem = {
  id: string;
  name: string;
  size: string;
  progress: number;
  stage: string;
  status: "uploading" | "processing" | "done" | "error";
  doc?: DocumentRecord;
  dbSaved?: boolean;
  error?: string;
};

const SQL_MIGRATION = `-- CogniFlow-AI Database Schema
-- Execute this in DBeaver 26.3 SQL Editor to create table & storage
-- Uploads are saved first. Agent processing and folder routing are a separate action.

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

DROP POLICY IF EXISTS "Allow select for all" ON public.documents;
DROP POLICY IF EXISTS "Allow insert for all" ON public.documents;
DROP POLICY IF EXISTS "Allow update for all" ON public.documents;
DROP POLICY IF EXISTS "Allow delete for all" ON public.documents;
DROP POLICY IF EXISTS "Users can read their own documents" ON public.documents;
DROP POLICY IF EXISTS "Authenticated users can read shared documents" ON public.documents;
DROP POLICY IF EXISTS "Users can insert their own documents" ON public.documents;
DROP POLICY IF EXISTS "Users can update their own documents" ON public.documents;
DROP POLICY IF EXISTS "Users can delete their own documents" ON public.documents;

CREATE POLICY "Authenticated users can read shared documents" ON public.documents FOR SELECT TO authenticated USING (auth.uid() IS NOT NULL);
CREATE POLICY "Users can insert their own documents" ON public.documents FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own documents" ON public.documents FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own documents" ON public.documents FOR DELETE TO authenticated USING (auth.uid() = user_id);

DROP FUNCTION IF EXISTS public.complete_document_processing(UUID, TEXT, NUMERIC, TEXT, TEXT, TEXT, JSONB, JSONB);
CREATE OR REPLACE FUNCTION public.complete_document_processing(
  p_document_id UUID, p_category TEXT, p_confidence NUMERIC, p_status TEXT,
  p_folder TEXT, p_extracted_text TEXT, p_file_url TEXT, p_validation_results JSONB, p_timeline JSONB
)
RETURNS public.documents LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE updated_document public.documents;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Authentication required'; END IF;
  IF p_status NOT IN ('processing', 'routed', 'review', 'rejected', 'error') THEN RAISE EXCEPTION 'Invalid processing status'; END IF;
  UPDATE public.documents
  SET category = COALESCE(p_category, 'Unclassified'), confidence = COALESCE(p_confidence, 0),
      status = p_status, folder = COALESCE(p_folder, 'Unassigned'),
      extracted_text = COALESCE(p_extracted_text, ''),
      file_url = COALESCE(p_file_url, file_url),
      validation_results = COALESCE(p_validation_results, '[]'::jsonb),
      timeline = COALESCE(p_timeline, '[]'::jsonb)
  WHERE id = p_document_id RETURNING * INTO updated_document;
  IF NOT FOUND THEN RAISE EXCEPTION 'Document not found'; END IF;
  RETURN updated_document;
END;
$$;
REVOKE ALL ON FUNCTION public.complete_document_processing(UUID, TEXT, NUMERIC, TEXT, TEXT, TEXT, TEXT, JSONB, JSONB) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.complete_document_processing(UUID, TEXT, NUMERIC, TEXT, TEXT, TEXT, TEXT, JSONB, JSONB) TO authenticated;

GRANT ALL ON TABLE public.documents TO anon, authenticated, service_role;

INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', false)
ON CONFLICT (id) DO UPDATE SET public = false;

DROP POLICY IF EXISTS "Allow public uploads to documents bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public read from documents bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public delete from documents bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public update in documents bucket" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload their own documents" ON storage.objects;
DROP POLICY IF EXISTS "Users can read their own stored documents" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can read shared document files" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own stored documents" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own stored documents" ON storage.objects;
CREATE POLICY "Users can upload their own documents" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'documents' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "Authenticated users can read shared document files" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'documents' AND auth.uid() IS NOT NULL);
CREATE POLICY "Users can delete their own stored documents" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'documents' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "Users can update their own stored documents" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'documents' AND (storage.foldername(name))[1] = auth.uid()::text) WITH CHECK (bucket_id = 'documents' AND (storage.foldername(name))[1] = auth.uid()::text);

NOTIFY pgrst, 'reload schema';`;

function UploadPage() {
  const { user } = useAuth();
  const [items, setItems] = useState<UploadingItem[]>([]);
  const [drag, setDrag] = useState(false);
  const [showDbGuide, setShowDbGuide] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);
  const [dbStatus, setDbStatus] = useState<"checking" | "connected" | "needs_migration">("checking");
  const ref = useRef<HTMLInputElement>(null);

  // Check if PostgreSQL 'documents' table exists
  const checkDatabaseConnection = async () => {
    setDbStatus("checking");
    try {
      const { error } = await supabase.from("documents").select("id").limit(1);
      if (error && (error.code === "PGRST205" || error.message.includes("does not exist"))) {
        setDbStatus("needs_migration");
      } else {
        setDbStatus("connected");
      }
    } catch {
      setDbStatus("needs_migration");
    }
  };

  useEffect(() => {
    checkDatabaseConnection();
  }, []);

  const handleCopySql = async () => {
    try {
      await navigator.clipboard.writeText(SQL_MIGRATION);
      setCopiedSql(true);
      toast.success("SQL copied! Paste and run it in DBeaver 26.3");
      setTimeout(() => setCopiedSql(false), 3000);
    } catch {
      toast.error("Failed to copy to clipboard");
    }
  };

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);

    for (const f of fileArray) {
      const tempId = crypto.randomUUID();
      const fileSize = (f.size / 1024 / 1024).toFixed(1) + " MB";

      // Add to UI queue
      setItems((prev) => [
        {
          id: tempId,
          name: f.name,
          size: fileSize,
          progress: 5,
          stage: "Uploading to cloud storage…",
          status: "uploading",
        },
        ...prev,
      ]);

      try {
        const savedDoc = await saveUploadedDocument(f, user, (stageName, percent) => {
          setItems((prev) =>
            prev.map((it) =>
              it.id === tempId
                ? {
                    ...it,
                    progress: percent,
                    stage: stageName,
                    status: percent >= 100 ? "done" : percent >= 30 ? "processing" : "uploading",
                  }
                : it
            )
          );
        });

        // Upload is persisted; AI processing is an explicit later action.
        setItems((prev) =>
          prev.map((it) =>
            it.id === tempId
              ? {
                  ...it,
                  id: savedDoc.id,
                  progress: 100,
                  stage: "Saved in My Documents · ready for AI processing",
                  status: "done",
                  doc: savedDoc,
                  dbSaved: true,
                }
              : it
          )
        );

        toast.success(`"${f.name}" saved in My Documents. Go to AI Processing when you're ready to process it.`);
      } catch (err: any) {
        setItems((prev) =>
          prev.map((it) =>
            it.id === tempId
              ? {
                  ...it,
                  status: "error",
                  error: err?.message || "Upload failed",
                  stage: "Failed",
                }
              : it
          )
        );
        toast.error(`Upload error: ${err?.message || "Unknown error"}`);
      }
    }
  };

  return (
    <>
      <PageHeader
        title="Upload documents"
        subtitle="Save uploads to My Documents first. AI processing and folder routing are started separately."
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDbGuide((v) => !v)}
              className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition ${
                dbStatus === "connected"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "border-warning/40 bg-warning/10 text-warning hover:bg-warning/20"
              }`}
            >
              <Database className="size-3.5" />
              {dbStatus === "checking" && "Checking DB…"}
              {dbStatus === "connected" && "PostgreSQL Connected ✓"}
              {dbStatus === "needs_migration" && "DBeaver Setup Guide"}
            </button>
            <Link
              to="/dashboard/documents"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-xs font-medium hover:bg-secondary transition"
            >
              View All Documents <ArrowRight className="size-3.5" />
            </Link>
          </div>
        }
      />

      {/* DBeaver / PostgreSQL Guide Card */}
      <AnimatePresence>
        {showDbGuide && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 overflow-hidden"
          >
            <Card className="border border-border/80 bg-secondary/30 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <Database className="size-5 text-primary" />
                    <h2 className="text-base font-semibold">PostgreSQL & DBeaver Database Setup</h2>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Your cloud PostgreSQL credentials from <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">.env</code> are linked.
                    Run this SQL script in DBeaver 26.3 to create the <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">documents</code> table and storage bucket.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={checkDatabaseConnection}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:bg-secondary"
                  >
                    <RefreshCw className="size-3" /> Re-check Table
                  </button>
                  <button
                    onClick={handleCopySql}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm hover:opacity-90"
                  >
                    {copiedSql ? <Check className="size-3.5 text-white" /> : <Copy className="size-3.5 text-white" />}
                    {copiedSql ? "Copied!" : "Copy SQL for DBeaver"}
                  </button>
                </div>
              </div>

              <div className="mt-3 relative rounded-xl border border-border bg-background/80 p-3 font-mono text-[11px] text-muted-foreground">
                <pre className="max-h-40 overflow-y-auto whitespace-pre-wrap">{SQL_MIGRATION}</pre>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Upload Dropzone */}
      <Card className="!p-0 overflow-hidden border border-border/70">
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDrag(false);
            handleFiles(e.dataTransfer.files);
          }}
          onClick={() => ref.current?.click()}
          className={`relative m-4 grid cursor-pointer place-items-center rounded-2xl border-2 border-dashed py-14 text-center transition-all ${
            drag ? "border-primary bg-primary/10 scale-[0.99]" : "border-border/80 bg-background/50 hover:bg-secondary/40"
          }`}
        >
          <input
            ref={ref}
            type="file"
            multiple
            accept=".pdf,.docx,.doc,.png,.jpg,.jpeg,.xlsx,.txt"
            hidden
            onChange={(e) => handleFiles(e.target.files)}
          />

          <motion.div
            animate={{ y: drag ? -4 : 0 }}
            className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-glow"
          >
            <UploadCloud className="size-8" />
          </motion.div>

          <p className="mt-4 text-lg font-semibold text-foreground">Click to upload or drag & drop files here</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Files are saved first, not processed. Supports PDF, DOCX, PNG, JPG, JPEG, XLSX, TXT up to 50 MB
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Cpu className="size-3.5" /> Process later in AI Center
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <Database className="size-3.5" /> Cloud PostgreSQL Storage
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400">
              <ShieldCheck className="size-3.5" /> Rule Validation
            </span>
          </div>
        </div>
      </Card>

      {/* Uploaded Items List */}
      {items.length > 0 && (
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between px-1">
            <p className="text-sm font-semibold text-foreground">Uploaded Documents ({items.length})</p>
            <button
              onClick={() => setItems([])}
              className="text-xs text-muted-foreground hover:text-destructive transition"
            >
              Clear list
            </button>
          </div>

          <AnimatePresence>
            {items.map((it) => (
              <motion.div
                key={it.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl glass-strong p-4 border border-border/60 transition hover:border-primary/30"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-1/15 to-brand-2/15 text-primary border border-primary/20">
                    <FileText className="size-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-semibold">{it.name}</p>
                      <span className="text-[11px] text-muted-foreground shrink-0">{it.size}</span>
                    </div>

                    <div className="mt-2 flex items-center gap-3">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2"
                          animate={{ width: `${it.progress}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground w-44 text-right truncate">
                        {it.stage}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  {it.status === "done" && it.doc && (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2.5 py-1 text-xs font-medium text-success">
                        <CheckCircle2 className="size-3.5" /> {it.doc.cat}
                      </span>
                      <Link
                        to="/dashboard/document/$docId"
                        params={{ docId: it.doc.id }}
                        className="inline-flex items-center gap-1 rounded-xl bg-primary/10 hover:bg-primary/20 px-3 py-1 text-xs font-medium text-primary transition"
                      >
                        Inspect <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  )}

                  {it.status === "error" && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-destructive">
                      <AlertCircle className="size-3.5" /> Failed
                    </span>
                  )}

                  <button
                    onClick={() => setItems((p) => p.filter((x) => x.id !== it.id))}
                    className="p-1 text-muted-foreground hover:text-destructive rounded-lg hover:bg-secondary transition"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}