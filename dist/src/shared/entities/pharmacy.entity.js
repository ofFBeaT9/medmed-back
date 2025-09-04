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
exports.MedicationAdherence = exports.DrugInteraction = exports.PrescriptionRefill = exports.PrescriptionEntity = exports.Medication = void 0;
const typeorm_1 = require("typeorm");
const patient_entity_1 = require("./patient.entity");
const user_entity_1 = require("./user.entity");
const medical_record_entity_1 = require("./medical-record.entity");
let Medication = class Medication {
};
exports.Medication = Medication;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Medication.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Medication.prototype, "ndcNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medication.prototype, "genericName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "brandName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "strength", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "dosageForm", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "route", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "drugClass", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "therapeuticClass", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "controlledSubstanceSchedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], Medication.prototype, "indications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], Medication.prototype, "contraindications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], Medication.prototype, "warnings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], Medication.prototype, "sideEffects", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], Medication.prototype, "interactions", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "adultDose", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "pediatricDose", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "geriatricDose", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "renalDose", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medication.prototype, "hepaticDose", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Medication.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Medication.prototype, "isDiscontinued", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Medication.prototype, "discontinuedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Medication.prototype, "isFormulary", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Medication.prototype, "requiresPriorAuth", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Medication.prototype, "isGenericAvailable", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Medication.prototype, "awpPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Medication.prototype, "wholesalePrice", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Medication.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Medication.prototype, "updatedAt", void 0);
exports.Medication = Medication = __decorate([
    (0, typeorm_1.Entity)('medications'),
    (0, typeorm_1.Index)(['genericName']),
    (0, typeorm_1.Index)(['brandName']),
    (0, typeorm_1.Index)(['ndcNumber'], { unique: true })
], Medication);
let PrescriptionEntity = class PrescriptionEntity {
};
exports.PrescriptionEntity = PrescriptionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "prescriptionNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "rxNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "prescriberId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "medicalRecordId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "medicationId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "medicationName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "ndcNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "dosage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "frequency", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "route", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PrescriptionEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "quantityUnit", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PrescriptionEntity.prototype, "daysSupply", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], PrescriptionEntity.prototype, "refillsRemaining", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], PrescriptionEntity.prototype, "totalRefills", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", Date)
], PrescriptionEntity.prototype, "prescribedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PrescriptionEntity.prototype, "expirationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PrescriptionEntity.prototype, "dispensedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PrescriptionEntity.prototype, "lastRefillDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'active' }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], PrescriptionEntity.prototype, "isElectronic", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], PrescriptionEntity.prototype, "isControlled", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "indication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "pharmacistNotes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "patientInstructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], PrescriptionEntity.prototype, "allergyChecked", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], PrescriptionEntity.prototype, "interactionChecked", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], PrescriptionEntity.prototype, "allergyAlerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], PrescriptionEntity.prototype, "interactionAlerts", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "pharmacyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "pharmacistId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PrescriptionEntity.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PrescriptionEntity.prototype, "copay", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], PrescriptionEntity.prototype, "isBilled", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PrescriptionEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PrescriptionEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "lastModifiedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_entity_1.Patient)
], PrescriptionEntity.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'prescriberId' }),
    __metadata("design:type", user_entity_1.User)
], PrescriptionEntity.prototype, "prescriber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Medication),
    (0, typeorm_1.JoinColumn)({ name: 'medicationId' }),
    __metadata("design:type", Medication)
], PrescriptionEntity.prototype, "medication", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medical_record_entity_1.MedicalRecord, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'medicalRecordId' }),
    __metadata("design:type", medical_record_entity_1.MedicalRecord)
], PrescriptionEntity.prototype, "medicalRecord", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'pharmacistId' }),
    __metadata("design:type", user_entity_1.User)
], PrescriptionEntity.prototype, "pharmacist", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PrescriptionRefill, refill => refill.prescription),
    __metadata("design:type", Array)
], PrescriptionEntity.prototype, "refills", void 0);
exports.PrescriptionEntity = PrescriptionEntity = __decorate([
    (0, typeorm_1.Entity)('prescriptions'),
    (0, typeorm_1.Index)(['patientId', 'prescribedDate']),
    (0, typeorm_1.Index)(['prescriptionNumber'], { unique: true }),
    (0, typeorm_1.Index)(['status'])
], PrescriptionEntity);
let PrescriptionRefill = class PrescriptionRefill {
};
exports.PrescriptionRefill = PrescriptionRefill;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PrescriptionRefill.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrescriptionRefill.prototype, "prescriptionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", Date)
], PrescriptionRefill.prototype, "refillDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PrescriptionRefill.prototype, "quantityDispensed", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PrescriptionRefill.prototype, "daysSupply", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionRefill.prototype, "pharmacistId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PrescriptionRefill.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PrescriptionRefill.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PrescriptionRefill.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PrescriptionEntity),
    (0, typeorm_1.JoinColumn)({ name: 'prescriptionId' }),
    __metadata("design:type", PrescriptionEntity)
], PrescriptionRefill.prototype, "prescription", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'pharmacistId' }),
    __metadata("design:type", user_entity_1.User)
], PrescriptionRefill.prototype, "pharmacist", void 0);
exports.PrescriptionRefill = PrescriptionRefill = __decorate([
    (0, typeorm_1.Entity)('prescription_refills')
], PrescriptionRefill);
let DrugInteraction = class DrugInteraction {
};
exports.DrugInteraction = DrugInteraction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DrugInteraction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DrugInteraction.prototype, "drug1Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DrugInteraction.prototype, "drug2Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DrugInteraction.prototype, "severityLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], DrugInteraction.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugInteraction.prototype, "clinicalEffect", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DrugInteraction.prototype, "management", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], DrugInteraction.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DrugInteraction.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DrugInteraction.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Medication),
    (0, typeorm_1.JoinColumn)({ name: 'drug1Id' }),
    __metadata("design:type", Medication)
], DrugInteraction.prototype, "drug1", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Medication),
    (0, typeorm_1.JoinColumn)({ name: 'drug2Id' }),
    __metadata("design:type", Medication)
], DrugInteraction.prototype, "drug2", void 0);
exports.DrugInteraction = DrugInteraction = __decorate([
    (0, typeorm_1.Entity)('drug_interactions')
], DrugInteraction);
let MedicationAdherence = class MedicationAdherence {
};
exports.MedicationAdherence = MedicationAdherence;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MedicationAdherence.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MedicationAdherence.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MedicationAdherence.prototype, "prescriptionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], MedicationAdherence.prototype, "reportDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], MedicationAdherence.prototype, "adherencePercentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], MedicationAdherence.prototype, "missedDoses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], MedicationAdherence.prototype, "reasons", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], MedicationAdherence.prototype, "interventions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MedicationAdherence.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_entity_1.Patient)
], MedicationAdherence.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PrescriptionEntity),
    (0, typeorm_1.JoinColumn)({ name: 'prescriptionId' }),
    __metadata("design:type", PrescriptionEntity)
], MedicationAdherence.prototype, "prescription", void 0);
exports.MedicationAdherence = MedicationAdherence = __decorate([
    (0, typeorm_1.Entity)('medication_adherence')
], MedicationAdherence);
//# sourceMappingURL=pharmacy.entity.js.map