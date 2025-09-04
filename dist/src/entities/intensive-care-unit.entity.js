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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICUQualityMetric = exports.ICUSedationAssessment = exports.ICUDailyGoals = exports.ICUVentilatorSettings = exports.ICUFluidBalance = exports.ICUVitalSigns = exports.ICUAdmission = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
const patient_management_entity_2 = require("./patient-management.entity");
let ICUAdmission = class ICUAdmission {
};
exports.ICUAdmission = ICUAdmission;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ICUAdmission.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "encounter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true, nullable: true }),
    __metadata("design:type", String)
], ICUAdmission.prototype, "icu_admission_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ICUAdmission.prototype, "admission_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUAdmission.prototype, "icu_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUAdmission.prototype, "admission_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUAdmission.prototype, "admission_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUAdmission.prototype, "primary_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUAdmission.prototype, "secondary_diagnoses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUAdmission.prototype, "bed_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "attending_physician_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "primary_nurse_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "respiratory_therapist_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUAdmission.prototype, "severity_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "apache_ii_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "apache_iii_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "saps_ii_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "sofa_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "predicted_mortality_percent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ICUAdmission.prototype, "isolation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUAdmission.prototype, "isolation_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "mechanical_ventilation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ICUAdmission.prototype, "ventilation_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ICUAdmission.prototype, "ventilation_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "ventilation_days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "vasopressor_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "renal_replacement_therapy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "ecmo_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUAdmission.prototype, "invasive_devices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ICUAdmission.prototype, "discharge_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ICUAdmission.prototype, "discharge_disposition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ICUAdmission.prototype, "discharge_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "length_of_stay_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUAdmission.prototype, "discharge_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUAdmission.prototype, "complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ICUAdmission.prototype, "readmission_within_48_hours", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ICUAdmission.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ICUAdmission.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], ICUAdmission.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_2.Encounter),
    (0, typeorm_1.JoinColumn)({ name: 'encounter_id' }),
    __metadata("design:type", patient_management_entity_2.Encounter)
], ICUAdmission.prototype, "encounter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'attending_physician_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], ICUAdmission.prototype, "attending_physician", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_nurse_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], ICUAdmission.prototype, "primary_nurse", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'respiratory_therapist_id' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], ICUAdmission.prototype, "respiratory_therapist", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ICUVitalSigns, vitals => vitals.icu_admission),
    __metadata("design:type", Array)
], ICUAdmission.prototype, "vital_signs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ICUFluidBalance, fluid => fluid.icu_admission),
    __metadata("design:type", Array)
], ICUAdmission.prototype, "fluid_balance", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ICUVentilatorSettings, vent => vent.icu_admission),
    __metadata("design:type", Array)
], ICUAdmission.prototype, "ventilator_settings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ICUDailyGoals, goals => goals.icu_admission),
    __metadata("design:type", Array)
], ICUAdmission.prototype, "daily_goals", void 0);
exports.ICUAdmission = ICUAdmission = __decorate([
    (0, typeorm_1.Entity)('icu_admissions'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['admission_time']),
    (0, typeorm_1.Index)(['icu_type']),
    (0, typeorm_1.Index)(['severity_score']),
    (0, typeorm_1.Index)(['admission_source']),
    (0, typeorm_1.Index)(['attending_physician_id']),
    (0, typeorm_1.Index)(['bed_number']),
    (0, typeorm_1.Index)(['discharge_time'])
], ICUAdmission);
let ICUVitalSigns = class ICUVitalSigns {
};
exports.ICUVitalSigns = ICUVitalSigns;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ICUVitalSigns.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "icu_admission_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ICUVitalSigns.prototype, "measurement_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUVitalSigns.prototype, "vital_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "heart_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "systolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "diastolic_bp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "mean_arterial_pressure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "central_venous_pressure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "pulmonary_artery_pressure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "pulmonary_wedge_pressure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "cardiac_output", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "cardiac_index", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "respiratory_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "oxygen_saturation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "end_tidal_co2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "intracranial_pressure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "cerebral_perfusion_pressure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "intra_abdominal_pressure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "glasgow_coma_scale", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ICUVitalSigns.prototype, "pupil_response_left", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ICUVitalSigns.prototype, "pupil_response_right", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "pupil_size_left_mm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "pupil_size_right_mm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "is_alarm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ICUVitalSigns.prototype, "alarm_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ICUVitalSigns.prototype, "alarm_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ICUVitalSigns.prototype, "documented_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ICUVitalSigns.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ICUVitalSigns.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ICUAdmission, admission => admission.vital_signs),
    (0, typeorm_1.JoinColumn)({ name: 'icu_admission_id' }),
    __metadata("design:type", ICUAdmission)
], ICUVitalSigns.prototype, "icu_admission", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'documented_by' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], ICUVitalSigns.prototype, "documenter", void 0);
exports.ICUVitalSigns = ICUVitalSigns = __decorate([
    (0, typeorm_1.Entity)('icu_vital_signs'),
    (0, typeorm_1.Index)(['icu_admission_id']),
    (0, typeorm_1.Index)(['measurement_time']),
    (0, typeorm_1.Index)(['vital_type']),
    (0, typeorm_1.Index)(['is_alarm'])
], ICUVitalSigns);
let ICUFluidBalance = class ICUFluidBalance {
};
exports.ICUFluidBalance = ICUFluidBalance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ICUFluidBalance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ICUFluidBalance.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ICUFluidBalance.prototype, "icu_admission_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ICUFluidBalance.prototype, "measurement_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUFluidBalance.prototype, "fluid_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUFluidBalance.prototype, "route", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ICUFluidBalance.prototype, "fluid_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], ICUFluidBalance.prototype, "volume_ml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ICUFluidBalance.prototype, "concentration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUFluidBalance.prototype, "rate_ml_hour", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ICUFluidBalance.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ICUFluidBalance.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ICUFluidBalance.prototype, "fluid_color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ICUFluidBalance.prototype, "fluid_characteristics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUFluidBalance.prototype, "specific_gravity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUFluidBalance.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ICUFluidBalance.prototype, "documented_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ICUFluidBalance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ICUFluidBalance.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ICUAdmission, admission => admission.fluid_balance),
    (0, typeorm_1.JoinColumn)({ name: 'icu_admission_id' }),
    __metadata("design:type", ICUAdmission)
], ICUFluidBalance.prototype, "icu_admission", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'documented_by' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], ICUFluidBalance.prototype, "documenter", void 0);
exports.ICUFluidBalance = ICUFluidBalance = __decorate([
    (0, typeorm_1.Entity)('icu_fluid_balance'),
    (0, typeorm_1.Index)(['icu_admission_id']),
    (0, typeorm_1.Index)(['measurement_time']),
    (0, typeorm_1.Index)(['fluid_type']),
    (0, typeorm_1.Index)(['route'])
], ICUFluidBalance);
let ICUVentilatorSettings = class ICUVentilatorSettings {
};
exports.ICUVentilatorSettings = ICUVentilatorSettings;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ICUVentilatorSettings.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "icu_admission_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ICUVentilatorSettings.prototype, "setting_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUVentilatorSettings.prototype, "ventilator_mode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "respiratory_rate_set", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "respiratory_rate_total", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "tidal_volume_ml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "minute_ventilation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "fio2_percent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "peep_cmh2o", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "peak_pressure_cmh2o", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "plateau_pressure_cmh2o", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "mean_pressure_cmh2o", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "compliance_ml_cmh2o", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "resistance_cmh2o_l_sec", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "auto_peep_cmh2o", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "inspiratory_time_sec", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "expiratory_time_sec", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "ie_ratio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ICUVentilatorSettings.prototype, "trigger_sensitivity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ICUVentilatorSettings.prototype, "alarm_settings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "weaning_trial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ICUVentilatorSettings.prototype, "weaning_mode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "weaning_duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ICUVentilatorSettings.prototype, "weaning_outcome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUVentilatorSettings.prototype, "weaning_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ICUVentilatorSettings.prototype, "set_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ICUVentilatorSettings.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ICUVentilatorSettings.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ICUAdmission, admission => admission.ventilator_settings),
    (0, typeorm_1.JoinColumn)({ name: 'icu_admission_id' }),
    __metadata("design:type", ICUAdmission)
], ICUVentilatorSettings.prototype, "icu_admission", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'set_by' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], ICUVentilatorSettings.prototype, "setter", void 0);
exports.ICUVentilatorSettings = ICUVentilatorSettings = __decorate([
    (0, typeorm_1.Entity)('icu_ventilator_settings'),
    (0, typeorm_1.Index)(['icu_admission_id']),
    (0, typeorm_1.Index)(['setting_time']),
    (0, typeorm_1.Index)(['ventilator_mode']),
    (0, typeorm_1.Index)(['weaning_trial'])
], ICUVentilatorSettings);
let ICUDailyGoals = class ICUDailyGoals {
};
exports.ICUDailyGoals = ICUDailyGoals;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ICUDailyGoals.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ICUDailyGoals.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ICUDailyGoals.prototype, "icu_admission_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ICUDailyGoals.prototype, "goal_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUDailyGoals.prototype, "goal_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUDailyGoals.prototype, "goal_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUDailyGoals.prototype, "goal_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUDailyGoals.prototype, "target_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUDailyGoals.prototype, "actual_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ICUDailyGoals.prototype, "measurement_unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUDailyGoals.prototype, "interventions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUDailyGoals.prototype, "barriers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUDailyGoals.prototype, "next_steps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ICUDailyGoals.prototype, "assigned_to", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ICUDailyGoals.prototype, "target_completion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ICUDailyGoals.prototype, "actual_completion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUDailyGoals.prototype, "outcome_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ICUDailyGoals.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ICUDailyGoals.prototype, "reviewed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ICUDailyGoals.prototype, "review_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ICUDailyGoals.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ICUDailyGoals.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ICUAdmission, admission => admission.daily_goals),
    (0, typeorm_1.JoinColumn)({ name: 'icu_admission_id' }),
    __metadata("design:type", ICUAdmission)
], ICUDailyGoals.prototype, "icu_admission", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assigned_to' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], ICUDailyGoals.prototype, "assignee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], ICUDailyGoals.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'reviewed_by' }),
    __metadata("design:type", typeof (_j = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _j : Object)
], ICUDailyGoals.prototype, "reviewer", void 0);
exports.ICUDailyGoals = ICUDailyGoals = __decorate([
    (0, typeorm_1.Entity)('icu_daily_goals'),
    (0, typeorm_1.Index)(['icu_admission_id']),
    (0, typeorm_1.Index)(['goal_date']),
    (0, typeorm_1.Index)(['goal_category']),
    (0, typeorm_1.Index)(['goal_status'])
], ICUDailyGoals);
let ICUSedationAssessment = class ICUSedationAssessment {
};
exports.ICUSedationAssessment = ICUSedationAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ICUSedationAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ICUSedationAssessment.prototype, "icu_admission_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ICUSedationAssessment.prototype, "assessment_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "sedation_scale", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUSedationAssessment.prototype, "rass_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUSedationAssessment.prototype, "ramsay_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "sedation_target", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "delirium_screen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "cam_icu_result", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUSedationAssessment.prototype, "icdsc_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "delirium_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "behavioral_observations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ICUSedationAssessment.prototype, "pain_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "pain_scale_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "current_sedatives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "current_analgesics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "interventions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUSedationAssessment.prototype, "recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ICUSedationAssessment.prototype, "assessed_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ICUSedationAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ICUSedationAssessment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ICUAdmission),
    (0, typeorm_1.JoinColumn)({ name: 'icu_admission_id' }),
    __metadata("design:type", ICUAdmission)
], ICUSedationAssessment.prototype, "icu_admission", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assessed_by' }),
    __metadata("design:type", typeof (_k = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _k : Object)
], ICUSedationAssessment.prototype, "assessor", void 0);
exports.ICUSedationAssessment = ICUSedationAssessment = __decorate([
    (0, typeorm_1.Entity)('icu_sedation_assessment'),
    (0, typeorm_1.Index)(['icu_admission_id']),
    (0, typeorm_1.Index)(['assessment_time']),
    (0, typeorm_1.Index)(['sedation_scale']),
    (0, typeorm_1.Index)(['delirium_screen'])
], ICUSedationAssessment);
let ICUQualityMetric = class ICUQualityMetric {
};
exports.ICUQualityMetric = ICUQualityMetric;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ICUQualityMetric.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ICUQualityMetric.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ICUQualityMetric.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ICUQualityMetric.prototype, "metric_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUQualityMetric.prototype, "icu_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ICUQualityMetric.prototype, "metric_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], ICUQualityMetric.prototype, "metric_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ICUQualityMetric.prototype, "metric_unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ICUQualityMetric.prototype, "numerator", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ICUQualityMetric.prototype, "denominator", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUQualityMetric.prototype, "benchmark_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ICUQualityMetric.prototype, "target_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUQualityMetric.prototype, "calculation_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUQualityMetric.prototype, "data_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUQualityMetric.prototype, "exclusions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ICUQualityMetric.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ICUQualityMetric.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ICUQualityMetric.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], ICUQualityMetric.prototype, "facility", void 0);
exports.ICUQualityMetric = ICUQualityMetric = __decorate([
    (0, typeorm_1.Entity)('icu_quality_metrics'),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['metric_date']),
    (0, typeorm_1.Index)(['icu_type']),
    (0, typeorm_1.Index)(['metric_name'])
], ICUQualityMetric);
//# sourceMappingURL=intensive-care-unit.entity.js.map