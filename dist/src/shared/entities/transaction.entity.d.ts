import { User } from './user.entity';
import { TransactionStatus, TransactionType } from '../enums/transaction.enum';
export declare class Transaction {
    id: string;
    patientId: string;
    doctorId: string;
    type: TransactionType;
    amount: number;
    currency: string;
    status: TransactionStatus;
    stripePaymentIntentId: string;
    stripeChargeId: string;
    appointmentId: string;
    prescriptionId: string;
    description: string;
    metadata: any;
    refundId: string;
    refundAmount: number;
    refundReason: string;
    refundedAt: Date;
    failureReason: string;
    createdAt: Date;
    updatedAt: Date;
    patient: User;
    doctor: User;
}
