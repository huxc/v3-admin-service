import { join } from 'path';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common/pipes';
import { HttpResponseInterceptor, HttpExceptionFilter } from './common/http';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  // 验证管道
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new HttpResponseInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      //   whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // 设置静态资源目录
  app.useStaticAssets(join(__dirname, '..', 'static'));

  await app.listen(3000);
}
bootstrap();
