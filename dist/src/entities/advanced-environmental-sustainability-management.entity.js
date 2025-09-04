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
exports.EnvironmentalSustainabilityManagementMetrics = exports.CircularEconomyHealthcare = exports.ClimateResilienceAdaptation = exports.SustainabilityReportingFrameworks = exports.GreenHealthcareOperations = exports.EnvironmentalHealthManagementSystems = void 0;
const typeorm_1 = require("typeorm");
let EnvironmentalHealthManagementSystems = class EnvironmentalHealthManagementSystems {
};
exports.EnvironmentalHealthManagementSystems = EnvironmentalHealthManagementSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EnvironmentalHealthManagementSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EnvironmentalHealthManagementSystems.prototype, "environmental_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EnvironmentalHealthManagementSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalHealthManagementSystems.prototype, "environmental_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalHealthManagementSystems.prototype, "monitoring_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthManagementSystems.prototype, "environmental_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthManagementSystems.prototype, "health_risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthManagementSystems.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthManagementSystems.prototype, "prevention_mitigation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthManagementSystems.prototype, "community_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthManagementSystems.prototype, "health_outcome_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalHealthManagementSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalHealthManagementSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalHealthManagementSystems.prototype, "updated_at", void 0);
exports.EnvironmentalHealthManagementSystems = EnvironmentalHealthManagementSystems = __decorate([
    (0, typeorm_1.Entity)('environmental_health_management_systems')
], EnvironmentalHealthManagementSystems);
let GreenHealthcareOperations = class GreenHealthcareOperations {
};
exports.GreenHealthcareOperations = GreenHealthcareOperations;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GreenHealthcareOperations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GreenHealthcareOperations.prototype, "green_operation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], GreenHealthcareOperations.prototype, "operation_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GreenHealthcareOperations.prototype, "sustainability_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GreenHealthcareOperations.prototype, "implementation_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareOperations.prototype, "energy_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareOperations.prototype, "waste_reduction_programs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareOperations.prototype, "sustainable_procurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareOperations.prototype, "water_conservation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareOperations.prototype, "transportation_mobility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenHealthcareOperations.prototype, "green_building_initiatives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GreenHealthcareOperations.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GreenHealthcareOperations.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GreenHealthcareOperations.prototype, "updated_at", void 0);
exports.GreenHealthcareOperations = GreenHealthcareOperations = __decorate([
    (0, typeorm_1.Entity)('green_healthcare_operations')
], GreenHealthcareOperations);
let SustainabilityReportingFrameworks = class SustainabilityReportingFrameworks {
};
exports.SustainabilityReportingFrameworks = SustainabilityReportingFrameworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SustainabilityReportingFrameworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SustainabilityReportingFrameworks.prototype, "reporting_framework_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SustainabilityReportingFrameworks.prototype, "framework_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainabilityReportingFrameworks.prototype, "reporting_standard", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainabilityReportingFrameworks.prototype, "reporting_frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityReportingFrameworks.prototype, "environmental_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityReportingFrameworks.prototype, "social_responsibility_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityReportingFrameworks.prototype, "governance_transparency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityReportingFrameworks.prototype, "materiality_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityReportingFrameworks.prototype, "data_collection_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityReportingFrameworks.prototype, "stakeholder_communication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainabilityReportingFrameworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SustainabilityReportingFrameworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SustainabilityReportingFrameworks.prototype, "updated_at", void 0);
exports.SustainabilityReportingFrameworks = SustainabilityReportingFrameworks = __decorate([
    (0, typeorm_1.Entity)('sustainability_reporting_frameworks')
], SustainabilityReportingFrameworks);
let ClimateResilienceAdaptation = class ClimateResilienceAdaptation {
};
exports.ClimateResilienceAdaptation = ClimateResilienceAdaptation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClimateResilienceAdaptation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClimateResilienceAdaptation.prototype, "resilience_plan_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClimateResilienceAdaptation.prototype, "plan_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClimateResilienceAdaptation.prototype, "climate_risk_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClimateResilienceAdaptation.prototype, "adaptation_timeframe", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilienceAdaptation.prototype, "climate_risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilienceAdaptation.prototype, "health_system_vulnerabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilienceAdaptation.prototype, "adaptation_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilienceAdaptation.prototype, "resilience_building_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilienceAdaptation.prototype, "monitoring_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateResilienceAdaptation.prototype, "stakeholder_collaboration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClimateResilienceAdaptation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClimateResilienceAdaptation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClimateResilienceAdaptation.prototype, "updated_at", void 0);
exports.ClimateResilienceAdaptation = ClimateResilienceAdaptation = __decorate([
    (0, typeorm_1.Entity)('climate_resilience_adaptation')
], ClimateResilienceAdaptation);
let CircularEconomyHealthcare = class CircularEconomyHealthcare {
};
exports.CircularEconomyHealthcare = CircularEconomyHealthcare;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CircularEconomyHealthcare.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CircularEconomyHealthcare.prototype, "circular_initiative_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CircularEconomyHealthcare.prototype, "initiative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CircularEconomyHealthcare.prototype, "circular_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CircularEconomyHealthcare.prototype, "application_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyHealthcare.prototype, "material_flow_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyHealthcare.prototype, "circular_design_principles", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyHealthcare.prototype, "sharing_service_models", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyHealthcare.prototype, "recovery_regeneration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyHealthcare.prototype, "collaboration_networks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyHealthcare.prototype, "impact_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CircularEconomyHealthcare.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CircularEconomyHealthcare.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CircularEconomyHealthcare.prototype, "updated_at", void 0);
exports.CircularEconomyHealthcare = CircularEconomyHealthcare = __decorate([
    (0, typeorm_1.Entity)('circular_economy_healthcare')
], CircularEconomyHealthcare);
let EnvironmentalSustainabilityManagementMetrics = class EnvironmentalSustainabilityManagementMetrics {
};
exports.EnvironmentalSustainabilityManagementMetrics = EnvironmentalSustainabilityManagementMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EnvironmentalSustainabilityManagementMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EnvironmentalSustainabilityManagementMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalSustainabilityManagementMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalSustainabilityManagementMetrics.prototype, "environmental_health_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalSustainabilityManagementMetrics.prototype, "green_operations_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalSustainabilityManagementMetrics.prototype, "sustainability_reporting_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalSustainabilityManagementMetrics.prototype, "climate_resilience_preparedness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalSustainabilityManagementMetrics.prototype, "circular_economy_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalSustainabilityManagementMetrics.prototype, "environmental_investment_returns", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalSustainabilityManagementMetrics.prototype, "stakeholder_environmental_satisfaction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalSustainabilityManagementMetrics.prototype, "sustainable_healthcare_leadership", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalSustainabilityManagementMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalSustainabilityManagementMetrics.prototype, "updated_at", void 0);
exports.EnvironmentalSustainabilityManagementMetrics = EnvironmentalSustainabilityManagementMetrics = __decorate([
    (0, typeorm_1.Entity)('environmental_sustainability_management_metrics')
], EnvironmentalSustainabilityManagementMetrics);
//# sourceMappingURL=advanced-environmental-sustainability-management.entity.js.map