/** @format */

// 无需登录接口
import http from './http'

// 首页数据获取
export function getHomeData () {
    return http({ url : 'trial.h5.homepage.get' })
}

// post示例
export function signi (params) {
    return http({
        url : 'trial.h5.xxx',
        method : 'POST',
        params
    })
}
