<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- 路由懒加载，页面级别组件加载出来之前显示点loading -->
  <Suspense>
  <router-view />
  </Suspense>
</template>

<style scoped>

</style>
