import Vue from 'vue'
import Router from 'vue-router'

import login from './map/login/index'
import home from './map/home/index' 
import demo from './map/demo/index'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
    	// { path: '/', redirect: '/login' },
        login,
        home,
        demo
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
