import { Repository } from 'typeorm';
import { Document, DocumentAccess, DocumentTag, DocumentShare, DocumentTemplate, DocumentFolder } from '../../shared/entities/document-management.entity';
export declare class DocumentService {
    private documentRepository;
    private documentAccessRepository;
    private documentTagRepository;
    private documentShareRepository;
    private documentTemplateRepository;
    private documentFolderRepository;
    constructor(documentRepository: Repository<Document>, documentAccessRepository: Repository<DocumentAccess>, documentTagRepository: Repository<DocumentTag>, documentShareRepository: Repository<DocumentShare>, documentTemplateRepository: Repository<DocumentTemplate>, documentFolderRepository: Repository<DocumentFolder>);
    createDocument(createDocumentDto: any): Promise<Document>;
    findAllDocuments(): Promise<Document[]>;
    findDocumentById(id: string): Promise<Document>;
    findDocumentsByPatient(patientId: string): Promise<Document[]>;
    updateDocument(id: string, updateDocumentDto: any): Promise<Document>;
    deleteDocument(id: string): Promise<void>;
    logDocumentAccess(logData: any): Promise<DocumentAccess>;
    shareDocument(shareData: any): Promise<DocumentShare>;
    getDocumentShares(documentId: string): Promise<DocumentShare[]>;
    createDocumentTemplate(templateData: any): Promise<DocumentTemplate>;
    findAllDocumentTemplates(): Promise<DocumentTemplate[]>;
    createDocumentFolder(folderData: any): Promise<DocumentFolder>;
    getDocumentFoldersByPatient(patientId: string): Promise<DocumentFolder[]>;
    addDocumentTag(tagData: any): Promise<DocumentTag>;
    getDocumentTags(documentId: string): Promise<DocumentTag[]>;
}
