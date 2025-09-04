import { ReportsAnalyticsService } from './reports-analytics.service';
import { CreateReportDto, UpdateReportDto, CreateDashboardDto, CreateKPIDto } from './dto/reports-analytics.dto';
export declare class ReportsAnalyticsController {
    private readonly reportsService;
    constructor(reportsService: ReportsAnalyticsService);
    createReport(createReportDto: CreateReportDto): Promise<import("../../../shared/entities/reports-analytics.entity").Report>;
    getAllReports(query: any): Promise<import("../../../shared/entities/reports-analytics.entity").Report[]>;
    getReportById(id: string): Promise<import("../../../shared/entities/reports-analytics.entity").Report>;
    updateReport(id: string, updateReportDto: UpdateReportDto): Promise<import("../../../shared/entities/reports-analytics.entity").Report>;
    deleteReport(id: string): Promise<import("typeorm").DeleteResult>;
    generateReport(id: string, parameters: any): Promise<import("../../../shared/entities/reports-analytics.entity").ReportExecution>;
    createDashboard(createDashboardDto: CreateDashboardDto): Promise<import("../../../shared/entities/reports-analytics.entity").Dashboard>;
    getAllDashboards(query: any): Promise<import("../../../shared/entities/reports-analytics.entity").Dashboard[]>;
    getDashboardById(id: string): Promise<import("../../../shared/entities/reports-analytics.entity").Dashboard>;
    updateDashboard(id: string, updateData: any): Promise<import("../../../shared/entities/reports-analytics.entity").Dashboard>;
    createKPI(createKPIDto: CreateKPIDto): Promise<import("../../../shared/entities/reports-analytics.entity").KPIMetric>;
    getAllKPIs(query: any): Promise<import("../../../shared/entities/reports-analytics.entity").KPIMetric[]>;
    calculateKPI(id: string): Promise<{
        id: string;
        value: number;
        calculatedAt: Date;
    }>;
    getAnalyticsSummary(query: any): Promise<{
        totalReports: number;
        totalDashboards: number;
        totalKPIs: number;
        recentActivity: import("../../../shared/entities/reports-analytics.entity").AnalyticsEvent[];
    }>;
    getTrends(query: any): Promise<import("../../../shared/entities/reports-analytics.entity").AnalyticsEvent[]>;
    trackEvent(eventData: any): Promise<import("../../../shared/entities/reports-analytics.entity").AnalyticsEvent[]>;
    getEvents(query: any): Promise<import("../../../shared/entities/reports-analytics.entity").AnalyticsEvent[]>;
}
