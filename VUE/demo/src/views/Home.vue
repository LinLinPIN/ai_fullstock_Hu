<template>
    <div class="home">
        <Header />
        <van-swipe class="my-swipe" :loop="false" :width="350" :show-indicators="false">
            <van-swipe-item v-for="item in   4  ">
                <div class="goodDetail">
                    <div class="title-img">
                        <img src="https://img12.360buyimg.com/n1/jfs/t1/100044/37/20453/94145/65b35943F860cc57b/c25985046edb1bb2.jpg.avif"
                            alt="">
                    </div>
                    <div class="title-text" @click="showDetail(); showSomething()">
                        【极光Pro】伯希和户外700蓬登山羽绒服
                        <i class="iconfont icon-Right"></i>
                    </div>
                    <div class="detail-content">
                        <div class="request" @click="showMessage()">
                            基本要求
                        </div>
                        <div class="revenue" @click="showDetail(), showRevenue()">预计收入
                            <van-action-sheet :show="show" :title="title">
                                <div class="content" v-if="chooseShow">
                                    <i class="iconfont icon-qian"></i>
                                    收益<span>4.50%</span>（预计收益￥17.96）
                                    <div class="content-tips">
                                        晋升到中级，佣金预计为￥38.90，加油哦!
                                    </div>
                                </div>
                                <div class="detail" v-else>
                                    <ul>
                                        <li>
                                            <span class="detail-name">品牌</span>
                                            <span class="detail-content">pelliot/伯希和</span>
                                        </li>
                                        <li>
                                            <span class="detail-name">主要功能</span>
                                            <span class="detail-content">速干 透气 防水 保暖 耐磨</span>
                                        </li>
                                        <li>
                                            <span class="detail-name">材质</span>
                                            <span class="detail-content">涤纶</span>
                                        </li>
                                        <li>
                                            <span class="detail-name">尺码</span>
                                            <span class="detail-content">Ｓ/Ｍ/Ｌ/ＸＬ/ＸＸＬ</span>
                                        </li>
                                        <li>
                                            <span class="detail-name">领型</span>
                                            <span class="detail-content">连帽</span>
                                        </li>
                                        <li>
                                            <span class="detail-name">产地</span>
                                            <span class="detail-content">中国</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="box"></div>
                            </van-action-sheet>
                        </div>
                    </div>
                    <div class="company-detail">
                        <div class="name">
                            小胡杂货铺
                        </div>
                        <div class="price">
                            <div class="price-origin">￥499</div>
                            <div class="price-count">￥405</div>
                        </div>
                    </div>
                    <div class="box"></div>
                </div>
            </van-swipe-item>
        </van-swipe>
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" />
            <van-action-bar-button type="danger" text="立即购买" @click="onClickButton" color="#ff5700" />
        </van-action-bar>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { useRouter } from 'vue-router';
import { showDialog } from 'vant';

import { ref } from 'vue';
import router from '@/router';

const show = ref(false)
const chooseShow = ref(true)
const title = ref('预计收入')

const showRevenue = () => {
    chooseShow.value = true
    title.value = '预计收益'
}

const showSomething = () => {
    chooseShow.value = false
    title.value = '商品详情'
}

const showDetail = () => {
    show.value = !show.value;
}

const showGoodDetail = () => {
    router.push('/goodDetail')
}

const showMessage = () => {
    showDialog({ message: '邀请三人以上一同购买即可获取团购价' });
}
</script>

<style lang="less" scoped>
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

            .request {}

            .revenue {
                .content {
                    color: #a7a7a7;

                    span {
                        color: #dc5a11;
                        margin: 0.1rem;
                    }

                    .content-tips {
                        color: #dc5a11;
                    }
                }

                .detail {
                    width: 100vw;
                    padding: 0.3rem;

                    li {
                        display: flex;
                        height: 1rem;
                        border-bottom: #eee;
                    }

                    .detail-name {
                        width: 2.5rem;
                    }

                    .detail-content {
                        padding: 0 0.5rem;
                        flex: 1;
                    }
                }

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

        .box {
            height: 2rem;
        }
    }
}

.content {
    padding: 16px 16px 160px;
}
</style>
<style>
.revenue .van-popup--bottom {
    width: 100vw;
}
</style>