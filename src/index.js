import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import IndexRouter from './router/indexRouter'
import configStore from './redux/store'
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import './config/config'

const store = configStore()

ReactDOM.render(<Provider store={store}>
  <LocaleProvider locale={zh_CN}>
    <IndexRouter/>
  </LocaleProvider>
</Provider>, document.getElementById('root'))
