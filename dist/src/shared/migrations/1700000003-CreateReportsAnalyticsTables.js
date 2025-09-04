"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReportsAnalyticsTables1700000003 = void 0;
class CreateReportsAnalyticsTables1700000003 {
    constructor() {
        this.name = 'CreateReportsAnalyticsTables1700000003';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "reports" (
                "id" varchar PRIMARY KEY NOT NULL,
                "name" varchar NOT NULL,
                "description" varchar,
                "type" varchar NOT NULL,
                "category" varchar NOT NULL,
                "parameters" text NOT NULL,
                "filters" text,
                "status" varchar NOT NULL DEFAULT ('draft'),
                "filePath" varchar,
                "fileSize" integer,
                "format" varchar,
                "scheduleCron" varchar,
                "isRecurring" boolean NOT NULL DEFAULT (0),
                "lastRunAt" datetime,
                "nextRunAt" datetime,
                "runCount" integer NOT NULL DEFAULT (0),
                "createdById" varchar NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_reports_createdById" FOREIGN KEY ("createdById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "report_executions" (
                "id" varchar PRIMARY KEY NOT NULL,
                "reportId" varchar NOT NULL,
                "status" varchar NOT NULL DEFAULT ('pending'),
                "startedAt" datetime,
                "completedAt" datetime,
                "filePath" varchar,
                "fileSize" integer,
                "recordCount" integer,
                "errorMessage" text,
                "executionLog" text,
                "executedById" varchar,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_report_executions_reportId" FOREIGN KEY ("reportId") REFERENCES "reports" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_report_executions_executedById" FOREIGN KEY ("executedById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "report_shares" (
                "id" varchar PRIMARY KEY NOT NULL,
                "reportId" varchar NOT NULL,
                "sharedWithUserId" varchar NOT NULL,
                "sharedById" varchar NOT NULL,
                "permission" varchar NOT NULL,
                "isActive" boolean NOT NULL DEFAULT (1),
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_report_shares_reportId" FOREIGN KEY ("reportId") REFERENCES "reports" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_report_shares_sharedWithUserId" FOREIGN KEY ("sharedWithUserId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_report_shares_sharedById" FOREIGN KEY ("sharedById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "dashboards" (
                "id" varchar PRIMARY KEY NOT NULL,
                "name" varchar NOT NULL,
                "description" varchar,
                "type" varchar NOT NULL DEFAULT ('personal'),
                "layout" text NOT NULL,
                "widgets" text NOT NULL,
                "filters" text,
                "refreshInterval" integer NOT NULL DEFAULT (30),
                "isActive" boolean NOT NULL DEFAULT (1),
                "createdById" varchar NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_dashboards_createdById" FOREIGN KEY ("createdById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "dashboard_shares" (
                "id" varchar PRIMARY KEY NOT NULL,
                "dashboardId" varchar NOT NULL,
                "sharedWithUserId" varchar NOT NULL,
                "sharedById" varchar NOT NULL,
                "permission" varchar NOT NULL,
                "isActive" boolean NOT NULL DEFAULT (1),
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_dashboard_shares_dashboardId" FOREIGN KEY ("dashboardId") REFERENCES "dashboards" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_dashboard_shares_sharedWithUserId" FOREIGN KEY ("sharedWithUserId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_dashboard_shares_sharedById" FOREIGN KEY ("sharedById") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "analytics_events" (
                "id" varchar PRIMARY KEY NOT NULL,
                "eventType" varchar NOT NULL,
                "eventCategory" varchar NOT NULL,
                "eventAction" varchar,
                "eventLabel" varchar,
                "userId" varchar,
                "patientId" varchar,
                "sessionId" varchar,
                "properties" text,
                "ipAddress" varchar,
                "userAgent" varchar,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_analytics_events_userId" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_analytics_events_patientId" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "kpi_metrics" (
                "id" varchar PRIMARY KEY NOT NULL,
                "metricType" varchar NOT NULL,
                "metricName" varchar NOT NULL,
                "period" varchar NOT NULL,
                "value" decimal(15,4) NOT NULL,
                "target" decimal(15,4),
                "previousValue" decimal(15,4),
                "breakdown" text,
                "calculatedAt" datetime NOT NULL,
                "periodStart" datetime NOT NULL,
                "periodEnd" datetime NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);
        await queryRunner.query(`CREATE INDEX "IDX_reports_type_status" ON "reports" ("type", "status")`);
        await queryRunner.query(`CREATE INDEX "IDX_reports_createdAt_type" ON "reports" ("createdAt", "type")`);
        await queryRunner.query(`CREATE INDEX "IDX_analytics_events_eventType_createdAt" ON "analytics_events" ("eventType", "createdAt")`);
        await queryRunner.query(`CREATE INDEX "IDX_analytics_events_userId_createdAt" ON "analytics_events" ("userId", "createdAt")`);
        await queryRunner.query(`CREATE INDEX "IDX_kpi_metrics_metricType_period_calculatedAt" ON "kpi_metrics" ("metricType", "period", "calculatedAt")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "kpi_metrics"`);
        await queryRunner.query(`DROP TABLE "analytics_events"`);
        await queryRunner.query(`DROP TABLE "dashboard_shares"`);
        await queryRunner.query(`DROP TABLE "dashboards"`);
        await queryRunner.query(`DROP TABLE "report_shares"`);
        await queryRunner.query(`DROP TABLE "report_executions"`);
        await queryRunner.query(`DROP TABLE "reports"`);
    }
}
exports.CreateReportsAnalyticsTables1700000003 = CreateReportsAnalyticsTables1700000003;
//# sourceMappingURL=1700000003-CreateReportsAnalyticsTables.js.map