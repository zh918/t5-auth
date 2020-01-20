import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
 
import { AuthModule } from './modules/auth/auth.module' 
import { entities } from './entities/index.entity'
import { LoggerMiddleware } from './middlewares/logger.middleware'
import { TransformInterceptor } from './interceptors/transform.interceptor'
import { ErrorsInterceptor } from './interceptors/errors.interceptor'

@Module({
  imports: [
    // TypeOrmModule.forRoot(),
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   host: 'localhost',
    //   database: 'lt_auth',
    //   username: "stephen",
    //   password: "123456",
    //   entities: [System],
    //   synchronize: true,
    // }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'lt_auth',
      username: "stephen",
      password: "123456",
      entities: entities,
      synchronize: false,
    }),
    AuthModule,
  ],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TransformInterceptor,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
  ]
})
export class AppModule implements NestModule {
  // constructor(private readonly connection: Connection) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
