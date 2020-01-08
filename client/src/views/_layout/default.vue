<template>
  <div class="default-container">
    <div class="http-line"></div>
    <div class="view-top-container">
      <div class="left-top-box">保理系统{{tabs.list.find(t=>t.path == this.$route.path).meta.keepAlive}}</div>
      <div class="middle-top-box"></div>
      <div class="right-top-box"><i class="el-icon-user-solid"></i> stephen&nbsp;<el-button type="info" size="mini" icon="el-icon-switch-button" circle @click="handleLoginOut"></el-button></div>
    </div>
    <div class="view-main-container">
        <div class="left-main-box" :class="isCollapse?'left-min-width':'left-max-width'">
            <left-menu :isCollapse="isCollapse"></left-menu>
        </div>
        <div class="right-main-box">
            <!-- {{tabs.list}} -->
            <div class="nav-collects-box"> 
                <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="()=>{this.isCollapse = !this.isCollapse;}"></i>
                <div class="nav-item" :class="item.actived?'bg-color-success':''" :key="index" v-for="(item,index) in tabs.list" @click="handleChooseTab(item)">
                    <div class="point"></div>{{item.label}}<i class="el-icon-circle-close" @click.stop="handleDelTab(item)" v-if="index != 0"></i><span v-if="index == 0">&nbsp;</span>
                </div>
                <!-- <div class="nav-item"><div class="point"></div>客户管理<i class="el-icon-circle-close"></i></div>
                <div class="nav-item bg-color-success"><div class="point"></div>详情<i class="el-icon-circle-close"></i></div> -->
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
                // keepAlive:this.$store.state.tabs.list.find(t=>t.path == this.$route.path).meta.keepAlive || false
			}
        },
        computed:{
            ...mapState(["tabs"]),
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
            handleChooseTab(item) {
                // 选择tab
                // console.log(item);
                $TabHelper.open({...item});
            },
            handleDelTab(item) {
                this.$store.dispatch('tabs/delTab',{...item}).then(result=>{
                    $TabHelper.open({...result});
                }) 
            },
            handleLoginOut() {
                $Data.remove();
                this.$router.push({path:'/login'});
            }
        }
	}
</script>

<style lang="less" scoped>
    .default-container {
        position: relative;
        width: 100%;
        height: 100%;
        background: url('../../assets/bg.png') no-repeat;
        background-size: cover;

        .view-top-container {
            display: flex;
            width: 100%;
            height: 80px; 
            background-color: #304156;
            justify-content: space-between;

            .left-top-box {
                width: 240px;
                height: 80px;
                line-height: 80px;
                padding-left: 30px;
                font-size: 28px;
                // font-weight: bold;
                color: #bfcbd9; 
            }

            .middle-top-box {
                flex: 0.6;
                height: 80px;
                line-height: 80px; 
            }

            .right-top-box {
                flex: 0.2;
                height: 80px;
                line-height: 80px;
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
            top: 85px;
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
                // border: 1px solid blue; 

                .nav-collects-box {
                    display: flex;
                    width: 100%;
                    height: 35px;
                    line-height: 35px;
                    flex-direction: row;
                    border: 1px solid #e0e0e0;
                    box-shadow:0px 0px 10px 0px #e0e0e0;

                    i {
                        font-size: 35px;
                        color: #bfcbd9;
                    }

                    .nav-item {
                        // position: relative;
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
                            width: 8px;
                            height: 8px;
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
                    top: 35px;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 10px;
                    overflow-y: auto;
                }
            }
        }
    }
</style>

  