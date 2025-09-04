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
exports.HealthcareQuantumQualityMetrics = exports.QuantumMedicalImaging = exports.QuantumGenomicsAnalysis = exports.QuantumMachineLearningHealth = exports.QuantumCryptographyHealthcare = exports.QuantumDrugDiscovery = void 0;
const typeorm_1 = require("typeorm");
let QuantumDrugDiscovery = class QuantumDrugDiscovery {
};
exports.QuantumDrugDiscovery = QuantumDrugDiscovery;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuantumDrugDiscovery.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QuantumDrugDiscovery.prototype, "discovery_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuantumDrugDiscovery.prototype, "research_project", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumDrugDiscovery.prototype, "discovery_phase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumDrugDiscovery.prototype, "quantum_advantage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumDrugDiscovery.prototype, "molecular_simulation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumDrugDiscovery.prototype, "quantum_algorithms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumDrugDiscovery.prototype, "computational_resources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumDrugDiscovery.prototype, "drug_design_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumDrugDiscovery.prototype, "research_collaboration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumDrugDiscovery.prototype, "validation_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumDrugDiscovery.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuantumDrugDiscovery.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuantumDrugDiscovery.prototype, "updated_at", void 0);
exports.QuantumDrugDiscovery = QuantumDrugDiscovery = __decorate([
    (0, typeorm_1.Entity)('quantum_drug_discovery')
], QuantumDrugDiscovery);
let QuantumCryptographyHealthcare = class QuantumCryptographyHealthcare {
};
exports.QuantumCryptographyHealthcare = QuantumCryptographyHealthcare;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuantumCryptographyHealthcare.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QuantumCryptographyHealthcare.prototype, "crypto_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuantumCryptographyHealthcare.prototype, "application_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumCryptographyHealthcare.prototype, "crypto_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumCryptographyHealthcare.prototype, "security_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographyHealthcare.prototype, "quantum_key_distribution", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographyHealthcare.prototype, "post_quantum_cryptography", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographyHealthcare.prototype, "quantum_random_generation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographyHealthcare.prototype, "quantum_safe_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographyHealthcare.prototype, "healthcare_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographyHealthcare.prototype, "threat_mitigation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumCryptographyHealthcare.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuantumCryptographyHealthcare.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuantumCryptographyHealthcare.prototype, "updated_at", void 0);
exports.QuantumCryptographyHealthcare = QuantumCryptographyHealthcare = __decorate([
    (0, typeorm_1.Entity)('quantum_cryptography_healthcare')
], QuantumCryptographyHealthcare);
let QuantumMachineLearningHealth = class QuantumMachineLearningHealth {
};
exports.QuantumMachineLearningHealth = QuantumMachineLearningHealth;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuantumMachineLearningHealth.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QuantumMachineLearningHealth.prototype, "qml_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuantumMachineLearningHealth.prototype, "model_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumMachineLearningHealth.prototype, "algorithm_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumMachineLearningHealth.prototype, "healthcare_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningHealth.prototype, "quantum_circuit_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningHealth.prototype, "training_configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningHealth.prototype, "data_encoding", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningHealth.prototype, "healthcare_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningHealth.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningHealth.prototype, "experimental_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumMachineLearningHealth.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuantumMachineLearningHealth.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuantumMachineLearningHealth.prototype, "updated_at", void 0);
exports.QuantumMachineLearningHealth = QuantumMachineLearningHealth = __decorate([
    (0, typeorm_1.Entity)('quantum_machine_learning_health')
], QuantumMachineLearningHealth);
let QuantumGenomicsAnalysis = class QuantumGenomicsAnalysis {
};
exports.QuantumGenomicsAnalysis = QuantumGenomicsAnalysis;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuantumGenomicsAnalysis.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QuantumGenomicsAnalysis.prototype, "analysis_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuantumGenomicsAnalysis.prototype, "genomic_project", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumGenomicsAnalysis.prototype, "analysis_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumGenomicsAnalysis.prototype, "quantum_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumGenomicsAnalysis.prototype, "sequence_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumGenomicsAnalysis.prototype, "variant_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumGenomicsAnalysis.prototype, "protein_structure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumGenomicsAnalysis.prototype, "quantum_algorithms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumGenomicsAnalysis.prototype, "computational_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumGenomicsAnalysis.prototype, "clinical_translation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumGenomicsAnalysis.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuantumGenomicsAnalysis.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuantumGenomicsAnalysis.prototype, "updated_at", void 0);
exports.QuantumGenomicsAnalysis = QuantumGenomicsAnalysis = __decorate([
    (0, typeorm_1.Entity)('quantum_genomics_analysis')
], QuantumGenomicsAnalysis);
let QuantumMedicalImaging = class QuantumMedicalImaging {
};
exports.QuantumMedicalImaging = QuantumMedicalImaging;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuantumMedicalImaging.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QuantumMedicalImaging.prototype, "imaging_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuantumMedicalImaging.prototype, "imaging_study", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumMedicalImaging.prototype, "modality_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumMedicalImaging.prototype, "quantum_enhancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMedicalImaging.prototype, "quantum_sensing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMedicalImaging.prototype, "image_reconstruction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMedicalImaging.prototype, "quantum_image_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMedicalImaging.prototype, "diagnostic_enhancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMedicalImaging.prototype, "hardware_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMedicalImaging.prototype, "clinical_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumMedicalImaging.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuantumMedicalImaging.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuantumMedicalImaging.prototype, "updated_at", void 0);
exports.QuantumMedicalImaging = QuantumMedicalImaging = __decorate([
    (0, typeorm_1.Entity)('quantum_medical_imaging')
], QuantumMedicalImaging);
let HealthcareQuantumQualityMetrics = class HealthcareQuantumQualityMetrics {
};
exports.HealthcareQuantumQualityMetrics = HealthcareQuantumQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareQuantumQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareQuantumQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareQuantumQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareQuantumQualityMetrics.prototype, "quantum_advantage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareQuantumQualityMetrics.prototype, "technical_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareQuantumQualityMetrics.prototype, "research_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareQuantumQualityMetrics.prototype, "clinical_translation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareQuantumQualityMetrics.prototype, "security_enhancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareQuantumQualityMetrics.prototype, "economic_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareQuantumQualityMetrics.prototype, "adoption_readiness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareQuantumQualityMetrics.prototype, "future_potential", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareQuantumQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareQuantumQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareQuantumQualityMetrics = HealthcareQuantumQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_quantum_quality_metrics')
], HealthcareQuantumQualityMetrics);
//# sourceMappingURL=advanced-quantum-computing-cryptography.entity.js.map