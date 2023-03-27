// PM2 配置文件: https://juejin.cn/post/6926357629375610887

module.exports = {
  apps: [
    {
      // 应用程序名称
      name: 'ldkroom',
      // 执行文件
      script: 'script/pm2/start.js',
      // 服务占用的内存超过200M，自动进行重启
      max_memory_restart: '200M',
      // 自定义应用程序的错误日志文件(错误日志文件)
      error_file: './logs/app-err.log',
      // 自定义应用程序日志文件(正常日志文件)
      out_file: './logs/app-out.log'
    }
  ]
}
