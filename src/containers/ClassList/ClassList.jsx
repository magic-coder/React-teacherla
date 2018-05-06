import React from 'react'
import { DatePicker, Icon, Card, Modal, Avatar } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { getCookie } from '../../config/util'
import { getDoCourse } from '../../redux/action/course.action';
import { getTeacherList } from '../../redux/action/user.action';

const dateFormat = 'MM月DD日';
const timeFormat = 'YYYY-MM-DD'
const { Meta } = Card;
const todayTime = moment(new Date()).format(dateFormat);

@connect(state => state, { getDoCourse, getTeacherList })
class ClassList extends React.Component {
  constructor() {
    super()
    this.state = {
      dateTime: moment(new Date()).format(dateFormat),
      time: moment(new Date()).format(timeFormat),
      user_id: getCookie('user_id'),
      access_token:getCookie('token'),
      showAddTeacherModal: false
    }
    this.dateChange = this.dateChange.bind(this)
    this.getChange = this.getChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleCancel = () => {
    this.setState({
      showAddTeacherModal: false,
    });
  }


  dateChange(v, str) {
    this.setState({
      dateTime: str,
      time: v.format(timeFormat),
    },()=>{
      this.getChange()
    })
  }

  getChange(){
    this.props.getDoCourse({
      userid: this.state.user_id,
      token: this.state.access_token,
      datetime: this.state.time,
      teacherid: this.state.user_id,
    });
  }

  componentDidMount(){
    this.props.getDoCourse({
      userid: this.state.user_id,
      token: this.state.access_token,
      datetime: this.state.time,
      teacherid: this.state.user_id,
    });
  }

  render() {
    const disabledDate = function (current) {
      return  current  <= (new Date()).getTime()-1000*60*60*24;
    };
    return (<div>
      <h1>
        <span style={{
            color: '#1890ff'
          }}>{this.state.dateTime === todayTime ? '今天' : this.state.dateTime}</span>您要上的课程
      </h1>
      <DatePicker disabledDate={disabledDate} defaultValue={moment()} format={dateFormat} onChange={this.dateChange}/>
      {
        this.props.course.doCourse.length !== 0
          ? this.props.course.doCourse.map(element => {
              return (
                <Card
                  key={element.attend_id}
                  style={{
                    width: '100%',
                    marginTop: 10,
                  }}
                  actions={[<div onClick={()=>{
                    this.props.getTeacherList({
                      userid: this.state.user_id,
                      token: this.state.access_token,
                      attendid: element.attend_id
                    })
                    this.setState({
                      showAddTeacherModal: true,
                    })
                  }}><Icon type="team" /> 听课教师</div>]}
                >
                  <Meta title={element.course_name} description={<div>
                    <p>时间：{element.datetime} {element.which_day} {element.section}节</p>
                    <p>地点：{element.place}</p>
                    <p>班级：{element.grade}级{element.class_name}</p>
                  </div>} />
                </Card>
              )
            }
          )
          : <div style={{
            textAlign: 'center',
            marginTop: '50%',
          }}>无需要上的课程</div>
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
            marginTop: '10px',
          }}>
            无
          </div>
        }
      </Modal>
    </div>)
  }
}

export default ClassList
