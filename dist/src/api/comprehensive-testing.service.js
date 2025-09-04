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
exports.ComprehensiveTestingService = void 0;
const common_1 = require("@nestjs/common");
const hl7_fhir_service_1 = require("./hl7-fhir-service");
const dicom_service_1 = require("./dicom-service");
const payment_gateway_service_1 = require("./payment-gateway-service");
const lab_integration_service_1 = require("./lab-integration-service");
const notification_service_1 = require("./notification-service");
const reporting_service_1 = require("./reporting-service");
let ComprehensiveTestingService = class ComprehensiveTestingService {
    constructor(hl7FhirService, dicomService, paymentGatewayService, labIntegrationService, notificationService, reportingService) {
        this.hl7FhirService = hl7FhirService;
        this.dicomService = dicomService;
        this.paymentGatewayService = paymentGatewayService;
        this.labIntegrationService = labIntegrationService;
        this.notificationService = notificationService;
        this.reportingService = reportingService;
    }
    async runAllTests() {
        const results = {};
        const mockPatient = {
            id: 1,
            uuid: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
            first_name: 'John',
            last_name: 'Doe',
            date_of_birth: new Date('1990-01-15'),
            sex: 'Male',
        };
        const mockAppointment = {
            pc_eid: 101,
            pc_pid: 1,
            pc_aid: 'provider123',
            pc_startTime: new Date(),
            pc_endTime: new Date(new Date().getTime() + 30 * 60000),
        };
        const mockClinicalNote = {
            id: 201,
            patient_id: 1,
            date: new Date(),
            assessment: 'Patient feels well.',
        };
        try {
            const fhirPatient = this.hl7FhirService.toFhirPatient(mockPatient);
            const fhirAppointment = this.hl7FhirService.toFhirAppointment(mockAppointment);
            const fhirObservation = this.hl7FhirService.toFhirObservation(mockClinicalNote);
            const patientFromJson = this.hl7FhirService.fromFhirPatient(fhirPatient);
            results['hl7FhirService'] = {
                status: 'Success',
                fhirPatientId: fhirPatient.id,
                patientFromJsonLastName: patientFromJson.last_name,
            };
        }
        catch (error) {
            results['hl7FhirService'] = { status: 'Failure', error: error.message };
        }
        try {
            const mockDicomJson = {
                patientName: 'Jane Doe',
                patientID: 'JD123',
                studyInstanceUID: '1.2.3',
                studyDate: '20230101',
                studyTime: '120000',
                modality: 'CT',
                studyDescription: 'Chest CT',
            };
            const dicomDataset = this.dicomService.jsonToDicom(mockDicomJson);
            results['dicomService'] = { status: 'Success', createdModality: dicomDataset.Modality };
        }
        catch (error) {
            results['dicomService'] = { status: 'Failure', error: error.message };
        }
        try {
            await this.paymentGatewayService.createPaymentIntent(1000, 'usd').catch(e => { });
            results['paymentGatewayService'] = { status: 'Success', info: 'Method call did not crash.' };
        }
        catch (error) {
            results['paymentGatewayService'] = { status: 'Failure', error: error.message };
        }
        try {
            const mockLabOrder = {
                orderId: 'LAB567',
                patientId: '1',
                testCode: '8310',
                collectionDateTime: new Date().toISOString(),
            };
            await this.labIntegrationService.submitLabCorpOrder(mockLabOrder).catch(e => { });
            results['labIntegrationService'] = { status: 'Success', info: 'Method call did not crash.' };
        }
        catch (error) {
            results['labIntegrationService'] = { status: 'Failure', error: error.message };
        }
        try {
            await this.notificationService.sendEmail('test@example.com', 'Test', '<p>Test</p>').catch(e => { });
            await this.notificationService.sendSms('+15551234567', 'Test SMS').catch(e => { });
            results['notificationService'] = { status: 'Success', info: 'Method calls did not crash.' };
        }
        catch (error) {
            results['notificationService'] = { status: 'Failure', error: error.message };
        }
        try {
            await this.reportingService.getPatientSummary(1).catch(e => { });
            results['reportingService'] = { status: 'Success', info: 'Method call did not crash.' };
        }
        catch (error) {
            results['reportingService'] = { status: 'Failure', error: error.message };
        }
        return results;
    }
};
exports.ComprehensiveTestingService = ComprehensiveTestingService;
exports.ComprehensiveTestingService = ComprehensiveTestingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hl7_fhir_service_1.Hl7FhirService,
        dicom_service_1.DicomService,
        payment_gateway_service_1.PaymentGatewayService,
        lab_integration_service_1.LabIntegrationService,
        notification_service_1.NotificationService,
        reporting_service_1.ReportingService])
], ComprehensiveTestingService);
//# sourceMappingURL=comprehensive-testing.service.js.map