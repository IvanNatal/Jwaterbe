import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UniqueConstraintInterceptor } from './common/errors/interceptors/unique-constraint.interceptor';
import { UniqueCoinstraintFilter } from './common/filters/http-exception/unique-constraint.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidUnknownValues: true,
    }),
  );

  app.useGlobalFilters(new UniqueCoinstraintFilter());
  app.useGlobalInterceptors(new UniqueConstraintInterceptor());

  await app.listen(3000);
}
bootstrap();
