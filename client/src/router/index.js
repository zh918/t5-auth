import Vue from 'vue'
import Router from 'vue-router'

import demo from './map/demo/index' 

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
    	// { path: '/', redirect: '/login' },
        demo,
        
    ]
})
