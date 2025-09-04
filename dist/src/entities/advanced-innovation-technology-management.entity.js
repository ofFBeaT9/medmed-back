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
exports.InnovationTechnologyManagementQualityMetrics = exports.ResearchDevelopmentCoordination = exports.InnovationEcosystemManagement = exports.TechnologyAssessmentEvaluation = exports.DigitalTransformationInitiatives = exports.HealthcareInnovationPipeline = void 0;
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
], HealthcareInnovationPipeline.prototype, "innovation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareInnovationPipeline.prototype, "development_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "innovation_concept", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "technical_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "clinical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "regulatory_considerations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "business_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationPipeline.prototype, "implementation_roadmap", void 0);
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
let DigitalTransformationInitiatives = class DigitalTransformationInitiatives {
};
exports.DigitalTransformationInitiatives = DigitalTransformationInitiatives;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DigitalTransformationInitiatives.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DigitalTransformationInitiatives.prototype, "transformation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DigitalTransformationInitiatives.prototype, "initiative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalTransformationInitiatives.prototype, "transformation_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalTransformationInitiatives.prototype, "digital_maturity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTransformationInitiatives.prototype, "current_state_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTransformationInitiatives.prototype, "future_state_vision", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTransformationInitiatives.prototype, "transformation_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTransformationInitiatives.prototype, "implementation_phases", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTransformationInitiatives.prototype, "technology_enablers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTransformationInitiatives.prototype, "success_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalTransformationInitiatives.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DigitalTransformationInitiatives.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DigitalTransformationInitiatives.prototype, "updated_at", void 0);
exports.DigitalTransformationInitiatives = DigitalTransformationInitiatives = __decorate([
    (0, typeorm_1.Entity)('digital_transformation_initiatives')
], DigitalTransformationInitiatives);
let TechnologyAssessmentEvaluation = class TechnologyAssessmentEvaluation {
};
exports.TechnologyAssessmentEvaluation = TechnologyAssessmentEvaluation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TechnologyAssessmentEvaluation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TechnologyAssessmentEvaluation.prototype, "assessment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TechnologyAssessmentEvaluation.prototype, "technology_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TechnologyAssessmentEvaluation.prototype, "technology_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TechnologyAssessmentEvaluation.prototype, "assessment_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyAssessmentEvaluation.prototype, "technical_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyAssessmentEvaluation.prototype, "clinical_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyAssessmentEvaluation.prototype, "economic_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyAssessmentEvaluation.prototype, "organizational_fit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyAssessmentEvaluation.prototype, "risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyAssessmentEvaluation.prototype, "recommendation_decision", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TechnologyAssessmentEvaluation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TechnologyAssessmentEvaluation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TechnologyAssessmentEvaluation.prototype, "updated_at", void 0);
exports.TechnologyAssessmentEvaluation = TechnologyAssessmentEvaluation = __decorate([
    (0, typeorm_1.Entity)('technology_assessment_evaluation')
], TechnologyAssessmentEvaluation);
let InnovationEcosystemManagement = class InnovationEcosystemManagement {
};
exports.InnovationEcosystemManagement = InnovationEcosystemManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InnovationEcosystemManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], InnovationEcosystemManagement.prototype, "ecosystem_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], InnovationEcosystemManagement.prototype, "ecosystem_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InnovationEcosystemManagement.prototype, "ecosystem_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InnovationEcosystemManagement.prototype, "focus_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationEcosystemManagement.prototype, "stakeholder_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationEcosystemManagement.prototype, "innovation_programs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationEcosystemManagement.prototype, "collaboration_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationEcosystemManagement.prototype, "resource_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationEcosystemManagement.prototype, "innovation_governance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationEcosystemManagement.prototype, "ecosystem_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InnovationEcosystemManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InnovationEcosystemManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InnovationEcosystemManagement.prototype, "updated_at", void 0);
exports.InnovationEcosystemManagement = InnovationEcosystemManagement = __decorate([
    (0, typeorm_1.Entity)('innovation_ecosystem_management')
], InnovationEcosystemManagement);
let ResearchDevelopmentCoordination = class ResearchDevelopmentCoordination {
};
exports.ResearchDevelopmentCoordination = ResearchDevelopmentCoordination;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ResearchDevelopmentCoordination.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ResearchDevelopmentCoordination.prototype, "research_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ResearchDevelopmentCoordination.prototype, "research_project", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ResearchDevelopmentCoordination.prototype, "research_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ResearchDevelopmentCoordination.prototype, "development_phase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentCoordination.prototype, "research_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentCoordination.prototype, "collaboration_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentCoordination.prototype, "project_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentCoordination.prototype, "knowledge_translation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentCoordination.prototype, "innovation_transfer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentCoordination.prototype, "impact_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ResearchDevelopmentCoordination.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ResearchDevelopmentCoordination.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ResearchDevelopmentCoordination.prototype, "updated_at", void 0);
exports.ResearchDevelopmentCoordination = ResearchDevelopmentCoordination = __decorate([
    (0, typeorm_1.Entity)('research_development_coordination')
], ResearchDevelopmentCoordination);
let InnovationTechnologyManagementQualityMetrics = class InnovationTechnologyManagementQualityMetrics {
};
exports.InnovationTechnologyManagementQualityMetrics = InnovationTechnologyManagementQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InnovationTechnologyManagementQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], InnovationTechnologyManagementQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InnovationTechnologyManagementQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationTechnologyManagementQualityMetrics.prototype, "innovation_pipeline_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationTechnologyManagementQualityMetrics.prototype, "digital_transformation_progress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationTechnologyManagementQualityMetrics.prototype, "technology_assessment_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationTechnologyManagementQualityMetrics.prototype, "innovation_ecosystem_vitality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationTechnologyManagementQualityMetrics.prototype, "research_development_productivity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationTechnologyManagementQualityMetrics.prototype, "innovation_culture_strength", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationTechnologyManagementQualityMetrics.prototype, "technology_investment_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationTechnologyManagementQualityMetrics.prototype, "strategic_innovation_alignment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InnovationTechnologyManagementQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InnovationTechnologyManagementQualityMetrics.prototype, "updated_at", void 0);
exports.InnovationTechnologyManagementQualityMetrics = InnovationTechnologyManagementQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('innovation_technology_management_quality_metrics')
], InnovationTechnologyManagementQualityMetrics);
//# sourceMappingURL=advanced-innovation-technology-management.entity.js.map