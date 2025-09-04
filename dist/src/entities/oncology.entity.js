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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancerSurgery = exports.TumorAssessment = exports.RadiationTreatment = exports.ChemotherapyTreatment = exports.OncologyVisit = exports.OncologyPatient = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let OncologyPatient = class OncologyPatient {
};
exports.OncologyPatient = OncologyPatient;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], OncologyPatient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], OncologyPatient.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], OncologyPatient.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], OncologyPatient.prototype, "primary_oncologist_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], OncologyPatient.prototype, "initial_diagnosis_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "primary_cancer_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "primary_cancer_site", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "icd_o_morphology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "icd_o_topography", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OncologyPatient.prototype, "cancer_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "tnm_staging", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "tumor_grade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OncologyPatient.prototype, "treatment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OncologyPatient.prototype, "performance_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OncologyPatient.prototype, "ecog_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OncologyPatient.prototype, "karnofsky_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "cancer_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "family_cancer_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "genetic_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "biomarkers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "molecular_profiling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "treatment_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "care_team", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "supportive_care_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "advance_directives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], OncologyPatient.prototype, "last_restaging_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], OncologyPatient.prototype, "current_response", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OncologyPatient.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OncologyPatient.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], OncologyPatient.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_oncologist_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], OncologyPatient.prototype, "primary_oncologist", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OncologyVisit, visit => visit.oncology_patient),
    __metadata("design:type", Array)
], OncologyPatient.prototype, "oncology_visits", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ChemotherapyTreatment, treatment => treatment.oncology_patient),
    __metadata("design:type", Array)
], OncologyPatient.prototype, "chemotherapy_treatments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RadiationTreatment, radiation => radiation.oncology_patient),
    __metadata("design:type", Array)
], OncologyPatient.prototype, "radiation_treatments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TumorAssessment, assessment => assessment.oncology_patient),
    __metadata("design:type", Array)
], OncologyPatient.prototype, "tumor_assessments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CancerSurgery, surgery => surgery.oncology_patient),
    __metadata("design:type", Array)
], OncologyPatient.prototype, "cancer_surgeries", void 0);
exports.OncologyPatient = OncologyPatient = __decorate([
    (0, typeorm_1.Entity)('oncology_patients'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['primary_oncologist_id']),
    (0, typeorm_1.Index)(['cancer_stage']),
    (0, typeorm_1.Index)(['treatment_status']),
    (0, typeorm_1.Index)(['performance_status'])
], OncologyPatient);
let OncologyVisit = class OncologyVisit {
};
exports.OncologyVisit = OncologyVisit;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], OncologyVisit.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "oncology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], OncologyVisit.prototype, "visit_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OncologyVisit.prototype, "visit_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "chief_complaint", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "history_present_illness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "cancer_related_symptoms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "treatment_side_effects", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], OncologyVisit.prototype, "performance_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "ecog_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "karnofsky_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "weight_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "height_cm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "bmi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "weight_change_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "heart_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "systolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "diastolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "respiratory_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "temperature_celsius", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], OncologyVisit.prototype, "oxygen_saturation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "physical_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "lymph_node_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "tumor_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "pain_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "pain_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "nutritional_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "psychosocial_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "laboratory_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "imaging_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "treatment_response", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "toxicity_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "medication_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "assessment_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "patient_education", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], OncologyVisit.prototype, "next_visit_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], OncologyVisit.prototype, "visit_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OncologyVisit.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OncologyVisit.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OncologyPatient, patient => patient.oncology_visits),
    (0, typeorm_1.JoinColumn)({ name: 'oncology_patient_id' }),
    __metadata("design:type", OncologyPatient)
], OncologyVisit.prototype, "oncology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], OncologyVisit.prototype, "provider", void 0);
exports.OncologyVisit = OncologyVisit = __decorate([
    (0, typeorm_1.Entity)('oncology_visits'),
    (0, typeorm_1.Index)(['oncology_patient_id']),
    (0, typeorm_1.Index)(['visit_date']),
    (0, typeorm_1.Index)(['visit_type']),
    (0, typeorm_1.Index)(['provider_id']),
    (0, typeorm_1.Index)(['performance_status'])
], OncologyVisit);
let ChemotherapyTreatment = class ChemotherapyTreatment {
};
exports.ChemotherapyTreatment = ChemotherapyTreatment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ChemotherapyTreatment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ChemotherapyTreatment.prototype, "oncology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ChemotherapyTreatment.prototype, "treatment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "protocol_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ChemotherapyTreatment.prototype, "cycle_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ChemotherapyTreatment.prototype, "day_of_cycle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "treatment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "treatment_intent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ChemotherapyTreatment.prototype, "body_surface_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ChemotherapyTreatment.prototype, "patient_weight_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], ChemotherapyTreatment.prototype, "patient_height_cm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "pre_medications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "chemotherapy_drugs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "drug_dosing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "dose_modifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "administration_route", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ChemotherapyTreatment.prototype, "infusion_duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "vital_signs_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "adverse_reactions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "reaction_severity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "supportive_care", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "laboratory_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ChemotherapyTreatment.prototype, "next_cycle_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "post_treatment_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ChemotherapyTreatment.prototype, "administering_nurse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ChemotherapyTreatment.prototype, "supervising_physician", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChemotherapyTreatment.prototype, "treatment_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ChemotherapyTreatment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ChemotherapyTreatment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OncologyPatient, patient => patient.chemotherapy_treatments),
    (0, typeorm_1.JoinColumn)({ name: 'oncology_patient_id' }),
    __metadata("design:type", OncologyPatient)
], ChemotherapyTreatment.prototype, "oncology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'administering_nurse' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], ChemotherapyTreatment.prototype, "nurse", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'supervising_physician' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], ChemotherapyTreatment.prototype, "physician", void 0);
exports.ChemotherapyTreatment = ChemotherapyTreatment = __decorate([
    (0, typeorm_1.Entity)('chemotherapy_treatments'),
    (0, typeorm_1.Index)(['oncology_patient_id']),
    (0, typeorm_1.Index)(['treatment_date']),
    (0, typeorm_1.Index)(['protocol_name']),
    (0, typeorm_1.Index)(['cycle_number']),
    (0, typeorm_1.Index)(['treatment_status'])
], ChemotherapyTreatment);
let RadiationTreatment = class RadiationTreatment {
};
exports.RadiationTreatment = RadiationTreatment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RadiationTreatment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiationTreatment.prototype, "oncology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], RadiationTreatment.prototype, "treatment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "treatment_site", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "treatment_technique", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "treatment_intent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiationTreatment.prototype, "fraction_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], RadiationTreatment.prototype, "planned_fractions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RadiationTreatment.prototype, "daily_dose_cgy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RadiationTreatment.prototype, "cumulative_dose_cgy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RadiationTreatment.prototype, "planned_total_dose_cgy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "treatment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "treatment_fields", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "beam_parameters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "patient_positioning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "image_guidance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RadiationTreatment.prototype, "setup_time_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RadiationTreatment.prototype, "treatment_time_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "acute_side_effects", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "skin_reaction_grade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "supportive_care", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "setup_variations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiationTreatment.prototype, "treatment_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RadiationTreatment.prototype, "radiation_therapist", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RadiationTreatment.prototype, "radiation_oncologist", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RadiationTreatment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RadiationTreatment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OncologyPatient, patient => patient.radiation_treatments),
    (0, typeorm_1.JoinColumn)({ name: 'oncology_patient_id' }),
    __metadata("design:type", OncologyPatient)
], RadiationTreatment.prototype, "oncology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'radiation_therapist' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], RadiationTreatment.prototype, "therapist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'radiation_oncologist' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], RadiationTreatment.prototype, "oncologist", void 0);
exports.RadiationTreatment = RadiationTreatment = __decorate([
    (0, typeorm_1.Entity)('radiation_treatments'),
    (0, typeorm_1.Index)(['oncology_patient_id']),
    (0, typeorm_1.Index)(['treatment_date']),
    (0, typeorm_1.Index)(['treatment_site']),
    (0, typeorm_1.Index)(['fraction_number']),
    (0, typeorm_1.Index)(['treatment_status'])
], RadiationTreatment);
let TumorAssessment = class TumorAssessment {
};
exports.TumorAssessment = TumorAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TumorAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], TumorAssessment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TumorAssessment.prototype, "oncology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], TumorAssessment.prototype, "assessment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TumorAssessment.prototype, "assessment_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], TumorAssessment.prototype, "assessment_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TumorAssessment.prototype, "response_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TumorAssessment.prototype, "disease_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TumorAssessment.prototype, "target_lesions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], TumorAssessment.prototype, "sum_target_lesions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TumorAssessment.prototype, "non_target_lesions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TumorAssessment.prototype, "new_lesions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TumorAssessment.prototype, "imaging_studies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TumorAssessment.prototype, "biomarker_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TumorAssessment.prototype, "clinical_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], TumorAssessment.prototype, "percent_change_from_baseline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], TumorAssessment.prototype, "percent_change_from_nadir", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TumorAssessment.prototype, "response_assessment_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], TumorAssessment.prototype, "next_assessment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], TumorAssessment.prototype, "assessed_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TumorAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TumorAssessment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OncologyPatient, patient => patient.tumor_assessments),
    (0, typeorm_1.JoinColumn)({ name: 'oncology_patient_id' }),
    __metadata("design:type", OncologyPatient)
], TumorAssessment.prototype, "oncology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assessed_by' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], TumorAssessment.prototype, "assessor", void 0);
exports.TumorAssessment = TumorAssessment = __decorate([
    (0, typeorm_1.Entity)('tumor_assessments'),
    (0, typeorm_1.Index)(['oncology_patient_id']),
    (0, typeorm_1.Index)(['assessment_date']),
    (0, typeorm_1.Index)(['assessment_type']),
    (0, typeorm_1.Index)(['response_category']),
    (0, typeorm_1.Index)(['disease_status'])
], TumorAssessment);
let CancerSurgery = class CancerSurgery {
};
exports.CancerSurgery = CancerSurgery;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CancerSurgery.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], CancerSurgery.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], CancerSurgery.prototype, "oncology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], CancerSurgery.prototype, "surgery_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], CancerSurgery.prototype, "surgery_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "surgical_intent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "procedure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "surgical_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "anatomical_site", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], CancerSurgery.prototype, "surgeon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "surgical_team", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], CancerSurgery.prototype, "operative_time_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], CancerSurgery.prototype, "estimated_blood_loss_ml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], CancerSurgery.prototype, "resection_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "margins_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "specimens_sent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "intraoperative_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "procedures_performed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "intraoperative_complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "postoperative_course", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "postoperative_complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CancerSurgery.prototype, "hospital_length_stay_days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], CancerSurgery.prototype, "discharge_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "pathology_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "final_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CancerSurgery.prototype, "lymph_nodes_examined", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CancerSurgery.prototype, "lymph_nodes_positive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "adjuvant_therapy_recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CancerSurgery.prototype, "surgical_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CancerSurgery.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CancerSurgery.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OncologyPatient, patient => patient.cancer_surgeries),
    (0, typeorm_1.JoinColumn)({ name: 'oncology_patient_id' }),
    __metadata("design:type", OncologyPatient)
], CancerSurgery.prototype, "oncology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'surgeon_id' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], CancerSurgery.prototype, "surgeon", void 0);
exports.CancerSurgery = CancerSurgery = __decorate([
    (0, typeorm_1.Entity)('cancer_surgeries'),
    (0, typeorm_1.Index)(['oncology_patient_id']),
    (0, typeorm_1.Index)(['surgery_date']),
    (0, typeorm_1.Index)(['surgery_type']),
    (0, typeorm_1.Index)(['surgeon_id']),
    (0, typeorm_1.Index)(['resection_status'])
], CancerSurgery);
//# sourceMappingURL=oncology.entity.js.map