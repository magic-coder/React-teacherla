import axios from 'axios'
import { Message } from 'antd'

//拦截请求
axios.interceptors.request.use(
  config => {
    console.log(config);
    // 这里写死一个token，你需要在这里取到你设置好的token的值
    // const token = 'this is a token';
    // if (token) {
    //     // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
    //     config.headers.Authorization = token;
    // }
    Message.loading('加载中',0)
    return config
  },
  error => {
      return Promise.reject(error)
  }
)

//拦截相应

axios.interceptors.response.use(function (config) {
  Message.destroy()
  return config;
})
