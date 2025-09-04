import { User } from './user.entity';
import { Patient } from './patient.entity';
export declare class Document {
    id: string;
    name: string;
    description: string;
    category: string;
    mimeType: string;
    fileSize: number;
    filePath: string;
    thumbnailPath: string;
    metadata: any;
    isEncrypted: boolean;
    encryptionKeyId: string;
    status: string;
    visibility: string;
    permissions: any;
    version: string;
    parentDocumentId: string;
    patientId: string;
    uploadedById: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    patient: Patient;
    uploadedBy: User;
    parentDocument: Document;
    childDocuments: Document[];
    accessLogs: DocumentAccess[];
    tags: DocumentTag[];
    shares: DocumentShare[];
}
export declare class DocumentAccess {
    id: string;
    documentId: string;
    userId: string;
    action: string;
    ipAddress: string;
    userAgent: string;
    accessedAt: Date;
    document: Document;
    user: User;
}
export declare class DocumentTag {
    id: string;
    documentId: string;
    tag: string;
    color: string;
    createdAt: Date;
    document: Document;
}
export declare class DocumentShare {
    id: string;
    documentId: string;
    sharedWithUserId: string;
    sharedWithEmail: string;
    sharedById: string;
    permission: string;
    expiresAt: Date;
    accessToken: string;
    isActive: boolean;
    createdAt: Date;
    document: Document;
    sharedWithUser: User;
    sharedBy: User;
}
export declare class DocumentTemplate {
    id: string;
    name: string;
    description: string;
    category: string;
    template: string;
    fields: any;
    settings: any;
    isActive: boolean;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
}
export declare class DocumentFolder {
    id: string;
    name: string;
    description: string;
    parentFolderId: string;
    patientId: string;
    createdById: string;
    visibility: string;
    permissions: any;
    createdAt: Date;
    updatedAt: Date;
    parentFolder: DocumentFolder;
    childFolders: DocumentFolder[];
    patient: Patient;
    createdBy: User;
}
