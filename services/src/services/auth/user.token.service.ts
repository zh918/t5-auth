import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { jwt } from 'jsonwebtoken';

import { UserToken } from '../../entities/auth/user.token.entity';
import { HttpResponse } from '../../common/http.response'
import { FilterInterface } from '../../interfaces/filter.interface'
import { PaginationUtil } from '../../utils/pagination.util'

@Injectable()
export class UserTokenService {
  constructor(
    @InjectRepository(UserToken)
    private readonly userTokenRepository: Repository<UserToken>,
  ) {}

  async create(userTokenModel: UserToken): Promise<object> {
    this.userTokenRepository.save([userTokenModel]);
    return HttpResponse.success(); 
  }

  async verify(token: string): Promise<object> {
      const tokenModel = await this.userTokenRepository.find({TOKEN: token});
      if (!tokenModel) return HttpResponse.fail("token无效，请重新登录");
      jwt.verify(token, 'shhhhh', function(err, decoded) {
        if (err) {
          /*
            err = {
              name: 'TokenExpiredError',
              message: 'jwt expired',
              expiredAt: 1408621000
            }
          */
        }
      });
  }

  /**
   * 
   * @param filter 检索条件
   */
  async findAllByFilter(filter?: FilterInterface): Promise<object> {
    const result = await PaginationUtil.pagination(this.userTokenRepository,filter);
    return HttpResponse.success(result); 
  }

  
  
}
