<template>
    <div class="login">
        <SimpleHeader title="登录" />
        <img class="logo"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9ed572e1-1741-4e8e-9f1e-72a8227e5a2c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707105227&t=4c5a4c8247a8e74da4356cf48e05441e"
            alt="">

        <div class="login-body login">
            <van-form @submit="onSubmit">
                <van-field v-model="state.phoneNumber" name="电话号码" label="电话号码" placeholder="电话号码"
                    :rules="[{ required: true, message: '请填写电话号码' }]" />
                <van-field v-model="state.veCode" name="短信验证码" label="短信验证码" placeholder="短信验证码"
                    :rules="[{ required: true, message: '请填写短信验证码' }]" class="veCode">
                    <template #button>
                        <van-button size="small" type="primary" @click="postMessage">
                            <div class="timeDown" v-if="isTimeDown">
                                <van-count-down :time="veCodeTime" format="ss 秒" @finish="resetTime" />
                            </div>
                            <div class="div" v-else>发送验证码</div>
                        </van-button>
                    </template>
                </van-field>
                <van-field v-model="state.verify" name="验证码" label="验证码" placeholder="验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]">
                    <template #button>
                        <ImageVerify ref="verifyRef" />
                    </template>
                </van-field>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
  
<script setup>

import { reactive, ref, onMounted } from 'vue';
import ImageVerify from '../components/ImageVerify.vue';
import { showToast } from 'vant';
import SimpleHeader from '@/components/SimpleHeader.vue';
import { login, getVecode } from '@/api/login';
import md5 from 'md5'
import router from '@/router';

const verifyRef = ref(null)
const isTimeDown = ref(false)
const veCodeTime = ref(60000)


const state = reactive({
    phoneNumber: '',
    veCode: '',
    verify: '',
})

const resetTime = () => {
    veCodeTime.value = 60000
    isTimeDown.value = false
}
const postMessage = async () => {
    const { data } = await getVecode(state.phoneNumber)
    showToast(data.message)
    if (data.success) {
        isTimeDown.value = true
    }
}
const onSubmit = async () => {
    if (state.verify !== verifyRef.value.verifyCode.code) {
        showToast('验证码错误')
        return
    } else {
        const data = await login(state)
        if (data.success) {
            localStorage.setItem('token', data.token)
            router.push('/')
        }
        showToast(data.message)
    }
}

</script>
  
<style lang="less" scoped>
.login {
    .logo {
        width: 120px;
        height: 120px;
        display: block;
        margin: 80px auto 20px;
    }

    .login-body {
        padding: 0 20px;
    }

    .login {
        .link-register {
            font-size: 14px;
            margin-bottom: 20px;
            color: #1989fa;
            display: inline-block;
        }
    }



    .verify-bar-area {
        margin-top: 24px;

        .verify-left-bar {
            border-color: #1baeae;
        }

        .verify-move-block {
            background-color: #1baeae;
            color: #fff;
        }
    }

    .verify {
        >div {
            width: 100%;
        }

        display: flex;
        justify-content: center;

        .cerify-code-panel {
            margin-top: 16px;
        }

        .verify-code {
            width: 40% !important;
            float: left !important;
        }

        .verify-code-area {
            float: left !important;
            width: 54% !important;
            margin-left: 14px !important;

            .varify-input-code {
                width: 90px;
                height: 38px !important;
                border: 1px solid #e9e9e9;
                padding-left: 10px;
                font-size: 16px;
            }

            .verify-change-area {
                line-height: 44px;
            }
        }
    }
}

.veCode {
    .van-button {
        width: 2rem;
    }
}
</style>
<style>
.van-cell.van-field {
    align-items: center;
}
</style>