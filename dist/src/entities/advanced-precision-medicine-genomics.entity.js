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
exports.PrecisionMedicineQualityMetrics = exports.MolecularDiagnosticSystems = exports.BiomarkerDiscoveryPlatform = exports.PersonalizedTreatmentProtocols = exports.PharmacogenomicProfiles = exports.GenomicSequencingData = void 0;
const typeorm_1 = require("typeorm");
let GenomicSequencingData = class GenomicSequencingData {
};
exports.GenomicSequencingData = GenomicSequencingData;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GenomicSequencingData.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GenomicSequencingData.prototype, "sequencing_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GenomicSequencingData.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GenomicSequencingData.prototype, "sequencing_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GenomicSequencingData.prototype, "sequencing_platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicSequencingData.prototype, "sample_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicSequencingData.prototype, "sequencing_parameters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicSequencingData.prototype, "variant_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicSequencingData.prototype, "genomic_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicSequencingData.prototype, "data_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GenomicSequencingData.prototype, "privacy_security", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GenomicSequencingData.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GenomicSequencingData.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GenomicSequencingData.prototype, "updated_at", void 0);
exports.GenomicSequencingData = GenomicSequencingData = __decorate([
    (0, typeorm_1.Entity)('genomic_sequencing_data')
], GenomicSequencingData);
let PharmacogenomicProfiles = class PharmacogenomicProfiles {
};
exports.PharmacogenomicProfiles = PharmacogenomicProfiles;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PharmacogenomicProfiles.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PharmacogenomicProfiles.prototype, "profile_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PharmacogenomicProfiles.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PharmacogenomicProfiles.prototype, "analysis_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PharmacogenomicProfiles.prototype, "clinical_context", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicProfiles.prototype, "drug_metabolizing_enzymes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicProfiles.prototype, "drug_transporters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicProfiles.prototype, "drug_targets", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicProfiles.prototype, "pharmacokinetic_predictions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicProfiles.prototype, "therapeutic_recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmacogenomicProfiles.prototype, "clinical_decision_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PharmacogenomicProfiles.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PharmacogenomicProfiles.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PharmacogenomicProfiles.prototype, "updated_at", void 0);
exports.PharmacogenomicProfiles = PharmacogenomicProfiles = __decorate([
    (0, typeorm_1.Entity)('pharmacogenomic_profiles')
], PharmacogenomicProfiles);
let PersonalizedTreatmentProtocols = class PersonalizedTreatmentProtocols {
};
exports.PersonalizedTreatmentProtocols = PersonalizedTreatmentProtocols;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PersonalizedTreatmentProtocols.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PersonalizedTreatmentProtocols.prototype, "protocol_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PersonalizedTreatmentProtocols.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PersonalizedTreatmentProtocols.prototype, "condition_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PersonalizedTreatmentProtocols.prototype, "treatment_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PersonalizedTreatmentProtocols.prototype, "molecular_profiling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PersonalizedTreatmentProtocols.prototype, "risk_stratification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PersonalizedTreatmentProtocols.prototype, "treatment_selection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PersonalizedTreatmentProtocols.prototype, "dosing_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PersonalizedTreatmentProtocols.prototype, "response_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PersonalizedTreatmentProtocols.prototype, "adaptive_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PersonalizedTreatmentProtocols.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PersonalizedTreatmentProtocols.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PersonalizedTreatmentProtocols.prototype, "updated_at", void 0);
exports.PersonalizedTreatmentProtocols = PersonalizedTreatmentProtocols = __decorate([
    (0, typeorm_1.Entity)('personalized_treatment_protocols')
], PersonalizedTreatmentProtocols);
let BiomarkerDiscoveryPlatform = class BiomarkerDiscoveryPlatform {
};
exports.BiomarkerDiscoveryPlatform = BiomarkerDiscoveryPlatform;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BiomarkerDiscoveryPlatform.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BiomarkerDiscoveryPlatform.prototype, "discovery_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BiomarkerDiscoveryPlatform.prototype, "study_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiomarkerDiscoveryPlatform.prototype, "biomarker_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiomarkerDiscoveryPlatform.prototype, "discovery_phase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomarkerDiscoveryPlatform.prototype, "omics_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomarkerDiscoveryPlatform.prototype, "analytical_methods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomarkerDiscoveryPlatform.prototype, "biomarker_candidates", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomarkerDiscoveryPlatform.prototype, "validation_studies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomarkerDiscoveryPlatform.prototype, "clinical_utility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomarkerDiscoveryPlatform.prototype, "regulatory_pathway", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiomarkerDiscoveryPlatform.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BiomarkerDiscoveryPlatform.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BiomarkerDiscoveryPlatform.prototype, "updated_at", void 0);
exports.BiomarkerDiscoveryPlatform = BiomarkerDiscoveryPlatform = __decorate([
    (0, typeorm_1.Entity)('biomarker_discovery_platform')
], BiomarkerDiscoveryPlatform);
let MolecularDiagnosticSystems = class MolecularDiagnosticSystems {
};
exports.MolecularDiagnosticSystems = MolecularDiagnosticSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MolecularDiagnosticSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MolecularDiagnosticSystems.prototype, "system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MolecularDiagnosticSystems.prototype, "diagnostic_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MolecularDiagnosticSystems.prototype, "technology_platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MolecularDiagnosticSystems.prototype, "clinical_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticSystems.prototype, "assay_configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticSystems.prototype, "analytical_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticSystems.prototype, "clinical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticSystems.prototype, "laboratory_workflow", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticSystems.prototype, "data_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MolecularDiagnosticSystems.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MolecularDiagnosticSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MolecularDiagnosticSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MolecularDiagnosticSystems.prototype, "updated_at", void 0);
exports.MolecularDiagnosticSystems = MolecularDiagnosticSystems = __decorate([
    (0, typeorm_1.Entity)('molecular_diagnostic_systems')
], MolecularDiagnosticSystems);
let PrecisionMedicineQualityMetrics = class PrecisionMedicineQualityMetrics {
};
exports.PrecisionMedicineQualityMetrics = PrecisionMedicineQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PrecisionMedicineQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PrecisionMedicineQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PrecisionMedicineQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicineQualityMetrics.prototype, "genomic_testing_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicineQualityMetrics.prototype, "pharmacogenomic_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicineQualityMetrics.prototype, "personalized_treatment_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicineQualityMetrics.prototype, "biomarker_clinical_utility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicineQualityMetrics.prototype, "molecular_diagnostic_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicineQualityMetrics.prototype, "data_integration_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicineQualityMetrics.prototype, "patient_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PrecisionMedicineQualityMetrics.prototype, "innovation_advancement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PrecisionMedicineQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PrecisionMedicineQualityMetrics.prototype, "updated_at", void 0);
exports.PrecisionMedicineQualityMetrics = PrecisionMedicineQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('precision_medicine_quality_metrics')
], PrecisionMedicineQualityMetrics);
//# sourceMappingURL=advanced-precision-medicine-genomics.entity.js.map