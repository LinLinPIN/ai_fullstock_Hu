<template>
    <div class="login">
        <h2>旅梦后台管理系统</h2>
        <div class="login-container">
            <el-input v-model="username" placeholder="请输入账号" size="large"/>
            <el-input v-model="password" placeholder="请输入账号" size="large"/>
            <el-button class="login-btn" type="primary" @click="login">登录</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                username:'蜗牛',
                password:'123'
            }
        },
        methods:{
            login(){
                if(this.username && this.password){
                    this.$router.push({path:'/home',query:{user:this.username}})
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.login{
    width:100vw;
    height: 100vh;
    background: #7f7d7d;
    color: #fff;
    overflow: auto;
    h2{
        text-align: center;
        margin: 100px 0 30px 0;}
    &-container{
        width: 400px;
        margin: 0 auto;
        .el-input{
            margin-bottom: 20px;
        }
        .login-btn{
            width: 100%;
        }
    }
}
</style>
