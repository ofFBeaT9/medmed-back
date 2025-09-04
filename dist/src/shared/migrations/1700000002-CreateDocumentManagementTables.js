"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocumentManagementTables1700000002 = void 0;
class CreateDocumentManagementTables1700000002 {
    constructor() {
        this.name = 'CreateDocumentManagementTables1700000002';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "documents" (
                "id" varchar PRIMARY KEY NOT NULL,
                "name" varchar NOT NULL,
                "description" varchar,
                "category" varchar NOT NULL,
                "mimeType" varchar NOT NULL,
                "fileSize" integer NOT NULL,
                "filePath" varchar NOT NULL,
                "thumbnailPath" varchar,
                "metadata" text,
                "isEncrypted" boolean NOT NULL DEFAULT (0),
                "encryptionKeyId" varchar,
                "status" varchar NOT NULL DEFAULT ('draft'),
                "visibility" varchar NOT NULL DEFAULT ('private'),
                "permissions" text,
                "version" varchar,
                "parentDocumentId" varchar,
                "patientId" varchar,
                "uploadedById" varchar NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                "deletedAt" datetime,
                CONSTRAINT "FK_documents_patientId" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_documents_uploadedById" FOREIGN KEY ("uploadedById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_documents_parentDocumentId" FOREIGN KEY ("parentDocumentId") REFERENCES "documents" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "document_access_logs" (
                "id" varchar PRIMARY KEY NOT NULL,
                "documentId" varchar NOT NULL,
                "userId" varchar NOT NULL,
                "action" varchar NOT NULL,
                "ipAddress" varchar,
                "userAgent" varchar,
                "accessedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_document_access_logs_documentId" FOREIGN KEY ("documentId") REFERENCES "documents" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_document_access_logs_userId" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "document_tags" (
                "id" varchar PRIMARY KEY NOT NULL,
                "documentId" varchar NOT NULL,
                "tag" varchar NOT NULL,
                "color" varchar,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_document_tags_documentId" FOREIGN KEY ("documentId") REFERENCES "documents" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "document_shares" (
                "id" varchar PRIMARY KEY NOT NULL,
                "documentId" varchar NOT NULL,
                "sharedWithUserId" varchar,
                "sharedWithEmail" varchar,
                "sharedById" varchar NOT NULL,
                "permission" varchar NOT NULL,
                "expiresAt" datetime,
                "accessToken" varchar,
                "isActive" boolean NOT NULL DEFAULT (1),
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_document_shares_documentId" FOREIGN KEY ("documentId") REFERENCES "documents" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_document_shares_sharedWithUserId" FOREIGN KEY ("sharedWithUserId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_document_shares_sharedById" FOREIGN KEY ("sharedById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "document_templates" (
                "id" varchar PRIMARY KEY NOT NULL,
                "name" varchar NOT NULL,
                "description" varchar,
                "category" varchar NOT NULL,
                "template" text NOT NULL,
                "fields" text,
                "settings" text,
                "isActive" boolean NOT NULL DEFAULT (1),
                "createdById" varchar NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_document_templates_createdById" FOREIGN KEY ("createdById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "document_folders" (
                "id" varchar PRIMARY KEY NOT NULL,
                "name" varchar NOT NULL,
                "description" varchar,
                "parentFolderId" varchar,
                "patientId" varchar,
                "createdById" varchar NOT NULL,
                "visibility" varchar NOT NULL DEFAULT ('private'),
                "permissions" text,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_document_folders_parentFolderId" FOREIGN KEY ("parentFolderId") REFERENCES "document_folders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_document_folders_patientId" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_document_folders_createdById" FOREIGN KEY ("createdById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`CREATE INDEX "IDX_documents_category_mimeType" ON "documents" ("category", "mimeType")`);
        await queryRunner.query(`CREATE INDEX "IDX_documents_patientId_createdAt" ON "documents" ("patientId", "createdAt")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "document_folders"`);
        await queryRunner.query(`DROP TABLE "document_templates"`);
        await queryRunner.query(`DROP TABLE "document_shares"`);
        await queryRunner.query(`DROP TABLE "document_tags"`);
        await queryRunner.query(`DROP TABLE "document_access_logs"`);
        await queryRunner.query(`DROP TABLE "documents"`);
    }
}
exports.CreateDocumentManagementTables1700000002 = CreateDocumentManagementTables1700000002;
//# sourceMappingURL=1700000002-CreateDocumentManagementTables.js.map