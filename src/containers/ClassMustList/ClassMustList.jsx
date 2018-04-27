import React from 'react'
import { Card, Avatar, Divider, Button, Icon } from 'antd';
import { connect } from 'react-redux'
import { getTask } from '../../redux/action/task.action'
import { getCookie } from '../../config/util'
const { Meta } = Card;

@connect(state => state, {getTask})
class ClassMustList extends React.Component {
  componentDidMount(){
    const user_id = getCookie('user_id');
    const access_token = getCookie('token');
    this.props.getTask({ userid: user_id, token: access_token });
  }
  render() {
    return (<div>
      <h2>必须听课
      <span style={{
          color: '#1890ff'
        }}> {this.props.task.num.appoint} </span>
      节 | 自由听课
        <span style={{
            color: '#1890ff'
        }}> {this.props.task.num.free} </span>
        节</h2>
      <Button type="primary"><Icon type="plus-circle" /> 添加期望听课教师</Button>
      <Divider>必须听课剩余 <span style={{
        color: '#1890ff'
      }}>{this.props.task.num.appointundone}</span> 节</Divider>
      {this.props.task.task.length !== 0
        ? this.props.task.task.map(element => {
          if(element.task_type === 1){
            return (
              <Card key={element.task_id} style={{
                marginTop: 20,
                width: '100%'
              }}>
                <Meta avatar={<Avatar shape="square" src={element.avatar} />} title={element.teacher_name} />
              </Card>
            )
          }
          return null
        })
        :null
      }
      <Divider>自由听课剩余 <span style={{
        color: '#1890ff'
      }}>{this.props.task.num.freeundone}</span> 节</Divider>
      {this.props.task.task.length !== 0
        ? this.props.task.task.map(element => {
          if (element.task_type === 2) {
            return (
              <Card key={element.task_id} style={{
                marginTop: 20,
                width: '100%'
              }}>
                <Meta avatar={<Avatar shape="square" src={element.avatar} />} title={element.teacher_name} />
              </Card>
            )
          }
          return null
        })
        : null
      }
    </div>)
  }
}

export default ClassMustList
