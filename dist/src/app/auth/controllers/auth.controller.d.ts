import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { ForgotPasswordDto, ResetPasswordDto, ChangePasswordDto } from '../dto/password.dto';
import { User } from '../../../shared/entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    changePassword(user: User, changePasswordDto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    getProfile(user: User): Promise<{
        id: string;
        username: string;
        email: string;
        firstName: string;
        lastName: string;
        middleName: string;
        title: string;
        suffix: string;
        displayName: string;
        phoneNumber: string;
        mobilePhone: string;
        address: any;
        role: string;
        permissions: any[];
        facilityAccess: any[];
        departmentId: string;
        supervisorId: string;
        providerInfo: any;
        passwordExpiry: Date;
        mustChangePassword: boolean;
        twoFactorEnabled: boolean;
        securityQuestions: any[];
        lastLogin: Date;
        lastActivity: Date;
        sessionTimeout: number;
        maxConcurrentSessions: number;
        isActive: boolean;
        isLocked: boolean;
        lockoutExpiry: Date;
        failedLoginAttempts: number;
        emailVerified: boolean;
        phoneVerified: boolean;
        preferences: any;
        emergencyAccess: any;
        certifications: any[];
        trainings: any[];
        communicationPreferences: any;
        specialization: string;
        licenseNumber: string;
        profileImage: string;
        isVerified: boolean;
        resetPasswordExpires: Date;
        lastPasswordChange: Date;
        accountExpiryDate: Date;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        lastModifiedBy: string;
        supervisor: User;
        subordinates: User[];
        patientAppointments: import("../../../shared/entities/appointment.entity").Appointment[];
        patientRecords: import("../../../shared/entities/medical-record.entity").MedicalRecord[];
        patientPrescriptions: import("../../../shared/entities/prescription.entity").Prescription[];
        patientReviews: import("../../../shared/entities/review.entity").Review[];
        patientTransactions: import("../../../shared/entities/transaction.entity").Transaction[];
        doctorAppointments: import("../../../shared/entities/appointment.entity").Appointment[];
        doctorRecords: import("../../../shared/entities/medical-record.entity").MedicalRecord[];
        doctorPrescriptions: import("../../../shared/entities/prescription.entity").Prescription[];
        doctorReviews: import("../../../shared/entities/review.entity").Review[];
        doctorTransactions: import("../../../shared/entities/transaction.entity").Transaction[];
        availabilitySlots: import("../../../shared/entities/availabilityslot.entity").AvailabilitySlot[];
        primaryCarePatients: import("../../../shared/entities/patient.entity").Patient[];
    }>;
}
