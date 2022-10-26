import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { Rezerwacja } from "./rezerwacja";
import { Stanowisko } from "./stanowisko";

@Entity("pracowniki")
export class Pracowniki {
  @PrimaryGeneratedColumn()
  idPracownika: number;

  @Column()
  nazwisko: number;

  @Column()
  imie: number;

  @Column()
  dataUrodzenia: Date;

  @Column()
  wyksztalcenie: string;

  @Column()
  idStanowisko: number;

  @Column()
  pensja: number;

  @ManyToOne(() => Stanowisko, (stanowisko) => stanowisko.pracowniki)
  @JoinColumn({ name: "idStanowisko", referencedColumnName: "idStanowisko" })
  stanowisko: Stanowisko;

  @OneToMany(
    () => Rezerwacja,
    (rezerwacja) => rezerwacja.pracownik,
  )
  rezerwacja: Rezerwacja[];
}
