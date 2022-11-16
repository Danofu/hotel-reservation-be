import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigration1666807267658 implements MigrationInterface {
    name = 'firstMigration1666807267658'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "menu" ("idMenu" SERIAL NOT NULL, "nazwa" character varying NOT NULL, "kalorycznosc" integer NOT NULL, "cena" integer NOT NULL, CONSTRAINT "PK_3de2cb639a20ebb148b106c5d23" PRIMARY KEY ("idMenu"))`);
        await queryRunner.query(`CREATE TABLE "kategorja" ("idKategorja" SERIAL NOT NULL, "kategorja" character varying NOT NULL, "iloscMiejsc" integer NOT NULL, "iloscMieszkan" integer NOT NULL, "dodatkowaInformacja" character varying NOT NULL, "cena" integer NOT NULL, CONSTRAINT "PK_3d1bc20517e0d114238c4caffd5" PRIMARY KEY ("idKategorja"))`);
        await queryRunner.query(`CREATE TABLE "pokoj" ("idPokoj" SERIAL NOT NULL, "idKategorja" integer NOT NULL, CONSTRAINT "PK_1307c21b4485f0065d75868ae37" PRIMARY KEY ("idPokoj"))`);
        await queryRunner.query(`CREATE TABLE "stanowisko" ("idStanowisko" SERIAL NOT NULL, "stanowisko" character varying NOT NULL, CONSTRAINT "PK_4eb2685f5a748adef6205cb43b8" PRIMARY KEY ("idStanowisko"))`);
        await queryRunner.query(`CREATE TABLE "pracowniki" ("idPracownika" SERIAL NOT NULL, "nazwisko" integer NOT NULL, "imie" integer NOT NULL, "dataUrodzenia" TIMESTAMP NOT NULL, "wyksztalcenie" character varying NOT NULL, "idStanowisko" integer NOT NULL, "pensja" integer NOT NULL, CONSTRAINT "PK_fc7b5d7947430dd43e5e8233e7d" PRIMARY KEY ("idPracownika"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "access_token" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rezerwacja" ("idRezerwacja" SERIAL NOT NULL, "idPokoj" integer NOT NULL, "idPracownika" integer NOT NULL, "idUser" integer NOT NULL, "idJedzenie" integer NOT NULL, "dataRezerwacji" TIMESTAMP NOT NULL, "checkIn" TIMESTAMP NOT NULL, "checkOut" TIMESTAMP NOT NULL, "suma" integer NOT NULL, CONSTRAINT "PK_4f645e77e617f334672014d8ce1" PRIMARY KEY ("idRezerwacja"))`);
        await queryRunner.query(`CREATE TABLE "jedzenie" ("idJedzenie" SERIAL NOT NULL, "idMenu" integer NOT NULL, "iloscOsob" integer NOT NULL, CONSTRAINT "PK_f15a6a439b8c9ebcad2be29ef31" PRIMARY KEY ("idJedzenie"))`);
        await queryRunner.query(`ALTER TABLE "pokoj" ADD CONSTRAINT "FK_891158079af7c5f14e1a939748e" FOREIGN KEY ("idKategorja") REFERENCES "kategorja"("idKategorja") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pracowniki" ADD CONSTRAINT "FK_8c10b4f5440445cb35dc86d7994" FOREIGN KEY ("idStanowisko") REFERENCES "stanowisko"("idStanowisko") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_ea8da1d53203cc7e78713be7808" FOREIGN KEY ("idUser") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_8d63d74c29909e5c210af09376c" FOREIGN KEY ("idPracownika") REFERENCES "pracowniki"("idPracownika") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_cc7455757e6d64bd9948feeddf3" FOREIGN KEY ("idPokoj") REFERENCES "pokoj"("idPokoj") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" ADD CONSTRAINT "FK_1ae7a143da6e828ff7bcfbab953" FOREIGN KEY ("idJedzenie") REFERENCES "jedzenie"("idJedzenie") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jedzenie" ADD CONSTRAINT "FK_9a5d6a18adf5a1b436944eb040d" FOREIGN KEY ("idMenu") REFERENCES "menu"("idMenu") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jedzenie" DROP CONSTRAINT "FK_9a5d6a18adf5a1b436944eb040d"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_1ae7a143da6e828ff7bcfbab953"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_cc7455757e6d64bd9948feeddf3"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_8d63d74c29909e5c210af09376c"`);
        await queryRunner.query(`ALTER TABLE "rezerwacja" DROP CONSTRAINT "FK_ea8da1d53203cc7e78713be7808"`);
        await queryRunner.query(`ALTER TABLE "pracowniki" DROP CONSTRAINT "FK_8c10b4f5440445cb35dc86d7994"`);
        await queryRunner.query(`ALTER TABLE "pokoj" DROP CONSTRAINT "FK_891158079af7c5f14e1a939748e"`);
        await queryRunner.query(`DROP TABLE "jedzenie"`);
        await queryRunner.query(`DROP TABLE "rezerwacja"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "pracowniki"`);
        await queryRunner.query(`DROP TABLE "stanowisko"`);
        await queryRunner.query(`DROP TABLE "pokoj"`);
        await queryRunner.query(`DROP TABLE "kategorja"`);
        await queryRunner.query(`DROP TABLE "menu"`);
    }

}
