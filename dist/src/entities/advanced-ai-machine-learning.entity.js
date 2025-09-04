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
exports.AIMachineLearningQualityMetrics = exports.AIGovernanceEthicsFrameworks = exports.ComputerVisionMedicalImaging = exports.NaturalLanguageProcessingSystems = exports.PredictiveAnalyticsSystems = exports.ClinicalAIApplications = void 0;
const typeorm_1 = require("typeorm");
let ClinicalAIApplications = class ClinicalAIApplications {
};
exports.ClinicalAIApplications = ClinicalAIApplications;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClinicalAIApplications.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClinicalAIApplications.prototype, "ai_application_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClinicalAIApplications.prototype, "application_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalAIApplications.prototype, "ai_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalAIApplications.prototype, "clinical_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalAIApplications.prototype, "ai_model_specifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalAIApplications.prototype, "clinical_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalAIApplications.prototype, "data_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalAIApplications.prototype, "clinical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalAIApplications.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalAIApplications.prototype, "performance_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalAIApplications.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalAIApplications.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalAIApplications.prototype, "updated_at", void 0);
exports.ClinicalAIApplications = ClinicalAIApplications = __decorate([
    (0, typeorm_1.Entity)('clinical_ai_applications')
], ClinicalAIApplications);
let PredictiveAnalyticsSystems = class PredictiveAnalyticsSystems {
};
exports.PredictiveAnalyticsSystems = PredictiveAnalyticsSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PredictiveAnalyticsSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PredictiveAnalyticsSystems.prototype, "predictive_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PredictiveAnalyticsSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PredictiveAnalyticsSystems.prototype, "prediction_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PredictiveAnalyticsSystems.prototype, "time_horizon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsSystems.prototype, "predictive_models", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsSystems.prototype, "data_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsSystems.prototype, "risk_stratification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsSystems.prototype, "intervention_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsSystems.prototype, "uncertainty_quantification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PredictiveAnalyticsSystems.prototype, "actionable_insights", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PredictiveAnalyticsSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PredictiveAnalyticsSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PredictiveAnalyticsSystems.prototype, "updated_at", void 0);
exports.PredictiveAnalyticsSystems = PredictiveAnalyticsSystems = __decorate([
    (0, typeorm_1.Entity)('predictive_analytics_systems')
], PredictiveAnalyticsSystems);
let NaturalLanguageProcessingSystems = class NaturalLanguageProcessingSystems {
};
exports.NaturalLanguageProcessingSystems = NaturalLanguageProcessingSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], NaturalLanguageProcessingSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], NaturalLanguageProcessingSystems.prototype, "nlp_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], NaturalLanguageProcessingSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NaturalLanguageProcessingSystems.prototype, "nlp_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NaturalLanguageProcessingSystems.prototype, "text_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NaturalLanguageProcessingSystems.prototype, "nlp_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NaturalLanguageProcessingSystems.prototype, "clinical_nlp_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NaturalLanguageProcessingSystems.prototype, "language_models", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NaturalLanguageProcessingSystems.prototype, "integration_workflows", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NaturalLanguageProcessingSystems.prototype, "performance_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NaturalLanguageProcessingSystems.prototype, "clinical_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NaturalLanguageProcessingSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NaturalLanguageProcessingSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], NaturalLanguageProcessingSystems.prototype, "updated_at", void 0);
exports.NaturalLanguageProcessingSystems = NaturalLanguageProcessingSystems = __decorate([
    (0, typeorm_1.Entity)('natural_language_processing_systems')
], NaturalLanguageProcessingSystems);
let ComputerVisionMedicalImaging = class ComputerVisionMedicalImaging {
};
exports.ComputerVisionMedicalImaging = ComputerVisionMedicalImaging;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ComputerVisionMedicalImaging.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ComputerVisionMedicalImaging.prototype, "vision_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ComputerVisionMedicalImaging.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ComputerVisionMedicalImaging.prototype, "imaging_modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ComputerVisionMedicalImaging.prototype, "application_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputerVisionMedicalImaging.prototype, "ai_model_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputerVisionMedicalImaging.prototype, "image_processing_pipeline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputerVisionMedicalImaging.prototype, "clinical_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputerVisionMedicalImaging.prototype, "validation_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputerVisionMedicalImaging.prototype, "integration_deployment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputerVisionMedicalImaging.prototype, "quality_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ComputerVisionMedicalImaging.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ComputerVisionMedicalImaging.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ComputerVisionMedicalImaging.prototype, "updated_at", void 0);
exports.ComputerVisionMedicalImaging = ComputerVisionMedicalImaging = __decorate([
    (0, typeorm_1.Entity)('computer_vision_medical_imaging')
], ComputerVisionMedicalImaging);
let AIGovernanceEthicsFrameworks = class AIGovernanceEthicsFrameworks {
};
exports.AIGovernanceEthicsFrameworks = AIGovernanceEthicsFrameworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AIGovernanceEthicsFrameworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AIGovernanceEthicsFrameworks.prototype, "governance_framework_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AIGovernanceEthicsFrameworks.prototype, "framework_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AIGovernanceEthicsFrameworks.prototype, "governance_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AIGovernanceEthicsFrameworks.prototype, "ethical_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIGovernanceEthicsFrameworks.prototype, "ai_governance_structure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIGovernanceEthicsFrameworks.prototype, "ethical_principles", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIGovernanceEthicsFrameworks.prototype, "ai_lifecycle_governance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIGovernanceEthicsFrameworks.prototype, "bias_fairness_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIGovernanceEthicsFrameworks.prototype, "explainability_transparency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIGovernanceEthicsFrameworks.prototype, "risk_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AIGovernanceEthicsFrameworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AIGovernanceEthicsFrameworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AIGovernanceEthicsFrameworks.prototype, "updated_at", void 0);
exports.AIGovernanceEthicsFrameworks = AIGovernanceEthicsFrameworks = __decorate([
    (0, typeorm_1.Entity)('ai_governance_ethics_frameworks')
], AIGovernanceEthicsFrameworks);
let AIMachineLearningQualityMetrics = class AIMachineLearningQualityMetrics {
};
exports.AIMachineLearningQualityMetrics = AIMachineLearningQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AIMachineLearningQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AIMachineLearningQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AIMachineLearningQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIMachineLearningQualityMetrics.prototype, "clinical_ai_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIMachineLearningQualityMetrics.prototype, "predictive_analytics_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIMachineLearningQualityMetrics.prototype, "nlp_system_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIMachineLearningQualityMetrics.prototype, "computer_vision_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIMachineLearningQualityMetrics.prototype, "ai_governance_maturity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIMachineLearningQualityMetrics.prototype, "ai_innovation_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIMachineLearningQualityMetrics.prototype, "ai_system_reliability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AIMachineLearningQualityMetrics.prototype, "ai_investment_returns", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AIMachineLearningQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AIMachineLearningQualityMetrics.prototype, "updated_at", void 0);
exports.AIMachineLearningQualityMetrics = AIMachineLearningQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('ai_machine_learning_quality_metrics')
], AIMachineLearningQualityMetrics);
//# sourceMappingURL=advanced-ai-machine-learning.entity.js.map