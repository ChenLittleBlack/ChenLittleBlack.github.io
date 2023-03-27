<template>
  <van-grid :column-num="3" square>
    <van-grid-item v-for="(item, index) in menus" :key="index" @click="routeJump(item.routeName)">
      <template #icon>
        <van-badge :content="item.badge || ''" :show-zero="false">
          <van-icon :name="item.icon" size="28" />
        </van-badge>
      </template>
      <template #text>
        <span style="font-size: 13px;">{{ item.text }}</span>
      </template>
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      // 菜单列表
      menus: [
        { text: '让我帮你百度一下', icon: 'search' },
        { text: '每日一宠', icon: 'smile-o', routeName: 'RandomPetPic', badge: 'Hot' },
        { text: '空', icon: 'add-o' },
        { text: '空', icon: 'add-o' },
        { text: '空', icon: 'add-o' },
        { text: '空', icon: 'add-o' },
        { text: '空', icon: 'add-o' },
        { text: '空', icon: 'add-o' },
        { text: '空', icon: 'add-o' }
      ]
    }
  },
  methods: {
    /**
     * 路由跳转
     * @param {string} routeName 路由名称
     */
    routeJump(routeName) {
      if (routeName) {
        this.$router.push({ name: routeName })
      } else {
        this.$showToast('开发中，敬请期待！')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
