import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

}


