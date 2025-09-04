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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathwayExecution = exports.ClinicalPathway = exports.GuidelineRecommendation = exports.ClinicalGuideline = exports.RuleExecution = exports.ClinicalAlert = exports.ClinicalDecisionRule = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
const patient_management_entity_2 = require("./patient-management.entity");
let ClinicalDecisionRule = class ClinicalDecisionRule {
};
exports.ClinicalDecisionRule = ClinicalDecisionRule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ClinicalDecisionRule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "rule_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "rule_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "specialty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "rule_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "clinical_conditions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "trigger_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "rule_logic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "recommendation_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "recommendation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "priority_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "alert_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "evidence_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "evidence_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "references", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "active_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ClinicalDecisionRule.prototype, "effective_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ClinicalDecisionRule.prototype, "expiration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ClinicalDecisionRule.prototype, "last_updated", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalDecisionRule.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "update_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ClinicalDecisionRule.prototype, "version_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalDecisionRule.prototype, "rule_parameters", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalDecisionRule.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalDecisionRule.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], ClinicalDecisionRule.prototype, "updater", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ClinicalAlert, alert => alert.clinical_rule),
    __metadata("design:type", Array)
], ClinicalDecisionRule.prototype, "clinical_alerts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RuleExecution, execution => execution.clinical_rule),
    __metadata("design:type", Array)
], ClinicalDecisionRule.prototype, "rule_executions", void 0);
exports.ClinicalDecisionRule = ClinicalDecisionRule = __decorate([
    (0, typeorm_1.Entity)('clinical_decision_rules'),
    (0, typeorm_1.Index)(['rule_name']),
    (0, typeorm_1.Index)(['rule_category']),
    (0, typeorm_1.Index)(['active_status']),
    (0, typeorm_1.Index)(['priority_level']),
    (0, typeorm_1.Index)(['specialty'])
], ClinicalDecisionRule);
let ClinicalAlert = class ClinicalAlert {
};
exports.ClinicalAlert = ClinicalAlert;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ClinicalAlert.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ClinicalAlert.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ClinicalAlert.prototype, "encounter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalAlert.prototype, "clinical_rule_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ClinicalAlert.prototype, "alert_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "alert_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "alert_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "severity_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "alert_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "alert_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "recommendation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "rationale", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "clinical_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalAlert.prototype, "triggered_by_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalAlert.prototype, "acknowledged_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ClinicalAlert.prototype, "acknowledged_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "acknowledgment_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "action_taken", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalAlert.prototype, "dismissed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ClinicalAlert.prototype, "dismissed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "dismissal_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ClinicalAlert.prototype, "expiry_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ClinicalAlert.prototype, "auto_resolve", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalAlert.prototype, "alert_metadata", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalAlert.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalAlert.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], ClinicalAlert.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_2.Encounter),
    (0, typeorm_1.JoinColumn)({ name: 'encounter_id' }),
    __metadata("design:type", patient_management_entity_2.Encounter)
], ClinicalAlert.prototype, "encounter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ClinicalDecisionRule, rule => rule.clinical_alerts),
    (0, typeorm_1.JoinColumn)({ name: 'clinical_rule_id' }),
    __metadata("design:type", ClinicalDecisionRule)
], ClinicalAlert.prototype, "clinical_rule", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'triggered_by_user' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], ClinicalAlert.prototype, "triggering_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'acknowledged_by' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], ClinicalAlert.prototype, "acknowledging_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'dismissed_by' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], ClinicalAlert.prototype, "dismissing_user", void 0);
exports.ClinicalAlert = ClinicalAlert = __decorate([
    (0, typeorm_1.Entity)('clinical_alerts'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['encounter_id']),
    (0, typeorm_1.Index)(['alert_date']),
    (0, typeorm_1.Index)(['alert_status']),
    (0, typeorm_1.Index)(['alert_type']),
    (0, typeorm_1.Index)(['severity_level'])
], ClinicalAlert);
let RuleExecution = class RuleExecution {
};
exports.RuleExecution = RuleExecution;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RuleExecution.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RuleExecution.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RuleExecution.prototype, "clinical_rule_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RuleExecution.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RuleExecution.prototype, "encounter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], RuleExecution.prototype, "execution_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RuleExecution.prototype, "execution_result", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RuleExecution.prototype, "trigger_event", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RuleExecution.prototype, "trigger_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RuleExecution.prototype, "evaluation_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RuleExecution.prototype, "rule_output", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 6, nullable: true }),
    __metadata("design:type", Number)
], RuleExecution.prototype, "execution_time_ms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RuleExecution.prototype, "rule_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RuleExecution.prototype, "executed_by_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RuleExecution.prototype, "execution_context", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RuleExecution.prototype, "error_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RuleExecution.prototype, "debug_info", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RuleExecution.prototype, "alert_generated", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], RuleExecution.prototype, "user_override", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RuleExecution.prototype, "override_reason", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RuleExecution.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RuleExecution.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ClinicalDecisionRule, rule => rule.rule_executions),
    (0, typeorm_1.JoinColumn)({ name: 'clinical_rule_id' }),
    __metadata("design:type", ClinicalDecisionRule)
], RuleExecution.prototype, "clinical_rule", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], RuleExecution.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_2.Encounter),
    (0, typeorm_1.JoinColumn)({ name: 'encounter_id' }),
    __metadata("design:type", patient_management_entity_2.Encounter)
], RuleExecution.prototype, "encounter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'executed_by_user' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], RuleExecution.prototype, "executing_user", void 0);
exports.RuleExecution = RuleExecution = __decorate([
    (0, typeorm_1.Entity)('rule_executions'),
    (0, typeorm_1.Index)(['clinical_rule_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['execution_date']),
    (0, typeorm_1.Index)(['execution_result']),
    (0, typeorm_1.Index)(['trigger_event'])
], RuleExecution);
let ClinicalGuideline = class ClinicalGuideline {
};
exports.ClinicalGuideline = ClinicalGuideline;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ClinicalGuideline.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "guideline_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "specialty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "guideline_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "guideline_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "clinical_conditions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "target_population", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "evidence_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "evidence_quality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "recommendation_strength", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ClinicalGuideline.prototype, "publication_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ClinicalGuideline.prototype, "last_review_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ClinicalGuideline.prototype, "next_review_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "active_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "keywords", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "references", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "guideline_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "implementation_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "contraindications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalGuideline.prototype, "special_populations", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalGuideline.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalGuideline.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GuidelineRecommendation, recommendation => recommendation.clinical_guideline),
    __metadata("design:type", Array)
], ClinicalGuideline.prototype, "guideline_recommendations", void 0);
exports.ClinicalGuideline = ClinicalGuideline = __decorate([
    (0, typeorm_1.Entity)('clinical_guidelines'),
    (0, typeorm_1.Index)(['guideline_name']),
    (0, typeorm_1.Index)(['specialty']),
    (0, typeorm_1.Index)(['guideline_type']),
    (0, typeorm_1.Index)(['active_status']),
    (0, typeorm_1.Index)(['organization'])
], ClinicalGuideline);
let GuidelineRecommendation = class GuidelineRecommendation {
};
exports.GuidelineRecommendation = GuidelineRecommendation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], GuidelineRecommendation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], GuidelineRecommendation.prototype, "clinical_guideline_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "recommendation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "recommendation_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "recommendation_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "clinical_scenario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "strength_of_recommendation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "quality_of_evidence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "patient_population", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "clinical_benefits", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "potential_harms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "implementation_considerations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "monitoring_parameters", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "contraindications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "alternative_recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], GuidelineRecommendation.prototype, "recommendation_order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "supporting_evidence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], GuidelineRecommendation.prototype, "implementation_tools", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GuidelineRecommendation.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GuidelineRecommendation.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ClinicalGuideline, guideline => guideline.guideline_recommendations),
    (0, typeorm_1.JoinColumn)({ name: 'clinical_guideline_id' }),
    __metadata("design:type", ClinicalGuideline)
], GuidelineRecommendation.prototype, "clinical_guideline", void 0);
exports.GuidelineRecommendation = GuidelineRecommendation = __decorate([
    (0, typeorm_1.Entity)('guideline_recommendations'),
    (0, typeorm_1.Index)(['clinical_guideline_id']),
    (0, typeorm_1.Index)(['recommendation_type']),
    (0, typeorm_1.Index)(['strength_of_recommendation']),
    (0, typeorm_1.Index)(['clinical_scenario'])
], GuidelineRecommendation);
let ClinicalPathway = class ClinicalPathway {
};
exports.ClinicalPathway = ClinicalPathway;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ClinicalPathway.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "pathway_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "clinical_condition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "pathway_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "specialty", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "pathway_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "inclusion_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "exclusion_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "pathway_steps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "decision_points", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "outcome_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ClinicalPathway.prototype, "expected_length_of_stay", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "quality_indicators", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "active_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ClinicalPathway.prototype, "effective_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ClinicalPathway.prototype, "review_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalPathway.prototype, "pathway_owner", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "evidence_base", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalPathway.prototype, "implementation_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalPathway.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalPathway.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'pathway_owner' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], ClinicalPathway.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PathwayExecution, execution => execution.clinical_pathway),
    __metadata("design:type", Array)
], ClinicalPathway.prototype, "pathway_executions", void 0);
exports.ClinicalPathway = ClinicalPathway = __decorate([
    (0, typeorm_1.Entity)('clinical_pathways'),
    (0, typeorm_1.Index)(['pathway_name']),
    (0, typeorm_1.Index)(['clinical_condition']),
    (0, typeorm_1.Index)(['pathway_type']),
    (0, typeorm_1.Index)(['active_status']),
    (0, typeorm_1.Index)(['specialty'])
], ClinicalPathway);
let PathwayExecution = class PathwayExecution {
};
exports.PathwayExecution = PathwayExecution;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PathwayExecution.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PathwayExecution.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PathwayExecution.prototype, "clinical_pathway_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PathwayExecution.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PathwayExecution.prototype, "encounter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PathwayExecution.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PathwayExecution.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathwayExecution.prototype, "execution_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PathwayExecution.prototype, "current_step", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathwayExecution.prototype, "completed_steps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathwayExecution.prototype, "pending_steps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathwayExecution.prototype, "deviations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathwayExecution.prototype, "variance_reasons", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathwayExecution.prototype, "outcome_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], PathwayExecution.prototype, "actual_length_of_stay", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PathwayExecution.prototype, "primary_provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PathwayExecution.prototype, "case_manager", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathwayExecution.prototype, "execution_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PathwayExecution.prototype, "last_review_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PathwayExecution.prototype, "last_reviewed_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PathwayExecution.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PathwayExecution.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ClinicalPathway, pathway => pathway.pathway_executions),
    (0, typeorm_1.JoinColumn)({ name: 'clinical_pathway_id' }),
    __metadata("design:type", ClinicalPathway)
], PathwayExecution.prototype, "clinical_pathway", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], PathwayExecution.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_2.Encounter),
    (0, typeorm_1.JoinColumn)({ name: 'encounter_id' }),
    __metadata("design:type", patient_management_entity_2.Encounter)
], PathwayExecution.prototype, "encounter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'primary_provider' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], PathwayExecution.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'case_manager' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], PathwayExecution.prototype, "manager", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'last_reviewed_by' }),
    __metadata("design:type", typeof (_j = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _j : Object)
], PathwayExecution.prototype, "reviewer", void 0);
exports.PathwayExecution = PathwayExecution = __decorate([
    (0, typeorm_1.Entity)('pathway_executions'),
    (0, typeorm_1.Index)(['clinical_pathway_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['encounter_id']),
    (0, typeorm_1.Index)(['execution_status']),
    (0, typeorm_1.Index)(['start_date'])
], PathwayExecution);
//# sourceMappingURL=clinical-decision-support-system.entity.js.map