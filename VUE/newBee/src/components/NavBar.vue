<template>
    <div>
        <van-tabbar v-model="active" active-color="#1baeae" route>
            <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/category" icon="bar-chart-o">分类</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/user" icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const active = ref(0)
</script>

<style lang="less" scoped>

</style>