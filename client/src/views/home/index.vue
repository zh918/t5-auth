<template>
    <div class="home-container">
        <div class="title">欢迎您</div>
        <el-button type="primary">主要按钮</el-button> 
        
    </div>
</template>

<script>
export default {
    data() {
        return {
             
        }
    },
    methods: { 
    }
}
</script>

<style lang="less" scoped>
    .home-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        .title {
            font-size: 30px;
        }
    }
</style>