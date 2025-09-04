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
exports.VeterinaryOneHealthQualityMetrics = exports.WildlifeHealthMonitoring = exports.OneHealthIntegration = exports.ComparativeMedicineResearch = exports.ZoonoticDiseaseSurveillance = exports.VeterinaryPatientRecords = void 0;
const typeorm_1 = require("typeorm");
let VeterinaryPatientRecords = class VeterinaryPatientRecords {
};
exports.VeterinaryPatientRecords = VeterinaryPatientRecords;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], VeterinaryPatientRecords.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], VeterinaryPatientRecords.prototype, "animal_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], VeterinaryPatientRecords.prototype, "animal_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VeterinaryPatientRecords.prototype, "species", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VeterinaryPatientRecords.prototype, "breed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VeterinaryPatientRecords.prototype, "animal_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryPatientRecords.prototype, "demographic_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryPatientRecords.prototype, "owner_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryPatientRecords.prototype, "medical_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryPatientRecords.prototype, "current_health_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryPatientRecords.prototype, "treatment_plans", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryPatientRecords.prototype, "one_health_considerations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VeterinaryPatientRecords.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VeterinaryPatientRecords.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VeterinaryPatientRecords.prototype, "updated_at", void 0);
exports.VeterinaryPatientRecords = VeterinaryPatientRecords = __decorate([
    (0, typeorm_1.Entity)('veterinary_patient_records')
], VeterinaryPatientRecords);
let ZoonoticDiseaseSurveillance = class ZoonoticDiseaseSurveillance {
};
exports.ZoonoticDiseaseSurveillance = ZoonoticDiseaseSurveillance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ZoonoticDiseaseSurveillance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ZoonoticDiseaseSurveillance.prototype, "surveillance_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ZoonoticDiseaseSurveillance.prototype, "disease_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ZoonoticDiseaseSurveillance.prototype, "surveillance_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ZoonoticDiseaseSurveillance.prototype, "geographic_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ZoonoticDiseaseSurveillance.prototype, "pathogen_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ZoonoticDiseaseSurveillance.prototype, "animal_surveillance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ZoonoticDiseaseSurveillance.prototype, "human_surveillance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ZoonoticDiseaseSurveillance.prototype, "environmental_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ZoonoticDiseaseSurveillance.prototype, "risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ZoonoticDiseaseSurveillance.prototype, "intervention_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ZoonoticDiseaseSurveillance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ZoonoticDiseaseSurveillance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ZoonoticDiseaseSurveillance.prototype, "updated_at", void 0);
exports.ZoonoticDiseaseSurveillance = ZoonoticDiseaseSurveillance = __decorate([
    (0, typeorm_1.Entity)('zoonotic_disease_surveillance')
], ZoonoticDiseaseSurveillance);
let ComparativeMedicineResearch = class ComparativeMedicineResearch {
};
exports.ComparativeMedicineResearch = ComparativeMedicineResearch;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ComparativeMedicineResearch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ComparativeMedicineResearch.prototype, "research_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ComparativeMedicineResearch.prototype, "study_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ComparativeMedicineResearch.prototype, "research_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ComparativeMedicineResearch.prototype, "comparative_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeMedicineResearch.prototype, "species_comparison", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeMedicineResearch.prototype, "disease_models", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeMedicineResearch.prototype, "therapeutic_research", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeMedicineResearch.prototype, "diagnostic_research", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeMedicineResearch.prototype, "ethical_considerations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeMedicineResearch.prototype, "translational_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ComparativeMedicineResearch.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ComparativeMedicineResearch.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ComparativeMedicineResearch.prototype, "updated_at", void 0);
exports.ComparativeMedicineResearch = ComparativeMedicineResearch = __decorate([
    (0, typeorm_1.Entity)('comparative_medicine_research')
], ComparativeMedicineResearch);
let OneHealthIntegration = class OneHealthIntegration {
};
exports.OneHealthIntegration = OneHealthIntegration;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OneHealthIntegration.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], OneHealthIntegration.prototype, "integration_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], OneHealthIntegration.prototype, "initiative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], OneHealthIntegration.prototype, "integration_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], OneHealthIntegration.prototype, "health_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OneHealthIntegration.prototype, "stakeholder_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OneHealthIntegration.prototype, "collaborative_frameworks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OneHealthIntegration.prototype, "surveillance_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OneHealthIntegration.prototype, "research_collaboration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OneHealthIntegration.prototype, "policy_coordination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OneHealthIntegration.prototype, "capacity_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], OneHealthIntegration.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OneHealthIntegration.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OneHealthIntegration.prototype, "updated_at", void 0);
exports.OneHealthIntegration = OneHealthIntegration = __decorate([
    (0, typeorm_1.Entity)('one_health_integration')
], OneHealthIntegration);
let WildlifeHealthMonitoring = class WildlifeHealthMonitoring {
};
exports.WildlifeHealthMonitoring = WildlifeHealthMonitoring;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WildlifeHealthMonitoring.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], WildlifeHealthMonitoring.prototype, "monitoring_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], WildlifeHealthMonitoring.prototype, "species_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], WildlifeHealthMonitoring.prototype, "conservation_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], WildlifeHealthMonitoring.prototype, "habitat_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WildlifeHealthMonitoring.prototype, "population_health", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WildlifeHealthMonitoring.prototype, "disease_surveillance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WildlifeHealthMonitoring.prototype, "environmental_health", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WildlifeHealthMonitoring.prototype, "monitoring_methods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WildlifeHealthMonitoring.prototype, "conservation_medicine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WildlifeHealthMonitoring.prototype, "data_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], WildlifeHealthMonitoring.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WildlifeHealthMonitoring.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], WildlifeHealthMonitoring.prototype, "updated_at", void 0);
exports.WildlifeHealthMonitoring = WildlifeHealthMonitoring = __decorate([
    (0, typeorm_1.Entity)('wildlife_health_monitoring')
], WildlifeHealthMonitoring);
let VeterinaryOneHealthQualityMetrics = class VeterinaryOneHealthQualityMetrics {
};
exports.VeterinaryOneHealthQualityMetrics = VeterinaryOneHealthQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], VeterinaryOneHealthQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], VeterinaryOneHealthQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VeterinaryOneHealthQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryOneHealthQualityMetrics.prototype, "veterinary_care_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryOneHealthQualityMetrics.prototype, "zoonotic_disease_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryOneHealthQualityMetrics.prototype, "comparative_research_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryOneHealthQualityMetrics.prototype, "one_health_collaboration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryOneHealthQualityMetrics.prototype, "wildlife_conservation_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryOneHealthQualityMetrics.prototype, "antimicrobial_stewardship", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryOneHealthQualityMetrics.prototype, "food_safety_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VeterinaryOneHealthQualityMetrics.prototype, "environmental_health_protection", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VeterinaryOneHealthQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VeterinaryOneHealthQualityMetrics.prototype, "updated_at", void 0);
exports.VeterinaryOneHealthQualityMetrics = VeterinaryOneHealthQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('veterinary_one_health_quality_metrics')
], VeterinaryOneHealthQualityMetrics);
//# sourceMappingURL=advanced-veterinary-one-health.entity.js.map