import { User } from './user.entity';
import { Patient } from './patient.entity';
export declare class ClinicalPlan {
    id: string;
    patientId: number;
    normalFlag: number;
    cqmFlag: number;
    cqm2011Flag: number;
    cqm2014Flag: number;
    cqmMeasureGroup: string;
    patient: Patient;
}
export declare class ClinicalRule {
    id: string;
    patientId: number;
    activeAlertFlag: number;
    passiveAlertFlag: number;
    cqmFlag: number;
    cqm2011Flag: number;
    cqm2014Flag: number;
    cqmNqfCode: string;
    cqmPqriCode: string;
    amcFlag: number;
    amc2011Flag: number;
    amc2014Flag: number;
    amc2015Flag: number;
    amcCode: string;
    amcCode2014: string;
    amcCode2015: string;
    amc2014Stage1Flag: number;
    amc2014Stage2Flag: number;
    patientReminderFlag: number;
    bibliographicCitation: string;
    developer: string;
    fundingSource: string;
    releaseVersion: string;
    webReference: string;
    linkedReferentialCds: string;
    accessControl: string;
    patientDobUsage: string;
    patientEthnicityUsage: string;
    patientHealthStatusUsage: string;
    patientGenderIdentityUsage: string;
    patientLanguageUsage: string;
    patientRaceUsage: string;
    patientSexUsage: string;
    patientSexualOrientationUsage: string;
    patientSodhUsage: string;
    patient: Patient;
}
export declare class ClinicalRulesLog {
    id: number;
    date: Date;
    patientId: number;
    userId: number;
    category: string;
    value: string;
    newValue: string;
    facilityId: number;
    patient: Patient;
    user: User;
}
export declare class CodeSystem {
    id: number;
    codeText: string;
    codeTextShort: string;
    code: string;
    codeType: number;
    modifier: string;
    units: number;
    fee: number;
    superbill: string;
    relatedCode: string;
    taxrates: string;
    cypFactor: number;
    active: number;
    reportable: number;
    financialReporting: number;
    revenueCode: string;
}
export declare class DocumentCategory {
    id: number;
    name: string;
    value: string;
    parent: number;
    lft: number;
    rght: number;
    acoSpec: string;
    codes: string;
    parentCategory: DocumentCategory;
    children: DocumentCategory[];
}
export declare class BackgroundService {
    name: string;
    title: string;
    active: number;
    running: number;
    nextRun: Date;
    executeInterval: number;
    functionName: string;
    requireOnce: string;
    sortOrder: number;
}
