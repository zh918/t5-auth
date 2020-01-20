import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { jwt } from 'jsonwebtoken';
import * as moment from 'moment';

import { User } from '../../entities/auth/user.entity';
import { UserToken } from '../../entities/auth/user.token.entity';
import { HttpResponse } from '../../common/http.response';
import { FilterInterface } from '../../interfaces/filter.interface';
import { PaginationUtil } from '../../utils/pagination.util';
import { StatusEnum } from '../../enums/status.enum';
import { UserTokenService } from './user.token.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    @InjectRepository(UserToken)
    private readonly userRepository: Repository<User>,
    private readonly userTokenService: UserTokenService
  ) {}

  async login(userModel: User): Promise<object> {
    const currentModel = await this.userRepository.findOne({LOGIN_NAME: userModel.LOGIN_NAME, LOGIN_PWD: userModel.LOGIN_PWD, SYSTEM_CODE: userModel.SYSTEM_CODE});
    if (!currentModel) return HttpResponse.fail("登录失败，用户名或密码不存在");
    if (currentModel.STATUS == StatusEnum.Disabled || currentModel.STATUS == StatusEnum.Deleted) {
        return HttpResponse.fail("登录失败，该账号已被停止使用，请联系管理员");
    }

    const exp = Math.floor(Date.now() / 1000) + (60 * 60);
    const token = jwt.sign({
      exp: exp,
      data: currentModel
    }, 'secret');

    // 登录成功 生成token信息
    const userTokenModel = new UserToken();
    userTokenModel.USER_ID = currentModel.ID;
    userTokenModel.TOKEN = token;
    userTokenModel.SYSTEM_CODE = currentModel.SYSTEM_CODE;
    userTokenModel.UPDATED_TIME = moment().format();
    userTokenModel.LOSE_TIME = moment(exp).format();
    userTokenModel.STATUS = StatusEnum.Normal;
    const result = await this.userTokenService.create(userTokenModel);
    if (result["code"] == 1) {
      return HttpResponse.success();
    }
    else {
      return HttpResponse.fail('程序处理异常，请重新登录');
    }
    
  }

  async create(userModel: User): Promise<object> {
    this.userRepository.save([userModel]);
    return HttpResponse.success(); 
  } 

  /**
   * 
   * @param filter 检索条件
   */
  async findAllByFilter(filter?: FilterInterface): Promise<object> {
    const result = await PaginationUtil.pagination(this.userRepository,filter);
    return HttpResponse.success(result); 
  }

  
  
}
