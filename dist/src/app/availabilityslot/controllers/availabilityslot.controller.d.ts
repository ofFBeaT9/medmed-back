import { AvailabilitySlotService } from '../services/availabilityslot.service';
export declare class AvailabilitySlotController {
    private readonly availabilitySlotService;
    constructor(availabilitySlotService: AvailabilitySlotService);
    findByDoctor(doctorId: string, date: string): Promise<import("../../../shared/entities/availabilityslot.entity").AvailabilitySlot[]>;
}
