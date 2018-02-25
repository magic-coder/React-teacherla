import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Loading from './component/Loading/Loading'
import IndexRouter from './router/IndexRouter'
import configStore from './redux/store'

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
        <IndexRouter/>
  </Provider>, document.getElementById('root'))
