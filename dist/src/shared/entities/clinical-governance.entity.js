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
exports.BackgroundService = exports.DocumentCategory = exports.CodeSystem = exports.ClinicalRulesLog = exports.ClinicalRule = exports.ClinicalPlan = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const patient_entity_1 = require("./patient.entity");
let ClinicalPlan = class ClinicalPlan {
};
exports.ClinicalPlan = ClinicalPlan;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, primary: true }),
    __metadata("design:type", String)
], ClinicalPlan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pid', type: 'bigint', primary: true, default: 0 }),
    __metadata("design:type", Number)
], ClinicalPlan.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'normal_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalPlan.prototype, "normalFlag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cqm_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalPlan.prototype, "cqmFlag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cqm_2011_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalPlan.prototype, "cqm2011Flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cqm_2014_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalPlan.prototype, "cqm2014Flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cqm_measure_group', type: 'varchar', length: 10, default: '' }),
    __metadata("design:type", String)
], ClinicalPlan.prototype, "cqmMeasureGroup", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'pid' }),
    __metadata("design:type", patient_entity_1.Patient)
], ClinicalPlan.prototype, "patient", void 0);
exports.ClinicalPlan = ClinicalPlan = __decorate([
    (0, typeorm_1.Entity)('clinical_plans'),
    (0, typeorm_1.Index)(['id', 'patientId'])
], ClinicalPlan);
let ClinicalRule = class ClinicalRule {
};
exports.ClinicalRule = ClinicalRule;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, primary: true }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pid', type: 'bigint', primary: true, default: 0 }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'active_alert_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "activeAlertFlag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'passive_alert_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "passiveAlertFlag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cqm_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "cqmFlag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cqm_2011_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "cqm2011Flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cqm_2014_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "cqm2014Flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cqm_nqf_code', type: 'varchar', length: 10, default: '' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "cqmNqfCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cqm_pqri_code', type: 'varchar', length: 10, default: '' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "cqmPqriCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amc_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "amcFlag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amc_2011_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "amc2011Flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amc_2014_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "amc2014Flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amc_2015_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "amc2015Flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amc_code', type: 'varchar', length: 10, default: '' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "amcCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amc_code_2014', type: 'varchar', length: 30, default: '' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "amcCode2014", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amc_code_2015', type: 'varchar', length: 30, default: '' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "amcCode2015", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amc_2014_stage1_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "amc2014Stage1Flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amc_2014_stage2_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "amc2014Stage2Flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_reminder_flag', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], ClinicalRule.prototype, "patientReminderFlag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bibliographic_citation', type: 'varchar', length: 255, default: '' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "bibliographicCitation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, default: '' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "developer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'funding_source', type: 'varchar', length: 255, default: '' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "fundingSource", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'release_version', type: 'varchar', length: 255, default: '' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "releaseVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'web_reference', type: 'varchar', length: 255, default: '' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "webReference", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'linked_referential_cds', type: 'varchar', length: 50, default: '' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "linkedReferentialCds", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'access_control', type: 'varchar', length: 255, default: 'patients:med' }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "accessControl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_dob_usage', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "patientDobUsage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_ethnicity_usage', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "patientEthnicityUsage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_health_status_usage', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "patientHealthStatusUsage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_gender_identity_usage', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "patientGenderIdentityUsage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_language_usage', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "patientLanguageUsage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_race_usage', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "patientRaceUsage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_sex_usage', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "patientSexUsage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_sexual_orientation_usage', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "patientSexualOrientationUsage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_sodh_usage', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalRule.prototype, "patientSodhUsage", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'pid' }),
    __metadata("design:type", patient_entity_1.Patient)
], ClinicalRule.prototype, "patient", void 0);
exports.ClinicalRule = ClinicalRule = __decorate([
    (0, typeorm_1.Entity)('clinical_rules'),
    (0, typeorm_1.Index)(['id', 'patientId'])
], ClinicalRule);
let ClinicalRulesLog = class ClinicalRulesLog {
};
exports.ClinicalRulesLog = ClinicalRulesLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ClinicalRulesLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ClinicalRulesLog.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pid', type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], ClinicalRulesLog.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'uid', type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], ClinicalRulesLog.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, default: '' }),
    __metadata("design:type", String)
], ClinicalRulesLog.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalRulesLog.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'new_value', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ClinicalRulesLog.prototype, "newValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'facility_id', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ClinicalRulesLog.prototype, "facilityId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'pid' }),
    __metadata("design:type", patient_entity_1.Patient)
], ClinicalRulesLog.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'uid' }),
    __metadata("design:type", user_entity_1.User)
], ClinicalRulesLog.prototype, "user", void 0);
exports.ClinicalRulesLog = ClinicalRulesLog = __decorate([
    (0, typeorm_1.Entity)('clinical_rules_log'),
    (0, typeorm_1.Index)(['patientId']),
    (0, typeorm_1.Index)(['userId']),
    (0, typeorm_1.Index)(['category'])
], ClinicalRulesLog);
let CodeSystem = class CodeSystem {
};
exports.CodeSystem = CodeSystem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CodeSystem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'code_text', type: 'text', nullable: true }),
    __metadata("design:type", String)
], CodeSystem.prototype, "codeText", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'code_text_short', type: 'text', nullable: true }),
    __metadata("design:type", String)
], CodeSystem.prototype, "codeTextShort", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 25, default: '' }),
    __metadata("design:type", String)
], CodeSystem.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'code_type', type: 'smallint', nullable: true }),
    __metadata("design:type", Number)
], CodeSystem.prototype, "codeType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 12, default: '' }),
    __metadata("design:type", String)
], CodeSystem.prototype, "modifier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CodeSystem.prototype, "units", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], CodeSystem.prototype, "fee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, default: '' }),
    __metadata("design:type", String)
], CodeSystem.prototype, "superbill", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'related_code', type: 'varchar', length: 255, default: '' }),
    __metadata("design:type", String)
], CodeSystem.prototype, "relatedCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, default: '' }),
    __metadata("design:type", String)
], CodeSystem.prototype, "taxrates", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cyp_factor', type: 'float', default: 0 }),
    __metadata("design:type", Number)
], CodeSystem.prototype, "cypFactor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], CodeSystem.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], CodeSystem.prototype, "reportable", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'financial_reporting', type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], CodeSystem.prototype, "financialReporting", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'revenue_code', type: 'varchar', length: 6, default: '' }),
    __metadata("design:type", String)
], CodeSystem.prototype, "revenueCode", void 0);
exports.CodeSystem = CodeSystem = __decorate([
    (0, typeorm_1.Entity)('codes'),
    (0, typeorm_1.Index)(['code']),
    (0, typeorm_1.Index)(['codeType'])
], CodeSystem);
let DocumentCategory = class DocumentCategory {
};
exports.DocumentCategory = DocumentCategory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DocumentCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DocumentCategory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], DocumentCategory.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], DocumentCategory.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], DocumentCategory.prototype, "lft", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], DocumentCategory.prototype, "rght", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aco_spec', type: 'varchar', length: 63, default: 'patients|docs' }),
    __metadata("design:type", String)
], DocumentCategory.prototype, "acoSpec", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, default: '' }),
    __metadata("design:type", String)
], DocumentCategory.prototype, "codes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DocumentCategory, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'parent' }),
    __metadata("design:type", DocumentCategory)
], DocumentCategory.prototype, "parentCategory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DocumentCategory, category => category.parentCategory),
    __metadata("design:type", Array)
], DocumentCategory.prototype, "children", void 0);
exports.DocumentCategory = DocumentCategory = __decorate([
    (0, typeorm_1.Entity)('categories'),
    (0, typeorm_1.Index)(['parent']),
    (0, typeorm_1.Index)(['lft', 'rght'])
], DocumentCategory);
let BackgroundService = class BackgroundService {
};
exports.BackgroundService = BackgroundService;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 31, primary: true }),
    __metadata("design:type", String)
], BackgroundService.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 127 }),
    __metadata("design:type", String)
], BackgroundService.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], BackgroundService.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: -1 }),
    __metadata("design:type", Number)
], BackgroundService.prototype, "running", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'next_run', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], BackgroundService.prototype, "nextRun", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'execute_interval', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], BackgroundService.prototype, "executeInterval", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'function', type: 'varchar', length: 127 }),
    __metadata("design:type", String)
], BackgroundService.prototype, "functionName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'require_once', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], BackgroundService.prototype, "requireOnce", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sort_order', type: 'int', default: 100 }),
    __metadata("design:type", Number)
], BackgroundService.prototype, "sortOrder", void 0);
exports.BackgroundService = BackgroundService = __decorate([
    (0, typeorm_1.Entity)('background_services')
], BackgroundService);
//# sourceMappingURL=clinical-governance.entity.js.map