import shortid from 'shortid'
import layout from '@/views/_layout/default' 
const approve = r => require.ensure([], () => r(require('@/views/before/approve/list.vue')), 'before')   

export default {
    name:'贷前管理',
    path:'/',
    component:layout,
    meta:{
      key:shortid.generate()
    },
    children:[
        {id:shortid.generate(),name:'业务审批',path:'/before/approve/list', component:approve, meta: { keepAlive: true}},  
    ]
}
