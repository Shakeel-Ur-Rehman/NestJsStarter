import { Module } from '@nestjs/common';
import { BiddingRequestService } from './bidding-request.service';
import { BiddingRequestController } from './bidding-request.controller';

@Module({
  controllers: [BiddingRequestController],
  providers: [BiddingRequestService]
})
export class BiddingRequestModule {}
