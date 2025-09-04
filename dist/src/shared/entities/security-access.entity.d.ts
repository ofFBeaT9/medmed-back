import { User } from './user.entity';
export declare class AuditLog {
    id: string;
    entityType: string;
    entityId: string;
    action: string;
    userId: string;
    ipAddress: string;
    userAgent: string;
    oldValues: any;
    newValues: any;
    sessionId: string;
    module: string;
    facility: string;
    createdAt: Date;
    user: User;
}
export declare class AccessControlList {
    id: string;
    objectType: string;
    objectId: string;
    userId: string;
    permissions: any;
    grantedById: string;
    expiresAt: Date;
    createdAt: Date;
    user: User;
    grantedBy: User;
}
export declare class Role {
    id: string;
    name: string;
    description: string;
    permissions: any;
    isActive: boolean;
    isSystemRole: boolean;
    createdAt: Date;
    updatedAt: Date;
    userRoles: UserRole[];
}
export declare class UserRole {
    id: string;
    userId: string;
    roleId: string;
    assignedById: string;
    expiresAt: Date;
    createdAt: Date;
    user: User;
    role: Role;
    assignedBy: User;
}
export declare class Session {
    id: string;
    sessionToken: string;
    userId: string;
    ipAddress: string;
    userAgent: string;
    isActive: boolean;
    expiresAt: Date;
    lastActivityAt: Date;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
export declare class PasswordResetToken {
    id: string;
    userId: string;
    token: string;
    expiresAt: Date;
    isUsed: boolean;
    usedAt: Date;
    createdAt: Date;
    user: User;
}
export declare class LoginAttempt {
    id: string;
    username: string;
    ipAddress: string;
    userAgent: string;
    isSuccessful: boolean;
    failureReason: string;
    createdAt: Date;
}
export declare class SecuritySetting {
    id: string;
    settingKey: string;
    settingValue: string;
    description: string;
    category: string;
    modifiedById: string;
    createdAt: Date;
    updatedAt: Date;
    modifiedBy: User;
}
