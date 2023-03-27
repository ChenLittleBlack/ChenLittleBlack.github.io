<template>
  <van-tabbar v-model="activeTab" route>
    <van-tabbar-item name="home" icon="home-o" :to="{ name: 'HomePage' }">首页</van-tabbar-item>
    <van-tabbar-item name="menu" icon="apps-o" :to="{ name: 'Menu' }">菜单</van-tabbar-item>
    <van-tabbar-item name="my" icon="user-o" disabled>我的(开发中)</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      // 活动的标签
      activeTab: 'home'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
