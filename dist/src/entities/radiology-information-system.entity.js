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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadiologyEquipment = exports.DicomInstance = exports.DicomSeries = exports.DicomStudy = exports.RadiologyOrderTracking = exports.RadiologyReportHistory = exports.RadiologyReport = exports.RadiologyOrder = exports.RadiologyProcedure = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let RadiologyProcedure = class RadiologyProcedure {
};
exports.RadiologyProcedure = RadiologyProcedure;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RadiologyProcedure.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "procedure_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "procedure_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "procedure_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "body_part", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "procedure_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], RadiologyProcedure.prototype, "requires_contrast", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "contrast_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "preparation_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 30 }),
    __metadata("design:type", Number)
], RadiologyProcedure.prototype, "estimated_duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], RadiologyProcedure.prototype, "standard_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "cpt_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiologyProcedure.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "contraindications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "special_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "equipment_required", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyProcedure.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RadiologyProcedure.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RadiologyProcedure.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RadiologyOrder, order => order.radiology_procedure),
    __metadata("design:type", Array)
], RadiologyProcedure.prototype, "radiology_orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RadiologyReport, report => report.radiology_procedure),
    __metadata("design:type", Array)
], RadiologyProcedure.prototype, "radiology_reports", void 0);
exports.RadiologyProcedure = RadiologyProcedure = __decorate([
    (0, typeorm_1.Entity)('radiology_procedures'),
    (0, typeorm_1.Index)(['procedure_code']),
    (0, typeorm_1.Index)(['procedure_name']),
    (0, typeorm_1.Index)(['modality']),
    (0, typeorm_1.Index)(['body_part']),
    (0, typeorm_1.Index)(['active'])
], RadiologyProcedure);
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
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "radiology_procedure_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "order_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], RadiologyOrder.prototype, "order_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "ordering_provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "clinical_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "clinical_question", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "diagnosis_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "diagnosis_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RadiologyOrder.prototype, "scheduled_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RadiologyOrder.prototype, "scheduled_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "technologist_assigned", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "radiologist_assigned", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "equipment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "special_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "requires_sedation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "patient_pregnant", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RadiologyOrder.prototype, "patient_weight_kg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "allergies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "medications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyOrder.prototype, "notes", void 0);
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
    (0, typeorm_1.ManyToOne)(() => RadiologyProcedure, procedure => procedure.radiology_orders),
    (0, typeorm_1.JoinColumn)({ name: 'radiology_procedure_id' }),
    __metadata("design:type", RadiologyProcedure)
], RadiologyOrder.prototype, "radiology_procedure", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'ordering_provider' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], RadiologyOrder.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'technologist_assigned' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], RadiologyOrder.prototype, "technologist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'radiologist_assigned' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], RadiologyOrder.prototype, "radiologist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], RadiologyOrder.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RadiologyReport, report => report.radiology_order),
    __metadata("design:type", Array)
], RadiologyOrder.prototype, "radiology_reports", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RadiologyOrderTracking, tracking => tracking.radiology_order),
    __metadata("design:type", Array)
], RadiologyOrder.prototype, "tracking_history", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DicomStudy, study => study.radiology_order),
    __metadata("design:type", Array)
], RadiologyOrder.prototype, "dicom_studies", void 0);
exports.RadiologyOrder = RadiologyOrder = __decorate([
    (0, typeorm_1.Entity)('radiology_orders'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['encounter_id']),
    (0, typeorm_1.Index)(['radiology_procedure_id']),
    (0, typeorm_1.Index)(['order_date']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['priority'])
], RadiologyOrder);
let RadiologyReport = class RadiologyReport {
};
exports.RadiologyReport = RadiologyReport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RadiologyReport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RadiologyReport.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiologyReport.prototype, "radiology_order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiologyReport.prototype, "radiology_procedure_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "report_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiologyReport.prototype, "radiologist_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], RadiologyReport.prototype, "report_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyReport.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "clinical_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "technique", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "impression", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "overall_result", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], RadiologyReport.prototype, "critical_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "critical_findings_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RadiologyReport.prototype, "critical_findings_notification_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RadiologyReport.prototype, "critical_findings_notified_to", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RadiologyReport.prototype, "dictated_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RadiologyReport.prototype, "transcribed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RadiologyReport.prototype, "transcribed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RadiologyReport.prototype, "verified_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RadiologyReport.prototype, "signed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "voice_file_path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "addendum_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RadiologyReport.prototype, "addendum_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "correction_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReport.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RadiologyReport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RadiologyReport.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RadiologyOrder, order => order.radiology_reports),
    (0, typeorm_1.JoinColumn)({ name: 'radiology_order_id' }),
    __metadata("design:type", RadiologyOrder)
], RadiologyReport.prototype, "radiology_order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RadiologyProcedure, procedure => procedure.radiology_reports),
    (0, typeorm_1.JoinColumn)({ name: 'radiology_procedure_id' }),
    __metadata("design:type", RadiologyProcedure)
], RadiologyReport.prototype, "radiology_procedure", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'radiologist_id' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], RadiologyReport.prototype, "radiologist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'transcribed_by' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], RadiologyReport.prototype, "transcriber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'critical_findings_notified_to' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], RadiologyReport.prototype, "notified_provider", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RadiologyReportHistory, history => history.radiology_report),
    __metadata("design:type", Array)
], RadiologyReport.prototype, "report_history", void 0);
exports.RadiologyReport = RadiologyReport = __decorate([
    (0, typeorm_1.Entity)('radiology_reports'),
    (0, typeorm_1.Index)(['radiology_order_id']),
    (0, typeorm_1.Index)(['radiology_procedure_id']),
    (0, typeorm_1.Index)(['radiologist_id']),
    (0, typeorm_1.Index)(['report_date']),
    (0, typeorm_1.Index)(['status'])
], RadiologyReport);
let RadiologyReportHistory = class RadiologyReportHistory {
};
exports.RadiologyReportHistory = RadiologyReportHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RadiologyReportHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RadiologyReportHistory.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiologyReportHistory.prototype, "radiology_report_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyReportHistory.prototype, "change_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], RadiologyReportHistory.prototype, "change_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RadiologyReportHistory.prototype, "changed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReportHistory.prototype, "old_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReportHistory.prototype, "new_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReportHistory.prototype, "change_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyReportHistory.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RadiologyReportHistory.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RadiologyReport, report => report.report_history),
    (0, typeorm_1.JoinColumn)({ name: 'radiology_report_id' }),
    __metadata("design:type", RadiologyReport)
], RadiologyReportHistory.prototype, "radiology_report", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'changed_by' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], RadiologyReportHistory.prototype, "changer", void 0);
exports.RadiologyReportHistory = RadiologyReportHistory = __decorate([
    (0, typeorm_1.Entity)('radiology_report_history'),
    (0, typeorm_1.Index)(['radiology_report_id']),
    (0, typeorm_1.Index)(['change_date']),
    (0, typeorm_1.Index)(['change_type'])
], RadiologyReportHistory);
let RadiologyOrderTracking = class RadiologyOrderTracking {
};
exports.RadiologyOrderTracking = RadiologyOrderTracking;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RadiologyOrderTracking.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RadiologyOrderTracking.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiologyOrderTracking.prototype, "radiology_order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyOrderTracking.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], RadiologyOrderTracking.prototype, "status_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyOrderTracking.prototype, "status_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RadiologyOrderTracking.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyOrderTracking.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyOrderTracking.prototype, "additional_info", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RadiologyOrderTracking.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RadiologyOrder, order => order.tracking_history),
    (0, typeorm_1.JoinColumn)({ name: 'radiology_order_id' }),
    __metadata("design:type", RadiologyOrder)
], RadiologyOrderTracking.prototype, "radiology_order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], RadiologyOrderTracking.prototype, "updater", void 0);
exports.RadiologyOrderTracking = RadiologyOrderTracking = __decorate([
    (0, typeorm_1.Entity)('radiology_order_tracking'),
    (0, typeorm_1.Index)(['radiology_order_id']),
    (0, typeorm_1.Index)(['status_date']),
    (0, typeorm_1.Index)(['status'])
], RadiologyOrderTracking);
let DicomStudy = class DicomStudy {
};
exports.DicomStudy = DicomStudy;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DicomStudy.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], DicomStudy.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DicomStudy.prototype, "radiology_order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DicomStudy.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DicomStudy.prototype, "study_instance_uid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomStudy.prototype, "accession_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], DicomStudy.prototype, "study_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], DicomStudy.prototype, "study_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DicomStudy.prototype, "modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomStudy.prototype, "study_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomStudy.prototype, "referring_physician", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomStudy.prototype, "performing_physician", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomStudy.prototype, "interpreting_physician", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomStudy.prototype, "institution_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomStudy.prototype, "station_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], DicomStudy.prototype, "number_of_series", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], DicomStudy.prototype, "number_of_instances", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], DicomStudy.prototype, "study_size_bytes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomStudy.prototype, "storage_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], DicomStudy.prototype, "storage_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], DicomStudy.prototype, "received_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], DicomStudy.prototype, "archived_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DicomStudy.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DicomStudy.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DicomStudy.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RadiologyOrder, order => order.dicom_studies),
    (0, typeorm_1.JoinColumn)({ name: 'radiology_order_id' }),
    __metadata("design:type", RadiologyOrder)
], DicomStudy.prototype, "radiology_order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], DicomStudy.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DicomSeries, series => series.dicom_study),
    __metadata("design:type", Array)
], DicomStudy.prototype, "dicom_series", void 0);
exports.DicomStudy = DicomStudy = __decorate([
    (0, typeorm_1.Entity)('dicom_studies'),
    (0, typeorm_1.Index)(['radiology_order_id']),
    (0, typeorm_1.Index)(['study_instance_uid']),
    (0, typeorm_1.Index)(['study_date']),
    (0, typeorm_1.Index)(['modality']),
    (0, typeorm_1.Index)(['patient_id'])
], DicomStudy);
let DicomSeries = class DicomSeries {
};
exports.DicomSeries = DicomSeries;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DicomSeries.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], DicomSeries.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DicomSeries.prototype, "dicom_study_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DicomSeries.prototype, "series_instance_uid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DicomSeries.prototype, "modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DicomSeries.prototype, "series_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomSeries.prototype, "series_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomSeries.prototype, "body_part_examined", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomSeries.prototype, "patient_position", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], DicomSeries.prototype, "number_of_instances", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], DicomSeries.prototype, "series_size_bytes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], DicomSeries.prototype, "series_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], DicomSeries.prototype, "series_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomSeries.prototype, "performing_physician", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomSeries.prototype, "protocol_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DicomSeries.prototype, "series_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DicomSeries.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DicomSeries.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DicomStudy, study => study.dicom_series),
    (0, typeorm_1.JoinColumn)({ name: 'dicom_study_id' }),
    __metadata("design:type", DicomStudy)
], DicomSeries.prototype, "dicom_study", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DicomInstance, instance => instance.dicom_series),
    __metadata("design:type", Array)
], DicomSeries.prototype, "dicom_instances", void 0);
exports.DicomSeries = DicomSeries = __decorate([
    (0, typeorm_1.Entity)('dicom_series'),
    (0, typeorm_1.Index)(['dicom_study_id']),
    (0, typeorm_1.Index)(['series_instance_uid']),
    (0, typeorm_1.Index)(['modality']),
    (0, typeorm_1.Index)(['series_number'])
], DicomSeries);
let DicomInstance = class DicomInstance {
};
exports.DicomInstance = DicomInstance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DicomInstance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], DicomInstance.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DicomInstance.prototype, "dicom_series_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DicomInstance.prototype, "sop_instance_uid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomInstance.prototype, "sop_class_uid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DicomInstance.prototype, "instance_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomInstance.prototype, "transfer_syntax_uid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], DicomInstance.prototype, "instance_size_bytes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomInstance.prototype, "file_path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DicomInstance.prototype, "file_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], DicomInstance.prototype, "image_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DicomInstance.prototype, "rows", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DicomInstance.prototype, "columns", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], DicomInstance.prototype, "photometric_interpretation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DicomInstance.prototype, "bits_allocated", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DicomInstance.prototype, "bits_stored", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], DicomInstance.prototype, "content_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], DicomInstance.prototype, "content_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DicomInstance.prototype, "instance_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DicomInstance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DicomInstance.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DicomSeries, series => series.dicom_instances),
    (0, typeorm_1.JoinColumn)({ name: 'dicom_series_id' }),
    __metadata("design:type", DicomSeries)
], DicomInstance.prototype, "dicom_series", void 0);
exports.DicomInstance = DicomInstance = __decorate([
    (0, typeorm_1.Entity)('dicom_instances'),
    (0, typeorm_1.Index)(['dicom_series_id']),
    (0, typeorm_1.Index)(['sop_instance_uid']),
    (0, typeorm_1.Index)(['instance_number'])
], DicomInstance);
let RadiologyEquipment = class RadiologyEquipment {
};
exports.RadiologyEquipment = RadiologyEquipment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RadiologyEquipment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "equipment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "equipment_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "serial_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "software_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiologyEquipment.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], RadiologyEquipment.prototype, "installation_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], RadiologyEquipment.prototype, "last_service_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], RadiologyEquipment.prototype, "next_service_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "service_contract", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "dicom_ae_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "dicom_station_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RadiologyEquipment.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RadiologyEquipment.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RadiologyEquipment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RadiologyEquipment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], RadiologyEquipment.prototype, "facility", void 0);
exports.RadiologyEquipment = RadiologyEquipment = __decorate([
    (0, typeorm_1.Entity)('radiology_equipment'),
    (0, typeorm_1.Index)(['equipment_id']),
    (0, typeorm_1.Index)(['modality']),
    (0, typeorm_1.Index)(['active']),
    (0, typeorm_1.Index)(['facility_id'])
], RadiologyEquipment);
//# sourceMappingURL=radiology-information-system.entity.js.map