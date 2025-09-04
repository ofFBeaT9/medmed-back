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
exports.HealthTechnologyAssessmentEconomicsQualityMetrics = exports.HealthEconomicsResearch = exports.ReimbursementDecisionSupport = exports.ValueBasedHealthcareFrameworks = exports.EconomicEvaluationModels = exports.HealthTechnologyAssessment = void 0;
const typeorm_1 = require("typeorm");
let HealthTechnologyAssessment = class HealthTechnologyAssessment {
};
exports.HealthTechnologyAssessment = HealthTechnologyAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthTechnologyAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthTechnologyAssessment.prototype, "assessment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthTechnologyAssessment.prototype, "technology_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthTechnologyAssessment.prototype, "technology_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthTechnologyAssessment.prototype, "assessment_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessment.prototype, "technology_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessment.prototype, "clinical_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessment.prototype, "economic_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessment.prototype, "cost_effectiveness_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessment.prototype, "budget_impact_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessment.prototype, "broader_impacts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessment.prototype, "implementation_considerations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthTechnologyAssessment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthTechnologyAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthTechnologyAssessment.prototype, "updated_at", void 0);
exports.HealthTechnologyAssessment = HealthTechnologyAssessment = __decorate([
    (0, typeorm_1.Entity)('health_technology_assessment')
], HealthTechnologyAssessment);
let EconomicEvaluationModels = class EconomicEvaluationModels {
};
exports.EconomicEvaluationModels = EconomicEvaluationModels;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EconomicEvaluationModels.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EconomicEvaluationModels.prototype, "model_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EconomicEvaluationModels.prototype, "model_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EconomicEvaluationModels.prototype, "model_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EconomicEvaluationModels.prototype, "evaluation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EconomicEvaluationModels.prototype, "model_structure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EconomicEvaluationModels.prototype, "cost_inputs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EconomicEvaluationModels.prototype, "effectiveness_inputs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EconomicEvaluationModels.prototype, "model_parameters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EconomicEvaluationModels.prototype, "uncertainty_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EconomicEvaluationModels.prototype, "model_outputs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EconomicEvaluationModels.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EconomicEvaluationModels.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EconomicEvaluationModels.prototype, "updated_at", void 0);
exports.EconomicEvaluationModels = EconomicEvaluationModels = __decorate([
    (0, typeorm_1.Entity)('economic_evaluation_models')
], EconomicEvaluationModels);
let ValueBasedHealthcareFrameworks = class ValueBasedHealthcareFrameworks {
};
exports.ValueBasedHealthcareFrameworks = ValueBasedHealthcareFrameworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ValueBasedHealthcareFrameworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ValueBasedHealthcareFrameworks.prototype, "framework_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ValueBasedHealthcareFrameworks.prototype, "framework_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ValueBasedHealthcareFrameworks.prototype, "value_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ValueBasedHealthcareFrameworks.prototype, "application_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ValueBasedHealthcareFrameworks.prototype, "value_elements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ValueBasedHealthcareFrameworks.prototype, "outcome_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ValueBasedHealthcareFrameworks.prototype, "cost_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ValueBasedHealthcareFrameworks.prototype, "value_calculation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ValueBasedHealthcareFrameworks.prototype, "implementation_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ValueBasedHealthcareFrameworks.prototype, "decision_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ValueBasedHealthcareFrameworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ValueBasedHealthcareFrameworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ValueBasedHealthcareFrameworks.prototype, "updated_at", void 0);
exports.ValueBasedHealthcareFrameworks = ValueBasedHealthcareFrameworks = __decorate([
    (0, typeorm_1.Entity)('value_based_healthcare_frameworks')
], ValueBasedHealthcareFrameworks);
let ReimbursementDecisionSupport = class ReimbursementDecisionSupport {
};
exports.ReimbursementDecisionSupport = ReimbursementDecisionSupport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ReimbursementDecisionSupport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ReimbursementDecisionSupport.prototype, "decision_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ReimbursementDecisionSupport.prototype, "technology_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ReimbursementDecisionSupport.prototype, "decision_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ReimbursementDecisionSupport.prototype, "payer_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ReimbursementDecisionSupport.prototype, "decision_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ReimbursementDecisionSupport.prototype, "evidence_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ReimbursementDecisionSupport.prototype, "stakeholder_input", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ReimbursementDecisionSupport.prototype, "decision_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ReimbursementDecisionSupport.prototype, "decision_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ReimbursementDecisionSupport.prototype, "implementation_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ReimbursementDecisionSupport.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ReimbursementDecisionSupport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ReimbursementDecisionSupport.prototype, "updated_at", void 0);
exports.ReimbursementDecisionSupport = ReimbursementDecisionSupport = __decorate([
    (0, typeorm_1.Entity)('reimbursement_decision_support')
], ReimbursementDecisionSupport);
let HealthEconomicsResearch = class HealthEconomicsResearch {
};
exports.HealthEconomicsResearch = HealthEconomicsResearch;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthEconomicsResearch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthEconomicsResearch.prototype, "research_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthEconomicsResearch.prototype, "study_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthEconomicsResearch.prototype, "research_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthEconomicsResearch.prototype, "study_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEconomicsResearch.prototype, "research_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEconomicsResearch.prototype, "methodology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEconomicsResearch.prototype, "data_collection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEconomicsResearch.prototype, "economic_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEconomicsResearch.prototype, "statistical_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEconomicsResearch.prototype, "results_dissemination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthEconomicsResearch.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthEconomicsResearch.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthEconomicsResearch.prototype, "updated_at", void 0);
exports.HealthEconomicsResearch = HealthEconomicsResearch = __decorate([
    (0, typeorm_1.Entity)('health_economics_research')
], HealthEconomicsResearch);
let HealthTechnologyAssessmentEconomicsQualityMetrics = class HealthTechnologyAssessmentEconomicsQualityMetrics {
};
exports.HealthTechnologyAssessmentEconomicsQualityMetrics = HealthTechnologyAssessmentEconomicsQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "assessment_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "economic_modeling_accuracy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "value_assessment_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "reimbursement_decision_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "research_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "healthcare_system_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "stakeholder_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "technology_adoption_optimization", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthTechnologyAssessmentEconomicsQualityMetrics.prototype, "updated_at", void 0);
exports.HealthTechnologyAssessmentEconomicsQualityMetrics = HealthTechnologyAssessmentEconomicsQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('health_technology_assessment_economics_quality_metrics')
], HealthTechnologyAssessmentEconomicsQualityMetrics);
//# sourceMappingURL=advanced-health-technology-assessment-economics.entity.js.map