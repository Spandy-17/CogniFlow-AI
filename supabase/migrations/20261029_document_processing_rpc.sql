-- Let any authenticated workspace user run AI processing on shared uploads,
-- but only change the agent-owned fields (never owner, file path, or filename).
DROP FUNCTION IF EXISTS public.complete_document_processing(UUID, TEXT, NUMERIC, TEXT, TEXT, TEXT, JSONB, JSONB);

CREATE OR REPLACE FUNCTION public.complete_document_processing(
  p_document_id UUID,
  p_category TEXT,
  p_confidence NUMERIC,
  p_status TEXT,
  p_folder TEXT,
  p_extracted_text TEXT,
  p_file_url TEXT,
  p_validation_results JSONB,
  p_timeline JSONB
)
RETURNS public.documents
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  updated_document public.documents;
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Authentication required';
  END IF;

  IF p_status NOT IN ('processing', 'routed', 'review', 'rejected', 'error') THEN
    RAISE EXCEPTION 'Invalid processing status';
  END IF;

  UPDATE public.documents
  SET category = COALESCE(p_category, 'Unclassified'),
      confidence = COALESCE(p_confidence, 0),
      status = p_status,
      folder = COALESCE(p_folder, 'Unassigned'),
      extracted_text = COALESCE(p_extracted_text, ''),
      file_url = COALESCE(p_file_url, file_url),
      validation_results = COALESCE(p_validation_results, '[]'::jsonb),
      timeline = COALESCE(p_timeline, '[]'::jsonb)
  WHERE id = p_document_id
  RETURNING * INTO updated_document;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Document not found';
  END IF;

  RETURN updated_document;
END;
$$;

REVOKE ALL ON FUNCTION public.complete_document_processing(UUID, TEXT, NUMERIC, TEXT, TEXT, TEXT, TEXT, JSONB, JSONB) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.complete_document_processing(UUID, TEXT, NUMERIC, TEXT, TEXT, TEXT, TEXT, JSONB, JSONB) TO authenticated;

-- Ensure PostgREST immediately discovers the function after migration.
NOTIFY pgrst, 'reload schema';
