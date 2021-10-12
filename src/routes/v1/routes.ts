import { Routes } from 'nest-router';
import { PermissionModule } from '@v1/permission/permission.module';
import AuthModule from './auth/auth.module';
import UsersModule from '@v1/users/user.module';

export const V1Routes: Routes = [
  {
    path: '/v1',
    children: [
      { path: '/auth', module: AuthModule },
      { path: '/users', module: UsersModule },
      { path: '/permissions', module: PermissionModule },
    ],
  },
];
