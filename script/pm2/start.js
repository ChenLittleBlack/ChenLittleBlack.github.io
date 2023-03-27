const { exec } = require('child_process')
const chalk = import('chalk')

exec('npm run dev', (err, stdout) => {
  if (err) {
    console.log(chalk.red('❌ 启动脚本执行失败'))
    console.log('err: ', err)
  } else {
    console.log(chalk.green('✅ 启动脚本执行成功'))
    console.log('stdout: ', stdout)
  }
})
