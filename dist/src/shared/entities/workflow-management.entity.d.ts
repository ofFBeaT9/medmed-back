import { User } from './user.entity';
import { Patient } from './patient.entity';
export declare class Workflow {
    id: string;
    name: string;
    description: string;
    type: string;
    department: string;
    definition: any;
    configuration: any;
    status: string;
    isActive: boolean;
    version: string;
    createdById: string;
    publishedById: string;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
    publishedBy: User;
    instances: WorkflowInstance[];
    versions: WorkflowVersion[];
}
export declare class WorkflowVersion {
    id: string;
    workflowId: string;
    version: string;
    definition: any;
    configuration: any;
    changeNotes: string;
    createdById: string;
    createdAt: Date;
    workflow: Workflow;
    createdBy: User;
}
export declare class WorkflowInstance {
    id: string;
    workflowId: string;
    workflowVersion: string;
    patientId: string;
    context: any;
    status: string;
    currentStep: string;
    completedSteps: any;
    completedAt: Date;
    initiatedById: string;
    createdAt: Date;
    updatedAt: Date;
    workflow: Workflow;
    patient: Patient;
    initiatedBy: User;
    tasks: WorkflowTask[];
    history: WorkflowHistory[];
}
export declare class WorkflowTask {
    id: string;
    workflowInstanceId: string;
    taskDefinitionId: string;
    name: string;
    description: string;
    type: string;
    status: string;
    priority: string;
    assignedToId: string;
    dueDate: Date;
    formData: any;
    configuration: any;
    startedAt: Date;
    completedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    workflowInstance: WorkflowInstance;
    assignedTo: User;
    comments: TaskComment[];
}
export declare class TaskComment {
    id: string;
    taskId: string;
    content: string;
    authorId: string;
    createdAt: Date;
    task: WorkflowTask;
    author: User;
}
export declare class WorkflowHistory {
    id: string;
    workflowInstanceId: string;
    eventType: string;
    stepId: string;
    stepName: string;
    userId: string;
    eventData: any;
    createdAt: Date;
    workflowInstance: WorkflowInstance;
    user: User;
}
export declare class ApprovalWorkflow {
    id: string;
    entityType: string;
    entityId: string;
    approvalType: string;
    status: string;
    approvers: any;
    approvals: any;
    finalApprovedAt: Date;
    finalApprovedById: string;
    requestedById: string;
    createdAt: Date;
    updatedAt: Date;
    requestedBy: User;
    finalApprovedBy: User;
    steps: ApprovalStep[];
}
export declare class ApprovalStep {
    id: string;
    approvalWorkflowId: string;
    approverId: string;
    order: number;
    status: string;
    comments: string;
    approvedAt: Date;
    createdAt: Date;
    approvalWorkflow: ApprovalWorkflow;
    approver: User;
}
