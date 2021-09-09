import { Controller } from '@nestjs/common';
import { BiddingRequestService } from './bidding-request.service';

@Controller('bidding-request')
export class BiddingRequestController {
  constructor(private readonly biddingRequestService: BiddingRequestService) {}
}
