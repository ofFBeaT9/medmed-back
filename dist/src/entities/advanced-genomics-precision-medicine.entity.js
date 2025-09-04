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
exports.HealthcareGenomicsQualityMetrics = exports.HereditaryDiseaseManagement = exports.MolecularDiagnosticsPlatform = exports.PharmacogenomicsManagement = exports.PrecisionMedicinePlatform = exports.GenomicsDataManagement = void 0;
const typeorm_1 = require("typeorm");
let GenomicsDataManagement = class GenomicsDataManagement {
};
exports.GenomicsDataManagement = GenomicsDataManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GenomicsDataManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GenomicsDataManagement.prototype, "genomics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GenomicsDataManagement.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GenomicsDataManagement.prototype, "test_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GenomicsDataManagement.prototype, "sample_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicsDataManagement.prototype, "genomic_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicsDataManagement.prototype, "genetic_variants", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicsDataManagement.prototype, "clinical_interpretation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicsDataManagement.prototype, "privacy_security", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicsDataManagement.prototype, "quality_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicsDataManagement.prototype, "family_genetics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GenomicsDataManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GenomicsDataManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GenomicsDataManagement.prototype, "updated_at", void 0);
exports.GenomicsDataManagement = GenomicsDataManagement = __decorate([
    (0, typeorm_1.Entity)('genomics_data_management')
], GenomicsDataManagement);
let PrecisionMedicinePlatform = class PrecisionMedicinePlatform {
};
exports.PrecisionMedicinePlatform = PrecisionMedicinePlatform;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PrecisionMedicinePlatform.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PrecisionMedicinePlatform.prototype, "precision_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PrecisionMedicinePlatform.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PrecisionMedicinePlatform.prototype, "condition_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PrecisionMedicinePlatform.prototype, "precision_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicinePlatform.prototype, "molecular_profile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicinePlatform.prototype, "biomarker_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicinePlatform.prototype, "treatment_recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicinePlatform.prototype, "clinical_decision_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicinePlatform.prototype, "outcome_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicinePlatform.prototype, "research_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PrecisionMedicinePlatform.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PrecisionMedicinePlatform.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PrecisionMedicinePlatform.prototype, "updated_at", void 0);
exports.PrecisionMedicinePlatform = PrecisionMedicinePlatform = __decorate([
    (0, typeorm_1.Entity)('precision_medicine_platform')
], PrecisionMedicinePlatform);
let PharmacogenomicsManagement = class PharmacogenomicsManagement {
};
exports.PharmacogenomicsManagement = PharmacogenomicsManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PharmacogenomicsManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PharmacogenomicsManagement.prototype, "pharmacogenomics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PharmacogenomicsManagement.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PharmacogenomicsManagement.prototype, "medication_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PharmacogenomicsManagement.prototype, "drug_class", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicsManagement.prototype, "genetic_variants", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicsManagement.prototype, "drug_response_prediction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicsManagement.prototype, "clinical_implementation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicsManagement.prototype, "outcome_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicsManagement.prototype, "evidence_base", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicsManagement.prototype, "implementation_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PharmacogenomicsManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PharmacogenomicsManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PharmacogenomicsManagement.prototype, "updated_at", void 0);
exports.PharmacogenomicsManagement = PharmacogenomicsManagement = __decorate([
    (0, typeorm_1.Entity)('pharmacogenomics_management')
], PharmacogenomicsManagement);
let MolecularDiagnosticsPlatform = class MolecularDiagnosticsPlatform {
};
exports.MolecularDiagnosticsPlatform = MolecularDiagnosticsPlatform;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MolecularDiagnosticsPlatform.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MolecularDiagnosticsPlatform.prototype, "diagnostic_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MolecularDiagnosticsPlatform.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MolecularDiagnosticsPlatform.prototype, "diagnostic_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MolecularDiagnosticsPlatform.prototype, "testing_methodology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticsPlatform.prototype, "test_specifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticsPlatform.prototype, "sample_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticsPlatform.prototype, "analytical_workflow", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticsPlatform.prototype, "result_interpretation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticsPlatform.prototype, "quality_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticsPlatform.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MolecularDiagnosticsPlatform.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MolecularDiagnosticsPlatform.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MolecularDiagnosticsPlatform.prototype, "updated_at", void 0);
exports.MolecularDiagnosticsPlatform = MolecularDiagnosticsPlatform = __decorate([
    (0, typeorm_1.Entity)('molecular_diagnostics_platform')
], MolecularDiagnosticsPlatform);
let HereditaryDiseaseManagement = class HereditaryDiseaseManagement {
};
exports.HereditaryDiseaseManagement = HereditaryDiseaseManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HereditaryDiseaseManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HereditaryDiseaseManagement.prototype, "hereditary_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HereditaryDiseaseManagement.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HereditaryDiseaseManagement.prototype, "condition_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HereditaryDiseaseManagement.prototype, "inheritance_pattern", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HereditaryDiseaseManagement.prototype, "genetic_basis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HereditaryDiseaseManagement.prototype, "clinical_manifestations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HereditaryDiseaseManagement.prototype, "risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HereditaryDiseaseManagement.prototype, "family_screening", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HereditaryDiseaseManagement.prototype, "management_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HereditaryDiseaseManagement.prototype, "genetic_counseling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HereditaryDiseaseManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HereditaryDiseaseManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HereditaryDiseaseManagement.prototype, "updated_at", void 0);
exports.HereditaryDiseaseManagement = HereditaryDiseaseManagement = __decorate([
    (0, typeorm_1.Entity)('hereditary_disease_management')
], HereditaryDiseaseManagement);
let HealthcareGenomicsQualityMetrics = class HealthcareGenomicsQualityMetrics {
};
exports.HealthcareGenomicsQualityMetrics = HealthcareGenomicsQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareGenomicsQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareGenomicsQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareGenomicsQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareGenomicsQualityMetrics.prototype, "testing_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareGenomicsQualityMetrics.prototype, "clinical_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareGenomicsQualityMetrics.prototype, "precision_medicine_adoption", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareGenomicsQualityMetrics.prototype, "data_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareGenomicsQualityMetrics.prototype, "patient_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareGenomicsQualityMetrics.prototype, "healthcare_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareGenomicsQualityMetrics.prototype, "innovation_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareGenomicsQualityMetrics.prototype, "equity_access", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareGenomicsQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareGenomicsQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareGenomicsQualityMetrics = HealthcareGenomicsQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_genomics_quality_metrics')
], HealthcareGenomicsQualityMetrics);
//# sourceMappingURL=advanced-genomics-precision-medicine.entity.js.map