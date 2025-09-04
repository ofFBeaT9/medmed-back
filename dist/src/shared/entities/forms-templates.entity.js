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
exports.ProtocolExecution = exports.ClinicalProtocol = exports.QuestionnaireResponse = exports.Questionnaire = exports.FormSubmissionFile = exports.FormSubmission = exports.FormTemplateVersion = exports.FormTemplate = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const patient_entity_1 = require("./patient.entity");
let FormTemplate = class FormTemplate {
};
exports.FormTemplate = FormTemplate;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FormTemplate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormTemplate.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FormTemplate.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormTemplate.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormTemplate.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], FormTemplate.prototype, "structure", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], FormTemplate.prototype, "validation", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], FormTemplate.prototype, "styling", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], FormTemplate.prototype, "logic", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], FormTemplate.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FormTemplate.prototype, "isPublished", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], FormTemplate.prototype, "publishedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], FormTemplate.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], FormTemplate.prototype, "publishedById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FormTemplate.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FormTemplate.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], FormTemplate.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'publishedById' }),
    __metadata("design:type", user_entity_1.User)
], FormTemplate.prototype, "publishedBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FormSubmission, (submission) => submission.template),
    __metadata("design:type", Array)
], FormTemplate.prototype, "submissions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FormTemplateVersion, (version) => version.template),
    __metadata("design:type", Array)
], FormTemplate.prototype, "versions", void 0);
exports.FormTemplate = FormTemplate = __decorate([
    (0, typeorm_1.Entity)('form_templates'),
    (0, typeorm_1.Index)(['category', 'isActive'])
], FormTemplate);
let FormTemplateVersion = class FormTemplateVersion {
};
exports.FormTemplateVersion = FormTemplateVersion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FormTemplateVersion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], FormTemplateVersion.prototype, "templateId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormTemplateVersion.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], FormTemplateVersion.prototype, "structure", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], FormTemplateVersion.prototype, "validation", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], FormTemplateVersion.prototype, "styling", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], FormTemplateVersion.prototype, "logic", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FormTemplateVersion.prototype, "changeNotes", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], FormTemplateVersion.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FormTemplateVersion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => FormTemplate),
    (0, typeorm_1.JoinColumn)({ name: 'templateId' }),
    __metadata("design:type", FormTemplate)
], FormTemplateVersion.prototype, "template", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], FormTemplateVersion.prototype, "createdBy", void 0);
exports.FormTemplateVersion = FormTemplateVersion = __decorate([
    (0, typeorm_1.Entity)('form_template_versions')
], FormTemplateVersion);
let FormSubmission = class FormSubmission {
};
exports.FormSubmission = FormSubmission;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FormSubmission.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], FormSubmission.prototype, "templateId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormSubmission.prototype, "templateVersion", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], FormSubmission.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], FormSubmission.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'draft' }),
    __metadata("design:type", String)
], FormSubmission.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], FormSubmission.prototype, "submittedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], FormSubmission.prototype, "submittedById", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], FormSubmission.prototype, "reviewedById", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], FormSubmission.prototype, "reviewedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FormSubmission.prototype, "reviewNotes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FormSubmission.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FormSubmission.prototype, "userAgent", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FormSubmission.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FormSubmission.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => FormTemplate),
    (0, typeorm_1.JoinColumn)({ name: 'templateId' }),
    __metadata("design:type", FormTemplate)
], FormSubmission.prototype, "template", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_entity_1.Patient)
], FormSubmission.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'submittedById' }),
    __metadata("design:type", user_entity_1.User)
], FormSubmission.prototype, "submittedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'reviewedById' }),
    __metadata("design:type", user_entity_1.User)
], FormSubmission.prototype, "reviewedBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FormSubmissionFile, (file) => file.submission),
    __metadata("design:type", Array)
], FormSubmission.prototype, "files", void 0);
exports.FormSubmission = FormSubmission = __decorate([
    (0, typeorm_1.Entity)('form_submissions'),
    (0, typeorm_1.Index)(['templateId', 'status']),
    (0, typeorm_1.Index)(['patientId', 'submittedAt'])
], FormSubmission);
let FormSubmissionFile = class FormSubmissionFile {
};
exports.FormSubmissionFile = FormSubmissionFile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FormSubmissionFile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], FormSubmissionFile.prototype, "submissionId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormSubmissionFile.prototype, "fieldName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormSubmissionFile.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormSubmissionFile.prototype, "originalName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormSubmissionFile.prototype, "mimeType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], FormSubmissionFile.prototype, "fileSize", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormSubmissionFile.prototype, "filePath", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FormSubmissionFile.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => FormSubmission),
    (0, typeorm_1.JoinColumn)({ name: 'submissionId' }),
    __metadata("design:type", FormSubmission)
], FormSubmissionFile.prototype, "submission", void 0);
exports.FormSubmissionFile = FormSubmissionFile = __decorate([
    (0, typeorm_1.Entity)('form_submission_files')
], FormSubmissionFile);
let Questionnaire = class Questionnaire {
};
exports.Questionnaire = Questionnaire;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Questionnaire.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Questionnaire.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Questionnaire.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Questionnaire.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Questionnaire.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], Questionnaire.prototype, "questions", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], Questionnaire.prototype, "scoring", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], Questionnaire.prototype, "interpretation", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Questionnaire.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Questionnaire.prototype, "isStandardized", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Questionnaire.prototype, "standardReference", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], Questionnaire.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Questionnaire.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Questionnaire.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], Questionnaire.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => QuestionnaireResponse, (response) => response.questionnaire),
    __metadata("design:type", Array)
], Questionnaire.prototype, "responses", void 0);
exports.Questionnaire = Questionnaire = __decorate([
    (0, typeorm_1.Entity)('questionnaires'),
    (0, typeorm_1.Index)(['type', 'isActive'])
], Questionnaire);
let QuestionnaireResponse = class QuestionnaireResponse {
};
exports.QuestionnaireResponse = QuestionnaireResponse;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuestionnaireResponse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], QuestionnaireResponse.prototype, "questionnaireId", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], QuestionnaireResponse.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], QuestionnaireResponse.prototype, "answers", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], QuestionnaireResponse.prototype, "scores", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], QuestionnaireResponse.prototype, "totalScore", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], QuestionnaireResponse.prototype, "interpretation", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'in_progress' }),
    __metadata("design:type", String)
], QuestionnaireResponse.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], QuestionnaireResponse.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], QuestionnaireResponse.prototype, "administeredById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuestionnaireResponse.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuestionnaireResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Questionnaire),
    (0, typeorm_1.JoinColumn)({ name: 'questionnaireId' }),
    __metadata("design:type", Questionnaire)
], QuestionnaireResponse.prototype, "questionnaire", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_entity_1.Patient)
], QuestionnaireResponse.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'administeredById' }),
    __metadata("design:type", user_entity_1.User)
], QuestionnaireResponse.prototype, "administeredBy", void 0);
exports.QuestionnaireResponse = QuestionnaireResponse = __decorate([
    (0, typeorm_1.Entity)('questionnaire_responses'),
    (0, typeorm_1.Index)(['questionnaireId', 'patientId']),
    (0, typeorm_1.Index)(['completedAt'])
], QuestionnaireResponse);
let ClinicalProtocol = class ClinicalProtocol {
};
exports.ClinicalProtocol = ClinicalProtocol;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ClinicalProtocol.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClinicalProtocol.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ClinicalProtocol.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClinicalProtocol.prototype, "specialty", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClinicalProtocol.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], ClinicalProtocol.prototype, "steps", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], ClinicalProtocol.prototype, "criteria", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], ClinicalProtocol.prototype, "medications", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], ClinicalProtocol.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ClinicalProtocol.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ClinicalProtocol.prototype, "evidenceLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], ClinicalProtocol.prototype, "references", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], ClinicalProtocol.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], ClinicalProtocol.prototype, "approvedById", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], ClinicalProtocol.prototype, "approvedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalProtocol.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicalProtocol.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], ClinicalProtocol.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'approvedById' }),
    __metadata("design:type", user_entity_1.User)
], ClinicalProtocol.prototype, "approvedBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProtocolExecution, (execution) => execution.protocol),
    __metadata("design:type", Array)
], ClinicalProtocol.prototype, "executions", void 0);
exports.ClinicalProtocol = ClinicalProtocol = __decorate([
    (0, typeorm_1.Entity)('clinical_protocols'),
    (0, typeorm_1.Index)(['specialty', 'isActive'])
], ClinicalProtocol);
let ProtocolExecution = class ProtocolExecution {
};
exports.ProtocolExecution = ProtocolExecution;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProtocolExecution.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], ProtocolExecution.prototype, "protocolId", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], ProtocolExecution.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], ProtocolExecution.prototype, "currentStep", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], ProtocolExecution.prototype, "completedSteps", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], ProtocolExecution.prototype, "deviations", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'active' }),
    __metadata("design:type", String)
], ProtocolExecution.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], ProtocolExecution.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], ProtocolExecution.prototype, "initiatedById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProtocolExecution.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProtocolExecution.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ClinicalProtocol),
    (0, typeorm_1.JoinColumn)({ name: 'protocolId' }),
    __metadata("design:type", ClinicalProtocol)
], ProtocolExecution.prototype, "protocol", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_entity_1.Patient)
], ProtocolExecution.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'initiatedById' }),
    __metadata("design:type", user_entity_1.User)
], ProtocolExecution.prototype, "initiatedBy", void 0);
exports.ProtocolExecution = ProtocolExecution = __decorate([
    (0, typeorm_1.Entity)('protocol_executions'),
    (0, typeorm_1.Index)(['protocolId', 'patientId'])
], ProtocolExecution);
//# sourceMappingURL=forms-templates.entity.js.map