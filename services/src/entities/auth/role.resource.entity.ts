import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 角色资源表
@Entity('AUTH_ROLE_RESOURCE')
export class RoleResource {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  SYSTEM_CODE: string;

  @Column('int')
  ROLE_ID: number;

  @Column()
  RESOURCE_CODE: string;

  @Column()
  CREATED_BY: string;

  @Column('date')
  CREATED_TIME: string;

  @Column()
  UPDATED_BY: string;

  @Column('date')
  UPDATED_TIME: string;
}
