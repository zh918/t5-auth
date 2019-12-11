import Vue from 'vue'
import Router from 'vue-router'

import demo from './map/demo/index' 
import login from './map/login/index'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
    	{ path: '/', redirect: '/login' },
        demo,
        login,
        
    ]
})
