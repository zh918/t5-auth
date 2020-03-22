import shortid from 'shortid'
import layout from '@/views/_layout/default'
const home = r => require.ensure([], () => r(require('@/views/home/index.vue')), 'home')
const list = r => require.ensure([], () => r(require('@/views/home/list.vue')), 'home')    
const details = r => require.ensure([], () => r(require('@/views/home/details.vue')), 'home') 

export default {
    name:'首页',
    path:'/',
    component:layout,
    meta:{
      key:shortid.generate(),
    },
    children:[
        {name:'首页',path:'/home', component:home, meta: { uid:shortid.generate() }},  
        {name:'首页列表',path:'/list', component:list, meta: { uid:shortid.generate() }}, 
        {name:'详情',path:'/details', component:details, meta: { uid:shortid.generate() }}, 
    ]
}
