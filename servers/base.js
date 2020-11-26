/** @format */

// 网络基础配置
let origin
export const TESTORIGIN = 'http://master.xx.com' // 测试地址
export const ONLINEORIGIN = 'https://m.xx.com' // 线上地址
export const NODE_ENV = process.env.NODE_ENV // 当前运行环境
export const BASESTR = '/api/mroute?dapi=' // 网关
// #ifdef H5
origin = process.env.NODE_ENV === 'production' ? ONLINEORIGIN : '/proxy'
// #endif

// 非h5环境
// #ifndef H5
origin = process.env.NODE_ENV === 'production' ? ONLINEORIGIN : TESTORIGIN
// #endif
export const ORIGIN = origin
export const BASEURL = origin + BASESTR
