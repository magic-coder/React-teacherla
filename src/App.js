import React from 'react'
import Loading from './component/Loading/Loading'
import IndexRouter from './router/IndexRouter'

class App extends React.Component {
  render() {
    return (
      <div>
        <Loading>
          <IndexRouter/>
        </Loading>
      </div>)
  }
}

export default App
