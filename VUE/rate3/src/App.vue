<template>
  <div>
    <Rate :value="score" theme='red' @update-rate="update"/>
    <!-- <Rate :value="score"  /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Rate from './components/Rate.vue'

const score = ref(1)

const update = (num)=>{
  score.value=num
}
</script>

<style>

</style>
