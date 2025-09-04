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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloodBankQualityMetrics = exports.AdverseTransfusionReaction = exports.BloodTypeTesting = exports.TransfusionRecord = exports.TransfusionOrder = exports.BloodBankInventory = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let BloodBankInventory = class BloodBankInventory {
};
exports.BloodBankInventory = BloodBankInventory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], BloodBankInventory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "unit_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "product_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "blood_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "rh_factor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], BloodBankInventory.prototype, "expiration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "unit_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], BloodBankInventory.prototype, "collection_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], BloodBankInventory.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "donor_identification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "donor_screening", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "infectious_disease_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "extended_typing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "antibody_screening", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "component_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "quality_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "storage_conditions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "temperature_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "transportation_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "modification_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "irradiation_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "pathogen_reduction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "special_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "compatibility_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "adverse_events", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankInventory.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BloodBankInventory.prototype, "volume_ml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BloodBankInventory.prototype, "hemoglobin_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BloodBankInventory.prototype, "hematocrit_level", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BloodBankInventory.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BloodBankInventory.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], BloodBankInventory.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TransfusionOrder, order => order.blood_unit),
    __metadata("design:type", Array)
], BloodBankInventory.prototype, "transfusion_orders", void 0);
exports.BloodBankInventory = BloodBankInventory = __decorate([
    (0, typeorm_1.Entity)('blood_bank_inventory'),
    (0, typeorm_1.Index)(['unit_number']),
    (0, typeorm_1.Index)(['product_type']),
    (0, typeorm_1.Index)(['blood_type']),
    (0, typeorm_1.Index)(['rh_factor']),
    (0, typeorm_1.Index)(['expiration_date']),
    (0, typeorm_1.Index)(['unit_status']),
    (0, typeorm_1.Index)(['collection_date']),
    (0, typeorm_1.Index)(['facility_id'])
], BloodBankInventory);
let TransfusionOrder = class TransfusionOrder {
};
exports.TransfusionOrder = TransfusionOrder;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TransfusionOrder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TransfusionOrder.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TransfusionOrder.prototype, "ordering_physician", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], TransfusionOrder.prototype, "order_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "product_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "blood_type_requested", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "order_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "urgency_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TransfusionOrder.prototype, "blood_unit_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "order_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], TransfusionOrder.prototype, "units_requested", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "clinical_indication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "patient_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "antibody_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "special_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "irradiation_required", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "cmv_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "hla_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "crossmatch_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "compatibility_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "consent_documentation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "physician_orders", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "nursing_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "monitoring_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionOrder.prototype, "adverse_reaction_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TransfusionOrder.prototype, "requested_completion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TransfusionOrder.prototype, "crossmatch_completion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TransfusionOrder.prototype, "product_ready_time", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TransfusionOrder.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TransfusionOrder.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], TransfusionOrder.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'ordering_physician' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], TransfusionOrder.prototype, "physician", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BloodBankInventory),
    (0, typeorm_1.JoinColumn)({ name: 'blood_unit_id' }),
    __metadata("design:type", BloodBankInventory)
], TransfusionOrder.prototype, "blood_unit", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TransfusionRecord, record => record.transfusion_order),
    __metadata("design:type", Array)
], TransfusionOrder.prototype, "transfusion_records", void 0);
exports.TransfusionOrder = TransfusionOrder = __decorate([
    (0, typeorm_1.Entity)('transfusion_orders'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['ordering_physician']),
    (0, typeorm_1.Index)(['order_date']),
    (0, typeorm_1.Index)(['product_type']),
    (0, typeorm_1.Index)(['blood_type_requested']),
    (0, typeorm_1.Index)(['order_status']),
    (0, typeorm_1.Index)(['urgency_level']),
    (0, typeorm_1.Index)(['blood_unit_id'])
], TransfusionOrder);
let TransfusionRecord = class TransfusionRecord {
};
exports.TransfusionRecord = TransfusionRecord;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TransfusionRecord.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TransfusionRecord.prototype, "transfusion_order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TransfusionRecord.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], TransfusionRecord.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], TransfusionRecord.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "transfusion_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TransfusionRecord.prototype, "administering_nurse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "blood_unit_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "pre_transfusion_vitals", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "patient_identification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "product_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "compatibility_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "consent_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "baseline_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "access_site", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "infusion_device", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "flow_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "monitoring_schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "vital_signs_monitoring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "adverse_reactions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "reaction_management", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "transfusion_interruptions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "volume_transfused", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "post_transfusion_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "patient_tolerance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "completion_documentation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "waste_documentation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TransfusionRecord.prototype, "quality_indicators", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], TransfusionRecord.prototype, "transfusion_duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], TransfusionRecord.prototype, "supervising_physician", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TransfusionRecord.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TransfusionRecord.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TransfusionOrder, order => order.transfusion_records),
    (0, typeorm_1.JoinColumn)({ name: 'transfusion_order_id' }),
    __metadata("design:type", TransfusionOrder)
], TransfusionRecord.prototype, "transfusion_order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], TransfusionRecord.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'administering_nurse' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], TransfusionRecord.prototype, "nurse", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'supervising_physician' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], TransfusionRecord.prototype, "physician", void 0);
exports.TransfusionRecord = TransfusionRecord = __decorate([
    (0, typeorm_1.Entity)('transfusion_records'),
    (0, typeorm_1.Index)(['transfusion_order_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['start_time']),
    (0, typeorm_1.Index)(['end_time']),
    (0, typeorm_1.Index)(['transfusion_status']),
    (0, typeorm_1.Index)(['administering_nurse']),
    (0, typeorm_1.Index)(['blood_unit_number'])
], TransfusionRecord);
let BloodTypeTesting = class BloodTypeTesting {
};
exports.BloodTypeTesting = BloodTypeTesting;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], BloodTypeTesting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], BloodTypeTesting.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], BloodTypeTesting.prototype, "test_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "test_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "abo_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "rh_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "test_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], BloodTypeTesting.prototype, "performed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "forward_typing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "reverse_typing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "rh_typing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "weak_d_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "antibody_screen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "antibody_identification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "extended_typing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "direct_antiglobulin_test", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "elution_studies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "special_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "technical_comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "quality_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "reference_laboratory", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodTypeTesting.prototype, "historical_comparison", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], BloodTypeTesting.prototype, "verified_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], BloodTypeTesting.prototype, "verified_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BloodTypeTesting.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BloodTypeTesting.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], BloodTypeTesting.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'performed_by' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], BloodTypeTesting.prototype, "technologist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'verified_by' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], BloodTypeTesting.prototype, "verifier", void 0);
exports.BloodTypeTesting = BloodTypeTesting = __decorate([
    (0, typeorm_1.Entity)('blood_type_testing'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['test_date']),
    (0, typeorm_1.Index)(['test_type']),
    (0, typeorm_1.Index)(['abo_type']),
    (0, typeorm_1.Index)(['rh_type']),
    (0, typeorm_1.Index)(['test_status']),
    (0, typeorm_1.Index)(['performed_by'])
], BloodTypeTesting);
let AdverseTransfusionReaction = class AdverseTransfusionReaction {
};
exports.AdverseTransfusionReaction = AdverseTransfusionReaction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AdverseTransfusionReaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AdverseTransfusionReaction.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AdverseTransfusionReaction.prototype, "transfusion_record_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], AdverseTransfusionReaction.prototype, "reaction_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "reaction_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "severity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "reaction_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AdverseTransfusionReaction.prototype, "reported_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "reaction_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "clinical_presentation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "onset_timing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "vital_signs_changes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "laboratory_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "immediate_interventions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "medications_administered", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "supportive_care", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "transfusion_stopped", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "product_investigation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "compatibility_recheck", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "patient_outcome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "prevention_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "regulatory_reporting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "investigation_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "root_cause_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AdverseTransfusionReaction.prototype, "quality_improvement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AdverseTransfusionReaction.prototype, "resolution_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], AdverseTransfusionReaction.prototype, "investigating_physician", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AdverseTransfusionReaction.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AdverseTransfusionReaction.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], AdverseTransfusionReaction.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TransfusionRecord),
    (0, typeorm_1.JoinColumn)({ name: 'transfusion_record_id' }),
    __metadata("design:type", TransfusionRecord)
], AdverseTransfusionReaction.prototype, "transfusion_record", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'reported_by' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], AdverseTransfusionReaction.prototype, "reporter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'investigating_physician' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], AdverseTransfusionReaction.prototype, "investigator", void 0);
exports.AdverseTransfusionReaction = AdverseTransfusionReaction = __decorate([
    (0, typeorm_1.Entity)('adverse_transfusion_reactions'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['transfusion_record_id']),
    (0, typeorm_1.Index)(['reaction_date']),
    (0, typeorm_1.Index)(['reaction_type']),
    (0, typeorm_1.Index)(['severity_level']),
    (0, typeorm_1.Index)(['reaction_status']),
    (0, typeorm_1.Index)(['reported_by'])
], AdverseTransfusionReaction);
let BloodBankQualityMetrics = class BloodBankQualityMetrics {
};
exports.BloodBankQualityMetrics = BloodBankQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], BloodBankQualityMetrics.prototype, "reporting_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "metric_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "product_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "quality_indicator", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "total_units_issued", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "total_reactions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "reaction_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "units_wasted", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "wastage_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "average_turnaround_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "crossmatch_compatibility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "emergency_releases", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "inventory_turnover", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "type_and_screen_accuracy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BloodBankQualityMetrics.prototype, "antibody_detection_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "safety_events", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "quality_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "proficiency_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "staff_competency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "equipment_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "temperature_excursions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], BloodBankQualityMetrics.prototype, "cost_analysis", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BloodBankQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BloodBankQualityMetrics.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], BloodBankQualityMetrics.prototype, "facility", void 0);
exports.BloodBankQualityMetrics = BloodBankQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('blood_bank_quality_metrics'),
    (0, typeorm_1.Index)(['reporting_period']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['metric_type']),
    (0, typeorm_1.Index)(['product_category']),
    (0, typeorm_1.Index)(['quality_indicator'])
], BloodBankQualityMetrics);
//# sourceMappingURL=advanced-blood-bank-transfusion-medicine.entity.js.map