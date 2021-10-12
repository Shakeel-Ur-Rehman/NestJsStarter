import { PermissionsGuard } from '@guards/permissions.guard';
import RolesGuard from '@guards/roles.guard';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { RouterModule } from 'nest-router';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import AuthModule from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { V1Routes } from './routes';
@Module({
  imports: [
    RouterModule.forRoutes(V1Routes),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    AuthModule,
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
    {
      provide: APP_GUARD,
      useClass: PermissionsGuard,
    },
    CaslAbilityFactory,
  ],
})
export default class V1Module {}
