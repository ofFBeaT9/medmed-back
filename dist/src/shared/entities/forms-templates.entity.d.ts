import { User } from './user.entity';
import { Patient } from './patient.entity';
export declare class FormTemplate {
    id: string;
    name: string;
    description: string;
    category: string;
    version: string;
    structure: any;
    validation: any;
    styling: any;
    logic: any;
    isActive: boolean;
    isPublished: boolean;
    publishedAt: Date;
    createdById: string;
    publishedById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
    publishedBy: User;
    submissions: FormSubmission[];
    versions: FormTemplateVersion[];
}
export declare class FormTemplateVersion {
    id: string;
    templateId: string;
    version: string;
    structure: any;
    validation: any;
    styling: any;
    logic: any;
    changeNotes: string;
    createdById: string;
    createdAt: Date;
    template: FormTemplate;
    createdBy: User;
}
export declare class FormSubmission {
    id: string;
    templateId: string;
    templateVersion: string;
    patientId: string;
    data: any;
    status: string;
    submittedAt: Date;
    submittedById: string;
    reviewedById: string;
    reviewedAt: Date;
    reviewNotes: string;
    ipAddress: string;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
    template: FormTemplate;
    patient: Patient;
    submittedBy: User;
    reviewedBy: User;
    files: FormSubmissionFile[];
}
export declare class FormSubmissionFile {
    id: string;
    submissionId: string;
    fieldName: string;
    fileName: string;
    originalName: string;
    mimeType: string;
    fileSize: number;
    filePath: string;
    createdAt: Date;
    submission: FormSubmission;
}
export declare class Questionnaire {
    id: string;
    name: string;
    description: string;
    type: string;
    category: string;
    questions: any;
    scoring: any;
    interpretation: any;
    isActive: boolean;
    isStandardized: boolean;
    standardReference: string;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
    responses: QuestionnaireResponse[];
}
export declare class QuestionnaireResponse {
    id: string;
    questionnaireId: string;
    patientId: string;
    answers: any;
    scores: any;
    totalScore: number;
    interpretation: string;
    status: string;
    completedAt: Date;
    administeredById: string;
    createdAt: Date;
    updatedAt: Date;
    questionnaire: Questionnaire;
    patient: Patient;
    administeredBy: User;
}
export declare class ClinicalProtocol {
    id: string;
    name: string;
    description: string;
    specialty: string;
    category: string;
    steps: any;
    criteria: any;
    medications: any;
    orders: any;
    isActive: boolean;
    evidenceLevel: string;
    references: string;
    createdById: string;
    approvedById: string;
    approvedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
    approvedBy: User;
    executions: ProtocolExecution[];
}
export declare class ProtocolExecution {
    id: string;
    protocolId: string;
    patientId: string;
    currentStep: any;
    completedSteps: any;
    deviations: any;
    status: string;
    completedAt: Date;
    initiatedById: string;
    createdAt: Date;
    updatedAt: Date;
    protocol: ClinicalProtocol;
    patient: Patient;
    initiatedBy: User;
}
