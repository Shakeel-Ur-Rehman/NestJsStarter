import { Module } from '@nestjs/common';
import { RequestItemService } from './request-item.service';
import { RequestItemController } from './request-item.controller';

@Module({
  controllers: [RequestItemController],
  providers: [RequestItemService]
})
export class RequestItemModule {}
