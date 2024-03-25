<template>
    <div class="hd">
        <input type="text" v-model="msg">
        <button @click="add">添加</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const list = ref(['css', 'js'])

defineExpose({ list })
</script>

<style lang="css" scoped></style>