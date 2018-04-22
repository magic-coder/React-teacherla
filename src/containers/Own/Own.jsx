import React from 'react'
import { Avatar, Card, Button } from 'antd';
import { connect } from 'react-redux'
import { clearAllCookie } from '../../config/util';
const { Meta } = Card;

@connect(state => state.user)
class Own extends React.PureComponent {
  render() {
    return (<div >
      <Card
        hoverable="hoverable"
        style={{
          marginTop: 5,
          width: '100%'
        }}
        actions={[<div>消息列表</div>,]}
        cover={
          <div style={{textAlign:'center',paddingTop:'20px'}}>
            <Avatar size="large" shape="square" src={this.props.avatar} />
          </div>
        }
      >
        <Meta style={{ textAlign: 'center' }} title={<div style={{ color: '#1890ff' }}>{this.props.teacher_name}</div>} description={this.props.department}/>
      </Card>
      <div style={{
        textAlign: 'center',
      }}>
        <Button type="danger" style={{
          marginTop: 30,
          width: '60%'
        }} onClick={() => {
          clearAllCookie();
          window.location.reload();
        }}>注销</Button>
      </div>
    </div>)
  }
}

export default Own
