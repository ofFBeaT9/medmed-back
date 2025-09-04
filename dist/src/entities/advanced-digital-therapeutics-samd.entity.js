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
exports.DigitalTherapeuticsQualityMetrics = exports.DigitalBiomarkerSystems = exports.PatientEngagementPlatforms = exports.TherapeuticAlgorithmValidation = exports.SoftwareMedicalDeviceManagement = exports.DigitalTherapeuticApplications = void 0;
const typeorm_1 = require("typeorm");
let DigitalTherapeuticApplications = class DigitalTherapeuticApplications {
};
exports.DigitalTherapeuticApplications = DigitalTherapeuticApplications;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DigitalTherapeuticApplications.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DigitalTherapeuticApplications.prototype, "application_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DigitalTherapeuticApplications.prototype, "application_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalTherapeuticApplications.prototype, "therapeutic_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalTherapeuticApplications.prototype, "intervention_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticApplications.prototype, "clinical_indication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticApplications.prototype, "therapeutic_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticApplications.prototype, "software_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticApplications.prototype, "clinical_workflow_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticApplications.prototype, "evidence_generation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticApplications.prototype, "regulatory_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalTherapeuticApplications.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DigitalTherapeuticApplications.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DigitalTherapeuticApplications.prototype, "updated_at", void 0);
exports.DigitalTherapeuticApplications = DigitalTherapeuticApplications = __decorate([
    (0, typeorm_1.Entity)('digital_therapeutic_applications')
], DigitalTherapeuticApplications);
let SoftwareMedicalDeviceManagement = class SoftwareMedicalDeviceManagement {
};
exports.SoftwareMedicalDeviceManagement = SoftwareMedicalDeviceManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SoftwareMedicalDeviceManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SoftwareMedicalDeviceManagement.prototype, "device_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SoftwareMedicalDeviceManagement.prototype, "device_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SoftwareMedicalDeviceManagement.prototype, "device_classification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SoftwareMedicalDeviceManagement.prototype, "software_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SoftwareMedicalDeviceManagement.prototype, "software_lifecycle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SoftwareMedicalDeviceManagement.prototype, "quality_management_system", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SoftwareMedicalDeviceManagement.prototype, "clinical_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SoftwareMedicalDeviceManagement.prototype, "cybersecurity_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SoftwareMedicalDeviceManagement.prototype, "interoperability_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SoftwareMedicalDeviceManagement.prototype, "performance_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SoftwareMedicalDeviceManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SoftwareMedicalDeviceManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SoftwareMedicalDeviceManagement.prototype, "updated_at", void 0);
exports.SoftwareMedicalDeviceManagement = SoftwareMedicalDeviceManagement = __decorate([
    (0, typeorm_1.Entity)('software_medical_device_management')
], SoftwareMedicalDeviceManagement);
let TherapeuticAlgorithmValidation = class TherapeuticAlgorithmValidation {
};
exports.TherapeuticAlgorithmValidation = TherapeuticAlgorithmValidation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TherapeuticAlgorithmValidation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TherapeuticAlgorithmValidation.prototype, "validation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TherapeuticAlgorithmValidation.prototype, "algorithm_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticAlgorithmValidation.prototype, "algorithm_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticAlgorithmValidation.prototype, "validation_phase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticAlgorithmValidation.prototype, "algorithm_specification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticAlgorithmValidation.prototype, "training_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticAlgorithmValidation.prototype, "clinical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticAlgorithmValidation.prototype, "performance_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticAlgorithmValidation.prototype, "generalizability_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticAlgorithmValidation.prototype, "continuous_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticAlgorithmValidation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TherapeuticAlgorithmValidation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TherapeuticAlgorithmValidation.prototype, "updated_at", void 0);
exports.TherapeuticAlgorithmValidation = TherapeuticAlgorithmValidation = __decorate([
    (0, typeorm_1.Entity)('therapeutic_algorithm_validation')
], TherapeuticAlgorithmValidation);
let PatientEngagementPlatforms = class PatientEngagementPlatforms {
};
exports.PatientEngagementPlatforms = PatientEngagementPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientEngagementPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PatientEngagementPlatforms.prototype, "platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PatientEngagementPlatforms.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PatientEngagementPlatforms.prototype, "engagement_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PatientEngagementPlatforms.prototype, "delivery_modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientEngagementPlatforms.prototype, "engagement_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientEngagementPlatforms.prototype, "behavioral_interventions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientEngagementPlatforms.prototype, "educational_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientEngagementPlatforms.prototype, "data_collection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientEngagementPlatforms.prototype, "clinical_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PatientEngagementPlatforms.prototype, "accessibility_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PatientEngagementPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientEngagementPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientEngagementPlatforms.prototype, "updated_at", void 0);
exports.PatientEngagementPlatforms = PatientEngagementPlatforms = __decorate([
    (0, typeorm_1.Entity)('patient_engagement_platforms')
], PatientEngagementPlatforms);
let DigitalBiomarkerSystems = class DigitalBiomarkerSystems {
};
exports.DigitalBiomarkerSystems = DigitalBiomarkerSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DigitalBiomarkerSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DigitalBiomarkerSystems.prototype, "biomarker_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DigitalBiomarkerSystems.prototype, "biomarker_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalBiomarkerSystems.prototype, "biomarker_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalBiomarkerSystems.prototype, "measurement_context", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalBiomarkerSystems.prototype, "data_sources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalBiomarkerSystems.prototype, "signal_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalBiomarkerSystems.prototype, "analytical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalBiomarkerSystems.prototype, "clinical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalBiomarkerSystems.prototype, "algorithm_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalBiomarkerSystems.prototype, "clinical_utility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalBiomarkerSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DigitalBiomarkerSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DigitalBiomarkerSystems.prototype, "updated_at", void 0);
exports.DigitalBiomarkerSystems = DigitalBiomarkerSystems = __decorate([
    (0, typeorm_1.Entity)('digital_biomarker_systems')
], DigitalBiomarkerSystems);
let DigitalTherapeuticsQualityMetrics = class DigitalTherapeuticsQualityMetrics {
};
exports.DigitalTherapeuticsQualityMetrics = DigitalTherapeuticsQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DigitalTherapeuticsQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DigitalTherapeuticsQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalTherapeuticsQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticsQualityMetrics.prototype, "therapeutic_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticsQualityMetrics.prototype, "patient_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticsQualityMetrics.prototype, "clinical_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticsQualityMetrics.prototype, "safety_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticsQualityMetrics.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticsQualityMetrics.prototype, "technology_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticsQualityMetrics.prototype, "economic_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTherapeuticsQualityMetrics.prototype, "innovation_impact", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DigitalTherapeuticsQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DigitalTherapeuticsQualityMetrics.prototype, "updated_at", void 0);
exports.DigitalTherapeuticsQualityMetrics = DigitalTherapeuticsQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('digital_therapeutics_quality_metrics')
], DigitalTherapeuticsQualityMetrics);
//# sourceMappingURL=advanced-digital-therapeutics-samd.entity.js.map