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
exports.HealthcareSustainabilityGreenHealthQualityMetrics = exports.SustainableHealthInnovation = exports.ClimateResilientHealthcareSystems = exports.GreenHealthcareSupplyChain = exports.SustainableHealthcareOperations = exports.HealthcareEnvironmentalImpactAssessment = void 0;
const typeorm_1 = require("typeorm");
let HealthcareEnvironmentalImpactAssessment = class HealthcareEnvironmentalImpactAssessment {
};
exports.HealthcareEnvironmentalImpactAssessment = HealthcareEnvironmentalImpactAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareEnvironmentalImpactAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareEnvironmentalImpactAssessment.prototype, "assessment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthcareEnvironmentalImpactAssessment.prototype, "facility_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareEnvironmentalImpactAssessment.prototype, "assessment_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareEnvironmentalImpactAssessment.prototype, "assessment_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalImpactAssessment.prototype, "carbon_footprint_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalImpactAssessment.prototype, "energy_consumption", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalImpactAssessment.prototype, "water_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalImpactAssessment.prototype, "waste_generation_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalImpactAssessment.prototype, "transportation_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalImpactAssessment.prototype, "chemical_pharmaceutical_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareEnvironmentalImpactAssessment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareEnvironmentalImpactAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareEnvironmentalImpactAssessment.prototype, "updated_at", void 0);
exports.HealthcareEnvironmentalImpactAssessment = HealthcareEnvironmentalImpactAssessment = __decorate([
    (0, typeorm_1.Entity)('healthcare_environmental_impact_assessment')
], HealthcareEnvironmentalImpactAssessment);
let SustainableHealthcareOperations = class SustainableHealthcareOperations {
};
exports.SustainableHealthcareOperations = SustainableHealthcareOperations;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SustainableHealthcareOperations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SustainableHealthcareOperations.prototype, "operation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SustainableHealthcareOperations.prototype, "initiative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainableHealthcareOperations.prototype, "sustainability_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainableHealthcareOperations.prototype, "implementation_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthcareOperations.prototype, "green_building_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthcareOperations.prototype, "renewable_energy_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthcareOperations.prototype, "circular_economy_practices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthcareOperations.prototype, "sustainable_procurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthcareOperations.prototype, "operational_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthcareOperations.prototype, "staff_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainableHealthcareOperations.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SustainableHealthcareOperations.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SustainableHealthcareOperations.prototype, "updated_at", void 0);
exports.SustainableHealthcareOperations = SustainableHealthcareOperations = __decorate([
    (0, typeorm_1.Entity)('sustainable_healthcare_operations')
], SustainableHealthcareOperations);
let GreenHealthcareSupplyChain = class GreenHealthcareSupplyChain {
};
exports.GreenHealthcareSupplyChain = GreenHealthcareSupplyChain;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GreenHealthcareSupplyChain.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GreenHealthcareSupplyChain.prototype, "supply_chain_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], GreenHealthcareSupplyChain.prototype, "supply_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GreenHealthcareSupplyChain.prototype, "sustainability_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GreenHealthcareSupplyChain.prototype, "supply_chain_tier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareSupplyChain.prototype, "supplier_sustainability_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareSupplyChain.prototype, "sustainable_product_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareSupplyChain.prototype, "logistics_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareSupplyChain.prototype, "procurement_practices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareSupplyChain.prototype, "transparency_traceability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareSupplyChain.prototype, "innovation_partnerships", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GreenHealthcareSupplyChain.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GreenHealthcareSupplyChain.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GreenHealthcareSupplyChain.prototype, "updated_at", void 0);
exports.GreenHealthcareSupplyChain = GreenHealthcareSupplyChain = __decorate([
    (0, typeorm_1.Entity)('green_healthcare_supply_chain')
], GreenHealthcareSupplyChain);
let ClimateResilientHealthcareSystems = class ClimateResilientHealthcareSystems {
};
exports.ClimateResilientHealthcareSystems = ClimateResilientHealthcareSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClimateResilientHealthcareSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClimateResilientHealthcareSystems.prototype, "resilience_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClimateResilientHealthcareSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClimateResilientHealthcareSystems.prototype, "climate_risk_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClimateResilientHealthcareSystems.prototype, "resilience_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilientHealthcareSystems.prototype, "vulnerability_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilientHealthcareSystems.prototype, "infrastructure_resilience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilientHealthcareSystems.prototype, "operational_preparedness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilientHealthcareSystems.prototype, "community_adaptation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilientHealthcareSystems.prototype, "adaptation_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilientHealthcareSystems.prototype, "monitoring_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClimateResilientHealthcareSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClimateResilientHealthcareSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClimateResilientHealthcareSystems.prototype, "updated_at", void 0);
exports.ClimateResilientHealthcareSystems = ClimateResilientHealthcareSystems = __decorate([
    (0, typeorm_1.Entity)('climate_resilient_healthcare_systems')
], ClimateResilientHealthcareSystems);
let SustainableHealthInnovation = class SustainableHealthInnovation {
};
exports.SustainableHealthInnovation = SustainableHealthInnovation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SustainableHealthInnovation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SustainableHealthInnovation.prototype, "innovation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SustainableHealthInnovation.prototype, "innovation_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainableHealthInnovation.prototype, "innovation_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainableHealthInnovation.prototype, "sustainability_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthInnovation.prototype, "sustainable_design_principles", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthInnovation.prototype, "innovation_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthInnovation.prototype, "environmental_benefits", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthInnovation.prototype, "social_economic_benefits", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthInnovation.prototype, "implementation_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainableHealthInnovation.prototype, "impact_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainableHealthInnovation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SustainableHealthInnovation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SustainableHealthInnovation.prototype, "updated_at", void 0);
exports.SustainableHealthInnovation = SustainableHealthInnovation = __decorate([
    (0, typeorm_1.Entity)('sustainable_health_innovation')
], SustainableHealthInnovation);
let HealthcareSustainabilityGreenHealthQualityMetrics = class HealthcareSustainabilityGreenHealthQualityMetrics {
};
exports.HealthcareSustainabilityGreenHealthQualityMetrics = HealthcareSustainabilityGreenHealthQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "environmental_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "operational_sustainability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "supply_chain_sustainability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "climate_resilience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "sustainable_innovation_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "cost_benefit_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "stakeholder_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "systemic_transformation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareSustainabilityGreenHealthQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareSustainabilityGreenHealthQualityMetrics = HealthcareSustainabilityGreenHealthQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_sustainability_green_health_quality_metrics')
], HealthcareSustainabilityGreenHealthQualityMetrics);
//# sourceMappingURL=advanced-healthcare-sustainability-green-health.entity.js.map