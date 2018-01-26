import React from 'react'
import Loading from '../component/'

class Index extends React.Component {
  render() {
    return (<div>
      <Loading>
        {this.props.children}
      </Loading>
    </div>)
  }
}

export default Index
