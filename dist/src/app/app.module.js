"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const appointment_module_1 = require("./appointment/appointment.module");
const availabilityslot_module_1 = require("./availabilityslot/availabilityslot.module");
const record_module_1 = require("./record/record.module");
const prescription_module_1 = require("./prescription/prescription.module");
const review_module_1 = require("./review/review.module");
const transaction_module_1 = require("./transaction/transaction.module");
const admin_module_1 = require("./admin/admin.module");
const document_management_module_1 = require("./modules/document-management/document-management.module");
const reports_analytics_module_1 = require("./modules/reports-analytics/reports-analytics.module");
const cloudinary_module_1 = require("../shared/modules/cloudinary/cloudinary.module");
const stripe_module_1 = require("../shared/modules/stripe/stripe.module");
const email_module_1 = require("../shared/modules/email/email.module");
const integration_api_module_1 = require("../api/integration-api.module");
const user_entity_1 = require("../shared/entities/user.entity");
const patient_entity_1 = require("../shared/entities/patient.entity");
const appointment_entity_1 = require("../shared/entities/appointment.entity");
const availabilityslot_entity_1 = require("../shared/entities/availabilityslot.entity");
const medical_record_entity_1 = require("../shared/entities/medical-record.entity");
const prescription_entity_1 = require("../shared/entities/prescription.entity");
const review_entity_1 = require("../shared/entities/review.entity");
const transaction_entity_1 = require("../shared/entities/transaction.entity");
const laboratory_entity_1 = require("../shared/entities/laboratory.entity");
const pharmacy_entity_1 = require("../shared/entities/pharmacy.entity");
const billing_entity_1 = require("../shared/entities/billing.entity");
const clinical_decision_support_entity_1 = require("../shared/entities/clinical-decision-support.entity");
const document_management_entity_1 = require("../shared/entities/document-management.entity");
const reports_analytics_entity_1 = require("../shared/entities/reports-analytics.entity");
const communication_entity_1 = require("../shared/entities/communication.entity");
const inventory_management_entity_1 = require("../shared/entities/inventory-management.entity");
const forms_templates_entity_1 = require("../shared/entities/forms-templates.entity");
const workflow_management_entity_1 = require("../shared/entities/workflow-management.entity");
const integration_modules_entity_1 = require("../shared/entities/integration-modules.entity");
const security_access_entity_1 = require("../shared/entities/security-access.entity");
const organization_setup_entity_1 = require("../shared/entities/organization-setup.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'sqlite',
                    database: configService.get('DATABASE_URL') || 'healthcare.db',
                    entities: [
                        user_entity_1.User,
                        patient_entity_1.Patient,
                        appointment_entity_1.Appointment,
                        availabilityslot_entity_1.AvailabilitySlot,
                        medical_record_entity_1.MedicalRecord,
                        prescription_entity_1.Prescription,
                        review_entity_1.Review,
                        transaction_entity_1.Transaction,
                        laboratory_entity_1.LabTest,
                        laboratory_entity_1.LabPanel,
                        laboratory_entity_1.LabReferenceRange,
                        pharmacy_entity_1.Medication,
                        pharmacy_entity_1.PrescriptionEntity,
                        pharmacy_entity_1.PrescriptionRefill,
                        pharmacy_entity_1.DrugInteraction,
                        pharmacy_entity_1.MedicationAdherence,
                        billing_entity_1.BillingEncounter,
                        billing_entity_1.BillingCharge,
                        billing_entity_1.InsurancePlan,
                        billing_entity_1.PatientInsurance,
                        billing_entity_1.InsuranceClaim,
                        billing_entity_1.Payment,
                        clinical_decision_support_entity_1.CDSRule,
                        clinical_decision_support_entity_1.CDSAlert,
                        clinical_decision_support_entity_1.QualityMeasure,
                        clinical_decision_support_entity_1.QualityMeasureResult,
                        clinical_decision_support_entity_1.ClinicalGuideline,
                        clinical_decision_support_entity_1.PreventiveCareReminder,
                        document_management_entity_1.Document,
                        document_management_entity_1.DocumentAccess,
                        document_management_entity_1.DocumentTag,
                        document_management_entity_1.DocumentShare,
                        document_management_entity_1.DocumentTemplate,
                        document_management_entity_1.DocumentFolder,
                        reports_analytics_entity_1.Report,
                        reports_analytics_entity_1.ReportExecution,
                        reports_analytics_entity_1.ReportShare,
                        reports_analytics_entity_1.Dashboard,
                        reports_analytics_entity_1.DashboardShare,
                        reports_analytics_entity_1.AnalyticsEvent,
                        reports_analytics_entity_1.KPIMetric,
                        communication_entity_1.Message,
                        communication_entity_1.MessageRecipient,
                        communication_entity_1.MessageAttachment,
                        communication_entity_1.Notification,
                        communication_entity_1.CommunicationTemplate,
                        communication_entity_1.PatientPortalMessage,
                        communication_entity_1.PatientPortalMessageReply,
                        communication_entity_1.CommunicationPreference,
                        inventory_management_entity_1.InventoryItem,
                        inventory_management_entity_1.Supplier,
                        inventory_management_entity_1.InventoryTransaction,
                        inventory_management_entity_1.PurchaseOrder,
                        inventory_management_entity_1.PurchaseOrderItem,
                        inventory_management_entity_1.InventoryLocation,
                        inventory_management_entity_1.StockAlert,
                        forms_templates_entity_1.FormTemplate,
                        forms_templates_entity_1.FormTemplateVersion,
                        forms_templates_entity_1.FormSubmission,
                        forms_templates_entity_1.FormSubmissionFile,
                        forms_templates_entity_1.Questionnaire,
                        forms_templates_entity_1.QuestionnaireResponse,
                        forms_templates_entity_1.ClinicalProtocol,
                        forms_templates_entity_1.ProtocolExecution,
                        workflow_management_entity_1.Workflow,
                        workflow_management_entity_1.WorkflowVersion,
                        workflow_management_entity_1.WorkflowInstance,
                        workflow_management_entity_1.WorkflowTask,
                        workflow_management_entity_1.TaskComment,
                        workflow_management_entity_1.WorkflowHistory,
                        workflow_management_entity_1.ApprovalWorkflow,
                        workflow_management_entity_1.ApprovalStep,
                        integration_modules_entity_1.IntegrationEndpoint,
                        integration_modules_entity_1.IntegrationLog,
                        integration_modules_entity_1.HL7Message,
                        integration_modules_entity_1.FHIRResource,
                        integration_modules_entity_1.APIKey,
                        integration_modules_entity_1.APIUsageLog,
                        integration_modules_entity_1.WebhookEndpoint,
                        integration_modules_entity_1.WebhookDelivery,
                        integration_modules_entity_1.DataSyncJob,
                        security_access_entity_1.AuditLog,
                        security_access_entity_1.AccessControlList,
                        security_access_entity_1.Role,
                        security_access_entity_1.UserRole,
                        security_access_entity_1.Session,
                        security_access_entity_1.PasswordResetToken,
                        security_access_entity_1.LoginAttempt,
                        security_access_entity_1.SecuritySetting,
                        organization_setup_entity_1.Facility,
                        organization_setup_entity_1.Department,
                        organization_setup_entity_1.FacilityUser,
                        organization_setup_entity_1.DepartmentUser,
                        organization_setup_entity_1.InsuranceCompany,
                        organization_setup_entity_1.GlobalSetting,
                        organization_setup_entity_1.UserPreference,
                        organization_setup_entity_1.ListOption,
                        organization_setup_entity_1.CodeType,
                        organization_setup_entity_1.Code,
                    ],
                    migrations: ['dist/shared/migrations/*{.ts,.js}'],
                    migrationsRun: true,
                    synchronize: false,
                    logging: configService.get('NODE_ENV') === 'development',
                }),
            }),
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    secret: configService.get('JWT_SECRET') || 'healthcare-secret-key',
                    signOptions: { expiresIn: '24h' },
                }),
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            appointment_module_1.AppointmentModule,
            availabilityslot_module_1.AvailabilitySlotModule,
            record_module_1.MedicalRecordModule,
            prescription_module_1.PrescriptionModule,
            review_module_1.ReviewModule,
            transaction_module_1.TransactionModule,
            admin_module_1.AdminModule,
            document_management_module_1.DocumentManagementModule,
            reports_analytics_module_1.ReportsAnalyticsModule,
            cloudinary_module_1.CloudinaryModule,
            stripe_module_1.StripeModule,
            email_module_1.EmailModule,
            integration_api_module_1.IntegrationApiModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map