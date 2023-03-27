import axios from 'axios'

// 声明一个数组用于存储每个请求的取消函数和axios标识
const pending = []
const CancelToken = axios.CancelToken
const removePending = (config) => {
  for (const p in pending) {
    // 当当前请求在数组中存在时执行函数体
    if (pending[p].u === config.url + '&' + config.method) {
      // 执行取消操作
      pending[p].cancelToken('cancelToken')
      pending.splice(p, 1)
    }
  }
}

// 定义状态文本
const statusText = {
  400: {
    errKeyWord: '',
    errMsg: '请求错误'
  },
  404: {
    errKeyWord: 'Request failed with status code 404',
    errMsg: '请求不存在'
  },
  405: {
    errKeyWord: 'Method Not Allowed',
    errMsg: '请求的方法与接口不一致'
  },
  408: {
    errKeyWord: 'timeout of',
    errMsg: '请求超时，请刷新页面后再试'
  },
  500: {
    errKeyWord: 'Internal Server Error',
    errMsg: '服务器内部错误'
  }
}

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000 // request timeout
})

// 通过添加 XMLHttpRequest 头信息,可以拦截到服务端重新登陆的请求,否则服务端告知客户端跳转的行为会报错,从而无法拦截
service.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

service.defaults.cancelRepeatRequest = false

// request interceptor
service.interceptors.request.use(
  /* config => {
    // do something before request is sent
    // 封装请求头 -- 如果有需要的话，可以改造这里进行封装
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   // config.headers['X-Token'] = getToken()
    // }

    return config
  }*/
  config => {
    if (config['cancelRepeatRequest']) {
      // 在一个axios发送前执行一下取消操作
      removePending(config)
      config.cancelToken = new CancelToken((c) => {
        // 这里的axios标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        pending.push({ u: config.url + '&' + config.method, cancelToken: c })
      })
    }

    return Promise.resolve(config)
  },
  error => {
    // do something with request error
    if (error.message !== 'cancelToken') {
      console.log(error) // for debug
    }

    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    // 是否取消重复请求
    if (response.config['cancelRepeatRequest']) {
      // 在一个axios响应后再执行一下取消操作，把已经完成的请求从pending中移
      removePending(response.config)
    }
    return response.data
  },
  error => {
    const response = error.response
    // 不是取消请求才抛出异常
    if (error.message !== 'cancelToken') {
      // 判断是否有response
      if (response) {
        // 如果有response，则从response中取出errMsg
        error.message = response.data.msg || response.data.proMsg || response.data.message
        if (!error.message) {
          if (statusText[response.status]) {
            // 如果有response并且response.status !== 200，则从statusText中匹配code
            error.message = statusText[response.status].errMsg
          } else {
            // 否则直接取statusText
            error.message = response.statusText
          }
        }
      } else {
        // 如果没有response，则从statusText中匹配errKeyWord
        for (const key of Object.keys(statusText)) {
          const item = statusText[key]
          if (item.errKeyWord && error.message.indexOf(item.errKeyWord) > -1) {
            error.message = item.errMsg
            break
          }
        }
      }
      return Promise.reject(error)
    }
    // 在console中输出错误日志
    if (error.config) {
      console.error('请求【' + error.config.url + '】发生异常，异常信息：' + error.message)
    }
  }
)

export default service
