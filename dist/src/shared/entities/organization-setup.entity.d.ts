import { User } from './user.entity';
export declare class Facility {
    id: string;
    name: string;
    description: string;
    facilityType: string;
    npi: string;
    taxId: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
    fax: string;
    email: string;
    website: string;
    isActive: boolean;
    operatingHours: any;
    services: any;
    accreditations: any;
    createdAt: Date;
    updatedAt: Date;
    departments: Department[];
    facilityUsers: FacilityUser[];
}
export declare class Department {
    id: string;
    name: string;
    description: string;
    facilityId: string;
    headOfDepartmentId: string;
    isActive: boolean;
    location: string;
    phone: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    facility: Facility;
    headOfDepartment: User;
    departmentUsers: DepartmentUser[];
}
export declare class FacilityUser {
    id: string;
    facilityId: string;
    userId: string;
    isActive: boolean;
    isPrimary: boolean;
    createdAt: Date;
    facility: Facility;
    user: User;
}
export declare class DepartmentUser {
    id: string;
    departmentId: string;
    userId: string;
    isActive: boolean;
    createdAt: Date;
    department: Department;
    user: User;
}
export declare class InsuranceCompany {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    fax: string;
    email: string;
    website: string;
    claimsAddress: string;
    eligibilityEndpoint: string;
    claimsEndpoint: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class GlobalSetting {
    id: string;
    settingKey: string;
    settingValue: string;
    description: string;
    category: string;
    dataType: string;
    isEncrypted: boolean;
    modifiedById: string;
    createdAt: Date;
    updatedAt: Date;
    modifiedBy: User;
}
export declare class UserPreference {
    id: string;
    userId: string;
    preferenceKey: string;
    preferenceValue: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
export declare class ListOption {
    id: string;
    listId: string;
    optionId: string;
    title: string;
    notes: string;
    sortOrder: number;
    isActive: boolean;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class CodeType {
    id: string;
    codeType: string;
    codeTypeName: string;
    description: string;
    isActive: boolean;
    externalUrl: string;
    createdAt: Date;
    updatedAt: Date;
    codes: Code[];
}
export declare class Code {
    id: string;
    codeTypeId: string;
    code: string;
    description: string;
    longDescription: string;
    isActive: boolean;
    isSelectable: boolean;
    createdAt: Date;
    updatedAt: Date;
    codeType: CodeType;
}
