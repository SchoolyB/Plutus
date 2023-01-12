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
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare amount: number; //amount of money proccessed in transaction

  @Column()
  declare type: string; //type of account checking or savings
}
