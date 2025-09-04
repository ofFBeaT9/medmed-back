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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurgicalSupplies = exports.ORTimeTracking = exports.AnesthesiaRecord = exports.SurgicalProcedure = exports.ORSchedule = void 0;
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
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ORSchedule.prototype, "scheduled_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ORSchedule.prototype, "scheduled_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ORSchedule.prototype, "scheduled_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ORSchedule.prototype, "actual_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ORSchedule.prototype, "actual_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ORSchedule.prototype, "operating_room_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ORSchedule.prototype, "primary_surgeon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ORSchedule.prototype, "procedure_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "primary_procedure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "secondary_procedures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "procedure_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "urgency_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "anesthesia_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ORSchedule.prototype, "estimated_duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ORSchedule.prototype, "actual_duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "preoperative_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "postoperative_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "surgical_team", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "anesthesia_team", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "nursing_team", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "special_equipment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "implants_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "case_difficulty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "cancellation_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "delay_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORSchedule.prototype, "scheduling_notes", void 0);
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
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'operating_room_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], ORSchedule.prototype, "operating_room", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_surgeon_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], ORSchedule.prototype, "primary_surgeon", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SurgicalProcedure, procedure => procedure.or_schedule),
    __metadata("design:type", Array)
], ORSchedule.prototype, "surgical_procedures", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AnesthesiaRecord, anesthesia => anesthesia.or_schedule),
    __metadata("design:type", Array)
], ORSchedule.prototype, "anesthesia_records", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ORTimeTracking, tracking => tracking.or_schedule),
    __metadata("design:type", Array)
], ORSchedule.prototype, "time_tracking", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SurgicalSupplies, supplies => supplies.or_schedule),
    __metadata("design:type", Array)
], ORSchedule.prototype, "surgical_supplies", void 0);
exports.ORSchedule = ORSchedule = __decorate([
    (0, typeorm_1.Entity)('or_schedules'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['scheduled_date']),
    (0, typeorm_1.Index)(['operating_room_id']),
    (0, typeorm_1.Index)(['primary_surgeon_id']),
    (0, typeorm_1.Index)(['procedure_status'])
], ORSchedule);
let SurgicalProcedure = class SurgicalProcedure {
};
exports.SurgicalProcedure = SurgicalProcedure;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], SurgicalProcedure.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], SurgicalProcedure.prototype, "or_schedule_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], SurgicalProcedure.prototype, "procedure_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], SurgicalProcedure.prototype, "procedure_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], SurgicalProcedure.prototype, "primary_surgeon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "procedure_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "procedure_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "surgical_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "incision_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "anatomical_structures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "procedure_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "pathological_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "specimens_obtained", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "technique_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "closure_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 1, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], SurgicalProcedure.prototype, "blood_loss", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "fluid_replacement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "blood_products", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "drains_placed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "implants_devices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "medications_given", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "unexpected_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "technical_difficulties", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "case_complexity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "postoperative_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "follow_up_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalProcedure.prototype, "surgeon_dictation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], SurgicalProcedure.prototype, "assistant_surgeon_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SurgicalProcedure.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SurgicalProcedure.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ORSchedule, schedule => schedule.surgical_procedures),
    (0, typeorm_1.JoinColumn)({ name: 'or_schedule_id' }),
    __metadata("design:type", ORSchedule)
], SurgicalProcedure.prototype, "or_schedule", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_surgeon_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], SurgicalProcedure.prototype, "primary_surgeon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assistant_surgeon_id' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], SurgicalProcedure.prototype, "assistant_surgeon", void 0);
exports.SurgicalProcedure = SurgicalProcedure = __decorate([
    (0, typeorm_1.Entity)('surgical_procedures'),
    (0, typeorm_1.Index)(['or_schedule_id']),
    (0, typeorm_1.Index)(['procedure_start_time']),
    (0, typeorm_1.Index)(['primary_surgeon_id']),
    (0, typeorm_1.Index)(['procedure_type']),
    (0, typeorm_1.Index)(['blood_loss'])
], SurgicalProcedure);
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
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], AnesthesiaRecord.prototype, "anesthesia_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AnesthesiaRecord.prototype, "anesthesia_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "anesthesiologist_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "anesthesia_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "asa_class", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "preoperative_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "airway_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "mallampati_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "comorbidities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "medications_allergies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "induction_agents", void 0);
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
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "airway_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "intubation_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "ventilator_settings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "monitoring_devices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "vital_signs_log", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "fluid_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "blood_pressure_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "pain_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "regional_blocks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "difficult_airway", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "hemodynamic_events", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "respiratory_events", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "emergence_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "extubation_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "recovery_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnesthesiaRecord.prototype, "postoperative_orders", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], AnesthesiaRecord.prototype, "crna_id", void 0);
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
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], AnesthesiaRecord.prototype, "anesthesiologist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'crna_id' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], AnesthesiaRecord.prototype, "crna", void 0);
exports.AnesthesiaRecord = AnesthesiaRecord = __decorate([
    (0, typeorm_1.Entity)('anesthesia_records'),
    (0, typeorm_1.Index)(['or_schedule_id']),
    (0, typeorm_1.Index)(['anesthesia_start_time']),
    (0, typeorm_1.Index)(['anesthesiologist_id']),
    (0, typeorm_1.Index)(['anesthesia_type']),
    (0, typeorm_1.Index)(['asa_class'])
], AnesthesiaRecord);
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
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ORTimeTracking.prototype, "tracking_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ORTimeTracking.prototype, "patient_in_room_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ORTimeTracking.prototype, "anesthesia_ready_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ORTimeTracking.prototype, "procedure_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ORTimeTracking.prototype, "procedure_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ORTimeTracking.prototype, "patient_out_room_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ORTimeTracking.prototype, "room_cleanup_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ORTimeTracking.prototype, "room_ready_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ORTimeTracking.prototype, "anesthesia_time_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ORTimeTracking.prototype, "procedure_time_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ORTimeTracking.prototype, "turnover_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ORTimeTracking.prototype, "total_or_time_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ORTimeTracking.prototype, "delay_time_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "delay_reasons", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "case_start_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "case_end_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "efficiency_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "team_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "equipment_issues", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "supply_issues", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ORTimeTracking.prototype, "workflow_improvements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ORTimeTracking.prototype, "charge_nurse_id", void 0);
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
    (0, typeorm_1.JoinColumn)({ name: 'charge_nurse_id' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], ORTimeTracking.prototype, "charge_nurse", void 0);
