import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotImplementedException } from '@nestjs/common'
import { SystemService } from '../../services/auth/system.service';
import { SystemDto } from '../../dtos/system.dto'
import { FilterInterface } from '../../interfaces/filter.interface'

@Controller('api/auth/system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Get()
  test(): Promise<object> {
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
    return this.systemService.findAllByFilter(filter)
  }

  /**
   * 分页查询系统数据
   * @param filter 查询条件
   */
  @Post()
  query(@Body() filter: FilterInterface): Promise<object> {
    return this.systemService.findAllByFilter(filter);
  }

  /**
   * 创建系统
   * @param systemDto 系统数据
   */
  @Post()
  async create(@Body() systemDto: SystemDto): Promise<object> {
    return this.systemService.create(systemDto);
  }

  /**
   * 更新系统
   * @param SystemDto 系统更新数据
   */
  @Post()
  async update(@Body() SystemDto: SystemDto): Promise<object> {
    return null;
  }

  

  
  
}
