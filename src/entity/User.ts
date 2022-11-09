import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Rezerwacja } from "./rezerwacja"

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    access_token: string

    @Column()
    password: string

    @OneToMany(
        () => Rezerwacja,
        (rezerwacja) => rezerwacja.user,
      )
      rezerwacja: Rezerwacja[];

}


