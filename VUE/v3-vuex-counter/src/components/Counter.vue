<!-- 独立的模块，vue里面叫组件 html+css+js集合 -->
<template>
    <!-- 结构 模板 -->
    <div>
       Clicked {{ count }} times,count is {{ evenOrOdd }}
       <button @click="increment">+</button>
       <button @click="decrement">-</button>
       <button @click="incrementIfOdd">Increment if odd</button>
       <button @click="incrementAsync">Increment async</button>
    </div>
</template>

<script setup>
// 进货
import { useCounterStore } from '@/store'
const {count} = useCounterStore()

</script>

<style lang="less" scoped>

</style>