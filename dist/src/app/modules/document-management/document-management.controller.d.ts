import { DocumentManagementService } from './document-management.service';
import { CreateDocumentDto, UpdateDocumentDto, ShareDocumentDto } from './dto/document-management.dto';
export declare class DocumentManagementController {
    private readonly documentService;
    constructor(documentService: DocumentManagementService);
    uploadDocument(file: Express.Multer.File, createDocumentDto: CreateDocumentDto): Promise<import("../../../shared/entities/document-management.entity").Document>;
    getAllDocuments(query: any): Promise<import("../../../shared/entities/document-management.entity").Document[]>;
    getDocumentById(id: string): Promise<import("../../../shared/entities/document-management.entity").Document>;
    updateDocument(id: string, updateDocumentDto: UpdateDocumentDto): Promise<import("../../../shared/entities/document-management.entity").Document>;
    deleteDocument(id: string): Promise<import("typeorm").DeleteResult>;
    shareDocument(id: string, shareDocumentDto: ShareDocumentDto): Promise<import("../../../shared/entities/document-management.entity").DocumentShare>;
    getDocumentVersions(id: string): Promise<any[]>;
    getAccessLog(id: string): Promise<import("../../../shared/entities/document-management.entity").DocumentAccess[]>;
    getTemplates(): Promise<import("../../../shared/entities/document-management.entity").DocumentTemplate[]>;
    createFolder(folderData: any): Promise<import("../../../shared/entities/document-management.entity").DocumentFolder[]>;
    getFolders(): Promise<import("../../../shared/entities/document-management.entity").DocumentFolder[]>;
}
