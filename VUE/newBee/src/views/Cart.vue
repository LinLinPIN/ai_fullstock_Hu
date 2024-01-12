<template>
    <div class="cart-box">
        <SimpleHeader title="购物车" :back="false" />
        <div class="cart-body">
            <van-checkbox-group v-model="result" @change="groupChange">
            <van-swipe-cell v-for="item in list" :key="item.goodsId">
                <van-checkbox :name="item.cartItemId"></van-checkbox>
                <van-card :num="item.goodsCount" :price="item.sellingPrice"  :title="item.goodsName" class="goods-card"
                    :thumb="item.goodsCoverImg" >
                    <template #footer>
                        <van-stepper v-model="item.goodsCount" min="1" max="5" @change="numChange"/>
                    </template>
                </van-card>
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" />
                </template>
            </van-swipe-cell>
        </van-checkbox-group>
        </div>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="checked">全选</van-checkbox>
  <template #tip>
    你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
    </template>
    </van-submit-bar>
    <NavBar />
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import SimpleHeader from '../components/SimpleHeader.vue';
import { ref,onMounted } from 'vue';
import { getCart } from '../api/cart.js';

const result = ref([])
const list = ref([])

const groupChange = () => {
    console.log(result.value);
}
const numChange = () => {
   
}

onMounted(async() => {
 const {data} = await getCart({pageNumber:1})
 list.value = data;
 result.value = data.map(item => item.cartItemId)
})
</script>

<style lang="less" scoped>
.cart-body{
    margin: 16px 0 100px 0;
    padding-left:10px;
}
</style>
<style>
.van-swipe-cell__wrapper{
    display: flex;
}
.van-card.goods-card{
    width: 100%;
    background-color: #fff;
}
.van-checkbox{
    width:23px;
}
.delete-button{
    height: 100%;
    }
.van-card__footer{
    position: absolute;
    right:16px;
    bottom: 8px;
}
.van-card__num{
    position: absolute;
    right: 0px;
    top:0px;

}
.van-submit-bar__bar{
    margin-bottom:44px ;
}
</style>