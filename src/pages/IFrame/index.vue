<template>
  <div>
    <van-empty v-if="!src" image="error" description="页面错误" />
    <iframe v-if="src" width="100%" height="100%" :src="src" />
  </div>
</template>

<script>

export default {
  name: 'IFrame',
  props: {
    // 被嵌套的页面的 URL 地址
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
