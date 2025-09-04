import { AppointmentStatus } from '../../../shared/enums/appointment-status.enum';
export declare class CreateAppointmentDto {
    doctorId: string;
    appointmentDate: string;
    duration: number;
    reason?: string;
    fee?: number;
    isOnline?: boolean;
    meetingLink?: string;
}
export declare class UpdateAppointmentDto {
    appointmentDate?: string;
    duration?: number;
    reason?: string;
    notes?: string;
    fee?: number;
    isOnline?: boolean;
    meetingLink?: string;
}
export declare class UpdateAppointmentStatusDto {
    status: AppointmentStatus;
    cancelReason?: string;
}
export declare class AppointmentQueryDto {
    doctorId?: string;
    patientId?: string;
    status?: AppointmentStatus;
    date?: string;
    startDate?: string;
    endDate?: string;
}
