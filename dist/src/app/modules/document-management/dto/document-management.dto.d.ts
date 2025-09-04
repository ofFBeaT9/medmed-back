export declare class CreateDocumentDto {
    title: string;
    description?: string;
    category: string;
    tags?: string;
    patientId?: string;
    uploadedBy: string;
    folderId?: string;
    accessLevel?: string;
    keywords?: string[];
}
export declare class UpdateDocumentDto {
    title?: string;
    description?: string;
    category?: string;
    tags?: string;
    keywords?: string[];
    accessLevel?: string;
}
export declare class ShareDocumentDto {
    sharedWith: string;
    accessLevel?: string;
    message?: string;
    sharedBy: string;
}
export declare class CreateFolderDto {
    name: string;
    description?: string;
    parentId?: string;
    createdBy: string;
}
export declare class CreateTemplateDto {
    name: string;
    description?: string;
    category: string;
    content: string;
    createdBy: string;
}
