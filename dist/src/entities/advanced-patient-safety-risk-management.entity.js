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
exports.PatientSafetyRiskManagementQualityMetrics = exports.HarmPreventionPrograms = exports.HighReliabilityOrganizationSystems = exports.SafetyCultureMeasurement = exports.ProactiveRiskAssessment = exports.PatientSafetyIncidentReporting = void 0;
const typeorm_1 = require("typeorm");
let PatientSafetyIncidentReporting = class PatientSafetyIncidentReporting {
};
exports.PatientSafetyIncidentReporting = PatientSafetyIncidentReporting;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientSafetyIncidentReporting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PatientSafetyIncidentReporting.prototype, "incident_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PatientSafetyIncidentReporting.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PatientSafetyIncidentReporting.prototype, "incident_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PatientSafetyIncidentReporting.prototype, "severity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyIncidentReporting.prototype, "incident_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyIncidentReporting.prototype, "patient_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyIncidentReporting.prototype, "initial_response", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyIncidentReporting.prototype, "investigation_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyIncidentReporting.prototype, "corrective_actions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyIncidentReporting.prototype, "outcome_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PatientSafetyIncidentReporting.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientSafetyIncidentReporting.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientSafetyIncidentReporting.prototype, "updated_at", void 0);
exports.PatientSafetyIncidentReporting = PatientSafetyIncidentReporting = __decorate([
    (0, typeorm_1.Entity)('patient_safety_incident_reporting')
], PatientSafetyIncidentReporting);
let ProactiveRiskAssessment = class ProactiveRiskAssessment {
};
exports.ProactiveRiskAssessment = ProactiveRiskAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProactiveRiskAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ProactiveRiskAssessment.prototype, "assessment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ProactiveRiskAssessment.prototype, "process_activity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ProactiveRiskAssessment.prototype, "assessment_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ProactiveRiskAssessment.prototype, "risk_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProactiveRiskAssessment.prototype, "process_mapping", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProactiveRiskAssessment.prototype, "hazard_identification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProactiveRiskAssessment.prototype, "risk_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProactiveRiskAssessment.prototype, "existing_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProactiveRiskAssessment.prototype, "risk_mitigation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ProactiveRiskAssessment.prototype, "monitoring_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ProactiveRiskAssessment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProactiveRiskAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProactiveRiskAssessment.prototype, "updated_at", void 0);
exports.ProactiveRiskAssessment = ProactiveRiskAssessment = __decorate([
    (0, typeorm_1.Entity)('proactive_risk_assessment')
], ProactiveRiskAssessment);
let SafetyCultureMeasurement = class SafetyCultureMeasurement {
};
exports.SafetyCultureMeasurement = SafetyCultureMeasurement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SafetyCultureMeasurement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SafetyCultureMeasurement.prototype, "measurement_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SafetyCultureMeasurement.prototype, "assessment_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SafetyCultureMeasurement.prototype, "measurement_tool", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SafetyCultureMeasurement.prototype, "target_population", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SafetyCultureMeasurement.prototype, "culture_dimensions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SafetyCultureMeasurement.prototype, "measurement_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SafetyCultureMeasurement.prototype, "culture_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SafetyCultureMeasurement.prototype, "improvement_opportunities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SafetyCultureMeasurement.prototype, "intervention_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SafetyCultureMeasurement.prototype, "outcome_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SafetyCultureMeasurement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SafetyCultureMeasurement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SafetyCultureMeasurement.prototype, "updated_at", void 0);
exports.SafetyCultureMeasurement = SafetyCultureMeasurement = __decorate([
    (0, typeorm_1.Entity)('safety_culture_measurement')
], SafetyCultureMeasurement);
let HighReliabilityOrganizationSystems = class HighReliabilityOrganizationSystems {
};
exports.HighReliabilityOrganizationSystems = HighReliabilityOrganizationSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HighReliabilityOrganizationSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HighReliabilityOrganizationSystems.prototype, "system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HighReliabilityOrganizationSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HighReliabilityOrganizationSystems.prototype, "hro_principle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HighReliabilityOrganizationSystems.prototype, "implementation_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HighReliabilityOrganizationSystems.prototype, "mindful_organizing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HighReliabilityOrganizationSystems.prototype, "safety_management_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HighReliabilityOrganizationSystems.prototype, "operational_excellence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HighReliabilityOrganizationSystems.prototype, "leadership_practices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HighReliabilityOrganizationSystems.prototype, "team_practices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HighReliabilityOrganizationSystems.prototype, "measurement_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HighReliabilityOrganizationSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HighReliabilityOrganizationSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HighReliabilityOrganizationSystems.prototype, "updated_at", void 0);
exports.HighReliabilityOrganizationSystems = HighReliabilityOrganizationSystems = __decorate([
    (0, typeorm_1.Entity)('high_reliability_organization_systems')
], HighReliabilityOrganizationSystems);
let HarmPreventionPrograms = class HarmPreventionPrograms {
};
exports.HarmPreventionPrograms = HarmPreventionPrograms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HarmPreventionPrograms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HarmPreventionPrograms.prototype, "program_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HarmPreventionPrograms.prototype, "program_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HarmPreventionPrograms.prototype, "harm_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HarmPreventionPrograms.prototype, "prevention_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HarmPreventionPrograms.prototype, "evidence_base", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HarmPreventionPrograms.prototype, "intervention_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HarmPreventionPrograms.prototype, "implementation_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HarmPreventionPrograms.prototype, "outcome_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HarmPreventionPrograms.prototype, "sustainability_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HarmPreventionPrograms.prototype, "program_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HarmPreventionPrograms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HarmPreventionPrograms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HarmPreventionPrograms.prototype, "updated_at", void 0);
exports.HarmPreventionPrograms = HarmPreventionPrograms = __decorate([
    (0, typeorm_1.Entity)('harm_prevention_programs')
], HarmPreventionPrograms);
let PatientSafetyRiskManagementQualityMetrics = class PatientSafetyRiskManagementQualityMetrics {
};
exports.PatientSafetyRiskManagementQualityMetrics = PatientSafetyRiskManagementQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientSafetyRiskManagementQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PatientSafetyRiskManagementQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PatientSafetyRiskManagementQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyRiskManagementQualityMetrics.prototype, "incident_reporting_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyRiskManagementQualityMetrics.prototype, "proactive_risk_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyRiskManagementQualityMetrics.prototype, "safety_culture_strength", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyRiskManagementQualityMetrics.prototype, "high_reliability_implementation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyRiskManagementQualityMetrics.prototype, "harm_prevention_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyRiskManagementQualityMetrics.prototype, "safety_performance_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyRiskManagementQualityMetrics.prototype, "organizational_resilience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientSafetyRiskManagementQualityMetrics.prototype, "continuous_improvement_culture", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientSafetyRiskManagementQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientSafetyRiskManagementQualityMetrics.prototype, "updated_at", void 0);
exports.PatientSafetyRiskManagementQualityMetrics = PatientSafetyRiskManagementQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('patient_safety_risk_management_quality_metrics')
], PatientSafetyRiskManagementQualityMetrics);
//# sourceMappingURL=advanced-patient-safety-risk-management.entity.js.map