<template>
    <div class="recommand">
        <Swiper />
        <div class="show-list">
            <div class="list-item" v-for="item in 5">
                <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.3GulqScKeGtfC9kTX4HF0AHaHa?rs=1&pid=ImgDetMain" alt="">
                <span>党的二十大</span>
            </div>
        </div>
        <BooksList />
        <BooksList />
    </div>
</template>

<script setup>
import Swiper from '../components/Swiper.vue'
import BooksList from '../components/BooksLIst.vue'

</script>

<style lang="less" scoped>
.recommand {
    background-color: rgb(245, 245, 250);
   .show-list{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 180px;
    margin-top: -60px;
    background: #fff;
    padding: 0 10px;
    padding-top:75px;
    box-sizing: border-box;
    .list-item{
        width: 17%;
       
        img{
            width: 100%;
        }
        span{
            margin-top: 10px;
            display: block;
            font-size: 12px;
           font-weight: bold;
        }
    }
}
}</style>
