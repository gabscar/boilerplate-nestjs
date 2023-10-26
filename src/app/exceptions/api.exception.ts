import { IErrorBody } from '@domain/interfaces/common/error.interface';
import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiException extends HttpException {
  constructor(body: IErrorBody, statusCode: HttpStatus) {
    super(body, statusCode);
  }
}
