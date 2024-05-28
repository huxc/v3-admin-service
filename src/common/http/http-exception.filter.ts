import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { HttpErrorType } from './http-error-type';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = +exception.getStatus();

    let { errorType, message } = exception.getResponse() as {
      errorType: string;
      message: string | string[];
    };

    if (!errorType) {
      errorType = HttpErrorType[status];
      errorType = errorType ?? 'UNEXPECTED_ERROR';
    }
    if (message instanceof Array) {
      message = message.join('; ');
    }
    response.status(status).json({
      data: null,
      code: status,
      msg: message,
      success: false,
    });
  }
}
