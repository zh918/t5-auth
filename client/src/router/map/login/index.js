
import empty from '@/views/_layout/empty'
const login = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'login')   

export default {
    name:'login',
    path:'/',
    component:empty,
    meta:{
      key:2
    },
    children:[
        {name:'login',path:'/login', component:login},  
    ]
}
