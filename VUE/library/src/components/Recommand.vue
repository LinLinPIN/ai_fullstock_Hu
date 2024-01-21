<template>
    <div class="recommand">
        <Swiper :list="swipeList" />
        <div class="show-list">
            <div class="list-item" v-for="item in ballList" :key="item.id">
                <img :src="item.img" alt="">
                <span>{{ item.title }}</span>
            </div>
        </div>
        <BooksList v-for="item in booksList" :key="item.id" :list="item" />
    </div>
</template>

<script setup>
import Swiper from '../components/Swiper.vue'
import BooksList from '../components/BooksList.vue'
import { onMounted, ref, reactive } from 'vue';
import { getHome } from '../api/home';
import { getBooksList } from '../api/booksList';

const swipeList = ref([])
const booksList = ref([])

const ballList = [
    {
        img: new URL("../assets/homeList/shudan.png", import.meta.url),
        title: '热门书籍',
        id: 1
    }, {
        img: new URL('../assets/homeList/shudan-.png', import.meta.url),
        title: '每日快听',
        id: 2
    }, {
        img: new URL('../assets/homeList/yuedu.png', import.meta.url),
        title: '主题书单',
        id: 3
    }, {
        img: new URL('../assets/homeList/huodong.png', import.meta.url),
        title: '活动',
        id: 4
    }, {
        img: new URL('../assets/homeList/kaoqindaka.png', import.meta.url),
        title: '打卡',
        id: 5
    }]
onMounted(async () => {
    const data = await getHome();
    swipeList.value = data.data.swipe;
    booksList.value = (await getBooksList()).data.recommend;
})
</script>

<style lang="less" scoped>
.recommand {
    background-color: rgb(245, 245, 250);

    .show-list {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 180px;
        margin-top: -60px;
        background: #fff;
        padding: 0 10px;
        padding-top: 75px;
        box-sizing: border-box;

        .list-item {
            width: 17%;
            text-align: center;
            border-radius: 10px;
            height: 80px;

            img {
                width: 80%;
            }

            span {
                display: block;
                font-size: 12px;
                margin-top: 10px;
            }
        }
    }
}
</style>
