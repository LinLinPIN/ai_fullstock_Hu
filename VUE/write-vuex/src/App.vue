<template>
  <div>
    {{ count }}*2={{ double }}
    <button @click="asyncAdd">async add</button>
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const count = computed(() => {
  return store.state.count
})

const double = computed(() => store.getters.double)
const asyncAdd = () => {
  store.dispatch('asyncAdd')
}
const add = () => {
  store.commit('add')
}
</script>

<style lang="scss" scoped></style>