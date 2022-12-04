import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { Menu } from "./menu";
import { Rezerwacja } from "./rezerwacja";
import { Zamowienie } from "./zamowienie";

@Entity("jedzenie")
export class Jedzenie {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column()
  id_menu: number;

  @Column()
  ilosc_osob: number;

  @ManyToOne(() => Menu, (menu) => menu.jedzenie)
  @JoinColumn({ name: "id_menu", referencedColumnName: "id" })
  menu: Menu;

  @OneToMany(
    () => Zamowienie,
    (zamowienie) => zamowienie.jedzenie,
  )
  zamowienie: Zamowienie[];
}