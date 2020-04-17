<template>
  <div>
    <el-cell-container>
      <el-cell title='系统编号' :margin="false">{{detail.CODE}}</el-cell>
      <el-cell title='系统名称' :margin="false">{{detail.NAME}}</el-cell>
      <el-cell title='有效期开始日期' :margin="false">{{detail.BEGIN_TIME}}</el-cell>
      <el-cell title='有效期结束日期' :margin="false">{{detail.END_TIME}}</el-cell>
      <el-cell title='状态' :margin="false">{{detail.STATUS}}</el-cell>
    </el-cell-container>
  </div>
</template>

<script>
  import api from '@/services/systemLogic'

  export default {
    data() {
      return {
        detail: {
          CODE: null,
          NAME: null,
          BEGIN_TIME: null,
          END_TIME: null,
          CREATED_TIME: null,
          STATUS: null
        }
      }
    },
    created() {
      this.initData();
    },
    methods: {
      initData() {
        api.systemFind({code: this.$route.query.code}).then(result=>{
          if (result.code == 1) {
            this.detail = result.data;
          }
          else {
            this.$message({type: 'error', message: `加载失败!${result.msg}`});
          }
        });
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'initData'
    },
  }
</script>