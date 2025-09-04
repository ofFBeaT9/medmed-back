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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
const uuid_1 = require("uuid");
const user_entity_1 = require("../../../shared/entities/user.entity");
const email_service_1 = require("../../../shared/modules/email/email.service");
let AuthService = class AuthService {
    constructor(userRepository, jwtService, emailService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.emailService = emailService;
    }
    async register(registerDto) {
        const { email, password, ...userData } = registerDto;
        const existingUser = await this.userRepository.findOne({ where: { email } });
        if (existingUser) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const verificationToken = (0, uuid_1.v4)();
        const user = this.userRepository.create({
            email,
            password: hashedPassword,
            verificationToken,
            ...userData,
        });
        await this.userRepository.save(user);
        await this.emailService.sendVerificationEmail(email, verificationToken);
        const payload = { sub: user.id, email: user.email, role: user.role };
        const accessToken = this.jwtService.sign(payload);
        const { password: _, verificationToken: __, ...userResponse } = user;
        return {
            user: userResponse,
            accessToken,
        };
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (!user.isActive) {
            throw new common_1.UnauthorizedException('Account is deactivated');
        }
        const payload = { sub: user.id, email: user.email, role: user.role };
        const accessToken = this.jwtService.sign(payload);
        const { password: _, verificationToken, resetPasswordToken, ...userResponse } = user;
        return {
            user: userResponse,
            accessToken,
        };
    }
    async verifyEmail(token) {
        const user = await this.userRepository.findOne({ where: { verificationToken: token } });
        if (!user) {
            throw new common_1.NotFoundException('Invalid verification token');
        }
        user.isVerified = true;
        user.verificationToken = null;
        await this.userRepository.save(user);
        return { message: 'Email verified successfully' };
    }
    async forgotPassword(forgotPasswordDto) {
        const { email } = forgotPasswordDto;
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            return { message: 'If email exists, password reset instructions have been sent' };
        }
        const resetToken = (0, uuid_1.v4)();
        const resetExpires = new Date(Date.now() + 3600000);
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = resetExpires;
        await this.userRepository.save(user);
        await this.emailService.sendPasswordResetEmail(email, resetToken);
        return { message: 'If email exists, password reset instructions have been sent' };
    }
    async resetPassword(resetPasswordDto) {
        const { token, password } = resetPasswordDto;
        const user = await this.userRepository.findOne({
            where: {
                resetPasswordToken: token,
            },
        });
        if (!user || !user.resetPasswordExpires || user.resetPasswordExpires < new Date()) {
            throw new common_1.UnauthorizedException('Invalid or expired reset token');
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        user.password = hashedPassword;
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        await this.userRepository.save(user);
        return { message: 'Password reset successfully' };
    }
    async changePassword(userId, changePasswordDto) {
        const { currentPassword, newPassword } = changePasswordDto;
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isCurrentPasswordValid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        user.password = hashedPassword;
        await this.userRepository.save(user);
        return { message: 'Password changed successfully' };
    }
    async validateUser(userId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user || !user.isActive) {
            throw new common_1.UnauthorizedException('User not found or inactive');
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        email_service_1.EmailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map