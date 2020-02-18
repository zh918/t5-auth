import urls from "./url";

class BeforeLogic {
  constructor() {}

  factorapplyPageQuery(parms) {
    return $http.post(urls.factorapplyPageQuery, parms);
  }
  
  factorapplyapprovalPageQuery(parms) {
    return $http.post(urls.factorapplyapprovalPageQuery, parms);
  }
}

export default new BeforeLogic();
