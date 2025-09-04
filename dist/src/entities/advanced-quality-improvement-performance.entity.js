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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthcareQualityManagementQualityMetrics = exports.ClinicalIndicator = exports.PerformanceImprovement = exports.PatientSafetyEvent = exports.QualityImprovement = exports.QualityMeasureResult = exports.QualityMeasure = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let QualityMeasure = class QualityMeasure {
};
exports.QualityMeasure = QualityMeasure;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], QualityMeasure.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], QualityMeasure.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasure.prototype, "measure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasure.prototype, "measure_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasure.prototype, "quality_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasure.prototype, "measure_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasure.prototype, "reporting_program", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasure.prototype, "measure_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasure.prototype, "clinical_specialty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasure.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasure.prototype, "steward_organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasure.prototype, "evidence_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "measure_identifier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "measure_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "clinical_rationale", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "numerator_definition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "denominator_definition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "exclusion_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "risk_adjustment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "data_collection_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "calculation_algorithm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "performance_targets", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "improvement_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "implementation_guidance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "data_sources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "reporting_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "validation_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "supplemental_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "stratification_variables", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "related_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "references_citations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "testing_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasure.prototype, "harmonization_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasure.prototype, "target_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasure.prototype, "benchmark_percentile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], QualityMeasure.prototype, "pay_for_reporting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], QualityMeasure.prototype, "pay_for_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], QualityMeasure.prototype, "effective_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], QualityMeasure.prototype, "retirement_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QualityMeasure.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QualityMeasure.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => QualityMeasureResult, result => result.quality_measure),
    __metadata("design:type", Array)
], QualityMeasure.prototype, "measure_results", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => QualityImprovement, improvement => improvement.quality_measure),
    __metadata("design:type", Array)
], QualityMeasure.prototype, "improvement_initiatives", void 0);
exports.QualityMeasure = QualityMeasure = __decorate([
    (0, typeorm_1.Entity)('quality_measures'),
    (0, typeorm_1.Index)(['measure_name']),
    (0, typeorm_1.Index)(['measure_category']),
    (0, typeorm_1.Index)(['quality_domain']),
    (0, typeorm_1.Index)(['measure_type']),
    (0, typeorm_1.Index)(['reporting_program']),
    (0, typeorm_1.Index)(['measure_status']),
    (0, typeorm_1.Index)(['clinical_specialty']),
    (0, typeorm_1.Index)(['measurement_period']),
    (0, typeorm_1.Index)(['steward_organization']),
    (0, typeorm_1.Index)(['evidence_level'])
], QualityMeasure);
let QualityMeasureResult = class QualityMeasureResult {
};
exports.QualityMeasureResult = QualityMeasureResult;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "quality_measure_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "reporting_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], QualityMeasureResult.prototype, "measurement_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "performance_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "benchmark_comparison", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "trend_direction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Boolean)
], QualityMeasureResult.prototype, "statistical_significance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Boolean)
], QualityMeasureResult.prototype, "risk_adjusted", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "data_quality_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "numerator_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "denominator_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "exclusion_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "raw_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "risk_adjusted_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "confidence_interval_lower", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "confidence_interval_upper", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "benchmark_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "target_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "variance_from_target", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "percentile_rank", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "z_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 5, nullable: true }),
    __metadata("design:type", Number)
], QualityMeasureResult.prototype, "p_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "calculation_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "stratification_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "risk_adjustment_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "data_completeness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "validation_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "outlier_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "trend_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "comparative_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "improvement_opportunities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "action_items", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "narrative_interpretation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "data_limitations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "methodology_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityMeasureResult.prototype, "supplemental_data", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QualityMeasureResult.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QualityMeasureResult.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => QualityMeasure, measure => measure.measure_results),
    (0, typeorm_1.JoinColumn)({ name: 'quality_measure_id' }),
    __metadata("design:type", QualityMeasure)
], QualityMeasureResult.prototype, "quality_measure", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], QualityMeasureResult.prototype, "facility", void 0);
exports.QualityMeasureResult = QualityMeasureResult = __decorate([
    (0, typeorm_1.Entity)('quality_measure_results'),
    (0, typeorm_1.Index)(['quality_measure_id']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['reporting_period']),
    (0, typeorm_1.Index)(['measurement_date']),
    (0, typeorm_1.Index)(['performance_rate']),
    (0, typeorm_1.Index)(['benchmark_comparison']),
    (0, typeorm_1.Index)(['trend_direction']),
    (0, typeorm_1.Index)(['statistical_significance']),
    (0, typeorm_1.Index)(['risk_adjusted']),
    (0, typeorm_1.Index)(['data_quality_score'])
], QualityMeasureResult);
let QualityImprovement = class QualityImprovement {
};
exports.QualityImprovement = QualityImprovement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], QualityImprovement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], QualityImprovement.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], QualityImprovement.prototype, "quality_measure_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], QualityImprovement.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityImprovement.prototype, "initiative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityImprovement.prototype, "initiative_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityImprovement.prototype, "priority_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityImprovement.prototype, "improvement_methodology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityImprovement.prototype, "project_phase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QualityImprovement.prototype, "expected_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], QualityImprovement.prototype, "sponsor_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], QualityImprovement.prototype, "target_completion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "initiative_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "problem_statement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "current_state_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "root_cause_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "improvement_hypotheses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "intervention_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "implementation_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "measurement_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "success_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "resource_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "stakeholder_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "risk_mitigation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "communication_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "training_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "change_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "sustainability_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "lessons_learned", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "best_practices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "scaling_opportunities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityImprovement.prototype, "financial_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityImprovement.prototype, "baseline_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityImprovement.prototype, "target_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityImprovement.prototype, "current_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], QualityImprovement.prototype, "improvement_achieved", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], QualityImprovement.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], QualityImprovement.prototype, "actual_completion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QualityImprovement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QualityImprovement.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => QualityMeasure, measure => measure.improvement_initiatives),
    (0, typeorm_1.JoinColumn)({ name: 'quality_measure_id' }),
    __metadata("design:type", QualityMeasure)
], QualityImprovement.prototype, "quality_measure", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], QualityImprovement.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'sponsor_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], QualityImprovement.prototype, "sponsor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PerformanceImprovement, improvement => improvement.quality_improvement),
    __metadata("design:type", Array)
], QualityImprovement.prototype, "performance_improvements", void 0);
exports.QualityImprovement = QualityImprovement = __decorate([
    (0, typeorm_1.Entity)('quality_improvement'),
    (0, typeorm_1.Index)(['quality_measure_id']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['initiative_name']),
    (0, typeorm_1.Index)(['initiative_status']),
    (0, typeorm_1.Index)(['priority_level']),
    (0, typeorm_1.Index)(['improvement_methodology']),
    (0, typeorm_1.Index)(['project_phase']),
    (0, typeorm_1.Index)(['expected_impact']),
    (0, typeorm_1.Index)(['sponsor_id']),
    (0, typeorm_1.Index)(['target_completion'])
], QualityImprovement);
let PatientSafetyEvent = class PatientSafetyEvent {
};
exports.PatientSafetyEvent = PatientSafetyEvent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientSafetyEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientSafetyEvent.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientSafetyEvent.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientSafetyEvent.prototype, "event_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "event_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "severity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "harm_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "event_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "reporting_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "investigation_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "prevention_potential", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "event_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "event_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "contributing_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "root_cause_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "system_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "human_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "environmental_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "immediate_actions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "corrective_actions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "preventive_actions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "system_improvements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "lessons_learned", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "communication_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "follow_up_actions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "regulatory_reporting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "patient_family_notification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "staff_involved", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "witness_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "equipment_involved", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "medication_involved", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientSafetyEvent.prototype, "cost_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PatientSafetyEvent.prototype, "sentinel_event", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PatientSafetyEvent.prototype, "never_event", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PatientSafetyEvent.prototype, "reportable_event", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PatientSafetyEvent.prototype, "discovery_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PatientSafetyEvent.prototype, "investigation_completion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientSafetyEvent.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientSafetyEvent.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], PatientSafetyEvent.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], PatientSafetyEvent.prototype, "patient", void 0);
exports.PatientSafetyEvent = PatientSafetyEvent = __decorate([
    (0, typeorm_1.Entity)('patient_safety_events'),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['event_date']),
    (0, typeorm_1.Index)(['event_type']),
    (0, typeorm_1.Index)(['severity_level']),
    (0, typeorm_1.Index)(['harm_level']),
    (0, typeorm_1.Index)(['event_category']),
    (0, typeorm_1.Index)(['reporting_source']),
    (0, typeorm_1.Index)(['investigation_status']),
    (0, typeorm_1.Index)(['prevention_potential'])
], PatientSafetyEvent);
let PerformanceImprovement = class PerformanceImprovement {
};
exports.PerformanceImprovement = PerformanceImprovement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PerformanceImprovement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PerformanceImprovement.prototype, "quality_improvement_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PerformanceImprovement.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "improvement_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PerformanceImprovement.prototype, "measurement_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "performance_indicator", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "improvement_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "benchmark_comparison", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "trend_direction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PerformanceImprovement.prototype, "sustainability_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "impact_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 3, nullable: true }),
    __metadata("design:type", Number)
], PerformanceImprovement.prototype, "baseline_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 3, nullable: true }),
    __metadata("design:type", Number)
], PerformanceImprovement.prototype, "target_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 3, nullable: true }),
    __metadata("design:type", Number)
], PerformanceImprovement.prototype, "current_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PerformanceImprovement.prototype, "improvement_percentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 3, nullable: true }),
    __metadata("design:type", Number)
], PerformanceImprovement.prototype, "benchmark_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PerformanceImprovement.prototype, "statistical_significance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PerformanceImprovement.prototype, "confidence_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "improvement_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "measurement_methodology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "data_collection_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "statistical_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "trend_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "variation_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "control_chart_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "correlation_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "intervention_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "sustainability_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "spread_potential", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "unintended_consequences", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "cost_benefit_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "stakeholder_feedback", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "next_steps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PerformanceImprovement.prototype, "lessons_learned", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PerformanceImprovement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PerformanceImprovement.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => QualityImprovement, improvement => improvement.performance_improvements),
    (0, typeorm_1.JoinColumn)({ name: 'quality_improvement_id' }),
    __metadata("design:type", QualityImprovement)
], PerformanceImprovement.prototype, "quality_improvement", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], PerformanceImprovement.prototype, "facility", void 0);
exports.PerformanceImprovement = PerformanceImprovement = __decorate([
    (0, typeorm_1.Entity)('performance_improvement'),
    (0, typeorm_1.Index)(['quality_improvement_id']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['improvement_area']),
    (0, typeorm_1.Index)(['measurement_date']),
    (0, typeorm_1.Index)(['performance_indicator']),
    (0, typeorm_1.Index)(['improvement_status']),
    (0, typeorm_1.Index)(['benchmark_comparison']),
    (0, typeorm_1.Index)(['trend_direction']),
    (0, typeorm_1.Index)(['sustainability_score']),
    (0, typeorm_1.Index)(['impact_level'])
], PerformanceImprovement);
let ClinicalIndicator = class ClinicalIndicator {
};
exports.ClinicalIndicator = ClinicalIndicator;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "indicator_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "clinical_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "indicator_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "measurement_frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ClinicalIndicator.prototype, "reporting_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "performance_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "benchmark_comparison", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "clinical_significance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Boolean)
], ClinicalIndicator.prototype, "risk_adjustment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 3, nullable: true }),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "indicator_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 3, nullable: true }),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "target_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 3, nullable: true }),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "benchmark_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "variance_from_target", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "numerator", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "denominator", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "rate_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "confidence_interval_lower", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "confidence_interval_upper", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 5, nullable: true }),
    __metadata("design:type", Number)
], ClinicalIndicator.prototype, "p_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "indicator_definition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "clinical_rationale", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "calculation_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "data_sources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "inclusion_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "exclusion_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "risk_adjustment_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "stratification_variables", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "trend_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "comparative_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "outlier_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "improvement_opportunities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "action_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalIndicator.prototype, "clinical_impact", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalIndicator.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalIndicator.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], ClinicalIndicator.prototype, "facility", void 0);
exports.ClinicalIndicator = ClinicalIndicator = __decorate([
    (0, typeorm_1.Entity)('clinical_indicators'),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['indicator_name']),
    (0, typeorm_1.Index)(['clinical_domain']),
    (0, typeorm_1.Index)(['indicator_type']),
    (0, typeorm_1.Index)(['measurement_frequency']),
    (0, typeorm_1.Index)(['reporting_period']),
    (0, typeorm_1.Index)(['performance_level']),
    (0, typeorm_1.Index)(['benchmark_comparison']),
    (0, typeorm_1.Index)(['clinical_significance']),
    (0, typeorm_1.Index)(['risk_adjustment'])
], ClinicalIndicator);
let HealthcareQualityManagementQualityMetrics = class HealthcareQualityManagementQualityMetrics {
};
exports.HealthcareQualityManagementQualityMetrics = HealthcareQualityManagementQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], HealthcareQualityManagementQualityMetrics.prototype, "reporting_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "quality_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "metric_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "performance_indicator", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "improvement_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "benchmark_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "patient_safety_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "total_quality_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "measures_meeting_target", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "target_achievement_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "overall_quality_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "patient_safety_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "clinical_effectiveness_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "patient_experience_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "efficiency_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "safety_events_reported", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 3, nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "safety_event_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "never_events", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "sentinel_events", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "quality_improvement_projects", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "improvement_project_success_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "cost_of_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "cost_savings_achieved", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], HealthcareQualityManagementQualityMetrics.prototype, "roi_quality_investments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "performance_trends", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "benchmark_comparisons", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "improvement_priorities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "patient_safety_culture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "staff_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "technology_utilization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "accreditation_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "best_practices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "innovation_initiatives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "stakeholder_satisfaction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HealthcareQualityManagementQualityMetrics.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareQualityManagementQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareQualityManagementQualityMetrics.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], HealthcareQualityManagementQualityMetrics.prototype, "facility", void 0);
exports.HealthcareQualityManagementQualityMetrics = HealthcareQualityManagementQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_quality_management_quality_metrics'),
    (0, typeorm_1.Index)(['reporting_period']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['quality_domain']),
    (0, typeorm_1.Index)(['metric_category']),
    (0, typeorm_1.Index)(['performance_indicator']),
    (0, typeorm_1.Index)(['improvement_focus']),
    (0, typeorm_1.Index)(['benchmark_status']),
    (0, typeorm_1.Index)(['patient_safety_level'])
], HealthcareQualityManagementQualityMetrics);
//# sourceMappingURL=advanced-quality-improvement-performance.entity.js.map