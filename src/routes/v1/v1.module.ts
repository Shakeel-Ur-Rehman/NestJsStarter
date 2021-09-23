import RolesGuard from '@guards/roles.guard';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { Routes, RouterModule } from 'nest-router';
import AuthModule from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import UsersModule from './users/user.module';
const routes: Routes = [
  {
    path: '/v1',
    children: [
      { path: '/auth', module: AuthModule },
      { path: '/users', module: UsersModule },
    ],
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    AuthModule,
    UsersModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export default class V1Module {}
