import { Controller, Get } from '@nestjs/common';
import { FurnovaBatchService } from './furnova-batch.service';

@Controller()
export class FurnovaBatchController {
  constructor(private readonly furnovaBatchService: FurnovaBatchService) {}

  @Get()
  getHello(): string {
    return this.furnovaBatchService.getHello();
  }
}
