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
exports.HealthcareAssetQualityMetrics = exports.BiomedicalTechnologyIntegration = exports.EquipmentUtilizationAnalytics = exports.PreventiveMaintenanceSystem = exports.AssetLifecycleManagement = exports.MedicalEquipmentManagement = void 0;
const typeorm_1 = require("typeorm");
let MedicalEquipmentManagement = class MedicalEquipmentManagement {
};
exports.MedicalEquipmentManagement = MedicalEquipmentManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MedicalEquipmentManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MedicalEquipmentManagement.prototype, "equipment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], MedicalEquipmentManagement.prototype, "equipment_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MedicalEquipmentManagement.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MedicalEquipmentManagement.prototype, "model_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MedicalEquipmentManagement.prototype, "serial_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalEquipmentManagement.prototype, "equipment_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalEquipmentManagement.prototype, "equipment_class", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEquipmentManagement.prototype, "technical_specifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEquipmentManagement.prototype, "location_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEquipmentManagement.prototype, "operational_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEquipmentManagement.prototype, "maintenance_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEquipmentManagement.prototype, "compliance_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], MedicalEquipmentManagement.prototype, "financial_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MedicalEquipmentManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MedicalEquipmentManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MedicalEquipmentManagement.prototype, "updated_at", void 0);
exports.MedicalEquipmentManagement = MedicalEquipmentManagement = __decorate([
    (0, typeorm_1.Entity)('medical_equipment_management')
], MedicalEquipmentManagement);
let AssetLifecycleManagement = class AssetLifecycleManagement {
};
exports.AssetLifecycleManagement = AssetLifecycleManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AssetLifecycleManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AssetLifecycleManagement.prototype, "asset_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AssetLifecycleManagement.prototype, "asset_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AssetLifecycleManagement.prototype, "asset_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AssetLifecycleManagement.prototype, "lifecycle_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AssetLifecycleManagement.prototype, "acquisition_phase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AssetLifecycleManagement.prototype, "operational_phase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AssetLifecycleManagement.prototype, "optimization_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AssetLifecycleManagement.prototype, "risk_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AssetLifecycleManagement.prototype, "retirement_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AssetLifecycleManagement.prototype, "total_cost_ownership", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AssetLifecycleManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AssetLifecycleManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AssetLifecycleManagement.prototype, "updated_at", void 0);
exports.AssetLifecycleManagement = AssetLifecycleManagement = __decorate([
    (0, typeorm_1.Entity)('asset_lifecycle_management')
], AssetLifecycleManagement);
let PreventiveMaintenanceSystem = class PreventiveMaintenanceSystem {
};
exports.PreventiveMaintenanceSystem = PreventiveMaintenanceSystem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PreventiveMaintenanceSystem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PreventiveMaintenanceSystem.prototype, "maintenance_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PreventiveMaintenanceSystem.prototype, "equipment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PreventiveMaintenanceSystem.prototype, "maintenance_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PreventiveMaintenanceSystem.prototype, "maintenance_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PreventiveMaintenanceSystem.prototype, "maintenance_schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PreventiveMaintenanceSystem.prototype, "work_order_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PreventiveMaintenanceSystem.prototype, "predictive_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PreventiveMaintenanceSystem.prototype, "quality_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PreventiveMaintenanceSystem.prototype, "cost_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], PreventiveMaintenanceSystem.prototype, "performance_tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], PreventiveMaintenanceSystem.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PreventiveMaintenanceSystem.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PreventiveMaintenanceSystem.prototype, "updated_at", void 0);
exports.PreventiveMaintenanceSystem = PreventiveMaintenanceSystem = __decorate([
    (0, typeorm_1.Entity)('preventive_maintenance_system')
], PreventiveMaintenanceSystem);
let EquipmentUtilizationAnalytics = class EquipmentUtilizationAnalytics {
};
exports.EquipmentUtilizationAnalytics = EquipmentUtilizationAnalytics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EquipmentUtilizationAnalytics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EquipmentUtilizationAnalytics.prototype, "analytics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EquipmentUtilizationAnalytics.prototype, "equipment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EquipmentUtilizationAnalytics.prototype, "analysis_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EquipmentUtilizationAnalytics.prototype, "utilization_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EquipmentUtilizationAnalytics.prototype, "performance_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EquipmentUtilizationAnalytics.prototype, "usage_patterns", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EquipmentUtilizationAnalytics.prototype, "optimization_insights", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EquipmentUtilizationAnalytics.prototype, "benchmarking_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EquipmentUtilizationAnalytics.prototype, "predictive_modeling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EquipmentUtilizationAnalytics.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EquipmentUtilizationAnalytics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EquipmentUtilizationAnalytics.prototype, "updated_at", void 0);
exports.EquipmentUtilizationAnalytics = EquipmentUtilizationAnalytics = __decorate([
    (0, typeorm_1.Entity)('equipment_utilization_analytics')
], EquipmentUtilizationAnalytics);
let BiomedicalTechnologyIntegration = class BiomedicalTechnologyIntegration {
};
exports.BiomedicalTechnologyIntegration = BiomedicalTechnologyIntegration;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BiomedicalTechnologyIntegration.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BiomedicalTechnologyIntegration.prototype, "integration_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BiomedicalTechnologyIntegration.prototype, "integration_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiomedicalTechnologyIntegration.prototype, "integration_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiomedicalTechnologyIntegration.prototype, "technology_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomedicalTechnologyIntegration.prototype, "connectivity_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomedicalTechnologyIntegration.prototype, "data_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomedicalTechnologyIntegration.prototype, "intelligent_automation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomedicalTechnologyIntegration.prototype, "clinical_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomedicalTechnologyIntegration.prototype, "security_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomedicalTechnologyIntegration.prototype, "innovation_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiomedicalTechnologyIntegration.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BiomedicalTechnologyIntegration.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BiomedicalTechnologyIntegration.prototype, "updated_at", void 0);
exports.BiomedicalTechnologyIntegration = BiomedicalTechnologyIntegration = __decorate([
    (0, typeorm_1.Entity)('biomedical_technology_integration')
], BiomedicalTechnologyIntegration);
let HealthcareAssetQualityMetrics = class HealthcareAssetQualityMetrics {
};
exports.HealthcareAssetQualityMetrics = HealthcareAssetQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareAssetQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareAssetQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareAssetQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAssetQualityMetrics.prototype, "asset_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAssetQualityMetrics.prototype, "maintenance_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAssetQualityMetrics.prototype, "cost_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAssetQualityMetrics.prototype, "compliance_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAssetQualityMetrics.prototype, "technology_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAssetQualityMetrics.prototype, "sustainability_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAssetQualityMetrics.prototype, "operational_excellence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareAssetQualityMetrics.prototype, "continuous_improvement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareAssetQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareAssetQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareAssetQualityMetrics = HealthcareAssetQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_asset_quality_metrics')
], HealthcareAssetQualityMetrics);
//# sourceMappingURL=advanced-asset-equipment-management.entity.js.map