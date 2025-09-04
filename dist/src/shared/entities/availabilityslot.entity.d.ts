import { User } from './user.entity';
export declare class AvailabilitySlot {
    id: string;
    doctorId: string;
    date: Date;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
    isRecurring: boolean;
    recurringDays: string[];
    recurringEndDate: Date;
    unavailableReason: string;
    createdAt: Date;
    updatedAt: Date;
    doctor: User;
}
