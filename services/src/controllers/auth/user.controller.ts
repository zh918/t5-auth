import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { UserService } from '../../services/auth/user.service';
import { UserDto } from '../../dtos/user.dto'
import { FilterInterface } from '../../interfaces/filter.interface'
import { User } from 'src/entities/auth/user.entity';

@Controller('api/auth/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * 测试方法待删除
   */
  @Get()
  test(): Promise<object> {
    const filter = {
      parameter: {
        LOGIN_NAME: '测', 
      },
      page: {
        pageNum: 1,
        pageSize: 10,
      },
      // compare: {
      //   name: "equal"
      // }
    }
    return this.userService.findAllByFilter(filter)
  }

  /**
   * 登录
   * @param req 
   */
  @Post('/login')
  login(@Body() req: {login_name:string, login_pwd:string, code:string}): Promise<object> {
    console.log('登录信息', req.login_name, req.login_pwd);
    return this.userService.login({LOGIN_NAME:req.login_name,LOGIN_PWD:req.login_pwd,SYSTEM_CODE:req.code} as User);
  }

  /**
   * 分页查询系统数据
   * @param filter 查询条件
   */
  @Post()
  query(@Body() filter: FilterInterface): Promise<object> {
    return this.userService.findAllByFilter(filter);
  }

  /**
   * 创建系统
   * @param systemDto 系统数据
   */
  @Post()
  async create(@Body() userDto: UserDto): Promise<object> {
    return this.userService.create(userDto);
  }

  /**
   * 更新系统
   * @param SystemDto 系统更新数据
   */
  @Post()
  async update(@Body() userDto: UserDto): Promise<object> {
    return null;
  }

  

  
  
}
