import { Controller } from '@nestjs/common';
import { BiddingService } from './bidding.service';

@Controller('bidding')
export class BiddingController {
  constructor(private readonly biddingService: BiddingService) {}
}
