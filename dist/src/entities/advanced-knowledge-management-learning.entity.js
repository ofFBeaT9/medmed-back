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
exports.KnowledgeManagementLearningQualityMetrics = exports.LearningAnalyticsIntelligence = exports.ExpertiseKnowledgeNetworks = exports.OrganizationalLearningPlatforms = exports.EvidenceBasedPracticeSystems = exports.ClinicalKnowledgeManagementSystems = void 0;
const typeorm_1 = require("typeorm");
let ClinicalKnowledgeManagementSystems = class ClinicalKnowledgeManagementSystems {
};
exports.ClinicalKnowledgeManagementSystems = ClinicalKnowledgeManagementSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClinicalKnowledgeManagementSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClinicalKnowledgeManagementSystems.prototype, "knowledge_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClinicalKnowledgeManagementSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalKnowledgeManagementSystems.prototype, "knowledge_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalKnowledgeManagementSystems.prototype, "content_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalKnowledgeManagementSystems.prototype, "knowledge_repository", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalKnowledgeManagementSystems.prototype, "content_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalKnowledgeManagementSystems.prototype, "knowledge_organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalKnowledgeManagementSystems.prototype, "search_discovery", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalKnowledgeManagementSystems.prototype, "integration_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalKnowledgeManagementSystems.prototype, "usage_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalKnowledgeManagementSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalKnowledgeManagementSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalKnowledgeManagementSystems.prototype, "updated_at", void 0);
exports.ClinicalKnowledgeManagementSystems = ClinicalKnowledgeManagementSystems = __decorate([
    (0, typeorm_1.Entity)('clinical_knowledge_management_systems')
], ClinicalKnowledgeManagementSystems);
let EvidenceBasedPracticeSystems = class EvidenceBasedPracticeSystems {
};
exports.EvidenceBasedPracticeSystems = EvidenceBasedPracticeSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EvidenceBasedPracticeSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EvidenceBasedPracticeSystems.prototype, "evidence_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EvidenceBasedPracticeSystems.prototype, "practice_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EvidenceBasedPracticeSystems.prototype, "evidence_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EvidenceBasedPracticeSystems.prototype, "evidence_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EvidenceBasedPracticeSystems.prototype, "evidence_synthesis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EvidenceBasedPracticeSystems.prototype, "guideline_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EvidenceBasedPracticeSystems.prototype, "practice_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EvidenceBasedPracticeSystems.prototype, "implementation_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EvidenceBasedPracticeSystems.prototype, "outcome_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EvidenceBasedPracticeSystems.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EvidenceBasedPracticeSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EvidenceBasedPracticeSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EvidenceBasedPracticeSystems.prototype, "updated_at", void 0);
exports.EvidenceBasedPracticeSystems = EvidenceBasedPracticeSystems = __decorate([
    (0, typeorm_1.Entity)('evidence_based_practice_systems')
], EvidenceBasedPracticeSystems);
let OrganizationalLearningPlatforms = class OrganizationalLearningPlatforms {
};
exports.OrganizationalLearningPlatforms = OrganizationalLearningPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrganizationalLearningPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], OrganizationalLearningPlatforms.prototype, "learning_platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], OrganizationalLearningPlatforms.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], OrganizationalLearningPlatforms.prototype, "learning_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], OrganizationalLearningPlatforms.prototype, "learning_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganizationalLearningPlatforms.prototype, "learning_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganizationalLearningPlatforms.prototype, "content_ecosystem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganizationalLearningPlatforms.prototype, "personalization_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganizationalLearningPlatforms.prototype, "collaborative_learning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganizationalLearningPlatforms.prototype, "technology_enablers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganizationalLearningPlatforms.prototype, "learning_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], OrganizationalLearningPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OrganizationalLearningPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OrganizationalLearningPlatforms.prototype, "updated_at", void 0);
exports.OrganizationalLearningPlatforms = OrganizationalLearningPlatforms = __decorate([
    (0, typeorm_1.Entity)('organizational_learning_platforms')
], OrganizationalLearningPlatforms);
let ExpertiseKnowledgeNetworks = class ExpertiseKnowledgeNetworks {
};
exports.ExpertiseKnowledgeNetworks = ExpertiseKnowledgeNetworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ExpertiseKnowledgeNetworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ExpertiseKnowledgeNetworks.prototype, "network_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ExpertiseKnowledgeNetworks.prototype, "network_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ExpertiseKnowledgeNetworks.prototype, "expertise_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ExpertiseKnowledgeNetworks.prototype, "network_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExpertiseKnowledgeNetworks.prototype, "expert_profiles", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExpertiseKnowledgeNetworks.prototype, "knowledge_sharing_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExpertiseKnowledgeNetworks.prototype, "collaboration_tools", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExpertiseKnowledgeNetworks.prototype, "network_governance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExpertiseKnowledgeNetworks.prototype, "knowledge_capture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExpertiseKnowledgeNetworks.prototype, "network_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ExpertiseKnowledgeNetworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ExpertiseKnowledgeNetworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ExpertiseKnowledgeNetworks.prototype, "updated_at", void 0);
exports.ExpertiseKnowledgeNetworks = ExpertiseKnowledgeNetworks = __decorate([
    (0, typeorm_1.Entity)('expertise_knowledge_networks')
], ExpertiseKnowledgeNetworks);
let LearningAnalyticsIntelligence = class LearningAnalyticsIntelligence {
};
exports.LearningAnalyticsIntelligence = LearningAnalyticsIntelligence;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], LearningAnalyticsIntelligence.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], LearningAnalyticsIntelligence.prototype, "analytics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], LearningAnalyticsIntelligence.prototype, "analytics_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LearningAnalyticsIntelligence.prototype, "analytics_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LearningAnalyticsIntelligence.prototype, "data_granularity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LearningAnalyticsIntelligence.prototype, "data_collection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LearningAnalyticsIntelligence.prototype, "analytical_models", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LearningAnalyticsIntelligence.prototype, "intelligence_insights", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LearningAnalyticsIntelligence.prototype, "visualization_reporting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LearningAnalyticsIntelligence.prototype, "decision_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LearningAnalyticsIntelligence.prototype, "privacy_governance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LearningAnalyticsIntelligence.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LearningAnalyticsIntelligence.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LearningAnalyticsIntelligence.prototype, "updated_at", void 0);
exports.LearningAnalyticsIntelligence = LearningAnalyticsIntelligence = __decorate([
    (0, typeorm_1.Entity)('learning_analytics_intelligence')
], LearningAnalyticsIntelligence);
let KnowledgeManagementLearningQualityMetrics = class KnowledgeManagementLearningQualityMetrics {
};
exports.KnowledgeManagementLearningQualityMetrics = KnowledgeManagementLearningQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], KnowledgeManagementLearningQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], KnowledgeManagementLearningQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], KnowledgeManagementLearningQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], KnowledgeManagementLearningQualityMetrics.prototype, "knowledge_system_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], KnowledgeManagementLearningQualityMetrics.prototype, "evidence_practice_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], KnowledgeManagementLearningQualityMetrics.prototype, "organizational_learning_maturity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], KnowledgeManagementLearningQualityMetrics.prototype, "expertise_network_vitality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], KnowledgeManagementLearningQualityMetrics.prototype, "learning_analytics_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], KnowledgeManagementLearningQualityMetrics.prototype, "knowledge_creation_innovation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], KnowledgeManagementLearningQualityMetrics.prototype, "strategic_knowledge_alignment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], KnowledgeManagementLearningQualityMetrics.prototype, "knowledge_investment_efficiency", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], KnowledgeManagementLearningQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], KnowledgeManagementLearningQualityMetrics.prototype, "updated_at", void 0);
exports.KnowledgeManagementLearningQualityMetrics = KnowledgeManagementLearningQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('knowledge_management_learning_quality_metrics')
], KnowledgeManagementLearningQualityMetrics);
//# sourceMappingURL=advanced-knowledge-management-learning.entity.js.map