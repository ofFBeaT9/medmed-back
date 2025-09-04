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
exports.SocialDeterminantsHealthEquityQualityMetrics = exports.HealthJusticeInitiatives = exports.HealthPolicyImpactAnalysis = exports.CommunityHealthInterventions = exports.HealthEquityMeasurement = exports.SocialDeterminantsAssessment = void 0;
const typeorm_1 = require("typeorm");
let SocialDeterminantsAssessment = class SocialDeterminantsAssessment {
};
exports.SocialDeterminantsAssessment = SocialDeterminantsAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SocialDeterminantsAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SocialDeterminantsAssessment.prototype, "assessment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SocialDeterminantsAssessment.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SocialDeterminantsAssessment.prototype, "assessment_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SocialDeterminantsAssessment.prototype, "risk_stratification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsAssessment.prototype, "economic_stability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsAssessment.prototype, "education_access", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsAssessment.prototype, "healthcare_access", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsAssessment.prototype, "neighborhood_environment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsAssessment.prototype, "social_community_context", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsAssessment.prototype, "structural_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsAssessment.prototype, "risk_scoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SocialDeterminantsAssessment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SocialDeterminantsAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SocialDeterminantsAssessment.prototype, "updated_at", void 0);
exports.SocialDeterminantsAssessment = SocialDeterminantsAssessment = __decorate([
    (0, typeorm_1.Entity)('social_determinants_assessment')
], SocialDeterminantsAssessment);
let HealthEquityMeasurement = class HealthEquityMeasurement {
};
exports.HealthEquityMeasurement = HealthEquityMeasurement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthEquityMeasurement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthEquityMeasurement.prototype, "measurement_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthEquityMeasurement.prototype, "study_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthEquityMeasurement.prototype, "equity_dimension", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthEquityMeasurement.prototype, "health_outcome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEquityMeasurement.prototype, "population_stratification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEquityMeasurement.prototype, "disparity_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEquityMeasurement.prototype, "causal_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEquityMeasurement.prototype, "intersectionality_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEquityMeasurement.prototype, "contextual_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthEquityMeasurement.prototype, "intervention_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthEquityMeasurement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthEquityMeasurement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthEquityMeasurement.prototype, "updated_at", void 0);
exports.HealthEquityMeasurement = HealthEquityMeasurement = __decorate([
    (0, typeorm_1.Entity)('health_equity_measurement')
], HealthEquityMeasurement);
let CommunityHealthInterventions = class CommunityHealthInterventions {
};
exports.CommunityHealthInterventions = CommunityHealthInterventions;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CommunityHealthInterventions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CommunityHealthInterventions.prototype, "intervention_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CommunityHealthInterventions.prototype, "intervention_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CommunityHealthInterventions.prototype, "intervention_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CommunityHealthInterventions.prototype, "target_population", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunityHealthInterventions.prototype, "community_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunityHealthInterventions.prototype, "intervention_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunityHealthInterventions.prototype, "implementation_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunityHealthInterventions.prototype, "outcome_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunityHealthInterventions.prototype, "sustainability_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunityHealthInterventions.prototype, "dissemination_scaling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CommunityHealthInterventions.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CommunityHealthInterventions.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CommunityHealthInterventions.prototype, "updated_at", void 0);
exports.CommunityHealthInterventions = CommunityHealthInterventions = __decorate([
    (0, typeorm_1.Entity)('community_health_interventions')
], CommunityHealthInterventions);
let HealthPolicyImpactAnalysis = class HealthPolicyImpactAnalysis {
};
exports.HealthPolicyImpactAnalysis = HealthPolicyImpactAnalysis;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthPolicyImpactAnalysis.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthPolicyImpactAnalysis.prototype, "analysis_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthPolicyImpactAnalysis.prototype, "policy_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthPolicyImpactAnalysis.prototype, "policy_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthPolicyImpactAnalysis.prototype, "policy_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthPolicyImpactAnalysis.prototype, "policy_characterization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthPolicyImpactAnalysis.prototype, "health_impact_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthPolicyImpactAnalysis.prototype, "evaluation_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthPolicyImpactAnalysis.prototype, "implementation_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthPolicyImpactAnalysis.prototype, "cost_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthPolicyImpactAnalysis.prototype, "equity_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthPolicyImpactAnalysis.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthPolicyImpactAnalysis.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthPolicyImpactAnalysis.prototype, "updated_at", void 0);
exports.HealthPolicyImpactAnalysis = HealthPolicyImpactAnalysis = __decorate([
    (0, typeorm_1.Entity)('health_policy_impact_analysis')
], HealthPolicyImpactAnalysis);
let HealthJusticeInitiatives = class HealthJusticeInitiatives {
};
exports.HealthJusticeInitiatives = HealthJusticeInitiatives;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthJusticeInitiatives.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthJusticeInitiatives.prototype, "initiative_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthJusticeInitiatives.prototype, "initiative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthJusticeInitiatives.prototype, "justice_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthJusticeInitiatives.prototype, "focus_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthJusticeInitiatives.prototype, "community_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthJusticeInitiatives.prototype, "advocacy_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthJusticeInitiatives.prototype, "systemic_change_efforts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthJusticeInitiatives.prototype, "capacity_building", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthJusticeInitiatives.prototype, "accountability_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthJusticeInitiatives.prototype, "impact_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthJusticeInitiatives.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthJusticeInitiatives.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthJusticeInitiatives.prototype, "updated_at", void 0);
exports.HealthJusticeInitiatives = HealthJusticeInitiatives = __decorate([
    (0, typeorm_1.Entity)('health_justice_initiatives')
], HealthJusticeInitiatives);
let SocialDeterminantsHealthEquityQualityMetrics = class SocialDeterminantsHealthEquityQualityMetrics {
};
exports.SocialDeterminantsHealthEquityQualityMetrics = SocialDeterminantsHealthEquityQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "assessment_completeness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "equity_measurement_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "intervention_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "policy_impact_strength", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "justice_initiative_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "health_equity_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "system_transformation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "community_impact", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SocialDeterminantsHealthEquityQualityMetrics.prototype, "updated_at", void 0);
exports.SocialDeterminantsHealthEquityQualityMetrics = SocialDeterminantsHealthEquityQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('social_determinants_health_equity_quality_metrics')
], SocialDeterminantsHealthEquityQualityMetrics);
//# sourceMappingURL=advanced-social-determinants-health-equity.entity.js.map