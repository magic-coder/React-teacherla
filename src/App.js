import React from 'react'
import {Provider} from 'react-redux'
import Loading from './component/Loading/Loading'
import IndexRouter from './router/IndexRouter'
import configStore from './redux/store'
import AuthRouter from './component/AuthRouter/AuthRouter'

const store = configStore()

class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <Loading>
          <IndexRouter/>
      </Loading>
    </Provider>)
  }
}

export default App
