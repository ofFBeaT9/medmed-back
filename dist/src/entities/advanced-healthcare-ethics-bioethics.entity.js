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
exports.HealthcareEthicsBioethicsQualityMetrics = exports.EthicsPolicyDevelopment = exports.ClinicalEthicsSupportSystems = exports.ResearchEthicsOversight = exports.BioethicsCommitteeGovernance = exports.EthicsConsultationServices = void 0;
const typeorm_1 = require("typeorm");
let EthicsConsultationServices = class EthicsConsultationServices {
};
exports.EthicsConsultationServices = EthicsConsultationServices;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EthicsConsultationServices.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EthicsConsultationServices.prototype, "consultation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EthicsConsultationServices.prototype, "case_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EthicsConsultationServices.prototype, "consultation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EthicsConsultationServices.prototype, "consultation_urgency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsConsultationServices.prototype, "ethical_issues", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsConsultationServices.prototype, "consultation_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsConsultationServices.prototype, "ethical_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsConsultationServices.prototype, "stakeholder_perspectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsConsultationServices.prototype, "recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsConsultationServices.prototype, "outcome_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EthicsConsultationServices.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EthicsConsultationServices.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EthicsConsultationServices.prototype, "updated_at", void 0);
exports.EthicsConsultationServices = EthicsConsultationServices = __decorate([
    (0, typeorm_1.Entity)('ethics_consultation_services')
], EthicsConsultationServices);
let BioethicsCommitteeGovernance = class BioethicsCommitteeGovernance {
};
exports.BioethicsCommitteeGovernance = BioethicsCommitteeGovernance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BioethicsCommitteeGovernance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BioethicsCommitteeGovernance.prototype, "committee_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BioethicsCommitteeGovernance.prototype, "committee_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BioethicsCommitteeGovernance.prototype, "committee_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BioethicsCommitteeGovernance.prototype, "governance_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BioethicsCommitteeGovernance.prototype, "committee_structure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BioethicsCommitteeGovernance.prototype, "roles_responsibilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BioethicsCommitteeGovernance.prototype, "operational_procedures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BioethicsCommitteeGovernance.prototype, "quality_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BioethicsCommitteeGovernance.prototype, "stakeholder_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BioethicsCommitteeGovernance.prototype, "resource_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BioethicsCommitteeGovernance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BioethicsCommitteeGovernance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BioethicsCommitteeGovernance.prototype, "updated_at", void 0);
exports.BioethicsCommitteeGovernance = BioethicsCommitteeGovernance = __decorate([
    (0, typeorm_1.Entity)('bioethics_committee_governance')
], BioethicsCommitteeGovernance);
let ResearchEthicsOversight = class ResearchEthicsOversight {
};
exports.ResearchEthicsOversight = ResearchEthicsOversight;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ResearchEthicsOversight.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ResearchEthicsOversight.prototype, "oversight_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ResearchEthicsOversight.prototype, "research_protocol_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ResearchEthicsOversight.prototype, "review_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ResearchEthicsOversight.prototype, "risk_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchEthicsOversight.prototype, "ethical_review_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchEthicsOversight.prototype, "informed_consent_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchEthicsOversight.prototype, "risk_benefit_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchEthicsOversight.prototype, "participant_protection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchEthicsOversight.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchEthicsOversight.prototype, "ongoing_oversight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ResearchEthicsOversight.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ResearchEthicsOversight.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ResearchEthicsOversight.prototype, "updated_at", void 0);
exports.ResearchEthicsOversight = ResearchEthicsOversight = __decorate([
    (0, typeorm_1.Entity)('research_ethics_oversight')
], ResearchEthicsOversight);
let ClinicalEthicsSupportSystems = class ClinicalEthicsSupportSystems {
};
exports.ClinicalEthicsSupportSystems = ClinicalEthicsSupportSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClinicalEthicsSupportSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClinicalEthicsSupportSystems.prototype, "support_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClinicalEthicsSupportSystems.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalEthicsSupportSystems.prototype, "ethics_concern", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalEthicsSupportSystems.prototype, "intervention_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalEthicsSupportSystems.prototype, "ethics_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalEthicsSupportSystems.prototype, "decision_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalEthicsSupportSystems.prototype, "communication_facilitation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalEthicsSupportSystems.prototype, "moral_distress_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalEthicsSupportSystems.prototype, "outcome_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalEthicsSupportSystems.prototype, "follow_up_care", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalEthicsSupportSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalEthicsSupportSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalEthicsSupportSystems.prototype, "updated_at", void 0);
exports.ClinicalEthicsSupportSystems = ClinicalEthicsSupportSystems = __decorate([
    (0, typeorm_1.Entity)('clinical_ethics_support_systems')
], ClinicalEthicsSupportSystems);
let EthicsPolicyDevelopment = class EthicsPolicyDevelopment {
};
exports.EthicsPolicyDevelopment = EthicsPolicyDevelopment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EthicsPolicyDevelopment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EthicsPolicyDevelopment.prototype, "policy_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EthicsPolicyDevelopment.prototype, "policy_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EthicsPolicyDevelopment.prototype, "policy_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EthicsPolicyDevelopment.prototype, "development_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsPolicyDevelopment.prototype, "policy_rationale", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsPolicyDevelopment.prototype, "stakeholder_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsPolicyDevelopment.prototype, "policy_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsPolicyDevelopment.prototype, "implementation_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsPolicyDevelopment.prototype, "evaluation_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EthicsPolicyDevelopment.prototype, "quality_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EthicsPolicyDevelopment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EthicsPolicyDevelopment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EthicsPolicyDevelopment.prototype, "updated_at", void 0);
exports.EthicsPolicyDevelopment = EthicsPolicyDevelopment = __decorate([
    (0, typeorm_1.Entity)('ethics_policy_development')
], EthicsPolicyDevelopment);
let HealthcareEthicsBioethicsQualityMetrics = class HealthcareEthicsBioethicsQualityMetrics {
};
exports.HealthcareEthicsBioethicsQualityMetrics = HealthcareEthicsBioethicsQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "ethics_consultation_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "committee_governance_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "research_ethics_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "clinical_ethics_support_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "policy_development_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "organizational_ethics_culture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "educational_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "systemic_ethics_advancement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareEthicsBioethicsQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareEthicsBioethicsQualityMetrics = HealthcareEthicsBioethicsQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_ethics_bioethics_quality_metrics')
], HealthcareEthicsBioethicsQualityMetrics);
//# sourceMappingURL=advanced-healthcare-ethics-bioethics.entity.js.map