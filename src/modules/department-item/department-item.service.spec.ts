import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentItemService } from './department-item.service';

describe('DepartmentItemService', () => {
  let service: DepartmentItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentItemService],
    }).compile();

    service = module.get<DepartmentItemService>(DepartmentItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
