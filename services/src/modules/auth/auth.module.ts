import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemService } from '../../services/auth/system.service';
import { UserService } from '../../services/auth/user.service';
import { UserTokenService } from '../../services/auth/user.token.service';
import { SystemController } from '../../controllers/auth/system.controller';
import { UserController } from '../../controllers/auth/user.controller';
import { System } from '../../entities/auth/system.entity';
import { User } from '../../entities/auth/user.entity';
import { UserToken } from '../../entities/auth/user.token.entity'
import { HttpStrategy } from '../../services/auth/http.strategy'

@Module({
  imports: [
    TypeOrmModule.forFeature([System,User,UserToken]),
    // TypeOrmModule.forFeature([User])
  ],
  providers: [SystemService,UserService,UserTokenService,HttpStrategy],
  controllers: [SystemController,UserController],
})
export class AuthModule {}