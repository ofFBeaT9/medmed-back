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
exports.DocumentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const document_management_entity_1 = require("../../shared/entities/document-management.entity");
let DocumentService = class DocumentService {
    constructor(documentRepository, documentAccessRepository, documentTagRepository, documentShareRepository, documentTemplateRepository, documentFolderRepository) {
        this.documentRepository = documentRepository;
        this.documentAccessRepository = documentAccessRepository;
        this.documentTagRepository = documentTagRepository;
        this.documentShareRepository = documentShareRepository;
        this.documentTemplateRepository = documentTemplateRepository;
        this.documentFolderRepository = documentFolderRepository;
    }
    async createDocument(createDocumentDto) {
        const document = this.documentRepository.create(createDocumentDto);
        return await this.documentRepository.save(document);
    }
    async findAllDocuments() {
        return await this.documentRepository.find({
            relations: ['patient', 'uploadedBy', 'tags', 'shares'],
        });
    }
    async findDocumentById(id) {
        return await this.documentRepository.findOne({
            where: { id },
            relations: ['patient', 'uploadedBy', 'tags', 'shares', 'accessLogs'],
        });
    }
    async findDocumentsByPatient(patientId) {
        return await this.documentRepository.find({
            where: { patientId },
            relations: ['uploadedBy', 'tags'],
            order: { createdAt: 'DESC' },
        });
    }
    async updateDocument(id, updateDocumentDto) {
        await this.documentRepository.update(id, updateDocumentDto);
        return await this.findDocumentById(id);
    }
    async deleteDocument(id) {
        await this.documentRepository.softDelete(id);
    }
    async logDocumentAccess(logData) {
        const accessLog = this.documentAccessRepository.create(logData);
        return await this.documentAccessRepository.save(accessLog);
    }
    async shareDocument(shareData) {
        const share = this.documentShareRepository.create(shareData);
        return await this.documentShareRepository.save(share);
    }
    async getDocumentShares(documentId) {
        return await this.documentShareRepository.find({
            where: { documentId },
            relations: ['sharedWithUser', 'sharedBy'],
        });
    }
    async createDocumentTemplate(templateData) {
        const template = this.documentTemplateRepository.create(templateData);
        return await this.documentTemplateRepository.save(template);
    }
    async findAllDocumentTemplates() {
        return await this.documentTemplateRepository.find({
            where: { isActive: true },
            relations: ['createdBy'],
        });
    }
    async createDocumentFolder(folderData) {
        const folder = this.documentFolderRepository.create(folderData);
        return await this.documentFolderRepository.save(folder);
    }
    async getDocumentFoldersByPatient(patientId) {
        return await this.documentFolderRepository.find({
            where: { patientId },
            relations: ['parentFolder', 'childFolders', 'createdBy'],
        });
    }
    async addDocumentTag(tagData) {
        const tag = this.documentTagRepository.create(tagData);
        return await this.documentTagRepository.save(tag);
    }
    async getDocumentTags(documentId) {
        return await this.documentTagRepository.find({
            where: { documentId },
        });
    }
};
exports.DocumentService = DocumentService;
exports.DocumentService = DocumentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(document_management_entity_1.Document)),
    __param(1, (0, typeorm_1.InjectRepository)(document_management_entity_1.DocumentAccess)),
    __param(2, (0, typeorm_1.InjectRepository)(document_management_entity_1.DocumentTag)),
    __param(3, (0, typeorm_1.InjectRepository)(document_management_entity_1.DocumentShare)),
    __param(4, (0, typeorm_1.InjectRepository)(document_management_entity_1.DocumentTemplate)),
    __param(5, (0, typeorm_1.InjectRepository)(document_management_entity_1.DocumentFolder)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DocumentService);
//# sourceMappingURL=document.service.js.map