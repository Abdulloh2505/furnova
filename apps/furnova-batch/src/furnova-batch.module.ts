import { Module } from '@nestjs/common';
import { FurnovaBatchController } from './furnova-batch.controller';
import { FurnovaBatchService } from './furnova-batch.service';

@Module({
  imports: [],
  controllers: [FurnovaBatchController],
  providers: [FurnovaBatchService],
})
export class FurnovaBatchModule {}
