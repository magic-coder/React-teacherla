import React from 'react'
import { Avatar, Card, Button } from 'antd';
import { clearAllCookie } from '../../config/util';
const { Meta } = Card;

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
        cover={<div style={{textAlign:'center',paddingTop:'20px'}}><Avatar icon="smile" /></div>}>
        <Meta style={{textAlign:'center'}} title={<div style={{color:'#1890ff'}}>陈维斌</div>} description="教授"/>
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
