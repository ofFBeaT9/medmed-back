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
exports.RenalLaboratory = exports.VascularAccess = exports.TransplantAssessment = exports.DialysisTreatment = exports.NephrologyVisit = exports.NephrologyPatient = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let NephrologyPatient = class NephrologyPatient {
};
exports.NephrologyPatient = NephrologyPatient;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], NephrologyPatient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], NephrologyPatient.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], NephrologyPatient.prototype, "primary_nephrologist_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "ckd_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "dialysis_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "transplant_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], NephrologyPatient.prototype, "ckd_diagnosis_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "primary_kidney_disease", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "secondary_kidney_diseases", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "kidney_disease_etiology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], NephrologyPatient.prototype, "baseline_creatinine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], NephrologyPatient.prototype, "baseline_egfr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], NephrologyPatient.prototype, "current_creatinine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], NephrologyPatient.prototype, "current_egfr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], NephrologyPatient.prototype, "last_creatinine_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "proteinuria_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "hematuria_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "hypertension_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "diabetes_nephropathy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "cardiovascular_disease", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "bone_mineral_disorders", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "anemia_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "acidosis_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "hyperkalemia_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "current_medications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "dietary_restrictions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "family_kidney_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], NephrologyPatient.prototype, "dialysis_start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], NephrologyPatient.prototype, "transplant_evaluation_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], NephrologyPatient.prototype, "transplant_listing_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], NephrologyPatient.prototype, "transplant_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "access_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], NephrologyPatient.prototype, "current_access_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], NephrologyPatient.prototype, "last_nephrology_visit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], NephrologyPatient.prototype, "last_social_work_eval", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], NephrologyPatient.prototype, "last_dietitian_visit", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NephrologyPatient.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], NephrologyPatient.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], NephrologyPatient.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_nephrologist_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], NephrologyPatient.prototype, "primary_nephrologist", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => NephrologyVisit, visit => visit.nephrology_patient),
    __metadata("design:type", Array)
], NephrologyPatient.prototype, "nephrology_visits", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DialysisTreatment, dialysis => dialysis.nephrology_patient),
    __metadata("design:type", Array)
], NephrologyPatient.prototype, "dialysis_treatments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TransplantAssessment, transplant => transplant.nephrology_patient),
    __metadata("design:type", Array)
], NephrologyPatient.prototype, "transplant_assessments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => VascularAccess, access => access.nephrology_patient),
    __metadata("design:type", Array)
], NephrologyPatient.prototype, "vascular_accesses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RenalLaboratory, lab => lab.nephrology_patient),
    __metadata("design:type", Array)
], NephrologyPatient.prototype, "renal_laboratories", void 0);
exports.NephrologyPatient = NephrologyPatient = __decorate([
    (0, typeorm_1.Entity)('nephrology_patients'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['primary_nephrologist_id']),
    (0, typeorm_1.Index)(['ckd_stage']),
    (0, typeorm_1.Index)(['dialysis_status']),
    (0, typeorm_1.Index)(['transplant_status'])
], NephrologyPatient);
let NephrologyVisit = class NephrologyVisit {
};
exports.NephrologyVisit = NephrologyVisit;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "nephrology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], NephrologyVisit.prototype, "visit_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "visit_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "chief_complaint", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "history_present_illness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "symptom_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "fluid_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "urinary_symptoms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "edema_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "dyspnea_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "fatigue_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "nausea_vomiting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "pruritus_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "bone_pain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "medication_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "medication_adherence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "dietary_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "fluid_restriction_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "weight_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "dry_weight_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "weight_change_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "heart_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "blood_pressure_systolic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "blood_pressure_diastolic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "temperature_celsius", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "respiratory_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "oxygen_saturation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "general_appearance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "fluid_status_exam", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "cardiovascular_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "pulmonary_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "abdominal_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "extremity_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "skin_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "access_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "neurological_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "current_egfr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], NephrologyVisit.prototype, "current_creatinine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "laboratory_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "imaging_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "dialysis_adequacy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "access_function", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "transplant_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "assessment_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "treatment_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "medication_adjustments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "dietary_counseling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "patient_education", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], NephrologyVisit.prototype, "next_visit_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], NephrologyVisit.prototype, "visit_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NephrologyVisit.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], NephrologyVisit.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => NephrologyPatient, patient => patient.nephrology_visits),
    (0, typeorm_1.JoinColumn)({ name: 'nephrology_patient_id' }),
    __metadata("design:type", NephrologyPatient)
], NephrologyVisit.prototype, "nephrology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], NephrologyVisit.prototype, "provider", void 0);
exports.NephrologyVisit = NephrologyVisit = __decorate([
    (0, typeorm_1.Entity)('nephrology_visits'),
    (0, typeorm_1.Index)(['nephrology_patient_id']),
    (0, typeorm_1.Index)(['visit_date']),
    (0, typeorm_1.Index)(['visit_type']),
    (0, typeorm_1.Index)(['provider_id']),
    (0, typeorm_1.Index)(['current_egfr'])
], NephrologyVisit);
let DialysisTreatment = class DialysisTreatment {
};
exports.DialysisTreatment = DialysisTreatment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "nephrology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], DialysisTreatment.prototype, "treatment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "dialysis_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "dialysis_modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "treatment_duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "fluid_removal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "pre_weight_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "post_weight_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "target_weight_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "weight_loss_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "pre_systolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "pre_diastolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "post_systolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "post_diastolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "pre_heart_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "post_heart_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "access_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "access_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "arterial_pressure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "venous_pressure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "transmembrane_pressure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 0, nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "blood_flow_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 0, nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "dialysate_flow_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "dialyzer_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "dialyzer_surface_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "anticoagulation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "dialysate_composition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "ultrafiltration_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "kt_v_delivered", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "urr_percentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "treatment_complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "hypotension_episodes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "cramping_episodes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "patient_symptoms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "interventions_performed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "treatment_completion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "early_termination_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DialysisTreatment.prototype, "nursing_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "dialysis_nurse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], DialysisTreatment.prototype, "supervising_physician", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DialysisTreatment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DialysisTreatment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => NephrologyPatient, patient => patient.dialysis_treatments),
    (0, typeorm_1.JoinColumn)({ name: 'nephrology_patient_id' }),
    __metadata("design:type", NephrologyPatient)
], DialysisTreatment.prototype, "nephrology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'dialysis_nurse' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], DialysisTreatment.prototype, "nurse", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'supervising_physician' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], DialysisTreatment.prototype, "physician", void 0);
exports.DialysisTreatment = DialysisTreatment = __decorate([
    (0, typeorm_1.Entity)('dialysis_treatments'),
    (0, typeorm_1.Index)(['nephrology_patient_id']),
    (0, typeorm_1.Index)(['treatment_date']),
    (0, typeorm_1.Index)(['dialysis_type']),
    (0, typeorm_1.Index)(['treatment_duration']),
    (0, typeorm_1.Index)(['fluid_removal'])
], DialysisTreatment);
let TransplantAssessment = class TransplantAssessment {
};
exports.TransplantAssessment = TransplantAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TransplantAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TransplantAssessment.prototype, "nephrology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], TransplantAssessment.prototype, "assessment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "transplant_candidacy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "listing_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "blood_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "hla_typing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "panel_reactive_antibodies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], TransplantAssessment.prototype, "calculated_pra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "crossmatch_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "donor_specific_antibodies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "cardiovascular_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "pulmonary_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "infectious_disease_screening", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "malignancy_screening", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "psychosocial_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "surgical_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "comorbidity_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "contraindications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "relative_contraindications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], TransplantAssessment.prototype, "body_mass_index", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "nutritional_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "bone_disease_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "immunization_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "social_support_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "insurance_financial_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "education_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "living_donor_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "transplant_team_recommendation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], TransplantAssessment.prototype, "listing_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], TransplantAssessment.prototype, "estimated_wait_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "special_considerations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "geographic_sharing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransplantAssessment.prototype, "follow_up_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], TransplantAssessment.prototype, "next_evaluation_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], TransplantAssessment.prototype, "transplant_coordinator", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], TransplantAssessment.prototype, "transplant_nephrologist", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TransplantAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TransplantAssessment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => NephrologyPatient, patient => patient.transplant_assessments),
    (0, typeorm_1.JoinColumn)({ name: 'nephrology_patient_id' }),
    __metadata("design:type", NephrologyPatient)
], TransplantAssessment.prototype, "nephrology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'transplant_coordinator' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], TransplantAssessment.prototype, "coordinator", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'transplant_nephrologist' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], TransplantAssessment.prototype, "nephrologist", void 0);
exports.TransplantAssessment = TransplantAssessment = __decorate([
    (0, typeorm_1.Entity)('transplant_assessments'),
    (0, typeorm_1.Index)(['nephrology_patient_id']),
    (0, typeorm_1.Index)(['assessment_date']),
    (0, typeorm_1.Index)(['transplant_candidacy']),
    (0, typeorm_1.Index)(['listing_status']),
    (0, typeorm_1.Index)(['blood_type'])
], TransplantAssessment);
let VascularAccess = class VascularAccess {
};
exports.VascularAccess = VascularAccess;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], VascularAccess.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], VascularAccess.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], VascularAccess.prototype, "nephrology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VascularAccess.prototype, "access_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VascularAccess.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], VascularAccess.prototype, "creation_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], VascularAccess.prototype, "access_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "surgical_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "maturation_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], VascularAccess.prototype, "first_cannulation_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "cannulation_technique", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "flow_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 0, nullable: true }),
    __metadata("design:type", Number)
], VascularAccess.prototype, "access_flow_ml_min", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "physical_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "thrill_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "bruit_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "stenosis_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "infection_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "thrombosis_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "interventions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "balloon_angioplasty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "stent_placement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "surgical_revisions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "catheter_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "catheter_complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "monitoring_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VascularAccess.prototype, "patient_education", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], VascularAccess.prototype, "next_surveillance_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], VascularAccess.prototype, "access_surgeon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], VascularAccess.prototype, "monitoring_provider", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VascularAccess.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VascularAccess.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => NephrologyPatient, patient => patient.vascular_accesses),
    (0, typeorm_1.JoinColumn)({ name: 'nephrology_patient_id' }),
    __metadata("design:type", NephrologyPatient)
], VascularAccess.prototype, "nephrology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'access_surgeon' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], VascularAccess.prototype, "surgeon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'monitoring_provider' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], VascularAccess.prototype, "provider", void 0);
exports.VascularAccess = VascularAccess = __decorate([
    (0, typeorm_1.Entity)('vascular_accesses'),
    (0, typeorm_1.Index)(['nephrology_patient_id']),
    (0, typeorm_1.Index)(['creation_date']),
    (0, typeorm_1.Index)(['access_type']),
    (0, typeorm_1.Index)(['access_status']),
    (0, typeorm_1.Index)(['location'])
], VascularAccess);
let RenalLaboratory = class RenalLaboratory {
};
exports.RenalLaboratory = RenalLaboratory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RenalLaboratory.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "nephrology_patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], RenalLaboratory.prototype, "lab_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "creatinine_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "egfr_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "bun_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "bun_creatinine_ratio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "urine_protein", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RenalLaboratory.prototype, "urine_protein_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "albumin_creatinine_ratio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "protein_creatinine_ratio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RenalLaboratory.prototype, "urinalysis_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RenalLaboratory.prototype, "urine_microscopy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "sodium_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "potassium_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "chloride_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "bicarbonate_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "calcium_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "phosphorus_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "parathyroid_hormone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "vitamin_d_25oh", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "vitamin_d_1_25", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "hemoglobin_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "hematocrit_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "iron_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "tibc_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "transferrin_saturation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "ferritin_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "albumin_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "total_protein", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RenalLaboratory.prototype, "hepatitis_serology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RenalLaboratory.prototype, "hiv_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RenalLaboratory.prototype, "immunosuppression_levels", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RenalLaboratory.prototype, "other_labs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RenalLaboratory.prototype, "lab_interpretation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RenalLaboratory.prototype, "ordering_provider", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RenalLaboratory.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RenalLaboratory.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => NephrologyPatient, patient => patient.renal_laboratories),
    (0, typeorm_1.JoinColumn)({ name: 'nephrology_patient_id' }),
    __metadata("design:type", NephrologyPatient)
], RenalLaboratory.prototype, "nephrology_patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'ordering_provider' }),
    __metadata("design:type", typeof (_j = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _j : Object)
], RenalLaboratory.prototype, "provider", void 0);
exports.RenalLaboratory = RenalLaboratory = __decorate([
    (0, typeorm_1.Entity)('renal_laboratories'),
    (0, typeorm_1.Index)(['nephrology_patient_id']),
    (0, typeorm_1.Index)(['lab_date']),
    (0, typeorm_1.Index)(['creatinine_value']),
    (0, typeorm_1.Index)(['egfr_value']),
    (0, typeorm_1.Index)(['urine_protein'])
], RenalLaboratory);
//# sourceMappingURL=nephrology.entity.js.map