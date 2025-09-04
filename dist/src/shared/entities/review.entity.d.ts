import { User } from './user.entity';
export declare class Review {
    id: string;
    patientId: string;
    doctorId: string;
    rating: number;
    comment: string;
    appointmentId: string;
    isAnonymous: boolean;
    isPublic: boolean;
    doctorResponse: string;
    doctorResponseDate: Date;
    createdAt: Date;
    updatedAt: Date;
    patient: User;
    doctor: User;
}
