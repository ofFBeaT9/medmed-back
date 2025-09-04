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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinalAssessment = exports.JointAssessment = exports.FractureManagement = exports.OrthopedicSurgery = exports.OrthopedicVisit = exports.OrthopedicPatient = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let OrthopedicPatient = class OrthopedicPatient {
};
exports.OrthopedicPatient = OrthopedicPatient;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], OrthopedicPatient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], OrthopedicPatient.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], OrthopedicPatient.prototype, "primary_orthopedist_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "mobility_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "fracture_risk_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "joint_replacement_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "orthopedic_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "previous_fractures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "previous_surgeries", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "joint_replacements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "spinal_conditions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "sports_injuries", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "work_related_injuries", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "current_limitations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "assistive_devices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "bone_density_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], OrthopedicPatient.prototype, "t_score_spine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], OrthopedicPatient.prototype, "t_score_hip", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], OrthopedicPatient.prototype, "last_bone_density_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "family_orthopedic_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "rehabilitation_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "current_medications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicPatient.prototype, "care_team", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OrthopedicPatient.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OrthopedicPatient.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], OrthopedicPatient.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_orthopedist_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], OrthopedicPatient.prototype, "primary_orthopedist", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrthopedicVisit, visit => visit.orthopedic_patient),
    __metadata("design:type", Array)
], OrthopedicPatient.prototype, "orthopedic_visits", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrthopedicSurgery, surgery => surgery.orthopedic_patient),
    __metadata("design:type", Array)
], OrthopedicPatient.prototype, "orthopedic_surgeries", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FractureManagement, fracture => fracture.orthopedic_patient),
    __metadata("design:type", Array)
], OrthopedicPatient.prototype, "fracture_managements", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => JointAssessment, assessment => assessment.orthopedic_patient),
    __metadata("design:type", Array)
], OrthopedicPatient.prototype, "joint_assessments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SpinalAssessment, spinal => spinal.orthopedic_patient),
    __metadata("design:type", Array)
], OrthopedicPatient.prototype, "spinal_assessments", void 0);
exports.OrthopedicPatient = OrthopedicPatient = __decorate([
    (0, typeorm_1.Entity)('orthopedic_patients'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['primary_orthopedist_id']),
    (0, typeorm_1.Index)(['mobility_status']),
    (0, typeorm_1.Index)(['fracture_risk_level']),
    (0, typeorm_1.Index)(['joint_replacement_status'])
], OrthopedicPatient);
let OrthopedicVisit = class OrthopedicVisit {
};
exports.OrthopedicVisit = OrthopedicVisit;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], OrthopedicVisit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], OrthopedicVisit.prototype, "orthopedic_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], OrthopedicVisit.prototype, "visit_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "visit_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], OrthopedicVisit.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "chief_complaint", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "history_present_illness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "mechanism_of_injury", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], OrthopedicVisit.prototype, "injury_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], OrthopedicVisit.prototype, "pain_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "pain_character", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "pain_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "pain_radiation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "aggravating_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "relieving_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "functional_limitations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "work_limitations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "sports_limitations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "previous_treatments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "current_medications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "physical_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "inspection_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "palpation_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "range_of_motion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "strength_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "special_tests", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "neurological_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "vascular_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "gait_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "imaging_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "diagnostic_studies_ordered", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "assessment_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "treatment_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "patient_education", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], OrthopedicVisit.prototype, "next_visit_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicVisit.prototype, "visit_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OrthopedicVisit.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OrthopedicVisit.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrthopedicPatient, patient => patient.orthopedic_visits),
    (0, typeorm_1.JoinColumn)({ name: 'orthopedic_patient_id' }),
    __metadata("design:type", OrthopedicPatient)
], OrthopedicVisit.prototype, "orthopedic_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], OrthopedicVisit.prototype, "provider", void 0);
exports.OrthopedicVisit = OrthopedicVisit = __decorate([
    (0, typeorm_1.Entity)('orthopedic_visits'),
    (0, typeorm_1.Index)(['orthopedic_patient_id']),
    (0, typeorm_1.Index)(['visit_date']),
    (0, typeorm_1.Index)(['visit_type']),
    (0, typeorm_1.Index)(['provider_id']),
    (0, typeorm_1.Index)(['pain_level'])
], OrthopedicVisit);
let OrthopedicSurgery = class OrthopedicSurgery {
};
exports.OrthopedicSurgery = OrthopedicSurgery;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], OrthopedicSurgery.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], OrthopedicSurgery.prototype, "orthopedic_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], OrthopedicSurgery.prototype, "surgery_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "surgery_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "procedure_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "procedure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "anatomical_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "laterality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "surgical_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], OrthopedicSurgery.prototype, "surgeon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "surgical_team", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "anesthesia_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], OrthopedicSurgery.prototype, "operative_time_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], OrthopedicSurgery.prototype, "estimated_blood_loss_ml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "implants_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "fixation_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "bone_graft_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "intraoperative_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "procedure_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "intraoperative_complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "specimens_sent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "postoperative_orders", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "weight_bearing_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "rehabilitation_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], OrthopedicSurgery.prototype, "estimated_recovery_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "postoperative_complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OrthopedicSurgery.prototype, "hospital_length_stay_days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], OrthopedicSurgery.prototype, "discharge_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "discharge_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "follow_up_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OrthopedicSurgery.prototype, "surgical_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OrthopedicSurgery.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OrthopedicSurgery.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrthopedicPatient, patient => patient.orthopedic_surgeries),
    (0, typeorm_1.JoinColumn)({ name: 'orthopedic_patient_id' }),
    __metadata("design:type", OrthopedicPatient)
], OrthopedicSurgery.prototype, "orthopedic_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'surgeon_id' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], OrthopedicSurgery.prototype, "surgeon", void 0);
exports.OrthopedicSurgery = OrthopedicSurgery = __decorate([
    (0, typeorm_1.Entity)('orthopedic_surgeries'),
    (0, typeorm_1.Index)(['orthopedic_patient_id']),
    (0, typeorm_1.Index)(['surgery_date']),
    (0, typeorm_1.Index)(['surgery_type']),
    (0, typeorm_1.Index)(['surgeon_id']),
    (0, typeorm_1.Index)(['procedure_category'])
], OrthopedicSurgery);
let FractureManagement = class FractureManagement {
};
exports.FractureManagement = FractureManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], FractureManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], FractureManagement.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], FractureManagement.prototype, "orthopedic_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], FractureManagement.prototype, "fracture_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], FractureManagement.prototype, "fracture_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], FractureManagement.prototype, "anatomical_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "laterality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "fracture_classification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "mechanism_of_injury", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "associated_injuries", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "initial_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "immobilization_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], FractureManagement.prototype, "immobilization_start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], FractureManagement.prototype, "immobilization_end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "surgical_intervention", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], FractureManagement.prototype, "surgery_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "implants_hardware", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], FractureManagement.prototype, "healing_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "healing_progression", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "serial_imaging", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], FractureManagement.prototype, "union_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "functional_outcome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "rehabilitation_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FractureManagement.prototype, "return_to_activity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], FractureManagement.prototype, "managing_physician", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FractureManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FractureManagement.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrthopedicPatient, patient => patient.fracture_managements),
    (0, typeorm_1.JoinColumn)({ name: 'orthopedic_patient_id' }),
    __metadata("design:type", OrthopedicPatient)
], FractureManagement.prototype, "orthopedic_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'managing_physician' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], FractureManagement.prototype, "physician", void 0);
exports.FractureManagement = FractureManagement = __decorate([
    (0, typeorm_1.Entity)('fracture_managements'),
    (0, typeorm_1.Index)(['orthopedic_patient_id']),
    (0, typeorm_1.Index)(['fracture_date']),
    (0, typeorm_1.Index)(['fracture_type']),
    (0, typeorm_1.Index)(['anatomical_location']),
    (0, typeorm_1.Index)(['healing_status'])
], FractureManagement);
let JointAssessment = class JointAssessment {
};
exports.JointAssessment = JointAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], JointAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], JointAssessment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], JointAssessment.prototype, "orthopedic_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], JointAssessment.prototype, "assessment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], JointAssessment.prototype, "joint_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "laterality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], JointAssessment.prototype, "assessment_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "primary_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], JointAssessment.prototype, "severity_grade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "range_of_motion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], JointAssessment.prototype, "flexion_degrees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], JointAssessment.prototype, "extension_degrees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], JointAssessment.prototype, "abduction_degrees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], JointAssessment.prototype, "adduction_degrees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], JointAssessment.prototype, "internal_rotation_degrees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], JointAssessment.prototype, "external_rotation_degrees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "strength_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "stability_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "special_tests", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "pain_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "functional_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "imaging_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "arthroscopic_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "cartilage_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "meniscal_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "ligament_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "synovial_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "treatment_recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], JointAssessment.prototype, "surgical_candidacy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], JointAssessment.prototype, "next_assessment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], JointAssessment.prototype, "assessed_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], JointAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], JointAssessment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrthopedicPatient, patient => patient.joint_assessments),
    (0, typeorm_1.JoinColumn)({ name: 'orthopedic_patient_id' }),
    __metadata("design:type", OrthopedicPatient)
], JointAssessment.prototype, "orthopedic_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assessed_by' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], JointAssessment.prototype, "assessor", void 0);
exports.JointAssessment = JointAssessment = __decorate([
    (0, typeorm_1.Entity)('joint_assessments'),
    (0, typeorm_1.Index)(['orthopedic_patient_id']),
    (0, typeorm_1.Index)(['assessment_date']),
    (0, typeorm_1.Index)(['joint_location']),
    (0, typeorm_1.Index)(['assessment_type']),
    (0, typeorm_1.Index)(['severity_grade'])
], JointAssessment);
let SpinalAssessment = class SpinalAssessment {
};
exports.SpinalAssessment = SpinalAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], SpinalAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], SpinalAssessment.prototype, "orthopedic_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], SpinalAssessment.prototype, "assessment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "spinal_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "specific_levels", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "assessment_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "pathology_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "chief_complaint", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "pain_distribution", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], SpinalAssessment.prototype, "pain_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "neurological_symptoms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "functional_limitations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "spinal_alignment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "range_of_motion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], SpinalAssessment.prototype, "cervical_flexion_degrees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], SpinalAssessment.prototype, "cervical_extension_degrees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], SpinalAssessment.prototype, "lumbar_flexion_degrees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], SpinalAssessment.prototype, "lumbar_extension_degrees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "neurological_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "motor_strength", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "sensory_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "reflex_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "special_tests", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "provocative_tests", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "imaging_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "mri_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "ct_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "xray_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "diagnostic_injections", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "treatment_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "current_treatment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "surgical_candidacy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SpinalAssessment.prototype, "conservative_options", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], SpinalAssessment.prototype, "next_assessment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], SpinalAssessment.prototype, "assessed_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SpinalAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SpinalAssessment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrthopedicPatient, patient => patient.spinal_assessments),
    (0, typeorm_1.JoinColumn)({ name: 'orthopedic_patient_id' }),
    __metadata("design:type", OrthopedicPatient)
], SpinalAssessment.prototype, "orthopedic_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assessed_by' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], SpinalAssessment.prototype, "assessor", void 0);
exports.SpinalAssessment = SpinalAssessment = __decorate([
    (0, typeorm_1.Entity)('spinal_assessments'),
    (0, typeorm_1.Index)(['orthopedic_patient_id']),
    (0, typeorm_1.Index)(['assessment_date']),
    (0, typeorm_1.Index)(['spinal_level']),
    (0, typeorm_1.Index)(['assessment_type']),
    (0, typeorm_1.Index)(['pathology_type'])
], SpinalAssessment);
//# sourceMappingURL=orthopedics.entity.js.map