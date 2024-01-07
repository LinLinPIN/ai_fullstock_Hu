<template>
    <div class="home">
        <header class="home-header" :class="{'active': state.headerActive}">
            <router-link to="#">
                <i class="iconfont icon-menu"></i>
            </router-link>

            <div class="header-serach">
                <span class="app-name">喜仔超市</span>
                <i>|</i>
                <router-link to="#" class="search-title"> 欢迎进店</router-link>
            </div>

            <router-link to="/login" class="login">登录</router-link>
        </header>
        <Swiper id="test" :list="state.swiperList"/> 
        <div class="category-list">
            <div v-for="item in state.categoryList" :key="item.categoryId" @click="goDetail(item.name)">
                <img :src="item.imgUrl" alt="">
                <span>{{ item.name }}</span>
            </div>
        </div>
        <GoodsList :list="state.newGoodsList" name="新品上线"/>
        <GoodsList :list="state.hotGoodsList" name="热门商品"/>
        <GoodsList :list="state.recommendGoodsList" name="最新推荐"/>

        <!-- footBar -->
        <NavBar />
    </div>
</template>

<script setup>
import Swiper from '@/components/Swiper.vue';
import { onMounted,reactive,nextTick } from 'vue';
import { getHome } from '@/api/home.js'
import { showToast } from 'vant';
import GoodsList from '../components/GoodsList.vue';
import NavBar from '../components/NavBar.vue';

const state = reactive({
    swiperList:[],
    categoryList: [
        {
          name: '新蜂超市',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
          categoryId: 100001
        }, {
          name: '新蜂服饰',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
          categoryId: 100003
        }, {
          name: '全球购',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
          categoryId: 100002
        }, {
          name: '新蜂生鲜',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
          categoryId: 100004
        }, {
          name: '新蜂到家',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
          categoryId: 100005
        }, {
          name: '充值缴费',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
          categoryId: 100006
        }, {
          name: '9.9元拼',
          imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
          categoryId: 100007
        }, {
          name: '领劵',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
          categoryId: 100008
        }, {
          name: '省钱',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
          categoryId: 100009
        }, {
          name: '全部',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
          categoryId: 100010
        }
      ],
    newGoodsList:[],
    hotGoodsList:[],
    recommendGoodsList:[],
    headerActive: false
})

// 请求banner数据
onMounted(async()=>{
    const { data } = await getHome()
    console.log(data);
    state.swiperList = data.data.carousels
    state.newGoodsList = data.data.newGoodses
    state.hotGoodsList = data.data.hotGoodses
    state.recommendGoodsList = data.data.recommendGoodses
})

const goDetail = (name) =>{
    showToast(name);
}

nextTick(()=>{// 写在nextTick中的逻辑一定会在页面加载完毕后执行
    document.body.addEventListener('scroll',function(){
        if(this.scrollTop > 100){
        state.headerActive = true
    }
    else {state.headerActive = false}
    })
})  
</script>

<style lang="less" scoped>
@import '@/common/style/mixin.less';

.home{
    padding-bottom: 100px;
    .home-header{
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center; 
        padding: 0 15px;
        box-sizing: border-box;
        font-size: 15px;
        &.active{
            background-color: @primary;
            .icon-menu{
                color: white;
            }
            .login{color: white;}
        }
        .icon-menu{
            color:@primary;
        }
        .header-serach{
            .wh(74%,20px);
            padding: 5px 0;
            line-height: 20px;
            color: #232326;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 20px;
            display: flex;
            align-items: center;
            .app-name{
                color: @primary;
                padding: 0 10px;
                font-size: 20px;
                font-weight: bold;
            }
            .search-title{
                font-size: 14px;
                padding: 0 10px;
            }
        }
        .login{
            color: @primary;
            font-size: 16px;

        }
    }
    .category-list{
        display: grid;
        flex-wrap: wrap;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-row-gap: 10px;// 行间距
        div{
            // display: flex;
            text-align: center;
            // flex-direction: column;
            // align-items: center;
            img{
                .wh(36px,36px);
                display:block;
                // margin: 0 auto;
                margin: 13px auto 8px auto;
            }
        }
    }
}
</style>