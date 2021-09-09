import { Test, TestingModule } from '@nestjs/testing';
import { BiddingRequestController } from './bidding-request.controller';
import { BiddingRequestService } from './bidding-request.service';

describe('BiddingRequestController', () => {
  let controller: BiddingRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiddingRequestController],
      providers: [BiddingRequestService],
    }).compile();

    controller = module.get<BiddingRequestController>(BiddingRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
