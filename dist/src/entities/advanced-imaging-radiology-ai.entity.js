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
exports.HealthcareImagingAiQualityMetrics = exports.InterventionalImagingGuidance = exports.ThreeDimensionalReconstruction = exports.AdvancedImagingWorkflow = exports.RadiomicsAnalyticsPlatform = exports.AiImagingDiagnostics = void 0;
const typeorm_1 = require("typeorm");
let AiImagingDiagnostics = class AiImagingDiagnostics {
};
exports.AiImagingDiagnostics = AiImagingDiagnostics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AiImagingDiagnostics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AiImagingDiagnostics.prototype, "imaging_ai_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AiImagingDiagnostics.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AiImagingDiagnostics.prototype, "study_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AiImagingDiagnostics.prototype, "imaging_modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AiImagingDiagnostics.prototype, "ai_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiImagingDiagnostics.prototype, "ai_model_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiImagingDiagnostics.prototype, "image_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiImagingDiagnostics.prototype, "diagnostic_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiImagingDiagnostics.prototype, "clinical_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiImagingDiagnostics.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AiImagingDiagnostics.prototype, "quality_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AiImagingDiagnostics.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AiImagingDiagnostics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AiImagingDiagnostics.prototype, "updated_at", void 0);
exports.AiImagingDiagnostics = AiImagingDiagnostics = __decorate([
    (0, typeorm_1.Entity)('ai_imaging_diagnostics')
], AiImagingDiagnostics);
let RadiomicsAnalyticsPlatform = class RadiomicsAnalyticsPlatform {
};
exports.RadiomicsAnalyticsPlatform = RadiomicsAnalyticsPlatform;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RadiomicsAnalyticsPlatform.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RadiomicsAnalyticsPlatform.prototype, "radiomics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RadiomicsAnalyticsPlatform.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RadiomicsAnalyticsPlatform.prototype, "study_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RadiomicsAnalyticsPlatform.prototype, "analysis_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RadiomicsAnalyticsPlatform.prototype, "clinical_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RadiomicsAnalyticsPlatform.prototype, "image_preprocessing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RadiomicsAnalyticsPlatform.prototype, "feature_extraction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RadiomicsAnalyticsPlatform.prototype, "deep_learning_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RadiomicsAnalyticsPlatform.prototype, "predictive_modeling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RadiomicsAnalyticsPlatform.prototype, "biomarker_discovery", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RadiomicsAnalyticsPlatform.prototype, "clinical_translation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RadiomicsAnalyticsPlatform.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RadiomicsAnalyticsPlatform.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RadiomicsAnalyticsPlatform.prototype, "updated_at", void 0);
exports.RadiomicsAnalyticsPlatform = RadiomicsAnalyticsPlatform = __decorate([
    (0, typeorm_1.Entity)('radiomics_analytics_platform')
], RadiomicsAnalyticsPlatform);
let AdvancedImagingWorkflow = class AdvancedImagingWorkflow {
};
exports.AdvancedImagingWorkflow = AdvancedImagingWorkflow;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AdvancedImagingWorkflow.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AdvancedImagingWorkflow.prototype, "workflow_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AdvancedImagingWorkflow.prototype, "workflow_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AdvancedImagingWorkflow.prototype, "workflow_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AdvancedImagingWorkflow.prototype, "optimization_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdvancedImagingWorkflow.prototype, "workflow_steps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdvancedImagingWorkflow.prototype, "automation_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdvancedImagingWorkflow.prototype, "ai_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdvancedImagingWorkflow.prototype, "quality_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdvancedImagingWorkflow.prototype, "performance_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdvancedImagingWorkflow.prototype, "integration_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AdvancedImagingWorkflow.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AdvancedImagingWorkflow.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AdvancedImagingWorkflow.prototype, "updated_at", void 0);
exports.AdvancedImagingWorkflow = AdvancedImagingWorkflow = __decorate([
    (0, typeorm_1.Entity)('advanced_imaging_workflow')
], AdvancedImagingWorkflow);
let ThreeDimensionalReconstruction = class ThreeDimensionalReconstruction {
};
exports.ThreeDimensionalReconstruction = ThreeDimensionalReconstruction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ThreeDimensionalReconstruction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ThreeDimensionalReconstruction.prototype, "reconstruction_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ThreeDimensionalReconstruction.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ThreeDimensionalReconstruction.prototype, "study_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ThreeDimensionalReconstruction.prototype, "reconstruction_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ThreeDimensionalReconstruction.prototype, "clinical_purpose", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreeDimensionalReconstruction.prototype, "reconstruction_parameters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreeDimensionalReconstruction.prototype, "advanced_techniques", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreeDimensionalReconstruction.prototype, "visualization_tools", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreeDimensionalReconstruction.prototype, "measurement_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreeDimensionalReconstruction.prototype, "surgical_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreeDimensionalReconstruction.prototype, "collaboration_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ThreeDimensionalReconstruction.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ThreeDimensionalReconstruction.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ThreeDimensionalReconstruction.prototype, "updated_at", void 0);
exports.ThreeDimensionalReconstruction = ThreeDimensionalReconstruction = __decorate([
    (0, typeorm_1.Entity)('three_dimensional_reconstruction')
], ThreeDimensionalReconstruction);
let InterventionalImagingGuidance = class InterventionalImagingGuidance {
};
exports.InterventionalImagingGuidance = InterventionalImagingGuidance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InterventionalImagingGuidance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], InterventionalImagingGuidance.prototype, "intervention_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], InterventionalImagingGuidance.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], InterventionalImagingGuidance.prototype, "procedure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InterventionalImagingGuidance.prototype, "imaging_guidance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InterventionalImagingGuidance.prototype, "intervention_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InterventionalImagingGuidance.prototype, "real_time_guidance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InterventionalImagingGuidance.prototype, "navigation_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InterventionalImagingGuidance.prototype, "procedure_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InterventionalImagingGuidance.prototype, "safety_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InterventionalImagingGuidance.prototype, "outcome_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InterventionalImagingGuidance.prototype, "documentation_reporting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InterventionalImagingGuidance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InterventionalImagingGuidance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InterventionalImagingGuidance.prototype, "updated_at", void 0);
exports.InterventionalImagingGuidance = InterventionalImagingGuidance = __decorate([
    (0, typeorm_1.Entity)('interventional_imaging_guidance')
], InterventionalImagingGuidance);
let HealthcareImagingAiQualityMetrics = class HealthcareImagingAiQualityMetrics {
};
exports.HealthcareImagingAiQualityMetrics = HealthcareImagingAiQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareImagingAiQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareImagingAiQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareImagingAiQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareImagingAiQualityMetrics.prototype, "ai_diagnostic_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareImagingAiQualityMetrics.prototype, "workflow_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareImagingAiQualityMetrics.prototype, "image_quality_enhancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareImagingAiQualityMetrics.prototype, "clinical_decision_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareImagingAiQualityMetrics.prototype, "patient_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareImagingAiQualityMetrics.prototype, "technology_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareImagingAiQualityMetrics.prototype, "cost_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareImagingAiQualityMetrics.prototype, "quality_assurance", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareImagingAiQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareImagingAiQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareImagingAiQualityMetrics = HealthcareImagingAiQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_imaging_ai_quality_metrics')
], HealthcareImagingAiQualityMetrics);
//# sourceMappingURL=advanced-imaging-radiology-ai.entity.js.map