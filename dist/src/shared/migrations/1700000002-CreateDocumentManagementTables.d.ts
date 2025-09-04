import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateDocumentManagementTables1700000002 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
