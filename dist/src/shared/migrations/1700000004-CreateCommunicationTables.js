"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommunicationTables1700000004 = void 0;
class CreateCommunicationTables1700000004 {
    constructor() {
        this.name = 'CreateCommunicationTables1700000004';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "messages" (
                "id" varchar PRIMARY KEY NOT NULL,
                "subject" varchar NOT NULL,
                "content" text NOT NULL,
                "type" varchar NOT NULL,
                "priority" varchar NOT NULL,
                "status" varchar NOT NULL DEFAULT ('draft'),
                "senderId" varchar NOT NULL,
                "recipientId" varchar,
                "patientId" varchar,
                "scheduledAt" datetime,
                "sentAt" datetime,
                "deliveredAt" datetime,
                "readAt" datetime,
                "metadata" text,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_messages_senderId" FOREIGN KEY ("senderId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_messages_recipientId" FOREIGN KEY ("recipientId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_messages_patientId" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "message_recipients" (
                "id" varchar PRIMARY KEY NOT NULL,
                "messageId" varchar NOT NULL,
                "userId" varchar NOT NULL,
                "type" varchar NOT NULL,
                "status" varchar NOT NULL DEFAULT ('sent'),
                "deliveredAt" datetime,
                "readAt" datetime,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_message_recipients_messageId" FOREIGN KEY ("messageId") REFERENCES "messages" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_message_recipients_userId" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "message_attachments" (
                "id" varchar PRIMARY KEY NOT NULL,
                "messageId" varchar NOT NULL,
                "fileName" varchar NOT NULL,
                "originalName" varchar NOT NULL,
                "mimeType" varchar NOT NULL,
                "fileSize" integer NOT NULL,
                "filePath" varchar NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_message_attachments_messageId" FOREIGN KEY ("messageId") REFERENCES "messages" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "notifications" (
                "id" varchar PRIMARY KEY NOT NULL,
                "title" varchar NOT NULL,
                "content" text NOT NULL,
                "type" varchar NOT NULL,
                "category" varchar NOT NULL,
                "status" varchar NOT NULL DEFAULT ('unread'),
                "userId" varchar NOT NULL,
                "patientId" varchar,
                "actionUrl" varchar,
                "actionData" text,
                "expiresAt" datetime,
                "readAt" datetime,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_notifications_userId" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_notifications_patientId" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "communication_templates" (
                "id" varchar PRIMARY KEY NOT NULL,
                "name" varchar NOT NULL,
                "description" varchar,
                "type" varchar NOT NULL,
                "category" varchar NOT NULL,
                "subject" varchar NOT NULL,
                "content" text NOT NULL,
                "variables" text,
                "settings" text,
                "isActive" boolean NOT NULL DEFAULT (1),
                "createdById" varchar NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_communication_templates_createdById" FOREIGN KEY ("createdById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "patient_portal_messages" (
                "id" varchar PRIMARY KEY NOT NULL,
                "subject" varchar NOT NULL,
                "content" text NOT NULL,
                "type" varchar NOT NULL,
                "status" varchar NOT NULL DEFAULT ('open'),
                "patientId" varchar NOT NULL,
                "assignedToId" varchar,
                "resolvedAt" datetime,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_patient_portal_messages_patientId" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_patient_portal_messages_assignedToId" FOREIGN KEY ("assignedToId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "patient_portal_message_replies" (
                "id" varchar PRIMARY KEY NOT NULL,
                "messageId" varchar NOT NULL,
                "content" text NOT NULL,
                "userId" varchar,
                "isFromPatient" boolean NOT NULL DEFAULT (0),
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_patient_portal_message_replies_messageId" FOREIGN KEY ("messageId") REFERENCES "patient_portal_messages" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_patient_portal_message_replies_userId" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "communication_preferences" (
                "id" varchar PRIMARY KEY NOT NULL,
                "userId" varchar NOT NULL,
                "emailNotifications" boolean NOT NULL DEFAULT (1),
                "smsNotifications" boolean NOT NULL DEFAULT (0),
                "pushNotifications" boolean NOT NULL DEFAULT (1),
                "preferences" text NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_communication_preferences_userId" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`CREATE INDEX "IDX_messages_type_status" ON "messages" ("type", "status")`);
        await queryRunner.query(`CREATE INDEX "IDX_messages_senderId_createdAt" ON "messages" ("senderId", "createdAt")`);
        await queryRunner.query(`CREATE INDEX "IDX_messages_recipientId_createdAt" ON "messages" ("recipientId", "createdAt")`);
        await queryRunner.query(`CREATE INDEX "IDX_notifications_type_status" ON "notifications" ("type", "status")`);
        await queryRunner.query(`CREATE INDEX "IDX_notifications_userId_createdAt" ON "notifications" ("userId", "createdAt")`);
        await queryRunner.query(`CREATE INDEX "IDX_patient_portal_messages_patientId_createdAt" ON "patient_portal_messages" ("patientId", "createdAt")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "communication_preferences"`);
        await queryRunner.query(`DROP TABLE "patient_portal_message_replies"`);
        await queryRunner.query(`DROP TABLE "patient_portal_messages"`);
        await queryRunner.query(`DROP TABLE "communication_templates"`);
        await queryRunner.query(`DROP TABLE "notifications"`);
        await queryRunner.query(`DROP TABLE "message_attachments"`);
        await queryRunner.query(`DROP TABLE "message_recipients"`);
        await queryRunner.query(`DROP TABLE "messages"`);
    }
}
exports.CreateCommunicationTables1700000004 = CreateCommunicationTables1700000004;
//# sourceMappingURL=1700000004-CreateCommunicationTables.js.map