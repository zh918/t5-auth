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
            
            if (target == '_blank') { 
                globalVue.$store.dispatch('tabs/addTab',tab).then(result=>{ 
                    globalVue.$router.replace({path:tab.path,query:tab.query,params:tab.params});
                });
            }
            else if (target == '_self')
            {
                // 当前页渲染
                
            }

        }
    }
}

window.$TabHelper = TabHelper;