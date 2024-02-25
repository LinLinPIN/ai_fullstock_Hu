<template>
    <div class="recommand-content">
        <div class="recommand-title">
            <span>
                <van-icon name="fire" />{{ list.title }}</span>
            <button @click="goToCategory(list.title, list.more)">更多</button>
        </div>
        <div class="recommand-books">
            <div class="book" v-for="item in list.list">
                <div class="book-img">
                    <img :src="item.img" alt="">
                    <van-tag type="primary" color="rgb(102,102,102)" class="tag">{{ item.tag }}</van-tag>
                </div>
                <div class="book-title">
                    {{ item.name }}
                </div>
                <div class="book-author">
                    {{ item.author }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const router = useRouter();
const props = defineProps({
    list: Array
})

const goToCategory = (title, more) => {
    router.push({ path: '/category', query: { title: title, more: more } })
}
</script>

<style lang="less" scoped>
.recommand-content {
    margin-top: 20px;
    background: #fff;

    .recommand-title {
        display: flex;
        justify-content: space-between;
        background: linear-gradient(to bottom, #CCFBFF, #fff);
        margin-bottom: -10px;
        padding: 0 0.2rem;
        height: 80px;
        align-items: center;

        span {
            font-size: 0.5rem;
            height: 30px;
            line-height: 30px;
            font-weight: bold;
        }

        button {
            border-radius: 30px;
            width: 50px;
            height: 30px;
            border: 1px solid rgba(166, 174, 169, 0.5);
            background: #fff;
            font-size: 13px;
        }
    }
}

.recommand-books {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 20px;
    padding: 0.5rem;

    .book {
        .book-img {
            position: relative;

            img {
                width: 100%;
            }

            .tag {
                position: absolute;
                right: 0.8rem;
                bottom: 0.2rem;
            }
        }

        .book-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; // 控制多行的行数
            -webkit-box-orient: vertical;
            text-align: center;
            padding: 0 0.3rem;
            font-size: 0.4rem;
            font-weight: bold;
            margin: 10px 0;
        }

        .book-author {
            text-align: center;
            padding: 0 0.3rem;
            font-size: 0.3rem;
            color: rgb(102, 102, 102);
        }
    }
}
</style>