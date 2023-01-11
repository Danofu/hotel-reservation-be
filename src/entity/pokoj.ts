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

/**
 * model Pokoj
 */
@Entity("pokoj")
export class Pokoj {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_kategorja: number;

  @ManyToOne(() => Kategorja, (kategorja) => kategorja.pokoj)
  @JoinColumn({ name: "id_kategorja", referencedColumnName: "id" })
  kategorja: Kategorja;

  @OneToMany(
    () => Rezerwacja,
    (rezerwacja) => rezerwacja.pokoj,
  )
  rezerwacja: Rezerwacja[];
}