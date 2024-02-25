<template>
    <div class="category">
        <div class="header">
            <van-icon name="arrow-left" @click="goBack" />
            <span>{{ title }}</span>
        </div>
        <div class="category-content" v-for="item in 10">
            <div class="content-img">
                <img src="https://img14.360buyimg.com/n1/jfs/t1/182840/34/42191/51664/6556d717Fe6534cbc/7c439a529d5e7c21.jpg"
                    alt="">
                <van-tag type="primary" color="rgb(102,102,102)" class="tag">书籍</van-tag>
            </div>
            <div class="content-text">
                <div class="text-title">
                    腊八粥
                </div>
                <div class="text-intro">
                    大家沈从文笔下的腊八节
                </div>
                <div class="text-prompt">
                    <van-tag type="primary" color="red" class="tag">人文</van-tag>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const router = useRouter();
const route = useRoute();

const title = ref('')

onMounted(async () => {
    title.value = route.query.title
})
const goBack = () => {
    router.go(-1)
}


</script>

<style lang="less" scoped>
.category {
    .header {
        padding: 20px;

        .van-badge__wrapper {
            font-size: 25px;
            margin-right: 20px;
        }

        span {
            font-size: 25px;
            font-weight: bold;
        }
    }

    .category-content {
        margin-top: 25px;
        display: flex;

        .content-img {
            position: relative;
            width: 3.5rem;

            img {
                width: 100%;
            }

            span {
                position: absolute;
                bottom: 14px;
                width: 0.6rem;
                right: 0.9rem;
            }
        }

        .content-text {
            position: relative;

            .text-title {
                margin-top: 15px;
                font-size: 15px;
                font-weight: bold;
            }

            .text-intro {
                margin-top: 10px;
                font-size: 15px;
                color: #999;
            }

            .text-prompt {
                position: absolute;
                bottom: 40px;
            }

        }
    }
}
</style>