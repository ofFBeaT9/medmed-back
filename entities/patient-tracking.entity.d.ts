export declare class PatientTrackingSession {
    id: string;
    patientId: string;
    sessionType: string;
    status: string;
    priority: string;
    assignedUnit: string;
    assignedRoom: string;
    assignedBed: string;
    primaryPhysician: string;
    attendingNurse: string;
    careTeam: string[];
    chiefComplaint: string;
    admissionNotes: string;
    currentTreatmentPlan: string;
    startDate: Date;
    estimatedEndDate: Date;
    actualEndDate: Date;
    trackingParameters: {
        vitalSignsFrequency: number;
        labOrderFrequency: number;
        assessmentFrequency: number;
        medicationSchedule: string[];
        specialInstructions: string[];
        dietaryRestrictions: string[];
        activityRestrictions: string[];
    };
    events: PatientTrackingEvent[];
    alerts: PatientTrackingAlert[];
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    lastUpdatedBy: string;
}
export declare class PatientTrackingEvent {
    id: string;
    sessionId: string;
    session: PatientTrackingSession;
    eventType: string;
    severity: string;
    title: string;
    description: string;
    eventData: {
        vitalSigns?: {
            heartRate?: number;
            bloodPressure?: {
                systolic: number;
                diastolic: number;
            };
            temperature?: number;
            respiratoryRate?: number;
            oxygenSaturation?: number;
            painLevel?: number;
            consciousness?: string;
        };
        medication?: {
            name: string;
            dosage: string;
            route: string;
            administeredBy: string;
            scheduledTime: string;
            actualTime: string;
        };
        assessment?: {
            assessmentType: string;
            findings: string;
            recommendations: string;
            followUpRequired: boolean;
        };
        procedure?: {
            procedureName: string;
            performedBy: string;
            duration: number;
            outcome: string;
            complications?: string;
        };
        labOrder?: {
            tests: string[];
            priority: string;
            expectedResults: string;
            orderedBy: string;
        };
    };
    timestamp: Date;
    recordedBy: string;
    location: string;
    requiresFollowUp: boolean;
    followUpDue: Date;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class PatientTrackingAlert {
    id: string;
    sessionId: string;
    session: PatientTrackingSession;
    alertType: string;
    severity: string;
    priority: string;
    title: string;
    message: string;
    alertData: {
        thresholdBreached?: {
            parameter: string;
            currentValue: number;
            thresholdValue: number;
            direction: 'above' | 'below';
        };
        medicationDue?: {
            medicationName: string;
            scheduledTime: string;
            overdueDuration: number;
        };
        assessmentOverdue?: {
            assessmentType: string;
            lastPerformed: string;
            overdueDuration: number;
        };
        labCritical?: {
            testName: string;
            result: string;
            criticalRange: string;
        };
    };
    isActive: boolean;
    isAcknowledged: boolean;
    acknowledgedBy: string;
    acknowledgedAt: Date;
    acknowledgmentNotes: string;
    isResolved: boolean;
    resolvedBy: string;
    resolvedAt: Date;
    resolutionNotes: string;
    escalatedAt: Date;
    escalatedTo: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class PatientCarePlan {
    id: string;
    sessionId: string;
    session: PatientTrackingSession;
    planTitle: string;
    planDescription: string;
    goals: {
        id: string;
        description: string;
        targetDate: string;
        priority: string;
        status: string;
        measurableOutcome: string;
    }[];
    interventions: {
        id: string;
        description: string;
        frequency: string;
        assignedTo: string;
        status: string;
        lastPerformed?: string;
        nextDue?: string;
    }[];
    progressNotes: {
        id: string;
        date: string;
        note: string;
        recordedBy: string;
        category: string;
    }[];
    status: string;
    startDate: Date;
    endDate: Date;
    createdBy: string;
    lastReviewedBy: string;
    lastReviewedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare class PatientTrackingMetric {
    id: string;
    sessionId: string;
    session: PatientTrackingSession;
    metricType: string;
    metricName: string;
    value: number;
    unit: string;
    benchmark: string;
    metadata: {
        calculationMethod?: string;
        dataSource?: string;
        qualityIndicator?: boolean;
        riskFactor?: string;
        improvementTarget?: number;
    };
    timestamp: Date;
    recordedBy: string;
    createdAt: Date;
}
export declare class PatientResourceUtilization {
    id: string;
    sessionId: string;
    session: PatientTrackingSession;
    resourceType: string;
    resourceName: string;
    quantity: number;
    unit: string;
    costPerUnit: number;
    totalCost: number;
    assignedProvider: string;
    department: string;
    timestamp: Date;
    recordedBy: string;
    createdAt: Date;
}
