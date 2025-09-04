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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cloudinary_1 = require("cloudinary");
let CloudinaryService = class CloudinaryService {
    constructor(configService) {
        this.configService = configService;
        cloudinary_1.v2.config({
            cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
            api_key: this.configService.get('CLOUDINARY_API_KEY'),
            api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
        });
    }
    async uploadImage(file, folder = 'healthcare') {
        try {
            const result = await cloudinary_1.v2.uploader.upload(file.buffer.toString('base64'), {
                folder,
                resource_type: 'image',
                transformation: [
                    { width: 1000, height: 1000, crop: 'limit' },
                    { quality: 'auto:good' },
                ],
            });
            return {
                url: result.secure_url,
                publicId: result.public_id,
            };
        }
        catch (error) {
            throw new Error(`Failed to upload image: ${error.message}`);
        }
    }
    async uploadDocument(file, folder = 'healthcare/documents') {
        try {
            const result = await cloudinary_1.v2.uploader.upload(file.buffer.toString('base64'), {
                folder,
                resource_type: 'raw',
            });
            return {
                url: result.secure_url,
                publicId: result.public_id,
            };
        }
        catch (error) {
            throw new Error(`Failed to upload document: ${error.message}`);
        }
    }
    async deleteFile(publicId) {
        try {
            await cloudinary_1.v2.uploader.destroy(publicId);
        }
        catch (error) {
            throw new Error(`Failed to delete file: ${error.message}`);
        }
    }
    async deleteFiles(publicIds) {
        try {
            await cloudinary_1.v2.api.delete_resources(publicIds);
        }
        catch (error) {
            throw new Error(`Failed to delete files: ${error.message}`);
        }
    }
    generateImageUrl(publicId, transformations) {
        if (!transformations) {
            return cloudinary_1.v2.url(publicId);
        }
        return cloudinary_1.v2.url(publicId, {
            transformation: transformations,
        });
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map