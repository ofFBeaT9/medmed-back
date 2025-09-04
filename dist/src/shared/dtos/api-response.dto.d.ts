export declare class ApiResponseDto<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
    timestamp: string;
    path?: string;
    constructor(success: boolean, message: string, data?: T, error?: string);
    static success<T>(message: string, data?: T): ApiResponseDto<T>;
    static error(message: string, error?: string): ApiResponseDto;
}
