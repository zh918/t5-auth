
import layout from '@/views/_layout/default'
const home = r => require.ensure([], () => r(require('@/views/home/index.vue')), 'home')   

export default {
    name:'首页',
    path:'/',
    component:layout,
    meta:{
      key:1
    },
    children:[
        {name:'home',path:'/home', component:home},  
    ]
}