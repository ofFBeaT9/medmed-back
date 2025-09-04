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
exports.HealthcareEnvironmentalQualityMetrics = exports.CircularEconomyInitiatives = exports.EnvironmentalCompliance = exports.GreenBuildingManagement = exports.SustainabilityTracking = exports.EnvironmentalManagementSystem = void 0;
const typeorm_1 = require("typeorm");
let EnvironmentalManagementSystem = class EnvironmentalManagementSystem {
};
exports.EnvironmentalManagementSystem = EnvironmentalManagementSystem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EnvironmentalManagementSystem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EnvironmentalManagementSystem.prototype, "environmental_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EnvironmentalManagementSystem.prototype, "environmental_program", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalManagementSystem.prototype, "program_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalManagementSystem.prototype, "scope_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalManagementSystem.prototype, "environmental_policies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalManagementSystem.prototype, "carbon_footprint_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalManagementSystem.prototype, "energy_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalManagementSystem.prototype, "waste_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalManagementSystem.prototype, "water_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalManagementSystem.prototype, "sustainable_procurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalManagementSystem.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalManagementSystem.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalManagementSystem.prototype, "updated_at", void 0);
exports.EnvironmentalManagementSystem = EnvironmentalManagementSystem = __decorate([
    (0, typeorm_1.Entity)('environmental_management_system')
], EnvironmentalManagementSystem);
let SustainabilityTracking = class SustainabilityTracking {
};
exports.SustainabilityTracking = SustainabilityTracking;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SustainabilityTracking.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SustainabilityTracking.prototype, "tracking_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SustainabilityTracking.prototype, "sustainability_initiative", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainabilityTracking.prototype, "initiative_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainabilityTracking.prototype, "measurement_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityTracking.prototype, "baseline_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityTracking.prototype, "current_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityTracking.prototype, "sustainability_goals", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityTracking.prototype, "impact_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityTracking.prototype, "reporting_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SustainabilityTracking.prototype, "stakeholder_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SustainabilityTracking.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SustainabilityTracking.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SustainabilityTracking.prototype, "updated_at", void 0);
exports.SustainabilityTracking = SustainabilityTracking = __decorate([
    (0, typeorm_1.Entity)('sustainability_tracking')
], SustainabilityTracking);
let GreenBuildingManagement = class GreenBuildingManagement {
};
exports.GreenBuildingManagement = GreenBuildingManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GreenBuildingManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GreenBuildingManagement.prototype, "building_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], GreenBuildingManagement.prototype, "building_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GreenBuildingManagement.prototype, "building_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GreenBuildingManagement.prototype, "certification_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenBuildingManagement.prototype, "green_building_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenBuildingManagement.prototype, "performance_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenBuildingManagement.prototype, "building_automation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenBuildingManagement.prototype, "sustainable_operations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenBuildingManagement.prototype, "health_wellness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GreenBuildingManagement.prototype, "cost_benefit_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GreenBuildingManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GreenBuildingManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GreenBuildingManagement.prototype, "updated_at", void 0);
exports.GreenBuildingManagement = GreenBuildingManagement = __decorate([
    (0, typeorm_1.Entity)('green_building_management')
], GreenBuildingManagement);
let EnvironmentalCompliance = class EnvironmentalCompliance {
};
exports.EnvironmentalCompliance = EnvironmentalCompliance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EnvironmentalCompliance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EnvironmentalCompliance.prototype, "compliance_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EnvironmentalCompliance.prototype, "regulation_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalCompliance.prototype, "regulation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalCompliance.prototype, "compliance_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalCompliance.prototype, "regulatory_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalCompliance.prototype, "compliance_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalCompliance.prototype, "monitoring_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalCompliance.prototype, "risk_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalCompliance.prototype, "training_awareness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalCompliance.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalCompliance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalCompliance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalCompliance.prototype, "updated_at", void 0);
exports.EnvironmentalCompliance = EnvironmentalCompliance = __decorate([
    (0, typeorm_1.Entity)('environmental_compliance')
], EnvironmentalCompliance);
let CircularEconomyInitiatives = class CircularEconomyInitiatives {
};
exports.CircularEconomyInitiatives = CircularEconomyInitiatives;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CircularEconomyInitiatives.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CircularEconomyInitiatives.prototype, "initiative_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CircularEconomyInitiatives.prototype, "initiative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CircularEconomyInitiatives.prototype, "initiative_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CircularEconomyInitiatives.prototype, "focus_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyInitiatives.prototype, "circular_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyInitiatives.prototype, "value_recovery", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyInitiatives.prototype, "partnership_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyInitiatives.prototype, "innovation_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyInitiatives.prototype, "impact_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CircularEconomyInitiatives.prototype, "scalability_replication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CircularEconomyInitiatives.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CircularEconomyInitiatives.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CircularEconomyInitiatives.prototype, "updated_at", void 0);
exports.CircularEconomyInitiatives = CircularEconomyInitiatives = __decorate([
    (0, typeorm_1.Entity)('circular_economy_initiatives')
], CircularEconomyInitiatives);
let HealthcareEnvironmentalQualityMetrics = class HealthcareEnvironmentalQualityMetrics {
};
exports.HealthcareEnvironmentalQualityMetrics = HealthcareEnvironmentalQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareEnvironmentalQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareEnvironmentalQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareEnvironmentalQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalQualityMetrics.prototype, "environmental_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalQualityMetrics.prototype, "sustainability_achievements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalQualityMetrics.prototype, "compliance_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalQualityMetrics.prototype, "cost_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalQualityMetrics.prototype, "health_wellness_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalQualityMetrics.prototype, "innovation_leadership", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalQualityMetrics.prototype, "stakeholder_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEnvironmentalQualityMetrics.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareEnvironmentalQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareEnvironmentalQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareEnvironmentalQualityMetrics = HealthcareEnvironmentalQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_environmental_quality_metrics')
], HealthcareEnvironmentalQualityMetrics);
//# sourceMappingURL=advanced-environmental-sustainability.entity.js.map