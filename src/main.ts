import { ValidationException } from '@app/exceptions/validation.exception';
import { ErrorFilter } from '@app/filters/error.filter';
import { LoggingInterceptor } from '@app/interceptors/logger.interceptor';
import { ResponseInterceptor } from '@app/interceptors/response.interceptor';
import { TimeoutInterceptor } from '@app/interceptors/timeout.interceptor';
import { LoggerService } from '@infra/services/logger/logger.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggerService = new LoggerService();

  app.useGlobalFilters(new ErrorFilter(loggerService));
  app.useGlobalInterceptors(
    new ResponseInterceptor(loggerService),
    new TimeoutInterceptor(),
    new LoggingInterceptor(loggerService),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => new ValidationException(errors),
    }),
  );

  app.setGlobalPrefix(`api/${process.env.API_VERSION}`);

  app.use(helmet());

  app.enableCors();

  await app.listen(process.env.PORT);
}
bootstrap();
