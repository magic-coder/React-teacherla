import React from 'react'
import { Avatar, Col } from 'antd'

class Avatars extends React.PureComponent {
  render(){
    return(
      <Col>
        <Avatar style={{right:'0px'}} shape="square" icon="user" />
      </Col>
    )
  }
}

export default Avatars
