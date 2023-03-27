<template>
  <!-- 框架视图定义 -->
  <div class="app-wrapper">
    <!-- 中间框架填充的部分 -->
    <div class="main-container">
      <!--导航栏-->
      <nav-bar />
      <!--通知栏-->
      <notice-bar />
      <van-pull-refresh v-model="loading" success-text="刷新成功" @refresh="refreshEvent">
        <!--主要内容区域-->
        <app-main :key="componentKey" />
        <!--回到顶部-->
        <van-back-top />
      </van-pull-refresh>
      <!--标签栏-->
      <tab-bar />
    </div>
  </div>
</template>

<script>
import { NavBar, NoticeBar, AppMain, TabBar } from './components'

export default {
  name: 'Layout',
  components: {
    NavBar,
    NoticeBar,
    AppMain,
    TabBar
  },
  data() {
    return {
      // 加载层显示状态
      loading: false,
      // 组件key值
      componentKey: 1
    }
  },
  methods: {
    /**
     * 显示加载层
     */
    showLoading() {
      this.loading = true
    },
    /**
     * 隐藏加载层
     */
    hideLoading() {
      this.loading = false
    },
    /**
     * 刷新事件
     */
    refreshEvent() {
      setTimeout(() => {
        // 组件key自增
        this.componentKey++
        // 隐藏加载层
        this.hideLoading()
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
