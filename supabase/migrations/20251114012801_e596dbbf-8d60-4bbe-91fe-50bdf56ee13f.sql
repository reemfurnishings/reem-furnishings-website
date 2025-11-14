-- Create leads table for capturing trade inquiries
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  inquiry_type TEXT NOT NULL CHECK (inquiry_type IN ('trade_pricing', 'catalogue_download')),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (public form submission)
CREATE POLICY "Anyone can submit leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin access (if needed later)
CREATE POLICY "Only authenticated users can view leads" 
ON public.leads 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create index for faster queries
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_email ON public.leads(email);