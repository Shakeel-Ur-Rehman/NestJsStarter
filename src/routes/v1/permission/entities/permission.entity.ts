import User from '@v1/users/entity/user.entity';
import { PermissionAction } from 'src/casl/casl-ability.factory';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: PermissionAction;

  @Column()
  subject: string;

  @ManyToOne(() => User, (user) => user.permissions)
  user: User;
}
