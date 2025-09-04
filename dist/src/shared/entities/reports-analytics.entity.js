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
exports.KPIMetric = exports.AnalyticsEvent = exports.DashboardShare = exports.Dashboard = exports.ReportShare = exports.ReportExecution = exports.Report = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const patient_entity_1 = require("./patient.entity");
let Report = class Report {
};
exports.Report = Report;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Report.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Report.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Report.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Report.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Report.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], Report.prototype, "parameters", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], Report.prototype, "filters", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'draft' }),
    __metadata("design:type", String)
], Report.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Report.prototype, "filePath", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Report.prototype, "fileSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Report.prototype, "format", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Report.prototype, "scheduleCron", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Report.prototype, "isRecurring", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Report.prototype, "lastRunAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Report.prototype, "nextRunAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Report.prototype, "runCount", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], Report.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Report.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Report.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], Report.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ReportExecution, (execution) => execution.report),
    __metadata("design:type", Array)
], Report.prototype, "executions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ReportShare, (share) => share.report),
    __metadata("design:type", Array)
], Report.prototype, "shares", void 0);
exports.Report = Report = __decorate([
    (0, typeorm_1.Entity)('reports'),
    (0, typeorm_1.Index)(['type', 'status']),
    (0, typeorm_1.Index)(['createdAt', 'type'])
], Report);
let ReportExecution = class ReportExecution {
};
exports.ReportExecution = ReportExecution;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ReportExecution.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], ReportExecution.prototype, "reportId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pending' }),
    __metadata("design:type", String)
], ReportExecution.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], ReportExecution.prototype, "startedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], ReportExecution.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ReportExecution.prototype, "filePath", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ReportExecution.prototype, "fileSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ReportExecution.prototype, "recordCount", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], ReportExecution.prototype, "errorMessage", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], ReportExecution.prototype, "executionLog", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], ReportExecution.prototype, "executedById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ReportExecution.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Report),
    (0, typeorm_1.JoinColumn)({ name: 'reportId' }),
    __metadata("design:type", Report)
], ReportExecution.prototype, "report", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'executedById' }),
    __metadata("design:type", user_entity_1.User)
], ReportExecution.prototype, "executedBy", void 0);
exports.ReportExecution = ReportExecution = __decorate([
    (0, typeorm_1.Entity)('report_executions')
], ReportExecution);
let ReportShare = class ReportShare {
};
exports.ReportShare = ReportShare;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ReportShare.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], ReportShare.prototype, "reportId", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], ReportShare.prototype, "sharedWithUserId", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], ReportShare.prototype, "sharedById", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReportShare.prototype, "permission", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ReportShare.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ReportShare.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Report),
    (0, typeorm_1.JoinColumn)({ name: 'reportId' }),
    __metadata("design:type", Report)
], ReportShare.prototype, "report", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'sharedWithUserId' }),
    __metadata("design:type", user_entity_1.User)
], ReportShare.prototype, "sharedWithUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'sharedById' }),
    __metadata("design:type", user_entity_1.User)
], ReportShare.prototype, "sharedBy", void 0);
exports.ReportShare = ReportShare = __decorate([
    (0, typeorm_1.Entity)('report_shares')
], ReportShare);
let Dashboard = class Dashboard {
};
exports.Dashboard = Dashboard;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Dashboard.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Dashboard.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Dashboard.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'personal' }),
    __metadata("design:type", String)
], Dashboard.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], Dashboard.prototype, "layout", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], Dashboard.prototype, "widgets", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], Dashboard.prototype, "filters", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 30 }),
    __metadata("design:type", Number)
], Dashboard.prototype, "refreshInterval", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Dashboard.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], Dashboard.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Dashboard.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Dashboard.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], Dashboard.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DashboardShare, (share) => share.dashboard),
    __metadata("design:type", Array)
], Dashboard.prototype, "shares", void 0);
exports.Dashboard = Dashboard = __decorate([
    (0, typeorm_1.Entity)('dashboards')
], Dashboard);
let DashboardShare = class DashboardShare {
};
exports.DashboardShare = DashboardShare;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DashboardShare.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], DashboardShare.prototype, "dashboardId", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], DashboardShare.prototype, "sharedWithUserId", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], DashboardShare.prototype, "sharedById", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DashboardShare.prototype, "permission", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], DashboardShare.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DashboardShare.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Dashboard),
    (0, typeorm_1.JoinColumn)({ name: 'dashboardId' }),
    __metadata("design:type", Dashboard)
], DashboardShare.prototype, "dashboard", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'sharedWithUserId' }),
    __metadata("design:type", user_entity_1.User)
], DashboardShare.prototype, "sharedWithUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'sharedById' }),
    __metadata("design:type", user_entity_1.User)
], DashboardShare.prototype, "sharedBy", void 0);
exports.DashboardShare = DashboardShare = __decorate([
    (0, typeorm_1.Entity)('dashboard_shares')
], DashboardShare);
let AnalyticsEvent = class AnalyticsEvent {
};
exports.AnalyticsEvent = AnalyticsEvent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "eventCategory", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "eventAction", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "eventLabel", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], AnalyticsEvent.prototype, "properties", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "userAgent", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AnalyticsEvent.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], AnalyticsEvent.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_entity_1.Patient)
], AnalyticsEvent.prototype, "patient", void 0);
exports.AnalyticsEvent = AnalyticsEvent = __decorate([
    (0, typeorm_1.Entity)('analytics_events'),
    (0, typeorm_1.Index)(['eventType', 'createdAt']),
    (0, typeorm_1.Index)(['userId', 'createdAt'])
], AnalyticsEvent);
let KPIMetric = class KPIMetric {
};
exports.KPIMetric = KPIMetric;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], KPIMetric.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], KPIMetric.prototype, "metricType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], KPIMetric.prototype, "metricName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], KPIMetric.prototype, "period", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 15, scale: 4 }),
    __metadata("design:type", Number)
], KPIMetric.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 15, scale: 4, nullable: true }),
    __metadata("design:type", Number)
], KPIMetric.prototype, "target", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 15, scale: 4, nullable: true }),
    __metadata("design:type", Number)
], KPIMetric.prototype, "previousValue", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], KPIMetric.prototype, "breakdown", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], KPIMetric.prototype, "calculatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], KPIMetric.prototype, "periodStart", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], KPIMetric.prototype, "periodEnd", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], KPIMetric.prototype, "createdAt", void 0);
exports.KPIMetric = KPIMetric = __decorate([
    (0, typeorm_1.Entity)('kpi_metrics'),
    (0, typeorm_1.Index)(['metricType', 'period', 'calculatedAt'])
], KPIMetric);
//# sourceMappingURL=reports-analytics.entity.js.map