import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggerService } from '../../infra/services/logger/logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, originalUrl, ip } = request;
    const userAgent = request.get('user-agent') || '';

    this.logger.log(
      'Incoming Request',
      `${method} ${originalUrl} ${ip} ${userAgent}`,
    );

    return next.handle().pipe();
  }
}
