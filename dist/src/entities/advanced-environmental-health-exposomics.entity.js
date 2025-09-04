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
exports.EnvironmentalHealthExposomicsQualityMetrics = exports.ClimateHealthAssessment = exports.EnvironmentalEpidemiologyStudies = exports.EnvironmentalMonitoringNetworks = exports.ExposomeProfilingPlatforms = exports.EnvironmentalExposureAssessment = void 0;
const typeorm_1 = require("typeorm");
let EnvironmentalExposureAssessment = class EnvironmentalExposureAssessment {
};
exports.EnvironmentalExposureAssessment = EnvironmentalExposureAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EnvironmentalExposureAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EnvironmentalExposureAssessment.prototype, "assessment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EnvironmentalExposureAssessment.prototype, "subject_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalExposureAssessment.prototype, "exposure_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalExposureAssessment.prototype, "assessment_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalExposureAssessment.prototype, "exposure_sources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalExposureAssessment.prototype, "chemical_exposures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalExposureAssessment.prototype, "physical_exposures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalExposureAssessment.prototype, "biological_exposures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalExposureAssessment.prototype, "exposure_measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalExposureAssessment.prototype, "biomarker_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalExposureAssessment.prototype, "health_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalExposureAssessment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalExposureAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalExposureAssessment.prototype, "updated_at", void 0);
exports.EnvironmentalExposureAssessment = EnvironmentalExposureAssessment = __decorate([
    (0, typeorm_1.Entity)('environmental_exposure_assessment')
], EnvironmentalExposureAssessment);
let ExposomeProfilingPlatforms = class ExposomeProfilingPlatforms {
};
exports.ExposomeProfilingPlatforms = ExposomeProfilingPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ExposomeProfilingPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ExposomeProfilingPlatforms.prototype, "platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ExposomeProfilingPlatforms.prototype, "study_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ExposomeProfilingPlatforms.prototype, "exposome_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ExposomeProfilingPlatforms.prototype, "analytical_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExposomeProfilingPlatforms.prototype, "sample_collection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExposomeProfilingPlatforms.prototype, "analytical_methods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExposomeProfilingPlatforms.prototype, "data_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExposomeProfilingPlatforms.prototype, "exposure_reconstruction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExposomeProfilingPlatforms.prototype, "health_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ExposomeProfilingPlatforms.prototype, "precision_medicine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ExposomeProfilingPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ExposomeProfilingPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ExposomeProfilingPlatforms.prototype, "updated_at", void 0);
exports.ExposomeProfilingPlatforms = ExposomeProfilingPlatforms = __decorate([
    (0, typeorm_1.Entity)('exposome_profiling_platforms')
], ExposomeProfilingPlatforms);
let EnvironmentalMonitoringNetworks = class EnvironmentalMonitoringNetworks {
};
exports.EnvironmentalMonitoringNetworks = EnvironmentalMonitoringNetworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EnvironmentalMonitoringNetworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EnvironmentalMonitoringNetworks.prototype, "network_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EnvironmentalMonitoringNetworks.prototype, "network_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalMonitoringNetworks.prototype, "monitoring_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalMonitoringNetworks.prototype, "environmental_media", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalMonitoringNetworks.prototype, "monitoring_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalMonitoringNetworks.prototype, "measured_parameters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalMonitoringNetworks.prototype, "data_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalMonitoringNetworks.prototype, "early_warning_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalMonitoringNetworks.prototype, "health_surveillance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalMonitoringNetworks.prototype, "policy_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalMonitoringNetworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalMonitoringNetworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalMonitoringNetworks.prototype, "updated_at", void 0);
exports.EnvironmentalMonitoringNetworks = EnvironmentalMonitoringNetworks = __decorate([
    (0, typeorm_1.Entity)('environmental_monitoring_networks')
], EnvironmentalMonitoringNetworks);
let EnvironmentalEpidemiologyStudies = class EnvironmentalEpidemiologyStudies {
};
exports.EnvironmentalEpidemiologyStudies = EnvironmentalEpidemiologyStudies;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EnvironmentalEpidemiologyStudies.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EnvironmentalEpidemiologyStudies.prototype, "study_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EnvironmentalEpidemiologyStudies.prototype, "study_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalEpidemiologyStudies.prototype, "study_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalEpidemiologyStudies.prototype, "health_outcome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalEpidemiologyStudies.prototype, "study_population", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalEpidemiologyStudies.prototype, "exposure_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalEpidemiologyStudies.prototype, "outcome_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalEpidemiologyStudies.prototype, "confounding_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalEpidemiologyStudies.prototype, "statistical_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalEpidemiologyStudies.prototype, "special_populations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalEpidemiologyStudies.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalEpidemiologyStudies.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalEpidemiologyStudies.prototype, "updated_at", void 0);
exports.EnvironmentalEpidemiologyStudies = EnvironmentalEpidemiologyStudies = __decorate([
    (0, typeorm_1.Entity)('environmental_epidemiology_studies')
], EnvironmentalEpidemiologyStudies);
let ClimateHealthAssessment = class ClimateHealthAssessment {
};
exports.ClimateHealthAssessment = ClimateHealthAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClimateHealthAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClimateHealthAssessment.prototype, "assessment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClimateHealthAssessment.prototype, "assessment_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClimateHealthAssessment.prototype, "climate_hazard", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClimateHealthAssessment.prototype, "assessment_scale", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateHealthAssessment.prototype, "climate_projections", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateHealthAssessment.prototype, "health_impact_pathways", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateHealthAssessment.prototype, "vulnerability_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateHealthAssessment.prototype, "health_impact_quantification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateHealthAssessment.prototype, "adaptation_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClimateHealthAssessment.prototype, "monitoring_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClimateHealthAssessment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClimateHealthAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClimateHealthAssessment.prototype, "updated_at", void 0);
exports.ClimateHealthAssessment = ClimateHealthAssessment = __decorate([
    (0, typeorm_1.Entity)('climate_health_assessment')
], ClimateHealthAssessment);
let EnvironmentalHealthExposomicsQualityMetrics = class EnvironmentalHealthExposomicsQualityMetrics {
};
exports.EnvironmentalHealthExposomicsQualityMetrics = EnvironmentalHealthExposomicsQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "exposure_assessment_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "exposome_profiling_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "monitoring_network_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "epidemiological_study_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "climate_health_assessment_accuracy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "health_protection_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "technological_innovation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "policy_translation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EnvironmentalHealthExposomicsQualityMetrics.prototype, "updated_at", void 0);
exports.EnvironmentalHealthExposomicsQualityMetrics = EnvironmentalHealthExposomicsQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('environmental_health_exposomics_quality_metrics')
], EnvironmentalHealthExposomicsQualityMetrics);
//# sourceMappingURL=advanced-environmental-health-exposomics.entity.js.map