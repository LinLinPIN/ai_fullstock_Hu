<template>
	<view class="header">
		<uni-icons type="bars" size="30"></uni-icons>
			<slot name="content"></slot>
		<uni-icons type="mic" size="30"></uni-icons>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header{
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15rpx;

}
</style>