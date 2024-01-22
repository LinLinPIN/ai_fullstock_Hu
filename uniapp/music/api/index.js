// 首页的接口请求
import baseUrl from './request.js'

// 获取banner图片
export const apiGetBanner = (data) => {
	return uni.request({
		url: baseUrl + '/banner',
		method:"GET",
		data:data,
		autoType : 'None'
	})
}

// 获取入口列表
export const apiGetBall = () => {
	return uni.request({
		url:baseUrl + '/homepage/dragon/ball',
		method:"GET"
	})
}

// 推荐歌单
export const apiGetRecommendList = () => {
	return uni.request({
		url:baseUrl + '/recommend/resource',
		method:'GET'
	})
}

export const apiGetRecommendSong = () => {
	return uni.request({
		url:baseUrl + '/recommend/songs',
		method:'GET'
	})
}

export const apiGetPersonalizedList = () => { // 雷达歌单
	return uni.request({
		url: baseUrl + '/personalized?limit=6',
		method: 'GET'
	})
}
// export const apiGetHomePage = () => {
// 		return uni.request({
// 			url:baseUrl + '/homepage/block/page',
// 			method:'GET'
// 		})
// }