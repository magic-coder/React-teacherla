import React from 'react'
import { Avatar, Card, Button, Modal, Input, message } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux'
import { clearAllCookie } from '../../config/util';
import { getCookie } from '../../config/util'
const { Meta } = Card;

@connect(state => state.user)
class Own extends React.PureComponent {
  state = {
    showModal: false,
    oldpwd:'',
    newpwd:'',
    newpwdvalidate:'',
    user_id: getCookie('user_id'),
    access_token : getCookie('token')
  }

  handleCancel = () => {
    this.setState({
      showModal: false,
    });
  }

  handleChange = () => {
    axios.post('http://120.78.86.5/api/user/editpwd',{
      oldpwd:this.state.oldpwd,
      newpwd:this.state.newpwd,
      newpwdvalidate:this.state.newpwdvalidate,
      userid:this.state.user_id,
      token :this.state.access_token,
    }).then((res)=>{
      if (res.data.code === 0) {
        message.success('修改成功');
        this.setState({
          showModal: false,
        });
      } else {
        message.error(res.data.msg);
      }
    })
  }

  render() {
    console.log(this.state);
    return (<div >
      <Card
        hoverable="hoverable"
        style={{
          marginTop: 5,
          width: '100%'
        }}
        actions={[<div onClick={()=>{
          this.setState(
            {
              showModal:true
            }
          )
        }}>修改密码</div>]}
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
      {
        <Modal
          title="修改密码"
          visible={this.state.showModal}
          onCancel={this.handleCancel}
          onOk={this.handleChange}
        >
          <div style={{ marginBottom: 16 }}>
          <Input addonBefore="旧密码" type="password" onChange={(v)=>{
              this.setState({
                oldpwd:v.target.value
              })
          }} />
          </div>
          <div style={{ marginBottom: 16 }}>
          <Input addonBefore="新密码" type="password" onChange={(v)=>{
            this.setState({
              newpwd:v.target.value
            })
          }} />
          </div>
          <div style={{ marginBottom: 16 }}>
          <Input addonBefore="请再次输入旧密码" type="password" onChange={(v)=>{
            this.setState({
              newpwdvalidate:v.target.value
            })
          }} />
          </div>
        </Modal>
      }
    </div>)
  }
}

export default Own
