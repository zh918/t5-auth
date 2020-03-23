<template>
  <div class="login-container">
    <el-container>
      <el-header><div class="title">保理系统</div></el-header>
      <el-main>
        <div class="login-box">
          <div class="left-box">
            <div class="img-box">
              <img :src="require('../../assets/login-icon.png')" alt="" />
            </div>
            <div class="title">欢迎访问保理系统</div>
          </div>
          <div class="right-box">
            <div class="title">登录</div>
            <div class="frm-box">
              <div class="login-input">
                <el-input
                  type="age"
                  v-model.number="frm.loginName"
                  autocomplete="off"
                  @focus="flag.focus1 = true"
                  @blur="flag.focus1 = false"
                ></el-input>
                <div class="line">
                  <div
                    class="line-focus "
                    :class="
                      flag.focus1 || frm.loginName ? 'line-focus-animate' : ''
                    "
                  ></div>
                </div>
                <div
                  class="aria-placeholder"
                  :class="
                    flag.focus1 || frm.loginName
                      ? 'aria-placeholder-animate'
                      : ''
                  "
                >
                  用户名
                </div>
                <div
                  class="error-msg"
                  v-if="!flag.focus1 && !frm.loginName && flag.isValid"
                >
                  输入不能为空哦
                </div>
              </div>

              <div class="login-input">
                <el-input
                  type="age"
                  v-model.number="frm.loginPwd"
                  autocomplete="off"
                  @focus="flag.focus2 = true"
                  @blur="flag.focus2 = false"
                ></el-input>
                <div class="line">
                  <div
                    class="line-focus"
                    :class="
                      flag.focus2 || frm.loginPwd ? 'line-focus-animate' : ''
                    "
                  ></div>
                </div>
                <div
                  class="aria-placeholder"
                  :class="
                    flag.focus2 || frm.loginPwd
                      ? 'aria-placeholder-animate'
                      : ''
                  "
                >
                  密码
                </div>
                <div
                  class="error-msg"
                  v-if="!flag.focus2 && !frm.loginPwd && flag.isValid"
                >
                  输入不能为空哦
                </div>
              </div>

              <el-button class="btn-login" type="primary" @click="handleLogin"
                >登录</el-button
              >
            </div>
          </div>
        </div>
      </el-main>
      <el-footer>版权所有</el-footer>
    </el-container>
  </div>
</template>

<script>
import api from "@/services/commonLogic";

export default {
  data() {
    return {
      frm: {
        loginName: "bgyms",
        loginPwd: "bgyms"
      },
      flag: {
        isValid: false,
        focus1: false,
        focus2: false
      }
    };
  },
  created() {},
  methods: {
    handleLogin() {
      let _this = this;
      if (this.frm.loginName && this.frm.loginPwd) {
        this.flag.isValid = true;
      } else {
        this.flag.isValid = false;
        return;
      }

      let parms = {
        userCode: this.frm.loginName,
        password: this.frm.loginPwd,
        clientId: "bgyfactorOmp"
      };
      api.login(parms).then(result => {
        if (result.errorCode == 0) {
          // _this.$router.push({ path: "/home" });
          $TabHelper.open({ path: "/home" });
        } else {
          _this.$message.error(result.errorMsg);
        }
      });
    }
  }
};
</script>

<style lang="less">
.login-container {
  width: 100%;
  height: 100%;
  background: url("../../assets/bg.png") no-repeat;
  background-size: cover;

  .title {
    height: 60px;
    line-height: 60px;
    font-size: 30px;
  }

  .login-box {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 1000px;
    height: 560px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 22px 7px rgba(102, 177, 255, 0.16);
    border-radius: 20px;

    .left-box {
      width: 440px;
      height: 100%;
      background: #409eff;
      border-radius: 20px 0px 0px 20px;

      .img-box {
        margin: 150px auto 50px auto;
        width: 168px;
        height: 168px;
        border: 1px solid #fff;
      }

      .title {
        width: 100%;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        color: #fff;
      }
    }

    .right-box {
      width: 560px;
      height: 100%;

      .title {
        margin: 62px auto 100px auto;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 30px;
        color: #409eff;
        text-align: center;
      }

      .frm-box {
        width: 440px;
        margin: 0 auto;
        // border: 1px solid red;

        .login-input {
          position: relative;
          height: 45px;
          line-height: 45px;
          width: 100%;
          margin-bottom: 50px;

          input {
            border: none;
            padding: 0;
            font-size: 18px;
          }

          .aria-placeholder {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 20px;
            color: rgba(0, 0, 0, 0.38);
          }

          .aria-placeholder-animate {
            -webkit-animation: aria-placeholder-animate-keyframes 0.4s 1
              cubic-bezier(0.23, 1, 0.32, 1);
            animation: aria-placeholder-animate-keyframes 0.4s 1
              cubic-bezier(0.23, 1, 0.32, 1);
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
          }

          @-webkit-keyframes aria-placeholder-animate-keyframes {
            0% {
              bottom: 0;
              transform: translate3d(0, 0, 0) scale(1);
            }

            100% {
              bottom: 25px;
              transform: translate3d(-8px, 0, 0) scale(0.75);
            }
          }

          .line {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 1px;
            border-bottom: 1px solid #e0e0e0;

            .line-focus {
              width: 0;
              height: 1px;
              margin: 0 auto;
              border-bottom: 1px solid #409eff;
            }

            .line-focus-animate {
              // transition: transform .45s cubic-bezier(.23,1,.32,1),-webkit-transform .45s cubic-bezier(.23,1,.32,1);
              -webkit-animation: line-focus-animate-keyframes 0.4s 1
                cubic-bezier(0.23, 1, 0.32, 1);
              animation: line-focus-animate-keyframes 0.4s 1
                cubic-bezier(0.23, 1, 0.32, 1);
              -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
            }

            @-webkit-keyframes line-focus-animate-keyframes {
              0% {
                width: 0;
              }

              100% {
                width: 100%;
              }
            }
          }

          .error-msg {
            position: absolute;
            bottom: -30px;
            right: 0;
            color: red;
          }
        }

        .btn-login {
          margin-top: 60px;
          width: 100%;
          font-size: 20px;
        }
      }
    }
  }

  .el-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: #409eff;
  }
}
</style>
