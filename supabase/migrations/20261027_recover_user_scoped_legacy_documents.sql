-- Allow users to recover legacy rows whose stored file path is explicitly
-- namespaced under their own auth UUID. Rows without that ownership proof
-- remain inaccessible and must be assigned to an owner by an administrator.
DROP POLICY IF EXISTS "Users can read their own documents" ON public.documents;
DROP POLICY IF EXISTS "Users can update their own documents" ON public.documents;

CREATE POLICY "Users can read their own documents"
  ON public.documents FOR SELECT TO authenticated
  USING (
    auth.uid() = user_id
    OR (user_id IS NULL AND file_path LIKE (auth.uid()::text || '/%'))
  );

CREATE POLICY "Users can update their own documents"
  ON public.documents FOR UPDATE TO authenticated
  USING (
    auth.uid() = user_id
    OR (user_id IS NULL AND file_path LIKE (auth.uid()::text || '/%'))
  )
  WITH CHECK (auth.uid() = user_id);
