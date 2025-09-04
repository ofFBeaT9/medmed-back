"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
class ValidationPipe extends common_1.ValidationPipe {
    constructor() {
        super({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            exceptionFactory: (errors) => {
                const messages = errors.map(error => {
                    const constraints = Object.values(error.constraints || {});
                    return constraints.join(', ');
                });
                return new common_1.BadRequestException(messages.join('; '));
            },
        });
    }
}
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=validation.pipe.js.map