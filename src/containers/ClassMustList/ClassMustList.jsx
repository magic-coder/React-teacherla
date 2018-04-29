import React from 'react'
import { Card, Avatar, Divider, Button, Icon, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getTask } from '../../redux/action/task.action'
import { teachList } from '../../redux/action/user.action'
import { getCookie } from '../../config/util'
const { Meta } = Card;

@connect(state => state, { getTask, teachList})
class ClassMustList extends React.Component {
  state = {
    showAddTeacherModal:false,
    user_id: getCookie('user_id'),
    access_token : getCookie('token')
  }

  handleCancel = () => {
    this.setState({
      showAddTeacherModal: false,
    });
  }

  componentDidMount(){
    this.props.getTask({ userid: this.state.user_id, token: this.state.access_token });
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
      <Divider>必须听课剩余 <span style={{
        color: '#1890ff'
      }}>{this.props.task.num.appointundone}</span> 节</Divider>
      {this.props.task.task.length !== 0
        ? this.props.task.task.map(element => {
          if(element.task_type === 1){
            console.log(element);
            return (
              <Card key={element.task_id} style={{
                marginTop: 20,
                width: '100%'
              }}>
                <Link to={`/choseplan/${element.teaching_teacher_id}`}>
                <Meta
                avatar={<Avatar shape="square" src={element.avatar} />} 
                title={<div>{element.teacher_name}
                    <Button style={{float:'right'}}>test</Button>
                  </div>} />
                </Link>
              </Card>
            )
          }
          return null
        })
        :<div style={{
          textAlign: 'center',
          marginTop: '50%',
        }}>
          无
        </div>
      }
      <Divider>自由听课剩余 <span style={{
        color: '#1890ff'
      }}>{this.props.task.num.freeundone}</span> 节</Divider>
      <Button onClick={()=>{
        this.props.teachList({ userid: this.state.user_id, token: this.state.access_token })
        this.setState({
          showAddTeacherModal: true,
        })
      }} type="primary"><Icon type="plus-circle" /> 添加期望听课教师</Button>
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
        :<div style={{
          textAlign: 'center',
          marginTop: '50%',
        }}>
          无
        </div>
      }
      <Modal
        title="选择教师"
        visible={this.state.showAddTeacherModal}
        onCancel={this.handleCancel}
      >
        {this.props.user.teacherList.length !== 0
          ? this.props.user.teacherList.map(element => {
            console.log(element)
              return (
                <Card key={element.teacher_id} style={{
                  marginTop: 20,
                  width: '100%'
                }}>
                  <Meta avatar={<Avatar shape="square" src={element.avatar} />} title={element.teacher_name} />
                </Card>
              )
          })
          : <div style={{
            textAlign: 'center',
            marginTop: '50%',
          }}>
            无
        </div>
        }
      </Modal>
    </div>)
  }
}

export default ClassMustList
