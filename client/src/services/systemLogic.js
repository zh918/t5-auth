import urls from "./url";

class SystemLogic {
  constructor() {}
  
  /**
   * 分页查询系统
   */
  systemQuery(parms) {
    return $http.post(urls.systemQuery, parms);
  }
  
  /**
   * 根据系统编码查询系统信息
   */
  systemFind(parms) {
    return $http.post(urls.systemFind, parms);
  }
  
  /**
   * 新增系统
   */
  systemCreate(parms) {
    return $http.post(urls.systemCreate, parms);
  }
}

export default new SystemLogic();
