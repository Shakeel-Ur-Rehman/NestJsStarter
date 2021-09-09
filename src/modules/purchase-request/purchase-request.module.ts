import { Module } from '@nestjs/common';
import { PurchaseRequestService } from './purchase-request.service';
import { PurchaseRequestController } from './purchase-request.controller';

@Module({
  controllers: [PurchaseRequestController],
  providers: [PurchaseRequestService]
})
export class PurchaseRequestModule {}
