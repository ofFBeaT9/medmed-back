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
exports.CybersecurityInformationProtectionMetrics = exports.CyberResilienceFrameworks = exports.IdentityAccessManagementSystems = exports.IncidentResponseManagementSystems = exports.SecurityOperationsCenters = exports.CybersecurityThreatIntelligenceSystems = void 0;
const typeorm_1 = require("typeorm");
let CybersecurityThreatIntelligenceSystems = class CybersecurityThreatIntelligenceSystems {
};
exports.CybersecurityThreatIntelligenceSystems = CybersecurityThreatIntelligenceSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CybersecurityThreatIntelligenceSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CybersecurityThreatIntelligenceSystems.prototype, "threat_intelligence_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CybersecurityThreatIntelligenceSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CybersecurityThreatIntelligenceSystems.prototype, "intelligence_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CybersecurityThreatIntelligenceSystems.prototype, "threat_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityThreatIntelligenceSystems.prototype, "threat_detection_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityThreatIntelligenceSystems.prototype, "intelligence_sources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityThreatIntelligenceSystems.prototype, "threat_analysis_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityThreatIntelligenceSystems.prototype, "automated_response_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityThreatIntelligenceSystems.prototype, "intelligence_sharing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityThreatIntelligenceSystems.prototype, "strategic_intelligence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CybersecurityThreatIntelligenceSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CybersecurityThreatIntelligenceSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CybersecurityThreatIntelligenceSystems.prototype, "updated_at", void 0);
exports.CybersecurityThreatIntelligenceSystems = CybersecurityThreatIntelligenceSystems = __decorate([
    (0, typeorm_1.Entity)('cybersecurity_threat_intelligence_systems')
], CybersecurityThreatIntelligenceSystems);
let SecurityOperationsCenters = class SecurityOperationsCenters {
};
exports.SecurityOperationsCenters = SecurityOperationsCenters;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SecurityOperationsCenters.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SecurityOperationsCenters.prototype, "soc_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SecurityOperationsCenters.prototype, "soc_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SecurityOperationsCenters.prototype, "operational_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SecurityOperationsCenters.prototype, "service_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityOperationsCenters.prototype, "monitoring_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityOperationsCenters.prototype, "staffing_organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityOperationsCenters.prototype, "operational_processes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityOperationsCenters.prototype, "technology_stack", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityOperationsCenters.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityOperationsCenters.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SecurityOperationsCenters.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SecurityOperationsCenters.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SecurityOperationsCenters.prototype, "updated_at", void 0);
exports.SecurityOperationsCenters = SecurityOperationsCenters = __decorate([
    (0, typeorm_1.Entity)('security_operations_centers')
], SecurityOperationsCenters);
let IncidentResponseManagementSystems = class IncidentResponseManagementSystems {
};
exports.IncidentResponseManagementSystems = IncidentResponseManagementSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IncidentResponseManagementSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], IncidentResponseManagementSystems.prototype, "incident_response_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], IncidentResponseManagementSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IncidentResponseManagementSystems.prototype, "incident_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IncidentResponseManagementSystems.prototype, "severity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IncidentResponseManagementSystems.prototype, "incident_lifecycle_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IncidentResponseManagementSystems.prototype, "response_team_coordination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IncidentResponseManagementSystems.prototype, "communication_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IncidentResponseManagementSystems.prototype, "forensics_investigation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IncidentResponseManagementSystems.prototype, "business_continuity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IncidentResponseManagementSystems.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IncidentResponseManagementSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IncidentResponseManagementSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], IncidentResponseManagementSystems.prototype, "updated_at", void 0);
exports.IncidentResponseManagementSystems = IncidentResponseManagementSystems = __decorate([
    (0, typeorm_1.Entity)('incident_response_management_systems')
], IncidentResponseManagementSystems);
let IdentityAccessManagementSystems = class IdentityAccessManagementSystems {
};
exports.IdentityAccessManagementSystems = IdentityAccessManagementSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IdentityAccessManagementSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], IdentityAccessManagementSystems.prototype, "iam_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], IdentityAccessManagementSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IdentityAccessManagementSystems.prototype, "identity_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IdentityAccessManagementSystems.prototype, "authentication_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IdentityAccessManagementSystems.prototype, "identity_lifecycle_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IdentityAccessManagementSystems.prototype, "authentication_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IdentityAccessManagementSystems.prototype, "authorization_frameworks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IdentityAccessManagementSystems.prototype, "privileged_access_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IdentityAccessManagementSystems.prototype, "governance_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IdentityAccessManagementSystems.prototype, "integration_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IdentityAccessManagementSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IdentityAccessManagementSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], IdentityAccessManagementSystems.prototype, "updated_at", void 0);
exports.IdentityAccessManagementSystems = IdentityAccessManagementSystems = __decorate([
    (0, typeorm_1.Entity)('identity_access_management_systems')
], IdentityAccessManagementSystems);
let CyberResilienceFrameworks = class CyberResilienceFrameworks {
};
exports.CyberResilienceFrameworks = CyberResilienceFrameworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CyberResilienceFrameworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CyberResilienceFrameworks.prototype, "resilience_framework_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CyberResilienceFrameworks.prototype, "framework_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CyberResilienceFrameworks.prototype, "resilience_maturity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CyberResilienceFrameworks.prototype, "framework_standard", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CyberResilienceFrameworks.prototype, "resilience_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CyberResilienceFrameworks.prototype, "risk_management_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CyberResilienceFrameworks.prototype, "business_continuity_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CyberResilienceFrameworks.prototype, "crisis_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CyberResilienceFrameworks.prototype, "organizational_learning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CyberResilienceFrameworks.prototype, "ecosystem_collaboration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CyberResilienceFrameworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CyberResilienceFrameworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CyberResilienceFrameworks.prototype, "updated_at", void 0);
exports.CyberResilienceFrameworks = CyberResilienceFrameworks = __decorate([
    (0, typeorm_1.Entity)('cyber_resilience_frameworks')
], CyberResilienceFrameworks);
let CybersecurityInformationProtectionMetrics = class CybersecurityInformationProtectionMetrics {
};
exports.CybersecurityInformationProtectionMetrics = CybersecurityInformationProtectionMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CybersecurityInformationProtectionMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CybersecurityInformationProtectionMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CybersecurityInformationProtectionMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityInformationProtectionMetrics.prototype, "threat_intelligence_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityInformationProtectionMetrics.prototype, "security_operations_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityInformationProtectionMetrics.prototype, "incident_response_maturity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityInformationProtectionMetrics.prototype, "identity_access_security", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityInformationProtectionMetrics.prototype, "cyber_resilience_strength", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityInformationProtectionMetrics.prototype, "cybersecurity_investment_returns", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityInformationProtectionMetrics.prototype, "organizational_security_culture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityInformationProtectionMetrics.prototype, "strategic_cybersecurity_alignment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CybersecurityInformationProtectionMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CybersecurityInformationProtectionMetrics.prototype, "updated_at", void 0);
exports.CybersecurityInformationProtectionMetrics = CybersecurityInformationProtectionMetrics = __decorate([
    (0, typeorm_1.Entity)('cybersecurity_information_protection_metrics')
], CybersecurityInformationProtectionMetrics);
//# sourceMappingURL=advanced-cybersecurity-information-protection.entity.js.map