<template>
  <!-- 评分，5颗星星，点亮 组件思维 -->
  <Rate :value="score"/>
  <Rate :value="score" theme="red"/>
</template>

<script>
import Rate from './components/Rate.vue'
import { ref } from 'vue';

export default {
  components: {
    Rate
  },
  setup() {
    const score = ref(3);

    setTimeout(() => {
      score.value = 4;
    }, 2000);

    return {
      score
    };
  }
};
</script>

<style lang="css" scoped>

</style>
