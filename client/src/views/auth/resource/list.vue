<template> 
  <div>
    <el-data-container 
      :searchContainer="searchContainer" 
      @search="handleSearch" 
      :operatorContainer="operatorContainer" 
      :tableContainer="tableContainer" 
      :paginationContainer="paginationContainer">
      <template slot="operate" slot-scope="row">
        <div>
          <el-button type="text" @click="handleDetails(row.CODE)">编辑</el-button>
          <el-button type="text">删除</el-button>
        </div>
      </template>
    </el-data-container>

    <!-- 弹出层 -->
    <el-dialog title="添加资源" 
      :visible.sync="dialogVisibleSystem" 
      :modal-append-to-body="false" 
      :close-on-click-modal="false">
      <el-cell-container cols='2'>
        <el-cell label='系统名称' cols="full"  label-width='3'>
          <template>
            <el-input v-model="dialogFrm.NAME" placeholder="请输入内容"></el-input>
          </template>
        </el-cell>
        <el-cell label='上级资源' label-width='3'>
          <template>
            <el-date-picker v-model="dialogFrm.BEGIN_TIME" type="date" placeholder="选择日期"></el-date-picker>
          </template>
        </el-cell>
        <el-cell label='资源类型' label-width='3'>
          <template>
            <el-date-picker v-model="dialogFrm.END_TIME" type="date" placeholder="选择日期"></el-date-picker>
          </template>
        </el-cell>
        <el-cell label='资源名称' label-width='3'>
          <template>
            <el-date-picker v-model="dialogFrm.END_TIME" type="date" placeholder="选择日期"></el-date-picker>
          </template>
        </el-cell>
        <el-cell label='资源地址' label-width='3'>
          <template>
            <el-date-picker v-model="dialogFrm.END_TIME" type="date" placeholder="选择日期"></el-date-picker>
          </template>
        </el-cell>
        <el-cell label='资源样式' label-width='3'>
          <template>
            <el-date-picker v-model="dialogFrm.END_TIME" type="date" placeholder="选择日期"></el-date-picker>
          </template>
        </el-cell>
      </el-cell-container>
      <el-alert
        v-if="dialogVisibleSystem"
        title="带辅助性文字介绍"
        type="error"
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
      </el-alert>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleSystem = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="handleAddSystemSubmit" size="mini" :loading="!flag.isAddSystemSubmit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import api from '@/services/systemLogic'

  export default {
    data() {
      return {
        // -----------------------标准1 开始-----------------------
        searchContainer: {
          isResetAutoSearch: false,
          itemSpan: 4,
          list: [
            { key: 'NAME', type: 'input', class: '', placeholder: '资源名称', value: '', fetch: '', cb: ''},
            { key: 'STATUS', type: 'select', class: '', placeholder: '系统名称', value: '', fetch: '', cb: '', options: [
              { value: '1', label: '启用' },
              { value: '0', label: '禁用' }
            ]},
          ]
        },
        operatorContainer: [
          { type: 'primary', text: '添加资源', cb: this.handleAddSystem}
        ],
        tableContainer: {
          selection:true,
          selectionChange: ()=>{},
          operate: [
            // {
            //   type: 'primary',
            //   label: '删除',
            //   cb: this.handleDel
            // }
          ],
          head: [
            {
              prop: "CODE",
              label: "系统名称"
            },
            {
              prop: "NAME",
              label: "资源类型"
            },
            {
              prop: "CREATED_TIME",
              label: "资源名称"
            },
            {
              prop: "CREATED_TIME",
              label: "资源编码"
            },
            {
              prop: "CREATED_TIME",
              label: "资源地址"
            }
          ],
          data: []
        },
        paginationContainer: {
          pageNum: 1,
          total: 1
        },
        tempParms:null,
        // -----------------------标准1 结束-----------------------

        dialogVisibleSystem: false,
        dialogFrm: {
          NAME:'',
          BEGIN_TIME:'',
          END_TIME:'',
          STATUS:''
        },

        flag: {
          isAddSystemSubmit: true
        }


      }
    },
    created() {
      $TabHelper.initFilter(this.$route.meta.uid, (obj)=>{
        this._data.searchContainer = obj.searchContainer;
        this._data.paginationContainer = obj.paginationContainer;
      });
    },
    methods: {
      initData(parms) {
        api.systemQuery(parms).then(result=>{
          if (result.code == 1) {
            this.tableContainer.data = result.data.list;
            this.paginationContainer.pageNum = result.data.page.pageNum;
            this.paginationContainer.total = result.data.page.total;
          }
          else {
            this.$message.error(result.msg);
          }
        });
      },
      handleSearch(parms) {
        this.tempParms = parms;
        this.initData(parms);
      },
      handleAddSystem() { 
        this._clearDialogData();
        this.dialogVisibleSystem = true;
      },
      handleDel(row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      handleAddSystemSubmit() {
        if (!this.flag.isAddSystemSubmit) return;
        this.flag.isAddSystemSubmit = false;
        api.systemCreate(this.dialogFrm).then(result=>{
          this.flag.isAddSystemSubmit = true;
          if (result.code == 1) {
            this.handleSearch(this.tempParms);
            this.dialogVisibleSystem = false;
            this.$message({type: 'success', message: '操作成功!'});
          }
          else {
            this.$message({type: 'error', message: `操作失败!${result.msg}`});
          }
        });
      },
      _clearDialogData() {
        this.dialogFrm = {
          NAME:'',
          BEGIN_TIME:'',
          END_TIME:'',
          STATUS:''
        };
      },
      handleDetails(code) {
        $TabHelper.open({ path: '/system/detail', query:{code}});
      }
    },
    beforeRouteLeave (to, from, next) {
        $TabHelper.setFilter(from.meta.uid, this._data);  
        next();
    }
    
  }
</script>