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
let ReportsAnalyticsController = class ReportsAnalyticsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    async getAllReports(query) {
        return this.reportsService.getAllReports(query);
    }
    async getReportById(id) {
        return this.reportsService.getReportById(id);
    }
    async createReport(createData) {
        return this.reportsService.createReport(createData);
    }
    async updateReport(id, updateData) {
        return this.reportsService.updateReport(id, updateData);
    }
    async deleteReport(id) {
        return this.reportsService.deleteReport(id);
    }
};
exports.ReportsAnalyticsController = ReportsAnalyticsController;
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
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "createReport", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "updateReport", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsAnalyticsController.prototype, "deleteReport", null);
exports.ReportsAnalyticsController = ReportsAnalyticsController = __decorate([
    (0, common_1.Controller)('reports'),
    __metadata("design:paramtypes", [reports_analytics_service_1.ReportsAnalyticsService])
], ReportsAnalyticsController);
//# sourceMappingURL=reports-analytics.controller.js.map