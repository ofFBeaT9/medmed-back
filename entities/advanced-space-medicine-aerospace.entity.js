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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceMedicineQualityMetrics = exports.SpaceRadiationProtection = exports.AerospaceMedicalCertification = exports.MicrogravityResearch = exports.SpaceMissionMedicalSupport = exports.AstronautHealthMonitoring = void 0;
const typeorm_1 = require("typeorm");
// =====================================
// ADVANCED HEALTHCARE SPACE MEDICINE & AEROSPACE HEALTH PLATFORM
// Comprehensive space medicine management with astronaut health monitoring,
// microgravity effects research, space mission medical support,
// radiation protection, aerospace medical certification,
// and extraterrestrial healthcare systems
// =====================================
let AstronautHealthMonitoring = class AstronautHealthMonitoring {
};
exports.AstronautHealthMonitoring = AstronautHealthMonitoring;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AstronautHealthMonitoring.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AstronautHealthMonitoring.prototype, "monitoring_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AstronautHealthMonitoring.prototype, "astronaut_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AstronautHealthMonitoring.prototype, "mission_phase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AstronautHealthMonitoring.prototype, "monitoring_environment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AstronautHealthMonitoring.prototype, "physiological_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AstronautHealthMonitoring.prototype, "microgravity_effects", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AstronautHealthMonitoring.prototype, "radiation_exposure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AstronautHealthMonitoring.prototype, "psychological_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AstronautHealthMonitoring.prototype, "countermeasure_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AstronautHealthMonitoring.prototype, "telemedicine_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AstronautHealthMonitoring.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AstronautHealthMonitoring.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AstronautHealthMonitoring.prototype, "updated_at", void 0);
exports.AstronautHealthMonitoring = AstronautHealthMonitoring = __decorate([
    (0, typeorm_1.Entity)('astronaut_health_monitoring')
], AstronautHealthMonitoring);
let SpaceMissionMedicalSupport = class SpaceMissionMedicalSupport {
};
exports.SpaceMissionMedicalSupport = SpaceMissionMedicalSupport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SpaceMissionMedicalSupport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SpaceMissionMedicalSupport.prototype, "mission_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SpaceMissionMedicalSupport.prototype, "mission_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SpaceMissionMedicalSupport.prototype, "mission_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SpaceMissionMedicalSupport.prototype, "mission_duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMissionMedicalSupport.prototype, "medical_equipment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMissionMedicalSupport.prototype, "crew_medical_training", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMissionMedicalSupport.prototype, "medical_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMissionMedicalSupport.prototype, "life_support_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMissionMedicalSupport.prototype, "ground_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMissionMedicalSupport.prototype, "research_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SpaceMissionMedicalSupport.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SpaceMissionMedicalSupport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SpaceMissionMedicalSupport.prototype, "updated_at", void 0);
exports.SpaceMissionMedicalSupport = SpaceMissionMedicalSupport = __decorate([
    (0, typeorm_1.Entity)('space_mission_medical_support')
], SpaceMissionMedicalSupport);
let MicrogravityResearch = class MicrogravityResearch {
};
exports.MicrogravityResearch = MicrogravityResearch;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MicrogravityResearch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MicrogravityResearch.prototype, "research_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MicrogravityResearch.prototype, "study_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MicrogravityResearch.prototype, "research_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MicrogravityResearch.prototype, "research_platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrogravityResearch.prototype, "biological_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrogravityResearch.prototype, "physiological_studies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrogravityResearch.prototype, "pharmaceutical_research", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrogravityResearch.prototype, "biotechnology_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrogravityResearch.prototype, "countermeasure_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrogravityResearch.prototype, "translational_medicine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MicrogravityResearch.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MicrogravityResearch.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MicrogravityResearch.prototype, "updated_at", void 0);
exports.MicrogravityResearch = MicrogravityResearch = __decorate([
    (0, typeorm_1.Entity)('microgravity_research')
], MicrogravityResearch);
let AerospaceMedicalCertification = class AerospaceMedicalCertification {
};
exports.AerospaceMedicalCertification = AerospaceMedicalCertification;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AerospaceMedicalCertification.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AerospaceMedicalCertification.prototype, "certification_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AerospaceMedicalCertification.prototype, "individual_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AerospaceMedicalCertification.prototype, "certification_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AerospaceMedicalCertification.prototype, "certification_class", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AerospaceMedicalCertification.prototype, "medical_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AerospaceMedicalCertification.prototype, "fitness_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AerospaceMedicalCertification.prototype, "medical_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AerospaceMedicalCertification.prototype, "ongoing_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AerospaceMedicalCertification.prototype, "disqualifying_conditions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AerospaceMedicalCertification.prototype, "certification_validity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AerospaceMedicalCertification.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AerospaceMedicalCertification.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AerospaceMedicalCertification.prototype, "updated_at", void 0);
exports.AerospaceMedicalCertification = AerospaceMedicalCertification = __decorate([
    (0, typeorm_1.Entity)('aerospace_medical_certification')
], AerospaceMedicalCertification);
let SpaceRadiationProtection = class SpaceRadiationProtection {
};
exports.SpaceRadiationProtection = SpaceRadiationProtection;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SpaceRadiationProtection.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SpaceRadiationProtection.prototype, "protection_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SpaceRadiationProtection.prototype, "mission_context", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SpaceRadiationProtection.prototype, "radiation_environment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SpaceRadiationProtection.prototype, "protection_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceRadiationProtection.prototype, "radiation_sources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceRadiationProtection.prototype, "dosimetry_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceRadiationProtection.prototype, "shielding_technologies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceRadiationProtection.prototype, "biological_effects", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceRadiationProtection.prototype, "countermeasures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceRadiationProtection.prototype, "risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SpaceRadiationProtection.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SpaceRadiationProtection.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SpaceRadiationProtection.prototype, "updated_at", void 0);
exports.SpaceRadiationProtection = SpaceRadiationProtection = __decorate([
    (0, typeorm_1.Entity)('space_radiation_protection')
], SpaceRadiationProtection);
let SpaceMedicineQualityMetrics = class SpaceMedicineQualityMetrics {
};
exports.SpaceMedicineQualityMetrics = SpaceMedicineQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SpaceMedicineQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SpaceMedicineQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SpaceMedicineQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMedicineQualityMetrics.prototype, "crew_health_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMedicineQualityMetrics.prototype, "medical_system_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMedicineQualityMetrics.prototype, "research_productivity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMedicineQualityMetrics.prototype, "radiation_protection_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMedicineQualityMetrics.prototype, "operational_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMedicineQualityMetrics.prototype, "technology_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMedicineQualityMetrics.prototype, "knowledge_translation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SpaceMedicineQualityMetrics.prototype, "mission_success_contribution", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SpaceMedicineQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SpaceMedicineQualityMetrics.prototype, "updated_at", void 0);
exports.SpaceMedicineQualityMetrics = SpaceMedicineQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('space_medicine_quality_metrics')
], SpaceMedicineQualityMetrics);
