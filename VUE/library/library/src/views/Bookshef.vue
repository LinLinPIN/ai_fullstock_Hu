<template>
    <div class="bookshelf">
        <div class="shelf-header">
            <van-icon name="search" />
            <span class="title">我的书架</span>
            <div class="header-bd">
                <div class="time">
                    <span class="time-num">16<span class="minunites">分</span></span>
                    <div class="tips">本周阅读时长（周日24点清空时长）</div>
                    <button>兑换书券</button>
                </div>
                <div class="mental">
                    <img src="../assets/img/奖杯.png" alt="">
                </div>
            </div>
        </div>
        <div class="shelf-content">

        </div>
        <FootBar />
    </div>
</template>

<script setup>
import FootBar from '../components/FootBar.vue';

</script>

<style lang="less" scoped>
.bookshelf {
    .shelf-header {
        padding: 0.3rem;
        text-align: center;
        position: relative;
        background: linear-gradient(to bottom, #CCFBFF, #fff);
        height: 5.5rem;

        i {
            position: absolute;
            font-size: 0.7rem;
            font-weight: bold;
            left: 0.3rem;
        }

        .title {
            font-size: 0.5rem;
            font-weight: bold;
        }

        .header-bd {
            display: flex;
            margin-top: 35px;

            .time {
                text-align: start;

                .time-num {
                    font-size: 1rem;
                    font-family: 'Times New Roman', Times, serif;

                    .minunites {
                        font-size: 0.5rem;
                    }
                }

                .tips {
                    margin-top: 10px;
                    font-size: 0.3rem;
                    width: 5.2rem;
                    background: linear-gradient(to right, #CCFBFF, #E2F2FE);
                    border-radius: 1rem;
                    height: 0.5rem;
                    line-height: 0.5rem;
                    text-align: center;
                }

                button {
                    margin-top: 10px;
                    border-radius: 5rem;
                    height: 0.8rem;
                    width: 2.5rem;
                    background-color: #1d7df2;
                    color: #fff;
                    border: none;
                    font-weight: bold;
                    font-size: 0.3rem;
                }
            }

            .mental {
                width: 3rem;
                position: absolute;

                right: 0.5rem;
                bottom: 0.3rem;

                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>