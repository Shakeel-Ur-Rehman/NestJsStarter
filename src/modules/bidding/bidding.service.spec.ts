import { Test, TestingModule } from '@nestjs/testing';
import { BiddingService } from './bidding.service';

describe('BiddingService', () => {
  let service: BiddingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiddingService],
    }).compile();

    service = module.get<BiddingService>(BiddingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
