<template>
    <div :style="fontstyle">
    <div class="rate">
        <span v-for="num in 5" :key="num" @mouseover="mouseOver(num)" @mouseout="mouseOut" >☆</span>
        <span class="hollow" :style="fontWidth">
        <span v-for="num in 5" :key="num" @click="onRate(num)">★</span>
        </span>
    </div>
    </div>
</template>

<script setup>
    import { ref,defineProps,computed,defineEmits } from 'vue';
    // 自己的分值响应式变量
    // 主题配置
    const themeObj = {
        black:'#000',
        orange:'#fa5413',
        green:'#73d13d',
        blue:'#40a9ff',
        red:'#f5222d'
    }
    const props = defineProps({
        value:Number,
        theme:{
            type:String,
            default:'orange'
        }
    })
    const emits = defineEmits(['update-rate'])
    // UI 状态 动态的
    let width = ref(props.value)
    let rate = computed(()=>"★★★★★☆☆☆☆☆".slice(5-props.value,10-props.value))
    let fontstyle = computed(()=>`color:${themeObj[props.theme]}`)
    let fontWidth = computed(()=>`width:${width.value}em`)
    const mouseOver = (i)=>{
       width.value=i
    }
    const mouseOut = ()=>{
        width.value = props.value
    }
    const onRate=(num)=>{
        // 数据和状态的统一
        emits('update-rate',num)
        console.log(num);
    }
</script>

<style lang="css" scoped>
.rate{
    position: relative;
    display: inline-block;
    font-size: 0px;
}
.rate span{
    font-size: 16px;
}
.rate>span.hollow{
    position: absolute;
    display: inline-block;
    top: 0;
    left:0;
    width: 0;
    overflow: hidden; 
}
</style>