import { HttpService } from '@nestjs/axios';
export interface LabOrder {
    orderId: string;
    patientId: string;
    testCode: string;
    collectionDateTime: string;
}
export interface LabResult {
    orderId: string;
    resultId: string;
    testCode: string;
    value: string;
    units: string;
    referenceRange: string;
    observationDateTime: string;
    status: 'final' | 'preliminary' | 'corrected';
}
export declare class LabIntegrationService {
    private readonly httpService;
    constructor(httpService: HttpService);
    private labCorpApiUrl;
    private labCorpApiKey;
    submitLabCorpOrder(order: LabOrder): Promise<any>;
    getLabCorpResult(orderId: string): Promise<LabResult>;
    private questApiUrl;
    private questApiKey;
    submitQuestOrder(order: LabOrder): Promise<any>;
    getQuestResult(orderId: string): Promise<LabResult>;
}
