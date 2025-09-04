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
exports.DermoscopicExam = exports.SkinBiopsy = exports.DermatologyProcedure = exports.SkinLesion = exports.DermatologyVisit = exports.DermatologyPatient = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let DermatologyPatient = class DermatologyPatient {
};
exports.DermatologyPatient = DermatologyPatient;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DermatologyPatient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DermatologyPatient.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DermatologyPatient.prototype, "primary_dermatologist_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "skin_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "melanoma_risk_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "acne_severity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "dermatologic_diagnoses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "skin_cancer_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "family_skin_cancer_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "sun_exposure_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "tanning_bed_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "occupational_exposures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "allergic_reactions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "drug_allergies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "cosmetic_allergies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "current_skin_medications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "previous_treatments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "surgical_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "mole_mapping", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], DermatologyPatient.prototype, "last_full_body_exam", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], DermatologyPatient.prototype, "last_dermoscopy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], DermatologyPatient.prototype, "last_biopsy_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "skincare_routine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyPatient.prototype, "lifestyle_factors", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DermatologyPatient.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DermatologyPatient.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], DermatologyPatient.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_dermatologist_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], DermatologyPatient.prototype, "primary_dermatologist", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DermatologyVisit, visit => visit.dermatology_patient),
    __metadata("design:type", Array)
], DermatologyPatient.prototype, "dermatology_visits", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SkinLesion, lesion => lesion.dermatology_patient),
    __metadata("design:type", Array)
], DermatologyPatient.prototype, "skin_lesions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DermatologyProcedure, procedure => procedure.dermatology_patient),
    __metadata("design:type", Array)
], DermatologyPatient.prototype, "dermatology_procedures", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SkinBiopsy, biopsy => biopsy.dermatology_patient),
    __metadata("design:type", Array)
], DermatologyPatient.prototype, "skin_biopsies", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DermoscopicExam, dermoscopy => dermoscopy.dermatology_patient),
    __metadata("design:type", Array)
], DermatologyPatient.prototype, "dermoscopic_exams", void 0);
exports.DermatologyPatient = DermatologyPatient = __decorate([
    (0, typeorm_1.Entity)('dermatology_patients'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['primary_dermatologist_id']),
    (0, typeorm_1.Index)(['skin_type']),
    (0, typeorm_1.Index)(['melanoma_risk_level']),
    (0, typeorm_1.Index)(['acne_severity'])
], DermatologyPatient);
let DermatologyVisit = class DermatologyVisit {
};
exports.DermatologyVisit = DermatologyVisit;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DermatologyVisit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DermatologyVisit.prototype, "dermatology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], DermatologyVisit.prototype, "visit_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "visit_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "exam_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DermatologyVisit.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "chief_complaint", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "history_present_illness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "skin_symptoms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "lesion_changes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "new_lesions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "symptom_triggers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "current_treatments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "treatment_response", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "sun_protection_habits", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "recent_sun_exposure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "skin_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "head_neck_exam", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "trunk_exam", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "extremities_exam", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "genital_exam", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "nail_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "hair_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "mucous_membrane_exam", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "lymph_node_exam", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "lesions_identified", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "photography_performed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "dermoscopy_performed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "diagnostic_studies_ordered", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "assessment_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "treatment_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "patient_education", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], DermatologyVisit.prototype, "next_visit_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyVisit.prototype, "visit_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DermatologyVisit.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DermatologyVisit.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DermatologyPatient, patient => patient.dermatology_visits),
    (0, typeorm_1.JoinColumn)({ name: 'dermatology_patient_id' }),
    __metadata("design:type", DermatologyPatient)
], DermatologyVisit.prototype, "dermatology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], DermatologyVisit.prototype, "provider", void 0);
exports.DermatologyVisit = DermatologyVisit = __decorate([
    (0, typeorm_1.Entity)('dermatology_visits'),
    (0, typeorm_1.Index)(['dermatology_patient_id']),
    (0, typeorm_1.Index)(['visit_date']),
    (0, typeorm_1.Index)(['visit_type']),
    (0, typeorm_1.Index)(['provider_id']),
    (0, typeorm_1.Index)(['exam_type'])
], DermatologyVisit);
let SkinLesion = class SkinLesion {
};
exports.SkinLesion = SkinLesion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], SkinLesion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], SkinLesion.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], SkinLesion.prototype, "dermatology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "lesion_identifier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], SkinLesion.prototype, "discovery_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], SkinLesion.prototype, "lesion_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], SkinLesion.prototype, "anatomical_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "body_region", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "laterality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], SkinLesion.prototype, "size_length_mm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], SkinLesion.prototype, "size_width_mm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], SkinLesion.prototype, "size_height_mm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "shape", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "border", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "color_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "surface", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "consistency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], SkinLesion.prototype, "symptomatic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "symptoms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], SkinLesion.prototype, "malignancy_concern", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "dermoscopic_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "clinical_impression", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "differential_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], SkinLesion.prototype, "biopsy_recommended", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "follow_up_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], SkinLesion.prototype, "next_evaluation_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "serial_images", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinLesion.prototype, "monitoring_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], SkinLesion.prototype, "documented_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SkinLesion.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SkinLesion.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DermatologyPatient, patient => patient.skin_lesions),
    (0, typeorm_1.JoinColumn)({ name: 'dermatology_patient_id' }),
    __metadata("design:type", DermatologyPatient)
], SkinLesion.prototype, "dermatology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'documented_by' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], SkinLesion.prototype, "documenter", void 0);
exports.SkinLesion = SkinLesion = __decorate([
    (0, typeorm_1.Entity)('skin_lesions'),
    (0, typeorm_1.Index)(['dermatology_patient_id']),
    (0, typeorm_1.Index)(['discovery_date']),
    (0, typeorm_1.Index)(['lesion_type']),
    (0, typeorm_1.Index)(['anatomical_location']),
    (0, typeorm_1.Index)(['malignancy_concern'])
], SkinLesion);
let DermatologyProcedure = class DermatologyProcedure {
};
exports.DermatologyProcedure = DermatologyProcedure;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DermatologyProcedure.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DermatologyProcedure.prototype, "dermatology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], DermatologyProcedure.prototype, "procedure_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "procedure_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "procedure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "anatomical_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "procedure_indication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DermatologyProcedure.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "pre_procedure_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "anesthesia_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "anesthetic_agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "procedure_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "closure_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DermatologyProcedure.prototype, "number_of_sutures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "suture_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "specimens_collected", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "pathology_submission", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "intraoperative_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "post_procedure_care", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "wound_care_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "activity_restrictions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "medications_prescribed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], DermatologyProcedure.prototype, "suture_removal_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], DermatologyProcedure.prototype, "follow_up_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermatologyProcedure.prototype, "procedure_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DermatologyProcedure.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DermatologyProcedure.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DermatologyPatient, patient => patient.dermatology_procedures),
    (0, typeorm_1.JoinColumn)({ name: 'dermatology_patient_id' }),
    __metadata("design:type", DermatologyPatient)
], DermatologyProcedure.prototype, "dermatology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], DermatologyProcedure.prototype, "provider", void 0);
exports.DermatologyProcedure = DermatologyProcedure = __decorate([
    (0, typeorm_1.Entity)('dermatology_procedures'),
    (0, typeorm_1.Index)(['dermatology_patient_id']),
    (0, typeorm_1.Index)(['procedure_date']),
    (0, typeorm_1.Index)(['procedure_type']),
    (0, typeorm_1.Index)(['provider_id']),
    (0, typeorm_1.Index)(['anatomical_location'])
], DermatologyProcedure);
let SkinBiopsy = class SkinBiopsy {
};
exports.SkinBiopsy = SkinBiopsy;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], SkinBiopsy.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], SkinBiopsy.prototype, "dermatology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], SkinBiopsy.prototype, "biopsy_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "biopsy_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "anatomical_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "clinical_indication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "clinical_impression", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], SkinBiopsy.prototype, "specimen_size_mm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "specimen_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "pathology_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], SkinBiopsy.prototype, "pathology_report_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "pathology_result", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "histologic_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "malignancy_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "specific_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "margins_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "breslow_thickness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "clark_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], SkinBiopsy.prototype, "ulceration_present", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], SkinBiopsy.prototype, "mitotic_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "special_stains", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "immunohistochemistry", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "pathologist_comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "correlation_clinical", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], SkinBiopsy.prototype, "further_excision_needed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "follow_up_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], SkinBiopsy.prototype, "performed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], SkinBiopsy.prototype, "pathologist_name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SkinBiopsy.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SkinBiopsy.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DermatologyPatient, patient => patient.skin_biopsies),
    (0, typeorm_1.JoinColumn)({ name: 'dermatology_patient_id' }),
    __metadata("design:type", DermatologyPatient)
], SkinBiopsy.prototype, "dermatology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'performed_by' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], SkinBiopsy.prototype, "performer", void 0);
exports.SkinBiopsy = SkinBiopsy = __decorate([
    (0, typeorm_1.Entity)('skin_biopsies'),
    (0, typeorm_1.Index)(['dermatology_patient_id']),
    (0, typeorm_1.Index)(['biopsy_date']),
    (0, typeorm_1.Index)(['biopsy_type']),
    (0, typeorm_1.Index)(['anatomical_location']),
    (0, typeorm_1.Index)(['pathology_result'])
], SkinBiopsy);
let DermoscopicExam = class DermoscopicExam {
};
exports.DermoscopicExam = DermoscopicExam;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DermoscopicExam.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DermoscopicExam.prototype, "dermatology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], DermoscopicExam.prototype, "exam_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "lesion_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "lesion_identifier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "dermoscope_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "magnification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "dermoscopic_pattern", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "pigment_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "dots_globules", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "streaks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "blue_whitish_veil", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "vascular_structures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "regression_structures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "pigmentation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "asymmetry", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "border_irregularity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "color_structures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "differential_structures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "chaos_clues", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DermoscopicExam.prototype, "abcd_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DermoscopicExam.prototype, "seven_point_checklist", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "dermoscopic_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "malignancy_risk", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "image_file_path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "comparison_previous", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DermoscopicExam.prototype, "examination_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], DermoscopicExam.prototype, "examined_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DermoscopicExam.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DermoscopicExam.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DermatologyPatient, patient => patient.dermoscopic_exams),
    (0, typeorm_1.JoinColumn)({ name: 'dermatology_patient_id' }),
    __metadata("design:type", DermatologyPatient)
], DermoscopicExam.prototype, "dermatology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'examined_by' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], DermoscopicExam.prototype, "examiner", void 0);
exports.DermoscopicExam = DermoscopicExam = __decorate([
    (0, typeorm_1.Entity)('dermoscopic_exams'),
    (0, typeorm_1.Index)(['dermatology_patient_id']),
    (0, typeorm_1.Index)(['exam_date']),
    (0, typeorm_1.Index)(['lesion_location']),
    (0, typeorm_1.Index)(['dermoscopic_diagnosis']),
    (0, typeorm_1.Index)(['malignancy_risk'])
], DermoscopicExam);
//# sourceMappingURL=dermatology.entity.js.map