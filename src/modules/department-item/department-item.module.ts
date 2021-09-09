import { Module } from '@nestjs/common';
import { DepartmentItemService } from './department-item.service';
import { DepartmentItemController } from './department-item.controller';

@Module({
  controllers: [DepartmentItemController],
  providers: [DepartmentItemService]
})
export class DepartmentItemModule {}
