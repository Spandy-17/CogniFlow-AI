-- Make the uploaded document library readable and downloadable by any
-- authenticated workspace account. Writes and deletes remain owner-scoped.
DROP POLICY IF EXISTS "Users can read their own documents" ON public.documents;
DROP POLICY IF EXISTS "Authenticated users can read shared documents" ON public.documents;
DROP POLICY IF EXISTS "Allow select for all" ON public.documents;

CREATE POLICY "Authenticated users can read shared documents"
  ON public.documents FOR SELECT TO authenticated
  USING (auth.uid() IS NOT NULL);

UPDATE storage.buckets SET public = false WHERE id = 'documents';
DROP POLICY IF EXISTS "Users can read their own stored documents" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can read shared document files" ON storage.objects;
DROP POLICY IF EXISTS "Allow public read from documents bucket" ON storage.objects;

CREATE POLICY "Authenticated users can read shared document files"
  ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'documents' AND auth.uid() IS NOT NULL);

NOTIFY pgrst, 'reload schema';