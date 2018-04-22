import React from 'react'
import { Card, Avatar, Divider } from 'antd';
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
    console.log(this.props)
    return (<div>
      <h2>计划目标剩余
      <span style={{
          color: '#1890ff'
        }}> {this.props.task.num.appointundone} </span>
      节 | 必听课剩余
        <span style={{
            color: '#1890ff'
        }}> {this.props.task.num.freeundone} </span>
        节</h2>
      <Divider>必听课程剩余列表</Divider>
      {this.props.task.task !== 0
        ? this.props.task.task.map(element => {
          return(
            <Card key={element.task_id} style={{
              marginTop: 20,
              width: '100%'
            }}>
              <Meta avatar={<Avatar shape="square" src={element.avatar} />} title={element.teacher_name} />
            </Card>
          )
        })
        :null
      }
    </div>)
  }
}

export default ClassMustList
