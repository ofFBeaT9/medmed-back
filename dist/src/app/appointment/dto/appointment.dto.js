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
exports.AppointmentQueryDto = exports.UpdateAppointmentStatusDto = exports.UpdateAppointmentDto = exports.CreateAppointmentDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const appointment_status_enum_1 = require("../../../shared/enums/appointment-status.enum");
class CreateAppointmentDto {
    constructor() {
        this.isOnline = false;
    }
}
exports.CreateAppointmentDto = CreateAppointmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "doctorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-08-25T10:00:00.000Z' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "appointmentDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30, description: 'Duration in minutes' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(15),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Routine checkup', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100.00, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAppointmentDto.prototype, "isOnline", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://meet.google.com/abc-def-ghi', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "meetingLink", void 0);
class UpdateAppointmentDto {
}
exports.UpdateAppointmentDto = UpdateAppointmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-08-25T10:00:00.000Z', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateAppointmentDto.prototype, "appointmentDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30, description: 'Duration in minutes', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(15),
    __metadata("design:type", Number)
], UpdateAppointmentDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Follow-up consultation', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAppointmentDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Patient arrived early, vitals taken', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAppointmentDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 150.00, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAppointmentDto.prototype, "fee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateAppointmentDto.prototype, "isOnline", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://meet.google.com/abc-def-ghi', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAppointmentDto.prototype, "meetingLink", void 0);
class UpdateAppointmentStatusDto {
}
exports.UpdateAppointmentStatusDto = UpdateAppointmentStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: appointment_status_enum_1.AppointmentStatus.CONFIRMED, enum: appointment_status_enum_1.AppointmentStatus }),
    (0, class_validator_1.IsEnum)(appointment_status_enum_1.AppointmentStatus),
    __metadata("design:type", String)
], UpdateAppointmentStatusDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Patient requested cancellation', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAppointmentStatusDto.prototype, "cancelReason", void 0);
class AppointmentQueryDto {
}
exports.AppointmentQueryDto = AppointmentQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AppointmentQueryDto.prototype, "doctorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123e4567-e89b-12d3-a456-426614174000', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AppointmentQueryDto.prototype, "patientId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: appointment_status_enum_1.AppointmentStatus.SCHEDULED, enum: appointment_status_enum_1.AppointmentStatus, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(appointment_status_enum_1.AppointmentStatus),
    __metadata("design:type", String)
], AppointmentQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-08-25', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AppointmentQueryDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-08-01', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AppointmentQueryDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-08-31', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AppointmentQueryDto.prototype, "endDate", void 0);
//# sourceMappingURL=appointment.dto.js.map