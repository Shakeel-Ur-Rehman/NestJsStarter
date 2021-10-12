import { Ability } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import User from '@v1/users/entity/user.entity';
import { Permission } from '@v1/permission/entities/permission.entity';
export enum PermissionAction {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
}
export type PermissionObjectType = any;
export type AppAbility = Ability<[PermissionAction, PermissionObjectType]>;
interface CaslPermission {
  action: PermissionAction;
  subject: string;
}
@Injectable()
export class CaslAbilityFactory {
  constructor() {}

  async createForUser(user: User): Promise<AppAbility> {
    const dbPermissions: Permission[] = user.permissions;
    const caslPermissions: CaslPermission[] = dbPermissions.map((p) => ({
      action: p.action,
      subject: p.subject,
    }));
    return new Ability<[PermissionAction, PermissionObjectType]>(
      caslPermissions,
    );
  }
}
