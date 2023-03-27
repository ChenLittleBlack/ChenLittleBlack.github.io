import router from './index'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import defaultSettings from '@/settings'

router.beforeEach(async(to, from, next) => {
  // 开启进度条
  NProgress.start()

  // 设置当前页标题
  if (to.meta?.title) {
    document.title = defaultSettings.title || '小黑屋' + ' - ' + to.meta.title
  }

  // 跳转到下一个路由
  next()

  // 结束进度条
  NProgress.done()
})
