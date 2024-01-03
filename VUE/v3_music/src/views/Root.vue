<template>
    <div class="w-screen h-screen flex items-stretch overflow-hidden">
        <div class="w-56 h-screen flex-shrink-0">menu</div>
        <div class="flex-1 flex flex-col">
            <div>1</div>
            <router-view />
            <div>2</div>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="css" scoped>

</style>