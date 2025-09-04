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
exports.MicrobiomeMetagenomicsQualityMetrics = exports.MicrobiomeDiagnostics = exports.TherapeuticMicrobiomics = exports.HostMicrobeInteractions = exports.MetagenomicsAssemblyAnnotation = exports.MicrobiomeProfilingAnalysis = void 0;
const typeorm_1 = require("typeorm");
let MicrobiomeProfilingAnalysis = class MicrobiomeProfilingAnalysis {
};
exports.MicrobiomeProfilingAnalysis = MicrobiomeProfilingAnalysis;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MicrobiomeProfilingAnalysis.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MicrobiomeProfilingAnalysis.prototype, "profiling_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MicrobiomeProfilingAnalysis.prototype, "sample_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MicrobiomeProfilingAnalysis.prototype, "sample_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MicrobiomeProfilingAnalysis.prototype, "analysis_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeProfilingAnalysis.prototype, "sample_collection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeProfilingAnalysis.prototype, "sequencing_parameters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeProfilingAnalysis.prototype, "taxonomic_profiling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeProfilingAnalysis.prototype, "functional_profiling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeProfilingAnalysis.prototype, "comparative_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeProfilingAnalysis.prototype, "quality_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MicrobiomeProfilingAnalysis.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MicrobiomeProfilingAnalysis.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MicrobiomeProfilingAnalysis.prototype, "updated_at", void 0);
exports.MicrobiomeProfilingAnalysis = MicrobiomeProfilingAnalysis = __decorate([
    (0, typeorm_1.Entity)('microbiome_profiling_analysis')
], MicrobiomeProfilingAnalysis);
let MetagenomicsAssemblyAnnotation = class MetagenomicsAssemblyAnnotation {
};
exports.MetagenomicsAssemblyAnnotation = MetagenomicsAssemblyAnnotation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MetagenomicsAssemblyAnnotation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MetagenomicsAssemblyAnnotation.prototype, "assembly_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MetagenomicsAssemblyAnnotation.prototype, "project_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetagenomicsAssemblyAnnotation.prototype, "assembly_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetagenomicsAssemblyAnnotation.prototype, "ecosystem_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetagenomicsAssemblyAnnotation.prototype, "preprocessing_steps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetagenomicsAssemblyAnnotation.prototype, "assembly_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetagenomicsAssemblyAnnotation.prototype, "metagenome_binning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetagenomicsAssemblyAnnotation.prototype, "gene_prediction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetagenomicsAssemblyAnnotation.prototype, "functional_annotation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MetagenomicsAssemblyAnnotation.prototype, "comparative_genomics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MetagenomicsAssemblyAnnotation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MetagenomicsAssemblyAnnotation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MetagenomicsAssemblyAnnotation.prototype, "updated_at", void 0);
exports.MetagenomicsAssemblyAnnotation = MetagenomicsAssemblyAnnotation = __decorate([
    (0, typeorm_1.Entity)('metagenomics_assembly_annotation')
], MetagenomicsAssemblyAnnotation);
let HostMicrobeInteractions = class HostMicrobeInteractions {
};
exports.HostMicrobeInteractions = HostMicrobeInteractions;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HostMicrobeInteractions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HostMicrobeInteractions.prototype, "interaction_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HostMicrobeInteractions.prototype, "study_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HostMicrobeInteractions.prototype, "interaction_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HostMicrobeInteractions.prototype, "host_system", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HostMicrobeInteractions.prototype, "microbial_components", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HostMicrobeInteractions.prototype, "host_responses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HostMicrobeInteractions.prototype, "molecular_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HostMicrobeInteractions.prototype, "disease_associations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HostMicrobeInteractions.prototype, "experimental_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HostMicrobeInteractions.prototype, "therapeutic_implications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HostMicrobeInteractions.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HostMicrobeInteractions.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HostMicrobeInteractions.prototype, "updated_at", void 0);
exports.HostMicrobeInteractions = HostMicrobeInteractions = __decorate([
    (0, typeorm_1.Entity)('host_microbe_interactions')
], HostMicrobeInteractions);
let TherapeuticMicrobiomics = class TherapeuticMicrobiomics {
};
exports.TherapeuticMicrobiomics = TherapeuticMicrobiomics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TherapeuticMicrobiomics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TherapeuticMicrobiomics.prototype, "therapy_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TherapeuticMicrobiomics.prototype, "therapy_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticMicrobiomics.prototype, "therapy_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticMicrobiomics.prototype, "target_condition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticMicrobiomics.prototype, "therapeutic_agents", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticMicrobiomics.prototype, "mechanism_of_action", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticMicrobiomics.prototype, "clinical_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticMicrobiomics.prototype, "efficacy_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticMicrobiomics.prototype, "personalization_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticMicrobiomics.prototype, "manufacturing_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticMicrobiomics.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TherapeuticMicrobiomics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TherapeuticMicrobiomics.prototype, "updated_at", void 0);
exports.TherapeuticMicrobiomics = TherapeuticMicrobiomics = __decorate([
    (0, typeorm_1.Entity)('therapeutic_microbiomics')
], TherapeuticMicrobiomics);
let MicrobiomeDiagnostics = class MicrobiomeDiagnostics {
};
exports.MicrobiomeDiagnostics = MicrobiomeDiagnostics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MicrobiomeDiagnostics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MicrobiomeDiagnostics.prototype, "diagnostic_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MicrobiomeDiagnostics.prototype, "test_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MicrobiomeDiagnostics.prototype, "diagnostic_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MicrobiomeDiagnostics.prototype, "clinical_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeDiagnostics.prototype, "biomarker_panel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeDiagnostics.prototype, "analytical_methods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeDiagnostics.prototype, "clinical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeDiagnostics.prototype, "reference_databases", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeDiagnostics.prototype, "interpretation_algorithms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeDiagnostics.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MicrobiomeDiagnostics.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MicrobiomeDiagnostics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MicrobiomeDiagnostics.prototype, "updated_at", void 0);
exports.MicrobiomeDiagnostics = MicrobiomeDiagnostics = __decorate([
    (0, typeorm_1.Entity)('microbiome_diagnostics')
], MicrobiomeDiagnostics);
let MicrobiomeMetagenomicsQualityMetrics = class MicrobiomeMetagenomicsQualityMetrics {
};
exports.MicrobiomeMetagenomicsQualityMetrics = MicrobiomeMetagenomicsQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "profiling_accuracy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "metagenomics_assembly_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "host_microbe_understanding", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "therapeutic_development_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "diagnostic_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "technological_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "research_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "clinical_integration", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MicrobiomeMetagenomicsQualityMetrics.prototype, "updated_at", void 0);
exports.MicrobiomeMetagenomicsQualityMetrics = MicrobiomeMetagenomicsQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('microbiome_metagenomics_quality_metrics')
], MicrobiomeMetagenomicsQualityMetrics);
//# sourceMappingURL=advanced-microbiome-metagenomics.entity.js.map