import { Test, TestingModule } from '@nestjs/testing';
import { BiddingRequestService } from './bidding-request.service';

describe('BiddingRequestService', () => {
  let service: BiddingRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiddingRequestService],
    }).compile();

    service = module.get<BiddingRequestService>(BiddingRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
