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
exports.HealthcareInnovationFutureTechnologiesQualityMetrics = exports.FutureHealthcareScenarios = exports.HealthcareStartupEcosystem = exports.DigitalHealthInnovationPlatforms = exports.EmergingTechnologySurveillance = exports.HealthcareInnovationPipeline = void 0;
const typeorm_1 = require("typeorm");
let HealthcareInnovationPipeline = class HealthcareInnovationPipeline {
};
exports.HealthcareInnovationPipeline = HealthcareInnovationPipeline;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareInnovationPipeline.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareInnovationPipeline.prototype, "innovation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthcareInnovationPipeline.prototype, "innovation_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareInnovationPipeline.prototype, "innovation_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareInnovationPipeline.prototype, "development_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "innovation_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "technology_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "development_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "stakeholder_ecosystem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "commercialization_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "impact_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareInnovationPipeline.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareInnovationPipeline.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareInnovationPipeline.prototype, "updated_at", void 0);
exports.HealthcareInnovationPipeline = HealthcareInnovationPipeline = __decorate([
    (0, typeorm_1.Entity)('healthcare_innovation_pipeline')
], HealthcareInnovationPipeline);
let EmergingTechnologySurveillance = class EmergingTechnologySurveillance {
};
exports.EmergingTechnologySurveillance = EmergingTechnologySurveillance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EmergingTechnologySurveillance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EmergingTechnologySurveillance.prototype, "surveillance_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EmergingTechnologySurveillance.prototype, "technology_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EmergingTechnologySurveillance.prototype, "technology_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EmergingTechnologySurveillance.prototype, "maturity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingTechnologySurveillance.prototype, "technology_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingTechnologySurveillance.prototype, "trend_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingTechnologySurveillance.prototype, "healthcare_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingTechnologySurveillance.prototype, "impact_forecasting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingTechnologySurveillance.prototype, "strategic_implications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingTechnologySurveillance.prototype, "preparedness_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EmergingTechnologySurveillance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EmergingTechnologySurveillance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EmergingTechnologySurveillance.prototype, "updated_at", void 0);
exports.EmergingTechnologySurveillance = EmergingTechnologySurveillance = __decorate([
    (0, typeorm_1.Entity)('emerging_technology_surveillance')
], EmergingTechnologySurveillance);
let DigitalHealthInnovationPlatforms = class DigitalHealthInnovationPlatforms {
};
exports.DigitalHealthInnovationPlatforms = DigitalHealthInnovationPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DigitalHealthInnovationPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DigitalHealthInnovationPlatforms.prototype, "platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DigitalHealthInnovationPlatforms.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalHealthInnovationPlatforms.prototype, "platform_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalHealthInnovationPlatforms.prototype, "focus_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthInnovationPlatforms.prototype, "platform_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthInnovationPlatforms.prototype, "innovation_services", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthInnovationPlatforms.prototype, "collaboration_networks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthInnovationPlatforms.prototype, "validation_frameworks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthInnovationPlatforms.prototype, "scaling_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthInnovationPlatforms.prototype, "success_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalHealthInnovationPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DigitalHealthInnovationPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DigitalHealthInnovationPlatforms.prototype, "updated_at", void 0);
exports.DigitalHealthInnovationPlatforms = DigitalHealthInnovationPlatforms = __decorate([
    (0, typeorm_1.Entity)('digital_health_innovation_platforms')
], DigitalHealthInnovationPlatforms);
let HealthcareStartupEcosystem = class HealthcareStartupEcosystem {
};
exports.HealthcareStartupEcosystem = HealthcareStartupEcosystem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareStartupEcosystem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareStartupEcosystem.prototype, "ecosystem_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthcareStartupEcosystem.prototype, "startup_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareStartupEcosystem.prototype, "startup_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareStartupEcosystem.prototype, "business_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareStartupEcosystem.prototype, "company_profile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareStartupEcosystem.prototype, "funding_landscape", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareStartupEcosystem.prototype, "product_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareStartupEcosystem.prototype, "market_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareStartupEcosystem.prototype, "ecosystem_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareStartupEcosystem.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareStartupEcosystem.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareStartupEcosystem.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareStartupEcosystem.prototype, "updated_at", void 0);
exports.HealthcareStartupEcosystem = HealthcareStartupEcosystem = __decorate([
    (0, typeorm_1.Entity)('healthcare_startup_ecosystem')
], HealthcareStartupEcosystem);
let FutureHealthcareScenarios = class FutureHealthcareScenarios {
};
exports.FutureHealthcareScenarios = FutureHealthcareScenarios;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FutureHealthcareScenarios.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], FutureHealthcareScenarios.prototype, "scenario_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], FutureHealthcareScenarios.prototype, "scenario_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], FutureHealthcareScenarios.prototype, "time_horizon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], FutureHealthcareScenarios.prototype, "scenario_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareScenarios.prototype, "driving_forces", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareScenarios.prototype, "healthcare_transformation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareScenarios.prototype, "emerging_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareScenarios.prototype, "system_implications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareScenarios.prototype, "strategic_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareScenarios.prototype, "impact_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], FutureHealthcareScenarios.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FutureHealthcareScenarios.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FutureHealthcareScenarios.prototype, "updated_at", void 0);
exports.FutureHealthcareScenarios = FutureHealthcareScenarios = __decorate([
    (0, typeorm_1.Entity)('future_healthcare_scenarios')
], FutureHealthcareScenarios);
let HealthcareInnovationFutureTechnologiesQualityMetrics = class HealthcareInnovationFutureTechnologiesQualityMetrics {
};
exports.HealthcareInnovationFutureTechnologiesQualityMetrics = HealthcareInnovationFutureTechnologiesQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "innovation_pipeline_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "technology_surveillance_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "digital_platform_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "startup_ecosystem_vitality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "future_readiness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "healthcare_transformation_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "innovation_ecosystem_health", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "societal_value_creation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareInnovationFutureTechnologiesQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareInnovationFutureTechnologiesQualityMetrics = HealthcareInnovationFutureTechnologiesQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_innovation_future_technologies_quality_metrics')
], HealthcareInnovationFutureTechnologiesQualityMetrics);
//# sourceMappingURL=advanced-healthcare-innovation-future-technologies.entity.js.map