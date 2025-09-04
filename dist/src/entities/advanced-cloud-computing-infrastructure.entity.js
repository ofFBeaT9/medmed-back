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
exports.CloudComputingInfrastructureQualityMetrics = exports.CloudScalabilityPerformanceOptimization = exports.DisasterRecoveryBusinessContinuity = exports.CloudSecurityFrameworks = exports.HybridCloudIntegrationPlatforms = exports.MultiCloudArchitectureSystems = void 0;
const typeorm_1 = require("typeorm");
let MultiCloudArchitectureSystems = class MultiCloudArchitectureSystems {
};
exports.MultiCloudArchitectureSystems = MultiCloudArchitectureSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MultiCloudArchitectureSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MultiCloudArchitectureSystems.prototype, "multi_cloud_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MultiCloudArchitectureSystems.prototype, "architecture_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MultiCloudArchitectureSystems.prototype, "cloud_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MultiCloudArchitectureSystems.prototype, "deployment_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiCloudArchitectureSystems.prototype, "cloud_provider_ecosystem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiCloudArchitectureSystems.prototype, "workload_distribution", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiCloudArchitectureSystems.prototype, "integration_orchestration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiCloudArchitectureSystems.prototype, "data_management_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiCloudArchitectureSystems.prototype, "performance_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MultiCloudArchitectureSystems.prototype, "governance_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MultiCloudArchitectureSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MultiCloudArchitectureSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MultiCloudArchitectureSystems.prototype, "updated_at", void 0);
exports.MultiCloudArchitectureSystems = MultiCloudArchitectureSystems = __decorate([
    (0, typeorm_1.Entity)('multi_cloud_architecture_systems')
], MultiCloudArchitectureSystems);
let HybridCloudIntegrationPlatforms = class HybridCloudIntegrationPlatforms {
};
exports.HybridCloudIntegrationPlatforms = HybridCloudIntegrationPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HybridCloudIntegrationPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HybridCloudIntegrationPlatforms.prototype, "hybrid_platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HybridCloudIntegrationPlatforms.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HybridCloudIntegrationPlatforms.prototype, "integration_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HybridCloudIntegrationPlatforms.prototype, "connectivity_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HybridCloudIntegrationPlatforms.prototype, "on_premises_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HybridCloudIntegrationPlatforms.prototype, "cloud_services_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HybridCloudIntegrationPlatforms.prototype, "workload_mobility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HybridCloudIntegrationPlatforms.prototype, "unified_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HybridCloudIntegrationPlatforms.prototype, "data_synchronization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HybridCloudIntegrationPlatforms.prototype, "business_continuity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HybridCloudIntegrationPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HybridCloudIntegrationPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HybridCloudIntegrationPlatforms.prototype, "updated_at", void 0);
exports.HybridCloudIntegrationPlatforms = HybridCloudIntegrationPlatforms = __decorate([
    (0, typeorm_1.Entity)('hybrid_cloud_integration_platforms')
], HybridCloudIntegrationPlatforms);
let CloudSecurityFrameworks = class CloudSecurityFrameworks {
};
exports.CloudSecurityFrameworks = CloudSecurityFrameworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CloudSecurityFrameworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CloudSecurityFrameworks.prototype, "cloud_security_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CloudSecurityFrameworks.prototype, "framework_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CloudSecurityFrameworks.prototype, "security_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CloudSecurityFrameworks.prototype, "security_maturity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudSecurityFrameworks.prototype, "identity_access_security", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudSecurityFrameworks.prototype, "data_protection_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudSecurityFrameworks.prototype, "network_security_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudSecurityFrameworks.prototype, "application_security", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudSecurityFrameworks.prototype, "compliance_governance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudSecurityFrameworks.prototype, "monitoring_visibility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CloudSecurityFrameworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CloudSecurityFrameworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CloudSecurityFrameworks.prototype, "updated_at", void 0);
exports.CloudSecurityFrameworks = CloudSecurityFrameworks = __decorate([
    (0, typeorm_1.Entity)('cloud_security_frameworks')
], CloudSecurityFrameworks);
let DisasterRecoveryBusinessContinuity = class DisasterRecoveryBusinessContinuity {
};
exports.DisasterRecoveryBusinessContinuity = DisasterRecoveryBusinessContinuity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DisasterRecoveryBusinessContinuity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DisasterRecoveryBusinessContinuity.prototype, "disaster_recovery_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DisasterRecoveryBusinessContinuity.prototype, "plan_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DisasterRecoveryBusinessContinuity.prototype, "disaster_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DisasterRecoveryBusinessContinuity.prototype, "recovery_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryBusinessContinuity.prototype, "business_impact_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryBusinessContinuity.prototype, "recovery_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryBusinessContinuity.prototype, "data_backup_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryBusinessContinuity.prototype, "recovery_procedures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryBusinessContinuity.prototype, "communication_coordination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryBusinessContinuity.prototype, "testing_maintenance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DisasterRecoveryBusinessContinuity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DisasterRecoveryBusinessContinuity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DisasterRecoveryBusinessContinuity.prototype, "updated_at", void 0);
exports.DisasterRecoveryBusinessContinuity = DisasterRecoveryBusinessContinuity = __decorate([
    (0, typeorm_1.Entity)('disaster_recovery_business_continuity')
], DisasterRecoveryBusinessContinuity);
let CloudScalabilityPerformanceOptimization = class CloudScalabilityPerformanceOptimization {
};
exports.CloudScalabilityPerformanceOptimization = CloudScalabilityPerformanceOptimization;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CloudScalabilityPerformanceOptimization.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CloudScalabilityPerformanceOptimization.prototype, "optimization_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CloudScalabilityPerformanceOptimization.prototype, "optimization_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CloudScalabilityPerformanceOptimization.prototype, "scaling_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CloudScalabilityPerformanceOptimization.prototype, "optimization_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudScalabilityPerformanceOptimization.prototype, "auto_scaling_configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudScalabilityPerformanceOptimization.prototype, "resource_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudScalabilityPerformanceOptimization.prototype, "performance_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudScalabilityPerformanceOptimization.prototype, "cost_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudScalabilityPerformanceOptimization.prototype, "capacity_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudScalabilityPerformanceOptimization.prototype, "optimization_automation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CloudScalabilityPerformanceOptimization.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CloudScalabilityPerformanceOptimization.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CloudScalabilityPerformanceOptimization.prototype, "updated_at", void 0);
exports.CloudScalabilityPerformanceOptimization = CloudScalabilityPerformanceOptimization = __decorate([
    (0, typeorm_1.Entity)('cloud_scalability_performance_optimization')
], CloudScalabilityPerformanceOptimization);
let CloudComputingInfrastructureQualityMetrics = class CloudComputingInfrastructureQualityMetrics {
};
exports.CloudComputingInfrastructureQualityMetrics = CloudComputingInfrastructureQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CloudComputingInfrastructureQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CloudComputingInfrastructureQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CloudComputingInfrastructureQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudComputingInfrastructureQualityMetrics.prototype, "multi_cloud_architecture_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudComputingInfrastructureQualityMetrics.prototype, "hybrid_cloud_integration_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudComputingInfrastructureQualityMetrics.prototype, "cloud_security_posture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudComputingInfrastructureQualityMetrics.prototype, "disaster_recovery_readiness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudComputingInfrastructureQualityMetrics.prototype, "scalability_performance_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudComputingInfrastructureQualityMetrics.prototype, "cloud_operational_excellence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudComputingInfrastructureQualityMetrics.prototype, "cloud_investment_returns", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudComputingInfrastructureQualityMetrics.prototype, "strategic_cloud_alignment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CloudComputingInfrastructureQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CloudComputingInfrastructureQualityMetrics.prototype, "updated_at", void 0);
exports.CloudComputingInfrastructureQualityMetrics = CloudComputingInfrastructureQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('cloud_computing_infrastructure_quality_metrics')
], CloudComputingInfrastructureQualityMetrics);
//# sourceMappingURL=advanced-cloud-computing-infrastructure.entity.js.map