import React from 'react'
import { Avatar, Card } from 'antd';
const { Meta } = Card;

class Own extends React.PureComponent {
  render() {
    return (<div >
      <Card
        hoverable="hoverable"
        style={{
          marginTop: 20,
          width: '100%'
        }}
        actions={[<div>未听课记录</div>,<div>已听课记录</div>]}
        cover={<div style={{textAlign:'center',paddingTop:'20px'}}><Avatar icon="smile" /></div>}>
        <Meta style={{textAlign:'center'}} title={<div style={{color:'#1890ff'}}>陈维斌</div>} description="教授"/>
      </Card>
    </div>)
  }
}

export default Own
