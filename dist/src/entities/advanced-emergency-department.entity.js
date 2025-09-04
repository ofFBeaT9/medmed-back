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
exports.EdQualityMetrics = exports.EdCensusManagement = exports.EdDisposition = exports.EdTrackingBoard = exports.EdTriageAssessment = exports.EdRegistration = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let EdRegistration = class EdRegistration {
};
exports.EdRegistration = EdRegistration;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EdRegistration.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], EdRegistration.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdRegistration.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], EdRegistration.prototype, "registration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdRegistration.prototype, "registration_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdRegistration.prototype, "triage_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdRegistration.prototype, "chief_complaint", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdRegistration.prototype, "arrival_mode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdRegistration.prototype, "bed_assignment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], EdRegistration.prototype, "arrival_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], EdRegistration.prototype, "triage_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], EdRegistration.prototype, "bed_assignment_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], EdRegistration.prototype, "provider_assignment_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], EdRegistration.prototype, "treatment_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], EdRegistration.prototype, "disposition_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], EdRegistration.prototype, "departure_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "presenting_symptoms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "vital_signs_initial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "pain_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "mental_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "allergies_alert", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "medications_current", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "medical_history_relevant", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "acuity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "isolation_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "special_needs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], EdRegistration.prototype, "triage_nurse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], EdRegistration.prototype, "primary_nurse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], EdRegistration.prototype, "attending_physician", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "family_contacts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "insurance_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdRegistration.prototype, "registration_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EdRegistration.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EdRegistration.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], EdRegistration.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'triage_nurse' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], EdRegistration.prototype, "triage_nurse_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_nurse' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], EdRegistration.prototype, "primary_nurse_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'attending_physician' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], EdRegistration.prototype, "attending_physician_user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EdTriageAssessment, assessment => assessment.ed_registration),
    __metadata("design:type", Array)
], EdRegistration.prototype, "triage_assessments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EdTrackingBoard, tracking => tracking.ed_registration),
    __metadata("design:type", Array)
], EdRegistration.prototype, "tracking_updates", void 0);
exports.EdRegistration = EdRegistration = __decorate([
    (0, typeorm_1.Entity)('ed_registrations'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['registration_date']),
    (0, typeorm_1.Index)(['registration_status']),
    (0, typeorm_1.Index)(['triage_level']),
    (0, typeorm_1.Index)(['chief_complaint']),
    (0, typeorm_1.Index)(['arrival_mode']),
    (0, typeorm_1.Index)(['bed_assignment'])
], EdRegistration);
let EdTriageAssessment = class EdTriageAssessment {
};
exports.EdTriageAssessment = EdTriageAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EdTriageAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdTriageAssessment.prototype, "ed_registration_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdTriageAssessment.prototype, "triage_nurse_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], EdTriageAssessment.prototype, "assessment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "triage_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdTriageAssessment.prototype, "acuity_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Boolean)
], EdTriageAssessment.prototype, "reassessment_required", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "chief_complaint_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "history_present_illness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "vital_signs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "pain_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "neurological_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "respiratory_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "cardiovascular_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "mental_health_screening", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "substance_use_screening", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "fall_risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "infection_control_screening", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "violence_screening", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "social_determinants", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "functional_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "disposition_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "resource_needs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "protocols_activated", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "consultations_requested", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], EdTriageAssessment.prototype, "reassessment_due", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "triage_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTriageAssessment.prototype, "quality_indicators", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EdTriageAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EdTriageAssessment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EdRegistration, registration => registration.triage_assessments),
    (0, typeorm_1.JoinColumn)({ name: 'ed_registration_id' }),
    __metadata("design:type", EdRegistration)
], EdTriageAssessment.prototype, "ed_registration", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'triage_nurse_id' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], EdTriageAssessment.prototype, "triage_nurse", void 0);
exports.EdTriageAssessment = EdTriageAssessment = __decorate([
    (0, typeorm_1.Entity)('ed_triage_assessments'),
    (0, typeorm_1.Index)(['ed_registration_id']),
    (0, typeorm_1.Index)(['triage_nurse_id']),
    (0, typeorm_1.Index)(['assessment_date']),
    (0, typeorm_1.Index)(['triage_category']),
    (0, typeorm_1.Index)(['acuity_score']),
    (0, typeorm_1.Index)(['reassessment_required'])
], EdTriageAssessment);
let EdTrackingBoard = class EdTrackingBoard {
};
exports.EdTrackingBoard = EdTrackingBoard;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EdTrackingBoard.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdTrackingBoard.prototype, "ed_registration_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "patient_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "current_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdTrackingBoard.prototype, "assigned_provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdTrackingBoard.prototype, "assigned_nurse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], EdTrackingBoard.prototype, "update_timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdTrackingBoard.prototype, "length_of_stay", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "active_orders", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "pending_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "completed_interventions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "disposition_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "discharge_barriers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "family_communication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "care_team_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "isolation_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "mobility_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "special_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "equipment_needs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "medication_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "consultant_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "bed_request_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], EdTrackingBoard.prototype, "estimated_discharge_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdTrackingBoard.prototype, "throughput_metrics", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EdTrackingBoard.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EdTrackingBoard.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EdRegistration, registration => registration.tracking_updates),
    (0, typeorm_1.JoinColumn)({ name: 'ed_registration_id' }),
    __metadata("design:type", EdRegistration)
], EdTrackingBoard.prototype, "ed_registration", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assigned_provider' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], EdTrackingBoard.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assigned_nurse' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], EdTrackingBoard.prototype, "nurse", void 0);
exports.EdTrackingBoard = EdTrackingBoard = __decorate([
    (0, typeorm_1.Entity)('ed_tracking_board'),
    (0, typeorm_1.Index)(['ed_registration_id']),
    (0, typeorm_1.Index)(['patient_location']),
    (0, typeorm_1.Index)(['current_status']),
    (0, typeorm_1.Index)(['assigned_provider']),
    (0, typeorm_1.Index)(['assigned_nurse']),
    (0, typeorm_1.Index)(['update_timestamp']),
    (0, typeorm_1.Index)(['length_of_stay'])
], EdTrackingBoard);
let EdDisposition = class EdDisposition {
};
exports.EdDisposition = EdDisposition;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EdDisposition.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], EdDisposition.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdDisposition.prototype, "ed_registration_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdDisposition.prototype, "disposition_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], EdDisposition.prototype, "disposition_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdDisposition.prototype, "disposition_provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdDisposition.prototype, "discharge_destination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Boolean)
], EdDisposition.prototype, "follow_up_required", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "disposition_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "procedures_performed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "medications_prescribed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "discharge_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "follow_up_appointments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "return_precautions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "work_restrictions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "educational_materials", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "transportation_arrangements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "home_care_needs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "equipment_needs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "social_services_referrals", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "admission_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "transfer_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "ama_documentation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "disposition_barriers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "quality_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], EdDisposition.prototype, "actual_departure_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdDisposition.prototype, "disposition_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EdDisposition.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EdDisposition.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EdRegistration),
    (0, typeorm_1.JoinColumn)({ name: 'ed_registration_id' }),
    __metadata("design:type", EdRegistration)
], EdDisposition.prototype, "ed_registration", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'disposition_provider' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], EdDisposition.prototype, "provider", void 0);
exports.EdDisposition = EdDisposition = __decorate([
    (0, typeorm_1.Entity)('ed_dispositions'),
    (0, typeorm_1.Index)(['ed_registration_id']),
    (0, typeorm_1.Index)(['disposition_type']),
    (0, typeorm_1.Index)(['disposition_date']),
    (0, typeorm_1.Index)(['disposition_provider']),
    (0, typeorm_1.Index)(['discharge_destination']),
    (0, typeorm_1.Index)(['follow_up_required'])
], EdDisposition);
let EdCensusManagement = class EdCensusManagement {
};
exports.EdCensusManagement = EdCensusManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], EdCensusManagement.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], EdCensusManagement.prototype, "census_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdCensusManagement.prototype, "shift_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "total_capacity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "current_census", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "available_beds", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "waiting_room_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "triage_queue_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "treatment_area_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "observation_area_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "isolation_room_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "trauma_bay_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "resuscitation_room_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "psychiatric_hold_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "occupancy_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "average_wait_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "average_length_of_stay", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "left_without_being_seen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdCensusManagement.prototype, "left_against_medical_advice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdCensusManagement.prototype, "acuity_distribution", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdCensusManagement.prototype, "staffing_levels", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdCensusManagement.prototype, "diversion_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdCensusManagement.prototype, "capacity_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdCensusManagement.prototype, "throughput_metrics", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EdCensusManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EdCensusManagement.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], EdCensusManagement.prototype, "facility", void 0);
exports.EdCensusManagement = EdCensusManagement = __decorate([
    (0, typeorm_1.Entity)('ed_census_management'),
    (0, typeorm_1.Index)(['census_date']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['shift_type']),
    (0, typeorm_1.Index)(['total_capacity']),
    (0, typeorm_1.Index)(['current_census']),
    (0, typeorm_1.Index)(['available_beds'])
], EdCensusManagement);
let EdQualityMetrics = class EdQualityMetrics {
};
exports.EdQualityMetrics = EdQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EdQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], EdQualityMetrics.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], EdQualityMetrics.prototype, "reporting_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdQualityMetrics.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdQualityMetrics.prototype, "metric_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EdQualityMetrics.prototype, "patient_population", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EdQualityMetrics.prototype, "performance_target", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], EdQualityMetrics.prototype, "actual_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], EdQualityMetrics.prototype, "variance_from_target", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdQualityMetrics.prototype, "total_cases", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EdQualityMetrics.prototype, "cases_meeting_target", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], EdQualityMetrics.prototype, "compliance_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdQualityMetrics.prototype, "benchmark_comparisons", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdQualityMetrics.prototype, "trend_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdQualityMetrics.prototype, "contributing_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdQualityMetrics.prototype, "improvement_initiatives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdQualityMetrics.prototype, "root_cause_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdQualityMetrics.prototype, "action_plans", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdQualityMetrics.prototype, "regulatory_reporting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EdQualityMetrics.prototype, "statistical_analysis", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EdQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EdQualityMetrics.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], EdQualityMetrics.prototype, "facility", void 0);
exports.EdQualityMetrics = EdQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('ed_quality_metrics'),
    (0, typeorm_1.Index)(['reporting_period']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['metric_type']),
    (0, typeorm_1.Index)(['patient_population']),
    (0, typeorm_1.Index)(['performance_target'])
], EdQualityMetrics);
//# sourceMappingURL=advanced-emergency-department.entity.js.map