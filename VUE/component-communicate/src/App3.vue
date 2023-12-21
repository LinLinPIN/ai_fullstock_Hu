<template>
    <Header @add="handle"/> <!--订阅add事件-->
    <div class="body">
 <ul>
   <li v-for="item in lists">{{ item }}</li>
 </ul>
</div>
</template>

<script>
import Header from './components/body3/header.vue'
   export default {
       props:['lists'],
       data(){
        return {
                lists:['html','css'],
                message:''
            }
       },
       components:{
        Header
       },
       methods:{
        handle(e){
            this.lists.push(e)
        }
       }
   }
</script>

<style lang="scss" scoped>

</style>