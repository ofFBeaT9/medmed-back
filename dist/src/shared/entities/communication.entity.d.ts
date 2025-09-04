import { User } from './user.entity';
import { Patient } from './patient.entity';
export declare class Message {
    id: string;
    subject: string;
    content: string;
    type: string;
    priority: string;
    status: string;
    senderId: string;
    recipientId: string;
    patientId: string;
    scheduledAt: Date;
    sentAt: Date;
    deliveredAt: Date;
    readAt: Date;
    metadata: any;
    createdAt: Date;
    updatedAt: Date;
    sender: User;
    recipient: User;
    patient: Patient;
    attachments: MessageAttachment[];
    recipients: MessageRecipient[];
}
export declare class MessageRecipient {
    id: string;
    messageId: string;
    userId: string;
    type: string;
    status: string;
    deliveredAt: Date;
    readAt: Date;
    createdAt: Date;
    message: Message;
    user: User;
}
export declare class MessageAttachment {
    id: string;
    messageId: string;
    fileName: string;
    originalName: string;
    mimeType: string;
    fileSize: number;
    filePath: string;
    createdAt: Date;
    message: Message;
}
export declare class Notification {
    id: string;
    title: string;
    content: string;
    type: string;
    category: string;
    status: string;
    userId: string;
    patientId: string;
    actionUrl: string;
    actionData: any;
    expiresAt: Date;
    readAt: Date;
    createdAt: Date;
    user: User;
    patient: Patient;
}
export declare class CommunicationTemplate {
    id: string;
    name: string;
    description: string;
    type: string;
    category: string;
    subject: string;
    content: string;
    variables: any;
    settings: any;
    isActive: boolean;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
}
export declare class PatientPortalMessage {
    id: string;
    subject: string;
    content: string;
    type: string;
    status: string;
    patientId: string;
    assignedToId: string;
    resolvedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    patient: Patient;
    assignedTo: User;
    replies: PatientPortalMessageReply[];
}
export declare class PatientPortalMessageReply {
    id: string;
    messageId: string;
    content: string;
    userId: string;
    isFromPatient: boolean;
    createdAt: Date;
    message: PatientPortalMessage;
    user: User;
}
export declare class CommunicationPreference {
    id: string;
    userId: string;
    emailNotifications: boolean;
    smsNotifications: boolean;
    pushNotifications: boolean;
    preferences: any;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
