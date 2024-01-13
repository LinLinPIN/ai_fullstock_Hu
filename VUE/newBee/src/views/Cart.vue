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
                        <van-stepper v-model="item.goodsCount" min="1" max="5" @change="numChange" :name="item.cartItemId" />
                    </template>
                </van-card>
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" @click="deleteGoods(item.cartItemId)"/>
                </template>
            </van-swipe-cell>
        </van-checkbox-group>
        </div>
    </div>
    <van-submit-bar :price="totalPrice *100" button-text="提交订单" @submit="onSubmit" class="submit-bar">
  <van-checkbox v-model="checkAll" class="checkAll" @click="allCheck">全选</van-checkbox>
    </van-submit-bar>
    <NavBar />
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import SimpleHeader from '../components/SimpleHeader.vue';
import { ref,onMounted,computed } from 'vue';
import { useStore } from 'vuex';
import { getCart,modifyCart,deleteCart } from '../api/cart.js';
import { showFailToast } from 'vant';
import { useRouter } from 'vue-router';

const result = ref([])
const list = ref([])
const checkAll = ref(true)
const store = useStore()
const router = useRouter();

const groupChange = () => {// 选中商品
    checkAll.value = result.value.length>0&&result.value.length === list.value.length ? true : false;
}
const numChange = async(num,detail) => {// 修改数量
   const params = {
    cartItemId:detail.name,
    goodsCount:num
   }
   await modifyCart(params)
}

onMounted(async() => {
    init();
})

const init = async() => {
    const {data} = await getCart({pageNumber:1})
    list.value = data;
    result.value = data.map(item => item.cartItemId)
}
const onSubmit = () => {// 提交订单
   if(result.value.length===0){
    showFailToast('请选择至少一件商品进行结算');
    return }

    router.push({path:'/create-order',query:{cartItemIds:JSON.stringify(result.value)}});

}

const totalPrice = computed(() => {// 计算属性中的依赖变量有变动时修改
    let _list = list.value.filter((item) => result.value.includes(item.cartItemId))
    const allPrice = _list.reduce((pre,item,index,arr)=>{
        return pre += item.sellingPrice * item.goodsCount;
    },0)
    return allPrice;
})

const allCheck = () => {
    if(!checkAll.value){// 大家都不选中
        result.value = []
    }else{
        result.value = list.value.map(item => item.cartItemId)
    }
}
const deleteGoods = async(id) => {
    await deleteCart(id);
    init()
    store.dispatch('setCartCountAction')
}
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
.submit-bar{
    bottom: 60px;
}
.checkAll{
    width: 60px;
}
</style>