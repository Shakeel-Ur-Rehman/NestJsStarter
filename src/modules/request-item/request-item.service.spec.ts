import { Test, TestingModule } from '@nestjs/testing';
import { RequestItemService } from './request-item.service';

describe('RequestItemService', () => {
  let service: RequestItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestItemService],
    }).compile();

    service = module.get<RequestItemService>(RequestItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
