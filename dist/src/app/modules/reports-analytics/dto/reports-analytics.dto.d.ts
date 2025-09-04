export declare class CreateReportDto {
    name: string;
    description?: string;
    category: string;
    queryDefinition: string;
    parameters?: Record<string, any>;
    outputFormat?: string;
    createdBy: string;
    schedule?: string;
}
export declare class UpdateReportDto {
    name?: string;
    description?: string;
    category?: string;
    queryDefinition?: string;
    parameters?: Record<string, any>;
    outputFormat?: string;
    schedule?: string;
}
export declare class CreateDashboardDto {
    name: string;
    description?: string;
    layout?: Record<string, any>;
    createdBy: string;
    accessLevel?: string;
}
export declare class CreateDashboardWidgetDto {
    name: string;
    type: string;
    configuration: Record<string, any>;
    position?: Record<string, any>;
    dashboardId: string;
}
export declare class CreateKPIDto {
    name: string;
    description?: string;
    category: string;
    calculationMethod: string;
    unit?: string;
    targetValue?: number;
    createdBy: string;
    calculationFrequency?: string;
}
export declare class CreateVisualizationDto {
    name: string;
    type: string;
    configuration: Record<string, any>;
    dataSource: string;
    createdBy: string;
}
