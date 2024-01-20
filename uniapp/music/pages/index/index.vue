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
	</view>
</template>

<script setup>
import { apiGetBanner } from '../../api/index.js'
import { onLoad } from '@dcloudio/uni-app'
import { ref,reactive } from 'vue'

onLoad(async()=>{
	getBanner()
})


const banner = ref([])

const getBanner = () => {
	 apiGetBanner({type:1}).then(res=>{
		banner.value = res.data.banners
	})
}
</script>

<style lang="scss" scoped>
.index {
	padding: 0 15rpx;
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
}

</style>