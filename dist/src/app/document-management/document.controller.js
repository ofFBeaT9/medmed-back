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
exports.DocumentController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const document_service_1 = require("./document.service");
let DocumentController = class DocumentController {
    constructor(documentService) {
        this.documentService = documentService;
    }
    async createDocument(createDocumentDto, file) {
        return await this.documentService.createDocument({
            ...createDocumentDto,
            filePath: file?.path,
            fileSize: file?.size,
            mimeType: file?.mimetype,
        });
    }
    async findAllDocuments(query) {
        return await this.documentService.findAllDocuments();
    }
    async findDocumentsByPatient(patientId) {
        return await this.documentService.findDocumentsByPatient(patientId);
    }
    async findDocumentById(id) {
        return await this.documentService.findDocumentById(id);
    }
    async updateDocument(id, updateDocumentDto) {
        return await this.documentService.updateDocument(id, updateDocumentDto);
    }
    async deleteDocument(id) {
        await this.documentService.deleteDocument(id);
        return { message: 'Document deleted successfully' };
    }
    async shareDocument(documentId, shareData) {
        return await this.documentService.shareDocument({
            documentId,
            ...shareData,
        });
    }
    async getDocumentShares(documentId) {
        return await this.documentService.getDocumentShares(documentId);
    }
    async addDocumentTag(documentId, tagData) {
        return await this.documentService.addDocumentTag({
            documentId,
            ...tagData,
        });
    }
    async logDocumentAccess(documentId, accessData) {
        return await this.documentService.logDocumentAccess({
            documentId,
            ...accessData,
        });
    }
    async createDocumentTemplate(templateData) {
        return await this.documentService.createDocumentTemplate(templateData);
    }
    async findAllDocumentTemplates() {
        return await this.documentService.findAllDocumentTemplates();
    }
    async createDocumentFolder(folderData) {
        return await this.documentService.createDocumentFolder(folderData);
    }
    async getDocumentFoldersByPatient(patientId) {
        return await this.documentService.getDocumentFoldersByPatient(patientId);
    }
};
exports.DocumentController = DocumentController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new document' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Document created successfully' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "createDocument", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all documents' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Documents retrieved successfully' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "findAllDocuments", null);
__decorate([
    (0, common_1.Get)('patient/:patientId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get documents by patient ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Patient documents retrieved successfully' }),
    __param(0, (0, common_1.Param)('patientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "findDocumentsByPatient", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get document by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Document retrieved successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "findDocumentById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update document' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Document updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "updateDocument", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete document' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Document deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "deleteDocument", null);
__decorate([
    (0, common_1.Post)(':id/share'),
    (0, swagger_1.ApiOperation)({ summary: 'Share document' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Document shared successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "shareDocument", null);
__decorate([
    (0, common_1.Get)(':id/shares'),
    (0, swagger_1.ApiOperation)({ summary: 'Get document shares' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Document shares retrieved successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "getDocumentShares", null);
__decorate([
    (0, common_1.Post)(':id/tags'),
    (0, swagger_1.ApiOperation)({ summary: 'Add document tag' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Document tag added successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "addDocumentTag", null);
__decorate([
    (0, common_1.Post)(':id/access-log'),
    (0, swagger_1.ApiOperation)({ summary: 'Log document access' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Document access logged successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "logDocumentAccess", null);
__decorate([
    (0, common_1.Post)('templates'),
    (0, swagger_1.ApiOperation)({ summary: 'Create document template' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Document template created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "createDocumentTemplate", null);
__decorate([
    (0, common_1.Get)('templates'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all document templates' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Document templates retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "findAllDocumentTemplates", null);
__decorate([
    (0, common_1.Post)('folders'),
    (0, swagger_1.ApiOperation)({ summary: 'Create document folder' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Document folder created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "createDocumentFolder", null);
__decorate([
    (0, common_1.Get)('folders/patient/:patientId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get patient document folders' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Patient document folders retrieved successfully' }),
    __param(0, (0, common_1.Param)('patientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "getDocumentFoldersByPatient", null);
exports.DocumentController = DocumentController = __decorate([
    (0, swagger_1.ApiTags)('Document Management'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('documents'),
    __metadata("design:paramtypes", [document_service_1.DocumentService])
], DocumentController);
//# sourceMappingURL=document.controller.js.map