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

  async create(systemModel: System): Promise<object> {
    this.systemRepository.save([systemModel]);
    return HttpResponse.success(); 
  } 

  /**
   * 
   * @param filter 检索条件
   */
  async findAllByFilter(filter?: FilterInterface): Promise<object> {
    const result = await PaginationUtil.pagination(this.systemRepository,filter);
    return HttpResponse.success(result); 
  }

  
  
}
