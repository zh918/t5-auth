import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 系统表
@Entity('AUTH_SYSTEM')
export class System {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  CODE: string;

  @Column()
  NAME: string;

  @Column('date')
  BEGIN_TIME: string;

  @Column('date')
  END_TIME: string;

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
