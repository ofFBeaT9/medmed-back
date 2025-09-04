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
exports.ApprovalStep = exports.ApprovalWorkflow = exports.WorkflowHistory = exports.TaskComment = exports.WorkflowTask = exports.WorkflowInstance = exports.WorkflowVersion = exports.Workflow = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const patient_entity_1 = require("./patient.entity");
let Workflow = class Workflow {
};
exports.Workflow = Workflow;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Workflow.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Workflow.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workflow.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Workflow.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Workflow.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], Workflow.prototype, "definition", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], Workflow.prototype, "configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'draft' }),
    __metadata("design:type", String)
], Workflow.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Workflow.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Workflow.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], Workflow.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], Workflow.prototype, "publishedById", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Workflow.prototype, "publishedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Workflow.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Workflow.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], Workflow.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'publishedById' }),
    __metadata("design:type", user_entity_1.User)
], Workflow.prototype, "publishedBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WorkflowInstance, (instance) => instance.workflow),
    __metadata("design:type", Array)
], Workflow.prototype, "instances", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WorkflowVersion, (version) => version.workflow),
    __metadata("design:type", Array)
], Workflow.prototype, "versions", void 0);
exports.Workflow = Workflow = __decorate([
    (0, typeorm_1.Entity)('workflows'),
    (0, typeorm_1.Index)(['type', 'status']),
    (0, typeorm_1.Index)(['department', 'isActive'])
], Workflow);
let WorkflowVersion = class WorkflowVersion {
};
exports.WorkflowVersion = WorkflowVersion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WorkflowVersion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], WorkflowVersion.prototype, "workflowId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkflowVersion.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], WorkflowVersion.prototype, "definition", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], WorkflowVersion.prototype, "configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WorkflowVersion.prototype, "changeNotes", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], WorkflowVersion.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WorkflowVersion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Workflow),
    (0, typeorm_1.JoinColumn)({ name: 'workflowId' }),
    __metadata("design:type", Workflow)
], WorkflowVersion.prototype, "workflow", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], WorkflowVersion.prototype, "createdBy", void 0);
exports.WorkflowVersion = WorkflowVersion = __decorate([
    (0, typeorm_1.Entity)('workflow_versions')
], WorkflowVersion);
let WorkflowInstance = class WorkflowInstance {
};
exports.WorkflowInstance = WorkflowInstance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WorkflowInstance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], WorkflowInstance.prototype, "workflowId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkflowInstance.prototype, "workflowVersion", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], WorkflowInstance.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], WorkflowInstance.prototype, "context", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'running' }),
    __metadata("design:type", String)
], WorkflowInstance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WorkflowInstance.prototype, "currentStep", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], WorkflowInstance.prototype, "completedSteps", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], WorkflowInstance.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], WorkflowInstance.prototype, "initiatedById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WorkflowInstance.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], WorkflowInstance.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Workflow),
    (0, typeorm_1.JoinColumn)({ name: 'workflowId' }),
    __metadata("design:type", Workflow)
], WorkflowInstance.prototype, "workflow", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_entity_1.Patient)
], WorkflowInstance.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'initiatedById' }),
    __metadata("design:type", user_entity_1.User)
], WorkflowInstance.prototype, "initiatedBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WorkflowTask, (task) => task.workflowInstance),
    __metadata("design:type", Array)
], WorkflowInstance.prototype, "tasks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WorkflowHistory, (history) => history.workflowInstance),
    __metadata("design:type", Array)
], WorkflowInstance.prototype, "history", void 0);
exports.WorkflowInstance = WorkflowInstance = __decorate([
    (0, typeorm_1.Entity)('workflow_instances'),
    (0, typeorm_1.Index)(['workflowId', 'status']),
    (0, typeorm_1.Index)(['patientId', 'createdAt'])
], WorkflowInstance);
let WorkflowTask = class WorkflowTask {
};
exports.WorkflowTask = WorkflowTask;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WorkflowTask.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], WorkflowTask.prototype, "workflowInstanceId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkflowTask.prototype, "taskDefinitionId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkflowTask.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WorkflowTask.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkflowTask.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pending' }),
    __metadata("design:type", String)
], WorkflowTask.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkflowTask.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], WorkflowTask.prototype, "assignedToId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], WorkflowTask.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], WorkflowTask.prototype, "formData", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], WorkflowTask.prototype, "configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], WorkflowTask.prototype, "startedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], WorkflowTask.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WorkflowTask.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], WorkflowTask.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => WorkflowInstance),
    (0, typeorm_1.JoinColumn)({ name: 'workflowInstanceId' }),
    __metadata("design:type", WorkflowInstance)
], WorkflowTask.prototype, "workflowInstance", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'assignedToId' }),
    __metadata("design:type", user_entity_1.User)
], WorkflowTask.prototype, "assignedTo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TaskComment, (comment) => comment.task),
    __metadata("design:type", Array)
], WorkflowTask.prototype, "comments", void 0);
exports.WorkflowTask = WorkflowTask = __decorate([
    (0, typeorm_1.Entity)('workflow_tasks'),
    (0, typeorm_1.Index)(['instanceId', 'status']),
    (0, typeorm_1.Index)(['assignedToId', 'dueDate'])
], WorkflowTask);
let TaskComment = class TaskComment {
};
exports.TaskComment = TaskComment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TaskComment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], TaskComment.prototype, "taskId", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], TaskComment.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], TaskComment.prototype, "authorId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TaskComment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => WorkflowTask),
    (0, typeorm_1.JoinColumn)({ name: 'taskId' }),
    __metadata("design:type", WorkflowTask)
], TaskComment.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'authorId' }),
    __metadata("design:type", user_entity_1.User)
], TaskComment.prototype, "author", void 0);
exports.TaskComment = TaskComment = __decorate([
    (0, typeorm_1.Entity)('task_comments')
], TaskComment);
let WorkflowHistory = class WorkflowHistory {
};
exports.WorkflowHistory = WorkflowHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WorkflowHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], WorkflowHistory.prototype, "workflowInstanceId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkflowHistory.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkflowHistory.prototype, "stepId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WorkflowHistory.prototype, "stepName", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], WorkflowHistory.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], WorkflowHistory.prototype, "eventData", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WorkflowHistory.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => WorkflowInstance),
    (0, typeorm_1.JoinColumn)({ name: 'workflowInstanceId' }),
    __metadata("design:type", WorkflowInstance)
], WorkflowHistory.prototype, "workflowInstance", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], WorkflowHistory.prototype, "user", void 0);
exports.WorkflowHistory = WorkflowHistory = __decorate([
    (0, typeorm_1.Entity)('workflow_history'),
    (0, typeorm_1.Index)(['workflowInstanceId', 'createdAt'])
], WorkflowHistory);
let ApprovalWorkflow = class ApprovalWorkflow {
};
exports.ApprovalWorkflow = ApprovalWorkflow;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ApprovalWorkflow.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ApprovalWorkflow.prototype, "entityType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ApprovalWorkflow.prototype, "entityId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ApprovalWorkflow.prototype, "approvalType", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pending' }),
    __metadata("design:type", String)
], ApprovalWorkflow.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], ApprovalWorkflow.prototype, "approvers", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], ApprovalWorkflow.prototype, "approvals", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], ApprovalWorkflow.prototype, "finalApprovedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { nullable: true }),
    __metadata("design:type", String)
], ApprovalWorkflow.prototype, "finalApprovedById", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], ApprovalWorkflow.prototype, "requestedById", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalWorkflow.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalWorkflow.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'requestedById' }),
    __metadata("design:type", user_entity_1.User)
], ApprovalWorkflow.prototype, "requestedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'finalApprovedById' }),
    __metadata("design:type", user_entity_1.User)
], ApprovalWorkflow.prototype, "finalApprovedBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ApprovalStep, (step) => step.approvalWorkflow),
    __metadata("design:type", Array)
], ApprovalWorkflow.prototype, "steps", void 0);
exports.ApprovalWorkflow = ApprovalWorkflow = __decorate([
    (0, typeorm_1.Entity)('approval_workflows'),
    (0, typeorm_1.Index)(['entityType', 'entityId'])
], ApprovalWorkflow);
let ApprovalStep = class ApprovalStep {
};
exports.ApprovalStep = ApprovalStep;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ApprovalStep.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], ApprovalStep.prototype, "approvalWorkflowId", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], ApprovalStep.prototype, "approverId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ApprovalStep.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pending' }),
    __metadata("design:type", String)
], ApprovalStep.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ApprovalStep.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], ApprovalStep.prototype, "approvedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalStep.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ApprovalWorkflow),
    (0, typeorm_1.JoinColumn)({ name: 'approvalWorkflowId' }),
    __metadata("design:type", ApprovalWorkflow)
], ApprovalStep.prototype, "approvalWorkflow", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'approverId' }),
    __metadata("design:type", user_entity_1.User)
], ApprovalStep.prototype, "approver", void 0);
exports.ApprovalStep = ApprovalStep = __decorate([
    (0, typeorm_1.Entity)('approval_steps')
], ApprovalStep);
//# sourceMappingURL=workflow-management.entity.js.map