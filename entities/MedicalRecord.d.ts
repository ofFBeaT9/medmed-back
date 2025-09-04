export declare class MedicalRecord {
    id: string;
    patientId: string;
    recordType: string;
    title: string;
    description: string;
    diagnosis: string;
    treatment: string;
    medications: string;
    followUpInstructions: string;
    recordedBy: string;
    department: string;
    recordDate: Date;
    attachments: string[];
    status: string;
    createdAt: Date;
    updatedAt: Date;
    patient: any;
}
