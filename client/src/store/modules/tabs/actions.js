import shortid from 'shortid'
import * as types from './types'

export default {

    loadTabs(context) {
        
    },
    addTab(context,data) {
        return new Promise(function(resolve,reject) {
            data.id = shortid.generate(); // 每次新增的时候需要id不一致的tab // data.meta.uid; // shortid.generate();
            context.commit(types.LOADING_ADD_TAB,data);
            resolve(true);
        });
    },
    delTab(context,data) {
        return new Promise(function(resolve,reject) {
            context.commit(types.LOADING_DEL_TAB,data); 
            resolve({...context.state.list.find(t=>t.actived==true)});
        });
    },
    chooseActiveTab(context,data) {
        return new Promise(function(resolve,reject) { 
            context.commit(types.LOADING_CHOOSE_TAB,data);
            resolve(true);
        });
    }

  


}
