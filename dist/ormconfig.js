"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./src/shared/entities/user.entity");
const patient_entity_1 = require("./src/shared/entities/patient.entity");
const appointment_entity_1 = require("./src/shared/entities/appointment.entity");
const availabilityslot_entity_1 = require("./src/shared/entities/availabilityslot.entity");
const medical_record_entity_1 = require("./src/shared/entities/medical-record.entity");
const prescription_entity_1 = require("./src/shared/entities/prescription.entity");
const review_entity_1 = require("./src/shared/entities/review.entity");
const transaction_entity_1 = require("./src/shared/entities/transaction.entity");
const laboratory_entity_1 = require("./src/shared/entities/laboratory.entity");
const pharmacy_entity_1 = require("./src/shared/entities/pharmacy.entity");
const billing_entity_1 = require("./src/shared/entities/billing.entity");
const clinical_decision_support_entity_1 = require("./src/shared/entities/clinical-decision-support.entity");
const document_management_entity_1 = require("./src/shared/entities/document-management.entity");
const reports_analytics_entity_1 = require("./src/shared/entities/reports-analytics.entity");
const communication_entity_1 = require("./src/shared/entities/communication.entity");
const inventory_management_entity_1 = require("./src/shared/entities/inventory-management.entity");
const forms_templates_entity_1 = require("./src/shared/entities/forms-templates.entity");
const workflow_management_entity_1 = require("./src/shared/entities/workflow-management.entity");
const integration_modules_entity_1 = require("./src/shared/entities/integration-modules.entity");
const security_access_entity_1 = require("./src/shared/entities/security-access.entity");
const organization_setup_entity_1 = require("./src/shared/entities/organization-setup.entity");
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
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
    migrations: ['src/shared/migrations/*{.ts,.js}'],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=ormconfig.js.map