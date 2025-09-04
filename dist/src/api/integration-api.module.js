"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationApiModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const hl7_fhir_service_1 = require("./hl7-fhir-service");
const dicom_service_1 = require("./dicom-service");
const payment_gateway_service_1 = require("./payment-gateway-service");
const lab_integration_service_1 = require("./lab-integration-service");
const notification_service_1 = require("./notification-service");
const reporting_service_1 = require("./reporting-service");
const comprehensive_testing_service_1 = require("./comprehensive-testing.service");
const comprehensive_testing_controller_1 = require("./comprehensive-testing.controller");
const patient_management_entity_1 = require("../entities/patient-management.entity");
const scheduling_calendar_entity_1 = require("../entities/scheduling-calendar.entity");
const clinical_documentation_entity_1 = require("../entities/clinical-documentation.entity");
let IntegrationApiModule = class IntegrationApiModule {
};
exports.IntegrationApiModule = IntegrationApiModule;
exports.IntegrationApiModule = IntegrationApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([patient_management_entity_1.Patient, scheduling_calendar_entity_1.CalendarEvent, clinical_documentation_entity_1.ClinicalNote]),
        ],
        providers: [
            hl7_fhir_service_1.Hl7FhirService,
            dicom_service_1.DicomService,
            payment_gateway_service_1.PaymentGatewayService,
            lab_integration_service_1.LabIntegrationService,
            notification_service_1.NotificationService,
            reporting_service_1.ReportingService,
            comprehensive_testing_service_1.ComprehensiveTestingService,
        ],
        controllers: [comprehensive_testing_controller_1.ComprehensiveTestingController],
        exports: [hl7_fhir_service_1.Hl7FhirService, dicom_service_1.DicomService, payment_gateway_service_1.PaymentGatewayService, lab_integration_service_1.LabIntegrationService, notification_service_1.NotificationService, reporting_service_1.ReportingService]
    })
], IntegrationApiModule);
//# sourceMappingURL=integration-api.module.js.map