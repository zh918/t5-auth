// import routerObj from '../router'
import shortid from 'shortid'

class TabHelper {
    static open(router,target='_blank') {
        let routerObj = require('../router'); 
        let groupRoutes = routerObj.default.options.routes;
        let routerModel = null;
        if (groupRoutes) {
            groupRoutes.forEach((g,i)=>{
                if (g.children && !routerModel) {
                    routerModel = g.children.find(r=>r.path == router.path);
                }
            });
        }

        if (routerModel) {
            let tab = {
                label:routerModel.name,
                value:routerModel.id,
                actived:true,
                ...router
            };

            // if (!tab.query) tab.query = {};

            let isExist = false; // globalVue.$store.tabs.list.some(g=>g.path == router.path);
            // 这里还需要加入参数匹配
            globalVue.$store.state.tabs.list.forEach((t,i)=>{
                if (t.path == router.path && !isExist) {
                    let tempFlag = true;
                    isExist = true;
                    if (t.query) {
                        for(let k in t.query) {
                            // if (k == 'uid') continue;
                            if (t.query[k] != router.query[k]) tempFlag = false;       
                        }
                    }
                    if (tempFlag == false) isExist = false;

                }
            });
 
            if (target == '_blank') { 
                if (isExist) {
                    tab.meta = {
                        keepAlive: true
                    };
                    
                    // tab.query.uid = shortid.generate();
                    if (location.pathname == router.path) return; 
                    
                    globalVue.$store.dispatch('tabs/chooseActiveTab',tab).then(result=>{  
                        console.log('更新当前路由地址',tab)
                        globalVue.$router.replace({path:tab.path,query:tab.query,params:tab.params}); 
                    });
                }
                else {
                    tab.meta = {
                        keepAlive: false
                    };

                    // tab.query.uid = shortid.generate();
                    
                    globalVue.$store.dispatch('tabs/addTab',tab).then(result=>{  
                        console.log('插入新路由地址',tab)
                        globalVue.$router.push({path:tab.path,query:tab.query,params:tab.params}); 
                    });
                }

            }
            else if (target == '_self')
            {
                // 当前页渲染
                
            }

        }
    }
}

window.$TabHelper = TabHelper;