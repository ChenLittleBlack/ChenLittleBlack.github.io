<template>
  <!-- 框架视图定义 -->
  <div class="app-wrapper">
    <!--导航栏-->
    <nav-bar />
    <!--通知栏-->
    <notice-bar />
    <!-- 中间框架填充的部分 -->
    <div class="main-container">
      <van-pull-refresh v-model="loading" success-text="刷新成功" @refresh="refreshEvent">
        <!--主要内容区域-->
        <app-main :key="componentKey" />
        <!--回到顶部-->
        <van-back-top />
      </van-pull-refresh>
    </div>
    <!--标签栏-->
    <tab-bar />
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
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  height: 100vh;

  .main-container {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
