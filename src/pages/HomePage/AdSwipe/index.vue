<template>
  <van-swipe height="240" :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="image">
      <img :key="index" :src="image" alt="" style="box-sizing: border-box;width: 100%;height: 100%;" @click="$showImagePreview({ images: images, startPosition: index })">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { getAssetsImgInFolder } from '@/utils/img-util'

export default {
  name: 'AdSwipe',
  data() {
    return {
      // 轮播图片列表
      images: []
    }
  },
  created() {
    // 获取随机图片
    this.images = getAssetsImgInFolder('scenery').sort(() => 0.5 - Math.random())
  }
}
</script>

<style lang="scss" scoped>
</style>
