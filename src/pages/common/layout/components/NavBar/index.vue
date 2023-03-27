<template>
  <div>
    <van-nav-bar fixed placeholder @click-left="$route.name === 'HomePage' ? $router.replace({ name: 'HomePage' }) : $router.back();" @click-right="showShareSheet = !showShareSheet">
      <template #left>
        <van-icon v-if="$route.name !== 'HomePage'" name="arrow-left" />
        <img v-else src="@/assets/images/logo.png" alt="" style="height: 32px;">
      </template>
      <template #title>
        <span>{{ $route.meta.title }}</span>
      </template>
      <template #right>
        <van-icon name="share" />
      </template>
    </van-nav-bar>
    <!--分享面板-->
    <share-sheet v-model:show="showShareSheet" />
  </div>
</template>

<script>
import ShareSheet from '@/pages/common/layout/components/ShareSheet'

export default {
  name: 'NavBar',
  components: {
    ShareSheet
  },
  data() {
    return {
      // 分享面板显示状态
      showShareSheet: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
