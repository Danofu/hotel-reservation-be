import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from "typeorm";
import { Pokoj } from "./pokoj";

/**
 * model Kategorja
 */
@Entity("kategorja")
export class Kategorja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kategorja: string;

  @Column()
  ilosc_miejsc: number;

  @Column()
  ilosc_mieszkan: number;

  @Column()
  dodatkowa_informacja: string;

  @Column({ type: 'float'})
  cena: number;

  @OneToMany(
    () => Pokoj,
    (pokoj) => pokoj.kategorja,
  )
  pokoj: Pokoj[];
}