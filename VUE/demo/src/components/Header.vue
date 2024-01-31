<template>
    <div class="header">
        <i class="iconfont icon-iphone" @click="goHome"></i>
        <div class="header-mid" v-if="isSearch">
            <router-link to="/amusement">娱乐</router-link>
            <router-link to="/training">培训</router-link>
            <router-link to="/business">商务</router-link>

        </div>
        <div class="header-mid" v-else>
            <input type="text" placeholder="请输入搜索内容">
            <button @click="hideSearch">取消</button>
        </div>
        <div class="header-right">
            <i class="iconfont icon-search1" @click="showSearch"></i>
            <i class="iconfont icon-gouwudai" @click="showTele"></i>
            <i class="iconfont icon-menu" @click="toLogin"></i>
        </div>
    </div>
    <div class="telephone" v-if="showKeyboard">
        <!-- 密码输入框 -->
        <van-password-input :value="value" :focused="showKeyboard" @focus="showKeyboard = true" :mask="false"
            :length="11" />
        <!-- 数字键盘 -->
        <van-number-keyboard v-model="value" :show="showKeyboard" @blur="showKeyboard = false" theme="custom"
            close-button-text="完成" />

    </div>

    <div class="box"></div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const router = useRouter();
const isSearch = ref(true)
const value = ref('');
const showKeyboard = ref(false);

const goHome = () => {
    router.push('/home')
}

const showSearch = () => {
    isSearch.value = false
}

const showTele = () => {
    showKeyboard.value = true
}

const hideSearch = () => {
    isSearch.value = true
}

const toLogin = () => {
    router.push('/login')
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    font-size: 0.5rem;
    padding: 0.2rem;
    align-items: center;
    height: 1.2rem;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    background: #fff;
    top: 0;
    left: 0;
    z-index: 9999;

    i {
        font-size: 0.7rem;
    }

    .header-mid {
        padding: 0 0.2rem 0 0.5rem;
        width: 7rem;
        display: flex;
        justify-content: space-around;
        position: relative;

        :nth-child(1) {
            color: yellow;
        }

        :nth-child(2) {
            color: blue;
        }

        :nth-child(3) {
            color: green;
        }

        input {
            width: 5rem;
            font-size: 0.3rem;
            height: 0.8rem;
            padding: 0 0.2rem;
            box-sizing: border-box;
            border-radius: 0.2rem;
            color: black !important;
        }

        button {
            height: 0.2rem;
            width: 1.1rem;
            font-size: 0.3rem;
            position: absolute;
            right: 0.3rem;
            border: none;
            background: #fff;
            top: 0.2rem;
            color: black !important;
        }
    }

    .header-right {
        width: 4rem;
        display: flex;
        justify-content: space-between;
        text-align: center;

        :nth-child(2) {
            flex: 1;
        }
    }
}

.box {
    height: 1.2rem;
}

.telephone {
    position: fixed;
    z-index: 9999999999;
    width: 100%;
    height: 100%;
    background-color: rgba(237, 239, 246, 0.9);

    .van-password-input {
        z-index: 999999999999999;
        top: 2rem;
    }
}
</style>