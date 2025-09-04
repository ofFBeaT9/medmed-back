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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsAnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const reports_analytics_service_1 = require("./reports-analytics.service");
const reports_analytics_dto_1 = require("./dto/reports-analytics.dto");
let ReportsAnalyticsController = class ReportsAnalyticsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    async createReport(createReportDto) {
        return this.reportsService.createReport(createReportDto);
    }
    async getAllReports(query) {
        return this.reportsService.getAllReports(query);
    }
    async getReportById(id) {
        return this.reportsService.getReportById(id);
    }
    async updateReport(id, updateReportDto) {
        return this.reportsService.updateReport(id, updateReportDto);
    }
    async deleteReport(id) {
        return this.reportsService.deleteReport(id);
    }
    async generateReport(id, parameters) {
        return this.reportsService.generateReport(id, parameters);
    }
    async createDashboard(createDashboardDto) {
        return this.reportsService.createDashboard(createDashboardDto);
    }
    async getAllDashboards(query) {
        return this.reportsService.getAllDashboards(query);
    }
    async getDashboardById(id) {
        return this.reportsService.getDashboardById(id);
    }
    async updateDashboard(id, updateData) {
        return this.reportsService.updateDashboard(id, updateData);
    }
    async createKPI(createKPIDto) {
        return this.reportsService.createKPI(createKPIDto);
    }
    async getAllKPIs(query) {
        return this.reportsService.getAllKPIs(query);
    }
    async calculateKPI(id) {
        return this.reportsService.calculateKPI(id);
    }
    async getAnalyticsSummary(query) {
        return this.reportsService.getAnalyticsSummary(query);
    }
    async getTrends(query) {
        return this.reportsService.getTrends(query);
    }
    async trackEvent(eventData) {
        return this.reportsService.trackEvent(eventData);
    }
    async getEvents(query) {
        return this.reportsService.getEvents(query);
    }
};
exports.ReportsAnalyticsController = ReportsAnalyticsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reports_analytics_dto_1.CreateReportDto]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "createReport", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "getAllReports", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "getReportById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reports_analytics_dto_1.UpdateReportDto]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "updateReport", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "deleteReport", null);
__decorate([
    (0, common_1.Post)(':id/generate'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "generateReport", null);
__decorate([
    (0, common_1.Post)('dashboards'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reports_analytics_dto_1.CreateDashboardDto]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "createDashboard", null);
__decorate([
    (0, common_1.Get)('dashboards'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "getAllDashboards", null);
__decorate([
    (0, common_1.Get)('dashboards/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "getDashboardById", null);
__decorate([
    (0, common_1.Put)('dashboards/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "updateDashboard", null);
__decorate([
    (0, common_1.Post)('kpis'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reports_analytics_dto_1.CreateKPIDto]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "createKPI", null);
__decorate([
    (0, common_1.Get)('kpis'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "getAllKPIs", null);
__decorate([
    (0, common_1.Get)('kpis/:id/calculate'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "calculateKPI", null);
__decorate([
    (0, common_1.Get)('analytics/summary'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "getAnalyticsSummary", null);
__decorate([
    (0, common_1.Get)('analytics/trends'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "getTrends", null);
__decorate([
    (0, common_1.Post)('analytics/events'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "trackEvent", null);
__decorate([
    (0, common_1.Get)('analytics/events'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "getEvents", null);
exports.ReportsAnalyticsController = ReportsAnalyticsController = __decorate([
    (0, common_1.Controller)('reports'),
    __metadata("design:paramtypes", [reports_analytics_service_1.ReportsAnalyticsService])
], ReportsAnalyticsController);
//# sourceMappingURL=reports-analytics.controller.js.map