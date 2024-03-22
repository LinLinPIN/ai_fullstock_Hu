<template>
    <div>
        <van-icon name="arrow-left" @click="goBack" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
    router.go(-1)
}

</script>

<style lang="less" scoped>
:deep(.van-icon) {
    font-size: 20px;
    position: fixed;
    left: 20px;
    top: 20px;
    z-index: 100;
}
</style>