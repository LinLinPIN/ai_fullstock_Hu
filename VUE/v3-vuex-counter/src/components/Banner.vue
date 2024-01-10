<template>
    <div>
        <ul>
            <li v-for="(item,index) in banners" :key="index">
                <img :src="item.pic" />
            </li>

        </ul>
    </div>
</template>

<script setup>
import { defineProps, onMounted,toRefs } from 'vue';
import {useBannerStore} from '../store/banner.js';

const props = defineProps({
    'per-page':{
        type:Number,
        default:10
    }
})
const {banners}=toRefs(useBannerStore());
const {getBanners} = useBannerStore();
onMounted(async() => {
    // 要先让组件显示出来，用户的第一眼 要快
    // 等组件显示了再去请求，js是单线程
    await getBanners()
})
</script>

<style lang="less" scoped>

</style>