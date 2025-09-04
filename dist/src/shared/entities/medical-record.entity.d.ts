import { User } from './user.entity';
export declare class MedicalRecord {
    id: string;
    patientId: string;
    doctorId: string;
    title: string;
    description: string;
    diagnosis: string;
    treatment: string;
    medications: string;
    allergies: string;
    vitals: string;
    labResults: string;
    attachments: string[];
    followUpInstructions: string;
    followUpDate: Date;
    isPrivate: boolean;
    appointmentId: string;
    createdAt: Date;
    updatedAt: Date;
    patient: User;
    doctor: User;
}
