import shortid from 'shortid'
import layout from '@/views/_layout/default'
const list = r => require.ensure([], () => r(require('@/views/auth/resource/list.vue')), 'resource')

export default {
    name:'权限管理',
    path:'/resource',
    component:layout,
    meta:{
      key:shortid.generate()
    },
    children:[
        {name:'资源列表',path:'/resource/list', component:list, meta: { uid:util.generate('/resource/list') }},
    ]
}
