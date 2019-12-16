import * as types from './types'
import actions from './actions'


const state = {
  list:[
    { 
        label:'首页',
        value:'13423',
        actived:true,
        router:'/home',
        query:{
            c:1
        },
        params:{

        }
    },
    { 
        label:'客户管理',
        value:'343423',
        actived:false,
        router:'/list',
        query:{
            c:2
        },
        params:{

        }
    },
    { 
        label:'客户管理-详情',
        value:'3444444',
        actived:false,
        router:'/details',
        query:{
            c:3,
            d:1
        },
        params:{

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
        let index = tempTabs.indexOf(data);
        if (index != -1) {
            tempTabs.splice(index,1);
            tempState.list = tempTabs;
        }
        Object.assign(state,tempState);
        $Data.set(types.LOADING_ALL_TAB,JSON.stringify(state));
    }, 
    [types.LOADING_CHOOSE_TAB](tempState, data) { 
        tempState.list.forEach((t,i)=>{
            t.actived = false;
            if (data.value == t.value) t.actived = true;
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
