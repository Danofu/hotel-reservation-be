import { MigrationInterface, QueryRunner } from "typeorm";

export class correctJedzenie1670437057302 implements MigrationInterface {
    name = 'correctJedzenie1670437057302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "PK_f15a6a439b8c9ebcad2be29ef31"`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "PK_f15a6a439b8c9ebcad2be29ef31" PRIMARY KEY ("id_rezerwacji", "id")`);
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "PK_f15a6a439b8c9ebcad2be29ef31"`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "PK_331551b1570f4132a646356912f" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "FK_db0b6eb0f4e70952b80d91aa045" FOREIGN KEY ("id_rezerwacji") REFERENCES "rezerwacja"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "FK_db0b6eb0f4e70952b80d91aa045"`);
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "PK_331551b1570f4132a646356912f"`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "PK_f15a6a439b8c9ebcad2be29ef31" PRIMARY KEY ("id_rezerwacji", "id")`);
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "PK_f15a6a439b8c9ebcad2be29ef31"`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "PK_f15a6a439b8c9ebcad2be29ef31" PRIMARY KEY ("id_rezerwacji")`);
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP COLUMN "id"`);
    }

}
