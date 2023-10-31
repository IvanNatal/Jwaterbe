import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class UniqueCoinstraintFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception.code === 'P2002') {
      if (
        Array.isArray(exception.meta?.target) &&
        exception.meta.target.includes('nickname')
      ) {
        response.status(HttpStatus.CONFLICT).json({
          message: 'Nickname already exists',
        });
      } else if (
        Array.isArray(exception.meta?.target) &&
        exception.meta.target.includes('email')
      ) {
        response.status(HttpStatus.CONFLICT).json({
          message: 'Email already exists',
        });
      } else {
        response.status(HttpStatus.CONFLICT).json({
          message: 'Duplicate entry',
        });
      }
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Internal server error',
      });
    }
  }
}
