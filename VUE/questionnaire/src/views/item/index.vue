<template>
    <div>
        <ItemContainer parentComponent="item"/>
    </div>
</template>

<script>
import ItemContainer from '@/components/itemContainer.vue'
import { ssrContextKey } from 'vue';
import { mapActions } from 'vuex';
    export default {
        components:{
            ItemContainer
        },
        created(){// 生命周期函数 在页面加载的过程中自动会触发
            this.getQuestionListAction()
        },
        methods:{
            ...mapActions(['getQuestionListAction'])
        }
    }
</script>

<style lang="less" scoped>

</style>