import { User } from './user.entity';
import { Patient } from './patient.entity';
export declare class AuditMaster {
    id: number;
    patientId: number;
    userId: number;
    approvalStatus: number;
    comments: string;
    createdTime: Date;
    modifiedTime: Date;
    ipAddress: string;
    type: number;
    isQrdaDocument: boolean;
    isUnstructuredDocument: boolean;
    user: User;
    patient: Patient;
}
export declare class AuditDetails {
    id: number;
    tableName: string;
    fieldName: string;
    fieldValue: string;
    auditMasterId: number;
    entryIdentification: string;
    auditMaster: AuditMaster;
}
export declare class ApiLog {
    id: number;
    logId: number;
    userId: number;
    patientId: number;
    ipAddress: string;
    method: string;
    request: string;
    requestUrl: string;
    requestBody: string;
    response: string;
    createdTime: Date;
    user: User;
    patient: Patient;
}
export declare class ApiToken {
    id: number;
    userId: string;
    token: string;
    expiry: Date;
    clientId: string;
    scope: string;
    revoked: number;
    context: string;
}
export declare class ApiRefreshToken {
    id: number;
    userId: string;
    clientId: string;
    token: string;
    expiry: Date;
    revoked: number;
}
