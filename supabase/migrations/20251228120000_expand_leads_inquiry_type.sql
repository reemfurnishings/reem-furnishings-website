-- Expand leads inquiry types to support specification and trade access requests
ALTER TABLE public.leads
  DROP CONSTRAINT IF EXISTS leads_inquiry_type_check;

ALTER TABLE public.leads
  ADD CONSTRAINT leads_inquiry_type_check
  CHECK (
    inquiry_type IN (
      'trade_pricing',
      'catalogue_download',
      'specification_sheet_request',
      'trade_access_request'
    )
  );


