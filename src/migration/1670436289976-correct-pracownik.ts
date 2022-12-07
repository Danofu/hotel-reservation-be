import { MigrationInterface, QueryRunner } from "typeorm";

export class correctPracownik1670436289976 implements MigrationInterface {
    name = 'correctPracownik1670436289976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pracowniki" DROP COLUMN "nazwisko"`);
        await queryRunner.query(`ALTER TABLE "pracowniki" ADD "nazwisko" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pracowniki" DROP COLUMN "imie"`);
        await queryRunner.query(`ALTER TABLE "pracowniki" ADD "imie" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pracowniki" DROP COLUMN "imie"`);
        await queryRunner.query(`ALTER TABLE "pracowniki" ADD "imie" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pracowniki" DROP COLUMN "nazwisko"`);
        await queryRunner.query(`ALTER TABLE "pracowniki" ADD "nazwisko" integer NOT NULL`);
    }

}
