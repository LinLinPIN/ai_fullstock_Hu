<template>
  <div class="hd">
    <input type="text" v-model="msg">
    <button @click="add">添加</button>
  </div>

  <Child :list="list" />
</template>

<script setup>
import { ref } from 'vue';
import Child from './components/Child_1.vue'

const msg = ref('');
const list = ref(['html', 'css']);
const add = () => {
  list.value.push(msg.value)
}
</script>

<style lang="css" scoped>
.hd input {
  width: 200px;
  padding: 10px 0;
  font-size: 20px;
}

.hd button {
  font-size: 20px;
  padding: 10px;
}
</style>