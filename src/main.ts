import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //global setting
  // env config
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
