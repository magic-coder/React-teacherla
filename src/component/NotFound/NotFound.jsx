import React from 'react'
import Logo from '../Logo/logo'

class NotFound extends React.PureComponent {
  render() {
    return (
      <div>
        <Logo/>
        <h1 style={{
            textAlign: 'center'
          }}>404</h1>
        <h2 style={{
            textAlign: 'center'
          }}>对不起，找不到此页面</h2>
      </div>
    )
  }
}

export default NotFound
