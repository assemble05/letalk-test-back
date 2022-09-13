import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigraiton1663087597471 implements MigrationInterface {
    name = 'initialMigraiton1663087597471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "loan" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cpf" character varying NOT NULL, "fees" character varying NOT NULL, "monthToPay" character varying NOT NULL, "required_value" character varying NOT NULL, "fessPerMonth" character varying NOT NULL, "amountPeerMonth" character varying NOT NULL, "totalToPay" character varying NOT NULL, "installments" jsonb NOT NULL DEFAULT '[]', CONSTRAINT "UQ_793ee8cfe45d837a409770953c2" UNIQUE ("cpf"), CONSTRAINT "UQ_5331fb5d2adb36cfbf56ac58927" UNIQUE ("fees"), CONSTRAINT "UQ_91675eb803c5d1409288f07397e" UNIQUE ("monthToPay"), CONSTRAINT "UQ_2b8a3f89054ca981421eeefd723" UNIQUE ("required_value"), CONSTRAINT "UQ_49317475a7011b672f88a7b731c" UNIQUE ("fessPerMonth"), CONSTRAINT "UQ_0507500eeb90c2c47f29714511a" UNIQUE ("amountPeerMonth"), CONSTRAINT "UQ_cc2c8d2d7cb0206dbabbbfc9240" UNIQUE ("totalToPay"), CONSTRAINT "PK_4ceda725a323d254a5fd48bf95f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "loan"`);
    }

}
