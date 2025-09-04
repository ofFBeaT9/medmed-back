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
exports.PaymentGatewayService = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
let PaymentGatewayService = class PaymentGatewayService {
    constructor() {
        this.stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2022-11-15',
        });
    }
    async createPaymentIntent(amount, currency, paymentMethodId, customerId) {
        const paymentIntentOptions = {
            amount,
            currency,
            confirm: paymentMethodId ? true : false,
            payment_method: paymentMethodId,
            customer: customerId,
            metadata: {},
        };
        if (paymentMethodId) {
            paymentIntentOptions.confirm = true;
            paymentIntentOptions.payment_method = paymentMethodId;
        }
        return this.stripe.paymentIntents.create(paymentIntentOptions);
    }
    async capturePaymentIntent(paymentIntentId) {
        return this.stripe.paymentIntents.capture(paymentIntentId);
    }
    async createRefund(chargeId, amount) {
        const refundOptions = {
            charge: chargeId,
            amount,
        };
        return this.stripe.refunds.create(refundOptions);
    }
    async createCustomer(email, name, paymentMethodId) {
        return this.stripe.customers.create({
            email,
            name,
            payment_method: paymentMethodId,
            invoice_settings: {
                default_payment_method: paymentMethodId,
            },
        });
    }
    async attachPaymentMethod(paymentMethodId, customerId) {
        return this.stripe.paymentMethods.attach(paymentMethodId, {
            customer: customerId,
        });
    }
};
exports.PaymentGatewayService = PaymentGatewayService;
exports.PaymentGatewayService = PaymentGatewayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PaymentGatewayService);
//# sourceMappingURL=payment-gateway-service.js.map