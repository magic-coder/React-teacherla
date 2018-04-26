import React from 'react'
import { DatePicker, Icon, Card } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { getCookie } from '../../config/util'
import { getDoCourse } from '../../redux/action/course.action';

const dateFormat = 'MM月DD日';
const timeFormat = 'YYYY-MM-DD'
const { Meta } = Card;
const todayTime = moment(new Date()).format(dateFormat);
const user_id = getCookie('user_id');
const access_token = getCookie('token');

@connect(state => state, { getDoCourse, })
class ClassList extends React.Component {
  constructor() {
    super()
    this.state = {
      dateTime: moment(new Date()).format(dateFormat),
      time: moment(new Date()).format(timeFormat),
    }
    this.dateChange = this.dateChange.bind(this)
    this.getChange = this.getChange.bind(this)
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
      userid: user_id,
      token: access_token,
      datetime: this.state.time,
      teacherid: user_id,
    });
  }

  componentDidMount(){
    this.props.getDoCourse({
      userid: user_id,
      token: access_token,
      datetime: this.state.time,
      teacherid: user_id,
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
                  actions={[<div>课程详情</div>, <div><Icon type="team" /> 听课教师</div>]}
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
          : <div>无需要上的课程</div>
      }
    </div>)
  }
}

export default ClassList
