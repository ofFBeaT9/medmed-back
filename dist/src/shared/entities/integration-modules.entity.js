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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSyncJob = exports.WebhookDelivery = exports.WebhookEndpoint = exports.APIUsageLog = exports.APIKey = exports.FHIRResource = exports.HL7Message = exports.IntegrationLog = exports.IntegrationEndpoint = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let IntegrationEndpoint = class IntegrationEndpoint {
};
exports.IntegrationEndpoint = IntegrationEndpoint;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IntegrationEndpoint.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IntegrationEndpoint.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], IntegrationEndpoint.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IntegrationEndpoint.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IntegrationEndpoint.prototype, "direction", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IntegrationEndpoint.prototype, "protocol", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IntegrationEndpoint.prototype, "endpoint", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], IntegrationEndpoint.prototype, "authentication", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], IntegrationEndpoint.prototype, "configuration", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], IntegrationEndpoint.prototype, "mapping", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], IntegrationEndpoint.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], IntegrationEndpoint.prototype, "isTestMode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], IntegrationEndpoint.prototype, "lastSuccessAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], IntegrationEndpoint.prototype, "lastErrorAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], IntegrationEndpoint.prototype, "lastError", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], IntegrationEndpoint.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IntegrationEndpoint.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], IntegrationEndpoint.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], IntegrationEndpoint.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => IntegrationLog, (log) => log.endpoint),
    __metadata("design:type", Array)
], IntegrationEndpoint.prototype, "logs", void 0);
exports.IntegrationEndpoint = IntegrationEndpoint = __decorate([
    (0, typeorm_1.Entity)('integration_endpoints'),
    (0, typeorm_1.Index)(['type', 'isActive'])
], IntegrationEndpoint);
let IntegrationLog = class IntegrationLog {
};
exports.IntegrationLog = IntegrationLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IntegrationLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], IntegrationLog.prototype, "endpointId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IntegrationLog.prototype, "messageId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IntegrationLog.prototype, "direction", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IntegrationLog.prototype, "messageType", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'processing' }),
    __metadata("design:type", String)
], IntegrationLog.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], IntegrationLog.prototype, "requestData", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], IntegrationLog.prototype, "responseData", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], IntegrationLog.prototype, "errorMessage", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], IntegrationLog.prototype, "retryCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], IntegrationLog.prototype, "processedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IntegrationLog.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => IntegrationEndpoint),
    (0, typeorm_1.JoinColumn)({ name: 'endpointId' }),
    __metadata("design:type", IntegrationEndpoint)
], IntegrationLog.prototype, "endpoint", void 0);
exports.IntegrationLog = IntegrationLog = __decorate([
    (0, typeorm_1.Entity)('integration_logs'),
    (0, typeorm_1.Index)(['endpointId', 'createdAt']),
    (0, typeorm_1.Index)(['status', 'createdAt'])
], IntegrationLog);
let HL7Message = class HL7Message {
};
exports.HL7Message = HL7Message;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HL7Message.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HL7Message.prototype, "messageControlId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HL7Message.prototype, "messageType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HL7Message.prototype, "triggerEvent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HL7Message.prototype, "sendingApplication", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HL7Message.prototype, "sendingFacility", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HL7Message.prototype, "receivingApplication", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HL7Message.prototype, "receivingFacility", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'received' }),
    __metadata("design:type", String)
], HL7Message.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], HL7Message.prototype, "rawMessage", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], HL7Message.prototype, "parsedData", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], HL7Message.prototype, "acknowledgment", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], HL7Message.prototype, "errorMessage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], HL7Message.prototype, "processedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HL7Message.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HL7Message.prototype, "updatedAt", void 0);
exports.HL7Message = HL7Message = __decorate([
    (0, typeorm_1.Entity)('hl7_messages'),
    (0, typeorm_1.Index)(['messageType', 'status']),
    (0, typeorm_1.Index)(['createdAt'])
], HL7Message);
let FHIRResource = class FHIRResource {
};
exports.FHIRResource = FHIRResource;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FHIRResource.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FHIRResource.prototype, "resourceType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FHIRResource.prototype, "resourceId", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], FHIRResource.prototype, "resource", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FHIRResource.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'active' }),
    __metadata("design:type", String)
], FHIRResource.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], FHIRResource.prototype, "lastSyncAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FHIRResource.prototype, "externalId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FHIRResource.prototype, "externalSystem", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FHIRResource.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FHIRResource.prototype, "updatedAt", void 0);
exports.FHIRResource = FHIRResource = __decorate([
    (0, typeorm_1.Entity)('fhir_resources'),
    (0, typeorm_1.Index)(['resourceType', 'resourceId']),
    (0, typeorm_1.Index)(['status', 'lastSyncAt'])
], FHIRResource);
let APIKey = class APIKey {
};
exports.APIKey = APIKey;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], APIKey.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], APIKey.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], APIKey.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], APIKey.prototype, "keyHash", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], APIKey.prototype, "permissions", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], APIKey.prototype, "rateLimits", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], APIKey.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], APIKey.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], APIKey.prototype, "lastUsedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], APIKey.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], APIKey.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], APIKey.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], APIKey.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => APIUsageLog, (log) => log.apiKey),
    __metadata("design:type", Array)
], APIKey.prototype, "usageLogs", void 0);
exports.APIKey = APIKey = __decorate([
    (0, typeorm_1.Entity)('api_keys'),
    (0, typeorm_1.Index)(['keyHash'])
], APIKey);
let APIUsageLog = class APIUsageLog {
};
exports.APIUsageLog = APIUsageLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], APIUsageLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], APIUsageLog.prototype, "apiKeyId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], APIUsageLog.prototype, "endpoint", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], APIUsageLog.prototype, "method", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], APIUsageLog.prototype, "statusCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], APIUsageLog.prototype, "responseTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], APIUsageLog.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], APIUsageLog.prototype, "userAgent", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], APIUsageLog.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => APIKey),
    (0, typeorm_1.JoinColumn)({ name: 'apiKeyId' }),
    __metadata("design:type", APIKey)
], APIUsageLog.prototype, "apiKey", void 0);
exports.APIUsageLog = APIUsageLog = __decorate([
    (0, typeorm_1.Entity)('api_usage_logs'),
    (0, typeorm_1.Index)(['apiKeyId', 'createdAt']),
    (0, typeorm_1.Index)(['endpoint', 'createdAt'])
], APIUsageLog);
let WebhookEndpoint = class WebhookEndpoint {
};
exports.WebhookEndpoint = WebhookEndpoint;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WebhookEndpoint.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WebhookEndpoint.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WebhookEndpoint.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WebhookEndpoint.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], WebhookEndpoint.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WebhookEndpoint.prototype, "secret", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], WebhookEndpoint.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], WebhookEndpoint.prototype, "lastSuccessAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], WebhookEndpoint.prototype, "lastFailureAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], WebhookEndpoint.prototype, "failureCount", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], WebhookEndpoint.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WebhookEndpoint.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], WebhookEndpoint.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], WebhookEndpoint.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WebhookDelivery, (delivery) => delivery.endpoint),
    __metadata("design:type", Array)
], WebhookEndpoint.prototype, "deliveries", void 0);
exports.WebhookEndpoint = WebhookEndpoint = __decorate([
    (0, typeorm_1.Entity)('webhook_endpoints'),
    (0, typeorm_1.Index)(['isActive'])
], WebhookEndpoint);
let WebhookDelivery = class WebhookDelivery {
};
exports.WebhookDelivery = WebhookDelivery;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WebhookDelivery.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], WebhookDelivery.prototype, "endpointId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WebhookDelivery.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], WebhookDelivery.prototype, "payload", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pending' }),
    __metadata("design:type", String)
], WebhookDelivery.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], WebhookDelivery.prototype, "responseStatus", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], WebhookDelivery.prototype, "responseBody", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], WebhookDelivery.prototype, "errorMessage", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], WebhookDelivery.prototype, "attempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], WebhookDelivery.prototype, "deliveredAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], WebhookDelivery.prototype, "nextRetryAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WebhookDelivery.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => WebhookEndpoint),
    (0, typeorm_1.JoinColumn)({ name: 'endpointId' }),
    __metadata("design:type", WebhookEndpoint)
], WebhookDelivery.prototype, "endpoint", void 0);
exports.WebhookDelivery = WebhookDelivery = __decorate([
    (0, typeorm_1.Entity)('webhook_deliveries'),
    (0, typeorm_1.Index)(['endpointId', 'createdAt']),
    (0, typeorm_1.Index)(['status', 'createdAt'])
], WebhookDelivery);
let DataSyncJob = class DataSyncJob {
};
exports.DataSyncJob = DataSyncJob;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DataSyncJob.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DataSyncJob.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DataSyncJob.prototype, "sourceSystem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DataSyncJob.prototype, "targetSystem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DataSyncJob.prototype, "syncType", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], DataSyncJob.prototype, "configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'scheduled' }),
    __metadata("design:type", String)
], DataSyncJob.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DataSyncJob.prototype, "scheduleCron", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], DataSyncJob.prototype, "lastRunAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], DataSyncJob.prototype, "nextRunAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], DataSyncJob.prototype, "recordsProcessed", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], DataSyncJob.prototype, "recordsSuccess", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], DataSyncJob.prototype, "recordsErrors", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], DataSyncJob.prototype, "errorLog", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], DataSyncJob.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DataSyncJob.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DataSyncJob.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], DataSyncJob.prototype, "createdBy", void 0);
exports.DataSyncJob = DataSyncJob = __decorate([
    (0, typeorm_1.Entity)('data_sync_jobs'),
    (0, typeorm_1.Index)(['sourceSystem', 'status'])
], DataSyncJob);
//# sourceMappingURL=integration-modules.entity.js.map