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
exports.TravelHealthQualityMetrics = exports.GlobalHealthSurveillance = exports.InternationalHealthCompliance = exports.BorderHealthScreening = exports.TravelMedicineServices = exports.DigitalHealthPassport = void 0;
const typeorm_1 = require("typeorm");
let DigitalHealthPassport = class DigitalHealthPassport {
};
exports.DigitalHealthPassport = DigitalHealthPassport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DigitalHealthPassport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DigitalHealthPassport.prototype, "passport_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], DigitalHealthPassport.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalHealthPassport.prototype, "passport_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalHealthPassport.prototype, "issuing_authority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthPassport.prototype, "digital_credentials", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthPassport.prototype, "health_certifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthPassport.prototype, "biometric_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthPassport.prototype, "privacy_protection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthPassport.prototype, "interoperability_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], DigitalHealthPassport.prototype, "border_integration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], DigitalHealthPassport.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DigitalHealthPassport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DigitalHealthPassport.prototype, "updated_at", void 0);
exports.DigitalHealthPassport = DigitalHealthPassport = __decorate([
    (0, typeorm_1.Entity)('digital_health_passport')
], DigitalHealthPassport);
let TravelMedicineServices = class TravelMedicineServices {
};
exports.TravelMedicineServices = TravelMedicineServices;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TravelMedicineServices.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TravelMedicineServices.prototype, "service_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TravelMedicineServices.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TravelMedicineServices.prototype, "travel_destination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TravelMedicineServices.prototype, "travel_purpose", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelMedicineServices.prototype, "pre_travel_consultation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelMedicineServices.prototype, "vaccination_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelMedicineServices.prototype, "health_risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelMedicineServices.prototype, "medication_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelMedicineServices.prototype, "during_travel_support", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelMedicineServices.prototype, "post_travel_care", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TravelMedicineServices.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TravelMedicineServices.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TravelMedicineServices.prototype, "updated_at", void 0);
exports.TravelMedicineServices = TravelMedicineServices = __decorate([
    (0, typeorm_1.Entity)('travel_medicine_services')
], TravelMedicineServices);
let BorderHealthScreening = class BorderHealthScreening {
};
exports.BorderHealthScreening = BorderHealthScreening;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BorderHealthScreening.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BorderHealthScreening.prototype, "screening_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], BorderHealthScreening.prototype, "traveler_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BorderHealthScreening.prototype, "entry_point", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BorderHealthScreening.prototype, "screening_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BorderHealthScreening.prototype, "health_declaration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BorderHealthScreening.prototype, "biometric_screening", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BorderHealthScreening.prototype, "laboratory_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BorderHealthScreening.prototype, "risk_stratification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BorderHealthScreening.prototype, "quarantine_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], BorderHealthScreening.prototype, "public_health_response", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], BorderHealthScreening.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BorderHealthScreening.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BorderHealthScreening.prototype, "updated_at", void 0);
exports.BorderHealthScreening = BorderHealthScreening = __decorate([
    (0, typeorm_1.Entity)('border_health_screening')
], BorderHealthScreening);
let InternationalHealthCompliance = class InternationalHealthCompliance {
};
exports.InternationalHealthCompliance = InternationalHealthCompliance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InternationalHealthCompliance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], InternationalHealthCompliance.prototype, "compliance_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], InternationalHealthCompliance.prototype, "regulation_framework", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InternationalHealthCompliance.prototype, "compliance_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InternationalHealthCompliance.prototype, "regulatory_authority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InternationalHealthCompliance.prototype, "international_health_regulations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InternationalHealthCompliance.prototype, "certification_standards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InternationalHealthCompliance.prototype, "data_governance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InternationalHealthCompliance.prototype, "mutual_recognition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InternationalHealthCompliance.prototype, "monitoring_enforcement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], InternationalHealthCompliance.prototype, "emergency_preparedness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], InternationalHealthCompliance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InternationalHealthCompliance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InternationalHealthCompliance.prototype, "updated_at", void 0);
exports.InternationalHealthCompliance = InternationalHealthCompliance = __decorate([
    (0, typeorm_1.Entity)('international_health_compliance')
], InternationalHealthCompliance);
let GlobalHealthSurveillance = class GlobalHealthSurveillance {
};
exports.GlobalHealthSurveillance = GlobalHealthSurveillance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GlobalHealthSurveillance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], GlobalHealthSurveillance.prototype, "surveillance_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], GlobalHealthSurveillance.prototype, "surveillance_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GlobalHealthSurveillance.prototype, "surveillance_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GlobalHealthSurveillance.prototype, "geographic_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthSurveillance.prototype, "disease_surveillance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthSurveillance.prototype, "data_collection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthSurveillance.prototype, "analytical_capabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthSurveillance.prototype, "early_warning_systems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthSurveillance.prototype, "international_cooperation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], GlobalHealthSurveillance.prototype, "public_health_intelligence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GlobalHealthSurveillance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GlobalHealthSurveillance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GlobalHealthSurveillance.prototype, "updated_at", void 0);
exports.GlobalHealthSurveillance = GlobalHealthSurveillance = __decorate([
    (0, typeorm_1.Entity)('global_health_surveillance')
], GlobalHealthSurveillance);
let TravelHealthQualityMetrics = class TravelHealthQualityMetrics {
};
exports.TravelHealthQualityMetrics = TravelHealthQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TravelHealthQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], TravelHealthQualityMetrics.prototype, "metrics_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], TravelHealthQualityMetrics.prototype, "measurement_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelHealthQualityMetrics.prototype, "service_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelHealthQualityMetrics.prototype, "digital_passport_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelHealthQualityMetrics.prototype, "border_screening_efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelHealthQualityMetrics.prototype, "compliance_adherence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelHealthQualityMetrics.prototype, "surveillance_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelHealthQualityMetrics.prototype, "technology_adoption", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelHealthQualityMetrics.prototype, "cost_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TravelHealthQualityMetrics.prototype, "global_health_impact", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TravelHealthQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TravelHealthQualityMetrics.prototype, "updated_at", void 0);
exports.TravelHealthQualityMetrics = TravelHealthQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('travel_health_quality_metrics')
], TravelHealthQualityMetrics);
//# sourceMappingURL=advanced-digital-health-passport-travel.entity.js.map