<template>
    <div class="search">
        <div class="search-titile">
            <van-icon name="arrow-left" @click="goBack" />
            <van-search v-model="value" shape="round" background="white" placeholder="请输入搜索关键词" left-icon="none" right-icon="search"/>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter();

const goBack = () => {
    router.go(-1)
}
</script>

<style lang="less" scoped>
.search{    padding: 0 20px;
.search-titile{
    height: 100px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .van-badge__wrapper{
        font-size: 20px;
    }
}

}
</style>