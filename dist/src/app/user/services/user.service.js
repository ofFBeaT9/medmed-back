"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../../shared/entities/user.entity");
const pagination_dto_1 = require("../../../shared/dtos/pagination.dto");
const user_role_enum_1 = require("../../../shared/enums/user-role.enum");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll(paginationDto) {
        const { page, limit, skip } = paginationDto;
        const [users, total] = await this.userRepository.findAndCount({
            skip,
            take: limit,
            select: ['id', 'email', 'firstName', 'lastName', 'role', 'isActive', 'isVerified', 'createdAt'],
            order: { createdAt: 'DESC' },
        });
        return new pagination_dto_1.PaginatedResponse(users, total, page, limit);
    }
    async findById(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const { password, verificationToken, resetPasswordToken, ...userResponse } = user;
        return userResponse;
    }
    async findByEmail(email) {
        return this.userRepository.findOne({ where: { email } });
    }
    async findByRole(role, paginationDto) {
        const { page, limit, skip } = paginationDto;
        const [users, total] = await this.userRepository.findAndCount({
            where: { role },
            skip,
            take: limit,
            select: ['id', 'email', 'firstName', 'lastName', 'role', 'specialization', 'licenseNumber', 'isActive', 'isVerified', 'createdAt'],
            order: { createdAt: 'DESC' },
        });
        return new pagination_dto_1.PaginatedResponse(users, total, page, limit);
    }
    async findDoctors(paginationDto) {
        return this.findByRole(user_role_enum_1.UserRole.DOCTOR, paginationDto);
    }
    async findPatients(paginationDto) {
        return this.findByRole(user_role_enum_1.UserRole.PATIENT, paginationDto);
    }
    async updateProfile(id, updateUserDto) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        Object.assign(user, updateUserDto);
        await this.userRepository.save(user);
        const { password, verificationToken, resetPasswordToken, ...updatedUser } = user;
        return updatedUser;
    }
    async updateRole(id, updateUserRoleDto) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.role = updateUserRoleDto.role;
        await this.userRepository.save(user);
        const { password, verificationToken, resetPasswordToken, ...updatedUser } = user;
        return updatedUser;
    }
    async updateStatus(id, updateUserStatusDto) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.isActive = updateUserStatusDto.isActive;
        await this.userRepository.save(user);
        const { password, verificationToken, resetPasswordToken, ...updatedUser } = user;
        return updatedUser;
    }
    async deleteUser(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.isActive = false;
        await this.userRepository.save(user);
        return { message: 'User deactivated successfully' };
    }
    async searchUsers(query, paginationDto) {
        const { page, limit, skip } = paginationDto;
        const queryBuilder = this.userRepository.createQueryBuilder('user');
        queryBuilder
            .where('user.firstName LIKE :query', { query: `%${query}%` })
            .orWhere('user.lastName LIKE :query', { query: `%${query}%` })
            .orWhere('user.email LIKE :query', { query: `%${query}%` })
            .select(['user.id', 'user.email', 'user.firstName', 'user.lastName', 'user.role', 'user.specialization', 'user.isActive', 'user.isVerified'])
            .orderBy('user.createdAt', 'DESC')
            .skip(skip)
            .take(limit);
        const [users, total] = await queryBuilder.getManyAndCount();
        return new pagination_dto_1.PaginatedResponse(users, total, page, limit);
    }
    async getUserStats() {
        const [totalUsers, totalPatients, totalDoctors, totalAdmins, activeUsers, verifiedUsers,] = await Promise.all([
            this.userRepository.count(),
            this.userRepository.count({ where: { role: user_role_enum_1.UserRole.PATIENT } }),
            this.userRepository.count({ where: { role: user_role_enum_1.UserRole.DOCTOR } }),
            this.userRepository.count({ where: { role: user_role_enum_1.UserRole.ADMIN } }),
            this.userRepository.count({ where: { isActive: true } }),
            this.userRepository.count({ where: { isVerified: true } }),
        ]);
        return {
            totalUsers,
            totalPatients,
            totalDoctors,
            totalAdmins,
            activeUsers,
            verifiedUsers,
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map