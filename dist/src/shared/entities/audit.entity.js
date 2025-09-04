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
exports.ApiRefreshToken = exports.ApiToken = exports.ApiLog = exports.AuditDetails = exports.AuditMaster = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const patient_entity_1 = require("./patient.entity");
let AuditMaster = class AuditMaster {
};
exports.AuditMaster = AuditMaster;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AuditMaster.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pid', type: 'bigint', nullable: false }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AuditMaster.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'bigint', nullable: false }),
    __metadata("design:type", Number)
], AuditMaster.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'approval_status', type: 'tinyint', nullable: false, comment: '1-Pending,2-Approved,3-Denied,4-Direct update,5-Cancelled' }),
    __metadata("design:type", Number)
], AuditMaster.prototype, "approvalStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AuditMaster.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_time' }),
    __metadata("design:type", Date)
], AuditMaster.prototype, "createdTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'modified_time', type: 'datetime', nullable: false }),
    __metadata("design:type", Date)
], AuditMaster.prototype, "modifiedTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ip_address', type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], AuditMaster.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', nullable: false, comment: '1-new patient,2-existing patient,3-document change,4-patient upload,5-random key,10-appointment' }),
    __metadata("design:type", Number)
], AuditMaster.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_qrda_document', type: 'boolean', nullable: true, default: false }),
    __metadata("design:type", Boolean)
], AuditMaster.prototype, "isQrdaDocument", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_unstructured_document', type: 'boolean', nullable: true, default: false }),
    __metadata("design:type", Boolean)
], AuditMaster.prototype, "isUnstructuredDocument", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], AuditMaster.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'pid' }),
    __metadata("design:type", patient_entity_1.Patient)
], AuditMaster.prototype, "patient", void 0);
exports.AuditMaster = AuditMaster = __decorate([
    (0, typeorm_1.Entity)('audit_master'),
    (0, typeorm_1.Index)(['patientId', 'userId']),
    (0, typeorm_1.Index)(['createdTime'])
], AuditMaster);
let AuditDetails = class AuditDetails {
};
exports.AuditDetails = AuditDetails;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AuditDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'table_name', type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], AuditDetails.prototype, "tableName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'field_name', type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], AuditDetails.prototype, "fieldName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'field_value', type: 'longtext', nullable: true }),
    __metadata("design:type", String)
], AuditDetails.prototype, "fieldValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'audit_master_id', type: 'bigint', nullable: false }),
    __metadata("design:type", Number)
], AuditDetails.prototype, "auditMasterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'entry_identification', type: 'varchar', length: 255, nullable: false, default: '1' }),
    __metadata("design:type", String)
], AuditDetails.prototype, "entryIdentification", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => AuditMaster),
    (0, typeorm_1.JoinColumn)({ name: 'audit_master_id' }),
    __metadata("design:type", AuditMaster)
], AuditDetails.prototype, "auditMaster", void 0);
exports.AuditDetails = AuditDetails = __decorate([
    (0, typeorm_1.Entity)('audit_details'),
    (0, typeorm_1.Index)(['auditMasterId'])
], AuditDetails);
let ApiLog = class ApiLog {
};
exports.ApiLog = ApiLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ApiLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'log_id', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], ApiLog.prototype, "logId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'bigint', nullable: false }),
    __metadata("design:type", Number)
], ApiLog.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_id', type: 'bigint', nullable: false }),
    __metadata("design:type", Number)
], ApiLog.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ip_address', type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], ApiLog.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false }),
    __metadata("design:type", String)
], ApiLog.prototype, "method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], ApiLog.prototype, "request", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'request_url', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ApiLog.prototype, "requestUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'request_body', type: 'longtext', nullable: true }),
    __metadata("design:type", String)
], ApiLog.prototype, "requestBody", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext', nullable: true }),
    __metadata("design:type", String)
], ApiLog.prototype, "response", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_time' }),
    __metadata("design:type", Date)
], ApiLog.prototype, "createdTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], ApiLog.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_entity_1.Patient)
], ApiLog.prototype, "patient", void 0);
exports.ApiLog = ApiLog = __decorate([
    (0, typeorm_1.Entity)('api_log'),
    (0, typeorm_1.Index)(['userId', 'patientId']),
    (0, typeorm_1.Index)(['createdTime'])
], ApiLog);
let ApiToken = class ApiToken {
};
exports.ApiToken = ApiToken;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ApiToken.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'varchar', length: 40, nullable: true }),
    __metadata("design:type", String)
], ApiToken.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128, nullable: true, unique: true }),
    __metadata("design:type", String)
], ApiToken.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ApiToken.prototype, "expiry", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_id', type: 'varchar', length: 80, nullable: true }),
    __metadata("design:type", String)
], ApiToken.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, comment: 'json encoded scopes' }),
    __metadata("design:type", String)
], ApiToken.prototype, "scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', nullable: false, default: 0, comment: '1=revoked,0=not revoked' }),
    __metadata("design:type", Number)
], ApiToken.prototype, "revoked", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, comment: 'context values that change/govern how access token are used' }),
    __metadata("design:type", String)
], ApiToken.prototype, "context", void 0);
exports.ApiToken = ApiToken = __decorate([
    (0, typeorm_1.Entity)('api_token')
], ApiToken);
let ApiRefreshToken = class ApiRefreshToken {
};
exports.ApiRefreshToken = ApiRefreshToken;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ApiRefreshToken.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'varchar', length: 40, nullable: true }),
    __metadata("design:type", String)
], ApiRefreshToken.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_id', type: 'varchar', length: 80, nullable: true }),
    __metadata("design:type", String)
], ApiRefreshToken.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128, nullable: false, unique: true }),
    __metadata("design:type", String)
], ApiRefreshToken.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ApiRefreshToken.prototype, "expiry", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', nullable: false, default: 0, comment: '1=revoked,0=not revoked' }),
    __metadata("design:type", Number)
], ApiRefreshToken.prototype, "revoked", void 0);
exports.ApiRefreshToken = ApiRefreshToken = __decorate([
    (0, typeorm_1.Entity)('api_refresh_token'),
    (0, typeorm_1.Index)(['clientId', 'userId'])
], ApiRefreshToken);
//# sourceMappingURL=audit.entity.js.map