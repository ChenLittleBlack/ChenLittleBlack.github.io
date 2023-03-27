import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.info('模式：' + mode)

  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')

  // 后端访问路径,可以根据不同配置文件进行动态配置
  const webUrl = 'http://localhost:8080'
  const baseApi = env.VITE_BASE_API

  // 开发端口
  const port = env.port || env.npm_config_port || 9528

  // 构建路径
  const publicPath = env.APP_ENV === 'dev' ? '/' : './'

  console.info('NODE环境：' + env.NODE_ENV)
  console.info('应用环境：' + env.APP_ENV)
  console.info('后端访问路径：' + webUrl)
  console.info('构建路径：' + publicPath)

  return ({
    // 项目根目录
    root: 'src/',
    // 开发或生产环境服务的公共基础路径
    base: publicPath,
    // 定义全局常量替换方式（注意JSON.stringify()用于（根据文档中的建议）确保正确引用文本字符串替换）
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    // 需要用到的插件数组
    plugins: [
      vue()
    ],
    // 静态资源服务的文件夹
    publicDir: resolve('./public'),
    resolve: {
      // 别名
      alias: {
        '@': resolve('src')
      },
      // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    // 用于加载 .env 文件的目录
    envDir: resolve('./'),
    // 开发服务器选项
    server: {
      // 指定服务器应该监听哪个 IP 地址， 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
      host: '0.0.0.0',
      // 指定开发服务器端口
      port: port,
      // 启动时自动打开浏览器
      open: true,
      // 自定义代理规则
      proxy: {
        // 详情请看: https://cn.vitejs.dev/config/server-options.html#server-proxy
        [baseApi]: {
          // target: `http://localhost:8080`,
          target: webUrl,
          // 是否允许跨域
          changeOrigin: true,
          // 页面访问路径重写
          rewrite: (path) => path.replace(new RegExp('^' + baseApi), ''),
          // cookie路径重写
          cookiePathRewrite: {
            // 重写cookie路径,保证登陆后cookie能共用后端登陆的功能
            '/vescort': '/',
            '/crm': '/',
            '/sys': '/'
          }
        }
      }
    },
    // 构建选项
    build: {
      // 指定输出路径
      outDir: resolve('dist'),
      // 指定生成静态资源的存放路径（相对于 build.outDir）
      assetsDir: 'static',
      // 自定义底层的 Rollup 打包配置
      rollupOptions: {
        input: {
          main: resolve('src/index.html')
        }
      }
    }
  })
})
