import * as types from './types'
import actions from './actions'
import shortid from 'shortid'

const state = {
  list:[
    { 
        id:0,
        label:'首页',
        value:shortid.generate(),
        actived:true,
        path:'/home',
        meta: {
            keepAlive:true
        }
    }, 
  ]
}

let cacheTabData = $Data.get(types.LOADING_ALL_TAB) == undefined ? null : JSON.parse($Data.get(types.LOADING_ALL_TAB));
if (cacheTabData) {
  Object.assign(state , cacheTabData);
}
 

const mutations = { 
    [types.LOADING_ADD_TAB](tempState, data) {
        tempState.list.forEach((t,i)=>t.actived=false);
        tempState.list.push(data);
        Object.assign(state,tempState);
        $Data.set(types.LOADING_ALL_TAB,JSON.stringify(state));
    }, 
    [types.LOADING_DEL_TAB](tempState, data) {
        let tempTabs = tempState.list;
        let index = tempTabs.findIndex(t=>t.id == data.id);
        if (index != -1) {
            tempTabs.splice(index,1);
            tempState.list = tempTabs;
        }
        if (data.actived) {
            tempState.list[tempState.list.length-1].actived = true;
        }
        Object.assign(state,tempState);
        $Data.set(types.LOADING_ALL_TAB,JSON.stringify(state));
    }, 
    [types.LOADING_CHOOSE_TAB](tempState, data) { 
        tempState.list.forEach((t,i)=>{
            t.actived = false;
            t.meta.keepAlive = true;
            // if (data.id == t.id || (!data.id && data.path == t.path)) {
            //     t.actived = true;
            // }
            if (data.path == t.path) {
              if (data.query) {
                let flag = true;
                for(let key in data.query) {
                  if (data.query.hasOwnProperty(key) && data.query[key] != t.query[key]) flag = false;
                  if (!flag) break;
                }

                t.actived = flag;
              }
              else {
                t.actived = true;
              }
            }
        }); 
        
        Object.assign(state,tempState);
        $Data.set(types.LOADING_ALL_TAB,JSON.stringify(state));
    },

}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
