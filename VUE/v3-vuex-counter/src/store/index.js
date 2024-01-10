import { createStore } from 'vuex'
// 数据要共享，store
// store 仓库
// 组件 小卖铺里的货架
// 进货
import { defineStore } from 'pinia'
import { ref,computed } from 'vue'
// vue3 hook 编程
export const useCounterStore = defineStore('counter',()=>{
  const count  = ref(0);

  return {
    count
  }
})

