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
exports.HealthcareAiQualityMetrics = exports.IntelligentAutomationSystems = exports.AiClinicalDecisionSupport = exports.PopulationHealthAnalytics = exports.ClinicalPredictionModels = exports.PredictiveAnalyticsFramework = void 0;
const typeorm_1 = require("typeorm");
let PredictiveAnalyticsFramework = class PredictiveAnalyticsFramework {
};
exports.PredictiveAnalyticsFramework = PredictiveAnalyticsFramework;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PredictiveAnalyticsFramework.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PredictiveAnalyticsFramework.prototype, "framework_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PredictiveAnalyticsFramework.prototype, "framework_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PredictiveAnalyticsFramework.prototype, "analytics_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PredictiveAnalyticsFramework.prototype, "application_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsFramework.prototype, "machine_learning_models", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsFramework.prototype, "data_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsFramework.prototype, "model_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsFramework.prototype, "deployment_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsFramework.prototype, "clinical_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsFramework.prototype, "governance_ethics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PredictiveAnalyticsFramework.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PredictiveAnalyticsFramework.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PredictiveAnalyticsFramework.prototype, "updated_at", void 0);
exports.PredictiveAnalyticsFramework = PredictiveAnalyticsFramework = __decorate([
    (0, typeorm_1.Entity)('predictive_analytics_framework')
], PredictiveAnalyticsFramework);
let ClinicalPredictionModels = class ClinicalPredictionModels {
};
exports.ClinicalPredictionModels = ClinicalPredictionModels;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClinicalPredictionModels.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClinicalPredictionModels.prototype, "model_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClinicalPredictionModels.prototype, "model_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalPredictionModels.prototype, "prediction_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalPredictionModels.prototype, "clinical_specialty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalPredictionModels.prototype, "model_specifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalPredictionModels.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalPredictionModels.prototype, "clinical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalPredictionModels.prototype, "implementation_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalPredictionModels.prototype, "model_maintenance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalPredictionModels.prototype, "regulatory_approval", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalPredictionModels.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalPredictionModels.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalPredictionModels.prototype, "updated_at", void 0);
exports.ClinicalPredictionModels = ClinicalPredictionModels = __decorate([
    (0, typeorm_1.Entity)('clinical_prediction_models')
], ClinicalPredictionModels);
let PopulationHealthAnalytics = class PopulationHealthAnalytics {
};
exports.PopulationHealthAnalytics = PopulationHealthAnalytics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PopulationHealthAnalytics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PopulationHealthAnalytics.prototype, "analytics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PopulationHealthAnalytics.prototype, "population_cohort", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PopulationHealthAnalytics.prototype, "analysis_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PopulationHealthAnalytics.prototype, "time_horizon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PopulationHealthAnalytics.prototype, "population_characteristics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PopulationHealthAnalytics.prototype, "health_outcomes_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PopulationHealthAnalytics.prototype, "risk_stratification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PopulationHealthAnalytics.prototype, "intervention_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PopulationHealthAnalytics.prototype, "trend_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PopulationHealthAnalytics.prototype, "actionable_insights", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PopulationHealthAnalytics.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PopulationHealthAnalytics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PopulationHealthAnalytics.prototype, "updated_at", void 0);
exports.PopulationHealthAnalytics = PopulationHealthAnalytics = __decorate([
    (0, typeorm_1.Entity)('population_health_analytics')
], PopulationHealthAnalytics);
let AiClinicalDecisionSupport = class AiClinicalDecisionSupport {
};
exports.AiClinicalDecisionSupport = AiClinicalDecisionSupport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AiClinicalDecisionSupport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AiClinicalDecisionSupport.prototype, "cds_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AiClinicalDecisionSupport.prototype, "cds_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AiClinicalDecisionSupport.prototype, "decision_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AiClinicalDecisionSupport.prototype, "intervention_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiClinicalDecisionSupport.prototype, "ai_algorithms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiClinicalDecisionSupport.prototype, "clinical_logic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiClinicalDecisionSupport.prototype, "decision_support_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiClinicalDecisionSupport.prototype, "user_interaction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiClinicalDecisionSupport.prototype, "performance_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiClinicalDecisionSupport.prototype, "continuous_learning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AiClinicalDecisionSupport.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AiClinicalDecisionSupport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AiClinicalDecisionSupport.prototype, "updated_at", void 0);
exports.AiClinicalDecisionSupport = AiClinicalDecisionSupport = __decorate([
    (0, typeorm_1.Entity)('ai_clinical_decision_support')
], AiClinicalDecisionSupport);
let IntelligentAutomationSystems = class IntelligentAutomationSystems {
};
exports.IntelligentAutomationSystems = IntelligentAutomationSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IntelligentAutomationSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], IntelligentAutomationSystems.prototype, "automation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], IntelligentAutomationSystems.prototype, "automation_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntelligentAutomationSystems.prototype, "automation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntelligentAutomationSystems.prototype, "process_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentAutomationSystems.prototype, "automation_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentAutomationSystems.prototype, "ai_technologies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentAutomationSystems.prototype, "process_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentAutomationSystems.prototype, "integration_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentAutomationSystems.prototype, "governance_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentAutomationSystems.prototype, "performance_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntelligentAutomationSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IntelligentAutomationSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], IntelligentAutomationSystems.prototype, "updated_at", void 0);
exports.IntelligentAutomationSystems = IntelligentAutomationSystems = __decorate([
    (0, typeorm_1.Entity)('intelligent_automation_systems')
], IntelligentAutomationSystems);
let HealthcareAiQualityMetrics = class HealthcareAiQualityMetrics {
};
exports.HealthcareAiQualityMetrics = HealthcareAiQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareAiQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareAiQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareAiQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAiQualityMetrics.prototype, "model_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAiQualityMetrics.prototype, "clinical_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAiQualityMetrics.prototype, "operational_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAiQualityMetrics.prototype, "quality_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAiQualityMetrics.prototype, "user_adoption", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAiQualityMetrics.prototype, "innovation_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAiQualityMetrics.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAiQualityMetrics.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareAiQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareAiQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareAiQualityMetrics = HealthcareAiQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_ai_quality_metrics')
], HealthcareAiQualityMetrics);
//# sourceMappingURL=advanced-predictive-analytics-ai.entity.js.map