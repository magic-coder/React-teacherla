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
          if (element.task_type === 1 && element.task_status === 0){
            return (
              <Card 
                key={element.task_id}
                style={{
                  marginTop: 20,
                  width: '100%'
                }}
              >
                <Meta
                  avatar={<Avatar shape="square" src={element.avatar} />}
                  title={
                    <div>{element.teacher_name}
                        <Button style={{ float: 'right' }}>
                          <Link to={`/choseplan/${element.teaching_teacher_id}`}>选择课程
                          </Link>
                        </Button>
                    </div>
                  }
                />
              </Card>
            )
          } else if (element.task_type === 1 && element.task_status === 1) {
            return (
              <Card
                key={element.task_id}
                style={{
                  width: '100%',
                  marginTop: 10,
                }}
                actions={
                  [<div>取消听课</div>,
                  <div>
                    <Link to={`/classstatus/${element.course_id}`}><Icon type="file-pdf" /> 课程资料</Link>
                  </div>]}
              >
                <Meta 
                  avatar={<Avatar shape="square" src={element.avatar} />} 
                  title={element.course_name} 
                  description={
                    <div>
                      <p>时间：{element.datetime} 第{element.weeks}周 {element.which_day} {element.section}节</p>
                      <p>地点：{element.place}</p>
                      <p>任课老师：{element.teacher_name}</p>
                    </div>
                  }
                />
              </Card>
            )
          } else if (element.task_type === 1 && element.task_status === 2) {
            return (
              <Card
                key={element.task_id}
                style={{
                  marginTop: 20,
                  width: '100%'
                }}
              >
                <Meta
                  avatar={<Avatar shape="square" src={element.avatar} />}
                  title={
                    <div>{element.teacher_name}
                      <Button style={{ float: 'right' }} disabled>已完成</Button>
                    </div>
                  }
                />
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
      {
        this.props.task.num.freenotask !== 0
        ?
          <Button
            onClick={() => {
              this.props.teachList({ userid: this.state.user_id, token: this.state.access_token })
              this.setState({
                showAddTeacherModal: true,
              })
            }}
            style={{
              height: '74px',
              width: '100%'
            }}
          ><Icon type="plus-circle" /> 添加期望听课教师</Button>
        :
        null
      }
      {
        this.props.task.task.length !== 0
        ? this.props.task.task.map(element => {
            if (element.task_type === 2 && element.task_status === 0) {
              return (
                <Card
                  key={element.task_id}
                  style={{
                    marginTop: 20,
                    width: '100%'
                  }}
                >
                  <Meta
                    avatar={<Avatar shape="square" src={element.avatar} />}
                    title={
                      <div>{element.teacher_name}
                        <Button style={{ float: 'right' }}>
                          <Link to={`/choseplan/${element.teaching_teacher_id}`}>选择课程
                          </Link>
                        </Button>
                      </div>
                    }
                  />
                </Card>
              )
            } else if (element.task_type === 2 && element.task_status === 1) {
              return (
                <Card
                  key={element.task_id}
                  style={{
                    width: '100%',
                    marginTop: 10,
                  }}
                  actions={
                    [<div>取消听课</div>,
                    <div>
                      <Link to={`/classstatus/${element.course_id}`}><Icon type="file-pdf" /> 课程资料</Link>
                    </div>]}
                >
                  <Meta
                    avatar={<Avatar shape="square" src={element.avatar} />}
                    title={element.course_name}
                    description={
                      <div>
                        <p>时间：{element.datetime} 第{element.weeks}周 {element.which_day} {element.section}节</p>
                        <p>地点：{element.place}</p>
                        <p>任课老师：{element.teacher_name}</p>
                      </div>
                    }
                  />
                </Card>
              )
            } else if (element.task_type === 2 && element.task_status === 2) {
              return (
                <Card
                  key={element.task_id}
                  style={{
                    marginTop: 20,
                    width: '100%'
                  }}
                >
                  <Meta
                    avatar={<Avatar shape="square" src={element.avatar} />}
                    title={
                      <div>{element.teacher_name}
                        <Button style={{ float: 'right' }} disabled>已完成</Button>
                      </div>
                    }
                  />
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
        {
          this.props.user.teacherList.length !== 0
          ? this.props.user.teacherList.map(element => {
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
