"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const stripe_1 = require("stripe");
let StripeService = class StripeService {
    constructor(configService) {
        this.configService = configService;
        this.stripe = new stripe_1.default(this.configService.get('STRIPE_SECRET_KEY') || 'sk_test_dummy_key', {
            apiVersion: '2022-11-15',
        });
    }
    async createPaymentIntent(amount, currency = 'usd', metadata) {
        return this.stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency,
            metadata,
        });
    }
    async confirmPaymentIntent(paymentIntentId) {
        return this.stripe.paymentIntents.confirm(paymentIntentId);
    }
    async cancelPaymentIntent(paymentIntentId) {
        return this.stripe.paymentIntents.cancel(paymentIntentId);
    }
    async createRefund(chargeId, amount, reason) {
        const refundData = {
            charge: chargeId,
        };
        if (amount) {
            refundData.amount = Math.round(amount * 100);
        }
        if (reason) {
            refundData.reason = reason;
        }
        return this.stripe.refunds.create(refundData);
    }
    async retrievePaymentIntent(paymentIntentId) {
        return this.stripe.paymentIntents.retrieve(paymentIntentId);
    }
    async retrieveCharge(chargeId) {
        return this.stripe.charges.retrieve(chargeId);
    }
    async createCustomer(email, name, metadata) {
        return this.stripe.customers.create({
            email,
            name,
            metadata,
        });
    }
    async retrieveCustomer(customerId) {
        return this.stripe.customers.retrieve(customerId);
    }
    async updateCustomer(customerId, updateData) {
        return this.stripe.customers.update(customerId, updateData);
    }
    constructWebhookEvent(payload, signature) {
        const webhookSecret = this.configService.get('STRIPE_WEBHOOK_SECRET');
        if (!webhookSecret) {
            throw new Error('Stripe webhook secret not configured');
        }
        return this.stripe.webhooks.constructEvent(payload, signature, webhookSecret);
    }
};
exports.StripeService = StripeService;
exports.StripeService = StripeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], StripeService);
//# sourceMappingURL=stripe.service.js.map