<template>
  <div style="width: 100%;height: 100%;">
    <van-space size="10px" direction="vertical" align="center" fill>
      <van-field v-model="formData.prefix" label="前缀" placeholder="流水号前缀" />
      <van-field v-model="formData.delimiter" label="分隔符" placeholder="末尾的分隔符" />
      <van-field v-model="formData.startVal" type="digit" label="起始值" placeholder="请输入起始值" required />
      <van-field v-model="formData.endVal" type="digit" label="终止值" placeholder="请输入终止值" required />
      <van-space size="10px" align="center" fill>
        <van-button :loading="loading" color="linear-gradient(to right, #ff6034, #ee0a24)" round :disabled="loading" @click="generate()">生成流水号</van-button>
        <van-button :loading="loading" round :disabled="loading" @click="copy()">复制结果</van-button>
      </van-space>
      <van-field
        v-model="result"
        type="textarea"
        rows="4"
        label="结果"
        placeholder="生成的结果"
      />
    </van-space>
  </div>
</template>

<script>
export default {
  name: 'GenerateSerialNumber',
  data() {
    return {
      // 加载层显示状态
      loading: false,
      // 表单数据
      formData: {
        // 前缀
        prefix: '',
        // 分隔符
        delimiter: '',
        // 起始值
        startVal: null,
        // 终止值
        endVal: null
      },
      // 结果
      result: ''
    }
  },
  computed: {
    // 加载层显示文本
    loadingText() {
      return `生成中`
    }
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
     * 生成流水号
     */
    generate() {
      // 显示加载层
      this.showLoading('生成中')
      try {
        // 生成流水号前的校验
        const startVal = this.formData.startVal
        const endVal = this.formData.endVal
        if (!startVal) {
          throw new Error('起始值必须大于0')
        }
        if (!endVal) {
          throw new Error('终止值必须大于0')
        }
        if (startVal >= endVal) {
          throw new Error('终止值必须大于起始值')
        }
        // 生成流水号
        let result = ''
        const len = String(endVal).length
        for (let i = startVal; i <= endVal; i++) {
          result += this.formData.prefix + String(i).padStart(len, '0') + this.formData.delimiter + '\n'
        }
        this.result = result
        // 隐藏加载层
        this.hideLoading()
      } catch (e) {
        this.$showFailToast(e.message)
        // 隐藏加载层
        this.hideLoading()
      }
    },
    /**
     * 复制结果
     */
    copy() {
      // 模拟 输入框
      var cInput = document.createElement('textarea')
      cInput.setAttribute('readonly', 'readonly')
      cInput.value = this.result
      document.body.appendChild(cInput)
      // 选取文本框内容
      cInput.select()
      // 执行浏览器复制命令
      // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
      // Input要在正常的编辑状态下原生复制方法才会生效
      document.execCommand('copy')
      this.$showSuccessToast('复制成功')
      // 复制成功后再将构造的标签 移除
      document.body.removeChild(cInput)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
