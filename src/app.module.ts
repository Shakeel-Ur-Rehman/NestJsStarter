import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { VendorModule } from './modules/vendor/vendor.module';
import { DepartmentModule } from './modules/department/department.module';
import { ItemModule } from './modules/item/item.module';
import { DepartmentItemModule } from './modules/department-item/department-item.module';
import { RequestItemModule } from './modules/request-item/request-item.module';
import { PurchaseRequestModule } from './modules/purchase-request/purchase-request.module';
import { AttachmentModule } from './modules/attachment/attachment.module';
import { BiddingModule } from './modules/bidding/bidding.module';
import { BiddingRequestModule } from './modules/bidding-request/bidding-request.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(),
    UsersModule,
    AuthModule,
    VendorModule,
    DepartmentModule,
    ItemModule,
    DepartmentItemModule,
    RequestItemModule,
    PurchaseRequestModule,
    AttachmentModule,
    BiddingModule,
    BiddingRequestModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ValidationPipe,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
