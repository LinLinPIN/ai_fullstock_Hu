<template>
    <div class="home">
        <div class="home-header">
            <div class="header-title">赣州市图书馆</div>
            <div class="header-search">
                <van-icon name="search" class="search-icon"/>
                <input type="text" placeholder="搜索你感兴趣的内容">
            </div>
            <div class="header-category">
                <van-tabs v-model:active="active" animated swipeable background="none" color="white" title-inactive-color="white" title-active-color="white" >
                    <van-tab title="推荐"><Recommand /> </van-tab>
                    <van-tab title="看书"><Reading /></van-tab>
                    <van-tab title="听书"><Listening /></van-tab>
                    <van-tab title="视频"><Video /></van-tab>
                </van-tabs>
            </div>
        </div>
        <FootBar />
    </div>
</template>

<script setup>
import FootBar from '../components/FootBar.vue'
import Reading from '../components/Reading.vue'
import Recommand from '../components/Recommand.vue'
import Video from '../components/Video.vue'
import Listening from '../components/Listening.vue'


</script>

<style lang="less" scoped>

.home-header {
    background: url('../assets/img/Header.jpg');
    height: 200px;
    .header-title{
        font-size: 30px;
        color: white;
        font-weight: 800;
        text-align: center;
        height: 60px;
        line-height: 60px;
    }
    .header-search{
        height: 50px;
        text-align: center;
        position: relative;
        input{
            height: 40px;
            border-radius: 30px;
            width: 9rem;
            padding-left: 0.7rem;
            box-sizing: border-box;
        }
    }
    .header-category{
        
    }
}
</style>
<style>
.search-icon{
           position: absolute;
           left: 0.6rem;
        }
:root:root {
    --van-tab-font-size:17px;
}

.header-category .van-tabs__content{
            margin-top: 20px;
        }
</style>