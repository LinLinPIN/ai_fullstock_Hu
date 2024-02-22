<template>
    <component :is="component"></component>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from '../myRouter';
const router = useRouter(); // 在当前组件注入了router

const component = computed(() => {
    const route = router.routes.find((route) => {
        return route.path === router.current.value
    })
    return route ? route.component : null
})
</script>
