import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 角色表
@Entity('AUTH_ROLE')
export class Role {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  SYSTEM_CODE: string;

  @Column()
  NAME: string;

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
