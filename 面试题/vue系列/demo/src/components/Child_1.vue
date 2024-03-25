<template>
    <div class="bd">
        <ul>
            <li v-for="item in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const list = ref(['html', 'css']);
</script>

<style lang="css" scoped></style>