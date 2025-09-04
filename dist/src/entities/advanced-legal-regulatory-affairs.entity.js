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
exports.HealthcareLegalQualityMetrics = exports.IntellectualPropertyManagement = exports.LegalPolicyDevelopment = exports.LitigationCaseManagement = exports.ContractManagementSystem = exports.RegulatoryComplianceManagement = void 0;
const typeorm_1 = require("typeorm");
let RegulatoryComplianceManagement = class RegulatoryComplianceManagement {
};
exports.RegulatoryComplianceManagement = RegulatoryComplianceManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RegulatoryComplianceManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RegulatoryComplianceManagement.prototype, "compliance_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], RegulatoryComplianceManagement.prototype, "regulation_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RegulatoryComplianceManagement.prototype, "regulatory_authority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RegulatoryComplianceManagement.prototype, "regulation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceManagement.prototype, "compliance_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceManagement.prototype, "compliance_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceManagement.prototype, "monitoring_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceManagement.prototype, "regulatory_updates", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceManagement.prototype, "enforcement_actions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceManagement.prototype, "stakeholder_communication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RegulatoryComplianceManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RegulatoryComplianceManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RegulatoryComplianceManagement.prototype, "updated_at", void 0);
exports.RegulatoryComplianceManagement = RegulatoryComplianceManagement = __decorate([
    (0, typeorm_1.Entity)('regulatory_compliance_management')
], RegulatoryComplianceManagement);
let ContractManagementSystem = class ContractManagementSystem {
};
exports.ContractManagementSystem = ContractManagementSystem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ContractManagementSystem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ContractManagementSystem.prototype, "contract_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ContractManagementSystem.prototype, "contract_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ContractManagementSystem.prototype, "contract_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ContractManagementSystem.prototype, "contract_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContractManagementSystem.prototype, "contract_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContractManagementSystem.prototype, "legal_provisions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContractManagementSystem.prototype, "compliance_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContractManagementSystem.prototype, "performance_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContractManagementSystem.prototype, "financial_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ContractManagementSystem.prototype, "risk_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ContractManagementSystem.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ContractManagementSystem.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ContractManagementSystem.prototype, "updated_at", void 0);
exports.ContractManagementSystem = ContractManagementSystem = __decorate([
    (0, typeorm_1.Entity)('contract_management_system')
], ContractManagementSystem);
let LitigationCaseManagement = class LitigationCaseManagement {
};
exports.LitigationCaseManagement = LitigationCaseManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], LitigationCaseManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], LitigationCaseManagement.prototype, "case_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], LitigationCaseManagement.prototype, "case_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LitigationCaseManagement.prototype, "case_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LitigationCaseManagement.prototype, "case_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LitigationCaseManagement.prototype, "case_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LitigationCaseManagement.prototype, "legal_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LitigationCaseManagement.prototype, "discovery_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LitigationCaseManagement.prototype, "cost_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LitigationCaseManagement.prototype, "risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LitigationCaseManagement.prototype, "resolution_outcome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LitigationCaseManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LitigationCaseManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LitigationCaseManagement.prototype, "updated_at", void 0);
exports.LitigationCaseManagement = LitigationCaseManagement = __decorate([
    (0, typeorm_1.Entity)('litigation_case_management')
], LitigationCaseManagement);
let LegalPolicyDevelopment = class LegalPolicyDevelopment {
};
exports.LegalPolicyDevelopment = LegalPolicyDevelopment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], LegalPolicyDevelopment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], LegalPolicyDevelopment.prototype, "policy_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], LegalPolicyDevelopment.prototype, "policy_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LegalPolicyDevelopment.prototype, "policy_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LegalPolicyDevelopment.prototype, "policy_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LegalPolicyDevelopment.prototype, "policy_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LegalPolicyDevelopment.prototype, "legal_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LegalPolicyDevelopment.prototype, "approval_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LegalPolicyDevelopment.prototype, "implementation_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LegalPolicyDevelopment.prototype, "policy_maintenance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], LegalPolicyDevelopment.prototype, "effectiveness_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LegalPolicyDevelopment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LegalPolicyDevelopment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LegalPolicyDevelopment.prototype, "updated_at", void 0);
exports.LegalPolicyDevelopment = LegalPolicyDevelopment = __decorate([
    (0, typeorm_1.Entity)('legal_policy_development')
], LegalPolicyDevelopment);
let IntellectualPropertyManagement = class IntellectualPropertyManagement {
};
exports.IntellectualPropertyManagement = IntellectualPropertyManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IntellectualPropertyManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], IntellectualPropertyManagement.prototype, "ip_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], IntellectualPropertyManagement.prototype, "ip_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntellectualPropertyManagement.prototype, "ip_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntellectualPropertyManagement.prototype, "ip_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntellectualPropertyManagement.prototype, "ip_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntellectualPropertyManagement.prototype, "protection_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntellectualPropertyManagement.prototype, "legal_proceedings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntellectualPropertyManagement.prototype, "commercialization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntellectualPropertyManagement.prototype, "portfolio_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntellectualPropertyManagement.prototype, "risk_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntellectualPropertyManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IntellectualPropertyManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], IntellectualPropertyManagement.prototype, "updated_at", void 0);
exports.IntellectualPropertyManagement = IntellectualPropertyManagement = __decorate([
    (0, typeorm_1.Entity)('intellectual_property_management')
], IntellectualPropertyManagement);
let HealthcareLegalQualityMetrics = class HealthcareLegalQualityMetrics {
};
exports.HealthcareLegalQualityMetrics = HealthcareLegalQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareLegalQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareLegalQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareLegalQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareLegalQualityMetrics.prototype, "compliance_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareLegalQualityMetrics.prototype, "legal_risk_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareLegalQualityMetrics.prototype, "operational_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareLegalQualityMetrics.prototype, "stakeholder_satisfaction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareLegalQualityMetrics.prototype, "strategic_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareLegalQualityMetrics.prototype, "quality_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareLegalQualityMetrics.prototype, "innovation_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareLegalQualityMetrics.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareLegalQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareLegalQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareLegalQualityMetrics = HealthcareLegalQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_legal_quality_metrics')
], HealthcareLegalQualityMetrics);
//# sourceMappingURL=advanced-legal-regulatory-affairs.entity.js.map