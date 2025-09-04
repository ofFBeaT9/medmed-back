import { ConfigService } from '@nestjs/config';
export declare class CloudinaryService {
    private configService;
    constructor(configService: ConfigService);
    uploadImage(file: any, folder?: string): Promise<{
        url: string;
        publicId: string;
    }>;
    uploadDocument(file: any, folder?: string): Promise<{
        url: string;
        publicId: string;
    }>;
    deleteFile(publicId: string): Promise<void>;
    deleteFiles(publicIds: string[]): Promise<void>;
    generateImageUrl(publicId: string, transformations?: any[]): string;
}
