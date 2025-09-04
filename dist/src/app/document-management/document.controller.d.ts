import { DocumentService } from './document.service';
export declare class DocumentController {
    private readonly documentService;
    constructor(documentService: DocumentService);
    createDocument(createDocumentDto: any, file: Express.Multer.File): Promise<import("../../shared/entities/document-management.entity").Document>;
    findAllDocuments(query: any): Promise<import("../../shared/entities/document-management.entity").Document[]>;
    findDocumentsByPatient(patientId: string): Promise<import("../../shared/entities/document-management.entity").Document[]>;
    findDocumentById(id: string): Promise<import("../../shared/entities/document-management.entity").Document>;
    updateDocument(id: string, updateDocumentDto: any): Promise<import("../../shared/entities/document-management.entity").Document>;
    deleteDocument(id: string): Promise<{
        message: string;
    }>;
    shareDocument(documentId: string, shareData: any): Promise<import("../../shared/entities/document-management.entity").DocumentShare>;
    getDocumentShares(documentId: string): Promise<import("../../shared/entities/document-management.entity").DocumentShare[]>;
    addDocumentTag(documentId: string, tagData: any): Promise<import("../../shared/entities/document-management.entity").DocumentTag>;
    logDocumentAccess(documentId: string, accessData: any): Promise<import("../../shared/entities/document-management.entity").DocumentAccess>;
    createDocumentTemplate(templateData: any): Promise<import("../../shared/entities/document-management.entity").DocumentTemplate>;
    findAllDocumentTemplates(): Promise<import("../../shared/entities/document-management.entity").DocumentTemplate[]>;
    createDocumentFolder(folderData: any): Promise<import("../../shared/entities/document-management.entity").DocumentFolder>;
    getDocumentFoldersByPatient(patientId: string): Promise<import("../../shared/entities/document-management.entity").DocumentFolder[]>;
}
