import shortid from 'shortid'
import layout from '@/views/_layout/default'
const home = r => require.ensure([], () => r(require('@/views/home/index.vue')), 'home')

export default {
    name:'首页',
    path:'/',
    component:layout,
    meta:{
      key:shortid.generate(),
    },
    children:[
        {name:'首页',path:'/home', component:home, meta: { uid:util.generate('/home') }},  
    ]
}
