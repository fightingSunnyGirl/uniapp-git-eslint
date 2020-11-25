<!-- @format -->

<template>
    <view class="container">
        <!-- <uni-link :href="href" :text="href"></uni-link> -->
        <view class="test">应用首页</view>
        <text class="color">测试颜色</text>
        <button type="default" @click="handleClick">点击弹出app过来的值</button>
        <button type="primary">按钮二</button>
        <navigator url="/pages/test/index">
            <button type="default">前往测试页面</button>
        </navigator>
        <button type="default" @click="getEventFromApp">监听宿主发过来的事件</button>
        <view @click="share">分享</view>
    </view>
</template>

<script>
import home from './index.js'
export default {
    ...home
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
