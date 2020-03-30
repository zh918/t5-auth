<template> 
  <keep-alive>
    <el-data-container 
        :searchContainer="searchContainer" 
        @search="handleSearch" 
        :operatorContainer="operatorContainer" 
        :tableContainer="tableContainer" 
        :paginationContainer="paginationContainer">
      
    </el-data-container>

  </keep-alive>
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
            { key: 'productType', type: 'select', class: '', placeholder: '产品类型', value: '', fetch: '', cb: '', options: [
              { value: '选项1', label: '黄金糕1' },
              { value: '选项21', label: '黄金糕2' }
            ]},
            { key: 'statusCode', type: 'select', class: '', placeholder: '申请及授信状态', value: '', fetch: '', cb: '', options: [
              { value: '选项1', label: '黄金糕1' },
              { value: '选项21', label: '黄金糕2' }
            ]},
            { key: 'applyStartDate', type: 'date', class: '', placeholder: '申请日期', value: '', fetch: '', cb: ''},
            { key: 'customerName', type: 'input', class: '', placeholder: '签约主体名称', value: '', fetch: '', cb: ''},
            { key: 'idNO', type: 'input', class: '', placeholder: '证件号码', value: '', fetch: '', cb: ''},
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
              prop: "applyNO",
              label: "业务申请单号"
            },
            {
              prop: "customerName",
              label: "签约主体名称"
            },
            {
              prop: "idNO",
              label: "证件号码"
            },
            {
              prop: "applyDate",
              label: "申请日期"
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
              prop: "statusName",
              label: "申请及授信状态"
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
      console.log('create1');
      
      $TabHelper.initFilter(this.$route.meta.uid, (obj)=>{
        console.log('create2')
        this._data.searchContainer = obj.searchContainer;
        this._data.paginationContainer = obj.paginationContainer;
      }); 
    },
    methods: {
      initData(parms) {
        console.log('create3')
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        }); 

        api.factorapplyPageQuery(parms).then(result=>{
          loading.close();
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
        // $Data.setObj(from.meta.uid, this._data);
        console.log('--->beforeRouteLeave')
        $TabHelper.setFilter(from.meta.uid, this._data);  
        next();
    }
    
  }
</script>