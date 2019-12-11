
import layout from '@/views/_layout/default'
const demo = r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')   

export default {
    name:'demo',
    path:'/',
    component:layout,
    meta:{
      key:1
    },
    children:[
        {name:'demo',path:'/demo', component:demo},  
    ]
}
