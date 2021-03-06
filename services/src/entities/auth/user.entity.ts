import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 用户表
@Entity('AUTH_USER')
export class User {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  LOGIN_NAME: string;

  @Column()
  LOGIN_PWD: string;

  @Column()
  SYSTEM_CODE: string;

  @Column('int')
  ROLE_ID: number;

  @Column('int')
  STATUS: number;

  @Column()
  CREATED_BY: string;

  @Column('date')
  CREATED_TIME: string;

  @Column()
  UPDATED_BY: string;

  @Column('date')
  UPDATED_TIME: string;
}
