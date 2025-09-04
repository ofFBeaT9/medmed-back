import Stripe from 'stripe';
export declare class PaymentGatewayService {
    private stripe;
    constructor();
    createPaymentIntent(amount: number, currency: string, paymentMethodId?: string, customerId?: string): Promise<Stripe.PaymentIntent>;
    capturePaymentIntent(paymentIntentId: string): Promise<Stripe.PaymentIntent>;
    createRefund(chargeId: string, amount?: number): Promise<Stripe.Refund>;
    createCustomer(email: string, name: string, paymentMethodId?: string): Promise<Stripe.Customer>;
    attachPaymentMethod(paymentMethodId: string, customerId: string): Promise<Stripe.PaymentMethod>;
}
