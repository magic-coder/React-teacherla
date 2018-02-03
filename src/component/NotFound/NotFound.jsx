import React from 'react'
import { Row, Col } from 'antd'

class NotFound extends React.PureComponent {
  render(){
    return(
      <Row>
        <Col span={12} offset={6}>
          404 NotFound
        </Col>
      </Row>
    )
  }
}

export default NotFound
