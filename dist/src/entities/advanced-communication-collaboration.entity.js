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
exports.CommunicationCollaborationQualityMetrics = exports.SecureMessagingInfrastructure = exports.TelehealthCollaborationSystems = exports.PatientCommunicationEngagement = exports.CareTeamCoordinationPlatforms = exports.ClinicalCommunicationSystems = void 0;
const typeorm_1 = require("typeorm");
let ClinicalCommunicationSystems = class ClinicalCommunicationSystems {
};
exports.ClinicalCommunicationSystems = ClinicalCommunicationSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClinicalCommunicationSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClinicalCommunicationSystems.prototype, "communication_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClinicalCommunicationSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalCommunicationSystems.prototype, "communication_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalCommunicationSystems.prototype, "priority_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalCommunicationSystems.prototype, "messaging_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalCommunicationSystems.prototype, "clinical_context", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalCommunicationSystems.prototype, "workflow_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalCommunicationSystems.prototype, "security_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalCommunicationSystems.prototype, "communication_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalCommunicationSystems.prototype, "interoperability_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalCommunicationSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalCommunicationSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalCommunicationSystems.prototype, "updated_at", void 0);
exports.ClinicalCommunicationSystems = ClinicalCommunicationSystems = __decorate([
    (0, typeorm_1.Entity)('clinical_communication_systems')
], ClinicalCommunicationSystems);
let CareTeamCoordinationPlatforms = class CareTeamCoordinationPlatforms {
};
exports.CareTeamCoordinationPlatforms = CareTeamCoordinationPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CareTeamCoordinationPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CareTeamCoordinationPlatforms.prototype, "coordination_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CareTeamCoordinationPlatforms.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CareTeamCoordinationPlatforms.prototype, "care_setting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CareTeamCoordinationPlatforms.prototype, "coordination_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CareTeamCoordinationPlatforms.prototype, "care_team_composition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CareTeamCoordinationPlatforms.prototype, "coordination_workflows", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CareTeamCoordinationPlatforms.prototype, "collaborative_tools", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CareTeamCoordinationPlatforms.prototype, "care_coordination_processes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CareTeamCoordinationPlatforms.prototype, "patient_family_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CareTeamCoordinationPlatforms.prototype, "coordination_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CareTeamCoordinationPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CareTeamCoordinationPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CareTeamCoordinationPlatforms.prototype, "updated_at", void 0);
exports.CareTeamCoordinationPlatforms = CareTeamCoordinationPlatforms = __decorate([
    (0, typeorm_1.Entity)('care_team_coordination_platforms')
], CareTeamCoordinationPlatforms);
let PatientCommunicationEngagement = class PatientCommunicationEngagement {
};
exports.PatientCommunicationEngagement = PatientCommunicationEngagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientCommunicationEngagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PatientCommunicationEngagement.prototype, "engagement_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PatientCommunicationEngagement.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PatientCommunicationEngagement.prototype, "communication_channel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PatientCommunicationEngagement.prototype, "engagement_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientCommunicationEngagement.prototype, "patient_portal_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientCommunicationEngagement.prototype, "mobile_health_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientCommunicationEngagement.prototype, "personalized_communication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientCommunicationEngagement.prototype, "educational_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientCommunicationEngagement.prototype, "automated_communications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientCommunicationEngagement.prototype, "engagement_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PatientCommunicationEngagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientCommunicationEngagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientCommunicationEngagement.prototype, "updated_at", void 0);
exports.PatientCommunicationEngagement = PatientCommunicationEngagement = __decorate([
    (0, typeorm_1.Entity)('patient_communication_engagement')
], PatientCommunicationEngagement);
let TelehealthCollaborationSystems = class TelehealthCollaborationSystems {
};
exports.TelehealthCollaborationSystems = TelehealthCollaborationSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TelehealthCollaborationSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TelehealthCollaborationSystems.prototype, "telehealth_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TelehealthCollaborationSystems.prototype, "session_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TelehealthCollaborationSystems.prototype, "session_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TelehealthCollaborationSystems.prototype, "technology_platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TelehealthCollaborationSystems.prototype, "virtual_consultation_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TelehealthCollaborationSystems.prototype, "remote_monitoring_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TelehealthCollaborationSystems.prototype, "collaborative_care_tools", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TelehealthCollaborationSystems.prototype, "technical_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TelehealthCollaborationSystems.prototype, "quality_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TelehealthCollaborationSystems.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TelehealthCollaborationSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TelehealthCollaborationSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TelehealthCollaborationSystems.prototype, "updated_at", void 0);
exports.TelehealthCollaborationSystems = TelehealthCollaborationSystems = __decorate([
    (0, typeorm_1.Entity)('telehealth_collaboration_systems')
], TelehealthCollaborationSystems);
let SecureMessagingInfrastructure = class SecureMessagingInfrastructure {
};
exports.SecureMessagingInfrastructure = SecureMessagingInfrastructure;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SecureMessagingInfrastructure.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SecureMessagingInfrastructure.prototype, "messaging_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SecureMessagingInfrastructure.prototype, "infrastructure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SecureMessagingInfrastructure.prototype, "deployment_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SecureMessagingInfrastructure.prototype, "security_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecureMessagingInfrastructure.prototype, "encryption_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecureMessagingInfrastructure.prototype, "access_control_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecureMessagingInfrastructure.prototype, "compliance_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecureMessagingInfrastructure.prototype, "scalability_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecureMessagingInfrastructure.prototype, "integration_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SecureMessagingInfrastructure.prototype, "monitoring_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SecureMessagingInfrastructure.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SecureMessagingInfrastructure.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SecureMessagingInfrastructure.prototype, "updated_at", void 0);
exports.SecureMessagingInfrastructure = SecureMessagingInfrastructure = __decorate([
    (0, typeorm_1.Entity)('secure_messaging_infrastructure')
], SecureMessagingInfrastructure);
let CommunicationCollaborationQualityMetrics = class CommunicationCollaborationQualityMetrics {
};
exports.CommunicationCollaborationQualityMetrics = CommunicationCollaborationQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CommunicationCollaborationQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CommunicationCollaborationQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CommunicationCollaborationQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunicationCollaborationQualityMetrics.prototype, "clinical_communication_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunicationCollaborationQualityMetrics.prototype, "care_coordination_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunicationCollaborationQualityMetrics.prototype, "patient_engagement_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunicationCollaborationQualityMetrics.prototype, "telehealth_quality_indicators", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunicationCollaborationQualityMetrics.prototype, "secure_messaging_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunicationCollaborationQualityMetrics.prototype, "collaboration_technology_adoption", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunicationCollaborationQualityMetrics.prototype, "communication_roi_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CommunicationCollaborationQualityMetrics.prototype, "strategic_communication_alignment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CommunicationCollaborationQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CommunicationCollaborationQualityMetrics.prototype, "updated_at", void 0);
exports.CommunicationCollaborationQualityMetrics = CommunicationCollaborationQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('communication_collaboration_quality_metrics')
], CommunicationCollaborationQualityMetrics);
//# sourceMappingURL=advanced-communication-collaboration.entity.js.map