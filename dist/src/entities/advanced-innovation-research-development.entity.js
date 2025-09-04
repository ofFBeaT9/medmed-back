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
exports.HealthcareInnovationQualityMetrics = exports.InnovationIncubatorProgram = exports.ClinicalResearchInnovation = exports.TechnologyTransferOffice = exports.ResearchDevelopmentPortfolio = exports.InnovationManagementSystem = void 0;
const typeorm_1 = require("typeorm");
let InnovationManagementSystem = class InnovationManagementSystem {
};
exports.InnovationManagementSystem = InnovationManagementSystem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InnovationManagementSystem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], InnovationManagementSystem.prototype, "innovation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], InnovationManagementSystem.prototype, "innovation_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InnovationManagementSystem.prototype, "innovation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InnovationManagementSystem.prototype, "innovation_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationManagementSystem.prototype, "innovation_concept", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationManagementSystem.prototype, "development_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationManagementSystem.prototype, "research_foundation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationManagementSystem.prototype, "team_collaboration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationManagementSystem.prototype, "funding_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationManagementSystem.prototype, "impact_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InnovationManagementSystem.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InnovationManagementSystem.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InnovationManagementSystem.prototype, "updated_at", void 0);
exports.InnovationManagementSystem = InnovationManagementSystem = __decorate([
    (0, typeorm_1.Entity)('innovation_management_system')
], InnovationManagementSystem);
let ResearchDevelopmentPortfolio = class ResearchDevelopmentPortfolio {
};
exports.ResearchDevelopmentPortfolio = ResearchDevelopmentPortfolio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ResearchDevelopmentPortfolio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ResearchDevelopmentPortfolio.prototype, "portfolio_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ResearchDevelopmentPortfolio.prototype, "portfolio_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ResearchDevelopmentPortfolio.prototype, "research_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ResearchDevelopmentPortfolio.prototype, "therapeutic_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentPortfolio.prototype, "portfolio_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentPortfolio.prototype, "project_pipeline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentPortfolio.prototype, "research_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentPortfolio.prototype, "collaboration_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentPortfolio.prototype, "resource_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ResearchDevelopmentPortfolio.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ResearchDevelopmentPortfolio.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ResearchDevelopmentPortfolio.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ResearchDevelopmentPortfolio.prototype, "updated_at", void 0);
exports.ResearchDevelopmentPortfolio = ResearchDevelopmentPortfolio = __decorate([
    (0, typeorm_1.Entity)('research_development_portfolio')
], ResearchDevelopmentPortfolio);
let TechnologyTransferOffice = class TechnologyTransferOffice {
};
exports.TechnologyTransferOffice = TechnologyTransferOffice;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TechnologyTransferOffice.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TechnologyTransferOffice.prototype, "tto_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TechnologyTransferOffice.prototype, "invention_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TechnologyTransferOffice.prototype, "invention_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TechnologyTransferOffice.prototype, "development_stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyTransferOffice.prototype, "invention_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyTransferOffice.prototype, "ip_protection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyTransferOffice.prototype, "market_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyTransferOffice.prototype, "commercialization_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyTransferOffice.prototype, "licensing_activities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TechnologyTransferOffice.prototype, "startup_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TechnologyTransferOffice.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TechnologyTransferOffice.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TechnologyTransferOffice.prototype, "updated_at", void 0);
exports.TechnologyTransferOffice = TechnologyTransferOffice = __decorate([
    (0, typeorm_1.Entity)('technology_transfer_office')
], TechnologyTransferOffice);
let ClinicalResearchInnovation = class ClinicalResearchInnovation {
};
exports.ClinicalResearchInnovation = ClinicalResearchInnovation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClinicalResearchInnovation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClinicalResearchInnovation.prototype, "research_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClinicalResearchInnovation.prototype, "study_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalResearchInnovation.prototype, "study_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalResearchInnovation.prototype, "innovation_focus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalResearchInnovation.prototype, "research_design", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalResearchInnovation.prototype, "innovation_elements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalResearchInnovation.prototype, "regulatory_strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalResearchInnovation.prototype, "data_innovation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalResearchInnovation.prototype, "collaboration_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], ClinicalResearchInnovation.prototype, "impact_potential", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ClinicalResearchInnovation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalResearchInnovation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalResearchInnovation.prototype, "updated_at", void 0);
exports.ClinicalResearchInnovation = ClinicalResearchInnovation = __decorate([
    (0, typeorm_1.Entity)('clinical_research_innovation')
], ClinicalResearchInnovation);
let InnovationIncubatorProgram = class InnovationIncubatorProgram {
};
exports.InnovationIncubatorProgram = InnovationIncubatorProgram;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InnovationIncubatorProgram.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], InnovationIncubatorProgram.prototype, "program_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], InnovationIncubatorProgram.prototype, "program_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InnovationIncubatorProgram.prototype, "program_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InnovationIncubatorProgram.prototype, "focus_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationIncubatorProgram.prototype, "program_structure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationIncubatorProgram.prototype, "participant_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationIncubatorProgram.prototype, "mentor_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationIncubatorProgram.prototype, "success_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationIncubatorProgram.prototype, "alumni_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InnovationIncubatorProgram.prototype, "ecosystem_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InnovationIncubatorProgram.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InnovationIncubatorProgram.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InnovationIncubatorProgram.prototype, "updated_at", void 0);
exports.InnovationIncubatorProgram = InnovationIncubatorProgram = __decorate([
    (0, typeorm_1.Entity)('innovation_incubator_program')
], InnovationIncubatorProgram);
let HealthcareInnovationQualityMetrics = class HealthcareInnovationQualityMetrics {
};
exports.HealthcareInnovationQualityMetrics = HealthcareInnovationQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthcareInnovationQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthcareInnovationQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthcareInnovationQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationQualityMetrics.prototype, "innovation_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationQualityMetrics.prototype, "research_excellence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationQualityMetrics.prototype, "commercialization_success", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationQualityMetrics.prototype, "talent_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationQualityMetrics.prototype, "partnership_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationQualityMetrics.prototype, "societal_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationQualityMetrics.prototype, "strategic_alignment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthcareInnovationQualityMetrics.prototype, "continuous_innovation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareInnovationQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthcareInnovationQualityMetrics.prototype, "updated_at", void 0);
exports.HealthcareInnovationQualityMetrics = HealthcareInnovationQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('healthcare_innovation_quality_metrics')
], HealthcareInnovationQualityMetrics);
//# sourceMappingURL=advanced-innovation-research-development.entity.js.map