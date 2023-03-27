import * as VueRouter from 'vue-router'

/* Layout */
import Layout from '@/pages/common/layout'

/**
 * 放行模块 -- 不用授权即可访问
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: '/HomePage',
    meta: { title: '首页' },
    component: Layout,
    children: [
      {
        path: '/HomePage',
        name: 'HomePage',
        meta: { title: '首页' },
        component: () => import('@/pages/HomePage/index')
      }
    ]
  },
  {
    path: '/redirect',
    meta: { title: '重定向页' },
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'redirect',
        meta: { title: '重定向页' },
        component: () => import('@/pages/common/redirect/index')
      }
    ]
  },
  {
    path: '/error',
    name: 'ErrorPages',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: '错误页' },
    children: [
      {
        path: '/404',
        name: 'ErrorPage404',
        meta: { title: '找不到该页面' },
        component: () => import('@/pages/common/ErrorPage/404')
      },
      {
        path: '/401',
        name: 'ErrorPage401',
        meta: { title: '无权访问该页面' },
        component: () => import('@/pages/common/ErrorPage/401')
      }
    ]
  },
  {
    path: '/Menu',
    component: Layout,
    meta: { title: '功能菜单' },
    children: [
      {
        path: '/Menu',
        name: 'Menu',
        meta: { title: '功能菜单' },
        component: () => import('@/pages/Menu/index')
      }
    ]
  },
  {
    path: '/RandomPetPic',
    component: Layout,
    meta: { title: '每日一宠' },
    children: [
      {
        path: '/RandomPetPic',
        name: 'RandomPetPic',
        meta: { title: '每日一宠' },
        component: () => import('@/pages/RandomPetPic/index')
      }
    ]
  },
  // 不存在的路径就重定向到404错误页（必须放在路由最后）
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
