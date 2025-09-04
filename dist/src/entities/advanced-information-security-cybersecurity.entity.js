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
exports.HealthcareCybersecurityQualityMetrics = exports.SecurityAnalyticsMonitoring = exports.DataProtectionPrivacy = exports.AccessControlManagement = exports.ThreatDetectionResponse = exports.CybersecurityFramework = void 0;
const typeorm_1 = require("typeorm");
let CybersecurityFramework = class CybersecurityFramework {
};
exports.CybersecurityFramework = CybersecurityFramework;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CybersecurityFramework.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CybersecurityFramework.prototype, "framework_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CybersecurityFramework.prototype, "framework_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CybersecurityFramework.prototype, "framework_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CybersecurityFramework.prototype, "implementation_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityFramework.prototype, "security_domains", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityFramework.prototype, "governance_structure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityFramework.prototype, "threat_landscape", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityFramework.prototype, "security_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityFramework.prototype, "compliance_mapping", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CybersecurityFramework.prototype, "maturity_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CybersecurityFramework.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CybersecurityFramework.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CybersecurityFramework.prototype, "updated_at", void 0);
exports.CybersecurityFramework = CybersecurityFramework = __decorate([
    (0, typeorm_1.Entity)('cybersecurity_framework')
], CybersecurityFramework);
let ThreatDetectionResponse = class ThreatDetectionResponse {
};
exports.ThreatDetectionResponse = ThreatDetectionResponse;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ThreatDetectionResponse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ThreatDetectionResponse.prototype, "threat_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ThreatDetectionResponse.prototype, "threat_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ThreatDetectionResponse.prototype, "threat_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ThreatDetectionResponse.prototype, "severity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreatDetectionResponse.prototype, "detection_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreatDetectionResponse.prototype, "threat_indicators", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreatDetectionResponse.prototype, "impact_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreatDetectionResponse.prototype, "response_actions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreatDetectionResponse.prototype, "investigation_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ThreatDetectionResponse.prototype, "communication_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ThreatDetectionResponse.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ThreatDetectionResponse.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ThreatDetectionResponse.prototype, "updated_at", void 0);
exports.ThreatDetectionResponse = ThreatDetectionResponse = __decorate([
    (0, typeorm_1.Entity)('threat_detection_response')
], ThreatDetectionResponse);
let AccessControlManagement = class AccessControlManagement {
};
exports.AccessControlManagement = AccessControlManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AccessControlManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AccessControlManagement.prototype, "access_control_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AccessControlManagement.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AccessControlManagement.prototype, "user_identity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AccessControlManagement.prototype, "access_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccessControlManagement.prototype, "identity_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccessControlManagement.prototype, "authorization_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccessControlManagement.prototype, "permission_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccessControlManagement.prototype, "session_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccessControlManagement.prototype, "access_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccessControlManagement.prototype, "privileged_access", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AccessControlManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AccessControlManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AccessControlManagement.prototype, "updated_at", void 0);
exports.AccessControlManagement = AccessControlManagement = __decorate([
    (0, typeorm_1.Entity)('access_control_management')
], AccessControlManagement);
let DataProtectionPrivacy = class DataProtectionPrivacy {
};
exports.DataProtectionPrivacy = DataProtectionPrivacy;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DataProtectionPrivacy.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DataProtectionPrivacy.prototype, "protection_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DataProtectionPrivacy.prototype, "data_classification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataProtectionPrivacy.prototype, "data_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataProtectionPrivacy.prototype, "sensitivity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataProtectionPrivacy.prototype, "encryption_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataProtectionPrivacy.prototype, "data_lifecycle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataProtectionPrivacy.prototype, "privacy_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataProtectionPrivacy.prototype, "compliance_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataProtectionPrivacy.prototype, "data_loss_prevention", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataProtectionPrivacy.prototype, "breach_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataProtectionPrivacy.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DataProtectionPrivacy.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DataProtectionPrivacy.prototype, "updated_at", void 0);
exports.DataProtectionPrivacy = DataProtectionPrivacy = __decorate([
    (0, typeorm_1.Entity)('data_protection_privacy')
], DataProtectionPrivacy);
let SecurityAnalyticsMonitoring = class SecurityAnalyticsMonitoring {
};
exports.SecurityAnalyticsMonitoring = SecurityAnalyticsMonitoring;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SecurityAnalyticsMonitoring.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SecurityAnalyticsMonitoring.prototype, "analytics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SecurityAnalyticsMonitoring.prototype, "monitoring_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SecurityAnalyticsMonitoring.prototype, "analytics_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityAnalyticsMonitoring.prototype, "security_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityAnalyticsMonitoring.prototype, "behavioral_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityAnalyticsMonitoring.prototype, "threat_intelligence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityAnalyticsMonitoring.prototype, "security_dashboards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityAnalyticsMonitoring.prototype, "automated_response", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecurityAnalyticsMonitoring.prototype, "continuous_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SecurityAnalyticsMonitoring.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SecurityAnalyticsMonitoring.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SecurityAnalyticsMonitoring.prototype, "updated_at", void 0);
exports.SecurityAnalyticsMonitoring = SecurityAnalyticsMonitoring = __decorate([
    (0, typeorm_1.Entity)('security_analytics_monitoring')
], SecurityAnalyticsMonitoring);
let HealthcareCybersecurityQualityMetrics = class HealthcareCybersecurityQualityMetrics {
};
exports.HealthcareCybersecurityQualityMetrics = HealthcareCybersecurityQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareCybersecurityQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareCybersecurityQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareCybersecurityQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareCybersecurityQualityMetrics.prototype, "security_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareCybersecurityQualityMetrics.prototype, "compliance_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareCybersecurityQualityMetrics.prototype, "risk_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareCybersecurityQualityMetrics.prototype, "operational_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareCybersecurityQualityMetrics.prototype, "user_awareness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareCybersecurityQualityMetrics.prototype, "technology_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareCybersecurityQualityMetrics.prototype, "business_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareCybersecurityQualityMetrics.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareCybersecurityQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareCybersecurityQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareCybersecurityQualityMetrics = HealthcareCybersecurityQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_cybersecurity_quality_metrics')
], HealthcareCybersecurityQualityMetrics);
//# sourceMappingURL=advanced-information-security-cybersecurity.entity.js.map