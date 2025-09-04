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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaboratoryQualityMetrics = exports.LaboratoryResult = exports.LaboratoryOrder = exports.LaboratoryTestCatalog = exports.PathologyReport = exports.PathologySpecimen = exports.PathologyCase = void 0;
const typeorm_1 = require("typeorm");
const patient_management_entity_1 = require("./patient-management.entity");
const facility_provider_entity_1 = require("./facility-provider.entity");
let PathologyCase = class PathologyCase {
};
exports.PathologyCase = PathologyCase;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PathologyCase.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PathologyCase.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PathologyCase.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PathologyCase.prototype, "pathologist_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologyCase.prototype, "case_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologyCase.prototype, "specimen_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologyCase.prototype, "case_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologyCase.prototype, "priority_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PathologyCase.prototype, "received_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PathologyCase.prototype, "reported_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologyCase.prototype, "case_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "clinical_history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "clinical_impression", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "specimen_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "anatomic_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "procedure_performed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "ordering_physician", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "specimen_container", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "fixation_medium", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "gross_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "microscopic_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "special_stains", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "immunohistochemistry", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "molecular_studies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "flow_cytometry", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "electron_microscopy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "staging_grading", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "margin_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "prognostic_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "additional_studies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "consultation_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "quality_assurance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "turnaround_times", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyCase.prototype, "billing_codes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PathologyCase.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PathologyCase.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], PathologyCase.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'pathologist_id' }),
    __metadata("design:type", typeof (_a = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _a : Object)
], PathologyCase.prototype, "pathologist", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PathologySpecimen, specimen => specimen.pathology_case),
    __metadata("design:type", Array)
], PathologyCase.prototype, "specimens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PathologyReport, report => report.pathology_case),
    __metadata("design:type", Array)
], PathologyCase.prototype, "reports", void 0);
exports.PathologyCase = PathologyCase = __decorate([
    (0, typeorm_1.Entity)('pathology_cases'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['pathologist_id']),
    (0, typeorm_1.Index)(['case_number']),
    (0, typeorm_1.Index)(['specimen_type']),
    (0, typeorm_1.Index)(['case_status']),
    (0, typeorm_1.Index)(['priority_level']),
    (0, typeorm_1.Index)(['received_date']),
    (0, typeorm_1.Index)(['reported_date']),
    (0, typeorm_1.Index)(['case_category'])
], PathologyCase);
let PathologySpecimen = class PathologySpecimen {
};
exports.PathologySpecimen = PathologySpecimen;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PathologySpecimen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PathologySpecimen.prototype, "pathology_case_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "specimen_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "specimen_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PathologySpecimen.prototype, "collection_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "processing_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "block_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "slide_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "specimen_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "collection_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "anatomic_site", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "container_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "fixation_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "gross_examination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "sectioning_protocol", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "processing_protocol", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "staining_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "slide_preparation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "digital_images", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "microscopic_findings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "special_procedures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "storage_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "retention_schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "chain_of_custody", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologySpecimen.prototype, "quality_control", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PathologySpecimen.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PathologySpecimen.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PathologyCase, pathologyCase => pathologyCase.specimens),
    (0, typeorm_1.JoinColumn)({ name: 'pathology_case_id' }),
    __metadata("design:type", PathologyCase)
], PathologySpecimen.prototype, "pathology_case", void 0);
exports.PathologySpecimen = PathologySpecimen = __decorate([
    (0, typeorm_1.Entity)('pathology_specimens'),
    (0, typeorm_1.Index)(['pathology_case_id']),
    (0, typeorm_1.Index)(['specimen_id']),
    (0, typeorm_1.Index)(['specimen_type']),
    (0, typeorm_1.Index)(['collection_date']),
    (0, typeorm_1.Index)(['processing_status']),
    (0, typeorm_1.Index)(['block_number']),
    (0, typeorm_1.Index)(['slide_number'])
], PathologySpecimen);
let PathologyReport = class PathologyReport {
};
exports.PathologyReport = PathologyReport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PathologyReport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], PathologyReport.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PathologyReport.prototype, "pathology_case_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologyReport.prototype, "report_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologyReport.prototype, "report_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], PathologyReport.prototype, "signed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], PathologyReport.prototype, "pathologist_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PathologyReport.prototype, "report_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "clinical_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "specimen_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "gross_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "microscopic_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "ancillary_studies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "diagnosis_summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "diagnostic_comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "tumor_staging", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "prognostic_indicators", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "therapeutic_implications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "follow_up_recommendations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "consultation_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "quality_indicators", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "reference_materials", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "addenda_amendments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "distribution_list", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathologyReport.prototype, "billing_diagnosis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PathologyReport.prototype, "dictation_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PathologyReport.prototype, "transcription_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PathologyReport.prototype, "verification_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PathologyReport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PathologyReport.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PathologyCase, pathologyCase => pathologyCase.reports),
    (0, typeorm_1.JoinColumn)({ name: 'pathology_case_id' }),
    __metadata("design:type", PathologyCase)
], PathologyReport.prototype, "pathology_case", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'pathologist_id' }),
    __metadata("design:type", typeof (_b = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _b : Object)
], PathologyReport.prototype, "pathologist", void 0);
exports.PathologyReport = PathologyReport = __decorate([
    (0, typeorm_1.Entity)('pathology_reports'),
    (0, typeorm_1.Index)(['pathology_case_id']),
    (0, typeorm_1.Index)(['report_type']),
    (0, typeorm_1.Index)(['report_status']),
    (0, typeorm_1.Index)(['signed_date']),
    (0, typeorm_1.Index)(['pathologist_id']),
    (0, typeorm_1.Index)(['report_version'])
], PathologyReport);
let LaboratoryTestCatalog = class LaboratoryTestCatalog {
};
exports.LaboratoryTestCatalog = LaboratoryTestCatalog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LaboratoryTestCatalog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, unique: true, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "test_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "test_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "test_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "test_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "specimen_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "methodology", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "test_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "clinical_significance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "reference_ranges", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "critical_values", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "specimen_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "collection_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "processing_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "storage_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "transport_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "rejection_criteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "turnaround_times", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "testing_schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "interfering_substances", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "test_limitations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "quality_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "regulatory_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "billing_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "test_synonyms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryTestCatalog.prototype, "ordering_restrictions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryTestCatalog.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryTestCatalog.prototype, "updated_at", void 0);
exports.LaboratoryTestCatalog = LaboratoryTestCatalog = __decorate([
    (0, typeorm_1.Entity)('laboratory_test_catalog'),
    (0, typeorm_1.Index)(['test_code']),
    (0, typeorm_1.Index)(['test_name']),
    (0, typeorm_1.Index)(['test_category']),
    (0, typeorm_1.Index)(['department']),
    (0, typeorm_1.Index)(['test_status']),
    (0, typeorm_1.Index)(['specimen_type']),
    (0, typeorm_1.Index)(['methodology'])
], LaboratoryTestCatalog);
let LaboratoryOrder = class LaboratoryOrder {
};
exports.LaboratoryOrder = LaboratoryOrder;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "ordering_provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "order_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "collection_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "order_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryOrder.prototype, "test_catalog_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "order_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "clinical_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "specimen_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "collection_instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "processing_notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "special_handling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "billing_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "insurance_authorization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "expected_completion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "actual_completion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryOrder.prototype, "quality_indicators", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryOrder.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], LaboratoryOrder.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'ordering_provider' }),
    __metadata("design:type", typeof (_c = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _c : Object)
], LaboratoryOrder.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => LaboratoryTestCatalog),
    (0, typeorm_1.JoinColumn)({ name: 'test_catalog_id' }),
    __metadata("design:type", LaboratoryTestCatalog)
], LaboratoryOrder.prototype, "test_catalog", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => LaboratoryResult, result => result.laboratory_order),
    __metadata("design:type", Array)
], LaboratoryOrder.prototype, "results", void 0);
exports.LaboratoryOrder = LaboratoryOrder = __decorate([
    (0, typeorm_1.Entity)('laboratory_orders'),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['ordering_provider']),
    (0, typeorm_1.Index)(['order_date']),
    (0, typeorm_1.Index)(['collection_date']),
    (0, typeorm_1.Index)(['order_status']),
    (0, typeorm_1.Index)(['priority']),
    (0, typeorm_1.Index)(['test_catalog_id']),
    (0, typeorm_1.Index)(['department'])
], LaboratoryOrder);
let LaboratoryResult = class LaboratoryResult {
};
exports.LaboratoryResult = LaboratoryResult;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LaboratoryResult.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryResult.prototype, "laboratory_order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryResult.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "test_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], LaboratoryResult.prototype, "result_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "result_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "critical_flag", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryResult.prototype, "verified_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "result_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "result_units", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "reference_range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "abnormal_flags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "result_interpretation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "technical_comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "quality_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "methodology_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "instrument_details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "dilution_factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "repeat_analysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "delta_check", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "critical_notification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryResult.prototype, "result_amendments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryResult.prototype, "performed_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryResult.prototype, "verified_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], LaboratoryResult.prototype, "released_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryResult.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryResult.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => LaboratoryOrder, order => order.results),
    (0, typeorm_1.JoinColumn)({ name: 'laboratory_order_id' }),
    __metadata("design:type", LaboratoryOrder)
], LaboratoryResult.prototype, "laboratory_order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_management_entity_1.Patient),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_management_entity_1.Patient)
], LaboratoryResult.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'verified_by' }),
    __metadata("design:type", typeof (_d = typeof facility_provider_entity_1.User !== "undefined" && facility_provider_entity_1.User) === "function" ? _d : Object)
], LaboratoryResult.prototype, "verifier", void 0);
exports.LaboratoryResult = LaboratoryResult = __decorate([
    (0, typeorm_1.Entity)('laboratory_results'),
    (0, typeorm_1.Index)(['laboratory_order_id']),
    (0, typeorm_1.Index)(['patient_id']),
    (0, typeorm_1.Index)(['test_code']),
    (0, typeorm_1.Index)(['result_date']),
    (0, typeorm_1.Index)(['result_status']),
    (0, typeorm_1.Index)(['critical_flag']),
    (0, typeorm_1.Index)(['verified_by'])
], LaboratoryResult);
let LaboratoryQualityMetrics = class LaboratoryQualityMetrics {
};
exports.LaboratoryQualityMetrics = LaboratoryQualityMetrics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], LaboratoryQualityMetrics.prototype, "reporting_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "facility_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "metric_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "test_category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "quality_indicator", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "total_tests", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "average_tat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "tat_compliance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "critical_values", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "critical_notification_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "specimen_rejections", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "rejection_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "accuracy_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "precision_cv", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], LaboratoryQualityMetrics.prototype, "contamination_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "proficiency_testing", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "quality_control", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "calibration_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "instrument_maintenance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "staff_competency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "customer_satisfaction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "cost_per_test", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaboratoryQualityMetrics.prototype, "regulatory_compliance", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryQualityMetrics.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LaboratoryQualityMetrics.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facility_provider_entity_1.Facility),
    (0, typeorm_1.JoinColumn)({ name: 'facility_id' }),
    __metadata("design:type", facility_provider_entity_1.Facility)
], LaboratoryQualityMetrics.prototype, "facility", void 0);
exports.LaboratoryQualityMetrics = LaboratoryQualityMetrics = __decorate([
    (0, typeorm_1.Entity)('laboratory_quality_metrics'),
    (0, typeorm_1.Index)(['reporting_period']),
    (0, typeorm_1.Index)(['department']),
    (0, typeorm_1.Index)(['facility_id']),
    (0, typeorm_1.Index)(['metric_type']),
    (0, typeorm_1.Index)(['test_category']),
    (0, typeorm_1.Index)(['quality_indicator'])
], LaboratoryQualityMetrics);
//# sourceMappingURL=advanced-pathology-laboratory-information.entity.js.map