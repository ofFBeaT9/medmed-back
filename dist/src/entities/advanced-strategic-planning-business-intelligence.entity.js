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
exports.StrategicPlanningBusinessIntelligenceMetrics = exports.StrategicDecisionSupportSystems = exports.PerformanceAnalyticsDashboards = exports.MarketCompetitiveIntelligence = exports.HealthcareBusinessIntelligenceSystems = exports.StrategicPlanningFrameworks = void 0;
const typeorm_1 = require("typeorm");
let StrategicPlanningFrameworks = class StrategicPlanningFrameworks {
};
exports.StrategicPlanningFrameworks = StrategicPlanningFrameworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StrategicPlanningFrameworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], StrategicPlanningFrameworks.prototype, "strategic_plan_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], StrategicPlanningFrameworks.prototype, "plan_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StrategicPlanningFrameworks.prototype, "planning_horizon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StrategicPlanningFrameworks.prototype, "planning_methodology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningFrameworks.prototype, "strategic_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningFrameworks.prototype, "vision_mission_values", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningFrameworks.prototype, "strategic_priorities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningFrameworks.prototype, "strategic_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningFrameworks.prototype, "implementation_roadmap", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningFrameworks.prototype, "performance_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StrategicPlanningFrameworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StrategicPlanningFrameworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], StrategicPlanningFrameworks.prototype, "updated_at", void 0);
exports.StrategicPlanningFrameworks = StrategicPlanningFrameworks = __decorate([
    (0, typeorm_1.Entity)('strategic_planning_frameworks')
], StrategicPlanningFrameworks);
let HealthcareBusinessIntelligenceSystems = class HealthcareBusinessIntelligenceSystems {
};
exports.HealthcareBusinessIntelligenceSystems = HealthcareBusinessIntelligenceSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareBusinessIntelligenceSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareBusinessIntelligenceSystems.prototype, "bi_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthcareBusinessIntelligenceSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareBusinessIntelligenceSystems.prototype, "intelligence_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareBusinessIntelligenceSystems.prototype, "analytics_maturity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBusinessIntelligenceSystems.prototype, "data_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBusinessIntelligenceSystems.prototype, "analytics_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBusinessIntelligenceSystems.prototype, "reporting_visualization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBusinessIntelligenceSystems.prototype, "self_service_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBusinessIntelligenceSystems.prototype, "real_time_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBusinessIntelligenceSystems.prototype, "decision_support_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareBusinessIntelligenceSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareBusinessIntelligenceSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareBusinessIntelligenceSystems.prototype, "updated_at", void 0);
exports.HealthcareBusinessIntelligenceSystems = HealthcareBusinessIntelligenceSystems = __decorate([
    (0, typeorm_1.Entity)('healthcare_business_intelligence_systems')
], HealthcareBusinessIntelligenceSystems);
let MarketCompetitiveIntelligence = class MarketCompetitiveIntelligence {
};
exports.MarketCompetitiveIntelligence = MarketCompetitiveIntelligence;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MarketCompetitiveIntelligence.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MarketCompetitiveIntelligence.prototype, "intelligence_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MarketCompetitiveIntelligence.prototype, "analysis_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MarketCompetitiveIntelligence.prototype, "intelligence_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MarketCompetitiveIntelligence.prototype, "geographic_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MarketCompetitiveIntelligence.prototype, "market_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MarketCompetitiveIntelligence.prototype, "competitive_landscape", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MarketCompetitiveIntelligence.prototype, "customer_intelligence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MarketCompetitiveIntelligence.prototype, "technology_innovation_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MarketCompetitiveIntelligence.prototype, "regulatory_policy_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MarketCompetitiveIntelligence.prototype, "strategic_implications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MarketCompetitiveIntelligence.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MarketCompetitiveIntelligence.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MarketCompetitiveIntelligence.prototype, "updated_at", void 0);
exports.MarketCompetitiveIntelligence = MarketCompetitiveIntelligence = __decorate([
    (0, typeorm_1.Entity)('market_competitive_intelligence')
], MarketCompetitiveIntelligence);
let PerformanceAnalyticsDashboards = class PerformanceAnalyticsDashboards {
};
exports.PerformanceAnalyticsDashboards = PerformanceAnalyticsDashboards;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PerformanceAnalyticsDashboards.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PerformanceAnalyticsDashboards.prototype, "dashboard_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PerformanceAnalyticsDashboards.prototype, "dashboard_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PerformanceAnalyticsDashboards.prototype, "dashboard_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PerformanceAnalyticsDashboards.prototype, "user_audience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PerformanceAnalyticsDashboards.prototype, "key_performance_indicators", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PerformanceAnalyticsDashboards.prototype, "visualization_components", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PerformanceAnalyticsDashboards.prototype, "interactive_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PerformanceAnalyticsDashboards.prototype, "real_time_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PerformanceAnalyticsDashboards.prototype, "personalization_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PerformanceAnalyticsDashboards.prototype, "collaboration_sharing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PerformanceAnalyticsDashboards.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PerformanceAnalyticsDashboards.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PerformanceAnalyticsDashboards.prototype, "updated_at", void 0);
exports.PerformanceAnalyticsDashboards = PerformanceAnalyticsDashboards = __decorate([
    (0, typeorm_1.Entity)('performance_analytics_dashboards')
], PerformanceAnalyticsDashboards);
let StrategicDecisionSupportSystems = class StrategicDecisionSupportSystems {
};
exports.StrategicDecisionSupportSystems = StrategicDecisionSupportSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StrategicDecisionSupportSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], StrategicDecisionSupportSystems.prototype, "decision_support_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], StrategicDecisionSupportSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StrategicDecisionSupportSystems.prototype, "decision_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StrategicDecisionSupportSystems.prototype, "decision_complexity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicDecisionSupportSystems.prototype, "decision_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicDecisionSupportSystems.prototype, "analytical_tools", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicDecisionSupportSystems.prototype, "data_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicDecisionSupportSystems.prototype, "collaborative_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicDecisionSupportSystems.prototype, "implementation_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicDecisionSupportSystems.prototype, "learning_adaptation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StrategicDecisionSupportSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StrategicDecisionSupportSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], StrategicDecisionSupportSystems.prototype, "updated_at", void 0);
exports.StrategicDecisionSupportSystems = StrategicDecisionSupportSystems = __decorate([
    (0, typeorm_1.Entity)('strategic_decision_support_systems')
], StrategicDecisionSupportSystems);
let StrategicPlanningBusinessIntelligenceMetrics = class StrategicPlanningBusinessIntelligenceMetrics {
};
exports.StrategicPlanningBusinessIntelligenceMetrics = StrategicPlanningBusinessIntelligenceMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "strategic_planning_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "business_intelligence_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "market_intelligence_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "performance_analytics_adoption", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "decision_support_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "organizational_intelligence_maturity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "strategic_value_creation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "intelligence_investment_returns", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], StrategicPlanningBusinessIntelligenceMetrics.prototype, "updated_at", void 0);
exports.StrategicPlanningBusinessIntelligenceMetrics = StrategicPlanningBusinessIntelligenceMetrics = __decorate([
    (0, typeorm_1.Entity)('strategic_planning_business_intelligence_metrics')
], StrategicPlanningBusinessIntelligenceMetrics);
//# sourceMappingURL=advanced-strategic-planning-business-intelligence.entity.js.map