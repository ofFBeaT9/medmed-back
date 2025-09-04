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
exports.HealthcareBlockchainQualityMetrics = exports.BlockchainInteroperability = exports.DecentralizedIdentityManagement = exports.SupplyChainTraceability = exports.SmartContractHealthcare = exports.BlockchainHealthRecords = void 0;
const typeorm_1 = require("typeorm");
let BlockchainHealthRecords = class BlockchainHealthRecords {
};
exports.BlockchainHealthRecords = BlockchainHealthRecords;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BlockchainHealthRecords.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BlockchainHealthRecords.prototype, "blockchain_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BlockchainHealthRecords.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BlockchainHealthRecords.prototype, "record_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BlockchainHealthRecords.prototype, "blockchain_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecords.prototype, "record_metadata", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecords.prototype, "access_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecords.prototype, "data_integrity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecords.prototype, "privacy_protection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecords.prototype, "interoperability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainHealthRecords.prototype, "consensus_mechanism", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BlockchainHealthRecords.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BlockchainHealthRecords.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BlockchainHealthRecords.prototype, "updated_at", void 0);
exports.BlockchainHealthRecords = BlockchainHealthRecords = __decorate([
    (0, typeorm_1.Entity)('blockchain_health_records')
], BlockchainHealthRecords);
let SmartContractHealthcare = class SmartContractHealthcare {
};
exports.SmartContractHealthcare = SmartContractHealthcare;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SmartContractHealthcare.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SmartContractHealthcare.prototype, "contract_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SmartContractHealthcare.prototype, "contract_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SmartContractHealthcare.prototype, "contract_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SmartContractHealthcare.prototype, "deployment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcare.prototype, "contract_logic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcare.prototype, "participants", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcare.prototype, "execution_parameters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcare.prototype, "oracle_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcare.prototype, "compliance_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartContractHealthcare.prototype, "monitoring_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SmartContractHealthcare.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SmartContractHealthcare.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SmartContractHealthcare.prototype, "updated_at", void 0);
exports.SmartContractHealthcare = SmartContractHealthcare = __decorate([
    (0, typeorm_1.Entity)('smart_contract_healthcare')
], SmartContractHealthcare);
let SupplyChainTraceability = class SupplyChainTraceability {
};
exports.SupplyChainTraceability = SupplyChainTraceability;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SupplyChainTraceability.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SupplyChainTraceability.prototype, "traceability_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SupplyChainTraceability.prototype, "product_identifier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SupplyChainTraceability.prototype, "product_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SupplyChainTraceability.prototype, "tracking_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainTraceability.prototype, "product_provenance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainTraceability.prototype, "supply_chain_events", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainTraceability.prototype, "verification_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainTraceability.prototype, "stakeholder_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainTraceability.prototype, "transparency_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SupplyChainTraceability.prototype, "anti_counterfeiting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SupplyChainTraceability.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SupplyChainTraceability.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SupplyChainTraceability.prototype, "updated_at", void 0);
exports.SupplyChainTraceability = SupplyChainTraceability = __decorate([
    (0, typeorm_1.Entity)('supply_chain_traceability')
], SupplyChainTraceability);
let DecentralizedIdentityManagement = class DecentralizedIdentityManagement {
};
exports.DecentralizedIdentityManagement = DecentralizedIdentityManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DecentralizedIdentityManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DecentralizedIdentityManagement.prototype, "identity_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DecentralizedIdentityManagement.prototype, "subject_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DecentralizedIdentityManagement.prototype, "identity_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DecentralizedIdentityManagement.prototype, "credential_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagement.prototype, "decentralized_identifier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagement.prototype, "verifiable_credentials", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagement.prototype, "identity_attributes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagement.prototype, "trust_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagement.prototype, "privacy_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DecentralizedIdentityManagement.prototype, "interoperability_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DecentralizedIdentityManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DecentralizedIdentityManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DecentralizedIdentityManagement.prototype, "updated_at", void 0);
exports.DecentralizedIdentityManagement = DecentralizedIdentityManagement = __decorate([
    (0, typeorm_1.Entity)('decentralized_identity_management')
], DecentralizedIdentityManagement);
let BlockchainInteroperability = class BlockchainInteroperability {
};
exports.BlockchainInteroperability = BlockchainInteroperability;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BlockchainInteroperability.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BlockchainInteroperability.prototype, "interop_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BlockchainInteroperability.prototype, "integration_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BlockchainInteroperability.prototype, "interop_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BlockchainInteroperability.prototype, "protocol_standard", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainInteroperability.prototype, "network_topology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainInteroperability.prototype, "data_exchange", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainInteroperability.prototype, "security_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainInteroperability.prototype, "governance_coordination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainInteroperability.prototype, "performance_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BlockchainInteroperability.prototype, "use_case_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BlockchainInteroperability.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BlockchainInteroperability.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BlockchainInteroperability.prototype, "updated_at", void 0);
exports.BlockchainInteroperability = BlockchainInteroperability = __decorate([
    (0, typeorm_1.Entity)('blockchain_interoperability')
], BlockchainInteroperability);
let HealthcareBlockchainQualityMetrics = class HealthcareBlockchainQualityMetrics {
};
exports.HealthcareBlockchainQualityMetrics = HealthcareBlockchainQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareBlockchainQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareBlockchainQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareBlockchainQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainQualityMetrics.prototype, "security_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainQualityMetrics.prototype, "privacy_protection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainQualityMetrics.prototype, "interoperability_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainQualityMetrics.prototype, "performance_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainQualityMetrics.prototype, "governance_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainQualityMetrics.prototype, "user_adoption", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainQualityMetrics.prototype, "business_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareBlockchainQualityMetrics.prototype, "innovation_advancement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareBlockchainQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareBlockchainQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareBlockchainQualityMetrics = HealthcareBlockchainQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_blockchain_quality_metrics')
], HealthcareBlockchainQualityMetrics);
//# sourceMappingURL=advanced-blockchain-distributed-ledger.entity.js.map