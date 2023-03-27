<template>
  <div style="width: 100%;height: 100%;">
    <van-space size="10px" direction="vertical" align="center" fill>
      <div class="van-hairline--surround" style="display: flex;flex-flow: column;align-items: center;justify-content: center;min-width: 360px;height: 260px;overflow: hidden;">
        <van-loading v-if="loading">{{ loadingText }}</van-loading>
        <van-image v-else :src="picUrl">
          <template #loading>
            <van-loading>照片加载中</van-loading>
          </template>
        </van-image>
      </div>
      <van-field v-model="searchParams.text" label="类型" placeholder="猫猫&狗狗？" is-link readonly :disabled="loading" style="margin-top: 10px;" @click="!loading && (showTypePicker = true)" />
      <van-popup :show="showTypePicker" position="bottom" round>
        <van-picker :columns="typeOptions" @cancel="showTypePicker = false" @confirm="typePickerConfirmEvent" />
      </van-popup>
      <van-button :loading="loading" color="linear-gradient(to right, #ff6034, #ee0a24)" round :disabled="loading" @click="randomChangePic()">换一张</van-button>
    </van-space>
  </div>
</template>

<script>
import { randomCatPic, randomDogPic } from '@/api/petPic'

export default {
  name: 'RandomPetPic',
  data() {
    return {
      // 加载层显示状态
      loading: false,
      // 照片链接
      picUrl: '#',
      // 查询参数
      searchParams: { text: '', value: '' },
      // 类型选择器显示状态
      showTypePicker: false
    }
  },
  computed: {
    // 加载层显示文本
    loadingText() {
      return `${this.typeOptions.find(item => item.value === this.searchParams.type)?.text || ''}搜寻中`
    },
    // 类型选项
    typeOptions() {
      return [
        { text: '猫猫', value: 'cat', api: randomCatPic },
        { text: '狗狗', value: 'dog', api: randomDogPic }
      ]
    }
  },
  created() {
    // 默认选中第一个
    this.searchParams = this.typeOptions[0]
  },
  mounted() {
    // 触发方法：随机更换照片
    this.randomChangePic()
  },
  methods: {
    /**
     * 显示加载层
     * @param {string} loadingText 加载层显示文本
     */
    showLoading(loadingText) {
      this.loadingText = loadingText || this.$options.data().loadingText
      this.loading = true
    },
    /**
     * 隐藏加载层
     */
    hideLoading() {
      this.loading = false
    },
    /**
     * 类型选择器确认事件
     * @param {object} selectedOptions 选中的选项
     */
    typePickerConfirmEvent({ selectedOptions }) {
      // 隐藏类型选择器
      this.showTypePicker = false
      // 绑定参数
      this.searchParams = selectedOptions[0]
      // 触发方法：随机更换照片
      this.randomChangePic()
    },
    /**
     * 随机更换照片
     */
    randomChangePic() {
      const api = this.searchParams.api
      if (!api) {
        this.$showToast('没库存啦')
      }
      // 显示加载层
      this.showLoading()
      // 发送请求
      api().then(res => {
        if (res && res.length) {
          const data = res[0]
          // 绑定照片链接
          this.picUrl = data.url
        }
      }).finally(() => {
        // 隐藏加载层
        this.hideLoading()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
