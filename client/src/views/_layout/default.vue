<template>
  <div class="default-container">
    <div class="view-container">
      <router-view></router-view>
    </div>
 		 
  </div>
</template>

<script>
	export default {
		data() {
			return { 
			}
		},
        created() { 
            this.initData();  
        },
        methods: {
            initData() { 

            }, 
        },
	}
</script>

<style lang="less" scoped>
    .default-container {
        width: 100%;
        height: 100%;
        background: url('../../assets/bg.png') no-repeat;
        background-size: cover;
    }
</style>

  