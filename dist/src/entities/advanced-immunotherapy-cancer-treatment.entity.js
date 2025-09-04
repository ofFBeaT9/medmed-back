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
exports.ImmunotherapyQualityMetrics = exports.ImmuneMonitoringSystems = exports.AdoptiveCellTransfer = exports.CancerVaccineDevelopment = exports.CheckpointInhibitorTherapy = exports.CarTCellTherapy = void 0;
const typeorm_1 = require("typeorm");
let CarTCellTherapy = class CarTCellTherapy {
};
exports.CarTCellTherapy = CarTCellTherapy;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CarTCellTherapy.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CarTCellTherapy.prototype, "therapy_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CarTCellTherapy.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CarTCellTherapy.prototype, "car_t_product", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CarTCellTherapy.prototype, "target_antigen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CarTCellTherapy.prototype, "car_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CarTCellTherapy.prototype, "manufacturing_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CarTCellTherapy.prototype, "preconditioning_regimen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CarTCellTherapy.prototype, "infusion_protocol", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CarTCellTherapy.prototype, "safety_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CarTCellTherapy.prototype, "efficacy_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CarTCellTherapy.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CarTCellTherapy.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CarTCellTherapy.prototype, "updated_at", void 0);
exports.CarTCellTherapy = CarTCellTherapy = __decorate([
    (0, typeorm_1.Entity)('car_t_cell_therapy')
], CarTCellTherapy);
let CheckpointInhibitorTherapy = class CheckpointInhibitorTherapy {
};
exports.CheckpointInhibitorTherapy = CheckpointInhibitorTherapy;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CheckpointInhibitorTherapy.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CheckpointInhibitorTherapy.prototype, "therapy_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CheckpointInhibitorTherapy.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CheckpointInhibitorTherapy.prototype, "inhibitor_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CheckpointInhibitorTherapy.prototype, "target_checkpoint", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CheckpointInhibitorTherapy.prototype, "patient_selection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CheckpointInhibitorTherapy.prototype, "treatment_protocol", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CheckpointInhibitorTherapy.prototype, "immune_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CheckpointInhibitorTherapy.prototype, "adverse_event_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CheckpointInhibitorTherapy.prototype, "response_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CheckpointInhibitorTherapy.prototype, "resistance_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CheckpointInhibitorTherapy.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CheckpointInhibitorTherapy.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CheckpointInhibitorTherapy.prototype, "updated_at", void 0);
exports.CheckpointInhibitorTherapy = CheckpointInhibitorTherapy = __decorate([
    (0, typeorm_1.Entity)('checkpoint_inhibitor_therapy')
], CheckpointInhibitorTherapy);
let CancerVaccineDevelopment = class CancerVaccineDevelopment {
};
exports.CancerVaccineDevelopment = CancerVaccineDevelopment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CancerVaccineDevelopment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CancerVaccineDevelopment.prototype, "vaccine_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CancerVaccineDevelopment.prototype, "vaccine_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CancerVaccineDevelopment.prototype, "vaccine_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CancerVaccineDevelopment.prototype, "cancer_indication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CancerVaccineDevelopment.prototype, "antigen_selection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CancerVaccineDevelopment.prototype, "vaccine_formulation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CancerVaccineDevelopment.prototype, "immunization_protocol", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CancerVaccineDevelopment.prototype, "immune_response_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CancerVaccineDevelopment.prototype, "clinical_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CancerVaccineDevelopment.prototype, "personalization_approaches", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CancerVaccineDevelopment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CancerVaccineDevelopment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CancerVaccineDevelopment.prototype, "updated_at", void 0);
exports.CancerVaccineDevelopment = CancerVaccineDevelopment = __decorate([
    (0, typeorm_1.Entity)('cancer_vaccine_development')
], CancerVaccineDevelopment);
let AdoptiveCellTransfer = class AdoptiveCellTransfer {
};
exports.AdoptiveCellTransfer = AdoptiveCellTransfer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AdoptiveCellTransfer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AdoptiveCellTransfer.prototype, "transfer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AdoptiveCellTransfer.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AdoptiveCellTransfer.prototype, "cell_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AdoptiveCellTransfer.prototype, "treatment_indication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdoptiveCellTransfer.prototype, "cell_isolation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdoptiveCellTransfer.prototype, "ex_vivo_expansion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdoptiveCellTransfer.prototype, "genetic_modification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdoptiveCellTransfer.prototype, "conditioning_regimen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdoptiveCellTransfer.prototype, "cell_infusion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], AdoptiveCellTransfer.prototype, "outcome_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AdoptiveCellTransfer.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AdoptiveCellTransfer.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AdoptiveCellTransfer.prototype, "updated_at", void 0);
exports.AdoptiveCellTransfer = AdoptiveCellTransfer = __decorate([
    (0, typeorm_1.Entity)('adoptive_cell_transfer')
], AdoptiveCellTransfer);
let ImmuneMonitoringSystems = class ImmuneMonitoringSystems {
};
exports.ImmuneMonitoringSystems = ImmuneMonitoringSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ImmuneMonitoringSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ImmuneMonitoringSystems.prototype, "monitoring_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ImmuneMonitoringSystems.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ImmuneMonitoringSystems.prototype, "monitoring_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ImmuneMonitoringSystems.prototype, "treatment_context", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmuneMonitoringSystems.prototype, "cellular_immune_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmuneMonitoringSystems.prototype, "functional_assays", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmuneMonitoringSystems.prototype, "molecular_profiling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmuneMonitoringSystems.prototype, "biomarker_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmuneMonitoringSystems.prototype, "tissue_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmuneMonitoringSystems.prototype, "data_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ImmuneMonitoringSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ImmuneMonitoringSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ImmuneMonitoringSystems.prototype, "updated_at", void 0);
exports.ImmuneMonitoringSystems = ImmuneMonitoringSystems = __decorate([
    (0, typeorm_1.Entity)('immune_monitoring_systems')
], ImmuneMonitoringSystems);
let ImmunotherapyQualityMetrics = class ImmunotherapyQualityMetrics {
};
exports.ImmunotherapyQualityMetrics = ImmunotherapyQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ImmunotherapyQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ImmunotherapyQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ImmunotherapyQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmunotherapyQualityMetrics.prototype, "treatment_efficacy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmunotherapyQualityMetrics.prototype, "car_t_therapy_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmunotherapyQualityMetrics.prototype, "checkpoint_inhibitor_outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmunotherapyQualityMetrics.prototype, "vaccine_immunogenicity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmunotherapyQualityMetrics.prototype, "safety_profile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmunotherapyQualityMetrics.prototype, "immune_monitoring_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmunotherapyQualityMetrics.prototype, "personalization_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ImmunotherapyQualityMetrics.prototype, "innovation_advancement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ImmunotherapyQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ImmunotherapyQualityMetrics.prototype, "updated_at", void 0);
exports.ImmunotherapyQualityMetrics = ImmunotherapyQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('immunotherapy_quality_metrics')
], ImmunotherapyQualityMetrics);
//# sourceMappingURL=advanced-immunotherapy-cancer-treatment.entity.js.map