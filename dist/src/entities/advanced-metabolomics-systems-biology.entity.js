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
exports.MetabolomicsSystemsBiologyQualityMetrics = exports.MetabolicBiomarkerDiscovery = exports.MultiOmicsIntegration = exports.SystemsBiologyModeling = exports.MetabolicPathwayAnalysis = exports.MetabolomicsProfiling = void 0;
const typeorm_1 = require("typeorm");
let MetabolomicsProfiling = class MetabolomicsProfiling {
};
exports.MetabolomicsProfiling = MetabolomicsProfiling;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MetabolomicsProfiling.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MetabolomicsProfiling.prototype, "profiling_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MetabolomicsProfiling.prototype, "sample_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetabolomicsProfiling.prototype, "profiling_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetabolomicsProfiling.prototype, "analytical_platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsProfiling.prototype, "sample_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsProfiling.prototype, "analytical_methods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsProfiling.prototype, "metabolite_identification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsProfiling.prototype, "data_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsProfiling.prototype, "quantitative_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsProfiling.prototype, "clinical_correlation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetabolomicsProfiling.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MetabolomicsProfiling.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MetabolomicsProfiling.prototype, "updated_at", void 0);
exports.MetabolomicsProfiling = MetabolomicsProfiling = __decorate([
    (0, typeorm_1.Entity)('metabolomics_profiling')
], MetabolomicsProfiling);
let MetabolicPathwayAnalysis = class MetabolicPathwayAnalysis {
};
exports.MetabolicPathwayAnalysis = MetabolicPathwayAnalysis;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MetabolicPathwayAnalysis.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MetabolicPathwayAnalysis.prototype, "analysis_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MetabolicPathwayAnalysis.prototype, "pathway_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetabolicPathwayAnalysis.prototype, "pathway_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetabolicPathwayAnalysis.prototype, "analysis_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicPathwayAnalysis.prototype, "pathway_components", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicPathwayAnalysis.prototype, "enrichment_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicPathwayAnalysis.prototype, "network_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicPathwayAnalysis.prototype, "flux_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicPathwayAnalysis.prototype, "regulatory_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicPathwayAnalysis.prototype, "disease_associations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetabolicPathwayAnalysis.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MetabolicPathwayAnalysis.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MetabolicPathwayAnalysis.prototype, "updated_at", void 0);
exports.MetabolicPathwayAnalysis = MetabolicPathwayAnalysis = __decorate([
    (0, typeorm_1.Entity)('metabolic_pathway_analysis')
], MetabolicPathwayAnalysis);
let SystemsBiologyModeling = class SystemsBiologyModeling {
};
exports.SystemsBiologyModeling = SystemsBiologyModeling;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SystemsBiologyModeling.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SystemsBiologyModeling.prototype, "model_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SystemsBiologyModeling.prototype, "model_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SystemsBiologyModeling.prototype, "modeling_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SystemsBiologyModeling.prototype, "biological_system", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SystemsBiologyModeling.prototype, "model_components", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SystemsBiologyModeling.prototype, "mathematical_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SystemsBiologyModeling.prototype, "multi_omics_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SystemsBiologyModeling.prototype, "model_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SystemsBiologyModeling.prototype, "simulation_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SystemsBiologyModeling.prototype, "clinical_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SystemsBiologyModeling.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SystemsBiologyModeling.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SystemsBiologyModeling.prototype, "updated_at", void 0);
exports.SystemsBiologyModeling = SystemsBiologyModeling = __decorate([
    (0, typeorm_1.Entity)('systems_biology_modeling')
], SystemsBiologyModeling);
let MultiOmicsIntegration = class MultiOmicsIntegration {
};
exports.MultiOmicsIntegration = MultiOmicsIntegration;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MultiOmicsIntegration.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MultiOmicsIntegration.prototype, "integration_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MultiOmicsIntegration.prototype, "study_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MultiOmicsIntegration.prototype, "integration_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MultiOmicsIntegration.prototype, "study_objective", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiOmicsIntegration.prototype, "omics_datasets", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiOmicsIntegration.prototype, "data_preprocessing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiOmicsIntegration.prototype, "integration_methods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiOmicsIntegration.prototype, "analytical_approaches", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiOmicsIntegration.prototype, "biological_interpretation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiOmicsIntegration.prototype, "validation_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MultiOmicsIntegration.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MultiOmicsIntegration.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MultiOmicsIntegration.prototype, "updated_at", void 0);
exports.MultiOmicsIntegration = MultiOmicsIntegration = __decorate([
    (0, typeorm_1.Entity)('multi_omics_integration')
], MultiOmicsIntegration);
let MetabolicBiomarkerDiscovery = class MetabolicBiomarkerDiscovery {
};
exports.MetabolicBiomarkerDiscovery = MetabolicBiomarkerDiscovery;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MetabolicBiomarkerDiscovery.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MetabolicBiomarkerDiscovery.prototype, "discovery_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MetabolicBiomarkerDiscovery.prototype, "biomarker_panel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetabolicBiomarkerDiscovery.prototype, "biomarker_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetabolicBiomarkerDiscovery.prototype, "discovery_phase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicBiomarkerDiscovery.prototype, "study_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicBiomarkerDiscovery.prototype, "biomarker_candidates", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicBiomarkerDiscovery.prototype, "analytical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicBiomarkerDiscovery.prototype, "clinical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicBiomarkerDiscovery.prototype, "statistical_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolicBiomarkerDiscovery.prototype, "regulatory_pathway", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetabolicBiomarkerDiscovery.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MetabolicBiomarkerDiscovery.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MetabolicBiomarkerDiscovery.prototype, "updated_at", void 0);
exports.MetabolicBiomarkerDiscovery = MetabolicBiomarkerDiscovery = __decorate([
    (0, typeorm_1.Entity)('metabolic_biomarker_discovery')
], MetabolicBiomarkerDiscovery);
let MetabolomicsSystemsBiologyQualityMetrics = class MetabolomicsSystemsBiologyQualityMetrics {
};
exports.MetabolomicsSystemsBiologyQualityMetrics = MetabolomicsSystemsBiologyQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "analytical_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "pathway_analysis_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "systems_modeling_accuracy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "multi_omics_integration_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "biomarker_discovery_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "clinical_translation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "technological_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "research_impact", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MetabolomicsSystemsBiologyQualityMetrics.prototype, "updated_at", void 0);
exports.MetabolomicsSystemsBiologyQualityMetrics = MetabolomicsSystemsBiologyQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('metabolomics_systems_biology_quality_metrics')
], MetabolomicsSystemsBiologyQualityMetrics);
//# sourceMappingURL=advanced-metabolomics-systems-biology.entity.js.map