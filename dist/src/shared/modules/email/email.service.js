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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
let EmailService = class EmailService {
    constructor(configService) {
        this.configService = configService;
        this.transporter = nodemailer.createTransport({
            host: this.configService.get('SMTP_HOST') || 'localhost',
            port: this.configService.get('SMTP_PORT') || 587,
            secure: false,
            auth: {
                user: this.configService.get('SMTP_USER'),
                pass: this.configService.get('SMTP_PASS'),
            },
        });
    }
    async sendVerificationEmail(email, token) {
        const verificationUrl = `${this.configService.get('FRONTEND_URL')}/verify-email?token=${token}`;
        const mailOptions = {
            from: this.configService.get('SMTP_FROM') || 'noreply@healthcare.com',
            to: email,
            subject: 'Verify Your Email Address',
            html: `
        <h1>Email Verification</h1>
        <p>Please click the link below to verify your email address:</p>
        <a href="${verificationUrl}">Verify Email</a>
        <p>If you didn't create an account, you can safely ignore this email.</p>
      `,
        };
        try {
            await this.transporter.sendMail(mailOptions);
            console.log(`Verification email sent to ${email}`);
        }
        catch (error) {
            console.error('Error sending verification email:', error);
            if (this.configService.get('NODE_ENV') === 'production') {
                throw error;
            }
        }
    }
    async sendPasswordResetEmail(email, token) {
        const resetUrl = `${this.configService.get('FRONTEND_URL')}/reset-password?token=${token}`;
        const mailOptions = {
            from: this.configService.get('SMTP_FROM') || 'noreply@healthcare.com',
            to: email,
            subject: 'Password Reset Request',
            html: `
        <h1>Password Reset</h1>
        <p>You requested a password reset. Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, you can safely ignore this email.</p>
      `,
        };
        try {
            await this.transporter.sendMail(mailOptions);
            console.log(`Password reset email sent to ${email}`);
        }
        catch (error) {
            console.error('Error sending password reset email:', error);
            if (this.configService.get('NODE_ENV') === 'production') {
                throw error;
            }
        }
    }
    async sendAppointmentConfirmation(email, appointmentDetails) {
        const mailOptions = {
            from: this.configService.get('SMTP_FROM') || 'noreply@healthcare.com',
            to: email,
            subject: 'Appointment Confirmation',
            html: `
        <h1>Appointment Confirmed</h1>
        <p>Dear ${appointmentDetails.patientName},</p>
        <p>Your appointment has been confirmed with the following details:</p>
        <ul>
          <li><strong>Doctor:</strong> ${appointmentDetails.doctorName}</li>
          <li><strong>Date:</strong> ${appointmentDetails.date}</li>
          <li><strong>Time:</strong> ${appointmentDetails.time}</li>
        </ul>
        <p>Please arrive 15 minutes early for your appointment.</p>
      `,
        };
        try {
            await this.transporter.sendMail(mailOptions);
            console.log(`Appointment confirmation sent to ${email}`);
        }
        catch (error) {
            console.error('Error sending appointment confirmation:', error);
            if (this.configService.get('NODE_ENV') === 'production') {
                throw error;
            }
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map