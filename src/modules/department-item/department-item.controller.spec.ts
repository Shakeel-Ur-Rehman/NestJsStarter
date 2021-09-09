import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentItemController } from './department-item.controller';
import { DepartmentItemService } from './department-item.service';

describe('DepartmentItemController', () => {
  let controller: DepartmentItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentItemController],
      providers: [DepartmentItemService],
    }).compile();

    controller = module.get<DepartmentItemController>(DepartmentItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
