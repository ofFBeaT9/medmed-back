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
exports.HealthcareItQualityMetrics = exports.ItPerformanceMonitoring = exports.DisasterRecoveryPlanning = exports.DataCenterOperations = exports.NetworkInfrastructureManagement = exports.CloudInfrastructureManagement = void 0;
const typeorm_1 = require("typeorm");
let CloudInfrastructureManagement = class CloudInfrastructureManagement {
};
exports.CloudInfrastructureManagement = CloudInfrastructureManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CloudInfrastructureManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CloudInfrastructureManagement.prototype, "infrastructure_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CloudInfrastructureManagement.prototype, "infrastructure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CloudInfrastructureManagement.prototype, "deployment_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CloudInfrastructureManagement.prototype, "service_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudInfrastructureManagement.prototype, "cloud_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudInfrastructureManagement.prototype, "scalability_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudInfrastructureManagement.prototype, "high_availability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudInfrastructureManagement.prototype, "security_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudInfrastructureManagement.prototype, "cost_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CloudInfrastructureManagement.prototype, "governance_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CloudInfrastructureManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CloudInfrastructureManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CloudInfrastructureManagement.prototype, "updated_at", void 0);
exports.CloudInfrastructureManagement = CloudInfrastructureManagement = __decorate([
    (0, typeorm_1.Entity)('cloud_infrastructure_management')
], CloudInfrastructureManagement);
let NetworkInfrastructureManagement = class NetworkInfrastructureManagement {
};
exports.NetworkInfrastructureManagement = NetworkInfrastructureManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], NetworkInfrastructureManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], NetworkInfrastructureManagement.prototype, "network_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], NetworkInfrastructureManagement.prototype, "network_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NetworkInfrastructureManagement.prototype, "network_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NetworkInfrastructureManagement.prototype, "topology_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NetworkInfrastructureManagement.prototype, "network_components", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NetworkInfrastructureManagement.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NetworkInfrastructureManagement.prototype, "security_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NetworkInfrastructureManagement.prototype, "quality_of_service", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NetworkInfrastructureManagement.prototype, "network_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NetworkInfrastructureManagement.prototype, "monitoring_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NetworkInfrastructureManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NetworkInfrastructureManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], NetworkInfrastructureManagement.prototype, "updated_at", void 0);
exports.NetworkInfrastructureManagement = NetworkInfrastructureManagement = __decorate([
    (0, typeorm_1.Entity)('network_infrastructure_management')
], NetworkInfrastructureManagement);
let DataCenterOperations = class DataCenterOperations {
};
exports.DataCenterOperations = DataCenterOperations;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DataCenterOperations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DataCenterOperations.prototype, "datacenter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DataCenterOperations.prototype, "datacenter_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataCenterOperations.prototype, "datacenter_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataCenterOperations.prototype, "tier_classification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataCenterOperations.prototype, "infrastructure_components", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataCenterOperations.prototype, "environmental_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataCenterOperations.prototype, "capacity_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataCenterOperations.prototype, "operations_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataCenterOperations.prototype, "business_continuity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DataCenterOperations.prototype, "compliance_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DataCenterOperations.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DataCenterOperations.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DataCenterOperations.prototype, "updated_at", void 0);
exports.DataCenterOperations = DataCenterOperations = __decorate([
    (0, typeorm_1.Entity)('data_center_operations')
], DataCenterOperations);
let DisasterRecoveryPlanning = class DisasterRecoveryPlanning {
};
exports.DisasterRecoveryPlanning = DisasterRecoveryPlanning;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DisasterRecoveryPlanning.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DisasterRecoveryPlanning.prototype, "dr_plan_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DisasterRecoveryPlanning.prototype, "dr_plan_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DisasterRecoveryPlanning.prototype, "disaster_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DisasterRecoveryPlanning.prototype, "criticality_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryPlanning.prototype, "risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryPlanning.prototype, "recovery_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryPlanning.prototype, "recovery_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryPlanning.prototype, "implementation_procedures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryPlanning.prototype, "testing_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DisasterRecoveryPlanning.prototype, "coordination_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DisasterRecoveryPlanning.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DisasterRecoveryPlanning.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DisasterRecoveryPlanning.prototype, "updated_at", void 0);
exports.DisasterRecoveryPlanning = DisasterRecoveryPlanning = __decorate([
    (0, typeorm_1.Entity)('disaster_recovery_planning')
], DisasterRecoveryPlanning);
let ItPerformanceMonitoring = class ItPerformanceMonitoring {
};
exports.ItPerformanceMonitoring = ItPerformanceMonitoring;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ItPerformanceMonitoring.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ItPerformanceMonitoring.prototype, "monitoring_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ItPerformanceMonitoring.prototype, "monitoring_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ItPerformanceMonitoring.prototype, "monitoring_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ItPerformanceMonitoring.prototype, "monitoring_frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ItPerformanceMonitoring.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ItPerformanceMonitoring.prototype, "monitoring_tools", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ItPerformanceMonitoring.prototype, "alerting_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ItPerformanceMonitoring.prototype, "analytics_insights", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ItPerformanceMonitoring.prototype, "reporting_dashboards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ItPerformanceMonitoring.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ItPerformanceMonitoring.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ItPerformanceMonitoring.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ItPerformanceMonitoring.prototype, "updated_at", void 0);
exports.ItPerformanceMonitoring = ItPerformanceMonitoring = __decorate([
    (0, typeorm_1.Entity)('it_performance_monitoring')
], ItPerformanceMonitoring);
let HealthcareItQualityMetrics = class HealthcareItQualityMetrics {
};
exports.HealthcareItQualityMetrics = HealthcareItQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareItQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareItQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareItQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareItQualityMetrics.prototype, "infrastructure_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareItQualityMetrics.prototype, "security_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareItQualityMetrics.prototype, "operational_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareItQualityMetrics.prototype, "user_satisfaction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareItQualityMetrics.prototype, "innovation_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareItQualityMetrics.prototype, "cost_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareItQualityMetrics.prototype, "business_alignment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareItQualityMetrics.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareItQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareItQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareItQualityMetrics = HealthcareItQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_it_quality_metrics')
], HealthcareItQualityMetrics);
//# sourceMappingURL=advanced-network-cloud-infrastructure.entity.js.map