import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  NotFoundException,
  Catch,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Response } from 'express';

@Injectable()
export class UniqueConstraintInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error.response?.statusCode === 409) {
          const response = context.switchToHttp().getResponse<Response>();
          response.status(409).json({
            message: 'Credenciais inválidas ou já existentes!',
          });
          return throwError(error);
        } else if (error.response?.statusCode === 404) {
          const response = context.switchToHttp().getResponse<Response>();
          response.status(404).json({
            message: 'Usuário não encontrado!',
          });
          return throwError(error);
        } else if (error.response?.statusCode === 400) {
          const response = context.switchToHttp().getResponse<Response>();
          response.status(400).json({
            message: 'Dados inválidos!',
          });
          return throwError(error);
        } else {
          return throwError(error);
        }
      }),
    );
  }
}
