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
exports.HealthcareVrQualityMetrics = exports.HapticMedicalTraining = exports.MedicalEducationVrPlatform = exports.ImmersivePatientTherapy = exports.AugmentedRealitySurgicalAssistance = exports.VirtualRealityMedicalSimulation = void 0;
const typeorm_1 = require("typeorm");
let VirtualRealityMedicalSimulation = class VirtualRealityMedicalSimulation {
};
exports.VirtualRealityMedicalSimulation = VirtualRealityMedicalSimulation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], VirtualRealityMedicalSimulation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], VirtualRealityMedicalSimulation.prototype, "simulation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], VirtualRealityMedicalSimulation.prototype, "simulation_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VirtualRealityMedicalSimulation.prototype, "simulation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VirtualRealityMedicalSimulation.prototype, "medical_specialty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalSimulation.prototype, "simulation_environment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalSimulation.prototype, "learning_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalSimulation.prototype, "simulation_scenarios", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalSimulation.prototype, "interactive_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalSimulation.prototype, "performance_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalSimulation.prototype, "technology_platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VirtualRealityMedicalSimulation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VirtualRealityMedicalSimulation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VirtualRealityMedicalSimulation.prototype, "updated_at", void 0);
exports.VirtualRealityMedicalSimulation = VirtualRealityMedicalSimulation = __decorate([
    (0, typeorm_1.Entity)('virtual_reality_medical_simulation')
], VirtualRealityMedicalSimulation);
let AugmentedRealitySurgicalAssistance = class AugmentedRealitySurgicalAssistance {
};
exports.AugmentedRealitySurgicalAssistance = AugmentedRealitySurgicalAssistance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AugmentedRealitySurgicalAssistance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AugmentedRealitySurgicalAssistance.prototype, "ar_session_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AugmentedRealitySurgicalAssistance.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AugmentedRealitySurgicalAssistance.prototype, "surgical_procedure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AugmentedRealitySurgicalAssistance.prototype, "ar_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AugmentedRealitySurgicalAssistance.prototype, "preoperative_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AugmentedRealitySurgicalAssistance.prototype, "intraoperative_guidance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AugmentedRealitySurgicalAssistance.prototype, "visualization_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AugmentedRealitySurgicalAssistance.prototype, "tracking_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AugmentedRealitySurgicalAssistance.prototype, "safety_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AugmentedRealitySurgicalAssistance.prototype, "outcome_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AugmentedRealitySurgicalAssistance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AugmentedRealitySurgicalAssistance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AugmentedRealitySurgicalAssistance.prototype, "updated_at", void 0);
exports.AugmentedRealitySurgicalAssistance = AugmentedRealitySurgicalAssistance = __decorate([
    (0, typeorm_1.Entity)('augmented_reality_surgical_assistance')
], AugmentedRealitySurgicalAssistance);
let ImmersivePatientTherapy = class ImmersivePatientTherapy {
};
exports.ImmersivePatientTherapy = ImmersivePatientTherapy;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ImmersivePatientTherapy.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ImmersivePatientTherapy.prototype, "therapy_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ImmersivePatientTherapy.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ImmersivePatientTherapy.prototype, "therapy_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ImmersivePatientTherapy.prototype, "immersive_technology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmersivePatientTherapy.prototype, "therapeutic_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmersivePatientTherapy.prototype, "therapy_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmersivePatientTherapy.prototype, "immersive_environments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmersivePatientTherapy.prototype, "biometric_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmersivePatientTherapy.prototype, "progress_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmersivePatientTherapy.prototype, "personalization_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ImmersivePatientTherapy.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ImmersivePatientTherapy.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ImmersivePatientTherapy.prototype, "updated_at", void 0);
exports.ImmersivePatientTherapy = ImmersivePatientTherapy = __decorate([
    (0, typeorm_1.Entity)('immersive_patient_therapy')
], ImmersivePatientTherapy);
let MedicalEducationVrPlatform = class MedicalEducationVrPlatform {
};
exports.MedicalEducationVrPlatform = MedicalEducationVrPlatform;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MedicalEducationVrPlatform.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MedicalEducationVrPlatform.prototype, "education_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MedicalEducationVrPlatform.prototype, "course_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalEducationVrPlatform.prototype, "education_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalEducationVrPlatform.prototype, "subject_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEducationVrPlatform.prototype, "curriculum_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEducationVrPlatform.prototype, "immersive_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEducationVrPlatform.prototype, "learning_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEducationVrPlatform.prototype, "collaborative_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEducationVrPlatform.prototype, "assessment_tools", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEducationVrPlatform.prototype, "accessibility_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalEducationVrPlatform.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MedicalEducationVrPlatform.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MedicalEducationVrPlatform.prototype, "updated_at", void 0);
exports.MedicalEducationVrPlatform = MedicalEducationVrPlatform = __decorate([
    (0, typeorm_1.Entity)('medical_education_vr_platform')
], MedicalEducationVrPlatform);
let HapticMedicalTraining = class HapticMedicalTraining {
};
exports.HapticMedicalTraining = HapticMedicalTraining;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HapticMedicalTraining.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HapticMedicalTraining.prototype, "haptic_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HapticMedicalTraining.prototype, "training_procedure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HapticMedicalTraining.prototype, "haptic_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HapticMedicalTraining.prototype, "skill_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HapticMedicalTraining.prototype, "haptic_simulation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HapticMedicalTraining.prototype, "training_scenarios", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HapticMedicalTraining.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HapticMedicalTraining.prototype, "feedback_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HapticMedicalTraining.prototype, "hardware_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HapticMedicalTraining.prototype, "validation_studies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HapticMedicalTraining.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HapticMedicalTraining.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HapticMedicalTraining.prototype, "updated_at", void 0);
exports.HapticMedicalTraining = HapticMedicalTraining = __decorate([
    (0, typeorm_1.Entity)('haptic_medical_training')
], HapticMedicalTraining);
let HealthcareVrQualityMetrics = class HealthcareVrQualityMetrics {
};
exports.HealthcareVrQualityMetrics = HealthcareVrQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareVrQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareVrQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareVrQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareVrQualityMetrics.prototype, "simulation_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareVrQualityMetrics.prototype, "user_experience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareVrQualityMetrics.prototype, "technical_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareVrQualityMetrics.prototype, "clinical_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareVrQualityMetrics.prototype, "educational_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareVrQualityMetrics.prototype, "cost_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareVrQualityMetrics.prototype, "safety_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareVrQualityMetrics.prototype, "innovation_advancement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareVrQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareVrQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareVrQualityMetrics = HealthcareVrQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_vr_quality_metrics')
], HealthcareVrQualityMetrics);
//# sourceMappingURL=advanced-virtual-reality-simulation.entity.js.map