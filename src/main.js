import { createApp } from 'vue'

// 创建应用
import App from '@/App.vue'
const app = createApp(App)

// 引入vant框架
import Vant from 'vant'
import 'vant/lib/index.css'
app.use(Vant)
// vant桌面端适配
import '@vant/touch-emulator'
// vant相关函数全局化
import { showToast, showSuccessToast, showFailToast, showLoadingToast, showNotify, showImagePreview } from 'vant'
app.config.globalProperties.$showToast = showToast
app.config.globalProperties.$showSuccessToast = showSuccessToast
app.config.globalProperties.$showFailToast = showFailToast
app.config.globalProperties.$showLoadingToast = showLoadingToast
app.config.globalProperties.$showNotify = showNotify
app.config.globalProperties.$showImagePreview = showImagePreview

// 引入vue-router路由
import router from '@/router'
app.use(router)
import '@/router/router-guard'

import '@/styles/main.scss'

app.mount('#entrance')
