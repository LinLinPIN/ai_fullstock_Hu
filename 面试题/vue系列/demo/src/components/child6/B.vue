<template>
    <div>
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue';
import emitter from './emit.js'

const app = getCurrentInstance()
console.log(app);
const list = ref([])
emitter.on('list', (e) => {
    list.value = e
})
</script>

<style lang="css" scoped></style>