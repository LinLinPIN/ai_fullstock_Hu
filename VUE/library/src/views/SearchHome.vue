<template>
        <div class="search-content">
            <div class="search-title">
                热门搜索
            </div>
            <div class="search-list" >
                <van-button round>家庭</van-button>
            </div>
        </div>
        <div class="search-content">
            <div class="search-title">
                最近搜索
            </div>
            <div class="search-list" >
                <van-button round v-for="item in 4">家庭</van-button>
            </div>
        </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
    .search-content{
        margin-bottom:45px;
    .search-title{
        font-size: 15px;
        color: gray;
        margin-bottom: 10px;
    }
    .search-list{
        button{
            height: 35px;
            margin-right: 20px;
        }
    }
}

</style>