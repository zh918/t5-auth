import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { System } from '../../entities/auth/system.entity';
import { HttpResponse } from '../../common/http.response'
import { FilterInterface } from '../../interfaces/filter.interface'
import { PaginationUtil } from '../../utils/pagination.util'

@Injectable()
export class SystemService {
  constructor(
    @InjectRepository(System)
    private readonly systemRepository: Repository<System>,
  ) {}

  /**
   * 
   * @param filter 检索条件
   */
  async findAllByFilter(filter?: FilterInterface): Promise<object> {
    const result = await PaginationUtil.pagination(this.systemRepository,filter);
    return HttpResponse.success(result); 
  }

  async findByFilter(filter: object): Promise<object> {
    
    return HttpResponse.success();
  }

  /**
   * 通用数据分页
   * @param currentRepository 当前仓储对象
   * @param filter 过滤条件
   */
  async pagination(currentRepository: Repository<any>, filter?: FilterInterface): Promise<any> {
    const queryBuilder = await currentRepository.createQueryBuilder('query').where('1=1');
    if (filter) {
      if (filter.parameter) {
        for (let key in filter.parameter) {
          if (filter.parameter.hasOwnProperty(key)) {
            if (filter.compare && filter.compare[key] == 'like') queryBuilder.andWhere(`query.${key} like '%${filter.parameter[key]}%'`);
            else if (filter.compare && filter.compare[key] == 'equal') queryBuilder.andWhere(`query.${key} = '${filter.parameter[key]}'`);
            else queryBuilder.andWhere(`query.${key} like '%${filter.parameter[key]}%'`);
          }
        }
      }

      if (filter.page) {
        queryBuilder.skip(filter.page.pageSize * (filter.page.pageNum - 1)).take(filter.page.pageSize);
      }

      if (filter.orderBy) {
        filter.orderBy.forEach((s, i) => {
          queryBuilder.addOrderBy(s.sort,s.order);
        });
      }
    }

    const list = await queryBuilder.getMany();
    const total = await queryBuilder.getCount();
    const page = !filter || !filter.page ? {total} : {pageNum:filter.page.pageNum, pageSize:filter.page.pageSize,total};
    const result = {list, page };

    return result;
  }
  
}
