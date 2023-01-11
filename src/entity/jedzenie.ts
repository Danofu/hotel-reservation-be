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

/**
 * model Jedzenie
 */
@Entity("jedzenie")
export class Jedzenie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  id_rezerwacji: number;

  @Column()
  id_menu: number;

  @Column()
  ilosc_osob: number;

  @ManyToOne(() => Menu, (menu) => menu.jedzenie)
  @JoinColumn({ name: "id_menu", referencedColumnName: "id" })
  menu: Menu;

  @ManyToOne(() => Rezerwacja, (rezerwacja) => rezerwacja.jedzenie,{
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: "id_rezerwacji", referencedColumnName: "id" })
  rezerwacja: Rezerwacja;

}