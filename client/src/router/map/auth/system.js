import shortid from 'shortid'
import layout from '@/views/_layout/default'
const list = r => require.ensure([], () => r(require('@/views/auth/system/list.vue')), 'system')
const detail = r => require.ensure([], () => r(require('@/views/auth/system/detail.vue')), 'system')

export default {
    name:'系统管理',
    path:'/system',
    component:layout,
    meta:{
      key:shortid.generate()
    },
    children:[
        {name:'系统列表',path:'/system/list', component:list, meta: { uid:util.generate('/system/list') }},  
        {name:'系统详情',path:'/system/list/detail', component:detail, meta: { uid:util.generate('/system/list/detail') }}, 
    ]
}
