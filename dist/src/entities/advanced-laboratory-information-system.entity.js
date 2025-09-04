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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaboratoryQualityControl = exports.LaboratorySpecimen = exports.LaboratoryResult = exports.LaboratoryOrder = exports.LaboratoryTestCatalog = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let LaboratoryTestCatalog = class LaboratoryTestCatalog {
};
exports.LaboratoryTestCatalog = LaboratoryTestCatalog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LaboratoryTestCatalog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "test_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "test_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "test_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "test_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "loinc_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "cpt_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "specimen_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "collection_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "container_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], LaboratoryTestCatalog.prototype, "specimen_volume", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "volume_unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "collection_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "patient_preparation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryTestCatalog.prototype, "fasting_required_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "storage_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryTestCatalog.prototype, "stability_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "transport_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryTestCatalog.prototype, "turnaround_time_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "reference_ranges", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "critical_values", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "interfering_substances", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "clinical_significance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "methodology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "instrument_platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], LaboratoryTestCatalog.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], LaboratoryTestCatalog.prototype, "stat_available", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], LaboratoryTestCatalog.prototype, "point_of_care", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], LaboratoryTestCatalog.prototype, "send_out_test", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "reference_lab", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "quality_control_requirements", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryTestCatalog.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryTestCatalog.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => LaboratoryOrder, order => order.test_catalog),
    __metadata("design:type", Array)
], LaboratoryTestCatalog.prototype, "laboratory_orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => LaboratoryResult, result => result.test_catalog),
    __metadata("design:type", Array)
], LaboratoryTestCatalog.prototype, "laboratory_results", void 0);
exports.LaboratoryTestCatalog = LaboratoryTestCatalog = __decorate([
    (0, typeorm_1.Entity)('laboratory_test_catalog'),
    (0, typeorm_1.Index)(['test_code']),
    (0, typeorm_1.Index)(['test_name']),
    (0, typeorm_1.Index)(['test_category']),
    (0, typeorm_1.Index)(['department']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['loinc_code'])
], LaboratoryTestCatalog);
let LaboratoryOrder = class LaboratoryOrder {
};
exports.LaboratoryOrder = LaboratoryOrder;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "encounter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "test_catalog_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "ordered_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "order_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "order_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "order_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "clinical_indication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "diagnosis_codes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "special_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "collection_date_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "collected_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "collection_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "specimen_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "specimen_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "collection_comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "received_date_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "received_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "receipt_condition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "analysis_start_date_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "analysis_complete_date_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "analyzed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "instrument_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "quality_control_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "technical_comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "reviewed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "review_date_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "result_released_date_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "billing_information", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], LaboratoryOrder.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => LaboratoryTestCatalog, catalog => catalog.laboratory_orders),
    (0, typeorm_1.JoinColumn)({ name: 'test_catalog_id' }),
    __metadata("design:type", LaboratoryTestCatalog)
], LaboratoryOrder.prototype, "test_catalog", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'ordered_by' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], LaboratoryOrder.prototype, "ordering_provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'collected_by' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], LaboratoryOrder.prototype, "collector", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'received_by' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], LaboratoryOrder.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'analyzed_by' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], LaboratoryOrder.prototype, "analyzer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'reviewed_by' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], LaboratoryOrder.prototype, "reviewer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => LaboratoryResult, result => result.laboratory_order),
    __metadata("design:type", Array)
], LaboratoryOrder.prototype, "laboratory_results", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => LaboratorySpecimen, specimen => specimen.laboratory_order),
    __metadata("design:type", Array)
], LaboratoryOrder.prototype, "specimens", void 0);
exports.LaboratoryOrder = LaboratoryOrder = __decorate([
    (0, typeorm_1.Entity)('laboratory_orders'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['encounter_id']),
    (0, typeorm_1.Index)(['test_catalog_id']),
    (0, typeorm_1.Index)(['ordered_by']),
    (0, typeorm_1.Index)(['order_date']),
    (0, typeorm_1.Index)(['order_status']),
    (0, typeorm_1.Index)(['priority'])
], LaboratoryOrder);
let LaboratoryResult = class LaboratoryResult {
};
exports.LaboratoryResult = LaboratoryResult;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LaboratoryResult.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryResult.prototype, "laboratory_order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryResult.prototype, "test_catalog_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryResult.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], LaboratoryResult.prototype, "result_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "result_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "result_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "result_unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "abnormal_flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "reference_range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "result_comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "result_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "coded_result", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], LaboratoryResult.prototype, "critical_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryResult.prototype, "critical_value_notification_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryResult.prototype, "notified_provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "critical_value_action", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "technical_flags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "delta_check_flags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "quality_flags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "instrument_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "methodology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "calibration_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "quality_control_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryResult.prototype, "verified_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryResult.prototype, "verification_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "previous_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "trend_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "interpretation_rules", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "clinical_correlation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryResult.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryResult.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => LaboratoryOrder, order => order.laboratory_results),
    (0, typeorm_1.JoinColumn)({ name: 'laboratory_order_id' }),
    __metadata("design:type", LaboratoryOrder)
], LaboratoryResult.prototype, "laboratory_order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => LaboratoryTestCatalog, catalog => catalog.laboratory_results),
    (0, typeorm_1.JoinColumn)({ name: 'test_catalog_id' }),
    __metadata("design:type", LaboratoryTestCatalog)
], LaboratoryResult.prototype, "test_catalog", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], LaboratoryResult.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'notified_provider' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], LaboratoryResult.prototype, "notified_provider_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'verified_by' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], LaboratoryResult.prototype, "verifier", void 0);
exports.LaboratoryResult = LaboratoryResult = __decorate([
    (0, typeorm_1.Entity)('laboratory_results'),
    (0, typeorm_1.Index)(['laboratory_order_id']),
    (0, typeorm_1.Index)(['test_catalog_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['result_date']),
    (0, typeorm_1.Index)(['result_status']),
    (0, typeorm_1.Index)(['abnormal_flag'])
], LaboratoryResult);
let LaboratorySpecimen = class LaboratorySpecimen {
};
exports.LaboratorySpecimen = LaboratorySpecimen;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LaboratorySpecimen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratorySpecimen.prototype, "laboratory_order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratorySpecimen.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "specimen_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "specimen_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], LaboratorySpecimen.prototype, "collection_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "specimen_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "collection_site", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "collection_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], LaboratorySpecimen.prototype, "collected_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "collection_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "container_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "container_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 3, nullable: true }),
    __metadata("design:type", Number)
], LaboratorySpecimen.prototype, "volume_collected", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "volume_unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "collection_conditions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "patient_condition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "collection_complications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratorySpecimen.prototype, "transport_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratorySpecimen.prototype, "transport_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "transport_conditions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "transport_company", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratorySpecimen.prototype, "received_date_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], LaboratorySpecimen.prototype, "received_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "receipt_condition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "quality_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], LaboratorySpecimen.prototype, "specimen_rejected", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "rejection_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratorySpecimen.prototype, "processing_date_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], LaboratorySpecimen.prototype, "processed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "processing_steps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "aliquot_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "storage_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "storage_conditions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratorySpecimen.prototype, "disposal_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratorySpecimen.prototype, "disposal_method", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LaboratorySpecimen.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LaboratorySpecimen.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => LaboratoryOrder, order => order.specimens),
    (0, typeorm_1.JoinColumn)({ name: 'laboratory_order_id' }),
    __metadata("design:type", LaboratoryOrder)
], LaboratorySpecimen.prototype, "laboratory_order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], LaboratorySpecimen.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'collected_by' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], LaboratorySpecimen.prototype, "collector", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'received_by' }),
    __metadata("design:type", typeof (_j = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _j : Object)
], LaboratorySpecimen.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'processed_by' }),
    __metadata("design:type", typeof (_k = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _k : Object)
], LaboratorySpecimen.prototype, "processor", void 0);
exports.LaboratorySpecimen = LaboratorySpecimen = __decorate([
    (0, typeorm_1.Entity)('laboratory_specimens'),
    (0, typeorm_1.Index)(['laboratory_order_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['specimen_id']),
    (0, typeorm_1.Index)(['specimen_type']),
    (0, typeorm_1.Index)(['collection_date']),
    (0, typeorm_1.Index)(['specimen_status'])
], LaboratorySpecimen);
let LaboratoryQualityControl = class LaboratoryQualityControl {
};
exports.LaboratoryQualityControl = LaboratoryQualityControl;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LaboratoryQualityControl.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryQualityControl.prototype, "test_catalog_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "instrument_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], LaboratoryQualityControl.prototype, "qc_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "qc_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "qc_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryQualityControl.prototype, "performed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "qc_material_lot", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryQualityControl.prototype, "qc_material_expiration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "target_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "measured_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "acceptable_range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 3, nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityControl.prototype, "deviation_percentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "statistical_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "trend_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "corrective_actions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "root_cause_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityControl.prototype, "reviewed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryQualityControl.prototype, "review_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "review_comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityControl.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryQualityControl.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryQualityControl.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => LaboratoryTestCatalog),
    (0, typeorm_1.JoinColumn)({ name: 'test_catalog_id' }),
    __metadata("design:type", LaboratoryTestCatalog)
], LaboratoryQualityControl.prototype, "test_catalog", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'performed_by' }),
    __metadata("design:type", typeof (_l = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _l : Object)
], LaboratoryQualityControl.prototype, "performer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'reviewed_by' }),
    __metadata("design:type", typeof (_m = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _m : Object)
], LaboratoryQualityControl.prototype, "reviewer", void 0);
exports.LaboratoryQualityControl = LaboratoryQualityControl = __decorate([
    (0, typeorm_1.Entity)('laboratory_quality_control'),
    (0, typeorm_1.Index)(['test_catalog_id']),
    (0, typeorm_1.Index)(['instrument_id']),
    (0, typeorm_1.Index)(['qc_date']),
    (0, typeorm_1.Index)(['qc_level']),
    (0, typeorm_1.Index)(['qc_status']),
    (0, typeorm_1.Index)(['performed_by'])
], LaboratoryQualityControl);
//# sourceMappingURL=advanced-laboratory-information-system.entity.js.map