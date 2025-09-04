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
exports.Payment = exports.InsuranceClaim = exports.PatientInsurance = exports.InsurancePlan = exports.BillingCharge = exports.BillingEncounter = void 0;
const typeorm_1 = require("typeorm");
const patient_entity_1 = require("./patient.entity");
const user_entity_1 = require("./user.entity");
const medical_record_entity_1 = require("./medical-record.entity");
let BillingEncounter = class BillingEncounter {
};
exports.BillingEncounter = BillingEncounter;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BillingEncounter.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "encounterNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "externalId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BillingEncounter.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BillingEncounter.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "facilityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "medicalRecordId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], BillingEncounter.prototype, "serviceDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "encounterType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "placeOfService", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "typeOfService", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], BillingEncounter.prototype, "totalCharges", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], BillingEncounter.prototype, "totalPayments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], BillingEncounter.prototype, "totalAdjustments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], BillingEncounter.prototype, "patientBalance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], BillingEncounter.prototype, "insuranceBalance", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'open' }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], BillingEncounter.prototype, "isBilled", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], BillingEncounter.prototype, "billedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "primaryInsuranceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "secondaryInsuranceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "authorizationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "referralNumber", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BillingEncounter.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BillingEncounter.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingEncounter.prototype, "lastModifiedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_entity_1.Patient)
], BillingEncounter.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'providerId' }),
    __metadata("design:type", user_entity_1.User)
], BillingEncounter.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medical_record_entity_1.MedicalRecord, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'medicalRecordId' }),
    __metadata("design:type", medical_record_entity_1.MedicalRecord)
], BillingEncounter.prototype, "medicalRecord", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => BillingCharge, charge => charge.encounter),
    __metadata("design:type", Array)
], BillingEncounter.prototype, "charges", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => InsuranceClaim, claim => claim.encounter),
    __metadata("design:type", Array)
], BillingEncounter.prototype, "claims", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Payment, payment => payment.encounter),
    __metadata("design:type", Array)
], BillingEncounter.prototype, "payments", void 0);
exports.BillingEncounter = BillingEncounter = __decorate([
    (0, typeorm_1.Entity)('billing_encounters'),
    (0, typeorm_1.Index)(['patientId', 'serviceDate']),
    (0, typeorm_1.Index)(['status']),
    (0, typeorm_1.Index)(['encounterNumber'], { unique: true })
], BillingEncounter);
let BillingCharge = class BillingCharge {
};
exports.BillingCharge = BillingCharge;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BillingCharge.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BillingCharge.prototype, "encounterId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BillingCharge.prototype, "procedureCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingCharge.prototype, "procedureCodeType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BillingCharge.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingCharge.prototype, "modifier1", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingCharge.prototype, "modifier2", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingCharge.prototype, "modifier3", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingCharge.prototype, "modifier4", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingCharge.prototype, "primaryDiagnosisCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], BillingCharge.prototype, "additionalDiagnosisCodes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], BillingCharge.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], BillingCharge.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], BillingCharge.prototype, "totalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], BillingCharge.prototype, "allowedAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], BillingCharge.prototype, "paidAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], BillingCharge.prototype, "adjustmentAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], BillingCharge.prototype, "balanceAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], BillingCharge.prototype, "serviceDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingCharge.prototype, "serviceLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BillingCharge.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pending' }),
    __metadata("design:type", String)
], BillingCharge.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], BillingCharge.prototype, "isBillable", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BillingCharge.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BillingCharge.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BillingEncounter),
    (0, typeorm_1.JoinColumn)({ name: 'encounterId' }),
    __metadata("design:type", BillingEncounter)
], BillingCharge.prototype, "encounter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'providerId' }),
    __metadata("design:type", user_entity_1.User)
], BillingCharge.prototype, "provider", void 0);
exports.BillingCharge = BillingCharge = __decorate([
    (0, typeorm_1.Entity)('billing_charges'),
    (0, typeorm_1.Index)(['encounterId']),
    (0, typeorm_1.Index)(['procedureCode'])
], BillingCharge);
let InsurancePlan = class InsurancePlan {
};
exports.InsurancePlan = InsurancePlan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InsurancePlan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InsurancePlan.prototype, "planName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InsurancePlan.prototype, "payerName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InsurancePlan.prototype, "payerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InsurancePlan.prototype, "planType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InsurancePlan.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InsurancePlan.prototype, "faxNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InsurancePlan.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InsurancePlan.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], InsurancePlan.prototype, "coverageDetails", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], InsurancePlan.prototype, "copayInformation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], InsurancePlan.prototype, "deductibleInformation", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], InsurancePlan.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], InsurancePlan.prototype, "acceptsElectronicClaims", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InsurancePlan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InsurancePlan.prototype, "updatedAt", void 0);
exports.InsurancePlan = InsurancePlan = __decorate([
    (0, typeorm_1.Entity)('insurance_plans')
], InsurancePlan);
let PatientInsurance = class PatientInsurance {
};
exports.PatientInsurance = PatientInsurance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientInsurance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PatientInsurance.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PatientInsurance.prototype, "insurancePlanId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PatientInsurance.prototype, "policyNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PatientInsurance.prototype, "groupNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PatientInsurance.prototype, "subscriberId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PatientInsurance.prototype, "subscriberName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PatientInsurance.prototype, "relationshipToSubscriber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], PatientInsurance.prototype, "effectiveDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PatientInsurance.prototype, "terminationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], PatientInsurance.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PatientInsurance.prototype, "authorizationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PatientInsurance.prototype, "authorizationExpiry", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], PatientInsurance.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientInsurance.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientInsurance.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_entity_1.Patient)
], PatientInsurance.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => InsurancePlan),
    (0, typeorm_1.JoinColumn)({ name: 'insurancePlanId' }),
    __metadata("design:type", InsurancePlan)
], PatientInsurance.prototype, "insurancePlan", void 0);
exports.PatientInsurance = PatientInsurance = __decorate([
    (0, typeorm_1.Entity)('patient_insurance'),
    (0, typeorm_1.Index)(['patientId'])
], PatientInsurance);
let InsuranceClaim = class InsuranceClaim {
};
exports.InsuranceClaim = InsuranceClaim;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InsuranceClaim.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], InsuranceClaim.prototype, "claimNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InsuranceClaim.prototype, "externalClaimId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InsuranceClaim.prototype, "encounterId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InsuranceClaim.prototype, "patientInsuranceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], InsuranceClaim.prototype, "claimDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], InsuranceClaim.prototype, "submittedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], InsuranceClaim.prototype, "totalCharges", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], InsuranceClaim.prototype, "allowedAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], InsuranceClaim.prototype, "paidAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], InsuranceClaim.prototype, "patientResponsibility", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pending' }),
    __metadata("design:type", String)
], InsuranceClaim.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], InsuranceClaim.prototype, "isElectronic", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InsuranceClaim.prototype, "denialReason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], InsuranceClaim.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InsuranceClaim.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InsuranceClaim.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BillingEncounter),
    (0, typeorm_1.JoinColumn)({ name: 'encounterId' }),
    __metadata("design:type", BillingEncounter)
], InsuranceClaim.prototype, "encounter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PatientInsurance),
    (0, typeorm_1.JoinColumn)({ name: 'patientInsuranceId' }),
    __metadata("design:type", PatientInsurance)
], InsuranceClaim.prototype, "patientInsurance", void 0);
exports.InsuranceClaim = InsuranceClaim = __decorate([
    (0, typeorm_1.Entity)('insurance_claims'),
    (0, typeorm_1.Index)(['encounterId']),
    (0, typeorm_1.Index)(['claimNumber'], { unique: true }),
    (0, typeorm_1.Index)(['status'])
], InsuranceClaim);
let Payment = class Payment {
};
exports.Payment = Payment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payment.prototype, "encounterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Payment.prototype, "paymentDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payment.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "paymentSource", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "referenceNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "checkNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "processedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Payment.prototype, "processedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Payment.prototype, "isRefund", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "originalPaymentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'posted' }),
    __metadata("design:type", String)
], Payment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Payment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Payment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BillingEncounter),
    (0, typeorm_1.JoinColumn)({ name: 'encounterId' }),
    __metadata("design:type", BillingEncounter)
], Payment.prototype, "encounter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'processedBy' }),
    __metadata("design:type", user_entity_1.User)
], Payment.prototype, "processor", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Entity)('payments'),
    (0, typeorm_1.Index)(['encounterId']),
    (0, typeorm_1.Index)(['paymentDate'])
], Payment);
//# sourceMappingURL=billing.entity.js.map