import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
export declare class StripeService {
    private configService;
    private stripe;
    constructor(configService: ConfigService);
    createPaymentIntent(amount: number, currency?: string, metadata?: any): Promise<Stripe.PaymentIntent>;
    confirmPaymentIntent(paymentIntentId: string): Promise<Stripe.PaymentIntent>;
    cancelPaymentIntent(paymentIntentId: string): Promise<Stripe.PaymentIntent>;
    createRefund(chargeId: string, amount?: number, reason?: string): Promise<Stripe.Refund>;
    retrievePaymentIntent(paymentIntentId: string): Promise<Stripe.PaymentIntent>;
    retrieveCharge(chargeId: string): Promise<Stripe.Charge>;
    createCustomer(email: string, name: string, metadata?: any): Promise<Stripe.Customer>;
    retrieveCustomer(customerId: string): Promise<Stripe.Customer>;
    updateCustomer(customerId: string, updateData: Stripe.CustomerUpdateParams): Promise<Stripe.Customer>;
    constructWebhookEvent(payload: Buffer, signature: string): Stripe.Event;
}
