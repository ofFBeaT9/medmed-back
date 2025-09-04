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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientEducationResource = exports.PatientPortalAccessLog = exports.PatientHealthSummary = exports.PatientPortalDocumentAccess = exports.PatientPortalAppointment = exports.PatientPortalMessage = exports.PatientPortalSession = exports.PatientPortalAccount = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let PatientPortalAccount = class PatientPortalAccount {
};
exports.PatientPortalAccount = PatientPortalAccount;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientPortalAccount.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientPortalAccount.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "password_hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalAccount.prototype, "email_verified_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "email_verification_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalAccount.prototype, "password_reset_token_expires", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "password_reset_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientPortalAccount.prototype, "last_login", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "last_login_ip", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PatientPortalAccount.prototype, "failed_login_attempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalAccount.prototype, "account_locked_until", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], PatientPortalAccount.prototype, "two_factor_enabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "two_factor_secret", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "two_factor_backup_codes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "preferences", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "preferred_language", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "timezone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "notification_preferences", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], PatientPortalAccount.prototype, "terms_accepted", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalAccount.prototype, "terms_accepted_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "terms_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalAccount.prototype, "privacy_policy_accepted_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccount.prototype, "privacy_policy_version", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientPortalAccount.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientPortalAccount.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], PatientPortalAccount.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PatientPortalSession, session => session.account),
    __metadata("design:type", Array)
], PatientPortalAccount.prototype, "sessions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PatientPortalMessage, message => message.patient_account),
    __metadata("design:type", Array)
], PatientPortalAccount.prototype, "messages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PatientPortalAccessLog, log => log.account),
    __metadata("design:type", Array)
], PatientPortalAccount.prototype, "access_logs", void 0);
exports.PatientPortalAccount = PatientPortalAccount = __decorate([
    (0, typeorm_1.Entity)('patient_portal_accounts'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['username']),
    (0, typeorm_1.Index)(['email']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['last_login'])
], PatientPortalAccount);
let PatientPortalSession = class PatientPortalSession {
};
exports.PatientPortalSession = PatientPortalSession;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientPortalSession.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientPortalSession.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientPortalSession.prototype, "account_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalSession.prototype, "session_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalSession.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientPortalSession.prototype, "expires_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalSession.prototype, "ip_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], PatientPortalSession.prototype, "user_agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalSession.prototype, "device_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalSession.prototype, "browser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalSession.prototype, "operating_system", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalSession.prototype, "last_activity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalSession.prototype, "session_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], PatientPortalSession.prototype, "is_mobile_app", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalSession.prototype, "mobile_app_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalSession.prototype, "geolocation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientPortalSession.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientPortalSession.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientPortalAccount, account => account.sessions),
    (0, typeorm_1.JoinColumn)({ name: 'account_id' }),
    __metadata("design:type", PatientPortalAccount)
], PatientPortalSession.prototype, "account", void 0);
exports.PatientPortalSession = PatientPortalSession = __decorate([
    (0, typeorm_1.Entity)('patient_portal_sessions'),
    (0, typeorm_1.Index)(['account_id']),
    (0, typeorm_1.Index)(['session_token']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['created_at']),
    (0, typeorm_1.Index)(['expires_at'])
], PatientPortalSession);
let PatientPortalMessage = class PatientPortalMessage {
};
exports.PatientPortalMessage = PatientPortalMessage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientPortalMessage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientPortalMessage.prototype, "patient_account_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientPortalMessage.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "thread_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "message_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "message_body", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "sender_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PatientPortalMessage.prototype, "sender_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "sender_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalMessage.prototype, "sent_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalMessage.prototype, "delivered_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalMessage.prototype, "read_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PatientPortalMessage.prototype, "parent_message_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "attachments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], PatientPortalMessage.prototype, "requires_response", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalMessage.prototype, "response_due_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "auto_reply_rules", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], PatientPortalMessage.prototype, "is_system_generated", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "system_trigger", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalMessage.prototype, "message_metadata", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientPortalMessage.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientPortalMessage.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientPortalAccount, account => account.messages),
    (0, typeorm_1.JoinColumn)({ name: 'patient_account_id' }),
    __metadata("design:type", PatientPortalAccount)
], PatientPortalMessage.prototype, "patient_account", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], PatientPortalMessage.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientPortalMessage),
    (0, typeorm_1.JoinColumn)({ name: 'parent_message_id' }),
    __metadata("design:type", PatientPortalMessage)
], PatientPortalMessage.prototype, "parent_message", void 0);
exports.PatientPortalMessage = PatientPortalMessage = __decorate([
    (0, typeorm_1.Entity)('patient_portal_messages'),
    (0, typeorm_1.Index)(['patient_account_id']),
    (0, typeorm_1.Index)(['provider_id']),
    (0, typeorm_1.Index)(['thread_id']),
    (0, typeorm_1.Index)(['message_type']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['created_at'])
], PatientPortalMessage);
let PatientPortalAppointment = class PatientPortalAppointment {
};
exports.PatientPortalAppointment = PatientPortalAppointment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientPortalAppointment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientPortalAppointment.prototype, "patient_account_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientPortalAppointment.prototype, "appointment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "request_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientPortalAppointment.prototype, "appointment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PatientPortalAppointment.prototype, "duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "appointment_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PatientPortalAppointment.prototype, "requested_provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "requested_provider_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PatientPortalAppointment.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "reason_for_visit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "patient_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "preferred_times", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "visit_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], PatientPortalAppointment.prototype, "is_urgent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalAppointment.prototype, "requested_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalAppointment.prototype, "confirmed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PatientPortalAppointment.prototype, "confirmed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "confirmation_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalAppointment.prototype, "reminder_sent_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "reminder_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "cancellation_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalAppointment.prototype, "cancelled_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PatientPortalAppointment.prototype, "cancelled_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalAppointment.prototype, "rescheduling_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientPortalAppointment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientPortalAppointment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientPortalAccount),
    (0, typeorm_1.JoinColumn)({ name: 'patient_account_id' }),
    __metadata("design:type", PatientPortalAccount)
], PatientPortalAppointment.prototype, "patient_account", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'requested_provider_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], PatientPortalAppointment.prototype, "requested_provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'confirmed_by' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], PatientPortalAppointment.prototype, "confirmer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'cancelled_by' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], PatientPortalAppointment.prototype, "canceller", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], PatientPortalAppointment.prototype, "facility", void 0);
exports.PatientPortalAppointment = PatientPortalAppointment = __decorate([
    (0, typeorm_1.Entity)('patient_portal_appointments'),
    (0, typeorm_1.Index)(['patient_account_id']),
    (0, typeorm_1.Index)(['appointment_id']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['appointment_date']),
    (0, typeorm_1.Index)(['request_type'])
], PatientPortalAppointment);
let PatientPortalDocumentAccess = class PatientPortalDocumentAccess {
};
exports.PatientPortalDocumentAccess = PatientPortalDocumentAccess;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientPortalDocumentAccess.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientPortalDocumentAccess.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientPortalDocumentAccess.prototype, "patient_account_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientPortalDocumentAccess.prototype, "document_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalDocumentAccess.prototype, "document_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalDocumentAccess.prototype, "document_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalDocumentAccess.prototype, "document_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalDocumentAccess.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientPortalDocumentAccess.prototype, "access_granted_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalDocumentAccess.prototype, "access_expires_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PatientPortalDocumentAccess.prototype, "granted_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalDocumentAccess.prototype, "access_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalDocumentAccess.prototype, "access_restrictions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalDocumentAccess.prototype, "first_viewed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalDocumentAccess.prototype, "last_viewed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PatientPortalDocumentAccess.prototype, "view_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], PatientPortalDocumentAccess.prototype, "patient_notified", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalDocumentAccess.prototype, "notification_sent_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalDocumentAccess.prototype, "notification_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalDocumentAccess.prototype, "download_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], PatientPortalDocumentAccess.prototype, "requires_acknowledgment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientPortalDocumentAccess.prototype, "acknowledged_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalDocumentAccess.prototype, "acknowledgment_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientPortalDocumentAccess.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientPortalDocumentAccess.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientPortalAccount),
    (0, typeorm_1.JoinColumn)({ name: 'patient_account_id' }),
    __metadata("design:type", PatientPortalAccount)
], PatientPortalDocumentAccess.prototype, "patient_account", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'granted_by' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], PatientPortalDocumentAccess.prototype, "granter", void 0);
exports.PatientPortalDocumentAccess = PatientPortalDocumentAccess = __decorate([
    (0, typeorm_1.Entity)('patient_portal_document_access'),
    (0, typeorm_1.Index)(['patient_account_id']),
    (0, typeorm_1.Index)(['document_id']),
    (0, typeorm_1.Index)(['document_type']),
    (0, typeorm_1.Index)(['access_granted_date']),
    (0, typeorm_1.Index)(['status'])
], PatientPortalDocumentAccess);
let PatientHealthSummary = class PatientHealthSummary {
};
exports.PatientHealthSummary = PatientHealthSummary;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientHealthSummary.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientHealthSummary.prototype, "patient_account_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "summary_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "summary_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientHealthSummary.prototype, "generated_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PatientHealthSummary.prototype, "effective_start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PatientHealthSummary.prototype, "effective_end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "demographics_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "conditions_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "medications_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "allergies_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "vital_signs_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "lab_results_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "immunizations_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "procedures_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "care_team_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "care_plan_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "health_goals_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "educational_resources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "upcoming_appointments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientHealthSummary.prototype, "recommended_actions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PatientHealthSummary.prototype, "generated_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientHealthSummary.prototype, "last_updated_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PatientHealthSummary.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientHealthSummary.prototype, "patient_viewed_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientHealthSummary.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientHealthSummary.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientPortalAccount),
    (0, typeorm_1.JoinColumn)({ name: 'patient_account_id' }),
    __metadata("design:type", PatientPortalAccount)
], PatientHealthSummary.prototype, "patient_account", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'generated_by' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], PatientHealthSummary.prototype, "generator", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], PatientHealthSummary.prototype, "updater", void 0);
exports.PatientHealthSummary = PatientHealthSummary = __decorate([
    (0, typeorm_1.Entity)('patient_health_summary'),
    (0, typeorm_1.Index)(['patient_account_id']),
    (0, typeorm_1.Index)(['summary_type']),
    (0, typeorm_1.Index)(['generated_date']),
    (0, typeorm_1.Index)(['status'])
], PatientHealthSummary);
let PatientPortalAccessLog = class PatientPortalAccessLog {
};
exports.PatientPortalAccessLog = PatientPortalAccessLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientPortalAccessLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientPortalAccessLog.prototype, "account_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "action_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "action_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientPortalAccessLog.prototype, "access_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "ip_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "user_agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "page_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "referrer_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "session_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "request_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "result_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "error_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PatientPortalAccessLog.prototype, "response_time_ms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "device_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "browser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "operating_system", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientPortalAccessLog.prototype, "geolocation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientPortalAccessLog.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientPortalAccount, account => account.access_logs),
    (0, typeorm_1.JoinColumn)({ name: 'account_id' }),
    __metadata("design:type", PatientPortalAccount)
], PatientPortalAccessLog.prototype, "account", void 0);
exports.PatientPortalAccessLog = PatientPortalAccessLog = __decorate([
    (0, typeorm_1.Entity)('patient_portal_access_log'),
    (0, typeorm_1.Index)(['account_id']),
    (0, typeorm_1.Index)(['action_type']),
    (0, typeorm_1.Index)(['access_date']),
    (0, typeorm_1.Index)(['ip_address'])
], PatientPortalAccessLog);
let PatientEducationResource = class PatientEducationResource {
};
exports.PatientEducationResource = PatientEducationResource;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientEducationResource.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PatientEducationResource.prototype, "patient_account_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "resource_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "resource_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "resource_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "topic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "content_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "difficulty_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PatientEducationResource.prototype, "estimated_reading_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientEducationResource.prototype, "assigned_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PatientEducationResource.prototype, "assigned_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "assignment_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientEducationResource.prototype, "viewed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientEducationResource.prototype, "completed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], PatientEducationResource.prototype, "completion_percentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PatientEducationResource.prototype, "time_spent_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "patient_feedback", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], PatientEducationResource.prototype, "patient_rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "quiz_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "learning_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "key_takeaways", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientEducationResource.prototype, "follow_up_actions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientEducationResource.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientEducationResource.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientPortalAccount),
    (0, typeorm_1.JoinColumn)({ name: 'patient_account_id' }),
    __metadata("design:type", PatientPortalAccount)
], PatientEducationResource.prototype, "patient_account", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assigned_by' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], PatientEducationResource.prototype, "assigner", void 0);
exports.PatientEducationResource = PatientEducationResource = __decorate([
    (0, typeorm_1.Entity)('patient_education_resources'),
    (0, typeorm_1.Index)(['patient_account_id']),
    (0, typeorm_1.Index)(['resource_type']),
    (0, typeorm_1.Index)(['topic']),
    (0, typeorm_1.Index)(['assigned_date']),
    (0, typeorm_1.Index)(['status'])
], PatientEducationResource);
//# sourceMappingURL=patient-portal-engagement.entity.js.map