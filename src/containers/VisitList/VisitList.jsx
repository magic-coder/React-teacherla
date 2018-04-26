import React from 'react'
import { DatePicker, Icon, Card, Avatar } from 'antd'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getCookie } from '../../config/util'
import { getLECourse } from '../../redux/action/course.action';

const dateFormat = 'MM月DD日';
const timeFormat = 'YYYY-MM-DD'
const { Meta } = Card;
const todayTime = moment(new Date()).format(dateFormat);
const user_id = getCookie('user_id');
const access_token = getCookie('token');

@connect(state => state, { getLECourse})
class VisitList extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      dateTime: moment(new Date()).format(dateFormat),
      time: moment(new Date()).format(timeFormat),
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
      userid: user_id,
      token: access_token,
      datetime: this.state.time,
    });
  }

  handleClassStatus(v) {
    this.props.history.push(`/classstatus/${v.course_id}`)
  }

  componentDidMount() {
    this.props.getLECourse({
      userid: user_id,
      token: access_token,
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
      {this.props.course.lsCourse !== 0
        ? this.props.course.lsCourse.map((element) => {
          return (
            <Card
              key={element.attend_id}
              style={{
                width: '100%',
                marginTop: 10,
              }}
              actions={
                [<div>{this.state.dateTime === todayTime 
                  ? <div><Link to="class">随堂听课</Link></div> 
                  : '预约听课'}
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
        : <div>无可听课程</div>
      }
    </div>)
  }
}

export default VisitList
