import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 资源表
@Entity('AUTH_RESOURCE')
export class Resource {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  SYSTEM_CODE: string;

  @Column()
  CODE: string;

  @Column()
  NAME: string;

  @Column()
  TYPE: string;

  @Column()
  PATH: string;

  @Column()
  PARENT_CODE: number;

  @Column()
  ICON_CLASS: string;

  @Column('int')
  SORTS: number;

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
