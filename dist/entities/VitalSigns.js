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
exports.VitalSigns = void 0;
const typeorm_1 = require("typeorm");
let VitalSigns = class VitalSigns {
};
exports.VitalSigns = VitalSigns;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], VitalSigns.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], VitalSigns.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], VitalSigns.prototype, "systolicBP", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], VitalSigns.prototype, "diastolicBP", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    __metadata("design:type", Number)
], VitalSigns.prototype, "heartRate", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 4, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], VitalSigns.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    __metadata("design:type", Number)
], VitalSigns.prototype, "respiratoryRate", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], VitalSigns.prototype, "oxygenSaturation", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], VitalSigns.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], VitalSigns.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 4, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], VitalSigns.prototype, "bmi", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50, nullable: true }),
    __metadata("design:type", String)
], VitalSigns.prototype, "painScale", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], VitalSigns.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], VitalSigns.prototype, "recordedBy", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    __metadata("design:type", Date)
], VitalSigns.prototype, "recordedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VitalSigns.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)('Patient', 'vitalSigns', { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", Object)
], VitalSigns.prototype, "patient", void 0);
exports.VitalSigns = VitalSigns = __decorate([
    (0, typeorm_1.Entity)('vital_signs'),
    (0, typeorm_1.Index)(['patientId', 'recordedAt'])
], VitalSigns);
