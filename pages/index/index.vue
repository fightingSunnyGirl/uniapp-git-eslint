<!-- @format -->

<template>
    <view class="content">
        <!-- <image class="logo" src="/static/logo.png"></image> -->
        <view class="text-area">
            <text class="title">{{ title }}</text>
        </view>
        <view>
            <uni-calendar
                :insert="true"
                :lunar="true"
                :start-date="'2019-3-2'"
                :end-date="'2019-5-20'"
                @change="change"
            ></uni-calendar>
        </view>
    </view>
</template>

<script>
import home from './index.js'
export default {
    ...home
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
