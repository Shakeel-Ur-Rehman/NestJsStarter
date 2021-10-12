import {
  PERMISSION_CHECKER_KEY,
  RequiredPermission,
} from '@decorators/permissions.decorator';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AppAbility, CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { RequestTypes } from 'src/enums/requestTypes';
import { RouteControllers } from 'src/enums/routeControllers';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private abilityFactory: CaslAbilityFactory,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const requested_path = req.route.path;
    const controllerName = requested_path.split('/v1/')[1].split('/')[0];
    const requestMethod: any = RequestTypes[`${req.method}`];
    const requiredPermissions = this.reflector.get<RequiredPermission[]>(
      PERMISSION_CHECKER_KEY,
      context.getHandler(),
    ) || [[requestMethod, RouteControllers[`${controllerName}`]]];

    const user = req.user;
    if (user) {
      if (user.permissions.length == 0) {
        return false;
      }
      const ability = await this.abilityFactory.createForUser(user);
      return requiredPermissions.every((permission) =>
        this.isAllowed(ability, permission),
      );
    } else {
      return true;
    }
  }
  private isAllowed(
    ability: AppAbility,
    permission: RequiredPermission,
  ): boolean {
    const res = ability.can(...permission);
    return res;
  }
}
