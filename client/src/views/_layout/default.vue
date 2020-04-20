<template>
  <div class="default-container">
    <div class="http-line"></div>
    <div class="view-top-container">
      <div class="left-top-box">保理系统</div>
      <div class="middle-top-box"></div>
      <div class="right-top-box"><i class="el-icon-user-solid"></i> stephen&nbsp;<el-button type="info" size="mini" icon="el-icon-switch-button" circle @click="handleLoginOut"></el-button></div>
    </div>
    <div class="view-main-container">
        <div class="left-main-box" :class="isCollapse?'left-min-width':'left-max-width'">
            <left-menu :isCollapse="isCollapse" :isTabs="display==='tab'"></left-menu>
        </div>
        <div class="right-main-box">
            <div class="nav-container">
                <div class="nav-left">
                    <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"  @click="()=>{this.isCollapse = !this.isCollapse;}"></i>
                </div>
                <div class="nav-middle" v-if="display==='tab'">
                    <div class="nav-item" :class="item.actived?'bg-color-success':''" :key="index" v-for="(item,index) in tabs.list" @click="handleChooseTab(item)">
                        <div class="point"></div>{{item.label}}<i class="el-icon-circle-close" @click.stop="handleDelTab(item)" v-if="index != 0"></i><span v-if="index == 0">&nbsp;</span>
                    </div>
                </div>
                <div v-else-if="display==='breadcrumb'">
                  <el-breadcrumb separator-class="el-icon-arrow-right" class="nav-breadcrumb">
                    <el-breadcrumb-item :key="index"  v-for="(item,index) in breadcrumbDataList">{{item.name}}</el-breadcrumb-item>
                  </el-breadcrumb>
                </div>
            </div>
            <div class="right-main-router-view-box">
                <router-view></router-view>
            </div>
        </div> 
    </div>
 		 
  </div>
</template>

<script>
  import { mapState } from "vuex";    
  import leftMenu from './block/leftMenu'

	export default {
		data() {
			return { 
        isCollapse:false, // true:菜单折叠 false:菜单打开
        display: 'breadcrumb', // 页面打开方式 tab、breadcrumb
        // keepAlive:this.$store.state.tabs.list.find(t=>t.path == this.$route.path).meta.keepAlive || false
			}
    },
    computed:{
      ...mapState(["tabs"]),
      breadcrumbDataList() {
        return this._filterRouterForBreadcrumb();
      }
    },
    components: {
      leftMenu
    },
    created() { 
      this.initData();  
    },
    methods: {
      initData() {
      },
      _filterRouterForBreadcrumb() {
        let _this = this;
        let breadcrumbData = [];
        let currentRouter = this.tabs.list.find(t=>t.actived);
        let routes = this.$router.options.routes;
        let splitRouter = currentRouter.path.split('/');

        for (let i = 2; i <= splitRouter.length; i++) {
          let tempPath = splitRouter.slice(0,i).join('/');
          _pushRouter(tempPath);
        }
        
        function _pushRouter(path) {
          routes.forEach((r,i)=>{
            if (r.path == path) {
              // 直接定位到目录
              breadcrumbData.push({name: r.name, path: r.path, isJump: false});
            }
            else if (r.children.length > 0) {
              r.children.forEach((c,k)=>{
                if (c.path == path) 
                {
                  breadcrumbData.push({name: c.name, path: c.path, isJump: true});
                }
              });
            }
          });
        }

        return breadcrumbData;
      },
      handleChooseTab(item) {
        $TabHelper.open({...item});
      },
      handleDelTab(item) {
        console.log(item)
          this.$store.dispatch('tabs/delTab',{...item}).then(result=>{
            $TabHelper.open({...result}).then((_)=>{
              $TabHelper.delFilter(item.value);
            });
          }) 
      },
      handleLoginOut() {
          $Data.remove([]);
          this.$router.push({path:'/login'});
      }
    }
	}
</script>

