-- 1. Create the orders table
CREATE TABLE public.orders (
    id TEXT PRIMARY KEY, -- Format: AQS-0001
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Customer Info
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    
    -- Shipping Info
    shipping_province TEXT NOT NULL,
    shipping_city TEXT NOT NULL,
    shipping_postal_code TEXT NOT NULL,
    shipping_address TEXT NOT NULL,
    
    -- Pricing & Items
    shipping_method TEXT NOT NULL,
    shipping_cost INTEGER NOT NULL,
    subtotal INTEGER NOT NULL,
    total_amount INTEGER NOT NULL,
    items JSONB NOT NULL, -- Array of items
    
    -- Status
    payment_status TEXT NOT NULL DEFAULT 'Pending Payment', -- 'Pending Payment', 'Paid'
    fulfillment_status TEXT NOT NULL DEFAULT 'Unfulfilled', -- 'Unfulfilled', 'Shipped'
    
    -- Fulfillment Details
    courier_name TEXT,
    tracking_number TEXT,
    
    -- Payment Proof
    payment_proof_url TEXT
);

-- 2. Set up RLS (Row Level Security)
-- For simplicity and speed in this specific workflow, we can allow public inserts for checkout,
-- public reads/updates if needed, or secure it properly.
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (so checkout page can create orders)
CREATE POLICY "Allow public inserts" ON public.orders FOR INSERT TO anon WITH CHECK (true);

-- Allow anonymous selects (so payment page can fetch order summary by ID)
CREATE POLICY "Allow public reads" ON public.orders FOR SELECT TO anon USING (true);

-- Allow anonymous updates (so payment page can attach payment proof URL)
CREATE POLICY "Allow public updates" ON public.orders FOR UPDATE TO anon USING (true);


-- 3. Set up Storage for Payment Proofs
-- Create a bucket named 'payment-proofs' (make it public so images can be viewed in dashboard)
INSERT INTO storage.buckets (id, name, public) VALUES ('payment-proofs', 'payment-proofs', true);

-- Allow public uploads to the bucket
CREATE POLICY "Allow public uploads" ON storage.objects FOR INSERT TO anon WITH CHECK (bucket_id = 'payment-proofs');

-- Allow public reads from the bucket
CREATE POLICY "Allow public reads on proofs" ON storage.objects FOR SELECT TO anon USING (bucket_id = 'payment-proofs');
