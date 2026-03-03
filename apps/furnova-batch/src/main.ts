import { NestFactory } from '@nestjs/core';
import { FurnovaBatchModule } from './furnova-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(FurnovaBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
