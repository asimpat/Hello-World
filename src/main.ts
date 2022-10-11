import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
    app.use(cookieParser());
    app.enableCors({
      origin: 'http://localhost:8080', //veu frontend
      credentials: true,
    });
  await app.listen(4000);
}
bootstrap();
