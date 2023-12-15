<template>
  <div class="nav">
    <RouterLink to="/home">首页</RouterLink>
    <RouterLink to="/hot">沸点</RouterLink>
    <RouterLink to="/class">课程</RouterLink>
  </div>

  <!-- 路由路口： 所有配了路由的页面都会在该口子上展示-->
<div class="page">
  <router-view></router-view>
</div>
  
</template>

<script>
  export default {
    
  }
</script>

<style lang="css" scoped>
.nav{
  width: 800px;
  background-color: aqua;
  margin: 0 auto;
  font-size: 30px;
  padding: 10px 20px;
}
a{
  text-decoration: none;
  margin-right: 30px;
}
.page{
  width: 1000px;
  margin: 0 auto;
  background: #e7e5e5;
  height: 1000px;
  font-size: 24px;
}
</style>