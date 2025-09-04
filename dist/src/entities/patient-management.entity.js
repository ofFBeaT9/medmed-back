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
exports.EncounterVital = exports.EncounterForm = exports.Encounter = exports.PatientNote = exports.PatientAddress = exports.PatientContact = exports.Patient = void 0;
const typeorm_1 = require("typeorm");
let Patient = class Patient {
};
exports.Patient = Patient;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Patient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], Patient.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 63, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 63, nullable: false }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Patient.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 63, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "middle_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 63, nullable: false }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Patient.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 63, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "suffix", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 64, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "preferred_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 63, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "birth_first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 63, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "birth_last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], Patient.prototype, "date_of_birth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "gender_identity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "sexual_orientation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Patient.prototype, "ss_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "street_line_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 11, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "postal_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "country_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "phone_home", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "phone_biz", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "phone_contact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "phone_cell", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "email_direct", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "race", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "ethnicity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "religion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "marital_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "financial_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "family_size", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "monthly_income", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "homeless", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "interpretation_needed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "migrant_seasonal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "deceased_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Patient.prototype, "deceased_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "birth_sex", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "medical_record_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Patient.prototype, "external_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "emergency_contact_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "emergency_contact_relationship", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "emergency_contact_phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "employer_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "employer_street", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "employer_city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "employer_state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 11, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "employer_postal_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "occupation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "guardian_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "guardian_relationship", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "guardian_phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "guardian_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "allow_patient_portal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "allow_patient_reminder", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "allow_immunization_info_sharing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "allow_immunization_registry_use", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "allow_health_info_exchange", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "allow_patient_portal_communications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Patient.prototype, "care_team_provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Patient.prototype, "care_team_facility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 127, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "providerID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "ref_providerID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "pharmacy_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "hipaa_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "hipaa_voice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "hipaa_notice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "hipaa_mail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "hipaa_allowsms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "hipaa_allowemail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "squad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Patient.prototype, "fitness", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Patient.prototype, "referral_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "usertext1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "usertext2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "usertext3", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "usertext4", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "usertext5", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "usertext6", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "usertext7", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "usertext8", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "userarea1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "userarea2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Patient.prototype, "userdate1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "regdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "contrastart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "completed_ad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "ad_reviewed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "vfc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "mothersname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Patient.prototype, "guardiansname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "allow_imm_reg_use", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "allow_imm_info_share", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "allow_health_info_ex", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "cmsportal_login", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "care_team", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "county", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "industry", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "imm_reg_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "imm_reg_stat_effdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "publicity_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "publ_code_eff_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "protect_indicator", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "prot_indi_effdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Patient.prototype, "soap_import_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], Patient.prototype, "cmsportal_login_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Patient.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Patient.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PatientContact, contact => contact.patient),
    __metadata("design:type", Array)
], Patient.prototype, "contacts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PatientAddress, address => address.patient),
    __metadata("design:type", Array)
], Patient.prototype, "addresses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Encounter, encounter => encounter.patient),
    __metadata("design:type", Array)
], Patient.prototype, "encounters", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PatientNote, note => note.patient),
    __metadata("design:type", Array)
], Patient.prototype, "notes", void 0);
exports.Patient = Patient = __decorate([
    (0, typeorm_1.Entity)('patients'),
    (0, typeorm_1.Index)(['last_name', 'first_name']),
    (0, typeorm_1.Index)(['date_of_birth']),
    (0, typeorm_1.Index)(['external_id']),
    (0, typeorm_1.Index)(['ss_number'])
], Patient);
let PatientContact = class PatientContact {
};
exports.PatientContact = PatientContact;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientContact.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientContact.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], PatientContact.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientContact.prototype, "contact_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientContact.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientContact.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientContact.prototype, "relationship", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientContact.prototype, "phone_primary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientContact.prototype, "phone_secondary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientContact.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], PatientContact.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientContact.prototype, "use_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientContact.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 1, default: 'A' }),
    __metadata("design:type", String)
], PatientContact.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 1, default: 'N' }),
    __metadata("design:type", String)
], PatientContact.prototype, "is_primary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientContact.prototype, "period_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientContact.prototype, "period_end", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], PatientContact.prototype, "inactivated_reason", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientContact.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientContact.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Patient, patient => patient.contacts),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", Patient)
], PatientContact.prototype, "patient", void 0);
exports.PatientContact = PatientContact = __decorate([
    (0, typeorm_1.Entity)('patient_contacts'),
    (0, typeorm_1.Index)(['contact_type']),
    (0, typeorm_1.Index)(['priority'])
], PatientContact);
let PatientAddress = class PatientAddress {
};
exports.PatientAddress = PatientAddress;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientAddress.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientAddress.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], PatientAddress.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientAddress.prototype, "address_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientAddress.prototype, "line1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientAddress.prototype, "line2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], PatientAddress.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 11, nullable: true }),
    __metadata("design:type", String)
], PatientAddress.prototype, "postal_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientAddress.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientAddress.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], PatientAddress.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientAddress.prototype, "use_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientAddress.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 1, default: 'A' }),
    __metadata("design:type", String)
], PatientAddress.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 1, default: 'N' }),
    __metadata("design:type", String)
], PatientAddress.prototype, "is_primary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientAddress.prototype, "period_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PatientAddress.prototype, "period_end", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], PatientAddress.prototype, "inactivated_reason", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientAddress.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientAddress.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Patient, patient => patient.addresses),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", Patient)
], PatientAddress.prototype, "patient", void 0);
exports.PatientAddress = PatientAddress = __decorate([
    (0, typeorm_1.Entity)('patient_addresses'),
    (0, typeorm_1.Index)(['address_type']),
    (0, typeorm_1.Index)(['is_primary'])
], PatientAddress);
let PatientNote = class PatientNote {
};
exports.PatientNote = PatientNote;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PatientNote.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PatientNote.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], PatientNote.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientNote.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PatientNote.prototype, "body", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], PatientNote.prototype, "note_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PatientNote.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientNote.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PatientNote.prototype, "groupname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], PatientNote.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], PatientNote.prototype, "authorized", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], PatientNote.prototype, "portal_relation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PatientNote.prototype, "date_end", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], PatientNote.prototype, "message_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], PatientNote.prototype, "update_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PatientNote.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PatientNote.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PatientNote.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Patient, patient => patient.notes),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", Patient)
], PatientNote.prototype, "patient", void 0);
exports.PatientNote = PatientNote = __decorate([
    (0, typeorm_1.Entity)('patient_notes'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['note_type']),
    (0, typeorm_1.Index)(['activity'])
], PatientNote);
let Encounter = class Encounter {
};
exports.Encounter = Encounter;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Encounter.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], Encounter.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Encounter.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], Encounter.prototype, "encounter_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], Encounter.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Encounter.prototype, "date_end", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Encounter.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Encounter.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Encounter.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Encounter.prototype, "onset_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], Encounter.prototype, "sensitivity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Encounter.prototype, "billing_note", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 5 }),
    __metadata("design:type", Number)
], Encounter.prototype, "pc_catid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Encounter.prototype, "last_level_billed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Encounter.prototype, "last_level_closed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Encounter.prototype, "last_stmt_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Encounter.prototype, "stmt_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Encounter.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Encounter.prototype, "supervisor_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, default: '' }),
    __metadata("design:type", String)
], Encounter.prototype, "invoice_refno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, default: '' }),
    __metadata("design:type", String)
], Encounter.prototype, "referral_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Encounter.prototype, "billing_facility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Encounter.prototype, "external_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], Encounter.prototype, "pos_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], Encounter.prototype, "parent_encounter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, default: 'AMB' }),
    __metadata("design:type", String)
], Encounter.prototype, "class_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, default: '' }),
    __metadata("design:type", String)
], Encounter.prototype, "shift", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, default: '' }),
    __metadata("design:type", String)
], Encounter.prototype, "voucher_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Encounter.prototype, "discharge_disposition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, nullable: true }),
    __metadata("design:type", String)
], Encounter.prototype, "encounter_type_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Encounter.prototype, "encounter_type_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Encounter.prototype, "referring_provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Encounter.prototype, "ordering_provider_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], Encounter.prototype, "in_collection", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Encounter.prototype, "last_update", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Encounter.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Encounter.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Patient, patient => patient.encounters),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", Patient)
], Encounter.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EncounterForm, form => form.encounter),
    __metadata("design:type", Array)
], Encounter.prototype, "forms", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EncounterVital, vital => vital.encounter),
    __metadata("design:type", Array)
], Encounter.prototype, "vitals", void 0);
exports.Encounter = Encounter = __decorate([
    (0, typeorm_1.Entity)('encounters'),
    (0, typeorm_1.Index)(['patient_id', 'encounter_number']),
    (0, typeorm_1.Index)(['date']),
    (0, typeorm_1.Index)(['provider_id']),
    (0, typeorm_1.Index)(['facility_id'])
], Encounter);
let EncounterForm = class EncounterForm {
};
exports.EncounterForm = EncounterForm;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EncounterForm.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], EncounterForm.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], EncounterForm.prototype, "encounter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EncounterForm.prototype, "form_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], EncounterForm.prototype, "form_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], EncounterForm.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], EncounterForm.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], EncounterForm.prototype, "groupname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], EncounterForm.prototype, "authorized", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], EncounterForm.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EncounterForm.prototype, "formdir", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], EncounterForm.prototype, "therapy_group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], EncounterForm.prototype, "issue_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], EncounterForm.prototype, "provider_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EncounterForm.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EncounterForm.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Encounter, encounter => encounter.forms),
    (0, typeorm_1.JoinColumn)({ name: 'encounter_id' }),
    __metadata("design:type", Encounter)
], EncounterForm.prototype, "encounter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", Patient)
], EncounterForm.prototype, "patient", void 0);
exports.EncounterForm = EncounterForm = __decorate([
    (0, typeorm_1.Entity)('encounter_forms'),
    (0, typeorm_1.Index)(['encounter_id']),
    (0, typeorm_1.Index)(['form_name']),
    (0, typeorm_1.Index)(['patient_id'])
], EncounterForm);
let EncounterVital = class EncounterVital {
};
exports.EncounterVital = EncounterVital;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EncounterVital.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], EncounterVital.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], EncounterVital.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "encounter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], EncounterVital.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], EncounterVital.prototype, "groupname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "authorized", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "activity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 40, nullable: true }),
    __metadata("design:type", String)
], EncounterVital.prototype, "bps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 40, nullable: true }),
    __metadata("design:type", String)
], EncounterVital.prototype, "bpd", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 6, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 6, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 6, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], EncounterVital.prototype, "temp_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 6, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "pulse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 6, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "respiration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], EncounterVital.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 6, default: 0.0 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "BMI", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], EncounterVital.prototype, "BMI_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 6, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "waist_circ", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 6, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "head_circ", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "oxygen_saturation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 6, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "oxygen_flow_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], EncounterVital.prototype, "external_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "ped_weight_height", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "ped_bmi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "ped_head_circ", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 6, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], EncounterVital.prototype, "inhaled_oxygen_concentration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], EncounterVital.prototype, "last_updated", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EncounterVital.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EncounterVital.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Encounter, encounter => encounter.vitals),
    (0, typeorm_1.JoinColumn)({ name: 'encounter_id' }),
    __metadata("design:type", Encounter)
], EncounterVital.prototype, "encounter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", Patient)
], EncounterVital.prototype, "patient", void 0);
exports.EncounterVital = EncounterVital = __decorate([
    (0, typeorm_1.Entity)('encounter_vitals'),
    (0, typeorm_1.Index)(['encounter_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['date'])
], EncounterVital);
//# sourceMappingURL=patient-management.entity.js.map