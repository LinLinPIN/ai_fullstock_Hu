<template>
    <a :href="`#` + to">
        <slot></slot>
    </a>
</template>

<script setup>

defineProps({
    to: {
        String,
        required: true
    }
})
</script>
<style lang="css" scoped></style>