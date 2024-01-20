<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in list" :key="item.id">
            <img :src="item.img" alt="">
        </van-swipe-item>
    </van-swipe>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    list: Array
})


</script>

<style lang="less" scoped>
.my-swipe {
    .van-swipe-item {
        height: 150px;
        img {
            width: 100%;
            border-radius: 15px;
        }
    }
}
</style>
<style>
:root:root {
    --van-swipe-indicator-size: 10px;
}
</style>