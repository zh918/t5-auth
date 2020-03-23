import Vue from 'vue'
import Router from 'vue-router'

import login from './map/login/index'
import apply from './map/before/apply'
import approve from './map/before/approve'


import home from './map/home/index' 
import demo from './map/demo/index'

Vue.use(Router)

// let routerObject = null;

// let routerArrayCache = $Data.getObj('cacheRouterData') == undefined ? null : $Data.getObj('cacheRouterData');
// if (routerArrayCache) 
// { 
//     routerObject = new Router({
//         mode: 'history',
//         routes: routerArrayCache,
//         scrollBehavior (to, from, savedPosition) {
//             if (savedPosition) {
//                 return savedPosition
//             } else {
//                 return { x: 0, y: 0 }
//             }
//         }
//     });
// }
// else 
// {
//     let routerArray = [
//         // { path: '/', redirect: '/login' },
//         login,
//         home,
//         apply,
//         approve,
//         demo
//     ]; 
    
//     routerObject = new Router({
//         mode: 'history',
//         routes: routerArray,
//         scrollBehavior (to, from, savedPosition) {
//             if (savedPosition) {
//                 return savedPosition
//             } else {
//                 return { x: 0, y: 0 }
//             }
//         }
//     });

//     $Data.setObj('cacheRouterData', routerArray); 
    

// }


// export default routerObject;






 
let routerArray = [
    // { path: '/', redirect: '/login' },
    login,
    home,
    apply,
    approve,
    demo
];

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
