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
  id: number;

  @Column()
  nazwisko: string;

  @Column()
  imie: string;

  @Column()
  data_urodzenia: Date;

  @Column()
  wyksztalcenie: string;

  @Column()
  id_stanowisko: number;

  @Column()
  pensja: number;

  @ManyToOne(() => Stanowisko, (stanowisko) => stanowisko.pracowniki)
  @JoinColumn({ name: "id_stanowisko", referencedColumnName: "id" })
  stanowisko: Stanowisko;

  @OneToMany(
    () => Rezerwacja,
    (rezerwacja) => rezerwacja.pracownik,
  )
  rezerwacja: Rezerwacja[];
}
