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
exports.PatientResourceUtilization = exports.PatientTrackingMetric = exports.PatientCarePlan = exports.PatientTrackingAlert = exports.PatientTrackingEvent = exports.PatientTrackingSession = void 0;
const typeorm_1 = require("typeorm");
// Core Patient Tracking Entity
let PatientTrackingSession = class PatientTrackingSession {
};
exports.PatientTrackingSession = PatientTrackingSession;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "sessionType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "assignedUnit", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "assignedRoom", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "assignedBed", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "primaryPhysician", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "attendingNurse", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], PatientTrackingSession.prototype, "careTeam", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "chiefComplaint", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "admissionNotes", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "currentTreatmentPlan", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientTrackingSession.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", Date)
], PatientTrackingSession.prototype, "estimatedEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", Date)
], PatientTrackingSession.prototype, "actualEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json', { nullable: true }),
    __metadata("design:type", Object)
], PatientTrackingSession.prototype, "trackingParameters", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PatientTrackingEvent, event => event.session),
    __metadata("design:type", Array)
], PatientTrackingSession.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PatientTrackingAlert, alert => alert.session),
    __metadata("design:type", Array)
], PatientTrackingSession.prototype, "alerts", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientTrackingSession.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientTrackingSession.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientTrackingSession.prototype, "lastUpdatedBy", void 0);
exports.PatientTrackingSession = PatientTrackingSession = __decorate([
    (0, typeorm_1.Entity)('patient_tracking_sessions'),
    (0, typeorm_1.Index)(['patientId', 'status', 'priority']),
    (0, typeorm_1.Index)(['startDate', 'endDate'])
], PatientTrackingSession);
// Patient Tracking Events
let PatientTrackingEvent = class PatientTrackingEvent {
};
exports.PatientTrackingEvent = PatientTrackingEvent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientTrackingEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingEvent.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientTrackingSession, session => session.events),
    __metadata("design:type", PatientTrackingSession)
], PatientTrackingEvent.prototype, "session", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingEvent.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingEvent.prototype, "severity", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientTrackingEvent.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], PatientTrackingEvent.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json', { nullable: true }),
    __metadata("design:type", Object)
], PatientTrackingEvent.prototype, "eventData", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientTrackingEvent.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientTrackingEvent.prototype, "recordedBy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientTrackingEvent.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: false }),
    __metadata("design:type", Boolean)
], PatientTrackingEvent.prototype, "requiresFollowUp", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", Date)
], PatientTrackingEvent.prototype, "followUpDue", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50, default: 'pending' }),
    __metadata("design:type", String)
], PatientTrackingEvent.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientTrackingEvent.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientTrackingEvent.prototype, "updatedAt", void 0);
exports.PatientTrackingEvent = PatientTrackingEvent = __decorate([
    (0, typeorm_1.Entity)('patient_tracking_events'),
    (0, typeorm_1.Index)(['sessionId', 'eventType', 'timestamp']),
    (0, typeorm_1.Index)(['timestamp', 'severity'])
], PatientTrackingEvent);
// Patient Tracking Alerts
let PatientTrackingAlert = class PatientTrackingAlert {
};
exports.PatientTrackingAlert = PatientTrackingAlert;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientTrackingSession, session => session.alerts),
    __metadata("design:type", PatientTrackingSession)
], PatientTrackingAlert.prototype, "session", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "alertType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "severity", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json', { nullable: true }),
    __metadata("design:type", Object)
], PatientTrackingAlert.prototype, "alertData", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Boolean)
], PatientTrackingAlert.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: false }),
    __metadata("design:type", Boolean)
], PatientTrackingAlert.prototype, "isAcknowledged", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "acknowledgedBy", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", Date)
], PatientTrackingAlert.prototype, "acknowledgedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "acknowledgmentNotes", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: false }),
    __metadata("design:type", Boolean)
], PatientTrackingAlert.prototype, "isResolved", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "resolvedBy", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", Date)
], PatientTrackingAlert.prototype, "resolvedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "resolutionNotes", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", Date)
], PatientTrackingAlert.prototype, "escalatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientTrackingAlert.prototype, "escalatedTo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientTrackingAlert.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientTrackingAlert.prototype, "updatedAt", void 0);
exports.PatientTrackingAlert = PatientTrackingAlert = __decorate([
    (0, typeorm_1.Entity)('patient_tracking_alerts'),
    (0, typeorm_1.Index)(['sessionId', 'alertType', 'severity']),
    (0, typeorm_1.Index)(['isActive', 'priority', 'createdAt'])
], PatientTrackingAlert);
// Care Plan Tracking
let PatientCarePlan = class PatientCarePlan {
};
exports.PatientCarePlan = PatientCarePlan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientCarePlan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientCarePlan.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientTrackingSession),
    __metadata("design:type", PatientTrackingSession)
], PatientCarePlan.prototype, "session", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientCarePlan.prototype, "planTitle", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], PatientCarePlan.prototype, "planDescription", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json'),
    __metadata("design:type", Array)
], PatientCarePlan.prototype, "goals", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json'),
    __metadata("design:type", Array)
], PatientCarePlan.prototype, "interventions", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json', { nullable: true }),
    __metadata("design:type", Array)
], PatientCarePlan.prototype, "progressNotes", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], PatientCarePlan.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    __metadata("design:type", Date)
], PatientCarePlan.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", Date)
], PatientCarePlan.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientCarePlan.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientCarePlan.prototype, "lastReviewedBy", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", Date)
], PatientCarePlan.prototype, "lastReviewedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientCarePlan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientCarePlan.prototype, "updatedAt", void 0);
exports.PatientCarePlan = PatientCarePlan = __decorate([
    (0, typeorm_1.Entity)('patient_care_plans'),
    (0, typeorm_1.Index)(['sessionId', 'status'])
], PatientCarePlan);
// Quality Metrics and Outcomes
let PatientTrackingMetric = class PatientTrackingMetric {
};
exports.PatientTrackingMetric = PatientTrackingMetric;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientTrackingMetric.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingMetric.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientTrackingSession),
    __metadata("design:type", PatientTrackingSession)
], PatientTrackingMetric.prototype, "session", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientTrackingMetric.prototype, "metricType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientTrackingMetric.prototype, "metricName", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], PatientTrackingMetric.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50, nullable: true }),
    __metadata("design:type", String)
], PatientTrackingMetric.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientTrackingMetric.prototype, "benchmark", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json', { nullable: true }),
    __metadata("design:type", Object)
], PatientTrackingMetric.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientTrackingMetric.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientTrackingMetric.prototype, "recordedBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientTrackingMetric.prototype, "createdAt", void 0);
exports.PatientTrackingMetric = PatientTrackingMetric = __decorate([
    (0, typeorm_1.Entity)('patient_tracking_metrics'),
    (0, typeorm_1.Index)(['sessionId', 'metricType', 'timestamp'])
], PatientTrackingMetric);
// Resource Utilization Tracking
let PatientResourceUtilization = class PatientResourceUtilization {
};
exports.PatientResourceUtilization = PatientResourceUtilization;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientResourceUtilization.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientResourceUtilization.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientTrackingSession),
    __metadata("design:type", PatientTrackingSession)
], PatientResourceUtilization.prototype, "session", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PatientResourceUtilization.prototype, "resourceType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientResourceUtilization.prototype, "resourceName", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], PatientResourceUtilization.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], PatientResourceUtilization.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PatientResourceUtilization.prototype, "costPerUnit", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PatientResourceUtilization.prototype, "totalCost", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientResourceUtilization.prototype, "assignedProvider", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, nullable: true }),
    __metadata("design:type", String)
], PatientResourceUtilization.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PatientResourceUtilization.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], PatientResourceUtilization.prototype, "recordedBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientResourceUtilization.prototype, "createdAt", void 0);
exports.PatientResourceUtilization = PatientResourceUtilization = __decorate([
    (0, typeorm_1.Entity)('patient_resource_utilization'),
    (0, typeorm_1.Index)(['sessionId', 'resourceType', 'timestamp'])
], PatientResourceUtilization);
