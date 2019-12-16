// store入口管理
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from './plugins/logger'
import source from './modules/source/mutations'
import tabs from './modules/tabs/mutations'

Vue.use(Vuex)

const state = {

}

export default new Vuex.Store({
    // mutations: rootMutation,
    modules: { 
      tabs,
      source
    },
    strict: true,
    plugins: false ? [createLogger()] : []
})
