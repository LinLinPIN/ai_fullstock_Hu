<script>
	export default {
		globalData:{
			name:'全局的名称'
		},
		onLaunch: function(e) {
			console.log('App Launch', e)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
@import 'common/font/iconfont.css'
/* @import 'https://at.alicdn.com/t/c/font_4326617_hq574q8zccl.css'; */

</style>
