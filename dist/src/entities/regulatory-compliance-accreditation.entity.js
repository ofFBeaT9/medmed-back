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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyManagement = exports.TrainingAttendance = exports.ComplianceTraining = exports.AccreditationSurvey = exports.AccreditationStandard = exports.CorrectiveAction = exports.ComplianceAssessment = exports.RegulatoryRequirement = void 0;
const typeorm_1 = require("typeorm");
const facility_provider_entity_1 = require("./facility-provider.entity");
let RegulatoryRequirement = class RegulatoryRequirement {
};
exports.RegulatoryRequirement = RegulatoryRequirement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RegulatoryRequirement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "requirement_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "requirement_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "regulatory_body", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "regulation_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "requirement_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "compliance_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], RegulatoryRequirement.prototype, "effective_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], RegulatoryRequirement.prototype, "expiration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "scope_of_application", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "compliance_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "evidence_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "penalties_for_noncompliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "implementation_guidance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "reference_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RegulatoryRequirement.prototype, "related_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RegulatoryRequirement.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RegulatoryRequirement.prototype, "last_reviewed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], RegulatoryRequirement.prototype, "reviewed_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RegulatoryRequirement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RegulatoryRequirement.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], RegulatoryRequirement.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'reviewed_by' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], RegulatoryRequirement.prototype, "reviewer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ComplianceAssessment, assessment => assessment.regulatory_requirement),
    __metadata("design:type", Array)
], RegulatoryRequirement.prototype, "compliance_assessments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ComplianceTraining, training => training.regulatory_requirement),
    __metadata("design:type", Array)
], RegulatoryRequirement.prototype, "compliance_trainings", void 0);
exports.RegulatoryRequirement = RegulatoryRequirement = __decorate([
    (0, typeorm_1.Entity)('regulatory_requirements'),
    (0, typeorm_1.Index)(['requirement_type']),
    (0, typeorm_1.Index)(['regulatory_body']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['effective_date']),
    (0, typeorm_1.Index)(['compliance_level'])
], RegulatoryRequirement);
let ComplianceAssessment = class ComplianceAssessment {
};
exports.ComplianceAssessment = ComplianceAssessment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ComplianceAssessment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ComplianceAssessment.prototype, "regulatory_requirement_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ComplianceAssessment.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "assessment_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ComplianceAssessment.prototype, "assessment_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "compliance_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], ComplianceAssessment.prototype, "compliance_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ComplianceAssessment.prototype, "assessed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "assessor_organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "assessment_methodology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "evidence_reviewed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "deficiencies_identified", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "corrective_actions_required", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ComplianceAssessment.prototype, "corrective_action_deadline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "risk_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ComplianceAssessment.prototype, "next_assessment_due", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ComplianceAssessment.prototype, "reviewed_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ComplianceAssessment.prototype, "reviewed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceAssessment.prototype, "reviewer_notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ComplianceAssessment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ComplianceAssessment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RegulatoryRequirement, requirement => requirement.compliance_assessments),
    (0, typeorm_1.JoinColumn)({ name: 'regulatory_requirement_id' }),
    __metadata("design:type", RegulatoryRequirement)
], ComplianceAssessment.prototype, "regulatory_requirement", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], ComplianceAssessment.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assessed_by' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], ComplianceAssessment.prototype, "assessor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'reviewed_by' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], ComplianceAssessment.prototype, "reviewer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CorrectiveAction, action => action.compliance_assessment),
    __metadata("design:type", Array)
], ComplianceAssessment.prototype, "corrective_actions", void 0);
exports.ComplianceAssessment = ComplianceAssessment = __decorate([
    (0, typeorm_1.Entity)('compliance_assessments'),
    (0, typeorm_1.Index)(['regulatory_requirement_id']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['assessment_type']),
    (0, typeorm_1.Index)(['assessment_date']),
    (0, typeorm_1.Index)(['compliance_status'])
], ComplianceAssessment);
let CorrectiveAction = class CorrectiveAction {
};
exports.CorrectiveAction = CorrectiveAction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CorrectiveAction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], CorrectiveAction.prototype, "compliance_assessment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "action_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "action_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "action_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], CorrectiveAction.prototype, "due_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], CorrectiveAction.prototype, "assigned_to", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CorrectiveAction.prototype, "assigned_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "implementation_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "resource_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], CorrectiveAction.prototype, "estimated_cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], CorrectiveAction.prototype, "actual_cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], CorrectiveAction.prototype, "completion_percentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CorrectiveAction.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CorrectiveAction.prototype, "completion_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "progress_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "barriers_encountered", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "success_measures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "verification_evidence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], CorrectiveAction.prototype, "verified_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CorrectiveAction.prototype, "verification_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "verification_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CorrectiveAction.prototype, "follow_up_actions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CorrectiveAction.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CorrectiveAction.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ComplianceAssessment, assessment => assessment.corrective_actions),
    (0, typeorm_1.JoinColumn)({ name: 'compliance_assessment_id' }),
    __metadata("design:type", ComplianceAssessment)
], CorrectiveAction.prototype, "compliance_assessment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assigned_to' }),
    __metadata("design:type", typeof (_e = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _e : Object)
], CorrectiveAction.prototype, "assignee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'verified_by' }),
    __metadata("design:type", typeof (_f = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _f : Object)
], CorrectiveAction.prototype, "verifier", void 0);
exports.CorrectiveAction = CorrectiveAction = __decorate([
    (0, typeorm_1.Entity)('corrective_actions'),
    (0, typeorm_1.Index)(['compliance_assessment_id']),
    (0, typeorm_1.Index)(['action_type']),
    (0, typeorm_1.Index)(['priority']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['due_date'])
], CorrectiveAction);
let AccreditationStandard = class AccreditationStandard {
};
exports.AccreditationStandard = AccreditationStandard;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AccreditationStandard.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "accrediting_body", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "standard_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "standard_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "standard_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "standard_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], AccreditationStandard.prototype, "effective_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AccreditationStandard.prototype, "revision_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "intent_statement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "elements_of_performance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "rationale", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "scoring_guidance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "survey_procedures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "reference_materials", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationStandard.prototype, "related_standards", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AccreditationStandard.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AccreditationStandard.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AccreditationSurvey, survey => survey.accreditation_standard),
    __metadata("design:type", Array)
], AccreditationStandard.prototype, "accreditation_surveys", void 0);
exports.AccreditationStandard = AccreditationStandard = __decorate([
    (0, typeorm_1.Entity)('accreditation_standards'),
    (0, typeorm_1.Index)(['accrediting_body']),
    (0, typeorm_1.Index)(['standard_category']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['effective_date'])
], AccreditationStandard);
let AccreditationSurvey = class AccreditationSurvey {
};
exports.AccreditationSurvey = AccreditationSurvey;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AccreditationSurvey.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AccreditationSurvey.prototype, "accreditation_standard_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], AccreditationSurvey.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "survey_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], AccreditationSurvey.prototype, "survey_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "survey_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "surveyor_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "surveyor_organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "survey_scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "survey_methodology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "documentation_reviewed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "interviews_conducted", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "observations_made", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "compliance_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "deficiencies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "corrective_actions_required", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AccreditationSurvey.prototype, "response_due_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "organization_response", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AccreditationSurvey.prototype, "follow_up_survey_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], AccreditationSurvey.prototype, "accreditation_decision", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AccreditationSurvey.prototype, "accreditation_expiration_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AccreditationSurvey.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AccreditationSurvey.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => AccreditationStandard, standard => standard.accreditation_surveys),
    (0, typeorm_1.JoinColumn)({ name: 'accreditation_standard_id' }),
    __metadata("design:type", AccreditationStandard)
], AccreditationSurvey.prototype, "accreditation_standard", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], AccreditationSurvey.prototype, "facility", void 0);
exports.AccreditationSurvey = AccreditationSurvey = __decorate([
    (0, typeorm_1.Entity)('accreditation_surveys'),
    (0, typeorm_1.Index)(['accreditation_standard_id']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['survey_type']),
    (0, typeorm_1.Index)(['survey_date']),
    (0, typeorm_1.Index)(['survey_status'])
], AccreditationSurvey);
let ComplianceTraining = class ComplianceTraining {
};
exports.ComplianceTraining = ComplianceTraining;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ComplianceTraining.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], ComplianceTraining.prototype, "regulatory_requirement_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "training_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "training_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "training_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "target_audience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], ComplianceTraining.prototype, "training_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ComplianceTraining.prototype, "duration_minutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "learning_objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "training_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "trainer_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "training_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "completion_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ComplianceTraining.prototype, "required_attendees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ComplianceTraining.prototype, "actual_attendees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], ComplianceTraining.prototype, "completion_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], ComplianceTraining.prototype, "passing_score_required", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], ComplianceTraining.prototype, "average_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "assessment_results", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "participant_feedback", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ComplianceTraining.prototype, "training_effectiveness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], ComplianceTraining.prototype, "certification_expiration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], ComplianceTraining.prototype, "requires_recertification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ComplianceTraining.prototype, "recertification_interval_months", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], ComplianceTraining.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ComplianceTraining.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ComplianceTraining.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RegulatoryRequirement, requirement => requirement.compliance_trainings),
    (0, typeorm_1.JoinColumn)({ name: 'regulatory_requirement_id' }),
    __metadata("design:type", RegulatoryRequirement)
], ComplianceTraining.prototype, "regulatory_requirement", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", typeof (_g = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _g : Object)
], ComplianceTraining.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TrainingAttendance, attendance => attendance.compliance_training),
    __metadata("design:type", Array)
], ComplianceTraining.prototype, "training_attendances", void 0);
exports.ComplianceTraining = ComplianceTraining = __decorate([
    (0, typeorm_1.Entity)('compliance_training'),
    (0, typeorm_1.Index)(['regulatory_requirement_id']),
    (0, typeorm_1.Index)(['training_type']),
    (0, typeorm_1.Index)(['target_audience']),
    (0, typeorm_1.Index)(['training_date']),
    (0, typeorm_1.Index)(['completion_status'])
], ComplianceTraining);
let TrainingAttendance = class TrainingAttendance {
};
exports.TrainingAttendance = TrainingAttendance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TrainingAttendance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], TrainingAttendance.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TrainingAttendance.prototype, "compliance_training_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], TrainingAttendance.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], TrainingAttendance.prototype, "completion_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], TrainingAttendance.prototype, "completion_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], TrainingAttendance.prototype, "score_achieved", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], TrainingAttendance.prototype, "passed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], TrainingAttendance.prototype, "attempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TrainingAttendance.prototype, "last_attempt_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TrainingAttendance.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], TrainingAttendance.prototype, "certification_expiration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TrainingAttendance.prototype, "certificate_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], TrainingAttendance.prototype, "certificate_issued", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TrainingAttendance.prototype, "remedial_training_required", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TrainingAttendance.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TrainingAttendance.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ComplianceTraining, training => training.training_attendances),
    (0, typeorm_1.JoinColumn)({ name: 'compliance_training_id' }),
    __metadata("design:type", ComplianceTraining)
], TrainingAttendance.prototype, "compliance_training", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_h = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _h : Object)
], TrainingAttendance.prototype, "user", void 0);
exports.TrainingAttendance = TrainingAttendance = __decorate([
    (0, typeorm_1.Entity)('training_attendance'),
    (0, typeorm_1.Index)(['compliance_training_id']),
    (0, typeorm_1.Index)(['user_id']),
    (0, typeorm_1.Index)(['completion_date']),
    (0, typeorm_1.Index)(['completion_status'])
], TrainingAttendance);
let PolicyManagement = class PolicyManagement {
};
exports.PolicyManagement = PolicyManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PolicyManagement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PolicyManagement.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PolicyManagement.prototype, "regulatory_requirement_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PolicyManagement.prototype, "policy_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PolicyManagement.prototype, "policy_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PolicyManagement.prototype, "policy_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PolicyManagement.prototype, "policy_purpose", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PolicyManagement.prototype, "policy_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PolicyManagement.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PolicyManagement.prototype, "effective_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PolicyManagement.prototype, "review_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PolicyManagement.prototype, "expiration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PolicyManagement.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PolicyManagement.prototype, "revision_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PolicyManagement.prototype, "policy_owner", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PolicyManagement.prototype, "approval_workflow", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PolicyManagement.prototype, "approved_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PolicyManagement.prototype, "approved_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PolicyManagement.prototype, "distribution_list", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PolicyManagement.prototype, "training_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PolicyManagement.prototype, "related_policies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PolicyManagement.prototype, "attachments", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PolicyManagement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PolicyManagement.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RegulatoryRequirement),
    (0, typeorm_1.JoinColumn)({ name: 'regulatory_requirement_id' }),
    __metadata("design:type", RegulatoryRequirement)
], PolicyManagement.prototype, "regulatory_requirement", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'policy_owner' }),
    __metadata("design:type", typeof (_j = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _j : Object)
], PolicyManagement.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'approved_by' }),
    __metadata("design:type", typeof (_k = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _k : Object)
], PolicyManagement.prototype, "approver", void 0);
exports.PolicyManagement = PolicyManagement = __decorate([
    (0, typeorm_1.Entity)('policy_management'),
    (0, typeorm_1.Index)(['policy_category']),
    (0, typeorm_1.Index)(['regulatory_requirement_id']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['effective_date']),
    (0, typeorm_1.Index)(['review_date'])
], PolicyManagement);
//# sourceMappingURL=regulatory-compliance-accreditation.entity.js.map