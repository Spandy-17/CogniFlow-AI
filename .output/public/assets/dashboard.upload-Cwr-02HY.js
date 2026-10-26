import{R as e,U as t,s as n,t as r}from"./link-BB7x10lQ.js";import{a as i,r as a,t as o}from"./DashboardShell-Ck2OumRg.js";import{h as s,l as c,o as l,p as u}from"./index-BrmIRlUx.js";import{a as d,r as f,t as p}from"./shield-check-CrikeTlB.js";import{a as m,o as h}from"./ThemeToggle-4obFQfja.js";import{t as g}from"./arrow-right-xANH7iRY.js";import{t as _}from"./circle-alert-_p3S04OK.js";import{t as v}from"./circle-check-DC1gT5vC.js";import{t as y}from"./cloud-upload-B2R2v9dh.js";import{t as b}from"./copy-Bwia2g7S.js";import{t as x}from"./database-H8rxe0Rd.js";import{t as S}from"./file-text-Ch5ZUaY5.js";import{t as C}from"./refresh-cw-BeuCVgTU.js";var w=t(e()),T=n(),E=`-- CogniFlow-AI Database Schema
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

NOTIFY pgrst, 'reload schema';`;function D(){let{user:e}=u(),[t,n]=(0,w.useState)([]),[D,O]=(0,w.useState)(!1),[k,A]=(0,w.useState)(!1),[j,M]=(0,w.useState)(!1),[N,P]=(0,w.useState)(`checking`),F=(0,w.useRef)(null),I=async()=>{P(`checking`);try{let{error:e}=await s.from(`documents`).select(`id`).limit(1);e&&(e.code===`PGRST205`||e.message.includes(`does not exist`))?P(`needs_migration`):P(`connected`)}catch{P(`needs_migration`)}};(0,w.useEffect)(()=>{I()},[]);let L=async()=>{try{await navigator.clipboard.writeText(E),M(!0),c.success(`SQL copied! Paste and run it in DBeaver 26.3`),setTimeout(()=>M(!1),3e3)}catch{c.error(`Failed to copy to clipboard`)}},R=async t=>{if(!t||t.length===0)return;let r=Array.from(t);for(let t of r){let r=crypto.randomUUID(),i=(t.size/1024/1024).toFixed(1)+` MB`;n(e=>[{id:r,name:t.name,size:i,progress:5,stage:`Uploading to cloud storage…`,status:`uploading`},...e]);try{let i=await l(t,e,(e,t)=>{n(n=>n.map(n=>n.id===r?{...n,progress:t,stage:e,status:t>=100?`done`:t>=30?`processing`:`uploading`}:n))});n(e=>e.map(e=>e.id===r?{...e,id:i.id,progress:100,stage:`Saved in My Documents · ready for AI processing`,status:`done`,doc:i,dbSaved:!0}:e)),c.success(`"${t.name}" saved in My Documents. Go to AI Processing when you're ready to process it.`)}catch(e){n(t=>t.map(t=>t.id===r?{...t,status:`error`,error:e?.message||`Upload failed`,stage:`Failed`}:t)),c.error(`Upload error: ${e?.message||`Unknown error`}`)}}};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{title:`Upload documents`,subtitle:`Save uploads to My Documents first. AI processing and folder routing are started separately.`,actions:(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,T.jsxs)(`button`,{onClick:()=>A(e=>!e),className:`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition ${N===`connected`?`border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400`:`border-warning/40 bg-warning/10 text-warning hover:bg-warning/20`}`,children:[(0,T.jsx)(x,{className:`size-3.5`}),N===`checking`&&`Checking DB…`,N===`connected`&&`PostgreSQL Connected ✓`,N===`needs_migration`&&`DBeaver Setup Guide`]}),(0,T.jsxs)(r,{to:`/dashboard/documents`,className:`inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-xs font-medium hover:bg-secondary transition`,children:[`View All Documents `,(0,T.jsx)(g,{className:`size-3.5`})]})]})}),(0,T.jsx)(h,{children:k&&(0,T.jsx)(d.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:`auto`},exit:{opacity:0,height:0},className:`mb-6 overflow-hidden`,children:(0,T.jsxs)(o,{className:`border border-border/80 bg-secondary/30 p-5`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,T.jsx)(x,{className:`size-5 text-primary`}),(0,T.jsx)(`h2`,{className:`text-base font-semibold`,children:`PostgreSQL & DBeaver Database Setup`})]}),(0,T.jsxs)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:[`Your cloud PostgreSQL credentials from `,(0,T.jsx)(`code`,{className:`rounded bg-muted px-1.5 py-0.5 text-xs text-foreground`,children:`.env`}),` are linked. Run this SQL script in DBeaver 26.3 to create the `,(0,T.jsx)(`code`,{className:`rounded bg-muted px-1.5 py-0.5 text-xs text-foreground`,children:`documents`}),` table and storage bucket.`]})]}),(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,T.jsxs)(`button`,{onClick:I,className:`inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:bg-secondary`,children:[(0,T.jsx)(C,{className:`size-3`}),` Re-check Table`]}),(0,T.jsxs)(`button`,{onClick:L,className:`inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm hover:opacity-90`,children:[j?(0,T.jsx)(m,{className:`size-3.5 text-white`}):(0,T.jsx)(b,{className:`size-3.5 text-white`}),j?`Copied!`:`Copy SQL for DBeaver`]})]})]}),(0,T.jsx)(`div`,{className:`mt-3 relative rounded-xl border border-border bg-background/80 p-3 font-mono text-[11px] text-muted-foreground`,children:(0,T.jsx)(`pre`,{className:`max-h-40 overflow-y-auto whitespace-pre-wrap`,children:E})})]})})}),(0,T.jsx)(o,{className:`!p-0 overflow-hidden border border-border/70`,children:(0,T.jsxs)(`div`,{onDragOver:e=>{e.preventDefault(),O(!0)},onDragLeave:()=>O(!1),onDrop:e=>{e.preventDefault(),O(!1),R(e.dataTransfer.files)},onClick:()=>F.current?.click(),className:`relative m-4 grid cursor-pointer place-items-center rounded-2xl border-2 border-dashed py-14 text-center transition-all ${D?`border-primary bg-primary/10 scale-[0.99]`:`border-border/80 bg-background/50 hover:bg-secondary/40`}`,children:[(0,T.jsx)(`input`,{ref:F,type:`file`,multiple:!0,accept:`.pdf,.docx,.doc,.png,.jpg,.jpeg,.xlsx,.txt`,hidden:!0,onChange:e=>R(e.target.files)}),(0,T.jsx)(d.div,{animate:{y:D?-4:0},className:`grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-glow`,children:(0,T.jsx)(y,{className:`size-8`})}),(0,T.jsx)(`p`,{className:`mt-4 text-lg font-semibold text-foreground`,children:`Click to upload or drag & drop files here`}),(0,T.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:`Files are saved first, not processed. Supports PDF, DOCX, PNG, JPG, JPEG, XLSX, TXT up to 50 MB`}),(0,T.jsxs)(`div`,{className:`mt-4 flex flex-wrap items-center justify-center gap-2`,children:[(0,T.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary`,children:[(0,T.jsx)(f,{className:`size-3.5`}),` Process later in AI Center`]}),(0,T.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400`,children:[(0,T.jsx)(x,{className:`size-3.5`}),` Cloud PostgreSQL Storage`]}),(0,T.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400`,children:[(0,T.jsx)(p,{className:`size-3.5`}),` Rule Validation`]})]})]})}),t.length>0&&(0,T.jsxs)(`div`,{className:`mt-6 space-y-3`,children:[(0,T.jsxs)(`div`,{className:`flex items-center justify-between px-1`,children:[(0,T.jsxs)(`p`,{className:`text-sm font-semibold text-foreground`,children:[`Uploaded Documents (`,t.length,`)`]}),(0,T.jsx)(`button`,{onClick:()=>n([]),className:`text-xs text-muted-foreground hover:text-destructive transition`,children:`Clear list`})]}),(0,T.jsx)(h,{children:t.map(e=>(0,T.jsxs)(d.div,{layout:!0,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,scale:.95},className:`flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl glass-strong p-4 border border-border/60 transition hover:border-primary/30`,children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-3 min-w-0 flex-1`,children:[(0,T.jsx)(`div`,{className:`grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-1/15 to-brand-2/15 text-primary border border-primary/20`,children:(0,T.jsx)(S,{className:`size-5`})}),(0,T.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,T.jsx)(`p`,{className:`truncate text-sm font-semibold`,children:e.name}),(0,T.jsx)(`span`,{className:`text-[11px] text-muted-foreground shrink-0`,children:e.size})]}),(0,T.jsxs)(`div`,{className:`mt-2 flex items-center gap-3`,children:[(0,T.jsx)(`div`,{className:`h-1.5 flex-1 overflow-hidden rounded-full bg-muted`,children:(0,T.jsx)(d.div,{className:`h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-2`,animate:{width:`${e.progress}%`},transition:{duration:.3}})}),(0,T.jsx)(`span`,{className:`text-xs font-medium text-muted-foreground w-44 text-right truncate`,children:e.stage})]})]})]}),(0,T.jsxs)(`div`,{className:`flex items-center gap-2 self-end sm:self-center shrink-0`,children:[e.status===`done`&&e.doc&&(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,T.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-full bg-success/15 px-2.5 py-1 text-xs font-medium text-success`,children:[(0,T.jsx)(v,{className:`size-3.5`}),` `,e.doc.cat]}),(0,T.jsxs)(r,{to:`/dashboard/document/$docId`,params:{docId:e.doc.id},className:`inline-flex items-center gap-1 rounded-xl bg-primary/10 hover:bg-primary/20 px-3 py-1 text-xs font-medium text-primary transition`,children:[`Inspect `,(0,T.jsx)(g,{className:`size-3`})]})]}),e.status===`error`&&(0,T.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs font-medium text-destructive`,children:[(0,T.jsx)(_,{className:`size-3.5`}),` Failed`]}),(0,T.jsx)(`button`,{onClick:()=>n(t=>t.filter(t=>t.id!==e.id)),className:`p-1 text-muted-foreground hover:text-destructive rounded-lg hover:bg-secondary transition`,children:(0,T.jsx)(i,{className:`size-4`})})]})]},e.id))})]})]})}export{D as component};