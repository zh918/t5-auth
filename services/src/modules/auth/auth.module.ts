import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemService } from '../../services/auth/system.service';
import { AuthController } from '../../controllers/auth/auth.controller';
import { System } from '../../entities/auth/system.entity';

@Module({
  imports: [TypeOrmModule.forFeature([System])],
  providers: [SystemService],
  controllers: [AuthController],
})
export class AuthModule {}