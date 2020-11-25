/**
 * /* global uni plus
 *
 * @format
 */

export default {
    name : 'home',
    data () {
        return {
            href : 'https://uniapp.dcloud.io/component/README?id=uniui'
        }
    },
    methods : {
        handleClick () {
            uni.showModal({
                content : 'app传过来的数据：' + JSON.stringify(plus.runtime.arguments),
                showCancel : false
            })
        },
        getEventFromApp () {
            // 向宿主App发送事件
            uni.sendNativeEvent(
                'unimp-app',
                {
                    msg : 'unimp message!!!'
                },
                ret => {
                    uni.showModal({
                        content : 'app传过来的数据：' + ret,
                        showCancel : false
                    })
                }
            )
        },
        // 分享测试
        share () {
            uni.share({
                provider : 'weixin',
                scene : 'WXSceneSession',
                type : 1, // 图文
                summary : '我正在使用HBuilderX开发分享，赶紧跟我一起来体验！',
                success : () => {
                    console.log('成功')
                }
            })
        }
    },
    onShow () {
        // #ifdef H5
        console.log(document)
        // #endif

        // #ifdef APP-PLUS
        uni.onNativeEventReceive((event, data) => {
            uni.showModal({
                title : `事件类型${event}`,
                content : '接收宿主消息' + JSON.stringify(data),
                success : function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        })
        // #endif
    }
}
