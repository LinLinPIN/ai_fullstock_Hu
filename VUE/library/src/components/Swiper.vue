<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
        <van-swipe-item v-for="item in 4">
        <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.7WqWB9PSBTYSZU3KbxUErAHaEc?rs=1&pid=ImgDetMain" alt="">
        </van-swipe-item>
    </van-swipe>
</template>

<script setup>

</script>

<style lang="less" scoped>

.my-swipe {
    .van-swipe-item {
    height: 150px;
    img{
        width: 100%;
        border-radius: 10px;
    }}
}

</style>
<style>
:root:root {
    --van-swipe-indicator-size:10px;
}
</style>