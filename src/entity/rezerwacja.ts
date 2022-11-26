import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Jedzenie } from "./jedzenie";
import { Pokoj } from "./pokoj";
import { Pracowniki } from "./pracowniki";
import { User } from "./user";


@Entity("rezerwacja")
export class Rezerwacja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_pokoj: number;

  @Column()
  id_pracownika: number;

  @Column()
  id_user: number;

  @Column()
  id_jedzenie: number;

  @Column()
  data_rezerwacji: Date;

  @Column()
  check_in: Date;

  @Column()
  check_out: Date;

  @Column()
  suma: number;

  @ManyToOne(() => User, (user) => user.rezerwacja)
  @JoinColumn({ name: "id_user", referencedColumnName: "id" })
  user: User;

  @ManyToOne(() => Pracowniki, (pracownik) => pracownik.rezerwacja)
  @JoinColumn({ name: "id_pracownika", referencedColumnName: "id" })
  pracownik: Pracowniki;

  @ManyToOne(() => Pokoj, (pokoj) => pokoj.rezerwacja)
  @JoinColumn({ name: "id_pokoj", referencedColumnName: "id" })
  pokoj: Pokoj;

  @ManyToOne(() => Jedzenie, (jedzenie) => jedzenie.rezerwacja)
  @JoinColumn({ name: "id_jedzenie", referencedColumnName: "id" })
  jedzenie: Jedzenie;
}