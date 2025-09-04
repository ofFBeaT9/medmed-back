"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = exports.TransactionStatus = void 0;
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["COMPLETED"] = "completed";
    TransactionStatus["FAILED"] = "failed";
    TransactionStatus["REFUNDED"] = "refunded";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["APPOINTMENT_PAYMENT"] = "appointment_payment";
    TransactionType["CONSULTATION_FEE"] = "consultation_fee";
    TransactionType["PRESCRIPTION_FEE"] = "prescription_fee";
    TransactionType["REFUND"] = "refund";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
//# sourceMappingURL=transaction.enum.js.map