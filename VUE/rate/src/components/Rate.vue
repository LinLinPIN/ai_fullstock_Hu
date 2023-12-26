<template>
    <div>{{ rate }}</div>
    <div :style="fontStyle">{{ rate }}</div>
</template>

<script setup>
import { computed } from 'vue';
let props = defineProps({
    value:Number,
    theme:{
        type:String,
        default:'orange'
    }
})  
let rate = computed(()=>"★★★★★☆☆☆☆☆".slice(5-props.value,10-props.value))
let fontStyle = computed(()=>'color:${props.theme}')
</script>

<style lang="css" scoped>

</style>