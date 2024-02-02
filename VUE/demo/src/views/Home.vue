<template>
    <div class="home">
        <Header />
        <van-swipe class="my-swipe" :loop="false" :width="370" :show-indicators="false" @click="hideSomething">
            <van-swipe-item v-for="(item, index) in state.homeList" :key="item.id">
                <div class="goodDetail">
                    <div class="title-img">
                        <img :src="item.avatar" alt="">
                    </div>
                    <div class="title-text" @click="showDetail(item.id); showSomething()">
                        {{ item.title }}
                        <i class="iconfont icon-Right"></i>
                    </div>
                    <div class="detail-content">
                        <div class="request" @click="showMessage(item.id)">
                            基本要求
                        </div>
                        <div class="revenue" @click="showDetail(item.id), showRevenue()">预计收入
                        </div>
                    </div>
                    <div class="company-detail">
                        <div class="name" @click="showMorePrice">
                            {{ state.companyList[index].name }}
                        </div>
                        <div class="price">
                            市场价<div class="price-origin">￥499</div>
                            团购价<div class="price-count">￥405</div>
                        </div>
                    </div>
                    <div class="box"></div>
                </div>
                <van-cell title="展示弹出层" is-link @click="showPopup" />
            </van-swipe-item>
        </van-swipe>
        <van-action-sheet v-model:show="show" :title="title">
            <div class="content" v-if="chooseShow">
                <i class="iconfont icon-qian"></i>
                预计收入<span>{{ quote }}
                    <div class="content-tips">
                        万
                    </div>
                </span>
            </div>
            <div class="detail" v-else>
                {{ goodText }}
            </div>
            <div class="box"></div>
        </van-action-sheet>
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" />
            <van-action-bar-button type="danger" text="立即购买" @click="onClickButton" color="#ff5700" />
        </van-action-bar>
        <van-floating-panel v-if="companyFlag">
            <div class="companyTitle">更多报价</div>
            <div class="company-item" v-for="item in state.companyList">
                <div class="name">{{ item.name }}</div>
                <div class="price">
                    <span>报价：</span>￥15000
                </div>
            </div>
        </van-floating-panel>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { useRouter } from 'vue-router';
import { showDialog } from 'vant';
import { ref, onMounted, reactive } from 'vue';
import router from '@/router';
import { getHome } from '@/api/home';
import { useStore } from 'vuex';

const show = ref(false)
const chooseShow = ref(true)
const showCompany = ref(true);
const companyFlag = ref(false)
const goodText = ref('')
const quote = ref('')
const title = ref('预计收入')
const showRight = ref(false)
const store = useStore()
const state = reactive({
    homeList: [],
    companyList: []
})

onMounted(async () => {
    const { data } = await getHome(1, 10)
    state.homeList = data.businessDes[0]
    state.companyList = data.fireData[0]
    store.commit('changeLoginState')
    console.log(state.companyList);
})


const showRevenue = () => {
    chooseShow.value = true
    title.value = '预计收益'
}

const showSomething = () => {
    chooseShow.value = false
    title.value = '工作简介'
}

const showDetail = (index) => {
    show.value = !show.value;
    goodText.value = state.homeList[index - 1].des
    quote.value = state.homeList[index - 1].projectedRevenue
    console.log(state.homeList[index - 1].des);
}

const showGoodDetail = () => {
    router.push('/goodDetail')
}

const showMessage = (index) => {
    let text = state.homeList[index - 1].requestAll
    if (text == null) text = '无要求'
    showDialog({ message: text });
}

const showMorePrice = (event) => {
    companyFlag.value = true
    event.stopImmediatePropagation()
}

const hideSomething = () => {
    companyFlag.value = false
}
</script>

<style lang="less" scoped>
.van-swipe {
    width: 100%;

    .van-swipe-item {
        margin-right: 0.2rem;
        border: 1px solid #eee;

        .goodDetail {
            .title-img {
                width: 100%;
                height: 9rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .title-text {
                position: relative;
                margin: 0.2rem;
                padding: 0.5rem 0.5rem;
                text-align: center;
                font-size: 0.5rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;

                i {
                    position: absolute;
                    right: 0.1rem;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }

            .detail-content {
                display: flex;
                justify-content: space-between;
                height: 2rem;
                line-height: 2rem;

                >* {
                    width: 50%;
                    text-align: center;
                    border: 1px solid black;
                    border-radius: 0.4rem;
                    margin: 0 0.05rem;
                    font-size: 0.5rem;
                }

                .revenue {

                    .box {
                        height: 3rem;
                    }
                }
            }

            .company-detail {
                margin-top: 0.7rem;

                .name {
                    width: 100%;
                    text-align: center;
                    font-size: 0.9rem;
                    font-weight: bold;
                }

                .price {
                    margin-top: 0.8rem;
                    display: flex;
                    text-align: center;
                    padding: 0.5rem 2rem 0.5rem 0;
                    font-size: 0.5rem;

                    >* {
                        width: 50%;
                        font-size: 0.5rem;
                        color: red;
                    }

                    .price-origin {
                        text-decoration: line-through;
                    }
                }
            }
        }

        .box {
            height: 1.5rem;
        }
    }
}

.content {
    color: #a7a7a7;
    font-size: 1rem;

    span {
        margin: 0 auto;
        text-align: center;
        position: relative;
        align-items: center;
        display: block;
        font-size: 1.5rem;
        color: #dc5a11;

        .content-tips {
            font-size: 1rem;
            position: absolute;
            right: 0.7rem;
            bottom: -0.5rem;
            color: #dc5a11;
        }
    }


}

.detail {
    font-size: 0.5rem;
    padding: 0.5rem;
    line-height: 1.5;
}

.content {
    min-height: 7rem;
    font-size: 0.5rem;
    padding: 0 1rem;
    line-height: 1.5;
    letter-spacing: 1.5;
}

.home {
    .van-floating-panel {
        .companyTitle {
            text-align: center;
            font-size: 0.6rem;
            height: 1.5rem;
            line-height: 1.5rem;
            border-bottom: 1px solid #eee;
        }

        .company-item {
            border-bottom: 1px solid #d7d4d4;

            .name {
                font-size: 0.7rem;
                margin: 0.5rem 0 0.5rem 0.5rem;
            }

            .price {
                font-size: 0.6rem;
                margin: 0.5rem;
                text-align: right;

                span {
                    color: #dc5a11;
                    margin: 0 0.7rem;
                }
            }
        }
    }
}
</style>
<style></style>