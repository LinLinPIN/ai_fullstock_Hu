<template>
  <!-- 挂载Counter组件，方便复用，管理 -->
  <!-- <Counter /> -->
  <!-- <toDoList /> -->
  <h1>推荐</h1>
  <Banner :per-page="3" />
</template>

<script setup>
import Counter from '@/components/Counter.vue'
import toDoList from './components/toDoList.vue';
import Banner from './components/Banner.vue'

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>