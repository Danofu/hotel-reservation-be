import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pracowniki } from "./pracowniki";

@Entity("stanowisko")
export class Stanowisko {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stanowisko: string;

  @OneToMany(() => Pracowniki, (pracowniki) => pracowniki.stanowisko)
  pracowniki: Pracowniki[];
}
