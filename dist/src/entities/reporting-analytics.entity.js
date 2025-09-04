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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceReport = exports.AnalyticsMetric = exports.FinancialReport = exports.DashboardWidget = exports.ClinicalQualityMeasure = exports.ScheduledReport = exports.ReportExecution = exports.ReportDefinition = void 0;
const typeorm_1 = require("typeorm");
const facility_provider_entity_1 = require("./facility-provider.entity");
const patient_management_entity_1 = require("./patient-management.entity");
let ReportDefinition = class ReportDefinition {
};
exports.ReportDefinition = ReportDefinition;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ReportDefinition.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ReportDefinition.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ReportDefinition.prototype, "report_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ReportDefinition.prototype, "report_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ReportDefinition.prototype, "report_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ReportDefinition.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ReportDefinition.prototype, "sql_query", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ReportDefinition.prototype, "report_parameters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ReportDefinition.prototype, "column_definitions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ReportDefinition.prototype, "filter_definitions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ReportDefinition.prototype, "output_format", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ReportDefinition.prototype, "template_file", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ReportDefinition.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], ReportDefinition.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ReportDefinition.prototype, "is_public", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ReportDefinition.prototype, "access_permissions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ReportDefinition.prototype, "execution_timeout", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ReportDefinition.prototype, "schedule_frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ReportDefinition.prototype, "schedule_recipients", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ReportDefinition.prototype, "last_run_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ReportDefinition.prototype, "run_count", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ReportDefinition.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ReportDefinition.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], ReportDefinition.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ReportExecution, execution => execution.report_definition),
    __metadata("design:type", Array)
], ReportDefinition.prototype, "executions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ScheduledReport, schedule => schedule.report_definition),
    __metadata("design:type", Array)
], ReportDefinition.prototype, "schedules", void 0);
exports.ReportDefinition = ReportDefinition = __decorate([
    (0, typeorm_1.Entity)('report_definitions'),
    (0, typeorm_1.Index)(['report_name']),
    (0, typeorm_1.Index)(['report_category']),
    (0, typeorm_1.Index)(['created_by'])
], ReportDefinition);
let ReportExecution = class ReportExecution {
};
exports.ReportExecution = ReportExecution;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ReportExecution.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ReportExecution.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ReportExecution.prototype, "report_definition_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ReportExecution.prototype, "executed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ReportExecution.prototype, "execution_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ReportExecution.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ReportExecution.prototype, "parameters_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ReportExecution.prototype, "filters_applied", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ReportExecution.prototype, "record_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ReportExecution.prototype, "execution_time_seconds", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ReportExecution.prototype, "output_filename", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ReportExecution.prototype, "output_path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ReportExecution.prototype, "output_size_bytes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ReportExecution.prototype, "error_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ReportExecution.prototype, "execution_log", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ReportExecution.prototype, "started_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ReportExecution.prototype, "completed_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ReportExecution.prototype, "session_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ReportExecution.prototype, "ip_address", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ReportExecution.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ReportExecution.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ReportDefinition, definition => definition.executions),
    (0, typeorm_1.JoinColumn)({ name: 'report_definition_id' }),
    __metadata("design:type", ReportDefinition)
], ReportExecution.prototype, "report_definition", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'executed_by' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], ReportExecution.prototype, "executor", void 0);
exports.ReportExecution = ReportExecution = __decorate([
    (0, typeorm_1.Entity)('report_executions'),
    (0, typeorm_1.Index)(['report_definition_id']),
    (0, typeorm_1.Index)(['executed_by']),
    (0, typeorm_1.Index)(['execution_date']),
    (0, typeorm_1.Index)(['status'])
], ReportExecution);
let ScheduledReport = class ScheduledReport {
};
exports.ScheduledReport = ScheduledReport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ScheduledReport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ScheduledReport.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ScheduledReport.prototype, "report_definition_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ScheduledReport.prototype, "schedule_frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ScheduledReport.prototype, "schedule_pattern", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ScheduledReport.prototype, "next_run_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ScheduledReport.prototype, "last_run_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ScheduledReport.prototype, "default_parameters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ScheduledReport.prototype, "recipient_emails", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ScheduledReport.prototype, "output_format", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ScheduledReport.prototype, "email_subject", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ScheduledReport.prototype, "email_body", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ScheduledReport.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ScheduledReport.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ScheduledReport.prototype, "run_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ScheduledReport.prototype, "failure_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ScheduledReport.prototype, "last_failure_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ScheduledReport.prototype, "last_failure_reason", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ScheduledReport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ScheduledReport.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ReportDefinition, definition => definition.schedules),
    (0, typeorm_1.JoinColumn)({ name: 'report_definition_id' }),
    __metadata("design:type", ReportDefinition)
], ScheduledReport.prototype, "report_definition", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], ScheduledReport.prototype, "creator", void 0);
exports.ScheduledReport = ScheduledReport = __decorate([
    (0, typeorm_1.Entity)('scheduled_reports'),
    (0, typeorm_1.Index)(['report_definition_id']),
    (0, typeorm_1.Index)(['schedule_frequency']),
    (0, typeorm_1.Index)(['next_run_date']),
    (0, typeorm_1.Index)(['active'])
], ScheduledReport);
let ClinicalQualityMeasure = class ClinicalQualityMeasure {
};
exports.ClinicalQualityMeasure = ClinicalQualityMeasure;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ClinicalQualityMeasure.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ClinicalQualityMeasure.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalQualityMeasure.prototype, "measure_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ClinicalQualityMeasure.prototype, "measure_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ClinicalQualityMeasure.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalQualityMeasure.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ClinicalQualityMeasure.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalQualityMeasure.prototype, "reporting_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ClinicalQualityMeasure.prototype, "period_start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ClinicalQualityMeasure.prototype, "period_end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ClinicalQualityMeasure.prototype, "denominator_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ClinicalQualityMeasure.prototype, "numerator_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalQualityMeasure.prototype, "exclusion_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalQualityMeasure.prototype, "exception_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalQualityMeasure.prototype, "evidence_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ClinicalQualityMeasure.prototype, "calculation_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ClinicalQualityMeasure.prototype, "calculation_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalQualityMeasure.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], ClinicalQualityMeasure.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalQualityMeasure.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalQualityMeasure.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], ClinicalQualityMeasure.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], ClinicalQualityMeasure.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], ClinicalQualityMeasure.prototype, "facility", void 0);
exports.ClinicalQualityMeasure = ClinicalQualityMeasure = __decorate([
    (0, typeorm_1.Entity)('clinical_quality_measures'),
    (0, typeorm_1.Index)(['measure_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['reporting_period']),
    (0, typeorm_1.Index)(['facility_id'])
], ClinicalQualityMeasure);
let DashboardWidget = class DashboardWidget {
};
exports.DashboardWidget = DashboardWidget;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DashboardWidget.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], DashboardWidget.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DashboardWidget.prototype, "widget_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], DashboardWidget.prototype, "widget_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], DashboardWidget.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DashboardWidget.prototype, "widget_config", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DashboardWidget.prototype, "data_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], DashboardWidget.prototype, "position_x", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], DashboardWidget.prototype, "position_y", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 300 }),
    __metadata("design:type", Number)
], DashboardWidget.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 200 }),
    __metadata("design:type", Number)
], DashboardWidget.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], DashboardWidget.prototype, "refresh_interval", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], DashboardWidget.prototype, "last_updated", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], DashboardWidget.prototype, "visible", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], DashboardWidget.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DashboardWidget.prototype, "dashboard_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DashboardWidget.prototype, "filter_config", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DashboardWidget.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DashboardWidget.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], DashboardWidget.prototype, "user", void 0);
exports.DashboardWidget = DashboardWidget = __decorate([
    (0, typeorm_1.Entity)('dashboard_widgets'),
    (0, typeorm_1.Index)(['widget_name']),
    (0, typeorm_1.Index)(['widget_type']),
    (0, typeorm_1.Index)(['user_id'])
], DashboardWidget);
let FinancialReport = class FinancialReport {
};
exports.FinancialReport = FinancialReport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], FinancialReport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], FinancialReport.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], FinancialReport.prototype, "report_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], FinancialReport.prototype, "report_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], FinancialReport.prototype, "period_start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], FinancialReport.prototype, "period_end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], FinancialReport.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], FinancialReport.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "total_charges", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "total_payments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "total_adjustments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "total_outstanding", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "aging_0_30", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "aging_31_60", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "aging_61_90", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "aging_91_120", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "aging_over_120", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "total_encounters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "total_patients", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FinancialReport.prototype, "report_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], FinancialReport.prototype, "generated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FinancialReport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FinancialReport.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], FinancialReport.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], FinancialReport.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'generated_by' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], FinancialReport.prototype, "generator", void 0);
exports.FinancialReport = FinancialReport = __decorate([
    (0, typeorm_1.Entity)('financial_reports'),
    (0, typeorm_1.Index)(['report_type']),
    (0, typeorm_1.Index)(['report_date']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['provider_id'])
], FinancialReport);
let AnalyticsMetric = class AnalyticsMetric {
};
exports.AnalyticsMetric = AnalyticsMetric;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AnalyticsMetric.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], AnalyticsMetric.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AnalyticsMetric.prototype, "metric_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AnalyticsMetric.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], AnalyticsMetric.prototype, "metric_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 15, scale: 4, default: 0.0000 }),
    __metadata("design:type", Number)
], AnalyticsMetric.prototype, "metric_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], AnalyticsMetric.prototype, "metric_unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AnalyticsMetric.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], AnalyticsMetric.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], AnalyticsMetric.prototype, "department_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnalyticsMetric.prototype, "metric_attributes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AnalyticsMetric.prototype, "calculation_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AnalyticsMetric.prototype, "calculation_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AnalyticsMetric.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AnalyticsMetric.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AnalyticsMetric.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], AnalyticsMetric.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], AnalyticsMetric.prototype, "provider", void 0);
exports.AnalyticsMetric = AnalyticsMetric = __decorate([
    (0, typeorm_1.Entity)('analytics_metrics'),
    (0, typeorm_1.Index)(['metric_name']),
    (0, typeorm_1.Index)(['metric_date']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['category'])
], AnalyticsMetric);
let ComplianceReport = class ComplianceReport {
};
exports.ComplianceReport = ComplianceReport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ComplianceReport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ComplianceReport.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ComplianceReport.prototype, "report_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ComplianceReport.prototype, "compliance_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ComplianceReport.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ComplianceReport.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ComplianceReport.prototype, "submission_deadline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ComplianceReport.prototype, "submitted_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceReport.prototype, "report_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ComplianceReport.prototype, "submission_reference", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceReport.prototype, "validation_errors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceReport.prototype, "submission_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ComplianceReport.prototype, "submitted_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ComplianceReport.prototype, "reviewed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ComplianceReport.prototype, "review_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceReport.prototype, "review_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ComplianceReport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ComplianceReport.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], ComplianceReport.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'submitted_by' }),
    __metadata("design:type", typeof (_j = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _j : Object)
], ComplianceReport.prototype, "submitter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'reviewed_by' }),
    __metadata("design:type", typeof (_k = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _k : Object)
], ComplianceReport.prototype, "reviewer", void 0);
exports.ComplianceReport = ComplianceReport = __decorate([
    (0, typeorm_1.Entity)('compliance_reports'),
    (0, typeorm_1.Index)(['report_type']),
    (0, typeorm_1.Index)(['compliance_period']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['status'])
], ComplianceReport);
//# sourceMappingURL=reporting-analytics.entity.js.map