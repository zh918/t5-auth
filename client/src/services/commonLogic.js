import urls from "./url";

class CommonLogic {
  constructor() {}

  login(parms) {
    return $http.post(urls.userLogin, parms).then(result => {
      if (result.code == 1) {
        $Data.set("token", result.data.token);
        // $Data.set("name", result.data.LOGIN_NAME);
        // $Data.set("role", result.data.ROLE_ID);
        console.log(result);
      }
      return result;
    });
  }

  loginOut(parms) {}

  getMenu(parms) {
    return $http.post(urls.getUserMenuTree, parms);
  }
}

export default new CommonLogic();
