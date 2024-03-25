<template>
    <Child v-model:list="list" />
    <div class="bd">
        <ul>
            <li v-for="item in list" :key="index">{{ item }}</li>
        </ul>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import Child from './components/Child_3.vue'

const list = ref(['html', 'css']);
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