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
exports.RegenerativeMedicineQualityMetrics = exports.CellReprogrammingProtocols = exports.BiomaterialScaffoldDevelopment = exports.OrganBioprintingSystems = exports.TissueEngineeringConstructs = exports.StemCellTherapyProtocols = void 0;
const typeorm_1 = require("typeorm");
let StemCellTherapyProtocols = class StemCellTherapyProtocols {
};
exports.StemCellTherapyProtocols = StemCellTherapyProtocols;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StemCellTherapyProtocols.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], StemCellTherapyProtocols.prototype, "protocol_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], StemCellTherapyProtocols.prototype, "therapy_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StemCellTherapyProtocols.prototype, "stem_cell_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StemCellTherapyProtocols.prototype, "therapeutic_indication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StemCellTherapyProtocols.prototype, "cell_characterization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StemCellTherapyProtocols.prototype, "isolation_expansion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StemCellTherapyProtocols.prototype, "differentiation_protocols", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StemCellTherapyProtocols.prototype, "delivery_methods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StemCellTherapyProtocols.prototype, "safety_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], StemCellTherapyProtocols.prototype, "efficacy_endpoints", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], StemCellTherapyProtocols.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StemCellTherapyProtocols.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], StemCellTherapyProtocols.prototype, "updated_at", void 0);
exports.StemCellTherapyProtocols = StemCellTherapyProtocols = __decorate([
    (0, typeorm_1.Entity)('stem_cell_therapy_protocols')
], StemCellTherapyProtocols);
let TissueEngineeringConstructs = class TissueEngineeringConstructs {
};
exports.TissueEngineeringConstructs = TissueEngineeringConstructs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TissueEngineeringConstructs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TissueEngineeringConstructs.prototype, "construct_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TissueEngineeringConstructs.prototype, "construct_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TissueEngineeringConstructs.prototype, "target_tissue", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TissueEngineeringConstructs.prototype, "engineering_approach", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TissueEngineeringConstructs.prototype, "scaffold_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TissueEngineeringConstructs.prototype, "cellular_components", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TissueEngineeringConstructs.prototype, "bioreactor_culture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TissueEngineeringConstructs.prototype, "bioactive_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TissueEngineeringConstructs.prototype, "functional_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TissueEngineeringConstructs.prototype, "preclinical_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TissueEngineeringConstructs.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TissueEngineeringConstructs.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TissueEngineeringConstructs.prototype, "updated_at", void 0);
exports.TissueEngineeringConstructs = TissueEngineeringConstructs = __decorate([
    (0, typeorm_1.Entity)('tissue_engineering_constructs')
], TissueEngineeringConstructs);
let OrganBioprintingSystems = class OrganBioprintingSystems {
};
exports.OrganBioprintingSystems = OrganBioprintingSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrganBioprintingSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], OrganBioprintingSystems.prototype, "bioprinting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], OrganBioprintingSystems.prototype, "organ_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], OrganBioprintingSystems.prototype, "bioprinting_technology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], OrganBioprintingSystems.prototype, "complexity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganBioprintingSystems.prototype, "bioink_formulation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganBioprintingSystems.prototype, "printing_parameters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganBioprintingSystems.prototype, "design_modeling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganBioprintingSystems.prototype, "post_printing_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganBioprintingSystems.prototype, "vascularization_strategies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], OrganBioprintingSystems.prototype, "functional_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], OrganBioprintingSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OrganBioprintingSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OrganBioprintingSystems.prototype, "updated_at", void 0);
exports.OrganBioprintingSystems = OrganBioprintingSystems = __decorate([
    (0, typeorm_1.Entity)('organ_bioprinting_systems')
], OrganBioprintingSystems);
let BiomaterialScaffoldDevelopment = class BiomaterialScaffoldDevelopment {
};
exports.BiomaterialScaffoldDevelopment = BiomaterialScaffoldDevelopment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BiomaterialScaffoldDevelopment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BiomaterialScaffoldDevelopment.prototype, "scaffold_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BiomaterialScaffoldDevelopment.prototype, "scaffold_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiomaterialScaffoldDevelopment.prototype, "biomaterial_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiomaterialScaffoldDevelopment.prototype, "fabrication_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomaterialScaffoldDevelopment.prototype, "material_composition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomaterialScaffoldDevelopment.prototype, "structural_properties", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomaterialScaffoldDevelopment.prototype, "mechanical_characteristics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomaterialScaffoldDevelopment.prototype, "biological_properties", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomaterialScaffoldDevelopment.prototype, "degradation_behavior", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiomaterialScaffoldDevelopment.prototype, "functional_enhancements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiomaterialScaffoldDevelopment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BiomaterialScaffoldDevelopment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BiomaterialScaffoldDevelopment.prototype, "updated_at", void 0);
exports.BiomaterialScaffoldDevelopment = BiomaterialScaffoldDevelopment = __decorate([
    (0, typeorm_1.Entity)('biomaterial_scaffold_development')
], BiomaterialScaffoldDevelopment);
let CellReprogrammingProtocols = class CellReprogrammingProtocols {
};
exports.CellReprogrammingProtocols = CellReprogrammingProtocols;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CellReprogrammingProtocols.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CellReprogrammingProtocols.prototype, "reprogramming_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CellReprogrammingProtocols.prototype, "protocol_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CellReprogrammingProtocols.prototype, "reprogramming_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CellReprogrammingProtocols.prototype, "target_cell_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CellReprogrammingProtocols.prototype, "starting_cell_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CellReprogrammingProtocols.prototype, "reprogramming_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CellReprogrammingProtocols.prototype, "delivery_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CellReprogrammingProtocols.prototype, "culture_conditions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CellReprogrammingProtocols.prototype, "quality_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CellReprogrammingProtocols.prototype, "safety_considerations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CellReprogrammingProtocols.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CellReprogrammingProtocols.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CellReprogrammingProtocols.prototype, "updated_at", void 0);
exports.CellReprogrammingProtocols = CellReprogrammingProtocols = __decorate([
    (0, typeorm_1.Entity)('cell_reprogramming_protocols')
], CellReprogrammingProtocols);
let RegenerativeMedicineQualityMetrics = class RegenerativeMedicineQualityMetrics {
};
exports.RegenerativeMedicineQualityMetrics = RegenerativeMedicineQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RegenerativeMedicineQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RegenerativeMedicineQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], RegenerativeMedicineQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegenerativeMedicineQualityMetrics.prototype, "therapeutic_efficacy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegenerativeMedicineQualityMetrics.prototype, "stem_cell_therapy_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegenerativeMedicineQualityMetrics.prototype, "tissue_engineering_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegenerativeMedicineQualityMetrics.prototype, "bioprinting_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegenerativeMedicineQualityMetrics.prototype, "biomaterial_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegenerativeMedicineQualityMetrics.prototype, "safety_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegenerativeMedicineQualityMetrics.prototype, "manufacturing_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], RegenerativeMedicineQualityMetrics.prototype, "innovation_advancement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RegenerativeMedicineQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RegenerativeMedicineQualityMetrics.prototype, "updated_at", void 0);
exports.RegenerativeMedicineQualityMetrics = RegenerativeMedicineQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('regenerative_medicine_quality_metrics')
], RegenerativeMedicineQualityMetrics);
//# sourceMappingURL=advanced-regenerative-medicine-tissue-engineering.entity.js.map