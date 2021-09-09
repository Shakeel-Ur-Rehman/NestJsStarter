import { Test, TestingModule } from '@nestjs/testing';
import { RequestItemController } from './request-item.controller';
import { RequestItemService } from './request-item.service';

describe('RequestItemController', () => {
  let controller: RequestItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestItemController],
      providers: [RequestItemService],
    }).compile();

    controller = module.get<RequestItemController>(RequestItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
