/** @format */

// 请求封装
/* global uni*/
import { BASEURL } from './base'

/**
 * 请求参数为一个对象
     httpParams.base:string;
     httpParams.url:string;
     httpParams.method:string;
     httpParams.params:any;
 * */
export default function http (
    httpParams = {
        url : '',
        method : 'GET',
        params : {}
    }
) {
    uni.showLoading()
    let data = {}
    return new Promise(resolve => {
        if (httpParams.params) {
            for (const key in httpParams.params) {
                // 在这里判断传过来的参数值为null，就删除这个属性
                if (httpParams.params[key] == null || httpParams.params[key] === 'null') {
                    delete httpParams.params[key]
                }
            }
            data = { ...httpParams.params }
        }

        uni.request({
            url : BASEURL + httpParams.url,
            method : httpParams.method,
            data,
            header : {
                'content-type' : 'application/x-www-form-urlencoded;charset=utf-8',
                Authorization : uni.getStorageSync('token') || ''
            },
            success : res => {
                uni.hideLoading()
                resolve(res)
            },
            fail : () => {
                uni.hideLoading()
                uni.showToast({
                    title : '网络错误,请刷新重试',
                    icon : 'none',
                    duration : 2000
                })
                resolve({
                    data : {
                        subMessage : '网络错误,请刷新重试',
                        subCode : 404
                    }
                })
            }
        })
    })
}
