"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseDto = void 0;
class ApiResponseDto {
    constructor(success, message, data, error) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.error = error;
        this.timestamp = new Date().toISOString();
    }
    static success(message, data) {
        return new ApiResponseDto(true, message, data);
    }
    static error(message, error) {
        return new ApiResponseDto(false, message, undefined, error);
    }
}
exports.ApiResponseDto = ApiResponseDto;
//# sourceMappingURL=api-response.dto.js.map