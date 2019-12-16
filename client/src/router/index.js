import Vue from 'vue'
import Router from 'vue-router'

import home from './map/home/index' 
import login from './map/login/index'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
    	// { path: '/', redirect: '/login' },
        login,
        home,
        
    ]
})
