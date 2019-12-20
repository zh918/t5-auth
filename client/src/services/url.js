import path from '@/config/env'

export default {
	// 登陆 登出 菜单
    getAccessToken:`${path.authApi}/api/oauth/token/getAccessToken`,
    getUserMenuTree:`${path.authApi}/api/user/systemuser/getUserMenuTree`,

    
}