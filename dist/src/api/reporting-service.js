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
exports.ReportingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const patient_management_entity_1 = require("../entities/patient-management.entity");
const scheduling_calendar_entity_1 = require("../entities/scheduling-calendar.entity");
const clinical_documentation_entity_1 = require("../entities/clinical-documentation.entity");
let ReportingService = class ReportingService {
    constructor(patientRepository, appointmentRepository, clinicalNoteRepository) {
        this.patientRepository = patientRepository;
        this.appointmentRepository = appointmentRepository;
        this.clinicalNoteRepository = clinicalNoteRepository;
    }
    async getPatientDemographicsReport(startDate, endDate) {
        return this.patientRepository.createQueryBuilder('patient')
            .where('patient.createdAt >= :startDate', { startDate })
            .andWhere('patient.createdAt <= :endDate', { endDate })
            .getMany();
    }
    async getAppointmentReport(startDate, endDate) {
        return this.appointmentRepository.createQueryBuilder('appointment')
            .where('appointment.pc_startTime >= :startDate', { startDate })
            .andWhere('appointment.pc_endTime <= :endDate', { endDate })
            .leftJoinAndSelect('appointment.patient', 'patient')
            .leftJoinAndSelect('appointment.provider', 'provider')
            .getMany();
    }
    async getClinicalDocumentationReport(startDate, endDate) {
        const count = await this.clinicalNoteRepository.createQueryBuilder('note')
            .where('note.date >= :startDate', { startDate })
            .andWhere('note.date <= :endDate', { endDate })
            .getCount();
        return { count };
    }
    async getPatientSummary(patientId) {
        const patient = await this.patientRepository.findOneBy({ id: patientId });
        const recentAppointments = await this.appointmentRepository.find({
            where: { pc_pid: patientId },
            order: { pc_startTime: 'DESC' },
            take: 5,
        });
        const recentNotes = await this.clinicalNoteRepository.find({
            where: { patient_id: patientId },
            order: { date: 'DESC' },
            take: 10,
        });
        return {
            patient,
            recentAppointments,
            recentNotes,
        };
    }
};
exports.ReportingService = ReportingService;
exports.ReportingService = ReportingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(patient_management_entity_1.Patient)),
    __param(1, (0, typeorm_1.InjectRepository)(scheduling_calendar_entity_1.CalendarEvent)),
    __param(2, (0, typeorm_1.InjectRepository)(clinical_documentation_entity_1.ClinicalNote)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReportingService);
//# sourceMappingURL=reporting-service.js.map