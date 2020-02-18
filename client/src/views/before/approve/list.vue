<template>
  <h3>test</h3>
</template>

<script>

  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<!-- <template> 
  <el-data-container 
      :searchContainer="searchContainer" 
      @search="handleSearch" 
      :operatorContainer="operatorContainer" 
      :tableContainer="tableContainer" 
      :paginationContainer="paginationContainer">
    
  </el-data-container>
</template>

<script>
  import api from '@/services/beforeLogic'

  export default {
    data() {
      return {
        searchContainer: {
          isResetAutoSearch: false,
          itemSpan: 4,
          list: [
            { key: 'applyNO', type: 'input', class: '', placeholder: '业务申请单号', value: '', fetch: '', cb: ''},
            { key: 'customerName', type: 'date', class: '', placeholder: '申请主体名称', value: '', fetch: '', cb: ''},
            { key: 'idNO', type: 'input', class: '', placeholder: '证件号码', value: '', fetch: '', cb: ''},
            { key: 'applyStartDate', type: 'date', class: '', placeholder: '申请审批时间范围', value: '', fetch: '', cb: ''},
          ]
        },
        tableContainer: {
          selection:true,
          selectionChange: ()=>{},
          operate: [
            {
              type: 'primary',
              label: '删除',
              cb: this.handleDel
            }
          ],
          head: [
            {
              prop: "applyNO",
              label: "业务申请单号"
            },
            {
              prop: "applyDate",
              label: "申请审批日期"
            },
            {
              prop: "customerName",
              label: "签约主体名称"
            },
            {
              prop: "idNO",
              label: "签约主体证件号"
            },
            {
              prop: "subjectTypeName",
              label: "申请主体类型"
            },
            {
              prop: "productType",
              label: "产品类型"
            },
            {
              prop: "productName",
              label: "申请产品名称"
            },
            {
              prop: "applyCreditAmount",
              label: "申请授信额度（元）"
            },
            {
              prop: "startDate",
              label: "预计合作日期"
            },
            {
              prop: "approverName",
              label: "审批人"
            },
            {
              prop: "approveDate",
              label: "审批日期"
            },
            {
              prop: "statusName",
              label: "审批状态"
            }
          ],
          data: []
        },
        paginationContainer: {
          pageNum: 1,
          total: 1
        },
      }
    },
    created() {
      this._data.abc = '业务审批';
    },
    methods: {
      initData(parms) {
        api.factorapplyapprovalPageQuery(parms).then(result=>{
          if (result.errorCode == 0) {
            this.tableContainer.data = result.data.page.list;
            this.paginationContainer.pageNum = result.data.page.pageNum;
            this.paginationContainer.total = result.data.page.total;
          }
          else {

          }
        });
      },
      handleSearch(parms) {
        console.log('---', parms);
        this.initData(parms);
      },
      handleAdd() { 
        //  this.dialogTableVisible = true;
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
      }
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log('业务审批',from,this._data);
        // 检索条件加入到缓存
    }
  }
</script> -->