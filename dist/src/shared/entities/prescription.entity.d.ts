import { User } from './user.entity';
import { PrescriptionStatus } from '../enums/prescription-status.enum';
export declare class Prescription {
    id: string;
    patientId: string;
    doctorId: string;
    medicationName: string;
    dosage: string;
    frequency: string;
    duration: string;
    instructions: string;
    refills: number;
    refillsUsed: number;
    status: PrescriptionStatus;
    startDate: Date;
    endDate: Date;
    pharmacyName: string;
    pharmacyAddress: string;
    pharmacyPhone: string;
    appointmentId: string;
    medicalRecordId: string;
    createdAt: Date;
    updatedAt: Date;
    patient: User;
    doctor: User;
}
