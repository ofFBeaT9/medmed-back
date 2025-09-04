import { User } from './user.entity';
export declare class IntegrationEndpoint {
    id: string;
    name: string;
    description: string;
    type: string;
    direction: string;
    protocol: string;
    endpoint: string;
    authentication: any;
    configuration: any;
    mapping: any;
    isActive: boolean;
    isTestMode: boolean;
    lastSuccessAt: Date;
    lastErrorAt: Date;
    lastError: string;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
    logs: IntegrationLog[];
}
export declare class IntegrationLog {
    id: string;
    endpointId: string;
    messageId: string;
    direction: string;
    messageType: string;
    status: string;
    requestData: string;
    responseData: string;
    errorMessage: string;
    retryCount: number;
    processedAt: Date;
    createdAt: Date;
    endpoint: IntegrationEndpoint;
}
export declare class HL7Message {
    id: string;
    messageControlId: string;
    messageType: string;
    triggerEvent: string;
    sendingApplication: string;
    sendingFacility: string;
    receivingApplication: string;
    receivingFacility: string;
    status: string;
    rawMessage: string;
    parsedData: any;
    acknowledgment: string;
    errorMessage: string;
    processedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare class FHIRResource {
    id: string;
    resourceType: string;
    resourceId: string;
    resource: any;
    version: string;
    status: string;
    lastSyncAt: Date;
    externalId: string;
    externalSystem: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class APIKey {
    id: string;
    name: string;
    description: string;
    keyHash: string;
    permissions: any;
    rateLimits: any;
    isActive: boolean;
    expiresAt: Date;
    lastUsedAt: Date;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
    usageLogs: APIUsageLog[];
}
export declare class APIUsageLog {
    id: string;
    apiKeyId: string;
    endpoint: string;
    method: string;
    statusCode: number;
    responseTime: number;
    ipAddress: string;
    userAgent: string;
    createdAt: Date;
    apiKey: APIKey;
}
export declare class WebhookEndpoint {
    id: string;
    name: string;
    description: string;
    url: string;
    events: any;
    secret: string;
    isActive: boolean;
    lastSuccessAt: Date;
    lastFailureAt: Date;
    failureCount: number;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
    deliveries: WebhookDelivery[];
}
export declare class WebhookDelivery {
    id: string;
    endpointId: string;
    eventType: string;
    payload: any;
    status: string;
    responseStatus: number;
    responseBody: string;
    errorMessage: string;
    attempts: number;
    deliveredAt: Date;
    nextRetryAt: Date;
    createdAt: Date;
    endpoint: WebhookEndpoint;
}
export declare class DataSyncJob {
    id: string;
    name: string;
    sourceSystem: string;
    targetSystem: string;
    syncType: string;
    configuration: any;
    status: string;
    scheduleCron: string;
    lastRunAt: Date;
    nextRunAt: Date;
    recordsProcessed: number;
    recordsSuccess: number;
    recordsErrors: number;
    errorLog: string;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
}
