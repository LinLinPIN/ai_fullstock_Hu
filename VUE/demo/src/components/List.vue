<template>
   <div class="list">
      <ul>
        <li v-for="(item,index) in lists" :key="index">{{ item }}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        props:{
            lists:{
                type:Array,
                default:()=>[]
            }
        }
    }
</script>

<style lang="css" scoped>

</style>