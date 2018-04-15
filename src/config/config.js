import axios from 'axios'
import { Message } from 'antd'

//拦截请求
axios.interceptors.request.use(
  config => {
    Message.loading('加载中',0)
    return config
  },
  error => {
      return Promise.reject(error)
  }
)

//拦截响应
axios.interceptors.response.use(function (config) {
  Message.destroy()
  return config;
})
