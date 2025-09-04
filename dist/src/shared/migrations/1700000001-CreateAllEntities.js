"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAllEntities1700000001 = void 0;
class CreateAllEntities1700000001 {
    constructor() {
        this.name = 'CreateAllEntities1700000001';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" varchar PRIMARY KEY NOT NULL,
                "email" varchar NOT NULL,
                "username" varchar NOT NULL,
                "password" varchar NOT NULL,
                "firstName" varchar NOT NULL,
                "lastName" varchar NOT NULL,
                "phone" varchar,
                "dateOfBirth" datetime,
                "gender" varchar,
                "address" varchar,
                "city" varchar,
                "state" varchar,
                "zipCode" varchar,
                "country" varchar,
                "specialization" varchar,
                "licenseNumber" varchar,
                "npi" varchar,
                "role" varchar NOT NULL DEFAULT ('user'),
                "isActive" boolean NOT NULL DEFAULT (1),
                "isEmailVerified" boolean NOT NULL DEFAULT (0),
                "emailVerifiedAt" datetime,
                "lastLoginAt" datetime,
                "profilePicture" varchar,
                "metadata" text,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "UQ_users_email" UNIQUE ("email"),
                CONSTRAINT "UQ_users_username" UNIQUE ("username")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "patients" (
                "id" varchar PRIMARY KEY NOT NULL,
                "medicalRecordNumber" varchar,
                "firstName" varchar NOT NULL,
                "lastName" varchar NOT NULL,
                "dateOfBirth" datetime NOT NULL,
                "gender" varchar NOT NULL,
                "phone" varchar,
                "email" varchar,
                "address" varchar,
                "city" varchar,
                "state" varchar,
                "zipCode" varchar,
                "country" varchar,
                "emergencyContactName" varchar,
                "emergencyContactPhone" varchar,
                "emergencyContactRelation" varchar,
                "bloodType" varchar,
                "allergies" text,
                "medications" text,
                "medicalHistory" text,
                "socialSecurityNumber" varchar,
                "insuranceProvider" varchar,
                "insurancePolicyNumber" varchar,
                "insuranceGroupNumber" varchar,
                "ethnicity" varchar,
                "race" varchar,
                "maritalStatus" varchar,
                "occupation" varchar,
                "employer" varchar,
                "preferredLanguage" varchar,
                "isActive" boolean NOT NULL DEFAULT (1),
                "notes" text,
                "profilePicture" varchar,
                "metadata" text,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "UQ_patients_medicalRecordNumber" UNIQUE ("medicalRecordNumber")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "appointments" (
                "id" varchar PRIMARY KEY NOT NULL,
                "patientId" varchar NOT NULL,
                "providerId" varchar NOT NULL,
                "appointmentDate" datetime NOT NULL,
                "duration" integer NOT NULL DEFAULT (30),
                "type" varchar NOT NULL,
                "status" varchar NOT NULL DEFAULT ('scheduled'),
                "reason" varchar,
                "notes" text,
                "isVirtual" boolean NOT NULL DEFAULT (0),
                "virtualLink" varchar,
                "reminderSent" boolean NOT NULL DEFAULT (0),
                "metadata" text,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_appointments_patientId" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_appointments_providerId" FOREIGN KEY ("providerId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "availability_slots" (
                "id" varchar PRIMARY KEY NOT NULL,
                "providerId" varchar NOT NULL,
                "startTime" datetime NOT NULL,
                "endTime" datetime NOT NULL,
                "isAvailable" boolean NOT NULL DEFAULT (1),
                "isRecurring" boolean NOT NULL DEFAULT (0),
                "recurringPattern" varchar,
                "appointmentId" varchar,
                "metadata" text,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_availability_slots_providerId" FOREIGN KEY ("providerId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_availability_slots_appointmentId" FOREIGN KEY ("appointmentId") REFERENCES "appointments" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "medical_records" (
                "id" varchar PRIMARY KEY NOT NULL,
                "patientId" varchar NOT NULL,
                "providerId" varchar NOT NULL,
                "encounterDate" datetime NOT NULL,
                "encounterType" varchar NOT NULL,
                "chiefComplaint" varchar,
                "historyOfPresentIllness" text,
                "pastMedicalHistory" text,
                "medications" text,
                "allergies" text,
                "socialHistory" text,
                "familyHistory" text,
                "reviewOfSystems" text,
                "physicalExamination" text,
                "vitalSigns" text,
                "assessment" text,
                "plan" text,
                "diagnosis" text,
                "procedures" text,
                "followUpInstructions" text,
                "status" varchar NOT NULL DEFAULT ('draft'),
                "metadata" text,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_medical_records_patientId" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_medical_records_providerId" FOREIGN KEY ("providerId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "roles" (
                "id" varchar PRIMARY KEY NOT NULL,
                "name" varchar NOT NULL,
                "description" varchar,
                "permissions" text NOT NULL,
                "isActive" boolean NOT NULL DEFAULT (1),
                "isSystemRole" boolean NOT NULL DEFAULT (0),
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "UQ_roles_name" UNIQUE ("name")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user_roles" (
                "id" varchar PRIMARY KEY NOT NULL,
                "userId" varchar NOT NULL,
                "roleId" varchar NOT NULL,
                "assignedById" varchar NOT NULL,
                "expiresAt" datetime,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_user_roles_userId" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_user_roles_roleId" FOREIGN KEY ("roleId") REFERENCES "roles" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_user_roles_assignedById" FOREIGN KEY ("assignedById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "audit_logs" (
                "id" varchar PRIMARY KEY NOT NULL,
                "entityType" varchar NOT NULL,
                "entityId" varchar NOT NULL,
                "action" varchar NOT NULL,
                "userId" varchar,
                "ipAddress" varchar,
                "userAgent" varchar,
                "oldValues" text,
                "newValues" text,
                "sessionId" varchar,
                "module" varchar,
                "facility" varchar,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_audit_logs_userId" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "sessions" (
                "id" varchar PRIMARY KEY NOT NULL,
                "sessionToken" varchar NOT NULL,
                "userId" varchar NOT NULL,
                "ipAddress" varchar NOT NULL,
                "userAgent" varchar NOT NULL,
                "isActive" boolean NOT NULL DEFAULT (1),
                "expiresAt" datetime NOT NULL,
                "lastActivityAt" datetime,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_sessions_userId" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "facilities" (
                "id" varchar PRIMARY KEY NOT NULL,
                "name" varchar NOT NULL,
                "description" varchar,
                "facilityType" varchar NOT NULL,
                "npi" varchar,
                "taxId" varchar,
                "address" varchar,
                "city" varchar,
                "state" varchar,
                "zipCode" varchar,
                "country" varchar,
                "phone" varchar,
                "fax" varchar,
                "email" varchar,
                "website" varchar,
                "isActive" boolean NOT NULL DEFAULT (1),
                "operatingHours" text,
                "services" text,
                "accreditations" text,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "departments" (
                "id" varchar PRIMARY KEY NOT NULL,
                "name" varchar NOT NULL,
                "description" varchar,
                "facilityId" varchar NOT NULL,
                "headOfDepartmentId" varchar,
                "isActive" boolean NOT NULL DEFAULT (1),
                "location" varchar,
                "phone" varchar,
                "email" varchar,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_departments_facilityId" FOREIGN KEY ("facilityId") REFERENCES "facilities" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_departments_headOfDepartmentId" FOREIGN KEY ("headOfDepartmentId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "global_settings" (
                "id" varchar PRIMARY KEY NOT NULL,
                "settingKey" varchar NOT NULL,
                "settingValue" text NOT NULL,
                "description" varchar,
                "category" varchar NOT NULL DEFAULT ('general'),
                "dataType" varchar NOT NULL DEFAULT ('string'),
                "isEncrypted" boolean NOT NULL DEFAULT (0),
                "modifiedById" varchar,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "UQ_global_settings_settingKey" UNIQUE ("settingKey"),
                CONSTRAINT "FK_global_settings_modifiedById" FOREIGN KEY ("modifiedById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "code_types" (
                "id" varchar PRIMARY KEY NOT NULL,
                "codeType" varchar NOT NULL,
                "codeTypeName" varchar NOT NULL,
                "description" varchar,
                "isActive" boolean NOT NULL DEFAULT (1),
                "externalUrl" varchar,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "UQ_code_types_codeType" UNIQUE ("codeType")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "codes" (
                "id" varchar PRIMARY KEY NOT NULL,
                "codeTypeId" varchar NOT NULL,
                "code" varchar NOT NULL,
                "description" varchar NOT NULL,
                "longDescription" varchar,
                "isActive" boolean NOT NULL DEFAULT (1),
                "isSelectable" boolean NOT NULL DEFAULT (0),
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_codes_codeTypeId" FOREIGN KEY ("codeTypeId") REFERENCES "code_types" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`CREATE INDEX "IDX_users_email" ON "users" ("email")`);
        await queryRunner.query(`CREATE INDEX "IDX_users_role" ON "users" ("role")`);
        await queryRunner.query(`CREATE INDEX "IDX_patients_medicalRecordNumber" ON "patients" ("medicalRecordNumber")`);
        await queryRunner.query(`CREATE INDEX "IDX_appointments_patientId_appointmentDate" ON "appointments" ("patientId", "appointmentDate")`);
        await queryRunner.query(`CREATE INDEX "IDX_appointments_providerId_appointmentDate" ON "appointments" ("providerId", "appointmentDate")`);
        await queryRunner.query(`CREATE INDEX "IDX_audit_logs_entityType_entityId" ON "audit_logs" ("entityType", "entityId")`);
        await queryRunner.query(`CREATE INDEX "IDX_audit_logs_userId_createdAt" ON "audit_logs" ("userId", "createdAt")`);
        await queryRunner.query(`CREATE INDEX "IDX_sessions_userId_isActive" ON "sessions" ("userId", "isActive")`);
        await queryRunner.query(`CREATE INDEX "IDX_sessions_sessionToken" ON "sessions" ("sessionToken")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "codes"`);
        await queryRunner.query(`DROP TABLE "code_types"`);
        await queryRunner.query(`DROP TABLE "global_settings"`);
        await queryRunner.query(`DROP TABLE "departments"`);
        await queryRunner.query(`DROP TABLE "facilities"`);
        await queryRunner.query(`DROP TABLE "sessions"`);
        await queryRunner.query(`DROP TABLE "audit_logs"`);
        await queryRunner.query(`DROP TABLE "user_roles"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "medical_records"`);
        await queryRunner.query(`DROP TABLE "availability_slots"`);
        await queryRunner.query(`DROP TABLE "appointments"`);
        await queryRunner.query(`DROP TABLE "patients"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.CreateAllEntities1700000001 = CreateAllEntities1700000001;
//# sourceMappingURL=1700000001-CreateAllEntities.js.map