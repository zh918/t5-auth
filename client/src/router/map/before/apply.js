import shortid from 'shortid'
import layout from '@/views/_layout/default'
const apply = r => require.ensure([], () => r(require('@/views/before/apply/list.vue')), 'before') 

export default {
    name:'贷前管理',
    path:'/',
    component:layout,
    meta:{
      key:shortid.generate()
    },
    children:[
        {name:'业务申请',path:'/before/apply/list', component:apply, meta: { uid:util.generate('/before/apply/list') }},  
    ]
}
