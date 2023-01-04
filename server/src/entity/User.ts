import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity } from "typeorm"

@Entity()
export class User extends BaseEntity { 
// MUST HAVE DECLARE KEYWORD IF I USE THE DECLARE WORD I CANT ASSIGN A VALUE
    @PrimaryGeneratedColumn()
    declare id: number

    @Column()
    declare firstName: string

    @Column()
    declare lastName: string

    @Column()
    declare email: string

    @Column({"select":false}) // passing an options object to TypeORM to tell it not to select the password column  
    declare password?: string //the '?' lets TS know that the property is optional

    @CreateDateColumn()
    declare memebershipDate: Date
}
