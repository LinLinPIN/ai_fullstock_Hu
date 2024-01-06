<template>
    <div class="goods">
        <header class="goods-header">新品上线</header>
    <van-skeleton title avatar :row="3" :loading="loading">
        <div class="goods-box">
            <div class="goods-item" v-for="item in list" :key="item.goodsId">
                <img :src="item.goodsCoverImg" alt="">
                <div class="goods-desc">
                    <div class="title">{{ item.goodsName }}</div>
                    <div class="price">￥{{ item.sellingPrice }}</div>
                </div>
            </div>
        </div>
    </van-skeleton>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    list:Array
})

const loading = ref(false)
</script>

<style lang="less" scoped>
@import '@/common/style/mixin.less';
.goods{
    &-header{
        background: #f9f9f9;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color:@primary;
    }
    &-box{
        display: flex;
        flex-wrap: wrap;
        .goods-item{
            box-sizing: border-box;
            width: 50%;
            border-bottom: 1px solid #e9e9e9;
            img{
                width:3.2rem;
                display: block;
                margin: 0 auto;
            }
            .goods-desc{
                text-align: center;
                font-size: 14px;
                padding: 10px 0;
                .title{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient:vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: #222333;
                    margin-bottom: 6px;
                }
                .price{
                    color: @primary;
                }
            }
            &:nth-child(2n+1){
                border-right: 1px solid #e9e9e9;
            }
        }
    }
}
</style>