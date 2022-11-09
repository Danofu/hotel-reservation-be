import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from "typeorm";
import { Pokoj } from "./pokoj";


@Entity("kategorja")
export class Kategorja {
  @PrimaryGeneratedColumn()
  idKategorja: number;

  @Column()
  kategorja: string;

  @Column()
  iloscMiejsc: number;

  @Column()
  iloscMieszkan: number;

  @Column()
  dodatkowaInformacja: string;

  @Column()
  cena: number;

  @OneToMany(
    () => Pokoj,
    (pokoj) => pokoj.kategorja,
  )
  pokoj: Pokoj[];
}