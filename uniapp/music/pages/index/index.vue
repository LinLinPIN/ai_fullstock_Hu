<template>
	<view class="index">
		<wyheader>
			<!-- 将内容填充到名为content的插槽中 -->
			<template v-slot:content>
				<view class="search">
					<uni-search-bar  @confirm="search" @input="input" placeholder="歌曲"></uni-search-bar>
				</view>
			</template>
		</wyheader>
		
		<menuLeft></menuLeft>
		<!-- banner -->
		<view class="banner">
			<swiper :indicator-dots="true" indicator-color="#eee" indicator-active-color="#d81e06" circular="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in banner" :key="item.targetId">
					<view class="swiper-item">
						<image :src="item.pic" alt="" />
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- balls -->
		<view class="balls">
			<view class="ball-item" v-for="item in ball" :key=item.id>
				<view class="icon">
					<image :src="item.iconUrl"></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<songList :list="recommendList"/>
	</view>
</template>

<script setup>
import { apiGetBanner,apiGetBall,apiGetRecommendList } from '../../api/index.js'
import { onLoad } from '@dcloudio/uni-app'
import { ref,reactive } from 'vue'

onLoad(()=>{
	getBanner();
	getBall();
	getRecommendList();
})


const banner = ref([])
const ball = ref([])
const recommendList = ref([])

// 获取banner图
const getBanner = () => {
	 apiGetBanner({type:1}).then(res=>{
		banner.value = res.data.banners
	})
}

// 获取圆形图标入口列表
const getBall = async() => {
	const { data:{ data:balls } } = await apiGetBall();
	ball.value = balls
}

const getRecommendList = async() => {
	const { data:{recommend:recommend}} = await apiGetRecommendList();
	recommendList.value = recommend
	console.log(recommendList);
}

</script>

<style lang="scss" scoped>
.index {
	padding: 0 20rpx;
	.search {
		width: 500rpx;
		height: 60rpx;
		:deep(.uni-searchbar){
			height: 100%;
			padding: 0;
			.uni-searchbar__box{
				height: 100%;
				padding: 0;
			}
		}
	}
	.banner{
		.swiper-item{
			height: 100%;
			image{
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}
		}
	}
	.balls{
		display: flex;
		overflow-x: scroll;
		margin: 30rpx 0;
		.ball-item{
			flex: 0 0 20%;
			text-align: center;
			font-size: 25rpx;
			.icon{
				width: 70rpx;
				height: 70rpx;
				margin: 0 auto;
				margin-bottom: 14rpx;
				background-color:$uni-primary-color;
				border-radius: 50%;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}

}

</style>