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

