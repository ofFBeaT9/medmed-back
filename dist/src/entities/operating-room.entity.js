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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORQualityMetric = exports.OREquipment = exports.AnesthesiaVitals = exports.AnesthesiaRecord = exports.ORTimeTracking = exports.ORProcedure = exports.ORSchedule = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let ORSchedule = class ORSchedule {
};
exports.ORSchedule = ORSchedule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ORSchedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ORSchedule.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ORSchedule.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true, nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "case_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ORSchedule.prototype, "procedure_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "scheduled_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "scheduled_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ORSchedule.prototype, "estimated_duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ORSchedule.prototype, "or_room", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ORSchedule.prototype, "primary_surgeon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ORSchedule.prototype, "assistant_surgeon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ORSchedule.prototype, "anesthesiologist_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ORSchedule.prototype, "circulating_nurse_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ORSchedule.prototype, "scrub_nurse_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ORSchedule.prototype, "procedure_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ORSchedule.prototype, "urgency_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "primary_procedure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "additional_procedures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "anesthesia_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "patient_position", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "special_equipment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "special_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ORSchedule.prototype, "schedule_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "preop_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "postop_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "allergies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "current_medications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "medical_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "asa_classification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ORSchedule.prototype, "requires_blood_bank", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "blood_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ORSchedule.prototype, "units_blood_crossmatched", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ORSchedule.prototype, "isolation_precautions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "isolation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ORSchedule.prototype, "scheduled_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ORSchedule.prototype, "scheduling_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ORSchedule.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ORSchedule.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], ORSchedule.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_surgeon_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], ORSchedule.prototype, "primary_surgeon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assistant_surgeon_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], ORSchedule.prototype, "assistant_surgeon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'anesthesiologist_id' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], ORSchedule.prototype, "anesthesiologist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'circulating_nurse_id' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], ORSchedule.prototype, "circulating_nurse", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'scrub_nurse_id' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], ORSchedule.prototype, "scrub_nurse", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'scheduled_by' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], ORSchedule.prototype, "scheduler", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ORProcedure, procedure => procedure.or_schedule),
    __metadata("design:type", Array)
], ORSchedule.prototype, "procedures", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ORTimeTracking, tracking => tracking.or_schedule),
    __metadata("design:type", Array)
], ORSchedule.prototype, "time_tracking", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AnesthesiaRecord, record => record.or_schedule),
    __metadata("design:type", Array)
], ORSchedule.prototype, "anesthesia_records", void 0);
exports.ORSchedule = ORSchedule = __decorate([
    (0, typeorm_1.Entity)('or_schedules'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['procedure_date']),
    (0, typeorm_1.Index)(['or_room']),
    (0, typeorm_1.Index)(['primary_surgeon_id']),
    (0, typeorm_1.Index)(['procedure_type']),
    (0, typeorm_1.Index)(['schedule_status']),
    (0, typeorm_1.Index)(['urgency_level'])
], ORSchedule);
let ORProcedure = class ORProcedure {
};
exports.ORProcedure = ORProcedure;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ORProcedure.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ORProcedure.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ORProcedure.prototype, "or_schedule_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ORProcedure.prototype, "procedure_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "procedure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "procedure_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ORProcedure.prototype, "procedure_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ORProcedure.prototype, "procedure_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ORProcedure.prototype, "duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ORProcedure.prototype, "primary_surgeon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "assistant_surgeons", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ORProcedure.prototype, "procedure_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "operative_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "operative_technique", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "specimens_removed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "implants_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], ORProcedure.prototype, "estimated_blood_loss_ml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "fluids_administered", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "medications_given", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "wound_classification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "closure_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "dressing_applied", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "drain_placement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "postop_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "pathology_requests", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORProcedure.prototype, "culture_requests", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ORProcedure.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ORProcedure.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ORSchedule, schedule => schedule.procedures),
    (0, typeorm_1.JoinColumn)({ name: 'or_schedule_id' }),
    __metadata("design:type", ORSchedule)
], ORProcedure.prototype, "or_schedule", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_surgeon_id' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], ORProcedure.prototype, "primary_surgeon", void 0);
exports.ORProcedure = ORProcedure = __decorate([
    (0, typeorm_1.Entity)('or_procedures'),
    (0, typeorm_1.Index)(['or_schedule_id']),
    (0, typeorm_1.Index)(['procedure_code']),
    (0, typeorm_1.Index)(['procedure_start_time']),
    (0, typeorm_1.Index)(['procedure_status']),
    (0, typeorm_1.Index)(['primary_surgeon_id'])
], ORProcedure);
let ORTimeTracking = class ORTimeTracking {
};
exports.ORTimeTracking = ORTimeTracking;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ORTimeTracking.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ORTimeTracking.prototype, "or_schedule_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "event_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "milestone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ORTimeTracking.prototype, "event_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "event_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ORTimeTracking.prototype, "documented_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ORTimeTracking.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ORTimeTracking.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ORSchedule, schedule => schedule.time_tracking),
    (0, typeorm_1.JoinColumn)({ name: 'or_schedule_id' }),
    __metadata("design:type", ORSchedule)
], ORTimeTracking.prototype, "or_schedule", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'documented_by' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], ORTimeTracking.prototype, "documenter", void 0);
exports.ORTimeTracking = ORTimeTracking = __decorate([
    (0, typeorm_1.Entity)('or_time_tracking'),
    (0, typeorm_1.Index)(['or_schedule_id']),
    (0, typeorm_1.Index)(['event_type']),
    (0, typeorm_1.Index)(['event_time']),
    (0, typeorm_1.Index)(['milestone'])
], ORTimeTracking);
let AnesthesiaRecord = class AnesthesiaRecord {
};
exports.AnesthesiaRecord = AnesthesiaRecord;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "or_schedule_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "anesthesiologist_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "anesthesia_resident_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "crna_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "anesthesia_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "asa_classification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "preop_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "airway_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], AnesthesiaRecord.prototype, "anesthesia_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AnesthesiaRecord.prototype, "anesthesia_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "anesthesia_duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "induction_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "induction_agents", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "airway_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "intubation_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "intubation_attempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "ett_size", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "ett_depth_cm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "maintenance_agents", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "muscle_relaxants", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "reversal_agents", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "regional_blocks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "monitoring_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "iv_access", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "arterial_line", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "central_line", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "total_fluids_ml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "blood_products_ml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "urine_output_ml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "emergence_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "extubation_condition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "pacu_condition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "postop_orders", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AnesthesiaRecord.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AnesthesiaRecord.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ORSchedule, schedule => schedule.anesthesia_records),
    (0, typeorm_1.JoinColumn)({ name: 'or_schedule_id' }),
    __metadata("design:type", ORSchedule)
], AnesthesiaRecord.prototype, "or_schedule", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'anesthesiologist_id' }),
    __metadata("design:type", typeof (_j = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _j : Object)
], AnesthesiaRecord.prototype, "anesthesiologist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'anesthesia_resident_id' }),
    __metadata("design:type", typeof (_k = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _k : Object)
], AnesthesiaRecord.prototype, "anesthesia_resident", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'crna_id' }),
    __metadata("design:type", typeof (_l = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _l : Object)
], AnesthesiaRecord.prototype, "crna", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AnesthesiaVitals, vitals => vitals.anesthesia_record),
    __metadata("design:type", Array)
], AnesthesiaRecord.prototype, "vital_signs", void 0);
exports.AnesthesiaRecord = AnesthesiaRecord = __decorate([
    (0, typeorm_1.Entity)('anesthesia_records'),
    (0, typeorm_1.Index)(['or_schedule_id']),
    (0, typeorm_1.Index)(['anesthesiologist_id']),
    (0, typeorm_1.Index)(['anesthesia_start_time']),
    (0, typeorm_1.Index)(['anesthesia_type']),
    (0, typeorm_1.Index)(['asa_classification'])
], AnesthesiaRecord);
let AnesthesiaVitals = class AnesthesiaVitals {
};
exports.AnesthesiaVitals = AnesthesiaVitals;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], AnesthesiaVitals.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "anesthesia_record_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], AnesthesiaVitals.prototype, "measurement_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "heart_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "systolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "diastolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "mean_arterial_pressure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "respiratory_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "temperature_celsius", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "oxygen_saturation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "end_tidal_co2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "inspired_oxygen_percent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "anesthetic_agent_percent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AnesthesiaVitals.prototype, "anesthetic_agent_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "peak_pressure_cmh2o", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "plateau_pressure_cmh2o", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "peep_cmh2o", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "tidal_volume_ml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "minute_ventilation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AnesthesiaVitals.prototype, "neuromuscular_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AnesthesiaVitals.prototype, "bis_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaVitals.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "is_critical", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaVitals.prototype, "documented_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AnesthesiaVitals.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AnesthesiaVitals.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => AnesthesiaRecord, record => record.vital_signs),
    (0, typeorm_1.JoinColumn)({ name: 'anesthesia_record_id' }),
    __metadata("design:type", AnesthesiaRecord)
], AnesthesiaVitals.prototype, "anesthesia_record", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'documented_by' }),
    __metadata("design:type", typeof (_m = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _m : Object)
], AnesthesiaVitals.prototype, "documenter", void 0);
exports.AnesthesiaVitals = AnesthesiaVitals = __decorate([
    (0, typeorm_1.Entity)('anesthesia_vitals'),
    (0, typeorm_1.Index)(['anesthesia_record_id']),
    (0, typeorm_1.Index)(['measurement_time']),
    (0, typeorm_1.Index)(['is_critical'])
], AnesthesiaVitals);
let OREquipment = class OREquipment {
};
exports.OREquipment = OREquipment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], OREquipment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], OREquipment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], OREquipment.prototype, "equipment_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OREquipment.prototype, "equipment_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], OREquipment.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], OREquipment.prototype, "model_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], OREquipment.prototype, "serial_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OREquipment.prototype, "or_room", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OREquipment.prototype, "equipment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], OREquipment.prototype, "last_maintenance_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], OREquipment.prototype, "maintenance_due_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OREquipment.prototype, "maintenance_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], OREquipment.prototype, "calibration_due_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OREquipment.prototype, "calibration_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OREquipment.prototype, "safety_checks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], OREquipment.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], OREquipment.prototype, "is_portable", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OREquipment.prototype, "operating_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OREquipment.prototype, "troubleshooting_guide", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OREquipment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OREquipment.prototype, "updated_at", void 0);
exports.OREquipment = OREquipment = __decorate([
    (0, typeorm_1.Entity)('or_equipment'),
    (0, typeorm_1.Index)(['equipment_type']),
    (0, typeorm_1.Index)(['or_room']),
    (0, typeorm_1.Index)(['equipment_status']),
    (0, typeorm_1.Index)(['maintenance_due_date'])
], OREquipment);
let ORQualityMetric = class ORQualityMetric {
};
exports.ORQualityMetric = ORQualityMetric;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ORQualityMetric.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ORQualityMetric.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ORQualityMetric.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ORQualityMetric.prototype, "metric_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ORQualityMetric.prototype, "or_room", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ORQualityMetric.prototype, "metric_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], ORQualityMetric.prototype, "metric_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORQualityMetric.prototype, "metric_unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ORQualityMetric.prototype, "total_cases", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ORQualityMetric.prototype, "cancelled_cases", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ORQualityMetric.prototype, "delayed_cases", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], ORQualityMetric.prototype, "average_turnover_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], ORQualityMetric.prototype, "utilization_percentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ORQualityMetric.prototype, "emergency_cases", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORQualityMetric.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ORQualityMetric.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ORQualityMetric.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], ORQualityMetric.prototype, "facility", void 0);
exports.ORQualityMetric = ORQualityMetric = __decorate([
    (0, typeorm_1.Entity)('or_quality_metrics'),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['metric_date']),
    (0, typeorm_1.Index)(['or_room']),
    (0, typeorm_1.Index)(['metric_type'])
], ORQualityMetric);
//# sourceMappingURL=operating-room.entity.js.map