import { User } from './user.entity';
import { Patient } from './patient.entity';
export declare class Report {
    id: string;
    name: string;
    description: string;
    type: string;
    category: string;
    parameters: any;
    filters: any;
    status: string;
    filePath: string;
    fileSize: number;
    format: string;
    scheduleCron: string;
    isRecurring: boolean;
    lastRunAt: Date;
    nextRunAt: Date;
    runCount: number;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
    executions: ReportExecution[];
    shares: ReportShare[];
}
export declare class ReportExecution {
    id: string;
    reportId: string;
    status: string;
    startedAt: Date;
    completedAt: Date;
    filePath: string;
    fileSize: number;
    recordCount: number;
    errorMessage: string;
    executionLog: any;
    executedById: string;
    createdAt: Date;
    report: Report;
    executedBy: User;
}
export declare class ReportShare {
    id: string;
    reportId: string;
    sharedWithUserId: string;
    sharedById: string;
    permission: string;
    isActive: boolean;
    createdAt: Date;
    report: Report;
    sharedWithUser: User;
    sharedBy: User;
}
export declare class Dashboard {
    id: string;
    name: string;
    description: string;
    type: string;
    layout: any;
    widgets: any;
    filters: any;
    refreshInterval: number;
    isActive: boolean;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
    shares: DashboardShare[];
}
export declare class DashboardShare {
    id: string;
    dashboardId: string;
    sharedWithUserId: string;
    sharedById: string;
    permission: string;
    isActive: boolean;
    createdAt: Date;
    dashboard: Dashboard;
    sharedWithUser: User;
    sharedBy: User;
}
export declare class AnalyticsEvent {
    id: string;
    eventType: string;
    eventCategory: string;
    eventAction: string;
    eventLabel: string;
    userId: string;
    patientId: string;
    sessionId: string;
    properties: any;
    ipAddress: string;
    userAgent: string;
    createdAt: Date;
    user: User;
    patient: Patient;
}
export declare class KPIMetric {
    id: string;
    metricType: string;
    metricName: string;
    period: string;
    value: number;
    target: number;
    previousValue: number;
    breakdown: any;
    calculatedAt: Date;
    periodStart: Date;
    periodEnd: Date;
    createdAt: Date;
}
