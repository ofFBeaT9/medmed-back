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
exports.TimeOffRequest = exports.CredentialTracking = exports.TimeEntry = exports.ScheduleAssignment = exports.ScheduleTemplate = exports.Position = exports.Department = exports.EmployeeProfile = void 0;
const typeorm_1 = require("typeorm");
const facility_provider_entity_1 = require("./facility-provider.entity");
let EmployeeProfile = class EmployeeProfile {
};
exports.EmployeeProfile = EmployeeProfile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EmployeeProfile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EmployeeProfile.prototype, "employee_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "employee_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EmployeeProfile.prototype, "department_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EmployeeProfile.prototype, "position_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "employment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "employment_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], EmployeeProfile.prototype, "hire_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], EmployeeProfile.prototype, "termination_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "termination_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], EmployeeProfile.prototype, "supervisor_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], EmployeeProfile.prototype, "base_salary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], EmployeeProfile.prototype, "hourly_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "pay_frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, default: 40.0 }),
    __metadata("design:type", Number)
], EmployeeProfile.prototype, "standard_hours_per_week", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "shift_preference", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "skills_certifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "emergency_contact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "work_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "work_phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "badge_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], EmployeeProfile.prototype, "background_check_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "background_check_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], EmployeeProfile.prototype, "drug_screen_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], EmployeeProfile.prototype, "drug_screen_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], EmployeeProfile.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EmployeeProfile.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EmployeeProfile.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'employee_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], EmployeeProfile.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Department),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", Department)
], EmployeeProfile.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Position),
    (0, typeorm_1.JoinColumn)({ name: 'position_id' }),
    __metadata("design:type", Position)
], EmployeeProfile.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'supervisor_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], EmployeeProfile.prototype, "supervisor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ScheduleAssignment, assignment => assignment.employee_profile),
    __metadata("design:type", Array)
], EmployeeProfile.prototype, "schedule_assignments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TimeEntry, entry => entry.employee_profile),
    __metadata("design:type", Array)
], EmployeeProfile.prototype, "time_entries", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CredentialTracking, credential => credential.employee_profile),
    __metadata("design:type", Array)
], EmployeeProfile.prototype, "credentials", void 0);
exports.EmployeeProfile = EmployeeProfile = __decorate([
    (0, typeorm_1.Entity)('employee_profiles'),
    (0, typeorm_1.Index)(['employee_id']),
    (0, typeorm_1.Index)(['employee_number']),
    (0, typeorm_1.Index)(['department_id']),
    (0, typeorm_1.Index)(['position_id']),
    (0, typeorm_1.Index)(['employment_status']),
    (0, typeorm_1.Index)(['hire_date']),
    (0, typeorm_1.Index)(['supervisor_id'])
], EmployeeProfile);
let Department = class Department {
};
exports.Department = Department;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Department.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], Department.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Department.prototype, "department_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "department_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "department_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], Department.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], Department.prototype, "parent_department_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], Department.prototype, "department_head_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "cost_center", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 15, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], Department.prototype, "annual_budget", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Department.prototype, "authorized_positions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], Department.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Department.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Department.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], Department.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Department),
    (0, typeorm_1.JoinColumn)({ name: 'parent_department_id' }),
    __metadata("design:type", Department)
], Department.prototype, "parent_department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'department_head_id' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], Department.prototype, "department_head", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Department, dept => dept.parent_department),
    __metadata("design:type", Array)
], Department.prototype, "sub_departments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Position, position => position.department),
    __metadata("design:type", Array)
], Department.prototype, "positions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmployeeProfile, profile => profile.department),
    __metadata("design:type", Array)
], Department.prototype, "employee_profiles", void 0);
exports.Department = Department = __decorate([
    (0, typeorm_1.Entity)('departments'),
    (0, typeorm_1.Index)(['department_code']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['parent_department_id']),
    (0, typeorm_1.Index)(['is_active'])
], Department);
let Position = class Position {
};
exports.Position = Position;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Position.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], Position.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Position.prototype, "position_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "position_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "position_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], Position.prototype, "department_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Position.prototype, "position_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "position_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], Position.prototype, "min_salary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], Position.prototype, "max_salary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], Position.prototype, "min_hourly_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], Position.prototype, "max_hourly_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "required_qualifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "required_certifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "preferred_qualifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "responsibilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "physical_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], Position.prototype, "requires_license", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Position.prototype, "license_types", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Position.prototype, "authorized_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Position.prototype, "filled_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], Position.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Position.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Position.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Department, dept => dept.positions),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", Department)
], Position.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmployeeProfile, profile => profile.position),
    __metadata("design:type", Array)
], Position.prototype, "employee_profiles", void 0);
exports.Position = Position = __decorate([
    (0, typeorm_1.Entity)('positions'),
    (0, typeorm_1.Index)(['position_code']),
    (0, typeorm_1.Index)(['department_id']),
    (0, typeorm_1.Index)(['position_level']),
    (0, typeorm_1.Index)(['is_active'])
], Position);
let ScheduleTemplate = class ScheduleTemplate {
};
exports.ScheduleTemplate = ScheduleTemplate;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ScheduleTemplate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ScheduleTemplate.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ScheduleTemplate.prototype, "template_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ScheduleTemplate.prototype, "template_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ScheduleTemplate.prototype, "department_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ScheduleTemplate.prototype, "template_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ScheduleTemplate.prototype, "schedule_pattern", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 7 }),
    __metadata("design:type", Number)
], ScheduleTemplate.prototype, "pattern_length_days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, default: 8.0 }),
    __metadata("design:type", Number)
], ScheduleTemplate.prototype, "standard_shift_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", String)
], ScheduleTemplate.prototype, "default_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", String)
], ScheduleTemplate.prototype, "default_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ScheduleTemplate.prototype, "includes_weekends", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ScheduleTemplate.prototype, "includes_holidays", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ScheduleTemplate.prototype, "staffing_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ScheduleTemplate.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ScheduleTemplate.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ScheduleTemplate.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ScheduleTemplate.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Department),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", Department)
], ScheduleTemplate.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], ScheduleTemplate.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ScheduleAssignment, assignment => assignment.schedule_template),
    __metadata("design:type", Array)
], ScheduleTemplate.prototype, "schedule_assignments", void 0);
exports.ScheduleTemplate = ScheduleTemplate = __decorate([
    (0, typeorm_1.Entity)('schedule_templates'),
    (0, typeorm_1.Index)(['template_name']),
    (0, typeorm_1.Index)(['department_id']),
    (0, typeorm_1.Index)(['template_type']),
    (0, typeorm_1.Index)(['is_active'])
], ScheduleTemplate);
let ScheduleAssignment = class ScheduleAssignment {
};
exports.ScheduleAssignment = ScheduleAssignment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ScheduleAssignment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ScheduleAssignment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ScheduleAssignment.prototype, "employee_profile_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ScheduleAssignment.prototype, "schedule_template_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ScheduleAssignment.prototype, "department_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ScheduleAssignment.prototype, "shift_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ScheduleAssignment.prototype, "shift_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", String)
], ScheduleAssignment.prototype, "scheduled_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", String)
], ScheduleAssignment.prototype, "scheduled_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], ScheduleAssignment.prototype, "scheduled_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ScheduleAssignment.prototype, "assignment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ScheduleAssignment.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ScheduleAssignment.prototype, "unit_assignment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ScheduleAssignment.prototype, "special_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ScheduleAssignment.prototype, "requires_coverage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ScheduleAssignment.prototype, "coverage_employee_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ScheduleAssignment.prototype, "coverage_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ScheduleAssignment.prototype, "assigned_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ScheduleAssignment.prototype, "assignment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ScheduleAssignment.prototype, "approved_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ScheduleAssignment.prototype, "approval_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ScheduleAssignment.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ScheduleAssignment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ScheduleAssignment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EmployeeProfile, profile => profile.schedule_assignments),
    (0, typeorm_1.JoinColumn)({ name: 'employee_profile_id' }),
    __metadata("design:type", EmployeeProfile)
], ScheduleAssignment.prototype, "employee_profile", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ScheduleTemplate, template => template.schedule_assignments),
    (0, typeorm_1.JoinColumn)({ name: 'schedule_template_id' }),
    __metadata("design:type", ScheduleTemplate)
], ScheduleAssignment.prototype, "schedule_template", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Department),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", Department)
], ScheduleAssignment.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EmployeeProfile),
    (0, typeorm_1.JoinColumn)({ name: 'coverage_employee_id' }),
    __metadata("design:type", EmployeeProfile)
], ScheduleAssignment.prototype, "coverage_employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assigned_by' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], ScheduleAssignment.prototype, "assigner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'approved_by' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], ScheduleAssignment.prototype, "approver", void 0);
exports.ScheduleAssignment = ScheduleAssignment = __decorate([
    (0, typeorm_1.Entity)('schedule_assignments'),
    (0, typeorm_1.Index)(['employee_profile_id']),
    (0, typeorm_1.Index)(['schedule_template_id']),
    (0, typeorm_1.Index)(['shift_date']),
    (0, typeorm_1.Index)(['shift_type']),
    (0, typeorm_1.Index)(['assignment_status']),
    (0, typeorm_1.Index)(['department_id'])
], ScheduleAssignment);
let TimeEntry = class TimeEntry {
};
exports.TimeEntry = TimeEntry;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TimeEntry.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], TimeEntry.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TimeEntry.prototype, "employee_profile_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TimeEntry.prototype, "department_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], TimeEntry.prototype, "entry_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TimeEntry.prototype, "entry_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TimeEntry.prototype, "clock_in_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TimeEntry.prototype, "clock_out_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TimeEntry.prototype, "break_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TimeEntry.prototype, "break_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], TimeEntry.prototype, "regular_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], TimeEntry.prototype, "overtime_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], TimeEntry.prototype, "break_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], TimeEntry.prototype, "total_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TimeEntry.prototype, "pay_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TimeEntry.prototype, "approval_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], TimeEntry.prototype, "approved_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TimeEntry.prototype, "approval_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TimeEntry.prototype, "approval_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TimeEntry.prototype, "clock_in_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TimeEntry.prototype, "clock_out_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], TimeEntry.prototype, "time_entry_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], TimeEntry.prototype, "is_edited", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TimeEntry.prototype, "edit_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], TimeEntry.prototype, "edited_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TimeEntry.prototype, "edit_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TimeEntry.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TimeEntry.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EmployeeProfile, profile => profile.time_entries),
    (0, typeorm_1.JoinColumn)({ name: 'employee_profile_id' }),
    __metadata("design:type", EmployeeProfile)
], TimeEntry.prototype, "employee_profile", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Department),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", Department)
], TimeEntry.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'approved_by' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], TimeEntry.prototype, "approver", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'edited_by' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], TimeEntry.prototype, "editor", void 0);
exports.TimeEntry = TimeEntry = __decorate([
    (0, typeorm_1.Entity)('time_entries'),
    (0, typeorm_1.Index)(['employee_profile_id']),
    (0, typeorm_1.Index)(['entry_date']),
    (0, typeorm_1.Index)(['entry_type']),
    (0, typeorm_1.Index)(['department_id']),
    (0, typeorm_1.Index)(['pay_period']),
    (0, typeorm_1.Index)(['approval_status'])
], TimeEntry);
let CredentialTracking = class CredentialTracking {
};
exports.CredentialTracking = CredentialTracking;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CredentialTracking.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], CredentialTracking.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], CredentialTracking.prototype, "employee_profile_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], CredentialTracking.prototype, "credential_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CredentialTracking.prototype, "credential_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CredentialTracking.prototype, "credential_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CredentialTracking.prototype, "issuing_organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], CredentialTracking.prototype, "issue_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], CredentialTracking.prototype, "expiration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], CredentialTracking.prototype, "credential_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], CredentialTracking.prototype, "is_required", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], CredentialTracking.prototype, "is_verified", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], CredentialTracking.prototype, "verified_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CredentialTracking.prototype, "verification_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CredentialTracking.prototype, "verification_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CredentialTracking.prototype, "verification_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CredentialTracking.prototype, "document_path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], CredentialTracking.prototype, "renewal_notification_days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CredentialTracking.prototype, "last_notification_sent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CredentialTracking.prototype, "continuing_education_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], CredentialTracking.prototype, "ce_hours_required", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], CredentialTracking.prototype, "ce_hours_completed", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CredentialTracking.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CredentialTracking.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EmployeeProfile, profile => profile.credentials),
    (0, typeorm_1.JoinColumn)({ name: 'employee_profile_id' }),
    __metadata("design:type", EmployeeProfile)
], CredentialTracking.prototype, "employee_profile", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'verified_by' }),
    __metadata("design:type", typeof (_j = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _j : Object)
], CredentialTracking.prototype, "verifier", void 0);
exports.CredentialTracking = CredentialTracking = __decorate([
    (0, typeorm_1.Entity)('credential_tracking'),
    (0, typeorm_1.Index)(['employee_profile_id']),
    (0, typeorm_1.Index)(['credential_type']),
    (0, typeorm_1.Index)(['credential_status']),
    (0, typeorm_1.Index)(['expiration_date']),
    (0, typeorm_1.Index)(['is_required'])
], CredentialTracking);
let TimeOffRequest = class TimeOffRequest {
};
exports.TimeOffRequest = TimeOffRequest;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TimeOffRequest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], TimeOffRequest.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TimeOffRequest.prototype, "employee_profile_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TimeOffRequest.prototype, "request_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], TimeOffRequest.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], TimeOffRequest.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", String)
], TimeOffRequest.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", String)
], TimeOffRequest.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], TimeOffRequest.prototype, "hours_requested", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TimeOffRequest.prototype, "request_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TimeOffRequest.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], TimeOffRequest.prototype, "submission_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], TimeOffRequest.prototype, "approved_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TimeOffRequest.prototype, "approval_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TimeOffRequest.prototype, "approval_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], TimeOffRequest.prototype, "is_paid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], TimeOffRequest.prototype, "available_balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], TimeOffRequest.prototype, "balance_after_request", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], TimeOffRequest.prototype, "requires_coverage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], TimeOffRequest.prototype, "coverage_arranged_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TimeOffRequest.prototype, "coverage_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TimeOffRequest.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TimeOffRequest.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EmployeeProfile),
    (0, typeorm_1.JoinColumn)({ name: 'employee_profile_id' }),
    __metadata("design:type", EmployeeProfile)
], TimeOffRequest.prototype, "employee_profile", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'approved_by' }),
    __metadata("design:type", typeof (_k = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _k : Object)
], TimeOffRequest.prototype, "approver", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'coverage_arranged_by' }),
    __metadata("design:type", typeof (_l = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _l : Object)
], TimeOffRequest.prototype, "coverage_arranger", void 0);
exports.TimeOffRequest = TimeOffRequest = __decorate([
    (0, typeorm_1.Entity)('time_off_requests'),
    (0, typeorm_1.Index)(['employee_profile_id']),
    (0, typeorm_1.Index)(['request_type']),
    (0, typeorm_1.Index)(['start_date']),
    (0, typeorm_1.Index)(['end_date']),
    (0, typeorm_1.Index)(['request_status']),
    (0, typeorm_1.Index)(['submission_date'])
], TimeOffRequest);
//# sourceMappingURL=workforce-management.entity.js.map