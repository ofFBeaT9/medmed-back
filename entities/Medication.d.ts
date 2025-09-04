export declare class Medication {
    id: string;
    patientId: string;
    medicationName: string;
    genericName: string;
    dosage: string;
    frequency: string;
    route: string;
    form: string;
    instructions: string;
    prescribedBy: string;
    startDate: Date;
    endDate: Date;
    status: string;
    reason: string;
    sideEffects: string;
    notes: string;
    refillsRemaining: number;
    lastRefillDate: Date;
    createdAt: Date;
    updatedAt: Date;
    patient: any;
}
