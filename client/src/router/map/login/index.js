import shortid from 'shortid'
import empty from '@/views/_layout/empty'
const login = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'login')   

export default {
    name:'login',
    path:'/',
    component:empty,
    meta:{
      key:shortid.generate(),
    },
    children:[
        {name:'login',path:'/login', component:login, meta: { uid:util.generate('/login') }},  
    ]
}
