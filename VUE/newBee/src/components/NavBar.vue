<template>
    <div>
        <van-tabbar v-model="active" active-color="#1baeae" route>
            <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/category" icon="bar-chart-o">分类</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="cart-o" :badge="badgeNum">购物车</van-tabbar-item>
            <van-tabbar-item to="/user" icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue';
import {useStore} from 'vuex';
const store = useStore();

const badgeNum = computed(()=>{
    const num = store.state.cartCount
    if(num>0){
        return num
    }
})

onMounted(()=>{
    store.dispatch('setCartCountAction');// store 中 actions 里面的函数都要通过dispat触发
})

const active = ref(0)
</script>

<style lang="less" scoped>

</style>
