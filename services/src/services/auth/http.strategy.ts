import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserTokenService } from './user.token.service';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userTokenService: UserTokenService) {
    super();
  }

  async validate(token: string) {
    debugger
    const result = await this.userTokenService.verify(token);
    if (result["code"] == -1) {
          throw new UnauthorizedException();
        return result;
    }
    return result;
  }
}