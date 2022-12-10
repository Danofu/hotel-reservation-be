import { MigrationInterface, QueryRunner } from "typeorm";

export class addDeleteCascadeJedzenie1670664989057 implements MigrationInterface {
    name = 'addDeleteCascadeJedzenie1670664989057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "FK_db0b6eb0f4e70952b80d91aa045"`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "FK_db0b6eb0f4e70952b80d91aa045" FOREIGN KEY ("id_rezerwacji") REFERENCES "rezerwacja"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "FK_db0b6eb0f4e70952b80d91aa045"`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "FK_db0b6eb0f4e70952b80d91aa045" FOREIGN KEY ("id_rezerwacji") REFERENCES "rezerwacja"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
