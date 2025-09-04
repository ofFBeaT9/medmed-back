import { Repository } from 'typeorm';
import { Appointment } from '../../../shared/entities/appointment.entity';
import { User } from '../../../shared/entities/user.entity';
import { CreateAppointmentDto, UpdateAppointmentDto, UpdateAppointmentStatusDto, AppointmentQueryDto } from '../dto/appointment.dto';
import { PaginationDto, PaginatedResponse } from '../../../shared/dtos/pagination.dto';
import { EmailService } from '../../../shared/modules/email/email.service';
export declare class AppointmentService {
    private readonly appointmentRepository;
    private readonly userRepository;
    private readonly emailService;
    constructor(appointmentRepository: Repository<Appointment>, userRepository: Repository<User>, emailService: EmailService);
    create(patientId: string, createAppointmentDto: CreateAppointmentDto): Promise<Appointment>;
    findAll(queryDto: AppointmentQueryDto, paginationDto: PaginationDto): Promise<PaginatedResponse<Appointment>>;
    findById(id: string): Promise<Appointment>;
    findByPatient(patientId: string, paginationDto: PaginationDto): Promise<PaginatedResponse<Appointment>>;
    findByDoctor(doctorId: string, paginationDto: PaginationDto): Promise<PaginatedResponse<Appointment>>;
    update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment>;
    updateStatus(id: string, updateStatusDto: UpdateAppointmentStatusDto): Promise<Appointment>;
    cancel(id: string, cancelReason?: string, cancelledBy?: string): Promise<Appointment>;
    getUpcomingAppointments(userId: string, userRole: string): Promise<Appointment[]>;
    getTodayAppointments(userId: string, userRole: string): Promise<Appointment[]>;
    getAppointmentStats(doctorId?: string): Promise<{
        total: number;
        scheduled: number;
        confirmed: number;
        completed: number;
        cancelled: number;
        noShow: number;
    }>;
}
