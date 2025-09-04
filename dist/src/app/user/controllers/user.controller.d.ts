import { UserService } from '../services/user.service';
import { UpdateUserDto, UpdateUserRoleDto, UpdateUserStatusDto } from '../dto/update-user.dto';
import { PaginationDto } from '../../../shared/dtos/pagination.dto';
import { User } from '../../../shared/entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(paginationDto: PaginationDto): Promise<import("../../../shared/dtos/pagination.dto").PaginatedResponse<Partial<User>>>;
    getUserStats(): Promise<{
        totalUsers: number;
        totalPatients: number;
        totalDoctors: number;
        totalAdmins: number;
        activeUsers: number;
        verifiedUsers: number;
    }>;
    findDoctors(paginationDto: PaginationDto): Promise<import("../../../shared/dtos/pagination.dto").PaginatedResponse<Partial<User>>>;
    findPatients(paginationDto: PaginationDto): Promise<import("../../../shared/dtos/pagination.dto").PaginatedResponse<Partial<User>>>;
    searchUsers(query: string, paginationDto: PaginationDto): Promise<import("../../../shared/dtos/pagination.dto").PaginatedResponse<Partial<User>>>;
    getProfile(user: User): Promise<Partial<User>>;
    findById(id: string): Promise<Partial<User>>;
    updateProfile(user: User, updateUserDto: UpdateUserDto): Promise<Partial<User>>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<Partial<User>>;
    updateUserRole(id: string, updateUserRoleDto: UpdateUserRoleDto): Promise<Partial<User>>;
    updateUserStatus(id: string, updateUserStatusDto: UpdateUserStatusDto): Promise<Partial<User>>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
}
