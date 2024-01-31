<template>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    title: String
})
const router = useRouter()

const onClickLeft = () => {
    router.go(-1)
}
</script>

<style lang="less" scoped></style>