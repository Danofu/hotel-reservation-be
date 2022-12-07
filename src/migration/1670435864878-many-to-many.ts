import { MigrationInterface, QueryRunner } from "typeorm";

export class manyToMany1670435864878 implements MigrationInterface {
    name = 'manyToMany1670435864878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokoj" DROP CONSTRAINT "FK_891158079af7c5f14e1a939748e"`);
        await queryRunner.query(`ALTER TABLE "pracowniki" DROP CONSTRAINT "FK_8c10b4f5440445cb35dc86d7994"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_1ae7a143da6e828ff7bcfbab953"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_cc7455757e6d64bd9948feeddf3"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_8d63d74c29909e5c210af09376c"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_ea8da1d53203cc7e78713be7808"`);
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "FK_9a5d6a18adf5a1b436944eb040d"`);
        await queryRunner.query(`ALTER TABLE "jedzenie" RENAME COLUMN "id" TO "id_rezerwacji"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP COLUMN "id_jedzenie"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "kategorja_id_seq" OWNED BY "kategorja"."id"`);
        await queryRunner.query(`ALTER TABLE "kategorja" ALTER COLUMN "id" SET DEFAULT nextval('"kategorja_id_seq"')`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "pokoj_id_seq" OWNED BY "pokoj"."id"`);
        await queryRunner.query(`ALTER TABLE "pokoj" ALTER COLUMN "id" SET DEFAULT nextval('"pokoj_id_seq"')`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "stanowisko_id_seq" OWNED BY "stanowisko"."id"`);
        await queryRunner.query(`ALTER TABLE "stanowisko" ALTER COLUMN "id" SET DEFAULT nextval('"stanowisko_id_seq"')`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "pracowniki_id_seq" OWNED BY "pracowniki"."id"`);
        await queryRunner.query(`ALTER TABLE "pracowniki" ALTER COLUMN "id" SET DEFAULT nextval('"pracowniki_id_seq"')`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "rezerwacja_id_seq" OWNED BY "rezerwacja"."id"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ALTER COLUMN "id" SET DEFAULT nextval('"rezerwacja_id_seq"')`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "menu_id_seq" OWNED BY "menu"."id"`);
        await queryRunner.query(`ALTER TABLE "menu" ALTER COLUMN "id" SET DEFAULT nextval('"menu_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "pokoj" ADD CONSTRAINT "FK_a72c1885a39f9b976b14c358a4e" FOREIGN KEY ("id_kategorja") REFERENCES "kategorja"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pracowniki" ADD CONSTRAINT "FK_836b6bea9271ba61865c97addd5" FOREIGN KEY ("id_stanowisko") REFERENCES "stanowisko"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_804254616bacb67b0018f2cbf6d" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_5b6f0a88b0f553cf40eda91b7b8" FOREIGN KEY ("id_pracownika") REFERENCES "pracowniki"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_18ee41cd96c7503861937ba1885" FOREIGN KEY ("id_pokoj") REFERENCES "pokoj"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "FK_0ee20357daaa4760dce65415e34" FOREIGN KEY ("id_menu") REFERENCES "menu"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "FK_0ee20357daaa4760dce65415e34"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_18ee41cd96c7503861937ba1885"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_5b6f0a88b0f553cf40eda91b7b8"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_804254616bacb67b0018f2cbf6d"`);
        await queryRunner.query(`ALTER TABLE "pracowniki" DROP CONSTRAINT "FK_836b6bea9271ba61865c97addd5"`);
        await queryRunner.query(`ALTER TABLE "pokoj" DROP CONSTRAINT "FK_a72c1885a39f9b976b14c358a4e"`);
        await queryRunner.query(`ALTER TABLE "menu" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "menu_id_seq"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "rezerwacja_id_seq"`);
        await queryRunner.query(`ALTER TABLE "pracowniki" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "pracowniki_id_seq"`);
        await queryRunner.query(`ALTER TABLE "stanowisko" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "stanowisko_id_seq"`);
        await queryRunner.query(`ALTER TABLE "pokoj" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "pokoj_id_seq"`);
        await queryRunner.query(`ALTER TABLE "kategorja" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "kategorja_id_seq"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD "id_jedzenie" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "jedzenie" RENAME COLUMN "id_rezerwacji" TO "id"`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "FK_9a5d6a18adf5a1b436944eb040d" FOREIGN KEY ("id_menu") REFERENCES "menu"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_ea8da1d53203cc7e78713be7808" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_8d63d74c29909e5c210af09376c" FOREIGN KEY ("id_pracownika") REFERENCES "pracowniki"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_cc7455757e6d64bd9948feeddf3" FOREIGN KEY ("id_pokoj") REFERENCES "pokoj"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_1ae7a143da6e828ff7bcfbab953" FOREIGN KEY ("id_jedzenie") REFERENCES "jedzenie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pracowniki" ADD CONSTRAINT "FK_8c10b4f5440445cb35dc86d7994" FOREIGN KEY ("id_stanowisko") REFERENCES "stanowisko"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pokoj" ADD CONSTRAINT "FK_891158079af7c5f14e1a939748e" FOREIGN KEY ("id_kategorja") REFERENCES "kategorja"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
