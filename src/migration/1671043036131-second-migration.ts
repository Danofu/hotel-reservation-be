import { MigrationInterface, QueryRunner } from "typeorm";

export class secondMigration1671043036131 implements MigrationInterface {
    name = 'secondMigration1671043036131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP COLUMN "suma"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD "suma" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP COLUMN "suma"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD "suma" integer NOT NULL`);
    }

}
