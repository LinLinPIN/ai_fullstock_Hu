<template>
    <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确定</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
   
    data() {
        return {
            message: ''
        }
    },
    methods: {
        ...mapMutations(['addLists']),
        submit() {
            // 把message存入仓库中的lists数组中
            if(this.message){
                this.addLists(this.message)
            }
        }
    }
}
</script>

<style lang="css" scoped></style>