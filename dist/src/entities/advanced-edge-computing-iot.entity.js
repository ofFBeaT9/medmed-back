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
exports.HealthcareEdgeQualityMetrics = exports.DistributedHealthComputing = exports.SmartHealthcareInfrastructure = exports.RealTimePatientMonitoring = exports.EdgeAnalyticsPlatform = exports.MedicalIoTDevices = void 0;
const typeorm_1 = require("typeorm");
let MedicalIoTDevices = class MedicalIoTDevices {
};
exports.MedicalIoTDevices = MedicalIoTDevices;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MedicalIoTDevices.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MedicalIoTDevices.prototype, "device_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MedicalIoTDevices.prototype, "device_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalIoTDevices.prototype, "device_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalIoTDevices.prototype, "deployment_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDevices.prototype, "sensor_configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDevices.prototype, "connectivity_profile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDevices.prototype, "edge_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDevices.prototype, "power_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDevices.prototype, "clinical_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalIoTDevices.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalIoTDevices.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MedicalIoTDevices.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MedicalIoTDevices.prototype, "updated_at", void 0);
exports.MedicalIoTDevices = MedicalIoTDevices = __decorate([
    (0, typeorm_1.Entity)('medical_iot_devices')
], MedicalIoTDevices);
let EdgeAnalyticsPlatform = class EdgeAnalyticsPlatform {
};
exports.EdgeAnalyticsPlatform = EdgeAnalyticsPlatform;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EdgeAnalyticsPlatform.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EdgeAnalyticsPlatform.prototype, "platform_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EdgeAnalyticsPlatform.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EdgeAnalyticsPlatform.prototype, "deployment_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EdgeAnalyticsPlatform.prototype, "computing_paradigm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeAnalyticsPlatform.prototype, "processing_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeAnalyticsPlatform.prototype, "analytics_engines", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeAnalyticsPlatform.prototype, "data_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeAnalyticsPlatform.prototype, "orchestration_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeAnalyticsPlatform.prototype, "security_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EdgeAnalyticsPlatform.prototype, "integration_interfaces", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EdgeAnalyticsPlatform.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EdgeAnalyticsPlatform.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EdgeAnalyticsPlatform.prototype, "updated_at", void 0);
exports.EdgeAnalyticsPlatform = EdgeAnalyticsPlatform = __decorate([
    (0, typeorm_1.Entity)('edge_analytics_platform')
], EdgeAnalyticsPlatform);
let RealTimePatientMonitoring = class RealTimePatientMonitoring {
};
exports.RealTimePatientMonitoring = RealTimePatientMonitoring;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RealTimePatientMonitoring.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RealTimePatientMonitoring.prototype, "monitoring_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RealTimePatientMonitoring.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RealTimePatientMonitoring.prototype, "monitoring_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RealTimePatientMonitoring.prototype, "care_setting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoring.prototype, "vital_signs_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoring.prototype, "wearable_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoring.prototype, "clinical_decision_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoring.prototype, "alert_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoring.prototype, "data_streaming", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RealTimePatientMonitoring.prototype, "patient_engagement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RealTimePatientMonitoring.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RealTimePatientMonitoring.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RealTimePatientMonitoring.prototype, "updated_at", void 0);
exports.RealTimePatientMonitoring = RealTimePatientMonitoring = __decorate([
    (0, typeorm_1.Entity)('real_time_patient_monitoring')
], RealTimePatientMonitoring);
let SmartHealthcareInfrastructure = class SmartHealthcareInfrastructure {
};
exports.SmartHealthcareInfrastructure = SmartHealthcareInfrastructure;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SmartHealthcareInfrastructure.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SmartHealthcareInfrastructure.prototype, "infrastructure_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SmartHealthcareInfrastructure.prototype, "facility_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SmartHealthcareInfrastructure.prototype, "infrastructure_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SmartHealthcareInfrastructure.prototype, "automation_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartHealthcareInfrastructure.prototype, "building_automation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartHealthcareInfrastructure.prototype, "medical_equipment_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartHealthcareInfrastructure.prototype, "environmental_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartHealthcareInfrastructure.prototype, "workflow_automation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartHealthcareInfrastructure.prototype, "digital_twin_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SmartHealthcareInfrastructure.prototype, "sustainability_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SmartHealthcareInfrastructure.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SmartHealthcareInfrastructure.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SmartHealthcareInfrastructure.prototype, "updated_at", void 0);
exports.SmartHealthcareInfrastructure = SmartHealthcareInfrastructure = __decorate([
    (0, typeorm_1.Entity)('smart_healthcare_infrastructure')
], SmartHealthcareInfrastructure);
let DistributedHealthComputing = class DistributedHealthComputing {
};
exports.DistributedHealthComputing = DistributedHealthComputing;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DistributedHealthComputing.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DistributedHealthComputing.prototype, "computing_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DistributedHealthComputing.prototype, "network_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DistributedHealthComputing.prototype, "architecture_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DistributedHealthComputing.prototype, "computing_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthComputing.prototype, "node_configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthComputing.prototype, "workload_distribution", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthComputing.prototype, "federated_learning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthComputing.prototype, "data_synchronization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthComputing.prototype, "security_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DistributedHealthComputing.prototype, "performance_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DistributedHealthComputing.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DistributedHealthComputing.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DistributedHealthComputing.prototype, "updated_at", void 0);
exports.DistributedHealthComputing = DistributedHealthComputing = __decorate([
    (0, typeorm_1.Entity)('distributed_health_computing')
], DistributedHealthComputing);
let HealthcareEdgeQualityMetrics = class HealthcareEdgeQualityMetrics {
};
exports.HealthcareEdgeQualityMetrics = HealthcareEdgeQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareEdgeQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareEdgeQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareEdgeQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeQualityMetrics.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeQualityMetrics.prototype, "reliability_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeQualityMetrics.prototype, "clinical_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeQualityMetrics.prototype, "iot_device_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeQualityMetrics.prototype, "security_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeQualityMetrics.prototype, "cost_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeQualityMetrics.prototype, "user_experience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareEdgeQualityMetrics.prototype, "innovation_advancement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareEdgeQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareEdgeQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareEdgeQualityMetrics = HealthcareEdgeQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_edge_quality_metrics')
], HealthcareEdgeQualityMetrics);
//# sourceMappingURL=advanced-edge-computing-iot.entity.js.map