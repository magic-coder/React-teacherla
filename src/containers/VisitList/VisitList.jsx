import React from 'react'
import { DatePicker, Icon, Card, Avatar, Modal } from 'antd'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getCookie } from '../../config/util'
import { getLECourse } from '../../redux/action/course.action';
import { addPlanFromC } from '../../redux/action/plan.action';
import { timer } from '../../config/constance'

const dateFormat = 'MM月DD日';
const timeFormat = 'YYYY-MM-DD'
const { Meta } = Card;
const confirm = Modal.confirm;
const todayTime = moment(new Date()).format(dateFormat);

@connect(state => state, { getLECourse, addPlanFromC})
class VisitList extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      dateTime: moment(new Date()).format(dateFormat),
      time: moment(new Date()).format(timeFormat),
      user_id: getCookie('user_id'),
      access_token: getCookie('token')
    }
    this.dateChange = this.dateChange.bind(this)
    this.getChange = this.getChange.bind(this)
    this.handleClassStatus = this.handleClassStatus.bind(this)
  }

  dateChange(v, str) {
    this.setState({
      dateTime: str,
      time: v.format(timeFormat),
    }, () => {
      this.getChange()
    })
  }

  getChange() {
    this.props.getLECourse({
      userid: this.state.user_id,
      token: this.state.access_token,
      datetime: this.state.time,
    });
  }

  handleClassStatus(v) {
    this.props.history.push(`/classstatus/${v.course_id}`)
  }

  componentDidMount() {
    this.props.getLECourse({
      userid: this.state.user_id,
      token: this.state.access_token,
      datetime: this.state.time,
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
          }}>{this.state.dateTime === todayTime ? '今天' : this.state.dateTime}</span>可以听的课
      </h1>
      <DatePicker allowClear='false' disabledDate={disabledDate} defaultValue={moment()} format={dateFormat} onChange={this.dateChange}/>
      {this.props.course.lsCourse.length !== 0
        ? this.props.course.lsCourse.map((element) => {
          let checkIn = '课程完结';
          if (timer[element.section] > this.props.user.timeCheck){
            checkIn = (<div onClick={()=> {
              const props = this.props;
              const state = this.state;
              confirm({
                title: '确定是否添加该课程',
                okText: '确定',
                cancelText: '取消',
                onOk() {
                    props.addPlanFromC({
                      attendid: element.attend_id,
                      token: state.access_token,
                      userid: state.user_id,
                      teacherid: element.teacher_id
                    })
                },
              });
            }}>预约听课</div>)
          } else if (timer[element.section] < this.props.user.timeCheck && this.props.course.endTime[element.section] > this.props.user.timeCheck) {
              checkIn = '正在上课'
          } else if (this.props.course.endTime[element.section] < this.props.user.timeCheck) {
              checkIn = '课程完结'
          }
          return (
            <Card
              key={element.attend_id}
              style={{
                width: '100%',
                marginTop: 10,
              }}
              actions={
                [<div>{this.state.dateTime === todayTime
                  ? <div>{checkIn}</div>
                  : <div>预约听课</div>}
                  </div>,
                  <div>
                    <Link to={`/classstatus/${element.course_id}`}><Icon type="file-pdf" /> 课程资料</Link>
                  </div>]}
            >
              <Meta avatar={<Avatar shape="square" src={element.avatar} />} title={element.course_name} description={<div>
                <p>时间：{element.datetime} 第{element.weeks}周 {element.which_day} {element.section}节</p>
                <p>地点：{element.place}</p>
                <p>任课老师：{element.teacher_name}</p>
              </div>} />
            </Card>
          )
        })
        : <div style={{
          textAlign: 'center',
          marginTop: '50%',
        }}>无可听课程</div>
      }
    </div>)
  }
}

export default VisitList
