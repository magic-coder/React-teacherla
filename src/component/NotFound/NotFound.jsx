import React from 'react'
import { Row, Col } from 'antd'

class NotFound extends React.PureComponent {
  render(){
    return(
      <Row>
        <Col span={12} offset={6}>
          <div style={{textAlign:'center'}}><h1>404 NotFound</h1></div>
        </Col>
      </Row>
    )
  }
}

export default NotFound
