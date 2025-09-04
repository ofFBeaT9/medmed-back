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
exports.ComputationalBiologyBioinformaticsQualityMetrics = exports.AlgorithmDevelopmentFrameworks = exports.ComparativeGenomicsPlatforms = exports.PhylogeneticAnalysis = exports.StructuralBiologyModeling = exports.SequenceAnalysisPipelines = void 0;
const typeorm_1 = require("typeorm");
let SequenceAnalysisPipelines = class SequenceAnalysisPipelines {
};
exports.SequenceAnalysisPipelines = SequenceAnalysisPipelines;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SequenceAnalysisPipelines.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SequenceAnalysisPipelines.prototype, "pipeline_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SequenceAnalysisPipelines.prototype, "pipeline_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SequenceAnalysisPipelines.prototype, "sequence_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SequenceAnalysisPipelines.prototype, "analysis_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SequenceAnalysisPipelines.prototype, "input_specifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SequenceAnalysisPipelines.prototype, "processing_workflow", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SequenceAnalysisPipelines.prototype, "alignment_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SequenceAnalysisPipelines.prototype, "variant_calling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SequenceAnalysisPipelines.prototype, "functional_annotation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SequenceAnalysisPipelines.prototype, "output_generation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SequenceAnalysisPipelines.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SequenceAnalysisPipelines.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SequenceAnalysisPipelines.prototype, "updated_at", void 0);
exports.SequenceAnalysisPipelines = SequenceAnalysisPipelines = __decorate([
    (0, typeorm_1.Entity)('sequence_analysis_pipelines')
], SequenceAnalysisPipelines);
let StructuralBiologyModeling = class StructuralBiologyModeling {
};
exports.StructuralBiologyModeling = StructuralBiologyModeling;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StructuralBiologyModeling.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], StructuralBiologyModeling.prototype, "modeling_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], StructuralBiologyModeling.prototype, "protein_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StructuralBiologyModeling.prototype, "modeling_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StructuralBiologyModeling.prototype, "structure_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StructuralBiologyModeling.prototype, "sequence_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StructuralBiologyModeling.prototype, "template_identification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StructuralBiologyModeling.prototype, "model_building", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StructuralBiologyModeling.prototype, "molecular_dynamics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StructuralBiologyModeling.prototype, "structure_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StructuralBiologyModeling.prototype, "functional_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StructuralBiologyModeling.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StructuralBiologyModeling.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], StructuralBiologyModeling.prototype, "updated_at", void 0);
exports.StructuralBiologyModeling = StructuralBiologyModeling = __decorate([
    (0, typeorm_1.Entity)('structural_biology_modeling')
], StructuralBiologyModeling);
let PhylogeneticAnalysis = class PhylogeneticAnalysis {
};
exports.PhylogeneticAnalysis = PhylogeneticAnalysis;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PhylogeneticAnalysis.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PhylogeneticAnalysis.prototype, "analysis_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PhylogeneticAnalysis.prototype, "study_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PhylogeneticAnalysis.prototype, "analysis_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PhylogeneticAnalysis.prototype, "data_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PhylogeneticAnalysis.prototype, "sequence_dataset", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PhylogeneticAnalysis.prototype, "evolutionary_models", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PhylogeneticAnalysis.prototype, "tree_reconstruction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PhylogeneticAnalysis.prototype, "divergence_dating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PhylogeneticAnalysis.prototype, "ancestral_reconstruction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PhylogeneticAnalysis.prototype, "comparative_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PhylogeneticAnalysis.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PhylogeneticAnalysis.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PhylogeneticAnalysis.prototype, "updated_at", void 0);
exports.PhylogeneticAnalysis = PhylogeneticAnalysis = __decorate([
    (0, typeorm_1.Entity)('phylogenetic_analysis')
], PhylogeneticAnalysis);
let ComparativeGenomicsPlatforms = class ComparativeGenomicsPlatforms {
};
exports.ComparativeGenomicsPlatforms = ComparativeGenomicsPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ComparativeGenomicsPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ComparativeGenomicsPlatforms.prototype, "platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ComparativeGenomicsPlatforms.prototype, "comparison_study", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ComparativeGenomicsPlatforms.prototype, "comparison_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ComparativeGenomicsPlatforms.prototype, "taxonomic_range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeGenomicsPlatforms.prototype, "genome_datasets", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeGenomicsPlatforms.prototype, "synteny_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeGenomicsPlatforms.prototype, "orthology_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeGenomicsPlatforms.prototype, "regulatory_comparison", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeGenomicsPlatforms.prototype, "structural_variation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComparativeGenomicsPlatforms.prototype, "functional_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ComparativeGenomicsPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ComparativeGenomicsPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ComparativeGenomicsPlatforms.prototype, "updated_at", void 0);
exports.ComparativeGenomicsPlatforms = ComparativeGenomicsPlatforms = __decorate([
    (0, typeorm_1.Entity)('comparative_genomics_platforms')
], ComparativeGenomicsPlatforms);
let AlgorithmDevelopmentFrameworks = class AlgorithmDevelopmentFrameworks {
};
exports.AlgorithmDevelopmentFrameworks = AlgorithmDevelopmentFrameworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AlgorithmDevelopmentFrameworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AlgorithmDevelopmentFrameworks.prototype, "framework_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AlgorithmDevelopmentFrameworks.prototype, "algorithm_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AlgorithmDevelopmentFrameworks.prototype, "algorithm_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AlgorithmDevelopmentFrameworks.prototype, "biological_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AlgorithmDevelopmentFrameworks.prototype, "algorithm_specification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AlgorithmDevelopmentFrameworks.prototype, "implementation_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AlgorithmDevelopmentFrameworks.prototype, "validation_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AlgorithmDevelopmentFrameworks.prototype, "optimization_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AlgorithmDevelopmentFrameworks.prototype, "integration_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AlgorithmDevelopmentFrameworks.prototype, "documentation_resources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AlgorithmDevelopmentFrameworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AlgorithmDevelopmentFrameworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AlgorithmDevelopmentFrameworks.prototype, "updated_at", void 0);
exports.AlgorithmDevelopmentFrameworks = AlgorithmDevelopmentFrameworks = __decorate([
    (0, typeorm_1.Entity)('algorithm_development_frameworks')
], AlgorithmDevelopmentFrameworks);
let ComputationalBiologyBioinformaticsQualityMetrics = class ComputationalBiologyBioinformaticsQualityMetrics {
};
exports.ComputationalBiologyBioinformaticsQualityMetrics = ComputationalBiologyBioinformaticsQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "sequence_analysis_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "structural_modeling_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "phylogenetic_analysis_reliability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "comparative_genomics_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "algorithm_development_innovation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "computational_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "research_productivity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "clinical_translation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ComputationalBiologyBioinformaticsQualityMetrics.prototype, "updated_at", void 0);
exports.ComputationalBiologyBioinformaticsQualityMetrics = ComputationalBiologyBioinformaticsQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('computational_biology_bioinformatics_quality_metrics')
], ComputationalBiologyBioinformaticsQualityMetrics);
//# sourceMappingURL=advanced-computational-biology-bioinformatics.entity.js.map