import React from 'react'
import {Alert} from 'antd'
import Loading from './component/Loading/Loading'

class App extends React.Component {
  render() {
    return (<div>
      <Loading>
        <Alert message="Alert message title" description="Further details about the context of this alert." type="info"/>
      </Loading>
    </div>)
  }
}

export default App
