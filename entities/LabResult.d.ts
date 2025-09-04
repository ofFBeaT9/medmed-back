export declare class LabResult {
    id: string;
    patientId: string;
    testType: string;
    testName: string;
    testCode: string;
    result: string;
    unit: string;
    referenceRange: string;
    status: string;
    interpretation: string;
    orderedBy: string;
    performedBy: string;
    testDate: Date;
    reportedDate: Date;
    attachments: string[];
    notes: string;
    createdAt: Date;
    patient: any;
}
