import { Test, TestingModule } from '@nestjs/testing';
import { BiddingController } from './bidding.controller';
import { BiddingService } from './bidding.service';

describe('BiddingController', () => {
  let controller: BiddingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiddingController],
      providers: [BiddingService],
    }).compile();

    controller = module.get<BiddingController>(BiddingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
