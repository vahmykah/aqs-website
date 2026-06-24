import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const orderId = formData.get('orderId') as string;

    if (!file || !orderId) {
      return new Response(JSON.stringify({ success: false, error: 'Missing file or order ID' }), { status: 400 });
    }

    // 1. Upload to Supabase Storage
    const fileExt = file.name.split('.').pop();
    const fileName = `${orderId}-${Date.now()}.${fileExt}`;
    
    // We need to convert the File to an ArrayBuffer or Blob for Supabase JS client
    const arrayBuffer = await file.arrayBuffer();

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('payment-proofs')
      .upload(fileName, arrayBuffer, {
        contentType: file.type,
        upsert: false
      });

    if (uploadError) {
      console.error('[API Upload] Storage upload error:', uploadError);
      return new Response(JSON.stringify({ success: false, error: uploadError.message }), { status: 500 });
    }

    // 2. Get Public URL
    const { data: publicUrlData } = supabase.storage
      .from('payment-proofs')
      .getPublicUrl(fileName);
      
    const publicUrl = publicUrlData.publicUrl;

    // 3. Update Order Record
    const { error: dbError } = await supabase
      .from('orders')
      .update({ payment_proof_url: publicUrl })
      .eq('id', orderId);

    if (dbError) {
      console.error('[API Upload] DB update error:', dbError);
      return new Response(JSON.stringify({ success: false, error: dbError.message }), { status: 500 });
    }

    // Trigger Admin notification email conceptually (optional, omitted for speed)
    // Send email to admin that proof was uploaded

    return new Response(JSON.stringify({ success: true, url: publicUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('[API Upload] Unexpected error:', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
