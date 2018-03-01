import axios from 'axios'
import { Message } from 'antd'

//拦截请求
axios.interceptors.request.use(function (config) {
  Message.loading('加载中',0)
  return config;
})

//拦截相应

axios.interceptors.response.use(function (config) {
  Message.destroy()
  return config;
})
