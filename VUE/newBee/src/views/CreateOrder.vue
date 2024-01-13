<template>
    <div class="create-order">
        <SimpleHeader title="生成订单" />
        <div class="address-wrap">
            <div class="name">
                <span>张三</span>
                <span>13888888888</span>
            </div>
            <div class="address">
                江西省抚州市临川区东华理工大学
            </div>
            <van-icon name="arrow" class="arrow" />
        </div>
        <div class="goods-list">

            <van-card :num="item.goodsCount" :price="item.sellingPrice"  :title="item.goodsName" class="van-card" v-for="item in list" :key="item.cartItemId"
                :thumb="item.goodsCoverImg" />

        </div>
        <div class="pay-wrap">
            <div class="price">
                <span>商品金额</span>
                <span>￥31212</span>
            </div>
            <van-button type="primary" block>主要按钮</van-button>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import SimpleHeader from '../components/SimpleHeader.vue';
import { getCartItemIds } from '../api/cart';
import { onMounted,ref } from 'vue';

const route = useRoute();
const list = ref([])
onMounted(async()=>{
    const _cartItemIds = JSON.parse(route.query.cartItemIds)
    const {data} =await getCartItemIds({cartItemIds:_cartItemIds.join(',')})
    console.log(data);
    list.value = data
})

</script>

<style lang="less" scoped>
.create-order {
    background-color: #f9f9f9;

    .address-wrap {
        background-color: #fff;
        margin-bottom: 20px;
        font-size: 14px;
        padding: 15px;
        position: relative;

        // border-bottom: 2px dotted black;
        .name {
            margin: 10px 0px;
        }

        .arrow {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 20px;
        }

        .address {
            margin: 10px 0px;
        }

        &::after {
            content: '';
            width: 100%;
            height: 2px;
            background: repeating-linear-gradient(-45deg, #ff6c6c 0%, #ff6c6c 20%, transparent 0%, transparent 25%, #1989fa 0%, #1989fa 45%, transparent 0%, transparent 50%);
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            background-size: 80px;
        }
    }
    .goods-list .van-card{
        background: #fff;
    }
    .goods-list{
        margin-bottom: 120px;
    }
    .pay-wrap{
        border-top: 1px solid #e9e9e9;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 10px 20px;
        box-sizing: border-box;
        .price{
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            margin: 10px 0px;
            span:nth-child(2){
                color: red;
                font-size: 18px;
            }
        }
    }
}
</style>