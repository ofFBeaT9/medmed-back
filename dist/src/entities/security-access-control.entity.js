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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUsageLog = exports.ApiKey = exports.AccountLockout = exports.TwoFactorAttempt = exports.TwoFactorAuth = exports.PasswordHistory = exports.LoginAttempt = exports.UserSession = exports.GroupPermission = exports.AclSection = exports.UserGroupAssignment = exports.UserGroup = void 0;
const typeorm_1 = require("typeorm");
const facility_provider_entity_1 = require("./facility-provider.entity");
let UserGroup = class UserGroup {
};
exports.UserGroup = UserGroup;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], UserGroup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], UserGroup.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], UserGroup.prototype, "group_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserGroup.prototype, "group_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], UserGroup.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], UserGroup.prototype, "is_system_group", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], UserGroup.prototype, "is_default", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], UserGroup.prototype, "group_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], UserGroup.prototype, "sort_order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserGroup.prototype, "permissions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserGroup.prototype, "restrictions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserGroup.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UserGroup.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinTable)({
        name: 'user_group_assignments',
        joinColumn: { name: 'group_id' },
        inverseJoinColumn: { name: 'user_id' }
    }),
    __metadata("design:type", Array)
], UserGroup.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GroupPermission, permission => permission.group),
    __metadata("design:type", Array)
], UserGroup.prototype, "group_permissions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserGroupAssignment, assignment => assignment.group),
    __metadata("design:type", Array)
], UserGroup.prototype, "user_assignments", void 0);
exports.UserGroup = UserGroup = __decorate([
    (0, typeorm_1.Entity)('user_groups'),
    (0, typeorm_1.Index)(['group_name']),
    (0, typeorm_1.Index)(['active'])
], UserGroup);
let UserGroupAssignment = class UserGroupAssignment {
};
exports.UserGroupAssignment = UserGroupAssignment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], UserGroupAssignment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], UserGroupAssignment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], UserGroupAssignment.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], UserGroupAssignment.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], UserGroupAssignment.prototype, "assigned_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], UserGroupAssignment.prototype, "assigned_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], UserGroupAssignment.prototype, "effective_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], UserGroupAssignment.prototype, "expiration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], UserGroupAssignment.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserGroupAssignment.prototype, "assignment_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserGroupAssignment.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserGroupAssignment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UserGroupAssignment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], UserGroupAssignment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserGroup, group => group.user_assignments),
    (0, typeorm_1.JoinColumn)({ name: 'group_id' }),
    __metadata("design:type", UserGroup)
], UserGroupAssignment.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assigned_by' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], UserGroupAssignment.prototype, "assigner", void 0);
exports.UserGroupAssignment = UserGroupAssignment = __decorate([
    (0, typeorm_1.Entity)('user_group_assignments'),
    (0, typeorm_1.Index)(['user_id']),
    (0, typeorm_1.Index)(['group_id']),
    (0, typeorm_1.Index)(['active'])
], UserGroupAssignment);
let AclSection = class AclSection {
};
exports.AclSection = AclSection;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AclSection.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], AclSection.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AclSection.prototype, "section_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AclSection.prototype, "section_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AclSection.prototype, "section_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AclSection.prototype, "parent_section", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], AclSection.prototype, "sort_order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AclSection.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AclSection.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AclSection.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GroupPermission, permission => permission.section),
    __metadata("design:type", Array)
], AclSection.prototype, "permissions", void 0);
exports.AclSection = AclSection = __decorate([
    (0, typeorm_1.Entity)('acl_sections'),
    (0, typeorm_1.Index)(['section_name']),
    (0, typeorm_1.Index)(['active'])
], AclSection);
let GroupPermission = class GroupPermission {
};
exports.GroupPermission = GroupPermission;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], GroupPermission.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], GroupPermission.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], GroupPermission.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], GroupPermission.prototype, "section_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], GroupPermission.prototype, "permission_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], GroupPermission.prototype, "allowed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GroupPermission.prototype, "conditions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], GroupPermission.prototype, "resource_filter", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], GroupPermission.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GroupPermission.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GroupPermission.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserGroup, group => group.group_permissions),
    (0, typeorm_1.JoinColumn)({ name: 'group_id' }),
    __metadata("design:type", UserGroup)
], GroupPermission.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => AclSection, section => section.permissions),
    (0, typeorm_1.JoinColumn)({ name: 'section_id' }),
    __metadata("design:type", AclSection)
], GroupPermission.prototype, "section", void 0);
exports.GroupPermission = GroupPermission = __decorate([
    (0, typeorm_1.Entity)('group_permissions'),
    (0, typeorm_1.Index)(['group_id']),
    (0, typeorm_1.Index)(['section_id']),
    (0, typeorm_1.Index)(['permission_name'])
], GroupPermission);
let UserSession = class UserSession {
};
exports.UserSession = UserSession;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], UserSession.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], UserSession.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], UserSession.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], UserSession.prototype, "session_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], UserSession.prototype, "ip_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserSession.prototype, "user_agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], UserSession.prototype, "login_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], UserSession.prototype, "last_activity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], UserSession.prototype, "logout_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], UserSession.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], UserSession.prototype, "device_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], UserSession.prototype, "browser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], UserSession.prototype, "operating_system", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UserSession.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], UserSession.prototype, "is_mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 3600 }),
    __metadata("design:type", Number)
], UserSession.prototype, "timeout_seconds", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserSession.prototype, "session_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], UserSession.prototype, "logout_reason", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserSession.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UserSession.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], UserSession.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => LoginAttempt, attempt => attempt.session),
    __metadata("design:type", Array)
], UserSession.prototype, "login_attempts", void 0);
exports.UserSession = UserSession = __decorate([
    (0, typeorm_1.Entity)('user_sessions'),
    (0, typeorm_1.Index)(['user_id']),
    (0, typeorm_1.Index)(['session_token']),
    (0, typeorm_1.Index)(['ip_address']),
    (0, typeorm_1.Index)(['active']),
    (0, typeorm_1.Index)(['last_activity'])
], UserSession);
let LoginAttempt = class LoginAttempt {
};
exports.LoginAttempt = LoginAttempt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LoginAttempt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], LoginAttempt.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LoginAttempt.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LoginAttempt.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LoginAttempt.prototype, "ip_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], LoginAttempt.prototype, "attempt_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LoginAttempt.prototype, "successful", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LoginAttempt.prototype, "failure_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LoginAttempt.prototype, "user_agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LoginAttempt.prototype, "session_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], LoginAttempt.prototype, "authentication_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LoginAttempt.prototype, "additional_data", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LoginAttempt.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], LoginAttempt.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserSession, session => session.login_attempts),
    (0, typeorm_1.JoinColumn)({ name: 'session_id', referencedColumnName: 'session_token' }),
    __metadata("design:type", UserSession)
], LoginAttempt.prototype, "session", void 0);
exports.LoginAttempt = LoginAttempt = __decorate([
    (0, typeorm_1.Entity)('login_attempts'),
    (0, typeorm_1.Index)(['user_id']),
    (0, typeorm_1.Index)(['ip_address']),
    (0, typeorm_1.Index)(['attempt_time']),
    (0, typeorm_1.Index)(['successful'])
], LoginAttempt);
let PasswordHistory = class PasswordHistory {
};
exports.PasswordHistory = PasswordHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PasswordHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PasswordHistory.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PasswordHistory.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PasswordHistory.prototype, "password_hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PasswordHistory.prototype, "password_salt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PasswordHistory.prototype, "created_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], PasswordHistory.prototype, "created_from_ip", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PasswordHistory.prototype, "hash_algorithm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], PasswordHistory.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PasswordHistory.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], PasswordHistory.prototype, "user", void 0);
exports.PasswordHistory = PasswordHistory = __decorate([
    (0, typeorm_1.Entity)('password_history'),
    (0, typeorm_1.Index)(['user_id']),
    (0, typeorm_1.Index)(['created_date'])
], PasswordHistory);
let TwoFactorAuth = class TwoFactorAuth {
};
exports.TwoFactorAuth = TwoFactorAuth;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TwoFactorAuth.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], TwoFactorAuth.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TwoFactorAuth.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], TwoFactorAuth.prototype, "auth_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TwoFactorAuth.prototype, "secret_key", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TwoFactorAuth.prototype, "backup_codes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TwoFactorAuth.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TwoFactorAuth.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TwoFactorAuth.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], TwoFactorAuth.prototype, "verified", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TwoFactorAuth.prototype, "last_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], TwoFactorAuth.prototype, "failed_attempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TwoFactorAuth.prototype, "locked_until", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TwoFactorAuth.prototype, "setup_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TwoFactorAuth.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TwoFactorAuth.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], TwoFactorAuth.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TwoFactorAttempt, attempt => attempt.two_factor_auth),
    __metadata("design:type", Array)
], TwoFactorAuth.prototype, "attempts", void 0);
exports.TwoFactorAuth = TwoFactorAuth = __decorate([
    (0, typeorm_1.Entity)('two_factor_auth'),
    (0, typeorm_1.Index)(['user_id']),
    (0, typeorm_1.Index)(['active'])
], TwoFactorAuth);
let TwoFactorAttempt = class TwoFactorAttempt {
};
exports.TwoFactorAttempt = TwoFactorAttempt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TwoFactorAttempt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], TwoFactorAttempt.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TwoFactorAttempt.prototype, "two_factor_auth_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TwoFactorAttempt.prototype, "code_entered", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], TwoFactorAttempt.prototype, "attempt_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TwoFactorAttempt.prototype, "successful", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], TwoFactorAttempt.prototype, "ip_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TwoFactorAttempt.prototype, "user_agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TwoFactorAttempt.prototype, "failure_reason", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TwoFactorAttempt.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TwoFactorAuth, twoFactor => twoFactor.attempts),
    (0, typeorm_1.JoinColumn)({ name: 'two_factor_auth_id' }),
    __metadata("design:type", TwoFactorAuth)
], TwoFactorAttempt.prototype, "two_factor_auth", void 0);
exports.TwoFactorAttempt = TwoFactorAttempt = __decorate([
    (0, typeorm_1.Entity)('two_factor_attempts'),
    (0, typeorm_1.Index)(['two_factor_auth_id']),
    (0, typeorm_1.Index)(['attempt_time']),
    (0, typeorm_1.Index)(['successful'])
], TwoFactorAttempt);
let AccountLockout = class AccountLockout {
};
exports.AccountLockout = AccountLockout;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AccountLockout.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], AccountLockout.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AccountLockout.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AccountLockout.prototype, "lockout_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], AccountLockout.prototype, "lockout_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AccountLockout.prototype, "lockout_end", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], AccountLockout.prototype, "failed_attempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], AccountLockout.prototype, "ip_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], AccountLockout.prototype, "locked_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], AccountLockout.prototype, "unlocked_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AccountLockout.prototype, "unlocked_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AccountLockout.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccountLockout.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AccountLockout.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AccountLockout.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], AccountLockout.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'locked_by' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], AccountLockout.prototype, "locker", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'unlocked_by' }),
    __metadata("design:type", typeof (_j = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _j : Object)
], AccountLockout.prototype, "unlocker", void 0);
exports.AccountLockout = AccountLockout = __decorate([
    (0, typeorm_1.Entity)('account_lockouts'),
    (0, typeorm_1.Index)(['user_id']),
    (0, typeorm_1.Index)(['lockout_start']),
    (0, typeorm_1.Index)(['active'])
], AccountLockout);
let ApiKey = class ApiKey {
};
exports.ApiKey = ApiKey;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ApiKey.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ApiKey.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ApiKey.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ApiKey.prototype, "key_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ApiKey.prototype, "key_hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ApiKey.prototype, "permissions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ApiKey.prototype, "ip_whitelist", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ApiKey.prototype, "expires_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ApiKey.prototype, "last_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ApiKey.prototype, "usage_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1000 }),
    __metadata("design:type", Number)
], ApiKey.prototype, "rate_limit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ApiKey.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ApiKey.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ApiKey.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ApiKey.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ApiKey.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_k = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _k : Object)
], ApiKey.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", typeof (_l = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _l : Object)
], ApiKey.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ApiUsageLog, log => log.api_key),
    __metadata("design:type", Array)
], ApiKey.prototype, "usage_logs", void 0);
exports.ApiKey = ApiKey = __decorate([
    (0, typeorm_1.Entity)('api_keys'),
    (0, typeorm_1.Index)(['user_id']),
    (0, typeorm_1.Index)(['key_hash']),
    (0, typeorm_1.Index)(['active']),
    (0, typeorm_1.Index)(['expires_at'])
], ApiKey);
let ApiUsageLog = class ApiUsageLog {
};
exports.ApiUsageLog = ApiUsageLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ApiUsageLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ApiUsageLog.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ApiUsageLog.prototype, "api_key_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ApiUsageLog.prototype, "endpoint", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], ApiUsageLog.prototype, "http_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ApiUsageLog.prototype, "request_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ApiUsageLog.prototype, "ip_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ApiUsageLog.prototype, "user_agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ApiUsageLog.prototype, "response_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ApiUsageLog.prototype, "response_time_ms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ApiUsageLog.prototype, "request_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ApiUsageLog.prototype, "response_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ApiUsageLog.prototype, "error_message", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ApiUsageLog.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ApiKey, apiKey => apiKey.usage_logs),
    (0, typeorm_1.JoinColumn)({ name: 'api_key_id' }),
    __metadata("design:type", ApiKey)
], ApiUsageLog.prototype, "api_key", void 0);
exports.ApiUsageLog = ApiUsageLog = __decorate([
    (0, typeorm_1.Entity)('api_usage_logs'),
    (0, typeorm_1.Index)(['api_key_id']),
    (0, typeorm_1.Index)(['request_time']),
    (0, typeorm_1.Index)(['ip_address']),
    (0, typeorm_1.Index)(['endpoint'])
], ApiUsageLog);
//# sourceMappingURL=security-access-control.entity.js.map