<template>
    <div class="bd">
        <ul>
            <li v-for="item in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue';
const list = inject('list')
</script>

<style lang="css" scoped></style>