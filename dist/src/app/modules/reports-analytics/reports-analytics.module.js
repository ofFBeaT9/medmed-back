"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsAnalyticsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reports_analytics_controller_1 = require("./reports-analytics.controller");
const reports_analytics_service_1 = require("./reports-analytics.service");
const reports_analytics_entity_1 = require("../../../shared/entities/reports-analytics.entity");
let ReportsAnalyticsModule = class ReportsAnalyticsModule {
};
exports.ReportsAnalyticsModule = ReportsAnalyticsModule;
exports.ReportsAnalyticsModule = ReportsAnalyticsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                reports_analytics_entity_1.Report,
                reports_analytics_entity_1.ReportExecution,
                reports_analytics_entity_1.ReportShare,
                reports_analytics_entity_1.Dashboard,
                reports_analytics_entity_1.DashboardShare,
                reports_analytics_entity_1.AnalyticsEvent,
                reports_analytics_entity_1.KPIMetric
            ])
        ],
        controllers: [reports_analytics_controller_1.ReportsAnalyticsController],
        providers: [reports_analytics_service_1.ReportsAnalyticsService],
        exports: [reports_analytics_service_1.ReportsAnalyticsService]
    })
], ReportsAnalyticsModule);
//# sourceMappingURL=reports-analytics.module.js.map