import { SetMetadata } from '@nestjs/common';
import { UserRolesEnum } from '@v1/users/roles/user.roles';

export const Roles = (...roles: UserRolesEnum[]) => SetMetadata('roles', roles);
