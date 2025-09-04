import { Repository } from 'typeorm';
import { AvailabilitySlot } from '../../../shared/entities/availabilityslot.entity';
export declare class AvailabilitySlotService {
    private readonly availabilitySlotRepository;
    constructor(availabilitySlotRepository: Repository<AvailabilitySlot>);
    findByDoctorAndDate(doctorId: string, date: string): Promise<AvailabilitySlot[]>;
}
