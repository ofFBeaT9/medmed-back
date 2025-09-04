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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentManagementService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const document_management_entity_1 = require("../../../shared/entities/document-management.entity");
let DocumentManagementService = class DocumentManagementService {
    constructor(documentRepository, accessLogRepository, shareRepository, templateRepository, folderRepository, tagRepository) {
        this.documentRepository = documentRepository;
        this.accessLogRepository = accessLogRepository;
        this.shareRepository = shareRepository;
        this.templateRepository = templateRepository;
        this.folderRepository = folderRepository;
        this.tagRepository = tagRepository;
    }
    async uploadDocument(file, createDocumentDto) {
        const document = this.documentRepository.create({
            name: file.originalname,
            description: createDocumentDto.description,
            category: createDocumentDto.category,
            filePath: file.path,
            fileSize: file.size,
            mimeType: file.mimetype,
            uploadedById: createDocumentDto.uploadedBy,
            patientId: createDocumentDto.patientId,
            createdAt: new Date()
        });
        const savedDocument = await this.documentRepository.save(document);
        if (createDocumentDto.tags) {
            const tagNames = createDocumentDto.tags.split(',').map(t => t.trim());
            for (const tagName of tagNames) {
                const tag = this.tagRepository.create({
                    documentId: savedDocument.id,
                    tag: tagName,
                    createdAt: new Date()
                });
                await this.tagRepository.save(tag);
            }
        }
        return savedDocument;
    }
    async getAllDocuments(query) {
        return this.documentRepository.find({
            relations: ['uploadedBy', 'patient', 'folder'],
            where: query
        });
    }
    async getDocumentById(id) {
        return this.documentRepository.findOne({
            where: { id },
            relations: ['uploadedBy', 'patient', 'folder', 'versions']
        });
    }
    async updateDocument(id, updateDocumentDto) {
        const updateData = {};
        if (updateDocumentDto.title)
            updateData.name = updateDocumentDto.title;
        if (updateDocumentDto.description)
            updateData.description = updateDocumentDto.description;
        if (updateDocumentDto.category)
            updateData.category = updateDocumentDto.category;
        if (updateDocumentDto.accessLevel)
            updateData.accessLevel = updateDocumentDto.accessLevel;
        if (Object.keys(updateData).length > 0) {
            await this.documentRepository.update(id, updateData);
        }
        if (updateDocumentDto.tags) {
            await this.tagRepository.delete({ documentId: id });
            const tagNames = updateDocumentDto.tags.split(',').map(t => t.trim());
            for (const tagName of tagNames) {
                const tag = this.tagRepository.create({
                    documentId: id,
                    tag: tagName,
                    createdAt: new Date()
                });
                await this.tagRepository.save(tag);
            }
        }
        return this.getDocumentById(id);
    }
    async deleteDocument(id) {
        return this.documentRepository.delete(id);
    }
    async shareDocument(id, shareDocumentDto) {
        const share = this.shareRepository.create({
            documentId: id,
            sharedWithUserId: shareDocumentDto.sharedWith,
            sharedById: shareDocumentDto.sharedBy,
            permission: shareDocumentDto.accessLevel || 'view',
            createdAt: new Date()
        });
        return this.shareRepository.save(share);
    }
    async getDocumentVersions(id) {
        return [];
    }
    async getAccessLog(id) {
        return this.accessLogRepository.find({
            where: { document: { id } },
            relations: ['user'],
            order: { accessedAt: 'DESC' }
        });
    }
    async getTemplates() {
        return this.templateRepository.find({
            where: { isActive: true }
        });
    }
    async createFolder(folderData) {
        const folder = this.folderRepository.create(folderData);
        return this.folderRepository.save(folder);
    }
    async getFolders() {
        return this.folderRepository.find({
            relations: ['parent', 'children']
        });
    }
    async logAccess(documentId, userId, action) {
        const accessLog = this.accessLogRepository.create({
            document: { id: documentId },
            user: { id: userId },
            action,
            accessedAt: new Date()
        });
        return this.accessLogRepository.save(accessLog);
    }
};
exports.DocumentManagementService = DocumentManagementService;
exports.DocumentManagementService = DocumentManagementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(document_management_entity_1.Document)),
    __param(1, (0, typeorm_1.InjectRepository)(document_management_entity_1.DocumentAccess)),
    __param(2, (0, typeorm_1.InjectRepository)(document_management_entity_1.DocumentShare)),
    __param(3, (0, typeorm_1.InjectRepository)(document_management_entity_1.DocumentTemplate)),
    __param(4, (0, typeorm_1.InjectRepository)(document_management_entity_1.DocumentFolder)),
    __param(5, (0, typeorm_1.InjectRepository)(document_management_entity_1.DocumentTag)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DocumentManagementService);
//# sourceMappingURL=document-management.service.js.map