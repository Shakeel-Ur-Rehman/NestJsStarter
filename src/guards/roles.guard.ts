import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export default class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request: Request = context.switchToHttp().getRequest();
    const user: any = await request.user;
    let hasPermission: boolean = false;
    if (user) {
      const hasRole = () => roles.includes(user.role);
      if (hasRole()) {
        hasPermission = true;
      }
    }
    return user && hasPermission;
  }
}
