<template>
    <div>
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/choose">选书</van-tabbar-item>
            <van-tabbar-item icon="bar-chart-o" to="/bookshef">书架</van-tabbar-item>
            <van-tabbar-item icon="contact-o" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const active = ref(0);
</script>

<style lang="less" scoped></style>