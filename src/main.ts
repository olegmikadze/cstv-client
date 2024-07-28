import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const clientApp = await NestFactory.create(AppModule);

  await clientApp.listen(3000);
}
bootstrap();
