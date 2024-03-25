<template>
    <div class="hd">
        <input type="text" v-model="msg">
        <button @click="add">添加</button>
    </div>

    <Child />
</template>

<script setup>
import { ref, provide } from 'vue';
import Child from './components/Child_5.vue'
const list = ref(['html', 'css'])
const msg = ref('')
const add = () => {
    list.value.push(msg.value)
}
provide('list', list.value)
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