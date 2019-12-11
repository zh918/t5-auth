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

  