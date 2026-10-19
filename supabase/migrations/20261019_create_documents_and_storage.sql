-- CogniFlow-AI Database Schema
-- Run this in DBeaver 26.3 or Supabase SQL Editor to enable Document Upload & Storage

-- 1. Create documents table
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

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies for Document Management
DROP POLICY IF EXISTS "Allow select for all" ON public.documents;
CREATE POLICY "Allow select for all"
  ON public.documents FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Allow insert for all" ON public.documents;
CREATE POLICY "Allow insert for all"
  ON public.documents FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow update for all" ON public.documents;
CREATE POLICY "Allow update for all"
  ON public.documents FOR UPDATE
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow delete for all" ON public.documents;
CREATE POLICY "Allow delete for all"
  ON public.documents FOR DELETE
  USING (true);

-- 4. Grant table privileges to Supabase roles
GRANT ALL ON TABLE public.documents TO anon, authenticated, service_role;

-- 5. Setup Storage Bucket for Uploaded Documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 6. Storage Policies for 'documents' bucket
DROP POLICY IF EXISTS "Allow public uploads to documents bucket" ON storage.objects;
CREATE POLICY "Allow public uploads to documents bucket"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'documents');

DROP POLICY IF EXISTS "Allow public read from documents bucket" ON storage.objects;
CREATE POLICY "Allow public read from documents bucket"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'documents');

DROP POLICY IF EXISTS "Allow public delete from documents bucket" ON storage.objects;
CREATE POLICY "Allow public delete from documents bucket"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'documents');

DROP POLICY IF EXISTS "Allow public update in documents bucket" ON storage.objects;
CREATE POLICY "Allow public update in documents bucket"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'documents');

-- 7. Automatic updated_at Trigger
CREATE OR REPLACE FUNCTION public.set_document_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS documents_set_updated_at ON public.documents;
CREATE TRIGGER documents_set_updated_at
BEFORE UPDATE ON public.documents
FOR EACH ROW EXECUTE FUNCTION public.set_document_updated_at();

-- 8. Refresh PostgREST schema cache
NOTIFY pgrst, 'reload schema';
