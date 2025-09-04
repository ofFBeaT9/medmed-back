import { Repository } from 'typeorm';
import { Report, ReportExecution, Dashboard, AnalyticsEvent, KPIMetric } from '../../shared/entities/reports-analytics.entity';
export declare class ReportsAnalyticsService {
    private reportRepository;
    private executionRepository;
    private dashboardRepository;
    private kpiRepository;
    private eventRepository;
    constructor(reportRepository: Repository<Report>, executionRepository: Repository<ReportExecution>, dashboardRepository: Repository<Dashboard>, kpiRepository: Repository<KPIMetric>, eventRepository: Repository<AnalyticsEvent>);
    createReport(createData: any): Promise<Report[]>;
    getAllReports(query: any): Promise<Report[]>;
    getReportById(id: string): Promise<Report>;
    updateReport(id: string, updateData: any): Promise<Report>;
    deleteReport(id: string): Promise<import("typeorm").DeleteResult>;
}
