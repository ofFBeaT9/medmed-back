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
exports.QuantumComputingHealthcareQualityMetrics = exports.QuantumResearchDevelopmentPlatforms = exports.QuantumOptimizationAlgorithms = exports.QuantumMachineLearningPlatforms = exports.QuantumCryptographySecuritySystems = exports.QuantumComputingHealthcareSystems = void 0;
const typeorm_1 = require("typeorm");
let QuantumComputingHealthcareSystems = class QuantumComputingHealthcareSystems {
};
exports.QuantumComputingHealthcareSystems = QuantumComputingHealthcareSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuantumComputingHealthcareSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QuantumComputingHealthcareSystems.prototype, "quantum_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuantumComputingHealthcareSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumComputingHealthcareSystems.prototype, "quantum_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumComputingHealthcareSystems.prototype, "quantum_provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareSystems.prototype, "quantum_hardware_specifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareSystems.prototype, "quantum_drug_discovery", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareSystems.prototype, "quantum_medical_imaging", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareSystems.prototype, "quantum_genomics_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareSystems.prototype, "quantum_optimization_problems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareSystems.prototype, "quantum_simulation_platforms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumComputingHealthcareSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuantumComputingHealthcareSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuantumComputingHealthcareSystems.prototype, "updated_at", void 0);
exports.QuantumComputingHealthcareSystems = QuantumComputingHealthcareSystems = __decorate([
    (0, typeorm_1.Entity)('quantum_computing_healthcare_systems')
], QuantumComputingHealthcareSystems);
let QuantumCryptographySecuritySystems = class QuantumCryptographySecuritySystems {
};
exports.QuantumCryptographySecuritySystems = QuantumCryptographySecuritySystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuantumCryptographySecuritySystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QuantumCryptographySecuritySystems.prototype, "quantum_crypto_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuantumCryptographySecuritySystems.prototype, "cryptography_system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumCryptographySecuritySystems.prototype, "quantum_cryptography_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumCryptographySecuritySystems.prototype, "security_protocol", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographySecuritySystems.prototype, "quantum_key_distribution", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographySecuritySystems.prototype, "post_quantum_cryptography", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographySecuritySystems.prototype, "quantum_safe_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographySecuritySystems.prototype, "healthcare_data_protection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographySecuritySystems.prototype, "quantum_random_generation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumCryptographySecuritySystems.prototype, "threat_assessment_mitigation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumCryptographySecuritySystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuantumCryptographySecuritySystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuantumCryptographySecuritySystems.prototype, "updated_at", void 0);
exports.QuantumCryptographySecuritySystems = QuantumCryptographySecuritySystems = __decorate([
    (0, typeorm_1.Entity)('quantum_cryptography_security_systems')
], QuantumCryptographySecuritySystems);
let QuantumMachineLearningPlatforms = class QuantumMachineLearningPlatforms {
};
exports.QuantumMachineLearningPlatforms = QuantumMachineLearningPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuantumMachineLearningPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QuantumMachineLearningPlatforms.prototype, "quantum_ml_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuantumMachineLearningPlatforms.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumMachineLearningPlatforms.prototype, "quantum_ml_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumMachineLearningPlatforms.prototype, "application_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningPlatforms.prototype, "quantum_neural_networks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningPlatforms.prototype, "quantum_feature_mapping", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningPlatforms.prototype, "medical_pattern_recognition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningPlatforms.prototype, "quantum_optimization_ml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningPlatforms.prototype, "quantum_advantage_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumMachineLearningPlatforms.prototype, "hybrid_classical_quantum", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumMachineLearningPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuantumMachineLearningPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuantumMachineLearningPlatforms.prototype, "updated_at", void 0);
exports.QuantumMachineLearningPlatforms = QuantumMachineLearningPlatforms = __decorate([
    (0, typeorm_1.Entity)('quantum_machine_learning_platforms')
], QuantumMachineLearningPlatforms);
let QuantumOptimizationAlgorithms = class QuantumOptimizationAlgorithms {
};
exports.QuantumOptimizationAlgorithms = QuantumOptimizationAlgorithms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuantumOptimizationAlgorithms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QuantumOptimizationAlgorithms.prototype, "quantum_optimization_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuantumOptimizationAlgorithms.prototype, "algorithm_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumOptimizationAlgorithms.prototype, "optimization_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumOptimizationAlgorithms.prototype, "quantum_algorithm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumOptimizationAlgorithms.prototype, "healthcare_scheduling_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumOptimizationAlgorithms.prototype, "clinical_trial_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumOptimizationAlgorithms.prototype, "treatment_protocol_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumOptimizationAlgorithms.prototype, "supply_chain_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumOptimizationAlgorithms.prototype, "healthcare_network_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumOptimizationAlgorithms.prototype, "quantum_algorithm_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumOptimizationAlgorithms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuantumOptimizationAlgorithms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuantumOptimizationAlgorithms.prototype, "updated_at", void 0);
exports.QuantumOptimizationAlgorithms = QuantumOptimizationAlgorithms = __decorate([
    (0, typeorm_1.Entity)('quantum_optimization_algorithms')
], QuantumOptimizationAlgorithms);
let QuantumResearchDevelopmentPlatforms = class QuantumResearchDevelopmentPlatforms {
};
exports.QuantumResearchDevelopmentPlatforms = QuantumResearchDevelopmentPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuantumResearchDevelopmentPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QuantumResearchDevelopmentPlatforms.prototype, "quantum_research_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuantumResearchDevelopmentPlatforms.prototype, "research_platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumResearchDevelopmentPlatforms.prototype, "research_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumResearchDevelopmentPlatforms.prototype, "collaboration_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumResearchDevelopmentPlatforms.prototype, "quantum_simulation_research", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumResearchDevelopmentPlatforms.prototype, "quantum_sensing_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumResearchDevelopmentPlatforms.prototype, "quantum_algorithm_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumResearchDevelopmentPlatforms.prototype, "collaborative_research_initiatives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumResearchDevelopmentPlatforms.prototype, "technology_transfer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumResearchDevelopmentPlatforms.prototype, "ethical_regulatory_considerations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumResearchDevelopmentPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuantumResearchDevelopmentPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuantumResearchDevelopmentPlatforms.prototype, "updated_at", void 0);
exports.QuantumResearchDevelopmentPlatforms = QuantumResearchDevelopmentPlatforms = __decorate([
    (0, typeorm_1.Entity)('quantum_research_development_platforms')
], QuantumResearchDevelopmentPlatforms);
let QuantumComputingHealthcareQualityMetrics = class QuantumComputingHealthcareQualityMetrics {
};
exports.QuantumComputingHealthcareQualityMetrics = QuantumComputingHealthcareQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuantumComputingHealthcareQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], QuantumComputingHealthcareQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], QuantumComputingHealthcareQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareQualityMetrics.prototype, "quantum_system_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareQualityMetrics.prototype, "quantum_cryptography_security", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareQualityMetrics.prototype, "quantum_machine_learning_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareQualityMetrics.prototype, "quantum_optimization_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareQualityMetrics.prototype, "quantum_research_innovation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareQualityMetrics.prototype, "healthcare_transformation_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareQualityMetrics.prototype, "quantum_technology_readiness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], QuantumComputingHealthcareQualityMetrics.prototype, "strategic_quantum_value", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuantumComputingHealthcareQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuantumComputingHealthcareQualityMetrics.prototype, "updated_at", void 0);
exports.QuantumComputingHealthcareQualityMetrics = QuantumComputingHealthcareQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('quantum_computing_healthcare_quality_metrics')
], QuantumComputingHealthcareQualityMetrics);
//# sourceMappingURL=advanced-healthcare-quantum-computing-cryptography.entity.js.map