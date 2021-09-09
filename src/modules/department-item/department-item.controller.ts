import { Controller } from '@nestjs/common';
import { DepartmentItemService } from './department-item.service';

@Controller('department-item')
export class DepartmentItemController {
  constructor(private readonly departmentItemService: DepartmentItemService) {}
}
