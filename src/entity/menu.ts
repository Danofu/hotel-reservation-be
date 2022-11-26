import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from "typeorm";
import { Jedzenie } from "./jedzenie";

@Entity("menu")
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nazwa: string;

  @Column()
  kalorycznosc: number;

  @Column()
  cena: number;

  @OneToMany(
    () => Jedzenie,
    (jedzenie) => jedzenie.menu,
  )
  jedzenie: Jedzenie[];
}