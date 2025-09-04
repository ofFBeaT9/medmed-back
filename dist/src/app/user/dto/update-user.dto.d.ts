import { UserRole } from '../../../shared/enums/user-role.enum';
export declare class UpdateUserDto {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    specialization?: string;
    licenseNumber?: string;
    profileImage?: string;
}
export declare class UpdateUserRoleDto {
    role: UserRole;
}
export declare class UpdateUserStatusDto {
    isActive: boolean;
}
