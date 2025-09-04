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
exports.MetaverseHealthcareQualityMetrics = exports.VirtualHealthCommunities = exports.DigitalTwinPatientModels = exports.TherapeuticVirtualRealityApplications = exports.VirtualRealityMedicalTrainingSystems = exports.HealthcareMetaversePlatforms = void 0;
const typeorm_1 = require("typeorm");
let HealthcareMetaversePlatforms = class HealthcareMetaversePlatforms {
};
exports.HealthcareMetaversePlatforms = HealthcareMetaversePlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareMetaversePlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareMetaversePlatforms.prototype, "metaverse_platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthcareMetaversePlatforms.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareMetaversePlatforms.prototype, "metaverse_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareMetaversePlatforms.prototype, "virtual_environment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareMetaversePlatforms.prototype, "virtual_healthcare_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareMetaversePlatforms.prototype, "immersive_patient_experiences", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareMetaversePlatforms.prototype, "healthcare_avatars_digital_personas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareMetaversePlatforms.prototype, "virtual_collaboration_spaces", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareMetaversePlatforms.prototype, "interoperability_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareMetaversePlatforms.prototype, "governance_economics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareMetaversePlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareMetaversePlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareMetaversePlatforms.prototype, "updated_at", void 0);
exports.HealthcareMetaversePlatforms = HealthcareMetaversePlatforms = __decorate([
    (0, typeorm_1.Entity)('healthcare_metaverse_platforms')
], HealthcareMetaversePlatforms);
let VirtualRealityMedicalTrainingSystems = class VirtualRealityMedicalTrainingSystems {
};
exports.VirtualRealityMedicalTrainingSystems = VirtualRealityMedicalTrainingSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], VirtualRealityMedicalTrainingSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], VirtualRealityMedicalTrainingSystems.prototype, "vr_training_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], VirtualRealityMedicalTrainingSystems.prototype, "training_system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VirtualRealityMedicalTrainingSystems.prototype, "training_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VirtualRealityMedicalTrainingSystems.prototype, "simulation_fidelity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalTrainingSystems.prototype, "surgical_simulation_platforms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalTrainingSystems.prototype, "clinical_procedure_training", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalTrainingSystems.prototype, "emergency_response_simulations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalTrainingSystems.prototype, "anatomy_physiology_education", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalTrainingSystems.prototype, "assessment_evaluation_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualRealityMedicalTrainingSystems.prototype, "adaptive_learning_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VirtualRealityMedicalTrainingSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VirtualRealityMedicalTrainingSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VirtualRealityMedicalTrainingSystems.prototype, "updated_at", void 0);
exports.VirtualRealityMedicalTrainingSystems = VirtualRealityMedicalTrainingSystems = __decorate([
    (0, typeorm_1.Entity)('virtual_reality_medical_training_systems')
], VirtualRealityMedicalTrainingSystems);
let TherapeuticVirtualRealityApplications = class TherapeuticVirtualRealityApplications {
};
exports.TherapeuticVirtualRealityApplications = TherapeuticVirtualRealityApplications;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TherapeuticVirtualRealityApplications.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TherapeuticVirtualRealityApplications.prototype, "therapeutic_vr_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TherapeuticVirtualRealityApplications.prototype, "application_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticVirtualRealityApplications.prototype, "therapy_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticVirtualRealityApplications.prototype, "treatment_modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticVirtualRealityApplications.prototype, "mental_health_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticVirtualRealityApplications.prototype, "pain_management_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticVirtualRealityApplications.prototype, "cognitive_rehabilitation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticVirtualRealityApplications.prototype, "physical_rehabilitation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticVirtualRealityApplications.prototype, "biometric_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticVirtualRealityApplications.prototype, "therapeutic_outcomes_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticVirtualRealityApplications.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TherapeuticVirtualRealityApplications.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TherapeuticVirtualRealityApplications.prototype, "updated_at", void 0);
exports.TherapeuticVirtualRealityApplications = TherapeuticVirtualRealityApplications = __decorate([
    (0, typeorm_1.Entity)('therapeutic_virtual_reality_applications')
], TherapeuticVirtualRealityApplications);
let DigitalTwinPatientModels = class DigitalTwinPatientModels {
};
exports.DigitalTwinPatientModels = DigitalTwinPatientModels;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DigitalTwinPatientModels.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DigitalTwinPatientModels.prototype, "digital_twin_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DigitalTwinPatientModels.prototype, "patient_twin_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalTwinPatientModels.prototype, "twin_complexity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalTwinPatientModels.prototype, "modeling_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTwinPatientModels.prototype, "anatomical_modeling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTwinPatientModels.prototype, "physiological_simulation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTwinPatientModels.prototype, "pathological_modeling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTwinPatientModels.prototype, "treatment_response_prediction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTwinPatientModels.prototype, "real_time_data_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalTwinPatientModels.prototype, "predictive_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalTwinPatientModels.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DigitalTwinPatientModels.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DigitalTwinPatientModels.prototype, "updated_at", void 0);
exports.DigitalTwinPatientModels = DigitalTwinPatientModels = __decorate([
    (0, typeorm_1.Entity)('digital_twin_patient_models')
], DigitalTwinPatientModels);
let VirtualHealthCommunities = class VirtualHealthCommunities {
};
exports.VirtualHealthCommunities = VirtualHealthCommunities;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], VirtualHealthCommunities.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], VirtualHealthCommunities.prototype, "virtual_community_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], VirtualHealthCommunities.prototype, "community_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VirtualHealthCommunities.prototype, "community_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VirtualHealthCommunities.prototype, "interaction_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualHealthCommunities.prototype, "patient_support_networks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualHealthCommunities.prototype, "caregiver_support_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualHealthCommunities.prototype, "professional_collaboration_spaces", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualHealthCommunities.prototype, "health_education_resources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualHealthCommunities.prototype, "community_governance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], VirtualHealthCommunities.prototype, "engagement_gamification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], VirtualHealthCommunities.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VirtualHealthCommunities.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VirtualHealthCommunities.prototype, "updated_at", void 0);
exports.VirtualHealthCommunities = VirtualHealthCommunities = __decorate([
    (0, typeorm_1.Entity)('virtual_health_communities')
], VirtualHealthCommunities);
let MetaverseHealthcareQualityMetrics = class MetaverseHealthcareQualityMetrics {
};
exports.MetaverseHealthcareQualityMetrics = MetaverseHealthcareQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MetaverseHealthcareQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MetaverseHealthcareQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetaverseHealthcareQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetaverseHealthcareQualityMetrics.prototype, "metaverse_platform_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetaverseHealthcareQualityMetrics.prototype, "vr_training_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetaverseHealthcareQualityMetrics.prototype, "therapeutic_vr_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetaverseHealthcareQualityMetrics.prototype, "digital_twin_accuracy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetaverseHealthcareQualityMetrics.prototype, "virtual_community_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetaverseHealthcareQualityMetrics.prototype, "metaverse_accessibility_inclusion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetaverseHealthcareQualityMetrics.prototype, "healthcare_transformation_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetaverseHealthcareQualityMetrics.prototype, "strategic_metaverse_impact", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MetaverseHealthcareQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MetaverseHealthcareQualityMetrics.prototype, "updated_at", void 0);
exports.MetaverseHealthcareQualityMetrics = MetaverseHealthcareQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('metaverse_healthcare_quality_metrics')
], MetaverseHealthcareQualityMetrics);
//# sourceMappingURL=advanced-healthcare-metaverse-virtual-reality.entity.js.map