<template>
    <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" />
    <van-action-bar-icon icon="cart-o" text="购物车" :badge="badgeNum"/>
    <van-action-bar-button  type="warning" text="加入购物车" @click="handleAddCart" />
    <van-action-bar-button  type="danger" text="立即购买" />
</van-action-bar>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed,onMounted,defineProps } from 'vue';
import {addCart} from '@/api/cart.js';
import { showSuccessToast } from 'vant';

const store = useStore()
const badgeNum = computed(()=>{
    const num = store.state.cartCount
    if(num>0){
        return num
    }
})

onMounted(()=>{
    store.dispatch('setCartCountAction');// store 中 actions 里面的函数都要通过dispat触发
})

const handleAddCart = async()=>{
    const res = await addCart({goodsCount:1,goodsId:props.goodsId})
    if(res.resultCode === 200){
        showSuccessToast('添加成功');
        store.dispatch('setCartCountAction');
    }
}

const props = defineProps({
    goodsId: String
})
</script>

<style lang="less" scoped>

</style>

<style>
.van-button--warning{
    background: linear-gradient(to right,#6bd8d8,#1baeae);
}
.van-button--danger{
    background: linear-gradient(to right,#0dc3c3,#098888);
}
</style>