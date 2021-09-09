import { Controller } from '@nestjs/common';
import { RequestItemService } from './request-item.service';

@Controller('request-item')
export class RequestItemController {
  constructor(private readonly requestItemService: RequestItemService) {}
}
