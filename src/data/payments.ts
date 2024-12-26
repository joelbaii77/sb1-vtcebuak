export const paymentMethods = [
  { name: 'Visa', icon: 'visa' },
  { name: 'Mastercard', icon: 'mastercard' },
  { name: 'American Express', icon: 'amex' },
  { name: 'Afterpay', icon: 'afterpay' }
] as const;

export type PaymentMethod = typeof paymentMethods[number]['icon'];