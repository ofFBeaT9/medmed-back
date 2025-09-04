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
exports.NanotechnologyQualityMetrics = exports.NanotoxicologyAssessment = exports.NanobiosensorPlatforms = exports.TherapeuticNanodevices = exports.DiagnosticNanosystems = exports.NanoparticleDrugDelivery = void 0;
const typeorm_1 = require("typeorm");
let NanoparticleDrugDelivery = class NanoparticleDrugDelivery {
};
exports.NanoparticleDrugDelivery = NanoparticleDrugDelivery;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], NanoparticleDrugDelivery.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], NanoparticleDrugDelivery.prototype, "nanoparticle_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], NanoparticleDrugDelivery.prototype, "formulation_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NanoparticleDrugDelivery.prototype, "nanoparticle_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NanoparticleDrugDelivery.prototype, "therapeutic_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanoparticleDrugDelivery.prototype, "physicochemical_properties", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanoparticleDrugDelivery.prototype, "drug_loading", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanoparticleDrugDelivery.prototype, "targeting_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanoparticleDrugDelivery.prototype, "pharmacokinetics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanoparticleDrugDelivery.prototype, "manufacturing_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanoparticleDrugDelivery.prototype, "safety_evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NanoparticleDrugDelivery.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NanoparticleDrugDelivery.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], NanoparticleDrugDelivery.prototype, "updated_at", void 0);
exports.NanoparticleDrugDelivery = NanoparticleDrugDelivery = __decorate([
    (0, typeorm_1.Entity)('nanoparticle_drug_delivery')
], NanoparticleDrugDelivery);
let DiagnosticNanosystems = class DiagnosticNanosystems {
};
exports.DiagnosticNanosystems = DiagnosticNanosystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DiagnosticNanosystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DiagnosticNanosystems.prototype, "nanosystem_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DiagnosticNanosystems.prototype, "diagnostic_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DiagnosticNanosystems.prototype, "detection_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DiagnosticNanosystems.prototype, "diagnostic_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiagnosticNanosystems.prototype, "nanosensor_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiagnosticNanosystems.prototype, "detection_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiagnosticNanosystems.prototype, "imaging_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiagnosticNanosystems.prototype, "point_of_care_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiagnosticNanosystems.prototype, "biocompatibility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DiagnosticNanosystems.prototype, "clinical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DiagnosticNanosystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DiagnosticNanosystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DiagnosticNanosystems.prototype, "updated_at", void 0);
exports.DiagnosticNanosystems = DiagnosticNanosystems = __decorate([
    (0, typeorm_1.Entity)('diagnostic_nanosystems')
], DiagnosticNanosystems);
let TherapeuticNanodevices = class TherapeuticNanodevices {
};
exports.TherapeuticNanodevices = TherapeuticNanodevices;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TherapeuticNanodevices.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TherapeuticNanodevices.prototype, "nanodevice_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TherapeuticNanodevices.prototype, "device_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticNanodevices.prototype, "therapeutic_mechanism", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticNanodevices.prototype, "activation_trigger", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticNanodevices.prototype, "nanodevice_architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticNanodevices.prototype, "therapeutic_payload", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticNanodevices.prototype, "smart_functionality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticNanodevices.prototype, "targeting_precision", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticNanodevices.prototype, "therapeutic_efficacy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TherapeuticNanodevices.prototype, "manufacturing_scalability", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TherapeuticNanodevices.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TherapeuticNanodevices.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TherapeuticNanodevices.prototype, "updated_at", void 0);
exports.TherapeuticNanodevices = TherapeuticNanodevices = __decorate([
    (0, typeorm_1.Entity)('therapeutic_nanodevices')
], TherapeuticNanodevices);
let NanobiosensorPlatforms = class NanobiosensorPlatforms {
};
exports.NanobiosensorPlatforms = NanobiosensorPlatforms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], NanobiosensorPlatforms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], NanobiosensorPlatforms.prototype, "biosensor_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], NanobiosensorPlatforms.prototype, "platform_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NanobiosensorPlatforms.prototype, "sensing_principle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NanobiosensorPlatforms.prototype, "target_analyte", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanobiosensorPlatforms.prototype, "nanomaterial_components", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanobiosensorPlatforms.prototype, "sensing_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanobiosensorPlatforms.prototype, "miniaturization_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanobiosensorPlatforms.prototype, "multiplexing_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanobiosensorPlatforms.prototype, "clinical_applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanobiosensorPlatforms.prototype, "validation_studies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NanobiosensorPlatforms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NanobiosensorPlatforms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], NanobiosensorPlatforms.prototype, "updated_at", void 0);
exports.NanobiosensorPlatforms = NanobiosensorPlatforms = __decorate([
    (0, typeorm_1.Entity)('nanobiosensor_platforms')
], NanobiosensorPlatforms);
let NanotoxicologyAssessment = class NanotoxicologyAssessment {
};
exports.NanotoxicologyAssessment = NanotoxicologyAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], NanotoxicologyAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], NanotoxicologyAssessment.prototype, "assessment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], NanotoxicologyAssessment.prototype, "nanomaterial_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NanotoxicologyAssessment.prototype, "nanomaterial_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NanotoxicologyAssessment.prototype, "exposure_route", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotoxicologyAssessment.prototype, "physicochemical_characterization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotoxicologyAssessment.prototype, "in_vitro_toxicology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotoxicologyAssessment.prototype, "in_vivo_toxicology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotoxicologyAssessment.prototype, "biodistribution_kinetics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotoxicologyAssessment.prototype, "environmental_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotoxicologyAssessment.prototype, "risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NanotoxicologyAssessment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NanotoxicologyAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], NanotoxicologyAssessment.prototype, "updated_at", void 0);
exports.NanotoxicologyAssessment = NanotoxicologyAssessment = __decorate([
    (0, typeorm_1.Entity)('nanotoxicology_assessment')
], NanotoxicologyAssessment);
let NanotechnologyQualityMetrics = class NanotechnologyQualityMetrics {
};
exports.NanotechnologyQualityMetrics = NanotechnologyQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], NanotechnologyQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], NanotechnologyQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], NanotechnologyQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotechnologyQualityMetrics.prototype, "therapeutic_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotechnologyQualityMetrics.prototype, "diagnostic_accuracy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotechnologyQualityMetrics.prototype, "manufacturing_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotechnologyQualityMetrics.prototype, "safety_profile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotechnologyQualityMetrics.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotechnologyQualityMetrics.prototype, "innovation_advancement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotechnologyQualityMetrics.prototype, "clinical_translation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], NanotechnologyQualityMetrics.prototype, "economic_impact", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NanotechnologyQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], NanotechnologyQualityMetrics.prototype, "updated_at", void 0);
exports.NanotechnologyQualityMetrics = NanotechnologyQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('nanotechnology_quality_metrics')
], NanotechnologyQualityMetrics);
//# sourceMappingURL=advanced-nanotechnology-nanomedicine.entity.js.map