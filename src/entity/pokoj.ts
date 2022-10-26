import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { Kategorja } from "./kategorja";
import { Rezerwacja } from "./rezerwacja";


@Entity("pokoj")
export class Pokoj {
  @PrimaryGeneratedColumn()
  idPokoj: number;

  @Column()
  idKategorja: number;

  @ManyToOne(() => Kategorja, (kategorja) => kategorja.pokoj)
  @JoinColumn({ name: "idKategorja", referencedColumnName: "idKategorja" })
  kategorja: Kategorja;

  @OneToMany(
    () => Rezerwacja,
    (rezerwacja) => rezerwacja.pokoj,
  )
  rezerwacja: Rezerwacja[];
}