import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigraiton1663093827859 implements MigrationInterface {
    name = 'initialMigraiton1663093827859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "loan" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cpf" character varying NOT NULL, "fees" character varying NOT NULL, "monthToPay" character varying NOT NULL, "required_value" character varying NOT NULL, "fessPerMonth" character varying NOT NULL, "amountPeerMonth" character varying NOT NULL, "totalToPay" character varying NOT NULL, "installments" jsonb NOT NULL DEFAULT '[]', CONSTRAINT "UQ_793ee8cfe45d837a409770953c2" UNIQUE ("cpf"), CONSTRAINT "PK_4ceda725a323d254a5fd48bf95f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "loan"`);
    }

}
