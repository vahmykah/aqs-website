import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Generate order ID (AQS-1000 to AQS-9999)
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `AQS-${randomNum}`;

    const { error } = await supabase
      .from('orders')
      .insert([
        {
          id: orderId,
          customer_name: data.customer.name,
          customer_email: data.customer.email,
          customer_phone: data.customer.phone,
          shipping_province: data.shippingAddress.province,
          shipping_city: data.shippingAddress.city,
          shipping_postal_code: data.shippingAddress.postalCode,
          shipping_address: data.shippingAddress.fullAddress,
          shipping_method: data.shippingMethod,
          shipping_cost: data.shippingCost,
          subtotal: data.subtotal,
          total_amount: data.orderTotal,
          items: data.items,
          payment_status: 'Pending Payment',
          fulfillment_status: 'Unfulfilled'
        }
      ]);

    if (error) {
      console.error('[API Orders] Failed to insert order to Supabase:', error);
      return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, orderId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('[API Orders] Error creating order:', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
