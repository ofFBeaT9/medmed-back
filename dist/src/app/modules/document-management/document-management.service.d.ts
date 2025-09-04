import { Repository } from 'typeorm';
import { Document, DocumentAccess, DocumentTag, DocumentShare, DocumentTemplate, DocumentFolder } from '../../../shared/entities/document-management.entity';
import { CreateDocumentDto, UpdateDocumentDto, ShareDocumentDto } from './dto/document-management.dto';
export declare class DocumentManagementService {
    private documentRepository;
    private accessLogRepository;
    private shareRepository;
    private templateRepository;
    private folderRepository;
    private tagRepository;
    constructor(documentRepository: Repository<Document>, accessLogRepository: Repository<DocumentAccess>, shareRepository: Repository<DocumentShare>, templateRepository: Repository<DocumentTemplate>, folderRepository: Repository<DocumentFolder>, tagRepository: Repository<DocumentTag>);
    uploadDocument(file: any, createDocumentDto: CreateDocumentDto): Promise<Document>;
    getAllDocuments(query: any): Promise<Document[]>;
    getDocumentById(id: string): Promise<Document>;
    updateDocument(id: string, updateDocumentDto: UpdateDocumentDto): Promise<Document>;
    deleteDocument(id: string): Promise<import("typeorm").DeleteResult>;
    shareDocument(id: string, shareDocumentDto: ShareDocumentDto): Promise<DocumentShare>;
    getDocumentVersions(id: string): Promise<any[]>;
    getAccessLog(id: string): Promise<DocumentAccess[]>;
    getTemplates(): Promise<DocumentTemplate[]>;
    createFolder(folderData: any): Promise<DocumentFolder[]>;
    getFolders(): Promise<DocumentFolder[]>;
    logAccess(documentId: string, userId: string, action: string): Promise<DocumentAccess>;
}
