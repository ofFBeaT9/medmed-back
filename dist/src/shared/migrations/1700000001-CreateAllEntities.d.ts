import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateAllEntities1700000001 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
