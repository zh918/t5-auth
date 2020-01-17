import { CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponse } from '../common/http.response'

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(catchError((error, caught) => {
            if (error instanceof HttpException) {
                return Promise.resolve({
                    code: error.getStatus(),
                    msg: error.getResponse()
                });
            } else {
                return Promise.resolve(HttpResponse.fail('程序异常:' + error.toString()));
            }
        }));
    }
}