import { ReportsAnalyticsService } from './reports-analytics.service';
export declare class ReportsAnalyticsController {
    private readonly reportsService;
    constructor(reportsService: ReportsAnalyticsService);
    getAllReports(query: any): Promise<import("../../shared/entities/reports-analytics.entity").Report[]>;
    getReportById(id: string): Promise<import("../../shared/entities/reports-analytics.entity").Report>;
    createReport(createData: any): Promise<import("../../shared/entities/reports-analytics.entity").Report[]>;
    updateReport(id: string, updateData: any): Promise<import("../../shared/entities/reports-analytics.entity").Report>;
    deleteReport(id: string): Promise<import("typeorm").DeleteResult>;
}
