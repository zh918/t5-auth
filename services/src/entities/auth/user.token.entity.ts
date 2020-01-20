import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('AUTH_USER_TOKEN')
export class UserToken {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  SYSTEM_CODE: string;

  @Column('int')
  USER_ID: number;

  @Column()
  TOKEN: string;

  @Column()
  SEESION_ID: string;

  @Column('int')
  STATUS: number;

  @Column('date')
  LOSE_TIME: string;

  @Column('date')
  UPDATED_TIME: string;
}
