import Vue from 'vue'
import Router from 'vue-router'

import login from './map/login/index'
import apply from './map/before/apply'
import approve from './map/before/approve'


import home from './map/home/index' 
import demo from './map/demo/index'

Vue.use(Router)
 
let routerArray = [
    // { path: '/', redirect: '/login' },
    login,
    home,
    apply,
    approve,
    demo
]; 

let routerArrayCache = $Data.getObj('cacheRouterData') == undefined ? null : $Data.getObj('cacheRouterData');
if (routerArrayCache) {
    routerArray = null;
    routerArray = [];
    routerArrayCache.forEach((c,i)=>{
        routerArray.push(c)
    }) 
}
else {
    $Data.setObj('cacheRouterData', routerArray); 
}

console.log(routerArray);


export default new Router({
    mode: 'history',
    routes: routerArray,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
