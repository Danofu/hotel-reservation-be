import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { Jedzenie } from "./jedzenie";
import { Menu } from "./menu";
import { Rezerwacja } from "./rezerwacja";

@Entity("zamowienie")
export class Zamowienie {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column()
  id_rezerwacji: number;

  @Column()
  id_jedzienie: number;

  @ManyToOne(() => Jedzenie, (jedzenie) => jedzenie.zamowienie)
  @JoinColumn({ name: "id_jedzienie", referencedColumnName: "id" })
  jedzenie: Jedzenie;

  @ManyToOne(() => Rezerwacja, (rezerwacja) => rezerwacja.zamowienie)
  @JoinColumn({ name: "id_rezerwacji", referencedColumnName: "id" })
  rezerwacja: Rezerwacja;
}