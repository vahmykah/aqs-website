/**
 * Order Confirmation & Transactional Email Notification System Architecture
 * 
 * Production Guide:
 * Connect this architecture to an email service provider (ESP) API like:
 * - Resend: `npm install resend` (Recommended for modern Astro sites)
 * - Mailgun: `npm install mailgun.js`
 * - SendGrid: `npm install @sendgrid/mail`
 * - SMTP Client: NodeMailer
 */

import type { OrderDetails } from './order';

export type EmailType = 
  | 'ORDER_CONFIRMED'  // Payment Successful / Settlement
  | 'ORDER_AWAITING'   // Order created, awaiting payment (e.g. shows VA transfer number / instructions)
  | 'ORDER_SHIPPED'    // Shipped (contains carrier tracking number / waybill / resi)
  | 'ORDER_CANCELLED';  // Order cancelled / expired

export interface EmailQueueEntry {
  id: string; // Unique queue ID
  orderId: string;
  recipientEmail: string;
  emailType: EmailType;
  status: 'queued' | 'sent' | 'failed';
  attempts: number;
  lastAttemptAt?: string;
  createdAt: string;
  sentAt?: string;
  error?: string;
}

/**
 * Generate a mockup HTML template body for transactional emails.
 * These utilize clean, responsive, and minimalist typography matching AQS aesthetics.
 */
