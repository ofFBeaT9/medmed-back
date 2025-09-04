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
exports.BlockchainDistributedSystemsQualityMetrics = exports.DistributedHealthcareNetworks = exports.HealthcareSmartContracts = exports.DecentralizedCredentialingSystems = exports.SupplyChainVerificationSystems = exports.BlockchainHealthRecordsSystems = void 0;
const typeorm_1 = require("typeorm");
let BlockchainHealthRecordsSystems = class BlockchainHealthRecordsSystems {
};
exports.BlockchainHealthRecordsSystems = BlockchainHealthRecordsSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BlockchainHealthRecordsSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BlockchainHealthRecordsSystems.prototype, "blockchain_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BlockchainHealthRecordsSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BlockchainHealthRecordsSystems.prototype, "blockchain_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BlockchainHealthRecordsSystems.prototype, "consensus_mechanism", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecordsSystems.prototype, "health_record_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecordsSystems.prototype, "smart_contract_functionality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecordsSystems.prototype, "patient_data_sovereignty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecordsSystems.prototype, "healthcare_provider_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecordsSystems.prototype, "security_privacy_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecordsSystems.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BlockchainHealthRecordsSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BlockchainHealthRecordsSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BlockchainHealthRecordsSystems.prototype, "updated_at", void 0);
exports.BlockchainHealthRecordsSystems = BlockchainHealthRecordsSystems = __decorate([
    (0, typeorm_1.Entity)('blockchain_health_records_systems')
], BlockchainHealthRecordsSystems);
let SupplyChainVerificationSystems = class SupplyChainVerificationSystems {
};
exports.SupplyChainVerificationSystems = SupplyChainVerificationSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SupplyChainVerificationSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SupplyChainVerificationSystems.prototype, "supply_chain_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SupplyChainVerificationSystems.prototype, "verification_system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SupplyChainVerificationSystems.prototype, "supply_chain_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SupplyChainVerificationSystems.prototype, "verification_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainVerificationSystems.prototype, "product_tracking_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainVerificationSystems.prototype, "stakeholder_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainVerificationSystems.prototype, "anti_counterfeiting_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainVerificationSystems.prototype, "quality_assurance_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainVerificationSystems.prototype, "regulatory_compliance_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainVerificationSystems.prototype, "sustainability_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SupplyChainVerificationSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SupplyChainVerificationSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SupplyChainVerificationSystems.prototype, "updated_at", void 0);
exports.SupplyChainVerificationSystems = SupplyChainVerificationSystems = __decorate([
    (0, typeorm_1.Entity)('supply_chain_verification_systems')
], SupplyChainVerificationSystems);
let DecentralizedCredentialingSystems = class DecentralizedCredentialingSystems {
};
exports.DecentralizedCredentialingSystems = DecentralizedCredentialingSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DecentralizedCredentialingSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DecentralizedCredentialingSystems.prototype, "credentialing_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DecentralizedCredentialingSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DecentralizedCredentialingSystems.prototype, "credential_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DecentralizedCredentialingSystems.prototype, "verification_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedCredentialingSystems.prototype, "digital_credential_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedCredentialingSystems.prototype, "professional_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedCredentialingSystems.prototype, "institutional_credentialing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedCredentialingSystems.prototype, "cross_institutional_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedCredentialingSystems.prototype, "automated_verification_processes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedCredentialingSystems.prototype, "privacy_security_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DecentralizedCredentialingSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DecentralizedCredentialingSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DecentralizedCredentialingSystems.prototype, "updated_at", void 0);
exports.DecentralizedCredentialingSystems = DecentralizedCredentialingSystems = __decorate([
    (0, typeorm_1.Entity)('decentralized_credentialing_systems')
], DecentralizedCredentialingSystems);
let HealthcareSmartContracts = class HealthcareSmartContracts {
};
exports.HealthcareSmartContracts = HealthcareSmartContracts;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareSmartContracts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareSmartContracts.prototype, "smart_contract_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthcareSmartContracts.prototype, "contract_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareSmartContracts.prototype, "contract_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareSmartContracts.prototype, "execution_trigger", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSmartContracts.prototype, "contract_logic_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSmartContracts.prototype, "healthcare_use_cases", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSmartContracts.prototype, "integration_interfaces", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSmartContracts.prototype, "compliance_governance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSmartContracts.prototype, "performance_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareSmartContracts.prototype, "stakeholder_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareSmartContracts.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareSmartContracts.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareSmartContracts.prototype, "updated_at", void 0);
exports.HealthcareSmartContracts = HealthcareSmartContracts = __decorate([
    (0, typeorm_1.Entity)('healthcare_smart_contracts')
], HealthcareSmartContracts);
let DistributedHealthcareNetworks = class DistributedHealthcareNetworks {
};
exports.DistributedHealthcareNetworks = DistributedHealthcareNetworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DistributedHealthcareNetworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DistributedHealthcareNetworks.prototype, "network_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DistributedHealthcareNetworks.prototype, "network_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DistributedHealthcareNetworks.prototype, "network_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DistributedHealthcareNetworks.prototype, "network_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthcareNetworks.prototype, "network_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthcareNetworks.prototype, "participant_ecosystem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthcareNetworks.prototype, "data_sharing_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthcareNetworks.prototype, "governance_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthcareNetworks.prototype, "value_creation_models", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthcareNetworks.prototype, "security_trust_frameworks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DistributedHealthcareNetworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DistributedHealthcareNetworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DistributedHealthcareNetworks.prototype, "updated_at", void 0);
exports.DistributedHealthcareNetworks = DistributedHealthcareNetworks = __decorate([
    (0, typeorm_1.Entity)('distributed_healthcare_networks')
], DistributedHealthcareNetworks);
let BlockchainDistributedSystemsQualityMetrics = class BlockchainDistributedSystemsQualityMetrics {
};
exports.BlockchainDistributedSystemsQualityMetrics = BlockchainDistributedSystemsQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BlockchainDistributedSystemsQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BlockchainDistributedSystemsQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BlockchainDistributedSystemsQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainDistributedSystemsQualityMetrics.prototype, "blockchain_health_records_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainDistributedSystemsQualityMetrics.prototype, "supply_chain_verification_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainDistributedSystemsQualityMetrics.prototype, "credentialing_system_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainDistributedSystemsQualityMetrics.prototype, "smart_contract_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainDistributedSystemsQualityMetrics.prototype, "distributed_network_health", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainDistributedSystemsQualityMetrics.prototype, "blockchain_innovation_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainDistributedSystemsQualityMetrics.prototype, "technology_investment_returns", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainDistributedSystemsQualityMetrics.prototype, "ecosystem_sustainability", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BlockchainDistributedSystemsQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BlockchainDistributedSystemsQualityMetrics.prototype, "updated_at", void 0);
exports.BlockchainDistributedSystemsQualityMetrics = BlockchainDistributedSystemsQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('blockchain_distributed_systems_quality_metrics')
], BlockchainDistributedSystemsQualityMetrics);
//# sourceMappingURL=advanced-blockchain-distributed-systems.entity.js.map