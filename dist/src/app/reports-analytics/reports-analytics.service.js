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
exports.ReportsAnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reports_analytics_entity_1 = require("../../shared/entities/reports-analytics.entity");
let ReportsAnalyticsService = class ReportsAnalyticsService {
    constructor(reportRepository, executionRepository, dashboardRepository, kpiRepository, eventRepository) {
        this.reportRepository = reportRepository;
        this.executionRepository = executionRepository;
        this.dashboardRepository = dashboardRepository;
        this.kpiRepository = kpiRepository;
        this.eventRepository = eventRepository;
    }
    async createReport(createData) {
        const report = this.reportRepository.create(createData);
        return this.reportRepository.save(report);
    }
    async getAllReports(query) {
        return this.reportRepository.find({ where: query });
    }
    async getReportById(id) {
        return this.reportRepository.findOne({ where: { id } });
    }
    async updateReport(id, updateData) {
        await this.reportRepository.update(id, updateData);
        return this.getReportById(id);
    }
    async deleteReport(id) {
        return this.reportRepository.delete(id);
    }
};
exports.ReportsAnalyticsService = ReportsAnalyticsService;
exports.ReportsAnalyticsService = ReportsAnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.Report)),
    __param(1, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.ReportExecution)),
    __param(2, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.Dashboard)),
    __param(3, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.KPIMetric)),
    __param(4, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.AnalyticsEvent)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReportsAnalyticsService);
//# sourceMappingURL=reports-analytics.service.js.map