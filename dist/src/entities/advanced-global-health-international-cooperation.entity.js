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
exports.GlobalHealthInternationalCooperationQualityMetrics = exports.HealthDiplomacyInitiatives = exports.GlobalDiseaseSurveillance = exports.HumanitarianHealthResponses = exports.CrossBorderHealthInitiatives = exports.GlobalHealthPartnerships = void 0;
const typeorm_1 = require("typeorm");
let GlobalHealthPartnerships = class GlobalHealthPartnerships {
};
exports.GlobalHealthPartnerships = GlobalHealthPartnerships;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GlobalHealthPartnerships.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GlobalHealthPartnerships.prototype, "partnership_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], GlobalHealthPartnerships.prototype, "partnership_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GlobalHealthPartnerships.prototype, "partnership_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GlobalHealthPartnerships.prototype, "scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthPartnerships.prototype, "partner_organizations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthPartnerships.prototype, "strategic_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthPartnerships.prototype, "governance_structure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthPartnerships.prototype, "resource_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthPartnerships.prototype, "implementation_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthPartnerships.prototype, "knowledge_sharing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GlobalHealthPartnerships.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GlobalHealthPartnerships.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GlobalHealthPartnerships.prototype, "updated_at", void 0);
exports.GlobalHealthPartnerships = GlobalHealthPartnerships = __decorate([
    (0, typeorm_1.Entity)('global_health_partnerships')
], GlobalHealthPartnerships);
let CrossBorderHealthInitiatives = class CrossBorderHealthInitiatives {
};
exports.CrossBorderHealthInitiatives = CrossBorderHealthInitiatives;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CrossBorderHealthInitiatives.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CrossBorderHealthInitiatives.prototype, "initiative_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CrossBorderHealthInitiatives.prototype, "initiative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CrossBorderHealthInitiatives.prototype, "initiative_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CrossBorderHealthInitiatives.prototype, "geographic_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CrossBorderHealthInitiatives.prototype, "participating_countries", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CrossBorderHealthInitiatives.prototype, "health_priorities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CrossBorderHealthInitiatives.prototype, "coordination_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CrossBorderHealthInitiatives.prototype, "capacity_building", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CrossBorderHealthInitiatives.prototype, "operational_activities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], CrossBorderHealthInitiatives.prototype, "sustainability_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CrossBorderHealthInitiatives.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CrossBorderHealthInitiatives.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CrossBorderHealthInitiatives.prototype, "updated_at", void 0);
exports.CrossBorderHealthInitiatives = CrossBorderHealthInitiatives = __decorate([
    (0, typeorm_1.Entity)('cross_border_health_initiatives')
], CrossBorderHealthInitiatives);
let HumanitarianHealthResponses = class HumanitarianHealthResponses {
};
exports.HumanitarianHealthResponses = HumanitarianHealthResponses;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HumanitarianHealthResponses.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HumanitarianHealthResponses.prototype, "response_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HumanitarianHealthResponses.prototype, "emergency_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HumanitarianHealthResponses.prototype, "emergency_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HumanitarianHealthResponses.prototype, "response_phase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HumanitarianHealthResponses.prototype, "situation_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HumanitarianHealthResponses.prototype, "health_interventions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HumanitarianHealthResponses.prototype, "coordination_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HumanitarianHealthResponses.prototype, "resource_mobilization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HumanitarianHealthResponses.prototype, "quality_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HumanitarianHealthResponses.prototype, "transition_planning", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HumanitarianHealthResponses.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HumanitarianHealthResponses.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HumanitarianHealthResponses.prototype, "updated_at", void 0);
exports.HumanitarianHealthResponses = HumanitarianHealthResponses = __decorate([
    (0, typeorm_1.Entity)('humanitarian_health_responses')
], HumanitarianHealthResponses);
let GlobalDiseaseSurveillance = class GlobalDiseaseSurveillance {
};
exports.GlobalDiseaseSurveillance = GlobalDiseaseSurveillance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GlobalDiseaseSurveillance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GlobalDiseaseSurveillance.prototype, "surveillance_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], GlobalDiseaseSurveillance.prototype, "surveillance_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GlobalDiseaseSurveillance.prototype, "surveillance_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GlobalDiseaseSurveillance.prototype, "coverage_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalDiseaseSurveillance.prototype, "surveillance_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalDiseaseSurveillance.prototype, "data_sources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalDiseaseSurveillance.prototype, "data_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalDiseaseSurveillance.prototype, "analytical_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalDiseaseSurveillance.prototype, "alert_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalDiseaseSurveillance.prototype, "international_coordination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GlobalDiseaseSurveillance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GlobalDiseaseSurveillance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GlobalDiseaseSurveillance.prototype, "updated_at", void 0);
exports.GlobalDiseaseSurveillance = GlobalDiseaseSurveillance = __decorate([
    (0, typeorm_1.Entity)('global_disease_surveillance')
], GlobalDiseaseSurveillance);
let HealthDiplomacyInitiatives = class HealthDiplomacyInitiatives {
};
exports.HealthDiplomacyInitiatives = HealthDiplomacyInitiatives;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HealthDiplomacyInitiatives.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HealthDiplomacyInitiatives.prototype, "diplomacy_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HealthDiplomacyInitiatives.prototype, "initiative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthDiplomacyInitiatives.prototype, "diplomacy_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthDiplomacyInitiatives.prototype, "policy_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthDiplomacyInitiatives.prototype, "diplomatic_actors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthDiplomacyInitiatives.prototype, "negotiation_processes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthDiplomacyInitiatives.prototype, "health_governance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthDiplomacyInitiatives.prototype, "soft_power_tools", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthDiplomacyInitiatives.prototype, "conflict_transformation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], HealthDiplomacyInitiatives.prototype, "implementation_mechanisms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], HealthDiplomacyInitiatives.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthDiplomacyInitiatives.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthDiplomacyInitiatives.prototype, "updated_at", void 0);
exports.HealthDiplomacyInitiatives = HealthDiplomacyInitiatives = __decorate([
    (0, typeorm_1.Entity)('health_diplomacy_initiatives')
], HealthDiplomacyInitiatives);
let GlobalHealthInternationalCooperationQualityMetrics = class GlobalHealthInternationalCooperationQualityMetrics {
};
exports.GlobalHealthInternationalCooperationQualityMetrics = GlobalHealthInternationalCooperationQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "partnership_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "cross_border_coordination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "humanitarian_response_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "surveillance_system_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "diplomacy_impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "health_outcome_improvement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "capacity_development", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "international_cooperation_advancement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GlobalHealthInternationalCooperationQualityMetrics.prototype, "updated_at", void 0);
exports.GlobalHealthInternationalCooperationQualityMetrics = GlobalHealthInternationalCooperationQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('global_health_international_cooperation_quality_metrics')
], GlobalHealthInternationalCooperationQualityMetrics);
//# sourceMappingURL=advanced-global-health-international-cooperation.entity.js.map