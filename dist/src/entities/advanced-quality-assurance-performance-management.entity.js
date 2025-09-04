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
exports.QualityAssurancePerformanceManagementMetrics = exports.BenchmarkingComparativeAnalytics = exports.ClinicalGovernanceFrameworks = exports.AccreditationComplianceManagement = exports.QualityImprovementInitiatives = exports.QualityPerformanceMonitoringSystems = void 0;
const typeorm_1 = require("typeorm");
let QualityPerformanceMonitoringSystems = class QualityPerformanceMonitoringSystems {
};
exports.QualityPerformanceMonitoringSystems = QualityPerformanceMonitoringSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QualityPerformanceMonitoringSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QualityPerformanceMonitoringSystems.prototype, "monitoring_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QualityPerformanceMonitoringSystems.prototype, "monitoring_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QualityPerformanceMonitoringSystems.prototype, "monitoring_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QualityPerformanceMonitoringSystems.prototype, "measurement_frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityPerformanceMonitoringSystems.prototype, "performance_indicators", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityPerformanceMonitoringSystems.prototype, "data_collection_methods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityPerformanceMonitoringSystems.prototype, "analytics_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityPerformanceMonitoringSystems.prototype, "reporting_visualization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityPerformanceMonitoringSystems.prototype, "alert_notification_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityPerformanceMonitoringSystems.prototype, "continuous_improvement_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QualityPerformanceMonitoringSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QualityPerformanceMonitoringSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QualityPerformanceMonitoringSystems.prototype, "updated_at", void 0);
exports.QualityPerformanceMonitoringSystems = QualityPerformanceMonitoringSystems = __decorate([
    (0, typeorm_1.Entity)('quality_performance_monitoring_systems')
], QualityPerformanceMonitoringSystems);
let QualityImprovementInitiatives = class QualityImprovementInitiatives {
};
exports.QualityImprovementInitiatives = QualityImprovementInitiatives;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QualityImprovementInitiatives.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QualityImprovementInitiatives.prototype, "initiative_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QualityImprovementInitiatives.prototype, "initiative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QualityImprovementInitiatives.prototype, "improvement_methodology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QualityImprovementInitiatives.prototype, "initiative_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityImprovementInitiatives.prototype, "problem_identification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityImprovementInitiatives.prototype, "improvement_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityImprovementInitiatives.prototype, "implementation_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityImprovementInitiatives.prototype, "measurement_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityImprovementInitiatives.prototype, "sustainability_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityImprovementInitiatives.prototype, "spread_scaling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QualityImprovementInitiatives.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QualityImprovementInitiatives.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QualityImprovementInitiatives.prototype, "updated_at", void 0);
exports.QualityImprovementInitiatives = QualityImprovementInitiatives = __decorate([
    (0, typeorm_1.Entity)('quality_improvement_initiatives')
], QualityImprovementInitiatives);
let AccreditationComplianceManagement = class AccreditationComplianceManagement {
};
exports.AccreditationComplianceManagement = AccreditationComplianceManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AccreditationComplianceManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AccreditationComplianceManagement.prototype, "accreditation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AccreditationComplianceManagement.prototype, "accrediting_body", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AccreditationComplianceManagement.prototype, "accreditation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AccreditationComplianceManagement.prototype, "accreditation_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccreditationComplianceManagement.prototype, "standards_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccreditationComplianceManagement.prototype, "compliance_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccreditationComplianceManagement.prototype, "preparation_activities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccreditationComplianceManagement.prototype, "survey_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccreditationComplianceManagement.prototype, "continuous_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AccreditationComplianceManagement.prototype, "accreditation_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AccreditationComplianceManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AccreditationComplianceManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AccreditationComplianceManagement.prototype, "updated_at", void 0);
exports.AccreditationComplianceManagement = AccreditationComplianceManagement = __decorate([
    (0, typeorm_1.Entity)('accreditation_compliance_management')
], AccreditationComplianceManagement);
let ClinicalGovernanceFrameworks = class ClinicalGovernanceFrameworks {
};
exports.ClinicalGovernanceFrameworks = ClinicalGovernanceFrameworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClinicalGovernanceFrameworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClinicalGovernanceFrameworks.prototype, "governance_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClinicalGovernanceFrameworks.prototype, "framework_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalGovernanceFrameworks.prototype, "governance_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalGovernanceFrameworks.prototype, "governance_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalGovernanceFrameworks.prototype, "governance_structure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalGovernanceFrameworks.prototype, "clinical_oversight_processes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalGovernanceFrameworks.prototype, "quality_assurance_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalGovernanceFrameworks.prototype, "risk_management_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalGovernanceFrameworks.prototype, "professional_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalGovernanceFrameworks.prototype, "stakeholder_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalGovernanceFrameworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalGovernanceFrameworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalGovernanceFrameworks.prototype, "updated_at", void 0);
exports.ClinicalGovernanceFrameworks = ClinicalGovernanceFrameworks = __decorate([
    (0, typeorm_1.Entity)('clinical_governance_frameworks')
], ClinicalGovernanceFrameworks);
let BenchmarkingComparativeAnalytics = class BenchmarkingComparativeAnalytics {
};
exports.BenchmarkingComparativeAnalytics = BenchmarkingComparativeAnalytics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BenchmarkingComparativeAnalytics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BenchmarkingComparativeAnalytics.prototype, "benchmarking_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BenchmarkingComparativeAnalytics.prototype, "benchmarking_study", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BenchmarkingComparativeAnalytics.prototype, "comparison_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BenchmarkingComparativeAnalytics.prototype, "benchmarking_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BenchmarkingComparativeAnalytics.prototype, "benchmark_selection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BenchmarkingComparativeAnalytics.prototype, "performance_comparison", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BenchmarkingComparativeAnalytics.prototype, "best_practice_identification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BenchmarkingComparativeAnalytics.prototype, "improvement_opportunities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BenchmarkingComparativeAnalytics.prototype, "action_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BenchmarkingComparativeAnalytics.prototype, "ongoing_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BenchmarkingComparativeAnalytics.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BenchmarkingComparativeAnalytics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BenchmarkingComparativeAnalytics.prototype, "updated_at", void 0);
exports.BenchmarkingComparativeAnalytics = BenchmarkingComparativeAnalytics = __decorate([
    (0, typeorm_1.Entity)('benchmarking_comparative_analytics')
], BenchmarkingComparativeAnalytics);
let QualityAssurancePerformanceManagementMetrics = class QualityAssurancePerformanceManagementMetrics {
};
exports.QualityAssurancePerformanceManagementMetrics = QualityAssurancePerformanceManagementMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QualityAssurancePerformanceManagementMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QualityAssurancePerformanceManagementMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QualityAssurancePerformanceManagementMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityAssurancePerformanceManagementMetrics.prototype, "quality_monitoring_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityAssurancePerformanceManagementMetrics.prototype, "quality_improvement_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityAssurancePerformanceManagementMetrics.prototype, "accreditation_compliance_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityAssurancePerformanceManagementMetrics.prototype, "clinical_governance_maturity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityAssurancePerformanceManagementMetrics.prototype, "benchmarking_value_realization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityAssurancePerformanceManagementMetrics.prototype, "quality_culture_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityAssurancePerformanceManagementMetrics.prototype, "performance_management_roi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QualityAssurancePerformanceManagementMetrics.prototype, "strategic_quality_alignment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QualityAssurancePerformanceManagementMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QualityAssurancePerformanceManagementMetrics.prototype, "updated_at", void 0);
exports.QualityAssurancePerformanceManagementMetrics = QualityAssurancePerformanceManagementMetrics = __decorate([
    (0, typeorm_1.Entity)('quality_assurance_performance_management_metrics')
], QualityAssurancePerformanceManagementMetrics);
//# sourceMappingURL=advanced-quality-assurance-performance-management.entity.js.map