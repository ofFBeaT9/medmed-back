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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleBlock = exports.AppointmentTemplate = exports.ResourceScheduling = exports.AppointmentWaitlist = exports.AppointmentReminder = exports.ProviderAvailability = exports.CalendarLimit = exports.CalendarCategory = exports.CalendarEvent = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let CalendarEvent = class CalendarEvent {
};
exports.CalendarEvent = CalendarEvent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "pc_eid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], CalendarEvent.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CalendarEvent.prototype, "pc_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_hometext", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_counter", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_topic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_informant", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], CalendarEvent.prototype, "pc_eventDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], CalendarEvent.prototype, "pc_startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], CalendarEvent.prototype, "pc_endTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "pc_duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, default: '' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_recurrtype", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "pc_recurrspec", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], CalendarEvent.prototype, "pc_recurrfreq", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_aid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "pc_pid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_gid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', default: 5 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "pc_catid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "pc_all_day", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15, default: '-' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_apptstatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_prefcatid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "pc_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], CalendarEvent.prototype, "pc_eventstatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "pc_sharing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "pc_facility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_billing_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "pc_room", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_pid_flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_sendalertsms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_sendalertemail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_docconsult", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], CalendarEvent.prototype, "pc_multiple", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CalendarEvent.prototype, "pc_aid_flag", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CalendarEvent.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CalendarEvent.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'pc_pid' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], CalendarEvent.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'pc_aid' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], CalendarEvent.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CalendarCategory),
    (0, typeorm_1.JoinColumn)({ name: 'pc_catid' }),
    __metadata("design:type", CalendarCategory)
], CalendarEvent.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'pc_facility' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], CalendarEvent.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AppointmentReminder, reminder => reminder.appointment),
    __metadata("design:type", Array)
], CalendarEvent.prototype, "reminders", void 0);
exports.CalendarEvent = CalendarEvent = __decorate([
    (0, typeorm_1.Entity)('calendar_events'),
    (0, typeorm_1.Index)(['pc_eventDate', 'pc_startTime']),
    (0, typeorm_1.Index)(['pc_pid']),
    (0, typeorm_1.Index)(['pc_aid']),
    (0, typeorm_1.Index)(['pc_catid']),
    (0, typeorm_1.Index)(['pc_apptstatus'])
], CalendarEvent);
let CalendarCategory = class CalendarCategory {
};
exports.CalendarCategory = CalendarCategory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CalendarCategory.prototype, "pc_catid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], CalendarCategory.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], CalendarCategory.prototype, "pc_catname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CalendarCategory.prototype, "pc_catcolor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CalendarCategory.prototype, "pc_catdesc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], CalendarCategory.prototype, "pc_cattype", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], CalendarCategory.prototype, "pc_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], CalendarCategory.prototype, "pc_seq", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], CalendarCategory.prototype, "aco_spec", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 900 }),
    __metadata("design:type", Number)
], CalendarCategory.prototype, "pc_duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], CalendarCategory.prototype, "pc_end_date_flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], CalendarCategory.prototype, "pc_end_date_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], CalendarCategory.prototype, "pc_end_date_freq", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], CalendarCategory.prototype, "pc_end_all_day", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CalendarCategory.prototype, "pc_dailylimit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CalendarCategory.prototype, "pc_fee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], CalendarCategory.prototype, "pc_constant_time", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CalendarCategory.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CalendarCategory.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CalendarEvent, event => event.category),
    __metadata("design:type", Array)
], CalendarCategory.prototype, "events", void 0);
exports.CalendarCategory = CalendarCategory = __decorate([
    (0, typeorm_1.Entity)('calendar_categories'),
    (0, typeorm_1.Index)(['pc_catname']),
    (0, typeorm_1.Index)(['pc_cattype'])
], CalendarCategory);
let CalendarLimit = class CalendarLimit {
};
exports.CalendarLimit = CalendarLimit;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CalendarLimit.prototype, "pc_limitid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], CalendarLimit.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], CalendarLimit.prototype, "pc_catid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], CalendarLimit.prototype, "pc_starttime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], CalendarLimit.prototype, "pc_endtime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], CalendarLimit.prototype, "pc_limit", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CalendarLimit.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CalendarLimit.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CalendarCategory),
    (0, typeorm_1.JoinColumn)({ name: 'pc_catid' }),
    __metadata("design:type", CalendarCategory)
], CalendarLimit.prototype, "category", void 0);
exports.CalendarLimit = CalendarLimit = __decorate([
    (0, typeorm_1.Entity)('calendar_limits'),
    (0, typeorm_1.Index)(['pc_catid', 'pc_starttime', 'pc_endtime'])
], CalendarLimit);
let ProviderAvailability = class ProviderAvailability {
};
exports.ProviderAvailability = ProviderAvailability;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ProviderAvailability.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ProviderAvailability.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ProviderAvailability.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ProviderAvailability.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], ProviderAvailability.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], ProviderAvailability.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ProviderAvailability.prototype, "availability_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProviderAvailability.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ProviderAvailability.prototype, "is_recurring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ProviderAvailability.prototype, "recurrence_pattern", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProviderAvailability.prototype, "recurrence_days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ProviderAvailability.prototype, "recurrence_end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ProviderAvailability.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ProviderAvailability.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], ProviderAvailability.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProviderAvailability.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProviderAvailability.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], ProviderAvailability.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], ProviderAvailability.prototype, "facility", void 0);
exports.ProviderAvailability = ProviderAvailability = __decorate([
    (0, typeorm_1.Entity)('provider_availability'),
    (0, typeorm_1.Index)(['provider_id', 'date']),
    (0, typeorm_1.Index)(['availability_type'])
], ProviderAvailability);
let AppointmentReminder = class AppointmentReminder {
};
exports.AppointmentReminder = AppointmentReminder;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AppointmentReminder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], AppointmentReminder.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AppointmentReminder.prototype, "appointment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AppointmentReminder.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], AppointmentReminder.prototype, "reminder_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], AppointmentReminder.prototype, "reminder_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AppointmentReminder.prototype, "reminder_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AppointmentReminder.prototype, "reminder_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AppointmentReminder.prototype, "reminder_recipient", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AppointmentReminder.prototype, "sent_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AppointmentReminder.prototype, "delivery_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AppointmentReminder.prototype, "error_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], AppointmentReminder.prototype, "attempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AppointmentReminder.prototype, "next_attempt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AppointmentReminder.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AppointmentReminder.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CalendarEvent, event => event.reminders),
    (0, typeorm_1.JoinColumn)({ name: 'appointment_id' }),
    __metadata("design:type", CalendarEvent)
], AppointmentReminder.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], AppointmentReminder.prototype, "patient", void 0);
exports.AppointmentReminder = AppointmentReminder = __decorate([
    (0, typeorm_1.Entity)('appointment_reminders'),
    (0, typeorm_1.Index)(['appointment_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['reminder_date']),
    (0, typeorm_1.Index)(['reminder_status'])
], AppointmentReminder);
let AppointmentWaitlist = class AppointmentWaitlist {
};
exports.AppointmentWaitlist = AppointmentWaitlist;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AppointmentWaitlist.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], AppointmentWaitlist.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AppointmentWaitlist.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AppointmentWaitlist.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], AppointmentWaitlist.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], AppointmentWaitlist.prototype, "preferred_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], AppointmentWaitlist.prototype, "preferred_time_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], AppointmentWaitlist.prototype, "preferred_time_end", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AppointmentWaitlist.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], AppointmentWaitlist.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AppointmentWaitlist.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AppointmentWaitlist.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AppointmentWaitlist.prototype, "date_added", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AppointmentWaitlist.prototype, "last_contact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], AppointmentWaitlist.prototype, "contact_attempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AppointmentWaitlist.prototype, "contact_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], AppointmentWaitlist.prototype, "scheduled_appointment_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AppointmentWaitlist.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AppointmentWaitlist.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], AppointmentWaitlist.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], AppointmentWaitlist.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CalendarCategory),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", CalendarCategory)
], AppointmentWaitlist.prototype, "category", void 0);
exports.AppointmentWaitlist = AppointmentWaitlist = __decorate([
    (0, typeorm_1.Entity)('appointment_waitlist'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['provider_id']),
    (0, typeorm_1.Index)(['preferred_date']),
    (0, typeorm_1.Index)(['status'])
], AppointmentWaitlist);
let ResourceScheduling = class ResourceScheduling {
};
exports.ResourceScheduling = ResourceScheduling;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ResourceScheduling.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ResourceScheduling.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ResourceScheduling.prototype, "resource_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ResourceScheduling.prototype, "resource_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ResourceScheduling.prototype, "resource_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ResourceScheduling.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], ResourceScheduling.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], ResourceScheduling.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ResourceScheduling.prototype, "appointment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ResourceScheduling.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ResourceScheduling.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ResourceScheduling.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ResourceScheduling.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], ResourceScheduling.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ResourceScheduling.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ResourceScheduling.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CalendarEvent),
    (0, typeorm_1.JoinColumn)({ name: 'appointment_id' }),
    __metadata("design:type", CalendarEvent)
], ResourceScheduling.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], ResourceScheduling.prototype, "facility", void 0);
exports.ResourceScheduling = ResourceScheduling = __decorate([
    (0, typeorm_1.Entity)('resource_scheduling'),
    (0, typeorm_1.Index)(['resource_id', 'date']),
    (0, typeorm_1.Index)(['resource_type'])
], ResourceScheduling);
let AppointmentTemplate = class AppointmentTemplate {
};
exports.AppointmentTemplate = AppointmentTemplate;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AppointmentTemplate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], AppointmentTemplate.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AppointmentTemplate.prototype, "template_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AppointmentTemplate.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 900 }),
    __metadata("design:type", Number)
], AppointmentTemplate.prototype, "default_duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AppointmentTemplate.prototype, "default_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AppointmentTemplate.prototype, "default_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AppointmentTemplate.prototype, "required_resources", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AppointmentTemplate.prototype, "prep_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AppointmentTemplate.prototype, "post_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], AppointmentTemplate.prototype, "requires_confirmation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], AppointmentTemplate.prototype, "min_advance_booking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], AppointmentTemplate.prototype, "max_advance_booking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], AppointmentTemplate.prototype, "allow_online_booking", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], AppointmentTemplate.prototype, "base_fee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], AppointmentTemplate.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AppointmentTemplate.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AppointmentTemplate.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CalendarCategory),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", CalendarCategory)
], AppointmentTemplate.prototype, "category", void 0);
exports.AppointmentTemplate = AppointmentTemplate = __decorate([
    (0, typeorm_1.Entity)('appointment_templates'),
    (0, typeorm_1.Index)(['template_name']),
    (0, typeorm_1.Index)(['category_id'])
], AppointmentTemplate);
let ScheduleBlock = class ScheduleBlock {
};
exports.ScheduleBlock = ScheduleBlock;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ScheduleBlock.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ScheduleBlock.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ScheduleBlock.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ScheduleBlock.prototype, "block_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], ScheduleBlock.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], ScheduleBlock.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ScheduleBlock.prototype, "block_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ScheduleBlock.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ScheduleBlock.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ScheduleBlock.prototype, "is_recurring", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ScheduleBlock.prototype, "recurrence_pattern", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ScheduleBlock.prototype, "recurrence_end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ScheduleBlock.prototype, "all_day", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ScheduleBlock.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ScheduleBlock.prototype, "approval_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ScheduleBlock.prototype, "approved_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ScheduleBlock.prototype, "approved_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ScheduleBlock.prototype, "approval_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ScheduleBlock.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ScheduleBlock.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], ScheduleBlock.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], ScheduleBlock.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'approved_by' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], ScheduleBlock.prototype, "approver", void 0);
exports.ScheduleBlock = ScheduleBlock = __decorate([
    (0, typeorm_1.Entity)('schedule_blocks'),
    (0, typeorm_1.Index)(['provider_id', 'block_date']),
    (0, typeorm_1.Index)(['block_type'])
], ScheduleBlock);
//# sourceMappingURL=scheduling-calendar.entity.js.map