"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const appointment_entity_1 = require("../../../shared/entities/appointment.entity");
const user_entity_1 = require("../../../shared/entities/user.entity");
const pagination_dto_1 = require("../../../shared/dtos/pagination.dto");
const appointment_status_enum_1 = require("../../../shared/enums/appointment-status.enum");
const email_service_1 = require("../../../shared/modules/email/email.service");
let AppointmentService = class AppointmentService {
    constructor(appointmentRepository, userRepository, emailService) {
        this.appointmentRepository = appointmentRepository;
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
    async create(patientId, createAppointmentDto) {
        const { doctorId, appointmentDate, ...appointmentData } = createAppointmentDto;
        const doctor = await this.userRepository.findOne({
            where: { id: doctorId, role: 'physician', isActive: true },
        });
        if (!doctor) {
            throw new common_1.NotFoundException('Doctor not found or inactive');
        }
        const patient = await this.userRepository.findOne({
            where: { id: patientId, isActive: true },
        });
        if (!patient) {
            throw new common_1.NotFoundException('Patient not found or inactive');
        }
        const appointmentDateTime = new Date(appointmentDate);
        const endTime = new Date(appointmentDateTime.getTime() + (createAppointmentDto.duration * 60000));
        const conflictingAppointment = await this.appointmentRepository
            .createQueryBuilder('appointment')
            .where('appointment.doctorId = :doctorId', { doctorId })
            .andWhere('appointment.status IN (:...statuses)', {
            statuses: [appointment_status_enum_1.AppointmentStatus.SCHEDULED, appointment_status_enum_1.AppointmentStatus.CONFIRMED, appointment_status_enum_1.AppointmentStatus.IN_PROGRESS]
        })
            .andWhere('appointment.appointmentDate < :endTime', { endTime })
            .andWhere('DATETIME(appointment.appointmentDate, "+" || appointment.duration || " minutes") > DATETIME(:startTime)', {
            startTime: appointmentDateTime
        })
            .getOne();
        if (conflictingAppointment) {
            throw new common_1.ConflictException('Doctor is not available at this time');
        }
        const appointment = this.appointmentRepository.create({
            patientId,
            doctorId,
            appointmentDate: appointmentDateTime,
            ...appointmentData,
        });
        const savedAppointment = await this.appointmentRepository.save(appointment);
        try {
            await this.emailService.sendAppointmentConfirmation(patient.email, {
                patientName: `${patient.firstName} ${patient.lastName}`,
                doctorName: `Dr. ${doctor.firstName} ${doctor.lastName}`,
                date: appointmentDateTime.toDateString(),
                time: appointmentDateTime.toTimeString(),
            });
        }
        catch (error) {
            console.error('Failed to send appointment confirmation:', error);
        }
        return this.findById(savedAppointment.id);
    }
    async findAll(queryDto, paginationDto) {
        const { page, limit, skip } = paginationDto;
        const queryBuilder = this.appointmentRepository.createQueryBuilder('appointment')
            .leftJoinAndSelect('appointment.patient', 'patient')
            .leftJoinAndSelect('appointment.doctor', 'doctor');
        if (queryDto.doctorId) {
            queryBuilder.andWhere('appointment.doctorId = :doctorId', { doctorId: queryDto.doctorId });
        }
        if (queryDto.patientId) {
            queryBuilder.andWhere('appointment.patientId = :patientId', { patientId: queryDto.patientId });
        }
        if (queryDto.status) {
            queryBuilder.andWhere('appointment.status = :status', { status: queryDto.status });
        }
        if (queryDto.date) {
            const startOfDay = new Date(queryDto.date);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(queryDto.date);
            endOfDay.setHours(23, 59, 59, 999);
            queryBuilder.andWhere('appointment.appointmentDate BETWEEN :startOfDay AND :endOfDay', {
                startOfDay,
                endOfDay,
            });
        }
        if (queryDto.startDate && queryDto.endDate) {
            queryBuilder.andWhere('appointment.appointmentDate BETWEEN :startDate AND :endDate', {
                startDate: new Date(queryDto.startDate),
                endDate: new Date(queryDto.endDate),
            });
        }
        const [appointments, total] = await queryBuilder
            .orderBy('appointment.appointmentDate', 'ASC')
            .skip(skip)
            .take(limit)
            .getManyAndCount();
        return new pagination_dto_1.PaginatedResponse(appointments, total, page, limit);
    }
    async findById(id) {
        const appointment = await this.appointmentRepository.findOne({
            where: { id },
            relations: ['patient', 'doctor'],
        });
        if (!appointment) {
            throw new common_1.NotFoundException('Appointment not found');
        }
        return appointment;
    }
    async findByPatient(patientId, paginationDto) {
        const queryDto = { patientId };
        return this.findAll(queryDto, paginationDto);
    }
    async findByDoctor(doctorId, paginationDto) {
        const queryDto = { doctorId };
        return this.findAll(queryDto, paginationDto);
    }
    async update(id, updateAppointmentDto) {
        const appointment = await this.findById(id);
        if (updateAppointmentDto.appointmentDate) {
            const newDateTime = new Date(updateAppointmentDto.appointmentDate);
            const duration = updateAppointmentDto.duration || appointment.duration;
            const endTime = new Date(newDateTime.getTime() + (duration * 60000));
            const conflictingAppointment = await this.appointmentRepository
                .createQueryBuilder('appointment')
                .where('appointment.doctorId = :doctorId', { doctorId: appointment.doctorId })
                .andWhere('appointment.id != :appointmentId', { appointmentId: id })
                .andWhere('appointment.status IN (:...statuses)', {
                statuses: [appointment_status_enum_1.AppointmentStatus.SCHEDULED, appointment_status_enum_1.AppointmentStatus.CONFIRMED, appointment_status_enum_1.AppointmentStatus.IN_PROGRESS]
            })
                .andWhere('appointment.appointmentDate < :endTime', { endTime })
                .andWhere('DATETIME(appointment.appointmentDate, "+" || appointment.duration || " minutes") > DATETIME(:startTime)', {
                startTime: newDateTime
            })
                .getOne();
            if (conflictingAppointment) {
                throw new common_1.ConflictException('Doctor is not available at this time');
            }
            appointment.appointmentDate = newDateTime;
        }
        Object.assign(appointment, updateAppointmentDto);
        await this.appointmentRepository.save(appointment);
        return this.findById(id);
    }
    async updateStatus(id, updateStatusDto) {
        const appointment = await this.findById(id);
        if (updateStatusDto.status === appointment_status_enum_1.AppointmentStatus.CANCELLED) {
            appointment.cancelReason = updateStatusDto.cancelReason;
            appointment.cancelledAt = new Date();
        }
        appointment.status = updateStatusDto.status;
        await this.appointmentRepository.save(appointment);
        return this.findById(id);
    }
    async cancel(id, cancelReason, cancelledBy) {
        const appointment = await this.findById(id);
        if (appointment.status === appointment_status_enum_1.AppointmentStatus.CANCELLED) {
            throw new common_1.BadRequestException('Appointment is already cancelled');
        }
        if (appointment.status === appointment_status_enum_1.AppointmentStatus.COMPLETED) {
            throw new common_1.BadRequestException('Cannot cancel a completed appointment');
        }
        appointment.status = appointment_status_enum_1.AppointmentStatus.CANCELLED;
        appointment.cancelReason = cancelReason;
        appointment.cancelledBy = cancelledBy;
        appointment.cancelledAt = new Date();
        await this.appointmentRepository.save(appointment);
        return this.findById(id);
    }
    async getUpcomingAppointments(userId, userRole) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        const queryBuilder = this.appointmentRepository.createQueryBuilder('appointment')
            .leftJoinAndSelect('appointment.patient', 'patient')
            .leftJoinAndSelect('appointment.doctor', 'doctor')
            .where('appointment.appointmentDate >= :tomorrow', { tomorrow })
            .andWhere('appointment.status IN (:...statuses)', {
            statuses: [appointment_status_enum_1.AppointmentStatus.SCHEDULED, appointment_status_enum_1.AppointmentStatus.CONFIRMED]
        });
        if (userRole === 'patient') {
            queryBuilder.andWhere('appointment.patientId = :userId', { userId });
        }
        else if (userRole === 'doctor' || userRole === 'physician') {
            queryBuilder.andWhere('appointment.doctorId = :userId', { userId });
        }
        return queryBuilder
            .orderBy('appointment.appointmentDate', 'ASC')
            .limit(5)
            .getMany();
    }
    async getTodayAppointments(userId, userRole) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const queryBuilder = this.appointmentRepository.createQueryBuilder('appointment')
            .leftJoinAndSelect('appointment.patient', 'patient')
            .leftJoinAndSelect('appointment.doctor', 'doctor')
            .where('appointment.appointmentDate >= :today', { today })
            .andWhere('appointment.appointmentDate < :tomorrow', { tomorrow });
        if (userRole === 'patient') {
            queryBuilder.andWhere('appointment.patientId = :userId', { userId });
        }
        else if (userRole === 'doctor' || userRole === 'physician') {
            queryBuilder.andWhere('appointment.doctorId = :userId', { userId });
        }
        return queryBuilder
            .orderBy('appointment.appointmentDate', 'ASC')
            .getMany();
    }
    async getAppointmentStats(doctorId) {
        const queryBuilder = this.appointmentRepository.createQueryBuilder('appointment');
        if (doctorId) {
            queryBuilder.where('appointment.doctorId = :doctorId', { doctorId });
        }
        const [total, scheduled, confirmed, completed, cancelled, noShow,] = await Promise.all([
            queryBuilder.getCount(),
            queryBuilder.clone().andWhere('appointment.status = :status', { status: appointment_status_enum_1.AppointmentStatus.SCHEDULED }).getCount(),
            queryBuilder.clone().andWhere('appointment.status = :status', { status: appointment_status_enum_1.AppointmentStatus.CONFIRMED }).getCount(),
            queryBuilder.clone().andWhere('appointment.status = :status', { status: appointment_status_enum_1.AppointmentStatus.COMPLETED }).getCount(),
            queryBuilder.clone().andWhere('appointment.status = :status', { status: appointment_status_enum_1.AppointmentStatus.CANCELLED }).getCount(),
            queryBuilder.clone().andWhere('appointment.status = :status', { status: appointment_status_enum_1.AppointmentStatus.NO_SHOW }).getCount(),
        ]);
        return {
            total,
            scheduled,
            confirmed,
            completed,
            cancelled,
            noShow,
        };
    }
};
exports.AppointmentService = AppointmentService;
exports.AppointmentService = AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appointment_entity_1.Appointment)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        email_service_1.EmailService])
], AppointmentService);
//# sourceMappingURL=appointment.service.js.map