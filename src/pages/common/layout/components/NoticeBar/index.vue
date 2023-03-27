<template>
  <van-notice-bar mode="closeable" left-icon="volume-o" :scrollable="false">
    <van-swipe
      class="notice-swipe"
      :autoplay="3000"
      :touchable="false"
      :show-indicators="false"
      vertical
    >
      <van-swipe-item v-for="(item, index) in notices" :key="index">{{ item.text }}</van-swipe-item>
    </van-swipe>
  </van-notice-bar>
</template>

<script>
export default {
  name: 'NoticeBar',
  data() {
    return {
      // 通知列表
      notices: [
        { text: '明月直入，无心可猜。' },
        { text: '仙人抚我顶，结发受长生。' },
        { text: '今人不见古时月，今月曾经照古人。' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>
