<script setup>
import {ref} from 'vue'
// 数据绑定 -> 响应式
let name = ref("很牛")
let count = ref(0)
setTimeout(() => {
  name.value = '冷冷冷'
  count.value++
}, 1000);
 const addcount = ()=>{
  count.value++;
 }
 const todos = ref([])

;(async function(){
  const list = await fetch('https://ztj8kh.laf.run/get-list')
  const  { data } = await list.json()
  todos.value = data
})()
</script>

<template>
 <div>
  点击了{{count}}次
  <button type="button" @click="addcount">点击</button>
  <span class="sm">{{name}}</span>高手高手高手</div>
  <div v-if="todos.length === 0 ">没有todos</div>
  <ul v-else>
    <li v-for="todo in todos">{{ todo.txt }}</li>
  </ul>
</template>

<style scoped>
.sm{
  font-size: 20px;
  font-weight: bold;
  color: red;
}
</style>