exports.ORTimeTracking = ORTimeTracking = __decorate([
    (0, typeorm_1.Entity)('or_time_tracking'),
    (0, typeorm_1.Index)(['or_schedule_id']),
    (0, typeorm_1.Index)(['tracking_date']),
    (0, typeorm_1.Index)(['patient_in_room_time']),
    (0, typeorm_1.Index)(['anesthesia_ready_time']),
    (0, typeorm_1.Index)(['turnover_time'])
], ORTimeTracking);
let SurgicalSupplies = class SurgicalSupplies {
};
exports.SurgicalSupplies = SurgicalSupplies;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], SurgicalSupplies.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], SurgicalSupplies.prototype, "or_schedule_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], SurgicalSupplies.prototype, "supply_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "supply_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "instrument_sets", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "disposable_supplies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "implants_devices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "medications_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "special_equipment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], SurgicalSupplies.prototype, "cost_total", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], SurgicalSupplies.prototype, "cost_instruments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], SurgicalSupplies.prototype, "cost_disposables", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], SurgicalSupplies.prototype, "cost_implants", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], SurgicalSupplies.prototype, "cost_medications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "waste_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], SurgicalSupplies.prototype, "waste_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "waste_reasons", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "inventory_issues", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "vendor_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "lot_serial_numbers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "sterilization_info", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "recall_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "quality_issues", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SurgicalSupplies.prototype, "preference_cards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], SurgicalSupplies.prototype, "supply_coordinator_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SurgicalSupplies.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SurgicalSupplies.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ORSchedule, schedule => schedule.surgical_supplies),
    (0, typeorm_1.JoinColumn)({ name: 'or_schedule_id' }),
    __metadata("design:type", ORSchedule)
], SurgicalSupplies.prototype, "or_schedule", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'supply_coordinator_id' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], SurgicalSupplies.prototype, "supply_coordinator", void 0);
exports.SurgicalSupplies = SurgicalSupplies = __decorate([
    (0, typeorm_1.Entity)('surgical_supplies'),
    (0, typeorm_1.Index)(['or_schedule_id']),
    (0, typeorm_1.Index)(['supply_date']),
    (0, typeorm_1.Index)(['supply_category']),
    (0, typeorm_1.Index)(['cost_total']),
    (0, typeorm_1.Index)(['waste_amount'])
], SurgicalSupplies);
//# sourceMappingURL=surgical-management.entity.js.map