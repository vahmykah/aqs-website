import type { APIRoute } from 'astro';
import { supabase } from '../../../../lib/supabase';
import { Resend } from 'resend';

const resendApiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey || 're_dummy_123');

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Check Auth
    const authCookie = cookies.get('admin_auth');
    if (!authCookie || authCookie.value !== 'authenticated') {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401 });
    }

    const body = await request.json();
    const { action, orderId, courier, tracking } = body;

    if (!action || !orderId) {
      return new Response(JSON.stringify({ success: false, error: 'Missing parameters' }), { status: 400 });
    }

    // 1. Fetch Order to get email address
    const { data: order, error: fetchError } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single();

    if (fetchError || !order) {
      return new Response(JSON.stringify({ success: false, error: 'Order not found' }), { status: 404 });
    }

    let updateData: any = {};
    let emailSubject = '';
    let emailHtml = '';

    if (action === 'PAID') {
      updateData = { payment_status: 'Paid' };
      emailSubject = `Payment Confirmed - Order ${orderId}`;
      emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="font-weight: normal; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Payment Confirmed</h2>
          <p>Hi ${order.customer_name},</p>
          <p>We have successfully received your payment for order <strong>${orderId}</strong>.</p>
          <p>We are now preparing your items for shipment. We will send you another email with tracking details once it has been shipped.</p>
          <p>Thank you for shopping at A Quiet Space.</p>
        </div>
      `;
    } else if (action === 'SHIPPED') {
      if (!courier || !tracking) {
        return new Response(JSON.stringify({ success: false, error: 'Courier and tracking required' }), { status: 400 });
      }
      updateData = { 
        fulfillment_status: 'Shipped',
        courier_name: courier,
        tracking_number: tracking
      };
      emailSubject = `Your Order Has Been Shipped - ${orderId}`;
      emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="font-weight: normal; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Your Order is on the Way!</h2>
          <p>Hi ${order.customer_name},</p>
          <p>Great news! Your order <strong>${orderId}</strong> has been shipped.</p>
          <p><strong>Courier:</strong> ${courier}<br>
          <strong>Tracking Number:</strong> ${tracking}</p>
          <p>You can track your package directly through the courier's website.</p>
          <p>Thank you for shopping at A Quiet Space.</p>
        </div>
      `;
    } else {
      return new Response(JSON.stringify({ success: false, error: 'Invalid action' }), { status: 400 });
    }

    // 2. Update Database
    const { error: updateError } = await supabase
      .from('orders')
      .update(updateData)
      .eq('id', orderId);

    if (updateError) {
      console.error('[API Admin Status] DB Error:', updateError);
      return new Response(JSON.stringify({ success: false, error: updateError.message }), { status: 500 });
    }

    // 3. Send Email
    // Only attempt to send if Resend API key is available
    if (resendApiKey) {
      try {
        await resend.emails.send({
          from: 'A Quiet Space <orders@aquietspace.id>',
          to: [order.customer_email],
          subject: emailSubject,
          html: emailHtml
        });
        console.log(`[Email Automation] Successfully sent ${action} email to ${order.customer_email}`);
      } catch (emailErr) {
        console.error('[Email Automation] Failed to send email:', emailErr);
        // We don't fail the API request if email fails, because DB is already updated
      }
    } else {
      console.warn('[Email Automation] RESEND_API_KEY not found. Skipping email send.');
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('[API Admin Status] Unexpected error:', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
