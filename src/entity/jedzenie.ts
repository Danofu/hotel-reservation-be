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

@Entity("jedzenie")
export class Jedzenie {
  @PrimaryGeneratedColumn() 
  idJedzenie: number;

  @Column()
  idMenu: number;

  @Column()
  iloscOsob: number;

  @ManyToOne(() => Menu, (menu) => menu.jedzenie)
  @JoinColumn({ name: "idMenu", referencedColumnName: "idMenu" })
  menu: Menu;

  @OneToMany(
    () => Rezerwacja,
    (rezerwacja) => rezerwacja.jedzenie,
  )
  rezerwacja: Rezerwacja[];
}