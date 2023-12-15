<template>
    <div>
        hot page
    </div>
    <button @click="goClassPage">去课程页面</button>
</template>

<script>
import {useRouter} from "vue-router"
    export default {
        methods:{
            goClassPage(){
                // this.$router.push('/class')
                // this.$router.push({path:'/class',query:{id:123}})
                this.$router.push({name:'class',params:{id:456}})
            }
        }
    }
</script>

<style lang="css" scoped>

</style>