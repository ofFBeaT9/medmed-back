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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PharmacyAutomation = exports.ControlledSubstanceManagement = exports.DrugUtilizationReview = exports.PharmacyDispensing = exports.PharmacyTransaction = exports.PharmacyInventory = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
const advanced_medication_management_entity_1 = require("./advanced-medication-management.entity");
let PharmacyInventory = class PharmacyInventory {
};
exports.PharmacyInventory = PharmacyInventory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PharmacyInventory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "drug_ndc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "drug_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "generic_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "lot_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PharmacyInventory.prototype, "expiration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "dosage_form", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "strength", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyInventory.prototype, "quantity_on_hand", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "unit_of_measure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyInventory.prototype, "reorder_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyInventory.prototype, "maximum_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 4, nullable: true }),
    __metadata("design:type", Number)
], PharmacyInventory.prototype, "unit_cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyInventory.prototype, "total_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "storage_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "controlled_substance_schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "special_handling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PharmacyInventory.prototype, "last_count_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PharmacyInventory.prototype, "counted_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "count_variance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "regulatory_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "recall_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "supplier_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyInventory.prototype, "quality_control", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PharmacyInventory.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PharmacyInventory.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'counted_by' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], PharmacyInventory.prototype, "counter", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PharmacyTransaction, transaction => transaction.inventory_item),
    __metadata("design:type", Array)
], PharmacyInventory.prototype, "pharmacy_transactions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PharmacyDispensing, dispensing => dispensing.inventory_item),
    __metadata("design:type", Array)
], PharmacyInventory.prototype, "pharmacy_dispensings", void 0);
exports.PharmacyInventory = PharmacyInventory = __decorate([
    (0, typeorm_1.Entity)('pharmacy_inventory'),
    (0, typeorm_1.Index)(['drug_ndc']),
    (0, typeorm_1.Index)(['drug_name']),
    (0, typeorm_1.Index)(['lot_number']),
    (0, typeorm_1.Index)(['expiration_date']),
    (0, typeorm_1.Index)(['location']),
    (0, typeorm_1.Index)(['status'])
], PharmacyInventory);
let PharmacyTransaction = class PharmacyTransaction {
};
exports.PharmacyTransaction = PharmacyTransaction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PharmacyTransaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PharmacyTransaction.prototype, "inventory_item_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "transaction_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PharmacyTransaction.prototype, "transaction_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PharmacyTransaction.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "reference_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyTransaction.prototype, "quantity_before", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyTransaction.prototype, "quantity_change", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyTransaction.prototype, "quantity_after", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "unit_of_measure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 4, nullable: true }),
    __metadata("design:type", Number)
], PharmacyTransaction.prototype, "unit_cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyTransaction.prototype, "total_cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "transaction_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "transaction_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "source_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "destination_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PharmacyTransaction.prototype, "authorized_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PharmacyTransaction.prototype, "verified_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "supporting_documentation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "regulatory_reporting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "transaction_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyTransaction.prototype, "audit_trail", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PharmacyTransaction.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PharmacyTransaction.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PharmacyInventory, inventory => inventory.pharmacy_transactions),
    (0, typeorm_1.JoinColumn)({ name: 'inventory_item_id' }),
    __metadata("design:type", PharmacyInventory)
], PharmacyTransaction.prototype, "inventory_item", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], PharmacyTransaction.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'authorized_by' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], PharmacyTransaction.prototype, "authorizer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'verified_by' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], PharmacyTransaction.prototype, "verifier", void 0);
exports.PharmacyTransaction = PharmacyTransaction = __decorate([
    (0, typeorm_1.Entity)('pharmacy_transactions'),
    (0, typeorm_1.Index)(['inventory_item_id']),
    (0, typeorm_1.Index)(['transaction_type']),
    (0, typeorm_1.Index)(['transaction_date']),
    (0, typeorm_1.Index)(['user_id']),
    (0, typeorm_1.Index)(['reference_number'])
], PharmacyTransaction);
let PharmacyDispensing = class PharmacyDispensing {
};
exports.PharmacyDispensing = PharmacyDispensing;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "prescription_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "inventory_item_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PharmacyDispensing.prototype, "dispensing_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "dispensed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "dispensing_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "dispensing_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "quantity_dispensed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "unit_of_measure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "days_supply", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "lot_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PharmacyDispensing.prototype, "expiration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "dispensing_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "patient_counseling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PharmacyDispensing.prototype, "counseling_declined", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "drug_utilization_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "insurance_processing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "insurance_copay", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "total_cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "patient_payment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "payment_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "generic_substitution", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "safety_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "medication_guide", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PharmacyDispensing.prototype, "controlled_substance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "controlled_substance_log", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "verified_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PharmacyDispensing.prototype, "verification_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "pickup_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PharmacyDispensing.prototype, "pickup_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PharmacyDispensing.prototype, "picked_up_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyDispensing.prototype, "pickup_verification", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PharmacyDispensing.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PharmacyDispensing.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => advanced_medication_management_entity_1.Prescription),
    (0, typeorm_1.JoinColumn)({ name: 'prescription_id' }),
    __metadata("design:type", advanced_medication_management_entity_1.Prescription)
], PharmacyDispensing.prototype, "prescription", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], PharmacyDispensing.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PharmacyInventory, inventory => inventory.pharmacy_dispensings),
    (0, typeorm_1.JoinColumn)({ name: 'inventory_item_id' }),
    __metadata("design:type", PharmacyInventory)
], PharmacyDispensing.prototype, "inventory_item", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'dispensed_by' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], PharmacyDispensing.prototype, "pharmacist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'verified_by' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], PharmacyDispensing.prototype, "verifier", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'picked_up_by' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], PharmacyDispensing.prototype, "picker", void 0);
exports.PharmacyDispensing = PharmacyDispensing = __decorate([
    (0, typeorm_1.Entity)('pharmacy_dispensings'),
    (0, typeorm_1.Index)(['prescription_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['inventory_item_id']),
    (0, typeorm_1.Index)(['dispensing_date']),
    (0, typeorm_1.Index)(['dispensed_by']),
    (0, typeorm_1.Index)(['dispensing_status']),
    (0, typeorm_1.Index)(['dispensing_type'])
], PharmacyDispensing);
let DrugUtilizationReview = class DrugUtilizationReview {
};
exports.DrugUtilizationReview = DrugUtilizationReview;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DrugUtilizationReview.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DrugUtilizationReview.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DrugUtilizationReview.prototype, "prescription_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], DrugUtilizationReview.prototype, "review_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "review_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "alert_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DrugUtilizationReview.prototype, "reviewed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "drug_interactions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "allergy_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "contraindication_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "duplicate_therapy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "dosage_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "age_related_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "disease_state_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "lab_value_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "pregnancy_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "lactation_alerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "clinical_recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "alternative_therapies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "monitoring_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "review_outcome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "pharmacist_intervention", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "prescriber_communication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "patient_counseling_points", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "documentation_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DrugUtilizationReview.prototype, "regulatory_reporting", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DrugUtilizationReview.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DrugUtilizationReview.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], DrugUtilizationReview.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => advanced_medication_management_entity_1.Prescription),
    (0, typeorm_1.JoinColumn)({ name: 'prescription_id' }),
    __metadata("design:type", advanced_medication_management_entity_1.Prescription)
], DrugUtilizationReview.prototype, "prescription", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'reviewed_by' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], DrugUtilizationReview.prototype, "reviewer", void 0);
exports.DrugUtilizationReview = DrugUtilizationReview = __decorate([
    (0, typeorm_1.Entity)('drug_utilization_review'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['prescription_id']),
    (0, typeorm_1.Index)(['review_date']),
    (0, typeorm_1.Index)(['review_type']),
    (0, typeorm_1.Index)(['alert_level']),
    (0, typeorm_1.Index)(['reviewed_by'])
], DrugUtilizationReview);
let ControlledSubstanceManagement = class ControlledSubstanceManagement {
};
exports.ControlledSubstanceManagement = ControlledSubstanceManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ControlledSubstanceManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ControlledSubstanceManagement.prototype, "inventory_item_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "dea_schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "transaction_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ControlledSubstanceManagement.prototype, "transaction_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ControlledSubstanceManagement.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ControlledSubstanceManagement.prototype, "quantity_change", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ControlledSubstanceManagement.prototype, "perpetual_balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "supplier_dea_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "invoice_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "prescription_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ControlledSubstanceManagement.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "prescriber_dea_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "transaction_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ControlledSubstanceManagement.prototype, "witness_user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "destruction_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "theft_loss_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "regulatory_report_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "audit_trail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "compliance_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ControlledSubstanceManagement.prototype, "verification_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ControlledSubstanceManagement.prototype, "verified_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ControlledSubstanceManagement.prototype, "verification_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ControlledSubstanceManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ControlledSubstanceManagement.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PharmacyInventory),
    (0, typeorm_1.JoinColumn)({ name: 'inventory_item_id' }),
    __metadata("design:type", PharmacyInventory)
], ControlledSubstanceManagement.prototype, "inventory_item", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_j = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _j : Object)
], ControlledSubstanceManagement.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], ControlledSubstanceManagement.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'witness_user_id' }),
    __metadata("design:type", typeof (_k = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _k : Object)
], ControlledSubstanceManagement.prototype, "witness", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'verified_by' }),
    __metadata("design:type", typeof (_l = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _l : Object)
], ControlledSubstanceManagement.prototype, "verifier", void 0);
exports.ControlledSubstanceManagement = ControlledSubstanceManagement = __decorate([
    (0, typeorm_1.Entity)('controlled_substance_management'),
    (0, typeorm_1.Index)(['inventory_item_id']),
    (0, typeorm_1.Index)(['dea_schedule']),
    (0, typeorm_1.Index)(['transaction_type']),
    (0, typeorm_1.Index)(['transaction_date']),
    (0, typeorm_1.Index)(['user_id']),
    (0, typeorm_1.Index)(['perpetual_balance'])
], ControlledSubstanceManagement);
let PharmacyAutomation = class PharmacyAutomation {
};
exports.PharmacyAutomation = PharmacyAutomation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PharmacyAutomation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "device_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "device_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "model_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "serial_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "device_configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "inventory_capacity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "current_inventory", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PharmacyAutomation.prototype, "last_transaction_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "transaction_log", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "error_log", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "maintenance_schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PharmacyAutomation.prototype, "last_maintenance_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PharmacyAutomation.prototype, "next_maintenance_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "performance_metrics", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "security_features", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "user_access_log", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "integration_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PharmacyAutomation.prototype, "calibration_data", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PharmacyAutomation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PharmacyAutomation.prototype, "updated_at", void 0);
exports.PharmacyAutomation = PharmacyAutomation = __decorate([
    (0, typeorm_1.Entity)('pharmacy_automation'),
    (0, typeorm_1.Index)(['device_name']),
    (0, typeorm_1.Index)(['device_type']),
    (0, typeorm_1.Index)(['location']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['last_transaction_date'])
], PharmacyAutomation);
//# sourceMappingURL=advanced-pharmacy-information-system.entity.js.map