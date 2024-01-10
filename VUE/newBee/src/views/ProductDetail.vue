<template>
    <div>
        <SimpleHeader title="商品详情" />
        <div class="detail-content">
        <div class="detail-swipe-wrap">
            <van-swipe class="my-swipe"  indicator-color="#1baeae">
                <van-swipe-item>
                    <img src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate-50-pro-black.png" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="product-info">
            <div class="product-title">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</div>
            <div class="product-desc">免邮费 顺丰快递</div> 
            <div class="product-price">￥6999</div>
        </div>
        <div class="product-intro">
            <ul>
                <li>概述</li>
                <li>参数</li>
                <li>安装服务</li>
                <li>常见问题</li>
            </ul>
        </div>
        <div class="product-content"></div>
    </div>
    </div>
</template>

<script setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import { onMounted } from 'vue';
import {useRoute} from 'vue-router'
import {getDetail} from '@/api/goods.js'

const route = useRoute()
onMounted(async()=>{// 从url上取到id并将id传给后端，获取该商品的详细信息
const {id} = route.query
const res = await getDetail(id)
console.log(res);
})

</script>

<style lang="less" scoped>
.detail-content{
    height: calc(100vh - 44px);
    overflow: scroll;
    .detail-swipe-wrap{
        .my-swipe{
            img{
                width:100%;
            }
        }
    }
    .product-info{
        padding: 0 10px;
        .product-title{
            font-size: 18px;
            color: #333;
        }
        .product-desc{
            font-size: 14px;
            color: #999;
            padding: 10px 0;
        }
        .product-price{
            font-size: 20px;
            color: #f63515;
    }
}
    .product-intro{
        width: 100%;
        padding-bottom: 50px;
        overflow: auto;
        ul{
            display: flex;
            margin:10px 0;
            li{
                flex: 1;
                font-size: 5px 0;
                text-align: center;
                border-right: 1px solid #999;
                &:last-child{
                    border: none;
                }
            }
        }
    }
    .product-content{
        padding: 0 20px;
        img{
            width: 100%;
        }
    }
}
</style>