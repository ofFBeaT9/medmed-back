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
exports.IoTEdgeComputingQualityMetrics = exports.IoTSecurityManagementFrameworks = exports.RealTimeHealthMonitoringPlatforms = exports.SensorNetworksMonitoringSystems = exports.HealthcareEdgeComputingPlatforms = exports.MedicalIoTDeviceManagementSystems = void 0;
const typeorm_1 = require("typeorm");
let MedicalIoTDeviceManagementSystems = class MedicalIoTDeviceManagementSystems {
};
exports.MedicalIoTDeviceManagementSystems = MedicalIoTDeviceManagementSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MedicalIoTDeviceManagementSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MedicalIoTDeviceManagementSystems.prototype, "iot_device_system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MedicalIoTDeviceManagementSystems.prototype, "device_system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalIoTDeviceManagementSystems.prototype, "device_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalIoTDeviceManagementSystems.prototype, "connectivity_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceManagementSystems.prototype, "device_inventory_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceManagementSystems.prototype, "patient_monitoring_devices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceManagementSystems.prototype, "clinical_diagnostic_devices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceManagementSystems.prototype, "therapeutic_intervention_devices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceManagementSystems.prototype, "environmental_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDeviceManagementSystems.prototype, "device_integration_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalIoTDeviceManagementSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MedicalIoTDeviceManagementSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MedicalIoTDeviceManagementSystems.prototype, "updated_at", void 0);
exports.MedicalIoTDeviceManagementSystems = MedicalIoTDeviceManagementSystems = __decorate([
    (0, typeorm_1.Entity)('medical_iot_device_management_systems')
], MedicalIoTDeviceManagementSystems);
let HealthcareEdgeComputingPlatforms = class HealthcareEdgeComputingPlatforms {
};
exports.HealthcareEdgeComputingPlatforms = HealthcareEdgeComputingPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareEdgeComputingPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareEdgeComputingPlatforms.prototype, "edge_platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthcareEdgeComputingPlatforms.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareEdgeComputingPlatforms.prototype, "edge_deployment_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareEdgeComputingPlatforms.prototype, "computing_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeComputingPlatforms.prototype, "edge_infrastructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeComputingPlatforms.prototype, "real_time_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeComputingPlatforms.prototype, "local_data_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeComputingPlatforms.prototype, "edge_ai_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeComputingPlatforms.prototype, "cloud_edge_orchestration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeComputingPlatforms.prototype, "edge_security_frameworks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareEdgeComputingPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareEdgeComputingPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareEdgeComputingPlatforms.prototype, "updated_at", void 0);
exports.HealthcareEdgeComputingPlatforms = HealthcareEdgeComputingPlatforms = __decorate([
    (0, typeorm_1.Entity)('healthcare_edge_computing_platforms')
], HealthcareEdgeComputingPlatforms);
let SensorNetworksMonitoringSystems = class SensorNetworksMonitoringSystems {
};
exports.SensorNetworksMonitoringSystems = SensorNetworksMonitoringSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SensorNetworksMonitoringSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SensorNetworksMonitoringSystems.prototype, "sensor_network_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SensorNetworksMonitoringSystems.prototype, "network_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SensorNetworksMonitoringSystems.prototype, "network_topology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SensorNetworksMonitoringSystems.prototype, "sensor_type_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SensorNetworksMonitoringSystems.prototype, "physiological_sensors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SensorNetworksMonitoringSystems.prototype, "environmental_sensors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SensorNetworksMonitoringSystems.prototype, "activity_movement_sensors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SensorNetworksMonitoringSystems.prototype, "network_communication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SensorNetworksMonitoringSystems.prototype, "data_collection_aggregation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SensorNetworksMonitoringSystems.prototype, "network_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SensorNetworksMonitoringSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SensorNetworksMonitoringSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SensorNetworksMonitoringSystems.prototype, "updated_at", void 0);
exports.SensorNetworksMonitoringSystems = SensorNetworksMonitoringSystems = __decorate([
    (0, typeorm_1.Entity)('sensor_networks_monitoring_systems')
], SensorNetworksMonitoringSystems);
let RealTimeHealthMonitoringPlatforms = class RealTimeHealthMonitoringPlatforms {
};
exports.RealTimeHealthMonitoringPlatforms = RealTimeHealthMonitoringPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RealTimeHealthMonitoringPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RealTimeHealthMonitoringPlatforms.prototype, "monitoring_platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], RealTimeHealthMonitoringPlatforms.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RealTimeHealthMonitoringPlatforms.prototype, "monitoring_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RealTimeHealthMonitoringPlatforms.prototype, "monitoring_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimeHealthMonitoringPlatforms.prototype, "continuous_monitoring_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimeHealthMonitoringPlatforms.prototype, "alert_notification_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimeHealthMonitoringPlatforms.prototype, "data_analytics_insights", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimeHealthMonitoringPlatforms.prototype, "clinical_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimeHealthMonitoringPlatforms.prototype, "patient_engagement_tools", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimeHealthMonitoringPlatforms.prototype, "privacy_security_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RealTimeHealthMonitoringPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RealTimeHealthMonitoringPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RealTimeHealthMonitoringPlatforms.prototype, "updated_at", void 0);
exports.RealTimeHealthMonitoringPlatforms = RealTimeHealthMonitoringPlatforms = __decorate([
    (0, typeorm_1.Entity)('real_time_health_monitoring_platforms')
], RealTimeHealthMonitoringPlatforms);
let IoTSecurityManagementFrameworks = class IoTSecurityManagementFrameworks {
};
exports.IoTSecurityManagementFrameworks = IoTSecurityManagementFrameworks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IoTSecurityManagementFrameworks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], IoTSecurityManagementFrameworks.prototype, "iot_security_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], IoTSecurityManagementFrameworks.prototype, "security_framework_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IoTSecurityManagementFrameworks.prototype, "security_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IoTSecurityManagementFrameworks.prototype, "threat_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTSecurityManagementFrameworks.prototype, "device_security_controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTSecurityManagementFrameworks.prototype, "communication_security", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTSecurityManagementFrameworks.prototype, "data_protection_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTSecurityManagementFrameworks.prototype, "access_control_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTSecurityManagementFrameworks.prototype, "security_monitoring_response", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTSecurityManagementFrameworks.prototype, "compliance_governance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], IoTSecurityManagementFrameworks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IoTSecurityManagementFrameworks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], IoTSecurityManagementFrameworks.prototype, "updated_at", void 0);
exports.IoTSecurityManagementFrameworks = IoTSecurityManagementFrameworks = __decorate([
    (0, typeorm_1.Entity)('iot_security_management_frameworks')
], IoTSecurityManagementFrameworks);
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
], IoTEdgeComputingQualityMetrics.prototype, "medical_iot_device_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "edge_computing_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "sensor_network_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "real_time_monitoring_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "iot_security_posture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "iot_operational_excellence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "iot_clinical_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], IoTEdgeComputingQualityMetrics.prototype, "strategic_iot_value", void 0);
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
//# sourceMappingURL=advanced-healthcare-iot-edge-computing.entity.js.map