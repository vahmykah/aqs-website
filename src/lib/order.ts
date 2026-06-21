/**
 * Order Flow Architecture & Data Models (Production Ready)
 */

export type OrderStatus = 
  | 'Pending Payment' 
  | 'Paid' 
  | 'Processing' 
  | 'Shipped' 
  | 'Delivered' 
  | 'Cancelled';

export interface OrderStatusHistoryEntry {
  status: OrderStatus;
  timestamp: string; // ISO string
  note?: string; // Additional context (e.g. "Payment received via QRIS GoPay", "Waybill JNE-82910 generated")
}

export interface PaymentMetadata {
  transactionId?: string; // Midtrans transaction_id
  paymentType?: string; // credit_card, bank_transfer, qris, gopay, etc.
  vaNumber?: string; // Virtual Account number if bank_transfer
  bank?: string; // Bank name (bca, mandiri, bni, bri)
  pdfUrl?: string; // Payment instructions PDF link from Midtrans
  expiryTime?: string; // ISO string
  settlementTime?: string; // ISO string when transaction transitioned to Paid
  fraudStatus?: string; // accept, deny, challenge
}

export interface ShippingMetadata {
  trackingNumber?: string; // Resi / waybill number (e.g. JNE-182901)
  carrier?: string; // JNE, J&T, SiCepat
  shippedAt?: string; // ISO string
  deliveredAt?: string; // ISO string
}

export interface OrderItem {
  id: string;
  name: string;
  price: number; // Stored as a raw numeric value
  quantity: number;
}

export interface OrderDetails {
  orderId: string; // Format: AQS-XXXXX
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  shippingAddress: {
    province: string;
    city: string;
    district: string;
    postalCode: string;
    fullAddress: string;
  };
  items: OrderItem[];
  shippingMethod: string;
  shippingCost: number; // Raw numeric value
  subtotal: number; // Raw numeric value
  orderTotal: number; // Raw numeric value
  paymentMethod: string; // QRIS, Virtual Account, E-Wallet
  paymentStatus: OrderStatus;
  statusHistory: OrderStatusHistoryEntry[];
  paymentMetadata?: PaymentMetadata;
  shippingMetadata?: ShippingMetadata;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
}

/**
 * Webhook-ready notification mapper
 * Map Midtrans transaction_status to AQS OrderStatus
 * Reference: https://docs.midtrans.com/reference/features-3
 */
export function mapMidtransStatusToOrderStatus(transactionStatus: string, fraudStatus?: string): OrderStatus {
  switch (transactionStatus) {
    case 'capture':
      if (fraudStatus === 'challenge') {
        return 'Pending Payment'; // Midtrans requires review
      }
      return 'Paid';
    case 'settlement':
      return 'Paid';
    case 'pending':
      return 'Pending Payment';
    case 'deny':
    case 'expire':
    case 'cancel':
      return 'Cancelled';
    default:
      return 'Pending Payment';
  }
}

/**
 * Transition an Order to a new status, recording it in its statusHistory logs.
 */
export function transitionOrderStatus(
  order: OrderDetails, 
  newStatus: OrderStatus, 
  note?: string
): OrderDetails {
  const now = new Date().toISOString();
  
  const updatedHistory = [
    ...order.statusHistory,
    {
      status: newStatus,
      timestamp: now,
      note
    }
  ];

  return {
    ...order,
    paymentStatus: newStatus,
    statusHistory: updatedHistory,
    updatedAt: now
  };
}
