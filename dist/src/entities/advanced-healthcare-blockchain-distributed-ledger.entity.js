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
exports.BlockchainHealthcareQualityMetrics = exports.ConsensusGovernanceMechanisms = exports.PharmaceuticalSupplyChainTransparency = exports.DecentralizedIdentityManagementSystems = exports.SmartContractHealthcareSystems = exports.HealthcareBlockchainNetworks = void 0;
const typeorm_1 = require("typeorm");
let HealthcareBlockchainNetworks = class HealthcareBlockchainNetworks {
};
exports.HealthcareBlockchainNetworks = HealthcareBlockchainNetworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareBlockchainNetworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareBlockchainNetworks.prototype, "blockchain_network_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthcareBlockchainNetworks.prototype, "network_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareBlockchainNetworks.prototype, "blockchain_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareBlockchainNetworks.prototype, "consensus_mechanism", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainNetworks.prototype, "network_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainNetworks.prototype, "healthcare_participants", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainNetworks.prototype, "data_governance_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainNetworks.prototype, "security_cryptography", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainNetworks.prototype, "performance_scalability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainNetworks.prototype, "integration_interfaces", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareBlockchainNetworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareBlockchainNetworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareBlockchainNetworks.prototype, "updated_at", void 0);
exports.HealthcareBlockchainNetworks = HealthcareBlockchainNetworks = __decorate([
    (0, typeorm_1.Entity)('healthcare_blockchain_networks')
], HealthcareBlockchainNetworks);
let SmartContractHealthcareSystems = class SmartContractHealthcareSystems {
};
exports.SmartContractHealthcareSystems = SmartContractHealthcareSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SmartContractHealthcareSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SmartContractHealthcareSystems.prototype, "smart_contract_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SmartContractHealthcareSystems.prototype, "contract_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SmartContractHealthcareSystems.prototype, "contract_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SmartContractHealthcareSystems.prototype, "execution_platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcareSystems.prototype, "patient_consent_contracts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcareSystems.prototype, "insurance_claim_automation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcareSystems.prototype, "clinical_trial_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcareSystems.prototype, "supply_chain_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcareSystems.prototype, "credential_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcareSystems.prototype, "contract_governance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SmartContractHealthcareSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SmartContractHealthcareSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SmartContractHealthcareSystems.prototype, "updated_at", void 0);
exports.SmartContractHealthcareSystems = SmartContractHealthcareSystems = __decorate([
    (0, typeorm_1.Entity)('smart_contract_healthcare_systems')
], SmartContractHealthcareSystems);
let DecentralizedIdentityManagementSystems = class DecentralizedIdentityManagementSystems {
};
exports.DecentralizedIdentityManagementSystems = DecentralizedIdentityManagementSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DecentralizedIdentityManagementSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DecentralizedIdentityManagementSystems.prototype, "identity_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DecentralizedIdentityManagementSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DecentralizedIdentityManagementSystems.prototype, "identity_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DecentralizedIdentityManagementSystems.prototype, "identity_standard", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagementSystems.prototype, "patient_identity_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagementSystems.prototype, "provider_credential_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagementSystems.prototype, "verifiable_credentials", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagementSystems.prototype, "access_control_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagementSystems.prototype, "interoperability_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagementSystems.prototype, "privacy_security_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DecentralizedIdentityManagementSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DecentralizedIdentityManagementSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DecentralizedIdentityManagementSystems.prototype, "updated_at", void 0);
exports.DecentralizedIdentityManagementSystems = DecentralizedIdentityManagementSystems = __decorate([
    (0, typeorm_1.Entity)('decentralized_identity_management_systems')
], DecentralizedIdentityManagementSystems);
let PharmaceuticalSupplyChainTransparency = class PharmaceuticalSupplyChainTransparency {
};
exports.PharmaceuticalSupplyChainTransparency = PharmaceuticalSupplyChainTransparency;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PharmaceuticalSupplyChainTransparency.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PharmaceuticalSupplyChainTransparency.prototype, "supply_chain_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PharmaceuticalSupplyChainTransparency.prototype, "supply_chain_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PharmaceuticalSupplyChainTransparency.prototype, "tracking_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PharmaceuticalSupplyChainTransparency.prototype, "transparency_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmaceuticalSupplyChainTransparency.prototype, "drug_manufacturing_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmaceuticalSupplyChainTransparency.prototype, "distribution_logistics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmaceuticalSupplyChainTransparency.prototype, "authentication_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmaceuticalSupplyChainTransparency.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmaceuticalSupplyChainTransparency.prototype, "patient_safety_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PharmaceuticalSupplyChainTransparency.prototype, "stakeholder_ecosystem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PharmaceuticalSupplyChainTransparency.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PharmaceuticalSupplyChainTransparency.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PharmaceuticalSupplyChainTransparency.prototype, "updated_at", void 0);
exports.PharmaceuticalSupplyChainTransparency = PharmaceuticalSupplyChainTransparency = __decorate([
    (0, typeorm_1.Entity)('pharmaceutical_supply_chain_transparency')
], PharmaceuticalSupplyChainTransparency);
let ConsensusGovernanceMechanisms = class ConsensusGovernanceMechanisms {
};
exports.ConsensusGovernanceMechanisms = ConsensusGovernanceMechanisms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ConsensusGovernanceMechanisms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ConsensusGovernanceMechanisms.prototype, "consensus_mechanism_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ConsensusGovernanceMechanisms.prototype, "mechanism_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ConsensusGovernanceMechanisms.prototype, "consensus_algorithm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ConsensusGovernanceMechanisms.prototype, "governance_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ConsensusGovernanceMechanisms.prototype, "validator_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ConsensusGovernanceMechanisms.prototype, "decision_making_processes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ConsensusGovernanceMechanisms.prototype, "stakeholder_participation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ConsensusGovernanceMechanisms.prototype, "network_upgrades", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ConsensusGovernanceMechanisms.prototype, "dispute_resolution", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ConsensusGovernanceMechanisms.prototype, "compliance_oversight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ConsensusGovernanceMechanisms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ConsensusGovernanceMechanisms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ConsensusGovernanceMechanisms.prototype, "updated_at", void 0);
exports.ConsensusGovernanceMechanisms = ConsensusGovernanceMechanisms = __decorate([
    (0, typeorm_1.Entity)('consensus_governance_mechanisms')
], ConsensusGovernanceMechanisms);
let BlockchainHealthcareQualityMetrics = class BlockchainHealthcareQualityMetrics {
};
exports.BlockchainHealthcareQualityMetrics = BlockchainHealthcareQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BlockchainHealthcareQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BlockchainHealthcareQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BlockchainHealthcareQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthcareQualityMetrics.prototype, "blockchain_network_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthcareQualityMetrics.prototype, "smart_contract_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthcareQualityMetrics.prototype, "decentralized_identity_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthcareQualityMetrics.prototype, "supply_chain_transparency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthcareQualityMetrics.prototype, "consensus_governance_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthcareQualityMetrics.prototype, "blockchain_security_posture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthcareQualityMetrics.prototype, "healthcare_value_creation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthcareQualityMetrics.prototype, "strategic_blockchain_impact", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BlockchainHealthcareQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BlockchainHealthcareQualityMetrics.prototype, "updated_at", void 0);
exports.BlockchainHealthcareQualityMetrics = BlockchainHealthcareQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('blockchain_healthcare_quality_metrics')
], BlockchainHealthcareQualityMetrics);
//# sourceMappingURL=advanced-healthcare-blockchain-distributed-ledger.entity.js.map