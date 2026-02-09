import { NestFactory } from '@nestjs/core';
import { FurnovaBatchModule } from './furnova-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(FurnovaBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
