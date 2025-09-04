import { AppointmentService } from '../services/appointment.service';
import { CreateAppointmentDto, UpdateAppointmentDto, UpdateAppointmentStatusDto, AppointmentQueryDto } from '../dto/appointment.dto';
import { PaginationDto } from '../../../shared/dtos/pagination.dto';
import { User } from '../../../shared/entities/user.entity';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    create(user: User, createAppointmentDto: CreateAppointmentDto): Promise<import("../../../shared/entities/appointment.entity").Appointment>;
    findAll(queryDto: AppointmentQueryDto, paginationDto: PaginationDto): Promise<import("../../../shared/dtos/pagination.dto").PaginatedResponse<import("../../../shared/entities/appointment.entity").Appointment>>;
    getMyAppointments(user: User, paginationDto: PaginationDto): Promise<import("../../../shared/dtos/pagination.dto").PaginatedResponse<import("../../../shared/entities/appointment.entity").Appointment>>;
    getUpcoming(user: User): Promise<import("../../../shared/entities/appointment.entity").Appointment[]>;
    getToday(user: User): Promise<import("../../../shared/entities/appointment.entity").Appointment[]>;
    getStats(user: User, doctorId?: string): Promise<{
        total: number;
        scheduled: number;
        confirmed: number;
        completed: number;
        cancelled: number;
        noShow: number;
    }>;
    findById(id: string): Promise<import("../../../shared/entities/appointment.entity").Appointment>;
    update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<import("../../../shared/entities/appointment.entity").Appointment>;
    updateStatus(id: string, updateStatusDto: UpdateAppointmentStatusDto): Promise<import("../../../shared/entities/appointment.entity").Appointment>;
    cancel(id: string, user: User, reason?: string): Promise<import("../../../shared/entities/appointment.entity").Appointment>;
}
