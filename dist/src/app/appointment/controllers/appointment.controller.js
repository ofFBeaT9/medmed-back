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
exports.AppointmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const appointment_service_1 = require("../services/appointment.service");
const appointment_dto_1 = require("../dto/appointment.dto");
const pagination_dto_1 = require("../../../shared/dtos/pagination.dto");
const auth_guard_1 = require("../../auth/guards/auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const roles_decorator_1 = require("../../../shared/decorators/roles.decorator");
const current_user_decorator_1 = require("../../../shared/decorators/current-user.decorator");
const user_role_enum_1 = require("../../../shared/enums/user-role.enum");
const user_entity_1 = require("../../../shared/entities/user.entity");
const is_valid_uuid_pipe_1 = require("../../../shared/pipes/is-valid-uuid.pipe");
let AppointmentController = class AppointmentController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    async create(user, createAppointmentDto) {
        return this.appointmentService.create(user.id, createAppointmentDto);
    }
    async findAll(queryDto, paginationDto) {
        return this.appointmentService.findAll(queryDto, paginationDto);
    }
    async getMyAppointments(user, paginationDto) {
        if (user.role === user_role_enum_1.UserRole.PATIENT) {
            return this.appointmentService.findByPatient(user.id, paginationDto);
        }
        else if (user.role === user_role_enum_1.UserRole.DOCTOR) {
            return this.appointmentService.findByDoctor(user.id, paginationDto);
        }
        return this.appointmentService.findAll({}, paginationDto);
    }
    async getUpcoming(user) {
        return this.appointmentService.getUpcomingAppointments(user.id, user.role);
    }
    async getToday(user) {
        return this.appointmentService.getTodayAppointments(user.id, user.role);
    }
    async getStats(user, doctorId) {
        const targetDoctorId = user.role === user_role_enum_1.UserRole.DOCTOR ? user.id : doctorId;
        return this.appointmentService.getAppointmentStats(targetDoctorId);
    }
    async findById(id) {
        return this.appointmentService.findById(id);
    }
    async update(id, updateAppointmentDto) {
        return this.appointmentService.update(id, updateAppointmentDto);
    }
    async updateStatus(id, updateStatusDto) {
        return this.appointmentService.updateStatus(id, updateStatusDto);
    }
    async cancel(id, user, reason) {
        return this.appointmentService.cancel(id, reason, user.id);
    }
};
exports.AppointmentController = AppointmentController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.PATIENT),
    (0, swagger_1.ApiOperation)({ summary: 'Create new appointment' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Appointment created successfully' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        appointment_dto_1.CreateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.ADMIN, user_role_enum_1.UserRole.DOCTOR),
    (0, swagger_1.ApiOperation)({ summary: 'Get all appointments' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appointment_dto_1.AppointmentQueryDto,
        pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('my-appointments'),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user appointments' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getMyAppointments", null);
__decorate([
    (0, common_1.Get)('upcoming'),
    (0, swagger_1.ApiOperation)({ summary: 'Get upcoming appointments' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getUpcoming", null);
__decorate([
    (0, common_1.Get)('today'),
    (0, swagger_1.ApiOperation)({ summary: 'Get today appointments' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getToday", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.ADMIN, user_role_enum_1.UserRole.DOCTOR),
    (0, swagger_1.ApiOperation)({ summary: 'Get appointment statistics' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get appointment by ID' }),
    __param(0, (0, common_1.Param)('id', is_valid_uuid_pipe_1.IsValidUuidPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.ADMIN, user_role_enum_1.UserRole.DOCTOR),
    (0, swagger_1.ApiOperation)({ summary: 'Update appointment' }),
    __param(0, (0, common_1.Param)('id', is_valid_uuid_pipe_1.IsValidUuidPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, appointment_dto_1.UpdateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.ADMIN, user_role_enum_1.UserRole.DOCTOR),
    (0, swagger_1.ApiOperation)({ summary: 'Update appointment status' }),
    __param(0, (0, common_1.Param)('id', is_valid_uuid_pipe_1.IsValidUuidPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, appointment_dto_1.UpdateAppointmentStatusDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel appointment' }),
    __param(0, (0, common_1.Param)('id', is_valid_uuid_pipe_1.IsValidUuidPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Body)('reason')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "cancel", null);
exports.AppointmentController = AppointmentController = __decorate([
    (0, swagger_1.ApiTags)('Appointments'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('appointments'),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentService])
], AppointmentController);
//# sourceMappingURL=appointment.controller.js.map