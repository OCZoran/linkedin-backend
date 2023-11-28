import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('HttpExceptionFilter');

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const errorResponse = exception.getResponse() as
      | { message: string; statusCode: number; code: string }
      | string;

    const errorMessage =
      typeof errorResponse === 'string'
        ? errorResponse
        : errorResponse.message || 'Internal Server Error';

    response.status(status).json({
      statusCode: status,
      message: errorMessage,
      error: exception.name,
    });

    this.logger.error(`[${status}] [${exception.name}] ${errorMessage}`);
  }
}
