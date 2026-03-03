import { Module } from '@nestjs/common';
import { FurnovaBatchController } from './furnova-batch.controller';
import { FurnovaBatchService } from './furnova-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
     ConfigModule.forRoot()
  ],
  controllers: [FurnovaBatchController],
  providers: [FurnovaBatchService],
})
export class FurnovaBatchModule {}
