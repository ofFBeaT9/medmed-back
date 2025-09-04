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
exports.DataGovernancePrivacyManagementMetrics = exports.RegulatoryComplianceAutomation = exports.DataLineageMetadataManagement = exports.DataQualityManagementSystems = exports.PrivacyProtectionSystems = exports.DataGovernanceFrameworks = void 0;
const typeorm_1 = require("typeorm");
let DataGovernanceFrameworks = class DataGovernanceFrameworks {
};
exports.DataGovernanceFrameworks = DataGovernanceFrameworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DataGovernanceFrameworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DataGovernanceFrameworks.prototype, "governance_framework_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DataGovernanceFrameworks.prototype, "framework_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataGovernanceFrameworks.prototype, "governance_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataGovernanceFrameworks.prototype, "maturity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernanceFrameworks.prototype, "governance_organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernanceFrameworks.prototype, "data_strategy_alignment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernanceFrameworks.prototype, "policy_standards_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernanceFrameworks.prototype, "data_lifecycle_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernanceFrameworks.prototype, "risk_compliance_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernanceFrameworks.prototype, "performance_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataGovernanceFrameworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DataGovernanceFrameworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DataGovernanceFrameworks.prototype, "updated_at", void 0);
exports.DataGovernanceFrameworks = DataGovernanceFrameworks = __decorate([
    (0, typeorm_1.Entity)('data_governance_frameworks')
], DataGovernanceFrameworks);
let PrivacyProtectionSystems = class PrivacyProtectionSystems {
};
exports.PrivacyProtectionSystems = PrivacyProtectionSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PrivacyProtectionSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PrivacyProtectionSystems.prototype, "privacy_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PrivacyProtectionSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PrivacyProtectionSystems.prototype, "privacy_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PrivacyProtectionSystems.prototype, "protection_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrivacyProtectionSystems.prototype, "privacy_principles", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrivacyProtectionSystems.prototype, "consent_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrivacyProtectionSystems.prototype, "data_subject_rights", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrivacyProtectionSystems.prototype, "privacy_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrivacyProtectionSystems.prototype, "privacy_impact_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrivacyProtectionSystems.prototype, "breach_incident_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PrivacyProtectionSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PrivacyProtectionSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PrivacyProtectionSystems.prototype, "updated_at", void 0);
exports.PrivacyProtectionSystems = PrivacyProtectionSystems = __decorate([
    (0, typeorm_1.Entity)('privacy_protection_systems')
], PrivacyProtectionSystems);
let DataQualityManagementSystems = class DataQualityManagementSystems {
};
exports.DataQualityManagementSystems = DataQualityManagementSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DataQualityManagementSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DataQualityManagementSystems.prototype, "quality_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DataQualityManagementSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataQualityManagementSystems.prototype, "quality_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataQualityManagementSystems.prototype, "quality_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataQualityManagementSystems.prototype, "quality_dimensions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataQualityManagementSystems.prototype, "quality_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataQualityManagementSystems.prototype, "quality_rules_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataQualityManagementSystems.prototype, "monitoring_alerting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataQualityManagementSystems.prototype, "remediation_improvement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataQualityManagementSystems.prototype, "stakeholder_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataQualityManagementSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DataQualityManagementSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DataQualityManagementSystems.prototype, "updated_at", void 0);
exports.DataQualityManagementSystems = DataQualityManagementSystems = __decorate([
    (0, typeorm_1.Entity)('data_quality_management_systems')
], DataQualityManagementSystems);
let DataLineageMetadataManagement = class DataLineageMetadataManagement {
};
exports.DataLineageMetadataManagement = DataLineageMetadataManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DataLineageMetadataManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DataLineageMetadataManagement.prototype, "lineage_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DataLineageMetadataManagement.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataLineageMetadataManagement.prototype, "lineage_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataLineageMetadataManagement.prototype, "capture_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataLineageMetadataManagement.prototype, "metadata_repository", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataLineageMetadataManagement.prototype, "lineage_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataLineageMetadataManagement.prototype, "visualization_tools", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataLineageMetadataManagement.prototype, "integration_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataLineageMetadataManagement.prototype, "governance_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataLineageMetadataManagement.prototype, "analytics_insights", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataLineageMetadataManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DataLineageMetadataManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DataLineageMetadataManagement.prototype, "updated_at", void 0);
exports.DataLineageMetadataManagement = DataLineageMetadataManagement = __decorate([
    (0, typeorm_1.Entity)('data_lineage_metadata_management')
], DataLineageMetadataManagement);
let RegulatoryComplianceAutomation = class RegulatoryComplianceAutomation {
};
exports.RegulatoryComplianceAutomation = RegulatoryComplianceAutomation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RegulatoryComplianceAutomation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RegulatoryComplianceAutomation.prototype, "compliance_automation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], RegulatoryComplianceAutomation.prototype, "automation_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RegulatoryComplianceAutomation.prototype, "regulatory_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RegulatoryComplianceAutomation.prototype, "automation_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceAutomation.prototype, "regulation_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceAutomation.prototype, "automated_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceAutomation.prototype, "compliance_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceAutomation.prototype, "reporting_documentation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceAutomation.prototype, "remediation_workflows", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegulatoryComplianceAutomation.prototype, "stakeholder_collaboration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RegulatoryComplianceAutomation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RegulatoryComplianceAutomation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RegulatoryComplianceAutomation.prototype, "updated_at", void 0);
exports.RegulatoryComplianceAutomation = RegulatoryComplianceAutomation = __decorate([
    (0, typeorm_1.Entity)('regulatory_compliance_automation')
], RegulatoryComplianceAutomation);
let DataGovernancePrivacyManagementMetrics = class DataGovernancePrivacyManagementMetrics {
};
exports.DataGovernancePrivacyManagementMetrics = DataGovernancePrivacyManagementMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DataGovernancePrivacyManagementMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DataGovernancePrivacyManagementMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataGovernancePrivacyManagementMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernancePrivacyManagementMetrics.prototype, "data_governance_maturity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernancePrivacyManagementMetrics.prototype, "privacy_protection_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernancePrivacyManagementMetrics.prototype, "data_quality_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernancePrivacyManagementMetrics.prototype, "metadata_lineage_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernancePrivacyManagementMetrics.prototype, "regulatory_compliance_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernancePrivacyManagementMetrics.prototype, "data_risk_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernancePrivacyManagementMetrics.prototype, "data_value_realization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataGovernancePrivacyManagementMetrics.prototype, "organizational_data_capability", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DataGovernancePrivacyManagementMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DataGovernancePrivacyManagementMetrics.prototype, "updated_at", void 0);
exports.DataGovernancePrivacyManagementMetrics = DataGovernancePrivacyManagementMetrics = __decorate([
    (0, typeorm_1.Entity)('data_governance_privacy_management_metrics')
], DataGovernancePrivacyManagementMetrics);
//# sourceMappingURL=advanced-data-governance-privacy-management.entity.js.map