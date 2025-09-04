export declare class NotificationService {
    private transporter;
    private twilioClient;
    constructor();
    sendEmail(to: string, subject: string, html: string): Promise<void>;
    sendSms(to: string, body: string): Promise<void>;
    sendPushNotification(deviceToken: string, title: string, body: string): Promise<void>;
}
