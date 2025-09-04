"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalRecordModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const medical_record_entity_1 = require("../../shared/entities/medical-record.entity");
const user_entity_1 = require("../../shared/entities/user.entity");
let MedicalRecordModule = class MedicalRecordModule {
};
exports.MedicalRecordModule = MedicalRecordModule;
exports.MedicalRecordModule = MedicalRecordModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([medical_record_entity_1.MedicalRecord, user_entity_1.User])],
        controllers: [],
        providers: [],
        exports: [],
    })
], MedicalRecordModule);
//# sourceMappingURL=record.module.js.map