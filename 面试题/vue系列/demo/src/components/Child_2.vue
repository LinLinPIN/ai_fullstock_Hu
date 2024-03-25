<template>
    <div class="hd">
        <input type="text" v-model="msg">
        <button @click="add">添加</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('')

const emits = defineEmits(['add'])

const add = () => {
    emits('add', msg.value)
}
</script>

<style lang="css" scoped></style>