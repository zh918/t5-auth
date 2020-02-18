import path from "@/config/env";

export default {
  // 登陆 登出 菜单
  getAccessToken: `${path.authApi}/api/oauth/token/getAccessToken`,
  // getUserMenuTree: `${path.authApi}/api/user/systemuser/getUserMenuTree`,
  getUserMenuTree: `${path.authApi}/api/oauth/token/getUserMenuTree`,
  

  // ---------demo-------------
  loanPageQueryLoan: `${path.authApi}/api/coperation/loan/pageQueryLoan`,
  
  // 贷前管理
  factorapplyPageQuery: `${path.busApi}/api/apply/factorapply/pageQuery`,
  factorapplyapprovalPageQuery: `${path.busApi}/api/apply/factorapplyapproval/pageQuery`
  
  
};
