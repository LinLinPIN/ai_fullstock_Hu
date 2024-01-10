<template>
    <ul>
        <li v-for="item in list" :key="item.id">{{ item.text }}</li>
    </ul>
</template>

<script setup>
import { useToDoStore } from '@/store/toDo.js';
const store = useToDoStore()
const list = store.list
</script>

<style lang="less" scoped>

</style>