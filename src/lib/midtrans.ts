import { 
  type OrderDetails, 
  type OrderStatus, 
  mapMidtransStatusToOrderStatus, 
  transitionOrderStatus 
} from './order';
import { queueConfirmationEmail } from './email';

/**
 * Midtrans Snap API Integration Service (Scaffolding & Preparation)
 * 
 * Production Guide:
 * 1. Install Midtrans Node.js SDK: `npm install midtrans-client`
 * 2. Configure server-side API keys (Client Key & Server Key) in .env
 * 3. Replace these placeholders with live Midtrans API payloads.
 */

export interface TransactionDetails {
  orderId: string;
  grossAmount: number;
}

export interface CustomerDetails {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
}

export interface ItemDetails {
  id: string;
  price: number;
  quantity: number;
  name: string;
}

export interface MidtransTransactionParams {
  transactionDetails: TransactionDetails;
  customerDetails: CustomerDetails;
  itemDetails: ItemDetails[];
}

/**
 * Server-Side Action: Create Midtrans Snap Transaction Token
 * 
 * Future flow:
 * - Triggered by client checkout form submit via an Astro API route or server-side function.
 * - Authenticates with Midtrans Server Key.
 * - Returns a unique `snap_token` and `redirect_url`.
 * 
 * @param params Transaction details, customer contact info, and item list
 */
export async function createSnapTransaction(params: MidtransTransactionParams): Promise<{ token: string; redirectUrl: string }> {
  console.log('[Midtrans Service] Future transaction creation payload mapping:', params);
  
  // In production, this would do:
  // const snap = new midtransClient.Snap({
  //   isProduction: false,
  //   serverKey: import.meta.env.MIDTRANS_SERVER_KEY,
  //   clientKey: import.meta.env.MIDTRANS_CLIENT_KEY
  // });
  // const parameter = {
  //   transaction_details: {
  //     order_id: params.transactionDetails.orderId,
  //     gross_amount: params.transactionDetails.grossAmount
  //   },
  //   credit_card: { secure: true },
  //   customer_details: {
  //     first_name: params.customerDetails.firstName,
  //     email: params.customerDetails.email,
  //     phone: params.customerDetails.phone
  //   },
  //   item_details: params.itemDetails.map(item => ({
  //     id: item.id,
  //     price: item.price,
  //     quantity: item.quantity,
  //     name: item.name
  //   }))
  // };
  // const transaction = await snap.createTransaction(parameter);
  // return { token: transaction.token, redirectUrl: transaction.redirect_url };

  // Sandbox simulation token
  const mockToken = 'snap-tok-' + Math.floor(100000 + Math.random() * 900000);
  return {
    token: mockToken,
    redirectUrl: `https://app.sandbox.midtrans.com/snap/v2/vtweb/${mockToken}`
  };
}

/**
 * Midtrans Webhook Notification Handler (Server-Side)
 * 
 * Handles incoming status webhook requests from Midtrans servers, parses transition statuses, 
 * commits changes to the order details object, and triggers transactional notification emails.
 * 
 * @param notificationPayload JSON payload forwarded directly from Midtrans webhook trigger
 * @param currentOrder The matching order details fetched from the database
 * @returns Updated order details containing new state and payment metadata
 */
export async function processWebhookPaymentNotification(
  notificationPayload: any, 
  currentOrder: OrderDetails
): Promise<OrderDetails> {
  console.log('[Midtrans Service] Processing webhook notification payload:', notificationPayload);
  
  // Verify Midtrans Webhook Signature in Production:
  // Signature formula: SHA512(order_id + status_code + gross_amount + server_key)
  // E.g.:
  // const signatureStr = `${notificationPayload.order_id}${notificationPayload.status_code}${notificationPayload.gross_amount}${import.meta.env.MIDTRANS_SERVER_KEY}`;
  // const hash = crypto.createHash('sha512').update(signatureStr).digest('hex');
  // if (hash !== notificationPayload.signature_key) throw new Error("Invalid signature key");

  const midtransStatus = notificationPayload.transaction_status;
  const fraudStatus = notificationPayload.fraud_status;
  
  // Map gateway status to internal OrderStatus
  const newStatus: OrderStatus = mapMidtransStatusToOrderStatus(midtransStatus, fraudStatus);
  
  // Record payment metadata
  const paymentMetadata = {
    transactionId: notificationPayload.transaction_id,
    paymentType: notificationPayload.payment_type,
    vaNumber: notificationPayload.va_numbers?.[0]?.va_number,
    bank: notificationPayload.va_numbers?.[0]?.bank,
    expiryTime: notificationPayload.expiry_time,
    settlementTime: notificationPayload.settlement_time || new Date().toISOString(),
    fraudStatus: fraudStatus
  };

  const note = `Midtrans Webhook: status changed to '${midtransStatus}' (Mapped: '${newStatus}').`;
  
  let updatedOrder = transitionOrderStatus(currentOrder, newStatus, note);
  updatedOrder.paymentMetadata = paymentMetadata;

  // Trigger Transactional Email notifications based on status change
  if (newStatus === 'Paid') {
    await queueConfirmationEmail(updatedOrder, 'ORDER_CONFIRMED');
  } else if (newStatus === 'Cancelled') {
    await queueConfirmationEmail(updatedOrder, 'ORDER_CANCELLED');
  }

  return updatedOrder;
}
