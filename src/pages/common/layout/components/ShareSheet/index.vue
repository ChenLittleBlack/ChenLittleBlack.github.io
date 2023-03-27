<template>
  <van-share-sheet v-model:show="showShareSheet" title="立即分享给好友" :options="shareOptions" @select="shareSheetSelectEvent" />
</template>

<script>
export default {
  name: 'ShareSheet',
  props: {
    // 分享面板显示状态
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 分享配置项
      shareOptions: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo', className: 'share-disabled' },
          { name: 'QQ', icon: 'qq', className: 'share-disabled' }
        ],
        [
          { name: '复制链接', icon: 'link', className: 'share-disabled' },
          { name: '分享海报', icon: 'poster', className: 'share-disabled' },
          { name: '二维码', icon: 'qrcode', className: 'share-disabled' },
          { name: '小程序码', icon: 'weapp-qrcode', className: 'share-disabled' }
        ]
      ]
    }
  },
  computed: {
    // 分享面板显示状态
    showShareSheet: {
      get() {
        return this.show
      },
      set(value) {
        this.$emit('update:show', value)
      }
    }
  },
  methods: {
    /**
     * 分享选项点击事件
     * @param option {object} 点击的分享选项
     */
    shareSheetSelectEvent(option) {
      if (option.className === 'share-disabled') {
        this.$showToast('开发中，敬请期待！')
      } else {
        this.$showToast('跳转到' + option.name)
      }
    }
  }
}
</script>

<style lang="scss">
.share-disabled {
  filter: brightness(0.7);
}
</style>
