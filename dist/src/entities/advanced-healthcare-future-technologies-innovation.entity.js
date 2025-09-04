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
exports.FutureHealthcareInnovationQualityMetrics = exports.HealthcareResearchInnovationPlatforms = exports.TransformationalHealthcareSolutions = exports.FutureCareDeliveryModels = exports.HealthcareInnovationManagementSystems = exports.EmergingHealthcareTechnologies = void 0;
const typeorm_1 = require("typeorm");
let EmergingHealthcareTechnologies = class EmergingHealthcareTechnologies {
};
exports.EmergingHealthcareTechnologies = EmergingHealthcareTechnologies;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EmergingHealthcareTechnologies.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EmergingHealthcareTechnologies.prototype, "technology_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EmergingHealthcareTechnologies.prototype, "technology_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EmergingHealthcareTechnologies.prototype, "technology_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EmergingHealthcareTechnologies.prototype, "maturity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingHealthcareTechnologies.prototype, "next_generation_genomics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingHealthcareTechnologies.prototype, "advanced_biotechnology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingHealthcareTechnologies.prototype, "digital_therapeutics_innovations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingHealthcareTechnologies.prototype, "next_gen_medical_devices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingHealthcareTechnologies.prototype, "computational_medicine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EmergingHealthcareTechnologies.prototype, "technology_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EmergingHealthcareTechnologies.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EmergingHealthcareTechnologies.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EmergingHealthcareTechnologies.prototype, "updated_at", void 0);
exports.EmergingHealthcareTechnologies = EmergingHealthcareTechnologies = __decorate([
    (0, typeorm_1.Entity)('emerging_healthcare_technologies')
], EmergingHealthcareTechnologies);
let HealthcareInnovationManagementSystems = class HealthcareInnovationManagementSystems {
};
exports.HealthcareInnovationManagementSystems = HealthcareInnovationManagementSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareInnovationManagementSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareInnovationManagementSystems.prototype, "innovation_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthcareInnovationManagementSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareInnovationManagementSystems.prototype, "innovation_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareInnovationManagementSystems.prototype, "innovation_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationManagementSystems.prototype, "innovation_pipeline_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationManagementSystems.prototype, "collaborative_innovation_networks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationManagementSystems.prototype, "innovation_laboratories", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationManagementSystems.prototype, "technology_scouting_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationManagementSystems.prototype, "innovation_funding_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationManagementSystems.prototype, "innovation_culture_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareInnovationManagementSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareInnovationManagementSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareInnovationManagementSystems.prototype, "updated_at", void 0);
exports.HealthcareInnovationManagementSystems = HealthcareInnovationManagementSystems = __decorate([
    (0, typeorm_1.Entity)('healthcare_innovation_management_systems')
], HealthcareInnovationManagementSystems);
let FutureCareDeliveryModels = class FutureCareDeliveryModels {
};
exports.FutureCareDeliveryModels = FutureCareDeliveryModels;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FutureCareDeliveryModels.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], FutureCareDeliveryModels.prototype, "care_model_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], FutureCareDeliveryModels.prototype, "model_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], FutureCareDeliveryModels.prototype, "care_delivery_paradigm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], FutureCareDeliveryModels.prototype, "technology_integration_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureCareDeliveryModels.prototype, "autonomous_healthcare_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureCareDeliveryModels.prototype, "precision_medicine_platforms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureCareDeliveryModels.prototype, "distributed_care_networks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureCareDeliveryModels.prototype, "continuous_health_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureCareDeliveryModels.prototype, "regenerative_medicine_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureCareDeliveryModels.prototype, "holistic_wellness_ecosystems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], FutureCareDeliveryModels.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FutureCareDeliveryModels.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FutureCareDeliveryModels.prototype, "updated_at", void 0);
exports.FutureCareDeliveryModels = FutureCareDeliveryModels = __decorate([
    (0, typeorm_1.Entity)('future_care_delivery_models')
], FutureCareDeliveryModels);
let TransformationalHealthcareSolutions = class TransformationalHealthcareSolutions {
};
exports.TransformationalHealthcareSolutions = TransformationalHealthcareSolutions;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TransformationalHealthcareSolutions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TransformationalHealthcareSolutions.prototype, "solution_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TransformationalHealthcareSolutions.prototype, "solution_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TransformationalHealthcareSolutions.prototype, "transformation_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TransformationalHealthcareSolutions.prototype, "impact_timeline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TransformationalHealthcareSolutions.prototype, "healthcare_democratization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TransformationalHealthcareSolutions.prototype, "planetary_health_solutions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TransformationalHealthcareSolutions.prototype, "health_system_reimagination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TransformationalHealthcareSolutions.prototype, "next_generation_therapeutics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TransformationalHealthcareSolutions.prototype, "global_health_initiatives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TransformationalHealthcareSolutions.prototype, "healthcare_innovation_ecosystems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TransformationalHealthcareSolutions.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TransformationalHealthcareSolutions.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TransformationalHealthcareSolutions.prototype, "updated_at", void 0);
exports.TransformationalHealthcareSolutions = TransformationalHealthcareSolutions = __decorate([
    (0, typeorm_1.Entity)('transformational_healthcare_solutions')
], TransformationalHealthcareSolutions);
let HealthcareResearchInnovationPlatforms = class HealthcareResearchInnovationPlatforms {
};
exports.HealthcareResearchInnovationPlatforms = HealthcareResearchInnovationPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareResearchInnovationPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareResearchInnovationPlatforms.prototype, "research_platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthcareResearchInnovationPlatforms.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareResearchInnovationPlatforms.prototype, "research_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareResearchInnovationPlatforms.prototype, "collaboration_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareResearchInnovationPlatforms.prototype, "advanced_research_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareResearchInnovationPlatforms.prototype, "collaborative_research_networks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareResearchInnovationPlatforms.prototype, "open_science_initiatives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareResearchInnovationPlatforms.prototype, "innovation_translation_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareResearchInnovationPlatforms.prototype, "ethical_research_frameworks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareResearchInnovationPlatforms.prototype, "research_impact_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareResearchInnovationPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareResearchInnovationPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareResearchInnovationPlatforms.prototype, "updated_at", void 0);
exports.HealthcareResearchInnovationPlatforms = HealthcareResearchInnovationPlatforms = __decorate([
    (0, typeorm_1.Entity)('healthcare_research_innovation_platforms')
], HealthcareResearchInnovationPlatforms);
let FutureHealthcareInnovationQualityMetrics = class FutureHealthcareInnovationQualityMetrics {
};
exports.FutureHealthcareInnovationQualityMetrics = FutureHealthcareInnovationQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FutureHealthcareInnovationQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], FutureHealthcareInnovationQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], FutureHealthcareInnovationQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareInnovationQualityMetrics.prototype, "emerging_technology_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareInnovationQualityMetrics.prototype, "innovation_management_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareInnovationQualityMetrics.prototype, "future_care_model_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareInnovationQualityMetrics.prototype, "transformational_solution_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareInnovationQualityMetrics.prototype, "research_innovation_productivity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareInnovationQualityMetrics.prototype, "innovation_sustainability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareInnovationQualityMetrics.prototype, "future_readiness_indicators", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], FutureHealthcareInnovationQualityMetrics.prototype, "strategic_innovation_leadership", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FutureHealthcareInnovationQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FutureHealthcareInnovationQualityMetrics.prototype, "updated_at", void 0);
exports.FutureHealthcareInnovationQualityMetrics = FutureHealthcareInnovationQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('future_healthcare_innovation_quality_metrics')
], FutureHealthcareInnovationQualityMetrics);
//# sourceMappingURL=advanced-healthcare-future-technologies-innovation.entity.js.map