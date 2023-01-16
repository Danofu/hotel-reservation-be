import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm"
import { Rezerwacja } from "./rezerwacja"

/**
 * model User
 */
@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

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