<style lang="less">
    .default-container {
        position: relative;
        width: 100%;
        height: 100%;
        background: url('../../assets/bg.png') no-repeat;
        background-size: cover;

        .view-top-container {
            display: flex;
            width: 100%;
            /* height: 80px;  */
            height: 60px;
            background-color: #304156;
            justify-content: space-between;

            .left-top-box {
                width: 240px;
                height: 60px;
                line-height: 60px;
                padding-left: 30px;
                font-size: 24px; 
                color: #bfcbd9; 
            }

            .middle-top-box {
                flex: 0.6;
                height: 80px;
                line-height: 80px; 
            }

            .right-top-box {
                flex: 0.2;
                height: 60px;
                line-height: 60px;
                padding-right: 30px;
                text-align: right;
                font-size: 15px;
                color: #fff;

                i {
                    font-size: 15px;
                }
            }
        }

        .view-main-container { 
            display: flex;
            position: absolute;
            top: 65px;
            bottom: 0;
            left: 0;
            right: 0; 
            margin: 0;
            padding: 0;
            // border: 1px solid red;

            .left-main-box { 
                width: 240px;
                height: 100%;
                // margin-right: 10px;
                overflow-y: auto;
                // border: 1px solid #ccc;
                background-color: #304156;
            }

            .left-max-width {
                -webkit-animation:left-width-min-to-max-keyframes 1s 1 cubic-bezier(.23,1,.32,1);
                animation:left-width-min-to-max-keyframes 1s 1 cubic-bezier(.23,1,.32,1);
                -webkit-animation-fill-mode:both;
                animation-fill-mode:both;
            }

            .left-min-width {
                -webkit-animation:left-width-max-to-min-keyframes 1s 1 cubic-bezier(.23,1,.32,1);
                animation:left-width-max-to-min-keyframes 1s 1 cubic-bezier(.23,1,.32,1);
                -webkit-animation-fill-mode:both;
                animation-fill-mode:both;
            }

            @-webkit-keyframes left-width-min-to-max-keyframes {
                0% {  
                    width:64px;
                }
                
                100% {  
                    width: 240px;
                }
            }

            @-webkit-keyframes left-width-max-to-min-keyframes {
                0% {  
                    width: 240px;
                }
                
                100% {  
                    width:64px;
                }
            }
              
            .right-main-box { 
                position: relative;
                flex: 1;
                height: 100%;
                padding: 0;

                .nav-container {
                    width: 100%;
                    height: 38px;  

                    box-shadow: inset 0 0 7px rgba(0,0,0,0.2);

                    .nav-left {
                        position: absolute;
                        left: 0;
                        width: 30px;
                        height: 28px;
                        line-height: 28px;
                        text-align: center;
                        font-size: 20px;
                        color: #304156;
                    }

                    .nav-middle {
                        display: flex;
                        position: absolute;
                        left: 30px;
                        right: 2px; 
                        padding-bottom: 2px;
                        align-items: flex-start;
                        overflow-x: auto;
                    }
                    // 滚动条
                    .nav-middle::-webkit-scrollbar {height: 5px; cursor: pointer;}
                    .nav-middle::-webkit-scrollbar-thumb {
                      border-radius: 5px;
                      // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                      background: #67C23A;
                    }
                    .nav-middle::-webkit-scrollbar-track {
                      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                      border-radius: 0;
                      background: none;
                    }

                    .nav-middle .nav-item {
                      position: relative;
                      display: flex;
                      margin: auto 5px auto 0;
                      padding: 0 5px;
                      min-width: 80px;
                      height: 28px;
                      line-height: 28px;
                      text-align: center;
                      border: 1px solid #ccc;
                      font-size: 12px;
                      justify-content: space-between;
                      align-items: center;
                      cursor: pointer;

                      .point {
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        background-color: #fff;
                      }

                      i {
                        // position: absolute;
                        font-size: 12px;
                        color: #ccc;
                        z-index: 100;
                      }
                    }
                }

                .right-main-router-view-box {
                    position: absolute;
                    top: 45px;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 10px 20px 10px 10px;
                    overflow-y: auto;
                }
            }
        } 

        .nav-breadcrumb {
          height: 38px;
          line-height: 28px;
          margin-left: 38px;
          font-size: 13px;
        }
    }
</style>

  