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
  idRezerwacja: number;

  @Column()
  idPokoj: number;

  @Column()
  idPracownika: number;

  @Column()
  idUser: number;

  @Column()
  idJedzenie: number;

  @Column()
  dataRezerwacji: Date;

  @Column()
  checkIn: Date;

  @Column()
  checkOut: Date;

  @Column()
  suma: number;

  @ManyToOne(() => User, (user) => user.rezerwacja)
  @JoinColumn({ name: "idUser", referencedColumnName: "id" })
  user: User;

  @ManyToOne(() => Pracowniki, (pracownik) => pracownik.rezerwacja)
  @JoinColumn({ name: "idPracownika", referencedColumnName: "idPracownika" })
  pracownik: Pracowniki;

  @ManyToOne(() => Pokoj, (pokoj) => pokoj.rezerwacja)
  @JoinColumn({ name: "idPokoj", referencedColumnName: "idPokoj" })
  pokoj: Pokoj;

  @ManyToOne(() => Jedzenie, (jedzenie) => jedzenie.rezerwacja)
  @JoinColumn({ name: "idJedzenie", referencedColumnName: "idJedzenie" })
  jedzenie: Jedzenie;
}