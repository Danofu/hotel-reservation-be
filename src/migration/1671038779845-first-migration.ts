import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigration1671038779845 implements MigrationInterface {
    name = 'firstMigration1671038779845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "kategorja" ("id" SERIAL NOT NULL, "kategorja" character varying NOT NULL, "ilosc_miejsc" integer NOT NULL, "ilosc_mieszkan" integer NOT NULL, "dodatkowa_informacja" character varying NOT NULL, "cena" double precision NOT NULL, CONSTRAINT "PK_72d875601bfda42182bfca1d540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pokoj" ("id" SERIAL NOT NULL, "id_kategorja" integer NOT NULL, CONSTRAINT "PK_cb7e9b216c5d9041dbbfaabf295" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stanowisko" ("id" SERIAL NOT NULL, "stanowisko" character varying NOT NULL, CONSTRAINT "PK_6da40804ed1a50ab262b2a43164" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pracowniki" ("id" SERIAL NOT NULL, "nazwisko" character varying NOT NULL, "imie" character varying NOT NULL, "data_urodzenia" TIMESTAMP NOT NULL, "wyksztalcenie" character varying NOT NULL, "id_stanowisko" integer NOT NULL, "pensja" integer NOT NULL, CONSTRAINT "PK_788bebd3ac3e485462961ab5aea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "access_token" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rezerwacja" ("id" SERIAL NOT NULL, "id_pokoj" integer NOT NULL, "id_pracownika" integer NOT NULL, "id_user" integer NOT NULL, "data_rezerwacji" TIMESTAMP NOT NULL, "check_in" TIMESTAMP NOT NULL, "check_out" TIMESTAMP NOT NULL, "suma" integer NOT NULL, CONSTRAINT "PK_68e647237c8a1b74a22da8e7587" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jedzenie" ("id" SERIAL NOT NULL, "id_rezerwacji" integer NOT NULL, "id_menu" integer NOT NULL, "ilosc_osob" integer NOT NULL, CONSTRAINT "PK_331551b1570f4132a646356912f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "menu" ("id" SERIAL NOT NULL, "nazwa" character varying NOT NULL, "kalorycznosc" integer NOT NULL, "cena" double precision NOT NULL, CONSTRAINT "PK_35b2a8f47d153ff7a41860cceeb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pokoj" ADD CONSTRAINT "FK_a72c1885a39f9b976b14c358a4e" FOREIGN KEY ("id_kategorja") REFERENCES "kategorja"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pracowniki" ADD CONSTRAINT "FK_836b6bea9271ba61865c97addd5" FOREIGN KEY ("id_stanowisko") REFERENCES "stanowisko"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_804254616bacb67b0018f2cbf6d" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_5b6f0a88b0f553cf40eda91b7b8" FOREIGN KEY ("id_pracownika") REFERENCES "pracowniki"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_18ee41cd96c7503861937ba1885" FOREIGN KEY ("id_pokoj") REFERENCES "pokoj"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "FK_0ee20357daaa4760dce65415e34" FOREIGN KEY ("id_menu") REFERENCES "menu"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "FK_db0b6eb0f4e70952b80d91aa045" FOREIGN KEY ("id_rezerwacji") REFERENCES "rezerwacja"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "FK_db0b6eb0f4e70952b80d91aa045"`);
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "FK_0ee20357daaa4760dce65415e34"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_18ee41cd96c7503861937ba1885"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_5b6f0a88b0f553cf40eda91b7b8"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_804254616bacb67b0018f2cbf6d"`);
        await queryRunner.query(`ALTER TABLE "pracowniki" DROP CONSTRAINT "FK_836b6bea9271ba61865c97addd5"`);
        await queryRunner.query(`ALTER TABLE "pokoj" DROP CONSTRAINT "FK_a72c1885a39f9b976b14c358a4e"`);
        await queryRunner.query(`DROP TABLE "menu"`);
        await queryRunner.query(`DROP TABLE "jedzenie"`);
        await queryRunner.query(`DROP TABLE "rezerwacja"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "pracowniki"`);
        await queryRunner.query(`DROP TABLE "stanowisko"`);
        await queryRunner.query(`DROP TABLE "pokoj"`);
        await queryRunner.query(`DROP TABLE "kategorja"`);
    }

}
