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
exports.SyntheticBiologyQualityMetrics = exports.BiocontainmentSafetySystems = exports.GeneCircuitDesign = exports.SyntheticCellTherapyManufacturing = exports.BiosynthesisPathwayEngineering = exports.EngineeredBiologicalSystems = void 0;
const typeorm_1 = require("typeorm");
let EngineeredBiologicalSystems = class EngineeredBiologicalSystems {
};
exports.EngineeredBiologicalSystems = EngineeredBiologicalSystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EngineeredBiologicalSystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], EngineeredBiologicalSystems.prototype, "system_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EngineeredBiologicalSystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EngineeredBiologicalSystems.prototype, "system_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EngineeredBiologicalSystems.prototype, "therapeutic_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EngineeredBiologicalSystems.prototype, "biological_components", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EngineeredBiologicalSystems.prototype, "design_principles", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EngineeredBiologicalSystems.prototype, "engineering_tools", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EngineeredBiologicalSystems.prototype, "characterization_methods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EngineeredBiologicalSystems.prototype, "safety_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], EngineeredBiologicalSystems.prototype, "manufacturing_considerations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], EngineeredBiologicalSystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EngineeredBiologicalSystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EngineeredBiologicalSystems.prototype, "updated_at", void 0);
exports.EngineeredBiologicalSystems = EngineeredBiologicalSystems = __decorate([
    (0, typeorm_1.Entity)('engineered_biological_systems')
], EngineeredBiologicalSystems);
let BiosynthesisPathwayEngineering = class BiosynthesisPathwayEngineering {
};
exports.BiosynthesisPathwayEngineering = BiosynthesisPathwayEngineering;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BiosynthesisPathwayEngineering.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BiosynthesisPathwayEngineering.prototype, "pathway_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BiosynthesisPathwayEngineering.prototype, "pathway_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiosynthesisPathwayEngineering.prototype, "target_molecule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiosynthesisPathwayEngineering.prototype, "pathway_origin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiosynthesisPathwayEngineering.prototype, "pathway_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiosynthesisPathwayEngineering.prototype, "enzyme_engineering", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiosynthesisPathwayEngineering.prototype, "metabolic_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiosynthesisPathwayEngineering.prototype, "host_selection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiosynthesisPathwayEngineering.prototype, "production_optimization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiosynthesisPathwayEngineering.prototype, "regulatory_considerations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiosynthesisPathwayEngineering.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BiosynthesisPathwayEngineering.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BiosynthesisPathwayEngineering.prototype, "updated_at", void 0);
exports.BiosynthesisPathwayEngineering = BiosynthesisPathwayEngineering = __decorate([
    (0, typeorm_1.Entity)('biosynthesis_pathway_engineering')
], BiosynthesisPathwayEngineering);
let SyntheticCellTherapyManufacturing = class SyntheticCellTherapyManufacturing {
};
exports.SyntheticCellTherapyManufacturing = SyntheticCellTherapyManufacturing;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SyntheticCellTherapyManufacturing.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SyntheticCellTherapyManufacturing.prototype, "manufacturing_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SyntheticCellTherapyManufacturing.prototype, "therapy_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SyntheticCellTherapyManufacturing.prototype, "cell_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SyntheticCellTherapyManufacturing.prototype, "manufacturing_scale", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticCellTherapyManufacturing.prototype, "cell_engineering", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticCellTherapyManufacturing.prototype, "manufacturing_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticCellTherapyManufacturing.prototype, "quality_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticCellTherapyManufacturing.prototype, "automation_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticCellTherapyManufacturing.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticCellTherapyManufacturing.prototype, "supply_chain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SyntheticCellTherapyManufacturing.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SyntheticCellTherapyManufacturing.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SyntheticCellTherapyManufacturing.prototype, "updated_at", void 0);
exports.SyntheticCellTherapyManufacturing = SyntheticCellTherapyManufacturing = __decorate([
    (0, typeorm_1.Entity)('synthetic_cell_therapy_manufacturing')
], SyntheticCellTherapyManufacturing);
let GeneCircuitDesign = class GeneCircuitDesign {
};
exports.GeneCircuitDesign = GeneCircuitDesign;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GeneCircuitDesign.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GeneCircuitDesign.prototype, "circuit_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], GeneCircuitDesign.prototype, "circuit_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GeneCircuitDesign.prototype, "circuit_function", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GeneCircuitDesign.prototype, "complexity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GeneCircuitDesign.prototype, "circuit_components", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GeneCircuitDesign.prototype, "design_specifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GeneCircuitDesign.prototype, "modeling_simulation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GeneCircuitDesign.prototype, "experimental_validation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GeneCircuitDesign.prototype, "standardization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GeneCircuitDesign.prototype, "applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GeneCircuitDesign.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GeneCircuitDesign.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GeneCircuitDesign.prototype, "updated_at", void 0);
exports.GeneCircuitDesign = GeneCircuitDesign = __decorate([
    (0, typeorm_1.Entity)('gene_circuit_design')
], GeneCircuitDesign);
let BiocontainmentSafetySystems = class BiocontainmentSafetySystems {
};
exports.BiocontainmentSafetySystems = BiocontainmentSafetySystems;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BiocontainmentSafetySystems.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BiocontainmentSafetySystems.prototype, "containment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BiocontainmentSafetySystems.prototype, "system_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiocontainmentSafetySystems.prototype, "containment_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiocontainmentSafetySystems.prototype, "biosafety_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiocontainmentSafetySystems.prototype, "biological_containment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiocontainmentSafetySystems.prototype, "molecular_safeguards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiocontainmentSafetySystems.prototype, "physical_containment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiocontainmentSafetySystems.prototype, "monitoring_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiocontainmentSafetySystems.prototype, "risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BiocontainmentSafetySystems.prototype, "regulatory_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BiocontainmentSafetySystems.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BiocontainmentSafetySystems.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BiocontainmentSafetySystems.prototype, "updated_at", void 0);
exports.BiocontainmentSafetySystems = BiocontainmentSafetySystems = __decorate([
    (0, typeorm_1.Entity)('biocontainment_safety_systems')
], BiocontainmentSafetySystems);
let SyntheticBiologyQualityMetrics = class SyntheticBiologyQualityMetrics {
};
exports.SyntheticBiologyQualityMetrics = SyntheticBiologyQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SyntheticBiologyQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SyntheticBiologyQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], SyntheticBiologyQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticBiologyQualityMetrics.prototype, "engineering_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticBiologyQualityMetrics.prototype, "manufacturing_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticBiologyQualityMetrics.prototype, "therapeutic_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticBiologyQualityMetrics.prototype, "safety_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticBiologyQualityMetrics.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticBiologyQualityMetrics.prototype, "innovation_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticBiologyQualityMetrics.prototype, "sustainability_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], SyntheticBiologyQualityMetrics.prototype, "economic_value", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SyntheticBiologyQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SyntheticBiologyQualityMetrics.prototype, "updated_at", void 0);
exports.SyntheticBiologyQualityMetrics = SyntheticBiologyQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('synthetic_biology_quality_metrics')
], SyntheticBiologyQualityMetrics);
//# sourceMappingURL=advanced-synthetic-biology-bioengineering.entity.js.map