export function generateEmailHtml(type: EmailType, order: OrderDetails): string {
  const formatCurrency = (amount: number) => {
    return 'IDR ' + amount.toLocaleString('id-ID').replace(/,/g, '.');
  };

  const itemsHtml = order.items.map(item => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-family: sans-serif; font-size: 14px; color: #111111;">
        <strong>${item.name}</strong> <span style="color: #666666; font-size: 12px;">× ${item.quantity}</span>
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-family: sans-serif; font-size: 14px; color: #111111; text-align: right;">
        ${formatCurrency(item.price * item.quantity)}
      </td>
    </tr>
  `).join('');

  const headerText = {
    ORDER_CONFIRMED: "YOUR PAYMENT IS CONFIRMED.",
    ORDER_AWAITING: "ORDER CREATED. AWAITING PAYMENT.",
    ORDER_SHIPPED: "YOUR ORDER HAS SHIPPED.",
    ORDER_CANCELLED: "YOUR ORDER WAS CANCELLED."
  }[type];

  const subheaderText = {
    ORDER_CONFIRMED: "Thank you for carrying what matters. We are preparing your shipment.",
    ORDER_AWAITING: "Your order is reserved. Please finalize payment using the selected gateway method.",
    ORDER_SHIPPED: `Your carrying system is on its way. Track your package via ${order.shippingMethod}.`,
    ORDER_CANCELLED: "This order transaction was expired or cancelled. No funds were captured."
  }[type];

  const trackingSnippet = type === 'ORDER_SHIPPED' && order.shippingMetadata?.trackingNumber ? `
    <div style="margin: 24px 0; padding: 16px; border: 1px solid #111111; background-color: #fafafa; font-family: sans-serif;">
      <h3 style="margin-top: 0; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Tracking Details</h3>
      <p style="font-size: 14px; margin: 4px 0; color: #333333;"><strong>Courier:</strong> ${order.shippingMethod}</p>
      <p style="font-size: 14px; margin: 4px 0; color: #333333;"><strong>Waybill (Resi):</strong> <code style="background-color: #eee; padding: 2px 6px;">${order.shippingMetadata.trackingNumber}</code></p>
    </div>
  ` : '';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${headerText}</title>
    </head>
    <body style="margin: 0; padding: 40px 0; background-color: #f7f7f7; -webkit-text-size-adjust: none;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
        <tr>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; padding: 48px; border: 1px solid #e5e5e5; text-align: left;">
              <!-- Brand Header -->
              <tr>
                <td style="padding-bottom: 40px; border-bottom: 2px solid #111111;">
                  <h1 style="margin: 0; font-family: serif; font-weight: normal; font-size: 20px; letter-spacing: 0.2em; color: #111111;">A QUIET SPACE</h1>
                </td>
              </tr>
              
              <!-- Message Headline -->
              <tr>
                <td style="padding: 40px 0 20px 0;">
                  <h2 style="margin: 0; font-family: serif; font-weight: normal; font-size: 24px; letter-spacing: 0.05em; color: #111111; line-height: 1.3;">
                    ${headerText}
                  </h2>
                  <p style="margin: 12px 0 0 0; font-family: sans-serif; font-size: 14px; color: #666666; line-height: 1.6;">
                    ${subheaderText}
                  </p>
                </td>
              </tr>

              <!-- Tracking/Courier snippet -->
              <tr>
                <td>
                  ${trackingSnippet}
                </td>
              </tr>

              <!-- Order Summary table -->
              <tr>
                <td style="padding-top: 20px;">
                  <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 12px; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase; color: #111111; border-bottom: 1px solid #111111; padding-bottom: 6px;">
                    Order Details (${order.orderId})
                  </h3>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px;">
                    ${itemsHtml}
                    <!-- Pricing lines -->
                    <tr>
                      <td style="padding: 16px 0 8px 0; font-family: sans-serif; font-size: 14px; color: #666666;">Subtotal</td>
                      <td style="padding: 16px 0 8px 0; font-family: sans-serif; font-size: 14px; color: #111111; text-align: right;">
                        ${formatCurrency(order.subtotal)}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #666666;">Shipping (${order.shippingMethod})</td>
                      <td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #111111; text-align: right;">
                        ${formatCurrency(order.shippingCost)}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 16px 0 0 0; border-top: 1px solid #111111; font-family: sans-serif; font-size: 16px; font-weight: bold; color: #111111;">Total Payment</td>
                      <td style="padding: 16px 0 0 0; border-top: 1px solid #111111; font-family: sans-serif; font-size: 16px; font-weight: bold; color: #111111; text-align: right;">
                        ${formatCurrency(order.orderTotal)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Customer Details -->
              <tr>
                <td style="padding: 24px; background-color: #fafafa; border: 1px solid #eeeeee;">
                  <h4 style="margin: 0 0 8px 0; font-family: sans-serif; font-size: 12px; font-weight: bold; letter-spacing: 0.08em; text-transform: uppercase; color: #111111;">
                    Shipping Address
                  </h4>
                  <p style="margin: 0; font-family: sans-serif; font-size: 13px; color: #555555; line-height: 1.5;">
                    <strong>${order.customer.name}</strong><br>
                    ${order.shippingAddress.fullAddress}<br>
                    ${order.shippingAddress.district}, ${order.shippingAddress.city}<br>
                    ${order.shippingAddress.province} ${order.shippingAddress.postalCode}<br>
                    Phone: ${order.customer.phone}
                  </p>
                </td>
              </tr>

              <!-- Footer notice -->
              <tr>
                <td style="padding-top: 40px; border-top: 1px solid #eeeeee; text-align: center;">
                  <p style="margin: 0; font-family: sans-serif; font-size: 11px; color: #999999; line-height: 1.4;">
                    This is an automated transactional receipt from A Quiet Space.<br>
                    Questions? Write to us at <a href="mailto:info@aquietspace.id" style="color: #111111; text-decoration: underline;">info@aquietspace.id</a>.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

/**
 * Simulates queuing an order confirmation email to the database/outbox queue.
 * Logs output details to verify exactly what transactional messages will be generated.
 */
export async function queueConfirmationEmail(order: OrderDetails, type: EmailType): Promise<EmailQueueEntry> {
  const queueEntry: EmailQueueEntry = {
    id: 'qmail-' + Math.floor(100000 + Math.random() * 900000),
    orderId: order.orderId,
    recipientEmail: order.customer.email,
    emailType: type,
    status: 'queued',
    attempts: 0,
    createdAt: new Date().toISOString()
  };

  console.log(`[Email Queue System] Queued ${type} notification successfully for ${order.customer.email}.`);
  console.log(`[Email Queue System] Entry Detail:`, {
    queueId: queueEntry.id,
    orderId: queueEntry.orderId,
    recipient: queueEntry.recipientEmail,
    subject: `[A Quiet Space] Order Update - ${order.orderId}`
  });

  // Simulated immediate background execution:
  setTimeout(() => {
    queueEntry.attempts += 1;
    queueEntry.status = 'sent';
    queueEntry.sentAt = new Date().toISOString();
    queueEntry.lastAttemptAt = queueEntry.sentAt;
    console.log(`[Email Queue System] Sent ${type} notification email for ${order.orderId} to ${order.customer.email}.`);
  }, 200);

  return queueEntry;
}
