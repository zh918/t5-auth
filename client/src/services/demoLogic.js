import urls from "./url";

class DemoLogic {
  constructor() {}

  loanPageQueryLoan(parms) {
    return $http.post(urls.loanPageQueryLoan, parms);
  }
}

export default new DemoLogic();
