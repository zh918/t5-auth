import urls from "./url";

class CommonLogic {
  constructor() {}

  login(parms) {
    return $http.post(urls.getAccessToken, parms).then(result => {
      if (result.errorCode == 0) {
        $Data.set("accessToken", result.data.accessToken);
        $Data.set("userCode", result.data.userCode);
        $Data.set("userName", result.data.userName);
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
