<template> 
  <keep-alive>
    <el-data-container :searchContainer="searchContainer" @search="handleSearch" :operatorContainer="operatorContainer" :tableContainer="tableContainer" :paginationContainer="paginationContainer">
      
    </el-data-container> 
    
    <el-dialog title="弹出层demo" :visible.sync="dialogTableVisible" :modal="false" :close-on-click-modal="false">
      <el-data-container  @search="handleSearch1" :tableContainer="tableContainer1" :paginationContainer="paginationContainer1">
        <template #moduleName="row">{{row.moduleName}}中国</template>
      </el-data-container> 
    </el-dialog>
  </keep-alive>
</template>

<script>
  import api from '@/services/demoLogic'

  export default {
    data() {
      return {
        searchContainer: {
          isResetAutoSearch: false,
          itemSpan: 4,
          list: [
            { key: 'name', type: 'input', class: '', placeholder: '姓名', value: '1', fetch: '', cb: ''},
            { key: 'sex', type: 'select', class: '', placeholder: '请选择', value: '', fetch: '', cb: '', options: [
              { value: '选项1', label: '黄金糕1' },
              { value: '选项21', label: '黄金糕2' }
            ]},
            { key: 'name', type: 'input', class: '', placeholder: '姓名', value: '1', fetch: '', cb: ''},
            { key: 'sex', type: 'select', class: '', placeholder: '请选择', value: '', fetch: '', cb: '', options: [
              { value: '选项1', label: '黄金糕1' },
              { value: '选项21', label: '黄金糕2' }
            ]},
            { key: 'date', type: 'date', class: '', placeholder: '开始日期', value: '', fetch: '', cb: ''}
          ]
        },
        operatorContainer: [
          { type: 'primary', text: '新增', cb: this.handleAdd},
          { type: 'primary', text: '删除', cb: this.handleDel}
        ],
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
              prop: "loanNO",
              label: "支取编号"
            },
            {
              prop: "customerName",
              label: "供应商名称"
            },
            {
              prop: "loanAmount",
              label: "申请金额"
            },
            {
              prop: "loanStatusName",
              label: "状态"
            },
            {
              prop: "confirmLoanOperationTime",
              label: "放款时间"
            },
            {
              prop: "applyDate",
              label: "申请时间"
            }
          ],
          data: []
        },
        paginationContainer: {
          pageNum: 1,
          total: 1
        },

        // ----------------------
        tableContainer1: {
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
              prop: "loanNO",
              label: "支取编号"
            },
            {
              prop: "customerName",
              label: "供应商名称"
            },
            {
              prop: "loanAmount",
              label: "申请金额"
            },
            {
              prop: "loanStatusName",
              label: "状态"
            },
            {
              prop: "confirmLoanOperationTime",
              label: "放款时间"
            },
            {
              prop: "applyDate",
              label: "申请时间"
            }
          ],
          data: []
        },
        paginationContainer1: {
          pageNum: 1,
          total: 1
        },
        dialogTableVisible: false,
        // ----------------------

      }
    },
    created() {
      console.log('初始化demo')
    },
    methods: {
      initData(parms) {
        api.loanPageQueryLoan(parms).then(result=>{
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
      handleSearch1(parms) {
        console.log('---1', parms);
        api.loanPageQueryLoan(parms).then(result=>{
          if (result.errorCode == 0) {
            this.tableContainer1.data = result.data.page.list;
            this.paginationContainer1.pageNum = result.data.page.pageNum;
            this.paginationContainer1.total = result.data.page.total;
          }
          else {

          }
        });
      },
      handleAdd() { 
         this.dialogTableVisible = true;
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
    }
  }
</script>