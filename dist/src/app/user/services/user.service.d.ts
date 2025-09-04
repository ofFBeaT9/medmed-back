import { Repository } from 'typeorm';
import { User } from '../../../shared/entities/user.entity';
import { UpdateUserDto, UpdateUserRoleDto, UpdateUserStatusDto } from '../dto/update-user.dto';
import { PaginationDto, PaginatedResponse } from '../../../shared/dtos/pagination.dto';
import { UserRole } from '../../../shared/enums/user-role.enum';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(paginationDto: PaginationDto): Promise<PaginatedResponse<Partial<User>>>;
    findById(id: string): Promise<Partial<User>>;
    findByEmail(email: string): Promise<User>;
    findByRole(role: UserRole, paginationDto: PaginationDto): Promise<PaginatedResponse<Partial<User>>>;
    findDoctors(paginationDto: PaginationDto): Promise<PaginatedResponse<Partial<User>>>;
    findPatients(paginationDto: PaginationDto): Promise<PaginatedResponse<Partial<User>>>;
    updateProfile(id: string, updateUserDto: UpdateUserDto): Promise<Partial<User>>;
    updateRole(id: string, updateUserRoleDto: UpdateUserRoleDto): Promise<Partial<User>>;
    updateStatus(id: string, updateUserStatusDto: UpdateUserStatusDto): Promise<Partial<User>>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
    searchUsers(query: string, paginationDto: PaginationDto): Promise<PaginatedResponse<Partial<User>>>;
    getUserStats(): Promise<{
        totalUsers: number;
        totalPatients: number;
        totalDoctors: number;
        totalAdmins: number;
        activeUsers: number;
        verifiedUsers: number;
    }>;
}
