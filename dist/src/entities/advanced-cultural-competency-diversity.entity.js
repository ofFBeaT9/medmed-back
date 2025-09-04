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
exports.CulturalCompetencyDiversityQualityMetrics = exports.ImplicitBiasTrainingPrograms = exports.MulticulturalHealthPrograms = exports.LanguageInterpretationServices = exports.DiversityEquityInclusionPrograms = exports.CulturalCompetencyAssessment = void 0;
const typeorm_1 = require("typeorm");
let CulturalCompetencyAssessment = class CulturalCompetencyAssessment {
};
exports.CulturalCompetencyAssessment = CulturalCompetencyAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CulturalCompetencyAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CulturalCompetencyAssessment.prototype, "assessment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CulturalCompetencyAssessment.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CulturalCompetencyAssessment.prototype, "assessment_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CulturalCompetencyAssessment.prototype, "competency_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyAssessment.prototype, "cultural_awareness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyAssessment.prototype, "cultural_knowledge", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyAssessment.prototype, "cross_cultural_skills", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyAssessment.prototype, "cultural_encounters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyAssessment.prototype, "cultural_desire", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyAssessment.prototype, "competency_gaps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CulturalCompetencyAssessment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CulturalCompetencyAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CulturalCompetencyAssessment.prototype, "updated_at", void 0);
exports.CulturalCompetencyAssessment = CulturalCompetencyAssessment = __decorate([
    (0, typeorm_1.Entity)('cultural_competency_assessment')
], CulturalCompetencyAssessment);
let DiversityEquityInclusionPrograms = class DiversityEquityInclusionPrograms {
};
exports.DiversityEquityInclusionPrograms = DiversityEquityInclusionPrograms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DiversityEquityInclusionPrograms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DiversityEquityInclusionPrograms.prototype, "program_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DiversityEquityInclusionPrograms.prototype, "program_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DiversityEquityInclusionPrograms.prototype, "program_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DiversityEquityInclusionPrograms.prototype, "target_population", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiversityEquityInclusionPrograms.prototype, "diversity_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiversityEquityInclusionPrograms.prototype, "recruitment_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiversityEquityInclusionPrograms.prototype, "retention_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiversityEquityInclusionPrograms.prototype, "training_education", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiversityEquityInclusionPrograms.prototype, "policy_procedures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiversityEquityInclusionPrograms.prototype, "measurement_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DiversityEquityInclusionPrograms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DiversityEquityInclusionPrograms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DiversityEquityInclusionPrograms.prototype, "updated_at", void 0);
exports.DiversityEquityInclusionPrograms = DiversityEquityInclusionPrograms = __decorate([
    (0, typeorm_1.Entity)('diversity_equity_inclusion_programs')
], DiversityEquityInclusionPrograms);
let LanguageInterpretationServices = class LanguageInterpretationServices {
};
exports.LanguageInterpretationServices = LanguageInterpretationServices;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], LanguageInterpretationServices.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], LanguageInterpretationServices.prototype, "service_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], LanguageInterpretationServices.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LanguageInterpretationServices.prototype, "service_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LanguageInterpretationServices.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LanguageInterpretationServices.prototype, "interpreter_qualifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LanguageInterpretationServices.prototype, "service_delivery", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LanguageInterpretationServices.prototype, "technology_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LanguageInterpretationServices.prototype, "quality_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LanguageInterpretationServices.prototype, "cultural_mediation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LanguageInterpretationServices.prototype, "outcome_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LanguageInterpretationServices.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LanguageInterpretationServices.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LanguageInterpretationServices.prototype, "updated_at", void 0);
exports.LanguageInterpretationServices = LanguageInterpretationServices = __decorate([
    (0, typeorm_1.Entity)('language_interpretation_services')
], LanguageInterpretationServices);
let MulticulturalHealthPrograms = class MulticulturalHealthPrograms {
};
exports.MulticulturalHealthPrograms = MulticulturalHealthPrograms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MulticulturalHealthPrograms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MulticulturalHealthPrograms.prototype, "program_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MulticulturalHealthPrograms.prototype, "program_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MulticulturalHealthPrograms.prototype, "target_community", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MulticulturalHealthPrograms.prototype, "program_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MulticulturalHealthPrograms.prototype, "community_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MulticulturalHealthPrograms.prototype, "culturally_adapted_interventions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MulticulturalHealthPrograms.prototype, "community_partnerships", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MulticulturalHealthPrograms.prototype, "program_delivery", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MulticulturalHealthPrograms.prototype, "health_education", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MulticulturalHealthPrograms.prototype, "outcome_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MulticulturalHealthPrograms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MulticulturalHealthPrograms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MulticulturalHealthPrograms.prototype, "updated_at", void 0);
exports.MulticulturalHealthPrograms = MulticulturalHealthPrograms = __decorate([
    (0, typeorm_1.Entity)('multicultural_health_programs')
], MulticulturalHealthPrograms);
let ImplicitBiasTrainingPrograms = class ImplicitBiasTrainingPrograms {
};
exports.ImplicitBiasTrainingPrograms = ImplicitBiasTrainingPrograms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ImplicitBiasTrainingPrograms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ImplicitBiasTrainingPrograms.prototype, "training_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ImplicitBiasTrainingPrograms.prototype, "training_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ImplicitBiasTrainingPrograms.prototype, "training_format", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ImplicitBiasTrainingPrograms.prototype, "target_audience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImplicitBiasTrainingPrograms.prototype, "curriculum_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImplicitBiasTrainingPrograms.prototype, "learning_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImplicitBiasTrainingPrograms.prototype, "training_methods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImplicitBiasTrainingPrograms.prototype, "assessment_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImplicitBiasTrainingPrograms.prototype, "implementation_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImplicitBiasTrainingPrograms.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ImplicitBiasTrainingPrograms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ImplicitBiasTrainingPrograms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ImplicitBiasTrainingPrograms.prototype, "updated_at", void 0);
exports.ImplicitBiasTrainingPrograms = ImplicitBiasTrainingPrograms = __decorate([
    (0, typeorm_1.Entity)('implicit_bias_training_programs')
], ImplicitBiasTrainingPrograms);
let CulturalCompetencyDiversityQualityMetrics = class CulturalCompetencyDiversityQualityMetrics {
};
exports.CulturalCompetencyDiversityQualityMetrics = CulturalCompetencyDiversityQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CulturalCompetencyDiversityQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CulturalCompetencyDiversityQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CulturalCompetencyDiversityQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyDiversityQualityMetrics.prototype, "cultural_competency_levels", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyDiversityQualityMetrics.prototype, "diversity_equity_inclusion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyDiversityQualityMetrics.prototype, "language_services_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyDiversityQualityMetrics.prototype, "multicultural_program_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyDiversityQualityMetrics.prototype, "bias_reduction_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyDiversityQualityMetrics.prototype, "health_equity_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyDiversityQualityMetrics.prototype, "organizational_culture_transformation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CulturalCompetencyDiversityQualityMetrics.prototype, "community_engagement_success", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CulturalCompetencyDiversityQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CulturalCompetencyDiversityQualityMetrics.prototype, "updated_at", void 0);
exports.CulturalCompetencyDiversityQualityMetrics = CulturalCompetencyDiversityQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('cultural_competency_diversity_quality_metrics')
], CulturalCompetencyDiversityQualityMetrics);
//# sourceMappingURL=advanced-cultural-competency-diversity.entity.js.map