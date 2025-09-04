import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../../../shared/entities/user.entity';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { ForgotPasswordDto, ResetPasswordDto, ChangePasswordDto } from '../dto/password.dto';
import { EmailService } from '../../../shared/modules/email/email.service';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    private readonly emailService;
    constructor(userRepository: Repository<User>, jwtService: JwtService, emailService: EmailService);
    register(registerDto: RegisterDto): Promise<{
        user: Partial<User>;
        accessToken: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        user: Partial<User>;
        accessToken: string;
    }>;
    verifyEmail(token: string): Promise<{
        message: string;
    }>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    changePassword(userId: string, changePasswordDto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    validateUser(userId: string): Promise<User>;
}
