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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualCareEnrollment = exports.VirtualCareProgram = exports.DeviceAlert = exports.RemoteVitalSigns = exports.RemoteMonitoringSession = exports.VirtualConsultationParticipant = exports.VirtualConsultation = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let VirtualConsultation = class VirtualConsultation {
};
exports.VirtualConsultation = VirtualConsultation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], VirtualConsultation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], VirtualConsultation.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], VirtualConsultation.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], VirtualConsultation.prototype, "consultation_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "consultation_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "consultation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "platform_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "session_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "meeting_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "meeting_password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], VirtualConsultation.prototype, "scheduled_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], VirtualConsultation.prototype, "actual_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], VirtualConsultation.prototype, "actual_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], VirtualConsultation.prototype, "duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "chief_complaint", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "consultation_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "treatment_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "follow_up_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], VirtualConsultation.prototype, "next_appointment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "patient_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "provider_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "technical_issues", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "connection_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], VirtualConsultation.prototype, "recording_enabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "recording_file_path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "patient_consent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultation.prototype, "billing_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], VirtualConsultation.prototype, "consultation_fee", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VirtualConsultation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VirtualConsultation.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], VirtualConsultation.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], VirtualConsultation.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => VirtualConsultationParticipant, participant => participant.virtual_consultation),
    __metadata("design:type", Array)
], VirtualConsultation.prototype, "participants", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RemoteMonitoringSession, monitoring => monitoring.virtual_consultation),
    __metadata("design:type", Array)
], VirtualConsultation.prototype, "remote_monitoring_sessions", void 0);
exports.VirtualConsultation = VirtualConsultation = __decorate([
    (0, typeorm_1.Entity)('virtual_consultations'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['provider_id']),
    (0, typeorm_1.Index)(['consultation_date']),
    (0, typeorm_1.Index)(['consultation_status']),
    (0, typeorm_1.Index)(['consultation_type']),
    (0, typeorm_1.Index)(['platform_used'])
], VirtualConsultation);
let VirtualConsultationParticipant = class VirtualConsultationParticipant {
};
exports.VirtualConsultationParticipant = VirtualConsultationParticipant;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], VirtualConsultationParticipant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], VirtualConsultationParticipant.prototype, "virtual_consultation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], VirtualConsultationParticipant.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "participant_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "participant_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "participant_role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], VirtualConsultationParticipant.prototype, "join_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], VirtualConsultationParticipant.prototype, "leave_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], VirtualConsultationParticipant.prototype, "duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "connection_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "audio_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "video_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "screen_share_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "technical_issues", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "device_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "browser_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "operating_system", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualConsultationParticipant.prototype, "participant_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VirtualConsultationParticipant.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VirtualConsultationParticipant.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => VirtualConsultation, consultation => consultation.participants),
    (0, typeorm_1.JoinColumn)({ name: 'virtual_consultation_id' }),
    __metadata("design:type", VirtualConsultation)
], VirtualConsultationParticipant.prototype, "virtual_consultation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], VirtualConsultationParticipant.prototype, "user", void 0);
exports.VirtualConsultationParticipant = VirtualConsultationParticipant = __decorate([
    (0, typeorm_1.Entity)('virtual_consultation_participants'),
    (0, typeorm_1.Index)(['virtual_consultation_id']),
    (0, typeorm_1.Index)(['participant_type']),
    (0, typeorm_1.Index)(['join_time']),
    (0, typeorm_1.Index)(['user_id'])
], VirtualConsultationParticipant);
let RemoteMonitoringSession = class RemoteMonitoringSession {
};
exports.RemoteMonitoringSession = RemoteMonitoringSession;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RemoteMonitoringSession.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RemoteMonitoringSession.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RemoteMonitoringSession.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RemoteMonitoringSession.prototype, "virtual_consultation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "monitoring_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], RemoteMonitoringSession.prototype, "session_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "monitoring_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "device_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "device_serial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "monitoring_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RemoteMonitoringSession.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RemoteMonitoringSession.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], RemoteMonitoringSession.prototype, "duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], RemoteMonitoringSession.prototype, "data_points_collected", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "transmission_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "data_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "alert_triggers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "provider_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RemoteMonitoringSession.prototype, "reviewed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "patient_feedback", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "technical_issues", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "intervention_required", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RemoteMonitoringSession.prototype, "intervention_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RemoteMonitoringSession.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RemoteMonitoringSession.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], RemoteMonitoringSession.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], RemoteMonitoringSession.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => VirtualConsultation),
    (0, typeorm_1.JoinColumn)({ name: 'virtual_consultation_id' }),
    __metadata("design:type", VirtualConsultation)
], RemoteMonitoringSession.prototype, "virtual_consultation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RemoteVitalSigns, vitals => vitals.monitoring_session),
    __metadata("design:type", Array)
], RemoteMonitoringSession.prototype, "vital_signs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DeviceAlert, alert => alert.monitoring_session),
    __metadata("design:type", Array)
], RemoteMonitoringSession.prototype, "device_alerts", void 0);
exports.RemoteMonitoringSession = RemoteMonitoringSession = __decorate([
    (0, typeorm_1.Entity)('remote_monitoring_sessions'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['provider_id']),
    (0, typeorm_1.Index)(['monitoring_type']),
    (0, typeorm_1.Index)(['session_date']),
    (0, typeorm_1.Index)(['monitoring_status'])
], RemoteMonitoringSession);
let RemoteVitalSigns = class RemoteVitalSigns {
};
exports.RemoteVitalSigns = RemoteVitalSigns;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RemoteVitalSigns.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "monitoring_session_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], RemoteVitalSigns.prototype, "measurement_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RemoteVitalSigns.prototype, "vital_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "systolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "diastolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "heart_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "oxygen_saturation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "glucose_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "respiratory_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RemoteVitalSigns.prototype, "measurement_unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RemoteVitalSigns.prototype, "device_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RemoteVitalSigns.prototype, "measurement_context", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RemoteVitalSigns.prototype, "alert_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RemoteVitalSigns.prototype, "alert_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], RemoteVitalSigns.prototype, "provider_notified", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RemoteVitalSigns.prototype, "notification_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RemoteVitalSigns.prototype, "patient_symptoms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RemoteVitalSigns.prototype, "measurement_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RemoteVitalSigns.prototype, "data_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RemoteVitalSigns.prototype, "validation_status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RemoteVitalSigns.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RemoteVitalSigns.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RemoteMonitoringSession, session => session.vital_signs),
    (0, typeorm_1.JoinColumn)({ name: 'monitoring_session_id' }),
    __metadata("design:type", RemoteMonitoringSession)
], RemoteVitalSigns.prototype, "monitoring_session", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], RemoteVitalSigns.prototype, "patient", void 0);
exports.RemoteVitalSigns = RemoteVitalSigns = __decorate([
    (0, typeorm_1.Entity)('remote_vital_signs'),
    (0, typeorm_1.Index)(['monitoring_session_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['measurement_time']),
    (0, typeorm_1.Index)(['vital_type']),
    (0, typeorm_1.Index)(['alert_level'])
], RemoteVitalSigns);
let DeviceAlert = class DeviceAlert {
};
exports.DeviceAlert = DeviceAlert;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DeviceAlert.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], DeviceAlert.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DeviceAlert.prototype, "monitoring_session_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DeviceAlert.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], DeviceAlert.prototype, "alert_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DeviceAlert.prototype, "alert_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DeviceAlert.prototype, "severity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DeviceAlert.prototype, "alert_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], DeviceAlert.prototype, "alert_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DeviceAlert.prototype, "alert_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DeviceAlert.prototype, "device_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DeviceAlert.prototype, "device_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DeviceAlert.prototype, "measurement_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DeviceAlert.prototype, "threshold_values", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], DeviceAlert.prototype, "acknowledged_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], DeviceAlert.prototype, "acknowledged_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DeviceAlert.prototype, "acknowledgment_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DeviceAlert.prototype, "action_taken", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], DeviceAlert.prototype, "resolved_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], DeviceAlert.prototype, "resolved_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DeviceAlert.prototype, "resolution_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], DeviceAlert.prototype, "escalated", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], DeviceAlert.prototype, "escalated_to", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], DeviceAlert.prototype, "escalation_time", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DeviceAlert.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DeviceAlert.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RemoteMonitoringSession, session => session.device_alerts),
    (0, typeorm_1.JoinColumn)({ name: 'monitoring_session_id' }),
    __metadata("design:type", RemoteMonitoringSession)
], DeviceAlert.prototype, "monitoring_session", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], DeviceAlert.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'acknowledged_by' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], DeviceAlert.prototype, "acknowledger", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'resolved_by' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], DeviceAlert.prototype, "resolver", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'escalated_to' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], DeviceAlert.prototype, "escalation_target", void 0);
exports.DeviceAlert = DeviceAlert = __decorate([
    (0, typeorm_1.Entity)('device_alerts'),
    (0, typeorm_1.Index)(['monitoring_session_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['alert_time']),
    (0, typeorm_1.Index)(['alert_type']),
    (0, typeorm_1.Index)(['severity_level']),
    (0, typeorm_1.Index)(['alert_status'])
], DeviceAlert);
let VirtualCareProgram = class VirtualCareProgram {
};
exports.VirtualCareProgram = VirtualCareProgram;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], VirtualCareProgram.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "program_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "program_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "target_condition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "specialty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "program_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "eligibility_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "program_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "care_plan_template", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], VirtualCareProgram.prototype, "program_duration_days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "monitoring_schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "intervention_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "outcome_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "active_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], VirtualCareProgram.prototype, "launch_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], VirtualCareProgram.prototype, "program_director", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "staff_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "technology_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], VirtualCareProgram.prototype, "program_cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareProgram.prototype, "quality_metrics", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VirtualCareProgram.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VirtualCareProgram.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'program_director' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], VirtualCareProgram.prototype, "director", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => VirtualCareEnrollment, enrollment => enrollment.virtual_care_program),
    __metadata("design:type", Array)
], VirtualCareProgram.prototype, "enrollments", void 0);
exports.VirtualCareProgram = VirtualCareProgram = __decorate([
    (0, typeorm_1.Entity)('virtual_care_programs'),
    (0, typeorm_1.Index)(['program_name']),
    (0, typeorm_1.Index)(['program_type']),
    (0, typeorm_1.Index)(['target_condition']),
    (0, typeorm_1.Index)(['active_status']),
    (0, typeorm_1.Index)(['specialty'])
], VirtualCareProgram);
let VirtualCareEnrollment = class VirtualCareEnrollment {
};
exports.VirtualCareEnrollment = VirtualCareEnrollment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], VirtualCareEnrollment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], VirtualCareEnrollment.prototype, "virtual_care_program_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], VirtualCareEnrollment.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], VirtualCareEnrollment.prototype, "enrollment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "enrollment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], VirtualCareEnrollment.prototype, "care_coordinator_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], VirtualCareEnrollment.prototype, "primary_provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "enrollment_criteria_met", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "individualized_care_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "patient_goals", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], VirtualCareEnrollment.prototype, "program_start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], VirtualCareEnrollment.prototype, "program_end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], VirtualCareEnrollment.prototype, "target_duration_days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "monitoring_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "device_assignments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "baseline_measurements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "progress_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "outcome_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "completion_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "completion_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], VirtualCareEnrollment.prototype, "last_contact_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCareEnrollment.prototype, "patient_satisfaction", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VirtualCareEnrollment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VirtualCareEnrollment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => VirtualCareProgram, program => program.enrollments),
    (0, typeorm_1.JoinColumn)({ name: 'virtual_care_program_id' }),
    __metadata("design:type", VirtualCareProgram)
], VirtualCareEnrollment.prototype, "virtual_care_program", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], VirtualCareEnrollment.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'care_coordinator_id' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], VirtualCareEnrollment.prototype, "care_coordinator", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_provider_id' }),
    __metadata("design:type", typeof (_j = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _j : Object)
], VirtualCareEnrollment.prototype, "primary_provider", void 0);
exports.VirtualCareEnrollment = VirtualCareEnrollment = __decorate([
    (0, typeorm_1.Entity)('virtual_care_enrollments'),
    (0, typeorm_1.Index)(['virtual_care_program_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['enrollment_date']),
    (0, typeorm_1.Index)(['enrollment_status']),
    (0, typeorm_1.Index)(['care_coordinator_id'])
], VirtualCareEnrollment);
//# sourceMappingURL=telemedicine-virtual-care-platform.entity.js.map