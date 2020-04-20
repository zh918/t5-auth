import shortid from 'shortid'
import layout from '@/views/_layout/default'
const list = r => require.ensure([], () => r(require('@/views/auth/role/list.vue')), 'role')

export default {
    name:'权限管理',
    path:'/role',
    component:layout,
    meta:{
      key:shortid.generate()
    },
    children:[
        {name:'角色列表',path:'/role/list', component:list, meta: { uid:util.generate('/role/list') }},
    ]
}
