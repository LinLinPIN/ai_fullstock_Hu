<template>
	<view>
		about
	</view>
	<view class="btn">
		<button type="button">按钮</button>
		<view class="iconfont">&#xe99a;</view>
		<view class="icon-zuojiantou"></view>
	</view>
</template>

<script setup>
import  {onMounted} from 'vue'
onMounted(()=>{
	const reqTask = uni.request({
		url:'https://mock.presstime.cn/mock/65a9154bb02591272cc21c5a/movie/movieList',
		method:'GET',
		success:(res) => {
			console.log(res);	
			uni.setStorage({
				key:'movieName',
				data:res.data.movieList[0].nm,
				success(){
					uni.showToast({
						title:'保存成功',
						duration:'2000',
						icon:'success'
					})
				}
			})
		}
	})
	
})
</script>

<style lang="scss">
.btn{
	button{
		width: 600rpx;// rpx是根据屏幕宽度制定的响应式单位，以750rpx为整个屏幕宽度为基准
	}
}
</style>
