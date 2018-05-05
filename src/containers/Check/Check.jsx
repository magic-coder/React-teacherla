import React from 'react';
import axios from 'axios';
import { Card, Icon, Avatar, Modal, Divider } from 'antd';
import { message } from 'antd'
import { getCookie } from '../../config/util'
import { API, URL } from '../../redux/contants/content';

const { Meta } = Card;
const confirm = Modal.confirm;

class Check extends React.Component {
  state = {
    data:'',
    user_id: getCookie('user_id'),
    access_token : getCookie('token')
  }
  componentDidMount(){
    const teacherid = window.location.search.substring(1);
    axios.post(URL+API.USER.USERINFO,
      {
        userid: this.state.user_id,
        token: this.state.access_token,
        teacherid: teacherid,
      }
    ).then((res) => {
      if (res.status === 200 && res.data.code === 0) {
        this.setState({
          data: res.data.data
        })
        // message.success('完成签到')
      }else{
        message.error(res.data.msg)
      }
    })
  }
  render(){
    console.log(this.props);
    const teacherid = window.location.search.substring(1);
    const attendid = window.location.hash.substring(1)
    return(
      <div style={{
        marginLeft:'10px',
        marginTop:'10px',
        marginRight:'10px',
      }}>
          <Divider>教师听课验证</Divider>
          <Card
            actions={[<div onClick={
              ()=> {
                const state = this.state;
                const props = this.props;
                confirm({
                  title: '确定教师是否听取课程',
                  okText: '确定',
                  cancelText: '取消',
                  onOk() {
                    axios.post(`http://120.78.86.5/api/sign/signIn`,{
                        token:state.access_token,
                        userid:state.user_id,
                        teacherid:teacherid,
                        attendid:attendid,
                        ...props.match.params,
                    }).then((res)=>{
                        if (res.data.code === 0) {
                            message.success('完成签到')
                        } else {
                            message.error(res.data.msg)
                        }
                    })
                  },
                })
              }
            }><Icon type="edit" />确定完成听课</div>,]}
          >
          <Meta avatar={<Avatar shape="square" src={this.state.data.avatar} />} title={this.state.data.teacher_name} />
          </Card>
      </div>
    );
  }
}

export default Check
