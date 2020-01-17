import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(req, res, next): Promise<any> {
    // await someAsyncJob();
    setTimeout(()=>{
      console.log('写日志的过程中...')
    },1000 * 5);
     
    next();
 }
}