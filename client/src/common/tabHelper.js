// import routerObj from '../router'

class TabHelper {
    static open(router,target='_blank') {
        let routerObj = require('../router'); 
        let groupRoutes = routerObj.default.options.routes;
        let routerModel = null;
        if (groupRoutes) {
            groupRoutes.forEach((g,i)=>{
                if (g.children) {
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

            let isExist = false; // globalVue.$store.tabs.list.some(g=>g.path == router.path);
            // 这里还需要加入参数匹配
            globalVue.$store.state.tabs.list.forEach((t,i)=>{
                if (t.path == router.path && !isExist) {
                    let tempFlag = true;
                    isExist = true;
                    if (t.query) {
                        for(let k in t.query) {
                            if (t.query[k] != router.query[k]) tempFlag = false;       
                        }
                    }
                    if (tempFlag == false) isExist = false;

                }
            });

            
            if (target == '_blank') { 
                if (isExist) {
                    globalVue.$store.dispatch('tabs/chooseActiveTab',tab).then(result=>{ 
                        globalVue.$router.replace({path:tab.path,query:tab.query,params:tab.params});
                    });
                }
                else {
                    globalVue.$store.dispatch('tabs/addTab',tab).then(result=>{ 
                        globalVue.$router.replace({path:tab.path,query:tab.query,params:tab.params});
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