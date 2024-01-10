<template>
  <!-- 挂载Counter组件，方便复用，管理 -->
  <Counter />
  <toDoList />
</template>

<script setup>
import Counter from '@/components/Counter.vue'
import toDoList from './components/toDoList.vue';
</script>

<style lang="less" scoped>

</style>