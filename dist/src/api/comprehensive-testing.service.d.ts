import { Hl7FhirService } from './hl7-fhir-service';
import { DicomService } from './dicom-service';
import { PaymentGatewayService } from './payment-gateway-service';
import { LabIntegrationService } from './lab-integration-service';
import { NotificationService } from './notification-service';
import { ReportingService } from './reporting-service';
export declare class ComprehensiveTestingService {
    private readonly hl7FhirService;
    private readonly dicomService;
    private readonly paymentGatewayService;
    private readonly labIntegrationService;
    private readonly notificationService;
    private readonly reportingService;
    constructor(hl7FhirService: Hl7FhirService, dicomService: DicomService, paymentGatewayService: PaymentGatewayService, labIntegrationService: LabIntegrationService, notificationService: NotificationService, reportingService: ReportingService);
    runAllTests(): Promise<any>;
}
