import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotImplementedException } from '@nestjs/common'
import { SystemService } from '../../services/auth/system.service';
import { SystemDto } from '../../dtos/system.dto'
import { FilterInterface } from '../../interfaces/filter.interface'

@Controller('api/auth/system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Post('/find')
  find(@Body() parms: any): Promise<object> {
    console.log(parms.code)
    return this.systemService.findByCode(parms.code);
  }

  /**
   * @api {post} /api/auth/system/query
   * @apiName 分页查询系统
   * @apiGroup system
   *
   * @apiParam {Object} [filter]  检索条件对象
   * @apiParam {Object} [filter[parameter]]  条件对象
   * @apiParam {Object} [filter[page]]  分页对象
   * @apiParam {Object} [page[pageNum]]  条件对象
   * @apiParam {Object} [page[pageSize]]  条件对象
   * 
   * @apiParam {Object} [parameter[NAME]]  系统名称
   * @apiParam {Object} [parameter[STATUS]]  系统状态
   * 
   *
   * @apiSuccess {String} firstname Firstname of the User.
   * @apiSuccess {String} lastname  Lastname of the User.
   */
  @Post('/query')
  query(@Body() filter: FilterInterface): Promise<object> {
    return this.systemService.findAllByFilter(filter);
  }

  /**
   * 创建系统
   * @param systemDto 系统数据
   */
  @Post('/create')
  async create(@Body() systemDto: SystemDto): Promise<object> {
    const moment = require('moment');
    const shortid = require('shortid');

    systemDto.CODE = `auth_${shortid.generate()}`;
    systemDto.CREATED_TIME = moment().format();
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
