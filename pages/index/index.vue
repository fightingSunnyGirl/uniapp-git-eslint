<template>
	<view class="container">
		<view class="desc">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<view class="test">测试</view>
		<text class="color">测试颜色</text>
		<button type="default" @click="a">按钮</button>
		<button type="primary">按钮二</button>
	</view>
</template>

<script>
	import home from './index.js';  
	export default {
		...home
	}
</script>

<style lang="less" scoped>
	@import './index.less';
</style>

