
// 自定义样式及reset
import './style/common.less'
import './style/reset.less'
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue' 
import './common/storage'
import router from './router/index'
import store from './store/index'
import './config/env'
import './common/http'
// import './components/index'
import {authRouter} from './common/auth'
import './common/util' 
import './common/tabHelper'

Vue.use(Element)

const globalVue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

window.globalVue = globalVue 

console.log('环境：',process.env.NODE_ENV)
