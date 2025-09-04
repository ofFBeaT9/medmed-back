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
exports.IoTEdgeComputingQualityMetrics = exports.IntelligentEdgeAnalyticsSystems = exports.WearableTechnologyPlatforms = exports.RealTimePatientMonitoringSystems = exports.EdgeComputingInfrastructure = exports.MedicalIoTDeviceEcosystems = void 0;
const typeorm_1 = require("typeorm");
let MedicalIoTDeviceEcosystems = class MedicalIoTDeviceEcosystems {
};
exports.MedicalIoTDeviceEcosystems = MedicalIoTDeviceEcosystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MedicalIoTDeviceEcosystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MedicalIoTDeviceEcosystems.prototype, "iot_ecosystem_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MedicalIoTDeviceEcosystems.prototype, "ecosystem_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalIoTDeviceEcosystems.prototype, "device_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalIoTDeviceEcosystems.prototype, "deployment_environment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceEcosystems.prototype, "device_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceEcosystems.prototype, "connectivity_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceEcosystems.prototype, "data_collection_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceEcosystems.prototype, "interoperability_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceEcosystems.prototype, "security_frameworks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceEcosystems.prototype, "clinical_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalIoTDeviceEcosystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MedicalIoTDeviceEcosystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MedicalIoTDeviceEcosystems.prototype, "updated_at", void 0);
exports.MedicalIoTDeviceEcosystems = MedicalIoTDeviceEcosystems = __decorate([
    (0, typeorm_1.Entity)('medical_iot_device_ecosystems')
], MedicalIoTDeviceEcosystems);
let EdgeComputingInfrastructure = class EdgeComputingInfrastructure {
};
exports.EdgeComputingInfrastructure = EdgeComputingInfrastructure;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EdgeComputingInfrastructure.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EdgeComputingInfrastructure.prototype, "edge_infrastructure_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EdgeComputingInfrastructure.prototype, "infrastructure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EdgeComputingInfrastructure.prototype, "edge_deployment_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EdgeComputingInfrastructure.prototype, "computing_paradigm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeComputingInfrastructure.prototype, "edge_hardware_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeComputingInfrastructure.prototype, "software_platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeComputingInfrastructure.prototype, "distributed_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeComputingInfrastructure.prototype, "data_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeComputingInfrastructure.prototype, "cloud_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeComputingInfrastructure.prototype, "monitoring_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EdgeComputingInfrastructure.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EdgeComputingInfrastructure.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EdgeComputingInfrastructure.prototype, "updated_at", void 0);
exports.EdgeComputingInfrastructure = EdgeComputingInfrastructure = __decorate([
    (0, typeorm_1.Entity)('edge_computing_infrastructure')
], EdgeComputingInfrastructure);
let RealTimePatientMonitoringSystems = class RealTimePatientMonitoringSystems {
};
exports.RealTimePatientMonitoringSystems = RealTimePatientMonitoringSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RealTimePatientMonitoringSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RealTimePatientMonitoringSystems.prototype, "monitoring_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], RealTimePatientMonitoringSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RealTimePatientMonitoringSystems.prototype, "monitoring_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RealTimePatientMonitoringSystems.prototype, "patient_setting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoringSystems.prototype, "physiological_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoringSystems.prototype, "sensor_networks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoringSystems.prototype, "real_time_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoringSystems.prototype, "alert_notification_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoringSystems.prototype, "clinical_decision_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoringSystems.prototype, "patient_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RealTimePatientMonitoringSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RealTimePatientMonitoringSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RealTimePatientMonitoringSystems.prototype, "updated_at", void 0);
exports.RealTimePatientMonitoringSystems = RealTimePatientMonitoringSystems = __decorate([
    (0, typeorm_1.Entity)('real_time_patient_monitoring_systems')
], RealTimePatientMonitoringSystems);
let WearableTechnologyPlatforms = class WearableTechnologyPlatforms {
};
exports.WearableTechnologyPlatforms = WearableTechnologyPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WearableTechnologyPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], WearableTechnologyPlatforms.prototype, "wearable_platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], WearableTechnologyPlatforms.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], WearableTechnologyPlatforms.prototype, "wearable_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], WearableTechnologyPlatforms.prototype, "health_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WearableTechnologyPlatforms.prototype, "sensing_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WearableTechnologyPlatforms.prototype, "data_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WearableTechnologyPlatforms.prototype, "user_experience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WearableTechnologyPlatforms.prototype, "health_insights", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WearableTechnologyPlatforms.prototype, "clinical_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], WearableTechnologyPlatforms.prototype, "privacy_security", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], WearableTechnologyPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WearableTechnologyPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], WearableTechnologyPlatforms.prototype, "updated_at", void 0);
exports.WearableTechnologyPlatforms = WearableTechnologyPlatforms = __decorate([
    (0, typeorm_1.Entity)('wearable_technology_platforms')
], WearableTechnologyPlatforms);
let IntelligentEdgeAnalyticsSystems = class IntelligentEdgeAnalyticsSystems {
};
exports.IntelligentEdgeAnalyticsSystems = IntelligentEdgeAnalyticsSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IntelligentEdgeAnalyticsSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], IntelligentEdgeAnalyticsSystems.prototype, "edge_analytics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], IntelligentEdgeAnalyticsSystems.prototype, "analytics_system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntelligentEdgeAnalyticsSystems.prototype, "analytics_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntelligentEdgeAnalyticsSystems.prototype, "intelligence_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentEdgeAnalyticsSystems.prototype, "edge_ai_models", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentEdgeAnalyticsSystems.prototype, "real_time_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentEdgeAnalyticsSystems.prototype, "distributed_intelligence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentEdgeAnalyticsSystems.prototype, "adaptive_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentEdgeAnalyticsSystems.prototype, "clinical_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IntelligentEdgeAnalyticsSystems.prototype, "performance_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IntelligentEdgeAnalyticsSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IntelligentEdgeAnalyticsSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], IntelligentEdgeAnalyticsSystems.prototype, "updated_at", void 0);
exports.IntelligentEdgeAnalyticsSystems = IntelligentEdgeAnalyticsSystems = __decorate([
    (0, typeorm_1.Entity)('intelligent_edge_analytics_systems')
], IntelligentEdgeAnalyticsSystems);
let IoTEdgeComputingQualityMetrics = class IoTEdgeComputingQualityMetrics {
};
exports.IoTEdgeComputingQualityMetrics = IoTEdgeComputingQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IoTEdgeComputingQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], IoTEdgeComputingQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IoTEdgeComputingQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "iot_device_ecosystem_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "edge_computing_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "real_time_monitoring_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "wearable_technology_adoption", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "edge_analytics_intelligence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "system_integration_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "iot_investment_returns", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "technology_sustainability", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IoTEdgeComputingQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], IoTEdgeComputingQualityMetrics.prototype, "updated_at", void 0);
exports.IoTEdgeComputingQualityMetrics = IoTEdgeComputingQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('iot_edge_computing_quality_metrics')
], IoTEdgeComputingQualityMetrics);
//# sourceMappingURL=advanced-iot-edge-computing.entity.js.map