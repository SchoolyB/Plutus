import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  Generated,
  PrimaryColumn,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  // MUST HAVE DECLARE KEYWORD IF I USE THE DECLARE WORD I CANT ASSIGN A VALUE
  @PrimaryGeneratedColumn()
  declare id: number;

  @PrimaryColumn()
  declare accountNumber: number;

  @Column()
  declare firstName: string;

  @Column()
  declare lastName: string;

  // @Column()
  // declare initialEmail: string;

  // @Column({ select: false }) // passing an options object to TypeORM to tell it not to select the password column
  // declare initialPassword?: string; //the '?' lets TS know that the property is optional

  // @Column()
  // declare confirmationEmail: string;

  @Column({ select: false }) // passing an options object to TypeORM to tell it not to select the password column
  declare password?: string; //the '?' lets TS know that the property is optional

  @Column({ unique: true })
  declare email: string;

  // @Column({ select: false }) // passing an options object to TypeORM to tell it not to select the password column
  // declare confirmationPassword?: string; //the '?' lets TS know that the property is optional

  @CreateDateColumn()
  declare memebershipDate: Date;
}
