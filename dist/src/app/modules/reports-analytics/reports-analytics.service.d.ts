import { Repository } from 'typeorm';
import { Report, ReportExecution, ReportShare, Dashboard, DashboardShare, AnalyticsEvent, KPIMetric } from '../../../shared/entities/reports-analytics.entity';
import { CreateReportDto, UpdateReportDto, CreateDashboardDto, CreateKPIDto } from './dto/reports-analytics.dto';
export declare class ReportsAnalyticsService {
    private reportRepository;
    private executionRepository;
    private shareRepository;
    private dashboardRepository;
    private dashboardShareRepository;
    private kpiRepository;
    private eventRepository;
    constructor(reportRepository: Repository<Report>, executionRepository: Repository<ReportExecution>, shareRepository: Repository<ReportShare>, dashboardRepository: Repository<Dashboard>, dashboardShareRepository: Repository<DashboardShare>, kpiRepository: Repository<KPIMetric>, eventRepository: Repository<AnalyticsEvent>);
    createReport(createReportDto: CreateReportDto): Promise<Report>;
    getAllReports(query: any): Promise<Report[]>;
    getReportById(id: string): Promise<Report>;
    updateReport(id: string, updateReportDto: UpdateReportDto): Promise<Report>;
    deleteReport(id: string): Promise<import("typeorm").DeleteResult>;
    generateReport(id: string, parameters: any): Promise<ReportExecution>;
    createDashboard(createDashboardDto: CreateDashboardDto): Promise<Dashboard>;
    getAllDashboards(query: any): Promise<Dashboard[]>;
    getDashboardById(id: string): Promise<Dashboard>;
    updateDashboard(id: string, updateData: any): Promise<Dashboard>;
    createKPI(createKPIDto: CreateKPIDto): Promise<KPIMetric>;
    getAllKPIs(query: any): Promise<KPIMetric[]>;
    calculateKPI(id: string): Promise<{
        id: string;
        value: number;
        calculatedAt: Date;
    }>;
    getAnalyticsSummary(query: any): Promise<{
        totalReports: number;
        totalDashboards: number;
        totalKPIs: number;
        recentActivity: AnalyticsEvent[];
    }>;
    getTrends(query: any): Promise<AnalyticsEvent[]>;
    trackEvent(eventData: any): Promise<AnalyticsEvent[]>;
    getEvents(query: any): Promise<AnalyticsEvent[]>;
}
