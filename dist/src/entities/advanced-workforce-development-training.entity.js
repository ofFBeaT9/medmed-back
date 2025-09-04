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
exports.WorkforceDevelopmentTrainingQualityMetrics = exports.WorkforcePerformanceOptimization = exports.LeadershipDevelopmentPrograms = exports.ContinuingProfessionalDevelopment = exports.SkillsTrainingPrograms = exports.CompetencyAssessmentFrameworks = void 0;
const typeorm_1 = require("typeorm");
let CompetencyAssessmentFrameworks = class CompetencyAssessmentFrameworks {
};
exports.CompetencyAssessmentFrameworks = CompetencyAssessmentFrameworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CompetencyAssessmentFrameworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CompetencyAssessmentFrameworks.prototype, "assessment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CompetencyAssessmentFrameworks.prototype, "employee_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CompetencyAssessmentFrameworks.prototype, "competency_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CompetencyAssessmentFrameworks.prototype, "assessment_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CompetencyAssessmentFrameworks.prototype, "core_competencies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CompetencyAssessmentFrameworks.prototype, "technical_competencies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CompetencyAssessmentFrameworks.prototype, "behavioral_competencies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CompetencyAssessmentFrameworks.prototype, "assessment_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CompetencyAssessmentFrameworks.prototype, "competency_levels", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CompetencyAssessmentFrameworks.prototype, "development_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CompetencyAssessmentFrameworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CompetencyAssessmentFrameworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CompetencyAssessmentFrameworks.prototype, "updated_at", void 0);
exports.CompetencyAssessmentFrameworks = CompetencyAssessmentFrameworks = __decorate([
    (0, typeorm_1.Entity)('competency_assessment_frameworks')
], CompetencyAssessmentFrameworks);
let SkillsTrainingPrograms = class SkillsTrainingPrograms {
};
exports.SkillsTrainingPrograms = SkillsTrainingPrograms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SkillsTrainingPrograms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SkillsTrainingPrograms.prototype, "program_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SkillsTrainingPrograms.prototype, "program_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SkillsTrainingPrograms.prototype, "training_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SkillsTrainingPrograms.prototype, "delivery_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SkillsTrainingPrograms.prototype, "program_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SkillsTrainingPrograms.prototype, "target_audience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SkillsTrainingPrograms.prototype, "implementation_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SkillsTrainingPrograms.prototype, "learning_activities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SkillsTrainingPrograms.prototype, "assessment_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SkillsTrainingPrograms.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SkillsTrainingPrograms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SkillsTrainingPrograms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SkillsTrainingPrograms.prototype, "updated_at", void 0);
exports.SkillsTrainingPrograms = SkillsTrainingPrograms = __decorate([
    (0, typeorm_1.Entity)('skills_training_programs')
], SkillsTrainingPrograms);
let ContinuingProfessionalDevelopment = class ContinuingProfessionalDevelopment {
};
exports.ContinuingProfessionalDevelopment = ContinuingProfessionalDevelopment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ContinuingProfessionalDevelopment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ContinuingProfessionalDevelopment.prototype, "development_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ContinuingProfessionalDevelopment.prototype, "professional_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ContinuingProfessionalDevelopment.prototype, "development_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ContinuingProfessionalDevelopment.prototype, "professional_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContinuingProfessionalDevelopment.prototype, "regulatory_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContinuingProfessionalDevelopment.prototype, "learning_portfolio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContinuingProfessionalDevelopment.prototype, "competency_maintenance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContinuingProfessionalDevelopment.prototype, "career_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContinuingProfessionalDevelopment.prototype, "tracking_documentation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContinuingProfessionalDevelopment.prototype, "outcome_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ContinuingProfessionalDevelopment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ContinuingProfessionalDevelopment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ContinuingProfessionalDevelopment.prototype, "updated_at", void 0);
exports.ContinuingProfessionalDevelopment = ContinuingProfessionalDevelopment = __decorate([
    (0, typeorm_1.Entity)('continuing_professional_development')
], ContinuingProfessionalDevelopment);
let LeadershipDevelopmentPrograms = class LeadershipDevelopmentPrograms {
};
exports.LeadershipDevelopmentPrograms = LeadershipDevelopmentPrograms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], LeadershipDevelopmentPrograms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], LeadershipDevelopmentPrograms.prototype, "program_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], LeadershipDevelopmentPrograms.prototype, "program_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LeadershipDevelopmentPrograms.prototype, "leadership_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LeadershipDevelopmentPrograms.prototype, "program_duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LeadershipDevelopmentPrograms.prototype, "leadership_competencies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LeadershipDevelopmentPrograms.prototype, "program_components", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LeadershipDevelopmentPrograms.prototype, "development_activities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LeadershipDevelopmentPrograms.prototype, "assessment_feedback", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LeadershipDevelopmentPrograms.prototype, "succession_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LeadershipDevelopmentPrograms.prototype, "program_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LeadershipDevelopmentPrograms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LeadershipDevelopmentPrograms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LeadershipDevelopmentPrograms.prototype, "updated_at", void 0);
exports.LeadershipDevelopmentPrograms = LeadershipDevelopmentPrograms = __decorate([
    (0, typeorm_1.Entity)('leadership_development_programs')
], LeadershipDevelopmentPrograms);
let WorkforcePerformanceOptimization = class WorkforcePerformanceOptimization {
};
exports.WorkforcePerformanceOptimization = WorkforcePerformanceOptimization;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WorkforcePerformanceOptimization.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], WorkforcePerformanceOptimization.prototype, "optimization_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], WorkforcePerformanceOptimization.prototype, "initiative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], WorkforcePerformanceOptimization.prototype, "optimization_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], WorkforcePerformanceOptimization.prototype, "target_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforcePerformanceOptimization.prototype, "performance_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforcePerformanceOptimization.prototype, "intervention_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforcePerformanceOptimization.prototype, "implementation_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforcePerformanceOptimization.prototype, "performance_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforcePerformanceOptimization.prototype, "outcome_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforcePerformanceOptimization.prototype, "continuous_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], WorkforcePerformanceOptimization.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WorkforcePerformanceOptimization.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], WorkforcePerformanceOptimization.prototype, "updated_at", void 0);
exports.WorkforcePerformanceOptimization = WorkforcePerformanceOptimization = __decorate([
    (0, typeorm_1.Entity)('workforce_performance_optimization')
], WorkforcePerformanceOptimization);
let WorkforceDevelopmentTrainingQualityMetrics = class WorkforceDevelopmentTrainingQualityMetrics {
};
exports.WorkforceDevelopmentTrainingQualityMetrics = WorkforceDevelopmentTrainingQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "competency_development_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "training_program_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "professional_development_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "leadership_development_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "workforce_performance_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "organizational_capability_building", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "return_on_investment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "strategic_workforce_alignment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], WorkforceDevelopmentTrainingQualityMetrics.prototype, "updated_at", void 0);
exports.WorkforceDevelopmentTrainingQualityMetrics = WorkforceDevelopmentTrainingQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('workforce_development_training_quality_metrics')
], WorkforceDevelopmentTrainingQualityMetrics);
//# sourceMappingURL=advanced-workforce-development-training.entity.js.map