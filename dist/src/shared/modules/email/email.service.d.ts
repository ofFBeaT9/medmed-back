import { ConfigService } from '@nestjs/config';
export declare class EmailService {
    private configService;
    private transporter;
    constructor(configService: ConfigService);
    sendVerificationEmail(email: string, token: string): Promise<void>;
    sendPasswordResetEmail(email: string, token: string): Promise<void>;
    sendAppointmentConfirmation(email: string, appointmentDetails: {
        patientName: string;
        doctorName: string;
        date: string;
        time: string;
    }): Promise<void>;
}
