<!-- @format -->

<template>
    <view class="content">
        <image class="logo" src="/static/logo.png"></image>
        <view class="text-area">
            <text class="title">{{ title }}</text>
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
