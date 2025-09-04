import { User } from './user.entity';
import { AppointmentStatus } from '../enums/appointment-status.enum';
export declare class Appointment {
    id: string;
    patientId: string;
    doctorId: string;
    appointmentDate: Date;
    duration: number;
    status: AppointmentStatus;
    reason: string;
    notes: string;
    fee: number;
    meetingLink: string;
    isOnline: boolean;
    cancelReason: string;
    cancelledBy: string;
    cancelledAt: Date;
    createdAt: Date;
    updatedAt: Date;
    patient: User;
    doctor: User;
}
