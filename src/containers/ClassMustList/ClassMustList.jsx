import React from 'react'
import { Card, Avatar, Divider, Button, Icon, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTask, deleteTask, addTask } from '../../redux/action/task.action';
import { teachList } from '../../redux/action/user.action';
import { deletePlan } from '../../redux/action/plan.action';
import { getCookie } from '../../config/util';
const { Meta } = Card;
const ButtonGroup = Button.Group;
const confirm = Modal.confirm;

@connect(state => state, { getTask, deleteTask, addTask, teachList, deletePlan})
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
                        <Button type="primary" style={{ float: 'right' }}>
                          <Link to={`/choseplan/${element.teaching_teacher_id}#${element.task_id}`}>选择课程
                          </Link>
                        </Button>
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
                  width: '100%',
                  marginTop: 10,
                }}
                actions={
                  [<div
                    style={{color:'red'}}
                    onClick={()=>{
                      const props = this.props;
                      const state = this.state;
                      confirm({
                        title: '确定是否删除该课程',
                        okText: '确定',
                        cancelText: '取消',
                        okType: 'danger',
                        onOk() {
                          props.deletePlan({
                            userid:state.user_id,
                            token:state.access_token,
                            planid:element.plan_id
                          })
                        },
                      });
                  }}>取消听课</div>,
                  <div>
                    <Link to={`/classstatus/${element.attend_id}`}><Icon type="file-pdf" /> 课程资料</Link>
                  </div>]}
              >
                <Meta
                  avatar={<Avatar shape="square" src={element.avatar} />}
                  title={element.teacher_name}
                  description={
                    <div>
                      <p>课程名称：{element.course_name}</p>
                      <p>时间：{element.datetime} 第{element.weeks}周 {element.which_day} {element.section}节</p>
                      <p>地点：{element.place}</p>
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
                        <ButtonGroup style={{ float: 'right' }}>
                            <Button type="primary">
                              <Link to={`/choseplan/${element.teaching_teacher_id}#${element.task_id}`}>选择课程
                              </Link>
                            </Button>
                            <Button onClick={()=>{
                              const props = this.props;
                              const state = this.state;
                              confirm({
                                title: '确定是否删除该课程',
                                okText: '确定',
                                cancelText: '取消',
                                okType: 'danger',
                                onOk() {
                                  props.deleteTask({
                                    userid:state.user_id,
                                    token:state.access_token,
                                    taskid:element.task_id})
                                },
                              });}} type="danger">
                              删除任务
                            </Button>
                        </ButtonGroup>
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
                    width: '100%',
                    marginTop: 10,
                  }}
                  actions={
                    [<div
                      style={{color:'red'}}
                      onClick={()=>{
                        const props = this.props;
                        const state = this.state;
                        confirm({
                          title: '确定是否删除该课程',
                          okText: '确定',
                          cancelText: '取消',
                          okType: 'danger',
                          onOk() {
                            props.deletePlan({
                              userid:state.user_id,
                              token:state.access_token,
                              planid:element.plan_id
                            })
                          },
                        });
                    }}>取消听课</div>,
                    <div>
                      <Link to={`/classstatus/${element.teaching_teacher_id}`}><Icon type="file-pdf" /> 课程资料</Link>
                    </div>]}
                >
                  <Meta
                    avatar={<Avatar shape="square" src={element.avatar} />}
                    title={element.teacher_name}
                    description={
                      <div>
                          <p>课程名称：{element.course_name}</p>
                          <p>时间：{element.datetime} 第{element.weeks}周 {element.which_day} {element.section}节</p>
                          <p>地点：{element.place}</p>
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
                <Card onClick={()=>{
                  this.props.addTask({
                    userid:this.state.user_id,
                    token:this.state.access_token,
                    teacherid: element.teacher_id,
                  })
                }} key={element.teacher_id} style={{
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
