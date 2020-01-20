import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('int')
  LEVEL: number;

  @Column()
  PATH: string;

  @Column()
  PARENT_CODE: number;

  @Column()
  ICON: string;

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
