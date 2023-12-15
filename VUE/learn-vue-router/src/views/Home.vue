<template>
    <div class="home">
        <h2>这是首页</h2>
        <nav>
            <RouterLink to="/home/suggest">推荐</RouterLink>
            <RouterLink to="/home/newest">最新</RouterLink>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
nav a{
    margin-left:20px;

}
</style>