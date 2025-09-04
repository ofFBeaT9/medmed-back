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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcedureReport = exports.LabCompendium = exports.RadiologyOrder = exports.ProcedureType = exports.ProcedureProvider = exports.ProcedureResult = exports.ProcedureOrderCode = exports.ProcedureOrder = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let ProcedureOrder = class ProcedureOrder {
};
exports.ProcedureOrder = ProcedureOrder;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ProcedureOrder.prototype, "procedure_order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ProcedureOrder.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ProcedureOrder.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ProcedureOrder.prototype, "encounter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ProcedureOrder.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ProcedureOrder.prototype, "date_collected", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ProcedureOrder.prototype, "date_ordered", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureOrder.prototype, "order_priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureOrder.prototype, "order_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ProcedureOrder.prototype, "patient_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ProcedureOrder.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureOrder.prototype, "control_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureOrder.prototype, "lab_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProcedureOrder.prototype, "specimen_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProcedureOrder.prototype, "specimen_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProcedureOrder.prototype, "specimen_volume", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ProcedureOrder.prototype, "date_transmitted", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProcedureOrder.prototype, "clinical_hx", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureOrder.prototype, "external_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], ProcedureOrder.prototype, "history_order", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureOrder.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureOrder.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], ProcedureOrder.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Encounter),
    (0, typeorm_1.JoinColumn)({ name: 'encounter_id' }),
    __metadata("design:type", patient_management_entity_1.Encounter)
], ProcedureOrder.prototype, "encounter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], ProcedureOrder.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProcedureOrderCode, code => code.procedure_order),
    __metadata("design:type", Array)
], ProcedureOrder.prototype, "procedure_codes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProcedureResult, result => result.procedure_order),
    __metadata("design:type", Array)
], ProcedureOrder.prototype, "results", void 0);
exports.ProcedureOrder = ProcedureOrder = __decorate([
    (0, typeorm_1.Entity)('procedure_orders'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['encounter_id']),
    (0, typeorm_1.Index)(['date_collected']),
    (0, typeorm_1.Index)(['provider_id'])
], ProcedureOrder);
let ProcedureOrderCode = class ProcedureOrderCode {
};
exports.ProcedureOrderCode = ProcedureOrderCode;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ProcedureOrderCode.prototype, "procedure_order_seq", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ProcedureOrderCode.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ProcedureOrderCode.prototype, "procedure_order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ProcedureOrderCode.prototype, "procedure_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ProcedureOrderCode.prototype, "procedure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], ProcedureOrderCode.prototype, "procedure_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ProcedureOrderCode.prototype, "diagnoses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ProcedureOrderCode.prototype, "do_not_send", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ProcedureOrderCode.prototype, "units", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ProcedureOrderCode.prototype, "range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ProcedureOrderCode.prototype, "abnormal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProcedureOrderCode.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureOrderCode.prototype, "transport", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureOrderCode.prototype, "specimen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureOrderCode.prototype, "route_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureOrderCode.prototype, "clinical_hx", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureOrderCode.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureOrderCode.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProcedureOrder, order => order.procedure_codes),
    (0, typeorm_1.JoinColumn)({ name: 'procedure_order_id' }),
    __metadata("design:type", ProcedureOrder)
], ProcedureOrderCode.prototype, "procedure_order", void 0);
exports.ProcedureOrderCode = ProcedureOrderCode = __decorate([
    (0, typeorm_1.Entity)('procedure_order_codes'),
    (0, typeorm_1.Index)(['procedure_order_id']),
    (0, typeorm_1.Index)(['procedure_code']),
    (0, typeorm_1.Index)(['procedure_name'])
], ProcedureOrderCode);
let ProcedureResult = class ProcedureResult {
};
exports.ProcedureResult = ProcedureResult;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ProcedureResult.prototype, "procedure_result_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ProcedureResult.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ProcedureResult.prototype, "procedure_order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ProcedureResult.prototype, "procedure_order_seq", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ProcedureResult.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ProcedureResult.prototype, "result_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureResult.prototype, "result_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureResult.prototype, "result_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureResult.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureResult.prototype, "range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureResult.prototype, "abnormal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProcedureResult.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], ProcedureResult.prototype, "document_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ProcedureResult.prototype, "date_end", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureResult.prototype, "units", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], ProcedureResult.prototype, "result_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureResult.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProcedureResult.prototype, "specimen_num", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureResult.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureResult.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProcedureOrder, order => order.results),
    (0, typeorm_1.JoinColumn)({ name: 'procedure_order_id' }),
    __metadata("design:type", ProcedureOrder)
], ProcedureResult.prototype, "procedure_order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProcedureOrderCode),
    (0, typeorm_1.JoinColumn)({ name: 'procedure_order_seq' }),
    __metadata("design:type", ProcedureOrderCode)
], ProcedureResult.prototype, "procedure_order_code", void 0);
exports.ProcedureResult = ProcedureResult = __decorate([
    (0, typeorm_1.Entity)('procedure_results'),
    (0, typeorm_1.Index)(['procedure_order_id']),
    (0, typeorm_1.Index)(['procedure_order_seq']),
    (0, typeorm_1.Index)(['result_code']),
    (0, typeorm_1.Index)(['date'])
], ProcedureResult);
let ProcedureProvider = class ProcedureProvider {
};
exports.ProcedureProvider = ProcedureProvider;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ProcedureProvider.prototype, "ppid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "npi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "send_app_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "send_fac_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "recv_app_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "recv_fac_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "DorP", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "direction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "protocol", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "remote_host", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "orders_path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "results_path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "orders_to", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "orders_attachment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureProvider.prototype, "lab_director", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ProcedureProvider.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureProvider.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureProvider.prototype, "updated_at", void 0);
exports.ProcedureProvider = ProcedureProvider = __decorate([
    (0, typeorm_1.Entity)('procedure_providers'),
    (0, typeorm_1.Index)(['name']),
    (0, typeorm_1.Index)(['npi'])
], ProcedureProvider);
let ProcedureType = class ProcedureType {
};
exports.ProcedureType = ProcedureType;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ProcedureType.prototype, "procedure_type_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ProcedureType.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ProcedureType.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 63, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ProcedureType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ProcedureType.prototype, "procedure_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureType.prototype, "body_site", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureType.prototype, "specimen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureType.prototype, "route_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ProcedureType.prototype, "laterality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProcedureType.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], ProcedureType.prototype, "standard_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ProcedureType.prototype, "units", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ProcedureType.prototype, "range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProcedureType.prototype, "related_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ProcedureType.prototype, "seq", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], ProcedureType.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureType.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureType.prototype, "updated_at", void 0);
exports.ProcedureType = ProcedureType = __decorate([
    (0, typeorm_1.Entity)('procedure_types'),
    (0, typeorm_1.Index)(['procedure_type']),
    (0, typeorm_1.Index)(['name'])
], ProcedureType);
let RadiologyOrder = class RadiologyOrder {
};
exports.RadiologyOrder = RadiologyOrder;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "encounter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], RadiologyOrder.prototype, "order_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "order_priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "order_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "clinical_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "procedure_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "procedure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "body_site", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "contrast", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "special_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "transport", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RadiologyOrder.prototype, "scheduled_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "technologist", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "radiologist", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RadiologyOrder.prototype, "completed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "report", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "report_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RadiologyOrder.prototype, "report_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RadiologyOrder.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RadiologyOrder.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], RadiologyOrder.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Encounter),
    (0, typeorm_1.JoinColumn)({ name: 'encounter_id' }),
    __metadata("design:type", patient_management_entity_1.Encounter)
], RadiologyOrder.prototype, "encounter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], RadiologyOrder.prototype, "provider", void 0);
exports.RadiologyOrder = RadiologyOrder = __decorate([
    (0, typeorm_1.Entity)('radiology_orders'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['encounter_id']),
    (0, typeorm_1.Index)(['order_date'])
], RadiologyOrder);
let LabCompendium = class LabCompendium {
};
exports.LabCompendium = LabCompendium;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LabCompendium.prototype, "answer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], LabCompendium.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LabCompendium.prototype, "procedure_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LabCompendium.prototype, "question_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LabCompendium.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], LabCompendium.prototype, "fldtype", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], LabCompendium.prototype, "fldsize", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], LabCompendium.prototype, "maxsize", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LabCompendium.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], LabCompendium.prototype, "seq", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], LabCompendium.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], LabCompendium.prototype, "required", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LabCompendium.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LabCompendium.prototype, "updated_at", void 0);
exports.LabCompendium = LabCompendium = __decorate([
    (0, typeorm_1.Entity)('lab_compendium'),
    (0, typeorm_1.Index)(['procedure_code']),
    (0, typeorm_1.Index)(['question_code'])
], LabCompendium);
let ProcedureReport = class ProcedureReport {
};
exports.ProcedureReport = ProcedureReport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ProcedureReport.prototype, "procedure_report_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ProcedureReport.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ProcedureReport.prototype, "procedure_order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ProcedureReport.prototype, "date_collected", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ProcedureReport.prototype, "date_report", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ProcedureReport.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProcedureReport.prototype, "specimen_num", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProcedureReport.prototype, "report_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProcedureReport.prototype, "review_status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureReport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureReport.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProcedureOrder),
    (0, typeorm_1.JoinColumn)({ name: 'procedure_order_id' }),
    __metadata("design:type", ProcedureOrder)
], ProcedureReport.prototype, "procedure_order", void 0);
exports.ProcedureReport = ProcedureReport = __decorate([
    (0, typeorm_1.Entity)('procedure_reports'),
    (0, typeorm_1.Index)(['procedure_order_id']),
    (0, typeorm_1.Index)(['date_collected']),
    (0, typeorm_1.Index)(['source'])
], ProcedureReport);
//# sourceMappingURL=lab-diagnostic.entity.js.map