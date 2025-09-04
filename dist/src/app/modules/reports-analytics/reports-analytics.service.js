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
const reports_analytics_entity_1 = require("../../../shared/entities/reports-analytics.entity");
let ReportsAnalyticsService = class ReportsAnalyticsService {
    constructor(reportRepository, executionRepository, shareRepository, dashboardRepository, dashboardShareRepository, kpiRepository, eventRepository) {
        this.reportRepository = reportRepository;
        this.executionRepository = executionRepository;
        this.shareRepository = shareRepository;
        this.dashboardRepository = dashboardRepository;
        this.dashboardShareRepository = dashboardShareRepository;
        this.kpiRepository = kpiRepository;
        this.eventRepository = eventRepository;
    }
    async createReport(createReportDto) {
        const report = this.reportRepository.create({
            name: createReportDto.name,
            description: createReportDto.description,
            type: createReportDto.category,
            category: createReportDto.category,
            parameters: createReportDto.parameters || {},
            createdById: createReportDto.createdBy,
            status: 'draft',
            scheduleCron: createReportDto.schedule,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return this.reportRepository.save(report);
    }
    async getAllReports(query) {
        return this.reportRepository.find({
            relations: ['createdBy'],
            where: query
        });
    }
    async getReportById(id) {
        return this.reportRepository.findOne({
            where: { id },
            relations: ['createdBy', 'generations']
        });
    }
    async updateReport(id, updateReportDto) {
        await this.reportRepository.update(id, {
            ...updateReportDto,
            updatedAt: new Date()
        });
        return this.getReportById(id);
    }
    async deleteReport(id) {
        return this.reportRepository.delete(id);
    }
    async generateReport(id, parameters) {
        const report = await this.getReportById(id);
        if (!report) {
            throw new Error('Report not found');
        }
        const execution = this.executionRepository.create({
            report,
            status: 'running',
            startedAt: new Date()
        });
        const savedExecution = await this.executionRepository.save(execution);
        setTimeout(async () => {
            await this.executionRepository.update(savedExecution.id, {
                status: 'completed',
                completedAt: new Date(),
                filePath: `/reports/${savedExecution.id}.pdf`
            });
        }, 5000);
        return savedExecution;
    }
    async createDashboard(createDashboardDto) {
        const dashboard = this.dashboardRepository.create({
            name: createDashboardDto.name,
            description: createDashboardDto.description,
            type: 'custom',
            layout: createDashboardDto.layout || {},
            createdById: createDashboardDto.createdBy,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return this.dashboardRepository.save(dashboard);
    }
    async getAllDashboards(query) {
        return this.dashboardRepository.find({
            relations: ['createdBy', 'widgets'],
            where: query
        });
    }
    async getDashboardById(id) {
        return this.dashboardRepository.findOne({
            where: { id },
            relations: ['createdBy', 'widgets']
        });
    }
    async updateDashboard(id, updateData) {
        await this.dashboardRepository.update(id, {
            ...updateData,
            updatedAt: new Date()
        });
        return this.getDashboardById(id);
    }
    async createKPI(createKPIDto) {
        const kpi = this.kpiRepository.create({
            metricType: createKPIDto.category,
            metricName: createKPIDto.name,
            period: createKPIDto.calculationFrequency || 'monthly',
            value: 0,
            target: createKPIDto.targetValue,
            calculatedAt: new Date(),
            periodStart: new Date(),
            periodEnd: new Date(),
            createdAt: new Date()
        });
        return this.kpiRepository.save(kpi);
    }
    async getAllKPIs(query) {
        return this.kpiRepository.find({
            relations: ['createdBy'],
            where: query
        });
    }
    async calculateKPI(id) {
        const kpi = await this.kpiRepository.findOne({ where: { id } });
        if (!kpi) {
            throw new Error('KPI not found');
        }
        const calculatedValue = Math.random() * 100;
        await this.kpiRepository.update(id, {
            value: calculatedValue,
            calculatedAt: new Date()
        });
        return { id, value: calculatedValue, calculatedAt: new Date() };
    }
    async getAnalyticsSummary(query) {
        return {
            totalReports: await this.reportRepository.count(),
            totalDashboards: await this.dashboardRepository.count(),
            totalKPIs: await this.kpiRepository.count(),
            recentActivity: await this.eventRepository.find({
                take: 10,
                order: { createdAt: 'DESC' }
            })
        };
    }
    async getTrends(query) {
        return this.eventRepository.find({
            where: query,
            order: { createdAt: 'DESC' }
        });
    }
    async trackEvent(eventData) {
        const event = this.eventRepository.create({
            ...eventData,
            createdAt: new Date()
        });
        return this.eventRepository.save(event);
    }
    async getEvents(query) {
        return this.eventRepository.find({
            where: query,
            order: { createdAt: 'DESC' }
        });
    }
};
exports.ReportsAnalyticsService = ReportsAnalyticsService;
exports.ReportsAnalyticsService = ReportsAnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.Report)),
    __param(1, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.ReportExecution)),
    __param(2, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.ReportShare)),
    __param(3, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.Dashboard)),
    __param(4, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.DashboardShare)),
    __param(5, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.KPIMetric)),
    __param(6, (0, typeorm_1.InjectRepository)(reports_analytics_entity_1.AnalyticsEvent)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReportsAnalyticsService);
//# sourceMappingURL=reports-analytics.service.js.map