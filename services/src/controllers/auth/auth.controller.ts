import { Controller, Get, Post } from '@nestjs/common';
import { NotImplementedException } from '@nestjs/common'
import { SystemService } from '../../services/auth/system.service';
import { System } from '../../entities/auth/system.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly systemService: SystemService) {}

  @Get()
  hello(): Promise<object> {
    // throw new NotImplementedException();
    const filter = {
      parameter: {
        name: '测', 
      },
      page: {
        pageNum: 1,
        pageSize: 10,
      },
      // compare: {
      //   name: "equal"
      // }
    }
    return this.systemService.findAllByFilter(filter);
  }

  
  
}
