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
exports.DocumentManagementController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const document_management_service_1 = require("./document-management.service");
const document_management_dto_1 = require("./dto/document-management.dto");
let DocumentManagementController = class DocumentManagementController {
    constructor(documentService) {
        this.documentService = documentService;
    }
    async uploadDocument(file, createDocumentDto) {
        return this.documentService.uploadDocument(file, createDocumentDto);
    }
    async getAllDocuments(query) {
        return this.documentService.getAllDocuments(query);
    }
    async getDocumentById(id) {
        return this.documentService.getDocumentById(id);
    }
    async updateDocument(id, updateDocumentDto) {
        return this.documentService.updateDocument(id, updateDocumentDto);
    }
    async deleteDocument(id) {
        return this.documentService.deleteDocument(id);
    }
    async shareDocument(id, shareDocumentDto) {
        return this.documentService.shareDocument(id, shareDocumentDto);
    }
    async getDocumentVersions(id) {
        return this.documentService.getDocumentVersions(id);
    }
    async getAccessLog(id) {
        return this.documentService.getAccessLog(id);
    }
    async getTemplates() {
        return this.documentService.getTemplates();
    }
    async createFolder(folderData) {
        return this.documentService.createFolder(folderData);
    }
    async getFolders() {
        return this.documentService.getFolders();
    }
};
exports.DocumentManagementController = DocumentManagementController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, document_management_dto_1.CreateDocumentDto]),
    __metadata("design:returntype", Promise)
], DocumentManagementController.prototype, "uploadDocument", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentManagementController.prototype, "getAllDocuments", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentManagementController.prototype, "getDocumentById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, document_management_dto_1.UpdateDocumentDto]),
    __metadata("design:returntype", Promise)
], DocumentManagementController.prototype, "updateDocument", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentManagementController.prototype, "deleteDocument", null);
__decorate([
    (0, common_1.Post)(':id/share'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, document_management_dto_1.ShareDocumentDto]),
    __metadata("design:returntype", Promise)
], DocumentManagementController.prototype, "shareDocument", null);
__decorate([
    (0, common_1.Get)(':id/versions'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentManagementController.prototype, "getDocumentVersions", null);
__decorate([
    (0, common_1.Get)(':id/access-log'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentManagementController.prototype, "getAccessLog", null);
__decorate([
    (0, common_1.Get)('templates'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocumentManagementController.prototype, "getTemplates", null);
__decorate([
    (0, common_1.Post)('folders'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentManagementController.prototype, "createFolder", null);
__decorate([
    (0, common_1.Get)('folders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocumentManagementController.prototype, "getFolders", null);
exports.DocumentManagementController = DocumentManagementController = __decorate([
    (0, common_1.Controller)('documents'),
    __metadata("design:paramtypes", [document_management_service_1.DocumentManagementService])
], DocumentManagementController);
//# sourceMappingURL=document-management.controller.js.map